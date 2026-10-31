import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — CONTROL_SYSTEMS_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const CONTROL_SYSTEMS_PRACTICE: Question[] = [
  {
    "id": "PRAC-CTL-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 1)}{1 + 2/(s + 1)} = \\frac{2}{s + 1 + 2} = \\frac{2}{s + 3}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{3} = 0.67$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.67",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.67$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.55,
      0.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 2)}{1 + 3/(s + 2)} = \\frac{3}{s + 2 + 3} = \\frac{3}{s + 5}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{5} = 0.6$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.6",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.6$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.52,
      0.62
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 3)}{1 + 4/(s + 3)} = \\frac{4}{s + 3 + 4} = \\frac{4}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{7} = 0.57$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.57",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.57$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.51,
      0.61
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 4)}{1 + 5/(s + 4)} = \\frac{5}{s + 4 + 5} = \\frac{5}{s + 9}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{9} = 0.56$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.56",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.56$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.81,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 1)}{1 + 6/(s + 1)} = \\frac{6}{s + 1 + 6} = \\frac{6}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{7} = 0.86$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.86",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.86$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 2)}{1 + 2/(s + 2)} = \\frac{2}{s + 2 + 2} = \\frac{2}{s + 4}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{4} = 0.5$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.5",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.5$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 3)}{1 + 3/(s + 3)} = \\frac{3}{s + 3 + 3} = \\frac{3}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{6} = 0.5$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.5",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.5$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 4)}{1 + 4/(s + 4)} = \\frac{4}{s + 4 + 4} = \\frac{4}{s + 8}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{8} = 0.5$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.5",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.5$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.78,
      0.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 1)}{1 + 5/(s + 1)} = \\frac{5}{s + 1 + 5} = \\frac{5}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{6} = 0.83$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.83",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.83$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.7,
      0.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 2)}{1 + 6/(s + 2)} = \\frac{6}{s + 2 + 6} = \\frac{6}{s + 8}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{8} = 0.75$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.75",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.75$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.35,
      0.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 3)}{1 + 2/(s + 3)} = \\frac{2}{s + 3 + 2} = \\frac{2}{s + 5}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{5} = 0.4$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.4",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.4$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.38,
      0.48
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 4)}{1 + 3/(s + 4)} = \\frac{3}{s + 4 + 3} = \\frac{3}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{7} = 0.43$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.43",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.43$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.75,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 1)}{1 + 4/(s + 1)} = \\frac{4}{s + 1 + 4} = \\frac{4}{s + 5}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{5} = 0.8$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.8",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.8$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 2)}{1 + 5/(s + 2)} = \\frac{5}{s + 2 + 5} = \\frac{5}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{7} = 0.71$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.71",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.71$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 3)}{1 + 6/(s + 3)} = \\frac{6}{s + 3 + 6} = \\frac{6}{s + 9}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{9} = 0.67$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.67",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.67$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.28,
      0.38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 4)}{1 + 2/(s + 4)} = \\frac{2}{s + 4 + 2} = \\frac{2}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{6} = 0.33$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.33",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.33$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.7,
      0.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 1)}{1 + 3/(s + 1)} = \\frac{3}{s + 1 + 3} = \\frac{3}{s + 4}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{4} = 0.75$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.75",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.75$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 2)}{1 + 4/(s + 2)} = \\frac{4}{s + 2 + 4} = \\frac{4}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{6} = 0.67$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.67",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.67$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.57,
      0.67
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 3)}{1 + 5/(s + 3)} = \\frac{5}{s + 3 + 5} = \\frac{5}{s + 8}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{8} = 0.62$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.62",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.62$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.55,
      0.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 4)}{1 + 6/(s + 4)} = \\frac{6}{s + 4 + 6} = \\frac{6}{s + 10}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{10} = 0.6$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.6",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.6$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 1)}{1 + 2/(s + 1)} = \\frac{2}{s + 1 + 2} = \\frac{2}{s + 3}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{3} = 0.67$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.67",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.67$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.55,
      0.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 2)}{1 + 3/(s + 2)} = \\frac{3}{s + 2 + 3} = \\frac{3}{s + 5}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{5} = 0.6$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.6",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.6$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.52,
      0.62
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 3)}{1 + 4/(s + 3)} = \\frac{4}{s + 3 + 4} = \\frac{4}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{7} = 0.57$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.57",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.57$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.51,
      0.61
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 4)}{1 + 5/(s + 4)} = \\frac{5}{s + 4 + 5} = \\frac{5}{s + 9}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{9} = 0.56$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.56",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.56$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.81,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 1)}{1 + 6/(s + 1)} = \\frac{6}{s + 1 + 6} = \\frac{6}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{7} = 0.86$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.86",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.86$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 2)}{1 + 2/(s + 2)} = \\frac{2}{s + 2 + 2} = \\frac{2}{s + 4}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{4} = 0.5$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.5",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.5$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 3)}{1 + 3/(s + 3)} = \\frac{3}{s + 3 + 3} = \\frac{3}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{6} = 0.5$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.5",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.5$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 4)}{1 + 4/(s + 4)} = \\frac{4}{s + 4 + 4} = \\frac{4}{s + 8}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{8} = 0.5$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.5",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.5$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.78,
      0.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 1)}{1 + 5/(s + 1)} = \\frac{5}{s + 1 + 5} = \\frac{5}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{6} = 0.83$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.83",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.83$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.7,
      0.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 2)}{1 + 6/(s + 2)} = \\frac{6}{s + 2 + 6} = \\frac{6}{s + 8}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{8} = 0.75$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.75",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.75$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.35,
      0.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 3)}{1 + 2/(s + 3)} = \\frac{2}{s + 3 + 2} = \\frac{2}{s + 5}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{5} = 0.4$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.4",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.4$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.38,
      0.48
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 4)}{1 + 3/(s + 4)} = \\frac{3}{s + 4 + 3} = \\frac{3}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{7} = 0.43$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.43",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.43$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.75,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 1)}{1 + 4/(s + 1)} = \\frac{4}{s + 1 + 4} = \\frac{4}{s + 5}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{5} = 0.8$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.8",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.8$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 2)}{1 + 5/(s + 2)} = \\frac{5}{s + 2 + 5} = \\frac{5}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{7} = 0.71$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.71",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.71$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 3)}{1 + 6/(s + 3)} = \\frac{6}{s + 3 + 6} = \\frac{6}{s + 9}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{9} = 0.67$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.67",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.67$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.28,
      0.38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 4)}{1 + 2/(s + 4)} = \\frac{2}{s + 4 + 2} = \\frac{2}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{6} = 0.33$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.33",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.33$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.7,
      0.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 1)}{1 + 3/(s + 1)} = \\frac{3}{s + 1 + 3} = \\frac{3}{s + 4}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{4} = 0.75$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.75",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.75$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 2)}{1 + 4/(s + 2)} = \\frac{4}{s + 2 + 4} = \\frac{4}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{6} = 0.67$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.67",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.67$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.57,
      0.67
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 3)}{1 + 5/(s + 3)} = \\frac{5}{s + 3 + 5} = \\frac{5}{s + 8}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{8} = 0.62$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.62",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.62$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.55,
      0.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 4)}{1 + 6/(s + 4)} = \\frac{6}{s + 4 + 6} = \\frac{6}{s + 10}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{10} = 0.6$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.6",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.6$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 1)}{1 + 2/(s + 1)} = \\frac{2}{s + 1 + 2} = \\frac{2}{s + 3}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{3} = 0.67$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.67",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.67$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.55,
      0.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 2)}{1 + 3/(s + 2)} = \\frac{3}{s + 2 + 3} = \\frac{3}{s + 5}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{5} = 0.6$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.6",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.6$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.52,
      0.62
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 3)}{1 + 4/(s + 3)} = \\frac{4}{s + 3 + 4} = \\frac{4}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{7} = 0.57$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.57",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.57$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.51,
      0.61
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 4)}{1 + 5/(s + 4)} = \\frac{5}{s + 4 + 5} = \\frac{5}{s + 9}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{9} = 0.56$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.56",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.56$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.81,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 1)}{1 + 6/(s + 1)} = \\frac{6}{s + 1 + 6} = \\frac{6}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{7} = 0.86$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.86",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.86$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 2)}{1 + 2/(s + 2)} = \\frac{2}{s + 2 + 2} = \\frac{2}{s + 4}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{4} = 0.5$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.5",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.5$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 3)}{1 + 3/(s + 3)} = \\frac{3}{s + 3 + 3} = \\frac{3}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{6} = 0.5$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.5",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.5$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 4)}{1 + 4/(s + 4)} = \\frac{4}{s + 4 + 4} = \\frac{4}{s + 8}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{8} = 0.5$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.5",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.5$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.78,
      0.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 1)}{1 + 5/(s + 1)} = \\frac{5}{s + 1 + 5} = \\frac{5}{s + 6}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{6} = 0.83$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.83",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.83$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.7,
      0.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 2)}{1 + 6/(s + 2)} = \\frac{6}{s + 2 + 6} = \\frac{6}{s + 8}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{8} = 0.75$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.75",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.75$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{2}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.35,
      0.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{2}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{2/(s + 3)}{1 + 2/(s + 3)} = \\frac{2}{s + 3 + 2} = \\frac{2}{s + 5}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{2}{5} = 0.4$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.4",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 2/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.4$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{3}{s + 4}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.38,
      0.48
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{3}{s + 4}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{3/(s + 4)}{1 + 3/(s + 4)} = \\frac{3}{s + 4 + 3} = \\frac{3}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{3}{7} = 0.43$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.43",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 3/4$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.43$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{4}{s + 1}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.75,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{4}{s + 1}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{4/(s + 1)}{1 + 4/(s + 1)} = \\frac{4}{s + 1 + 4} = \\frac{4}{s + 5}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{4}{5} = 0.8$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.8",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 4/1$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.8$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{5}{s + 2}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{5}{s + 2}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{5/(s + 2)}{1 + 5/(s + 2)} = \\frac{5}{s + 2 + 5} = \\frac{5}{s + 7}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{5}{7} = 0.71$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.71",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 5/2$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.71$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transfer Function & Signal Flow Graphs",
    "subject": "Control Systems",
    "topic": "Transfer Function & Signal Flow Graphs",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{6}{s + 3}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{C(s)}{R(s)}\\right|_{s=0}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the closed-loop DC gain of a negative feedback control system.",
      "givenInformationAndAssumptions": [
        "Forward transfer function $G(s) = \\frac{6}{s + 3}$",
        "Feedback $H(s) = 1$"
      ],
      "relevantConcept": "Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}",
          "terms": [
            {
              "term": "T(0)",
              "explanation": "Closed-loop DC steady-state gain"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute closed-loop transfer function: $T(s) = \\frac{6/(s + 3)}{1 + 6/(s + 3)} = \\frac{6}{s + 3 + 6} = \\frac{6}{s + 9}$.",
        "Step 2: Evaluate at $s = 0$: $T(0) = \\frac{6}{9} = 0.67$."
      ],
      "finalAnswerWithUnits": "T(0) = 0.67",
      "alternativeApproachOrShortcut": "Direct evaluation: $G(0) = 6/3$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = 0.67$.",
      "commonMistakes": [
        "Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Transfer Function",
      "Negative Feedback",
      "DC Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.5$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      15.8,
      16.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.5$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.25} = \\sqrt{0.75} \\approx 0.8660$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.5}{0.8660} \\approx -1.8138$.",
        "Step 4: $\\% M_p = e^{-1.8138} \\times 100\\% \\approx 16.3\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 16.3%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.6$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      9.0,
      10.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.6$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.6$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.36} = \\sqrt{0.64} \\approx 0.8000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.6}{0.8000} \\approx -2.3562$.",
        "Step 4: $\\% M_p = e^{-2.3562} \\times 100\\% \\approx 9.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 9.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.7$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      4.1,
      5.1
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.7$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.7$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.49} = \\sqrt{0.51} \\approx 0.7141$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.7}{0.7141} \\approx -3.0794$.",
        "Step 4: $\\% M_p = e^{-3.0794} \\times 100\\% \\approx 4.6\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 4.6%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.8$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      1.0,
      2.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.8$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.8$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.64} = \\sqrt{0.36} \\approx 0.6000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.8}{0.6000} \\approx -4.1888$.",
        "Step 4: $\\% M_p = e^{-4.1888} \\times 100\\% \\approx 1.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 1.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.5$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      15.8,
      16.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.5$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.25} = \\sqrt{0.75} \\approx 0.8660$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.5}{0.8660} \\approx -1.8138$.",
        "Step 4: $\\% M_p = e^{-1.8138} \\times 100\\% \\approx 16.3\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 16.3%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.6$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      9.0,
      10.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.6$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.6$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.36} = \\sqrt{0.64} \\approx 0.8000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.6}{0.8000} \\approx -2.3562$.",
        "Step 4: $\\% M_p = e^{-2.3562} \\times 100\\% \\approx 9.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 9.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.7$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      4.1,
      5.1
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.7$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.7$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.49} = \\sqrt{0.51} \\approx 0.7141$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.7}{0.7141} \\approx -3.0794$.",
        "Step 4: $\\% M_p = e^{-3.0794} \\times 100\\% \\approx 4.6\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 4.6%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.8$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      1.0,
      2.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.8$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.8$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.64} = \\sqrt{0.36} \\approx 0.6000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.8}{0.6000} \\approx -4.1888$.",
        "Step 4: $\\% M_p = e^{-4.1888} \\times 100\\% \\approx 1.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 1.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.5$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      15.8,
      16.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.5$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.25} = \\sqrt{0.75} \\approx 0.8660$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.5}{0.8660} \\approx -1.8138$.",
        "Step 4: $\\% M_p = e^{-1.8138} \\times 100\\% \\approx 16.3\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 16.3%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.6$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      9.0,
      10.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.6$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.6$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.36} = \\sqrt{0.64} \\approx 0.8000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.6}{0.8000} \\approx -2.3562$.",
        "Step 4: $\\% M_p = e^{-2.3562} \\times 100\\% \\approx 9.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 9.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.7$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      4.1,
      5.1
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.7$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.7$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.49} = \\sqrt{0.51} \\approx 0.7141$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.7}{0.7141} \\approx -3.0794$.",
        "Step 4: $\\% M_p = e^{-3.0794} \\times 100\\% \\approx 4.6\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 4.6%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.8$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      1.0,
      2.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.8$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.8$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.64} = \\sqrt{0.36} \\approx 0.6000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.8}{0.6000} \\approx -4.1888$.",
        "Step 4: $\\% M_p = e^{-4.1888} \\times 100\\% \\approx 1.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 1.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.5$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      15.8,
      16.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.5$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.25} = \\sqrt{0.75} \\approx 0.8660$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.5}{0.8660} \\approx -1.8138$.",
        "Step 4: $\\% M_p = e^{-1.8138} \\times 100\\% \\approx 16.3\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 16.3%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.6$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      9.0,
      10.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.6$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.6$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.36} = \\sqrt{0.64} \\approx 0.8000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.6}{0.8000} \\approx -2.3562$.",
        "Step 4: $\\% M_p = e^{-2.3562} \\times 100\\% \\approx 9.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 9.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.7$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      4.1,
      5.1
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.7$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.7$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.49} = \\sqrt{0.51} \\approx 0.7141$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.7}{0.7141} \\approx -3.0794$.",
        "Step 4: $\\% M_p = e^{-3.0794} \\times 100\\% \\approx 4.6\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 4.6%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.8$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      1.0,
      2.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.8$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.8$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.64} = \\sqrt{0.36} \\approx 0.6000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.8}{0.6000} \\approx -4.1888$.",
        "Step 4: $\\% M_p = e^{-4.1888} \\times 100\\% \\approx 1.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 1.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.5$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      15.8,
      16.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.5$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.25} = \\sqrt{0.75} \\approx 0.8660$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.5}{0.8660} \\approx -1.8138$.",
        "Step 4: $\\% M_p = e^{-1.8138} \\times 100\\% \\approx 16.3\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 16.3%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.6$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      9.0,
      10.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.6$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.6$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.36} = \\sqrt{0.64} \\approx 0.8000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.6}{0.8000} \\approx -2.3562$.",
        "Step 4: $\\% M_p = e^{-2.3562} \\times 100\\% \\approx 9.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 9.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.7$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      4.1,
      5.1
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.7$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.7$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.49} = \\sqrt{0.51} \\approx 0.7141$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.7}{0.7141} \\approx -3.0794$.",
        "Step 4: $\\% M_p = e^{-3.0794} \\times 100\\% \\approx 4.6\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 4.6%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.8$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      1.0,
      2.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.8$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.8$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.64} = \\sqrt{0.36} \\approx 0.6000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.8}{0.6000} \\approx -4.1888$.",
        "Step 4: $\\% M_p = e^{-4.1888} \\times 100\\% \\approx 1.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 1.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.5$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      15.8,
      16.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.5$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.25} = \\sqrt{0.75} \\approx 0.8660$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.5}{0.8660} \\approx -1.8138$.",
        "Step 4: $\\% M_p = e^{-1.8138} \\times 100\\% \\approx 16.3\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 16.3%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.6$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      9.0,
      10.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.6$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.6$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.36} = \\sqrt{0.64} \\approx 0.8000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.6}{0.8000} \\approx -2.3562$.",
        "Step 4: $\\% M_p = e^{-2.3562} \\times 100\\% \\approx 9.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 9.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.7$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      4.1,
      5.1
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.7$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.7$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.49} = \\sqrt{0.51} \\approx 0.7141$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.7}{0.7141} \\approx -3.0794$.",
        "Step 4: $\\% M_p = e^{-3.0794} \\times 100\\% \\approx 4.6\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 4.6%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.8$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      1.0,
      2.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.8$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.8$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.64} = \\sqrt{0.36} \\approx 0.6000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.8}{0.6000} \\approx -4.1888$.",
        "Step 4: $\\% M_p = e^{-4.1888} \\times 100\\% \\approx 1.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 1.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.5$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      15.8,
      16.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.5$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.25} = \\sqrt{0.75} \\approx 0.8660$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.5}{0.8660} \\approx -1.8138$.",
        "Step 4: $\\% M_p = e^{-1.8138} \\times 100\\% \\approx 16.3\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 16.3%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.6$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      9.0,
      10.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.6$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.6$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.36} = \\sqrt{0.64} \\approx 0.8000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.6}{0.8000} \\approx -2.3562$.",
        "Step 4: $\\% M_p = e^{-2.3562} \\times 100\\% \\approx 9.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 9.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.7$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      4.1,
      5.1
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.7$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.7$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.49} = \\sqrt{0.51} \\approx 0.7141$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.7}{0.7141} \\approx -3.0794$.",
        "Step 4: $\\% M_p = e^{-3.0794} \\times 100\\% \\approx 4.6\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 4.6%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.8$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      1.0,
      2.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.8$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.8$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.64} = \\sqrt{0.36} \\approx 0.6000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.8}{0.6000} \\approx -4.1888$.",
        "Step 4: $\\% M_p = e^{-4.1888} \\times 100\\% \\approx 1.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 1.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.5$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      15.8,
      16.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.5$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.25} = \\sqrt{0.75} \\approx 0.8660$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.5}{0.8660} \\approx -1.8138$.",
        "Step 4: $\\% M_p = e^{-1.8138} \\times 100\\% \\approx 16.3\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 16.3%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = 0.6$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      9.0,
      10.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.6$",
        "Unit step input"
      ],
      "relevantConcept": "Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%",
          "terms": [
            {
              "term": "M_p",
              "explanation": "Peak overshoot ratio above steady state"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Given $\\zeta = 0.6$.",
        "Step 2: $\\sqrt{1 - \\zeta^2} = \\sqrt{1 - 0.36} = \\sqrt{0.64} \\approx 0.8000$.",
        "Step 3: Exponent: $\\frac{-\\pi \\times 0.6}{0.8000} \\approx -2.3562$.",
        "Step 4: $\\% M_p = e^{-2.3562} \\times 100\\% \\approx 9.5\\%.$"
      ],
      "finalAnswerWithUnits": "%Mp = 9.5%",
      "alternativeApproachOrShortcut": "Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
      "commonMistakes": [
        "Confusing radians and degrees in the exponent."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Peak Overshoot",
      "Damping Ratio",
      "Second-Order System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{10}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.15,
      0.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{10}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{10}{s(s + 2)} \\right] = \\frac{10}{0 + 2} = 5.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{5.0} = 0.2$."
      ],
      "finalAnswerWithUnits": "ess = 0.2",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{10} = 0.2$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{15}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.08,
      0.18
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{15}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{15}{s(s + 2)} \\right] = \\frac{15}{0 + 2} = 7.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{7.5} = 0.13$."
      ],
      "finalAnswerWithUnits": "ess = 0.13",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{15} = 0.13$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{20}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.05,
      0.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{20}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{20}{s(s + 2)} \\right] = \\frac{20}{0 + 2} = 10.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{10.0} = 0.1$."
      ],
      "finalAnswerWithUnits": "ess = 0.1",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{20} = 0.1$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{25}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.03,
      0.13
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{25}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{25}{s(s + 2)} \\right] = \\frac{25}{0 + 2} = 12.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{12.5} = 0.08$."
      ],
      "finalAnswerWithUnits": "ess = 0.08",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{25} = 0.08$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{30}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.02,
      0.12
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{30}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{30}{s(s + 2)} \\right] = \\frac{30}{0 + 2} = 15.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{15.0} = 0.07$."
      ],
      "finalAnswerWithUnits": "ess = 0.07",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{30} = 0.07$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{10}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.15,
      0.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{10}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{10}{s(s + 2)} \\right] = \\frac{10}{0 + 2} = 5.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{5.0} = 0.2$."
      ],
      "finalAnswerWithUnits": "ess = 0.2",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{10} = 0.2$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{15}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.08,
      0.18
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{15}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{15}{s(s + 2)} \\right] = \\frac{15}{0 + 2} = 7.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{7.5} = 0.13$."
      ],
      "finalAnswerWithUnits": "ess = 0.13",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{15} = 0.13$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{20}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.05,
      0.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{20}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{20}{s(s + 2)} \\right] = \\frac{20}{0 + 2} = 10.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{10.0} = 0.1$."
      ],
      "finalAnswerWithUnits": "ess = 0.1",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{20} = 0.1$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{25}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.03,
      0.13
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{25}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{25}{s(s + 2)} \\right] = \\frac{25}{0 + 2} = 12.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{12.5} = 0.08$."
      ],
      "finalAnswerWithUnits": "ess = 0.08",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{25} = 0.08$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{30}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.02,
      0.12
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{30}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{30}{s(s + 2)} \\right] = \\frac{30}{0 + 2} = 15.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{15.0} = 0.07$."
      ],
      "finalAnswerWithUnits": "ess = 0.07",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{30} = 0.07$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{10}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.15,
      0.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{10}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{10}{s(s + 2)} \\right] = \\frac{10}{0 + 2} = 5.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{5.0} = 0.2$."
      ],
      "finalAnswerWithUnits": "ess = 0.2",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{10} = 0.2$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{15}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.08,
      0.18
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{15}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{15}{s(s + 2)} \\right] = \\frac{15}{0 + 2} = 7.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{7.5} = 0.13$."
      ],
      "finalAnswerWithUnits": "ess = 0.13",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{15} = 0.13$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{20}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.05,
      0.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{20}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{20}{s(s + 2)} \\right] = \\frac{20}{0 + 2} = 10.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{10.0} = 0.1$."
      ],
      "finalAnswerWithUnits": "ess = 0.1",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{20} = 0.1$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{25}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.03,
      0.13
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{25}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{25}{s(s + 2)} \\right] = \\frac{25}{0 + 2} = 12.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{12.5} = 0.08$."
      ],
      "finalAnswerWithUnits": "ess = 0.08",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{25} = 0.08$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{30}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.02,
      0.12
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{30}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{30}{s(s + 2)} \\right] = \\frac{30}{0 + 2} = 15.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{15.0} = 0.07$."
      ],
      "finalAnswerWithUnits": "ess = 0.07",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{30} = 0.07$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{10}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.15,
      0.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{10}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{10}{s(s + 2)} \\right] = \\frac{10}{0 + 2} = 5.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{5.0} = 0.2$."
      ],
      "finalAnswerWithUnits": "ess = 0.2",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{10} = 0.2$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{15}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.08,
      0.18
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{15}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{15}{s(s + 2)} \\right] = \\frac{15}{0 + 2} = 7.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{7.5} = 0.13$."
      ],
      "finalAnswerWithUnits": "ess = 0.13",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{15} = 0.13$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{20}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.05,
      0.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{20}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{20}{s(s + 2)} \\right] = \\frac{20}{0 + 2} = 10.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{10.0} = 0.1$."
      ],
      "finalAnswerWithUnits": "ess = 0.1",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{20} = 0.1$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{25}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.03,
      0.13
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{25}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{25}{s(s + 2)} \\right] = \\frac{25}{0 + 2} = 12.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{12.5} = 0.08$."
      ],
      "finalAnswerWithUnits": "ess = 0.08",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{25} = 0.08$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{30}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.02,
      0.12
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{30}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{30}{s(s + 2)} \\right] = \\frac{30}{0 + 2} = 15.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{15.0} = 0.07$."
      ],
      "finalAnswerWithUnits": "ess = 0.07",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{30} = 0.07$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{10}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.15,
      0.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{10}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{10}{s(s + 2)} \\right] = \\frac{10}{0 + 2} = 5.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{5.0} = 0.2$."
      ],
      "finalAnswerWithUnits": "ess = 0.2",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{10} = 0.2$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{15}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.08,
      0.18
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{15}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{15}{s(s + 2)} \\right] = \\frac{15}{0 + 2} = 7.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{7.5} = 0.13$."
      ],
      "finalAnswerWithUnits": "ess = 0.13",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{15} = 0.13$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{20}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.05,
      0.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{20}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{20}{s(s + 2)} \\right] = \\frac{20}{0 + 2} = 10.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{10.0} = 0.1$."
      ],
      "finalAnswerWithUnits": "ess = 0.1",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{20} = 0.1$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{25}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.03,
      0.13
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{25}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{25}{s(s + 2)} \\right] = \\frac{25}{0 + 2} = 12.5$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{12.5} = 0.08$."
      ],
      "finalAnswerWithUnits": "ess = 0.08",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{25} = 0.08$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Time Domain Analysis",
    "subject": "Control Systems",
    "topic": "Time Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{30}{s(s + 2)}$. The steady-state error $e_{ss}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.02,
      0.12
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
      "givenInformationAndAssumptions": [
        "Open-loop transfer function: $G(s) = \\frac{30}{s(s + 2)}$",
        "Unit ramp input $R(s) = 1/s^2$"
      ],
      "relevantConcept": "For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)",
          "terms": [
            {
              "term": "K_v",
              "explanation": "Velocity error constant"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute velocity error constant: $K_v = \\lim_{s \\to 0} s \\left[ \\frac{30}{s(s + 2)} \\right] = \\frac{30}{0 + 2} = 15.0$.",
        "Step 2: Steady-state error for unit ramp: $e_{ss} = \\frac{1}{K_v} = \\frac{1}{15.0} = 0.07$."
      ],
      "finalAnswerWithUnits": "ess = 0.07",
      "alternativeApproachOrShortcut": "Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{30} = 0.07$.",
      "commonMistakes": [
        "Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Time Domain Analysis",
      "Steady-State Error",
      "Error Constants",
      "Type 1 System"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:",
    "options": [
      {
        "id": "A",
        "text": "$0 < K < 6$"
      },
      {
        "id": "B",
        "text": "$K > 6$"
      },
      {
        "id": "C",
        "text": "$-6 < K < 0$"
      },
      {
        "id": "D",
        "text": "$K > 0$ with no upper bound"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Construct the Routh array to find the range of parameter K for closed-loop stability.",
      "givenInformationAndAssumptions": [
        "Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"
      ],
      "relevantConcept": "Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
      "formulaAndTermExplanation": [
        {
          "formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0",
          "terms": [
            {
              "term": "b_1",
              "explanation": "First element of s^1 row in Routh array"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Routh array:",
        "Row $s^3$: $1, \\quad 2$",
        "Row $s^2$: $3, \\quad K$",
        "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
        "Row $s^0$: $K$",
        "Step 2: For stability, all elements of column 1 must be strictly positive:",
        "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
        "2. $K > 0$.",
        "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A (0 < K < 6)",
      "alternativeApproachOrShortcut": "For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
      "commonMistakes": [
        "Overlooking the lower bound $K > 0$ from the $s^0$ row."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Routh-Hurwitz",
      "Stability Criterion",
      "Characteristic Equation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Stability & Root Locus",
    "subject": "Control Systems",
    "topic": "Stability & Root Locus",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the number of root locus asymptotes approaching infinity.",
      "givenInformationAndAssumptions": [
        "Open-loop poles: $s = 0, -2, -4$ ($P = 3$)",
        "Open-loop zeros: none ($Z = 0$)"
      ],
      "relevantConcept": "The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Number of asymptotes} = P - Z",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Pole-zero excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
        "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
        "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (3 asymptotes)",
      "alternativeApproachOrShortcut": "The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
      "commonMistakes": [
        "Counting only the non-zero poles."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Root Locus",
      "Asymptotes",
      "Pole-Zero Excess"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 2 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-40",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 2 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 2$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 2 \\times (-20) = -40\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-40 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -12\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 3 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-60",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 3 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 3$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 3 \\times (-20) = -60\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-60 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -18\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A minimum-phase transfer function has no finite zeros and 4 simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade.",
    "options": null,
    "officialAnswer": "-80",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
      "givenInformationAndAssumptions": [
        "Transfer function with 4 poles and 0 zeros."
      ],
      "relevantConcept": "Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}",
          "terms": [
            {
              "term": "P - Z",
              "explanation": "Net pole excess"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of poles $P = 4$, zeros $Z = 0$.",
        "Step 2: Each pole rolls off at $-20\\text{ dB/decade}$.",
        "Step 3: Total high-frequency slope $= 4 \\times (-20) = -80\\text{ dB/decade}$."
      ],
      "finalAnswerWithUnits": "-80 dB/dec",
      "alternativeApproachOrShortcut": "In terms of octaves: $-6(P - Z)\\text{ dB/octave} = -24\\text{ dB/octave}$.",
      "commonMistakes": [
        "Using positive sign (poles roll off, so slope is negative)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Bode Plot",
      "Roll-off Slope"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -140^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -140^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -140^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-140^\\circ) = 40^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 40 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -135^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "45",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -135^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -135^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-135^\\circ) = 45^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 45 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -130^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "50",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -130^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -130^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-130^\\circ) = 50^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 50 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -125^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "55",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -125^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -125^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-125^\\circ) = 55^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 55 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -120^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -120^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -120^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-120^\\circ) = 60^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 60 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -140^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -140^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -140^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-140^\\circ) = 40^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 40 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -135^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "45",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -135^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -135^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-135^\\circ) = 45^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 45 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -130^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "50",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -130^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -130^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-130^\\circ) = 50^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 50 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -125^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "55",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -125^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -125^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-125^\\circ) = 55^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 55 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -120^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -120^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -120^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-120^\\circ) = 60^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 60 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -140^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -140^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -140^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-140^\\circ) = 40^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 40 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -135^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "45",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -135^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -135^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-135^\\circ) = 45^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 45 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -130^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "50",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -130^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -130^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-130^\\circ) = 50^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 50 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -125^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "55",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -125^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -125^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-125^\\circ) = 55^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 55 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -120^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -120^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -120^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-120^\\circ) = 60^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 60 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -140^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -140^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -140^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-140^\\circ) = 40^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 40 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -135^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "45",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -135^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -135^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-135^\\circ) = 45^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 45 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -130^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "50",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -130^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -130^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-130^\\circ) = 50^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 50 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -125^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "55",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -125^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -125^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-125^\\circ) = 55^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 55 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -120^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -120^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -120^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-120^\\circ) = 60^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 60 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -140^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -140^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -140^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-140^\\circ) = 40^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 40 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -135^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "45",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -135^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -135^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-135^\\circ) = 45^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 45 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -130^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "50",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -130^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -130^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-130^\\circ) = 50^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 50 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -125^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "55",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -125^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -125^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-125^\\circ) = 55^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 55 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Frequency Domain Analysis",
    "subject": "Control Systems",
    "topic": "Frequency Domain Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "At the gain crossover frequency $\\omega_{gc}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{gc})H(j\\omega_{gc}) = -120^\\circ$. The Phase Margin (PM) of the system is ________ degrees.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
      "givenInformationAndAssumptions": [
        "Open-loop phase at $\\omega_{gc}$: $\\phi_{gc} = -120^\\circ$"
      ],
      "relevantConcept": "Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "PM = 180^\\circ + \\phi_{gc}",
          "terms": [
            {
              "term": "PM",
              "explanation": "Phase margin in degrees"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{gc}$.",
        "Step 2: $\\phi_{gc} = -120^\\circ$.",
        "Step 3: $PM = 180^\\circ + (-120^\\circ) = 60^\\circ$."
      ],
      "finalAnswerWithUnits": "PM = 60 deg",
      "alternativeApproachOrShortcut": "A positive Phase Margin corresponds to a stable closed-loop system.",
      "commonMistakes": [
        "Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "Frequency Domain",
      "Phase Margin",
      "Gain Crossover",
      "Stability"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-CTL-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — State Space Analysis",
    "subject": "Control Systems",
    "topic": "State Space Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:",
    "options": [
      {
        "id": "A",
        "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"
      },
      {
        "id": "B",
        "text": "The matrix $A$ is symmetric and positive definite"
      },
      {
        "id": "C",
        "text": "All eigenvalues of $A$ are strictly negative"
      },
      {
        "id": "D",
        "text": "The determinant of $A$ is non-zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State Kalman's algebraic rank condition for complete state controllability.",
      "givenInformationAndAssumptions": [
        "System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."
      ],
      "relevantConcept": "Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]",
          "terms": [
            {
              "term": "Q_c",
              "explanation": "Controllability matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
        "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
        "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
        "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (rank(Qc) = n)",
      "alternativeApproachOrShortcut": "Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
      "commonMistakes": [
        "Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Control Systems",
      "State Space",
      "Controllability",
      "Kalman Criterion",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
