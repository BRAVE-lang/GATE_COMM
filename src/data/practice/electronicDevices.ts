import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — ELECTRONIC_DEVICES_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const ELECTRONIC_DEVICES_PRACTICE: Question[] = [
  {
    "id": "PRAC-EDC-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{17}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{3}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{17}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{17}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{3}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^{3}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{15}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{5}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{15}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{15}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{5}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{15}} = 2.25 \\times 10^{5}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sample of silicon at thermal equilibrium ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{16}\\text{ cm}^{-3}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{4}\\text{ cm}^{-3}$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "2.25",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
      "givenInformationAndAssumptions": [
        "Intrinsic carrier density: $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
        "Donor doping: $N_d = 10^{16}\\text{ cm}^{-3}$",
        "Thermal equilibrium at 300 K"
      ],
      "relevantConcept": "Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}",
          "terms": [
            {
              "term": "n_i",
              "explanation": "Intrinsic carrier concentration"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $n_i^2$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{16}\\text{ cm}^{-3}$.",
        "Step 3: Compute minority hole concentration:",
        "$$p_n = \\frac{n_i^2}{N_d} = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$$.",
        "Step 4: Comparing with $k \\times 10^{4}$, we find $k = 2.25$."
      ],
      "finalAnswerWithUnits": "k = 2.25",
      "alternativeApproachOrShortcut": "Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{16}} = 2.25 \\times 10^{4}\\text{ cm}^{-3}$.",
      "commonMistakes": [
        "Using $n_i$ instead of $n_i^2$ in the numerator."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Law of Mass Action",
      "Carrier Concentration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "26",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1000 \\times 0.026 = 26.0\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 26.0 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1000 \\times 26}{1000} = 26.0\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      28.55,
      28.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1100 \\times 0.026 = 28.6\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 28.6 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1100 \\times 26}{1000} = 28.6\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.15,
      31.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1200 \\times 0.026 = 31.2\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 31.2 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1200 \\times 26}{1000} = 31.2\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      33.75,
      33.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1300 \\times 0.026 = 33.8\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 33.8 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1300 \\times 26}{1000} = 33.8\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      36.35,
      36.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1400 \\times 0.026 = 36.4\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 36.4 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1400 \\times 26}{1000} = 36.4\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "26",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1000 \\times 0.026 = 26.0\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 26.0 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1000 \\times 26}{1000} = 26.0\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      28.55,
      28.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1100 \\times 0.026 = 28.6\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 28.6 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1100 \\times 26}{1000} = 28.6\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.15,
      31.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1200 \\times 0.026 = 31.2\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 31.2 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1200 \\times 26}{1000} = 31.2\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      33.75,
      33.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1300 \\times 0.026 = 33.8\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 33.8 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1300 \\times 26}{1000} = 33.8\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      36.35,
      36.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1400 \\times 0.026 = 36.4\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 36.4 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1400 \\times 26}{1000} = 36.4\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "26",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1000 \\times 0.026 = 26.0\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 26.0 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1000 \\times 26}{1000} = 26.0\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      28.55,
      28.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1100 \\times 0.026 = 28.6\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 28.6 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1100 \\times 26}{1000} = 28.6\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.15,
      31.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1200 \\times 0.026 = 31.2\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 31.2 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1200 \\times 26}{1000} = 31.2\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      33.75,
      33.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1300 \\times 0.026 = 33.8\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 33.8 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1300 \\times 26}{1000} = 33.8\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      36.35,
      36.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1400 \\times 0.026 = 36.4\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 36.4 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1400 \\times 26}{1000} = 36.4\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "26",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1000 \\times 0.026 = 26.0\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 26.0 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1000 \\times 26}{1000} = 26.0\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      28.55,
      28.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1100 \\times 0.026 = 28.6\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 28.6 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1100 \\times 26}{1000} = 28.6\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.15,
      31.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1200 \\times 0.026 = 31.2\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 31.2 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1200 \\times 26}{1000} = 31.2\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      33.75,
      33.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1300 \\times 0.026 = 33.8\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 33.8 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1300 \\times 26}{1000} = 33.8\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      36.35,
      36.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1400 \\times 0.026 = 36.4\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 36.4 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1400 \\times 26}{1000} = 36.4\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "26",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1000 \\times 0.026 = 26.0\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 26.0 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1000 \\times 26}{1000} = 26.0\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      28.55,
      28.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1100 \\times 0.026 = 28.6\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 28.6 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1100 \\times 26}{1000} = 28.6\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.15,
      31.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1200 \\times 0.026 = 31.2\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 31.2 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1200 \\times 26}{1000} = 31.2\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      33.75,
      33.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1300 \\times 0.026 = 33.8\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 33.8 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1300 \\times 26}{1000} = 33.8\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      36.35,
      36.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1400 \\times 0.026 = 36.4\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 36.4 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1400 \\times 26}{1000} = 36.4\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "26",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1000 \\times 0.026 = 26.0\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 26.0 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1000 \\times 26}{1000} = 26.0\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      28.55,
      28.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1100 \\times 0.026 = 28.6\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 28.6 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1100 \\times 26}{1000} = 28.6\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.15,
      31.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1200 \\times 0.026 = 31.2\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 31.2 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1200 \\times 26}{1000} = 31.2\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      33.75,
      33.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1300 \\times 0.026 = 33.8\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 33.8 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1300 \\times 26}{1000} = 33.8\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      36.35,
      36.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1400 \\times 0.026 = 36.4\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 36.4 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1400 \\times 26}{1000} = 36.4\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "26",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1000\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1000 \\times 0.026 = 26.0\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 26.0 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1000 \\times 26}{1000} = 26.0\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      28.55,
      28.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1100\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1100 \\times 0.026 = 28.6\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 28.6 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1100 \\times 26}{1000} = 28.6\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.15,
      31.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1200\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1200 \\times 0.026 = 31.2\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 31.2 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1200 \\times 26}{1000} = 31.2\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      33.75,
      33.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1300\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1300 \\times 0.026 = 33.8\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 33.8 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1300 \\times 26}{1000} = 33.8\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Semiconductor Physics",
    "subject": "Electronic Devices",
    "topic": "Semiconductor Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a silicon semiconductor at $T = 300\\text{ K}$, the electron mobility is $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$. Assuming a thermal voltage of $V_t = 26\\text{ mV}$, the electron diffusion coefficient $D_n$ is ________ $\\text{cm}^2/\\text{s}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      36.35,
      36.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
      "givenInformationAndAssumptions": [
        "Electron mobility $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$",
        "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"
      ],
      "relevantConcept": "The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)",
          "terms": [
            {
              "term": "D",
              "explanation": "Diffusion coefficient in cm^2/s"
            },
            {
              "term": "V_t",
              "explanation": "Thermal voltage ~ 26 mV at 300 K"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
        "Step 2: $\\mu_n = 1400\\text{ cm}^2/(\\text{V}\\cdot\\text{s})$ and $V_t = 0.026\\text{ V}$.",
        "Step 3: $D_n = 1400 \\times 0.026 = 36.4\\text{ cm}^2/\\text{s}$."
      ],
      "finalAnswerWithUnits": "Dn = 36.4 cm^2/s",
      "alternativeApproachOrShortcut": "Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{1400 \\times 26}{1000} = 36.4\\text{ cm}^2/\\text{s}$.",
      "commonMistakes": [
        "Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "Semiconductor Physics",
      "Einstein Relation",
      "Carrier Mobility",
      "Diffusion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{18}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{16}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.79,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{18}\\text{ cm}^{-3}$, $N_d = 10^{16}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{18} \\times 10^{16} = 10^{34}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{34}}{2.25 \\times 10^{20}} \\approx 4.44e+13$.",
        "Step 4: Compute natural log: $\\ln(4.44e+13) \\approx 31.43$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 31.43 = 0.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.82 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{16}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{17}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.73,
      0.79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{16}\\text{ cm}^{-3}$, $N_d = 10^{17}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{16} \\times 10^{17} = 10^{33}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{33}}{2.25 \\times 10^{20}} \\approx 4.44e+12$.",
        "Step 4: Compute natural log: $\\ln(4.44e+12) \\approx 29.12$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 29.12 = 0.76\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.76 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An abrupt silicon p-n junction at $T = 300\\text{ K}$ has acceptor doping $N_a = 10^{17}\\text{ cm}^{-3}$ and donor doping $N_d = 10^{18}\\text{ cm}^{-3}$. Given $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ and thermal voltage $V_t = 26\\text{ mV}$, the built-in potential $V_{bi}$ across the junction is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.85,
      0.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
      "givenInformationAndAssumptions": [
        "Doping: $N_a = 10^{17}\\text{ cm}^{-3}$, $N_d = 10^{18}\\text{ cm}^{-3}$",
        "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$",
        "$V_t = 26\\text{{ mV}}$"
      ],
      "relevantConcept": "The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)",
          "terms": [
            {
              "term": "V_{bi}",
              "explanation": "Contact potential barrier in Volts"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute doping product: $N_a N_d = 10^{17} \\times 10^{18} = 10^{35}\\text{ cm}^{-6}$.",
        "Step 2: $n_i^2 = (1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}\\text{ cm}^{-6}$.",
        "Step 3: $\\frac{N_a N_d}{n_i^2} = \\frac{10^{35}}{2.25 \\times 10^{20}} \\approx 4.44e+14$.",
        "Step 4: Compute natural log: $\\ln(4.44e+14) \\approx 33.73$.",
        "Step 5: Multiply by thermal voltage: $V_{bi} = 0.026 \\times 33.73 = 0.88\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vbi = 0.88 V",
      "alternativeApproachOrShortcut": "Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
      "commonMistakes": [
        "Using common log (base 10) instead of natural logarithm (base $e$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Built-in Potential",
      "Doping"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — PN Junction & Zener Diodes",
    "subject": "Electronic Devices",
    "topic": "PN Junction & Zener Diodes",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?",
    "options": [
      {
        "id": "A",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"
      },
      {
        "id": "B",
        "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"
      },
      {
        "id": "C",
        "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"
      },
      {
        "id": "D",
        "text": "$C_j \\propto e^{V_R / V_t}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
      "givenInformationAndAssumptions": [
        "Abrupt $p^+n$ junction diode operated in reverse bias."
      ],
      "relevantConcept": "For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
      "formulaAndTermExplanation": [
        {
          "formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}",
          "terms": [
            {
              "term": "C_j",
              "explanation": "Depletion/transition capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
        "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
        "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
      "commonMistakes": [
        "Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "PN Junction",
      "Depletion Capacitance",
      "Reverse Bias"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 50$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9784,
      0.9824
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 50$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 50$:",
        "$$\\alpha = \\frac{50}{1 + 50} = \\frac{50}{51} \\approx 0.9804$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9804",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 75$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9848,
      0.9888
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 75$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 75$:",
        "$$\\alpha = \\frac{75}{1 + 75} = \\frac{75}{76} \\approx 0.9868$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9868",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 100$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9881,
      0.9921
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 100$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 100$:",
        "$$\\alpha = \\frac{100}{1 + 100} = \\frac{100}{101} \\approx 0.9901$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9901",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 125$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9901,
      0.9941
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 125$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 125$:",
        "$$\\alpha = \\frac{125}{1 + 125} = \\frac{125}{126} \\approx 0.9921$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9921",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 150$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9914,
      0.9954
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 150$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 150$:",
        "$$\\alpha = \\frac{150}{1 + 150} = \\frac{150}{151} \\approx 0.9934$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9934",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 175$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9923,
      0.9963
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 175$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 175$:",
        "$$\\alpha = \\frac{175}{1 + 175} = \\frac{175}{176} \\approx 0.9943$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9943",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 50$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9784,
      0.9824
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 50$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 50$:",
        "$$\\alpha = \\frac{50}{1 + 50} = \\frac{50}{51} \\approx 0.9804$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9804",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 75$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9848,
      0.9888
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 75$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 75$:",
        "$$\\alpha = \\frac{75}{1 + 75} = \\frac{75}{76} \\approx 0.9868$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9868",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 100$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9881,
      0.9921
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 100$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 100$:",
        "$$\\alpha = \\frac{100}{1 + 100} = \\frac{100}{101} \\approx 0.9901$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9901",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 125$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9901,
      0.9941
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 125$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 125$:",
        "$$\\alpha = \\frac{125}{1 + 125} = \\frac{125}{126} \\approx 0.9921$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9921",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 150$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9914,
      0.9954
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 150$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 150$:",
        "$$\\alpha = \\frac{150}{1 + 150} = \\frac{150}{151} \\approx 0.9934$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9934",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 175$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9923,
      0.9963
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 175$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 175$:",
        "$$\\alpha = \\frac{175}{1 + 175} = \\frac{175}{176} \\approx 0.9943$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9943",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 50$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9784,
      0.9824
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 50$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 50$:",
        "$$\\alpha = \\frac{50}{1 + 50} = \\frac{50}{51} \\approx 0.9804$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9804",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 75$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9848,
      0.9888
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 75$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 75$:",
        "$$\\alpha = \\frac{75}{1 + 75} = \\frac{75}{76} \\approx 0.9868$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9868",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 100$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9881,
      0.9921
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 100$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 100$:",
        "$$\\alpha = \\frac{100}{1 + 100} = \\frac{100}{101} \\approx 0.9901$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9901",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 125$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9901,
      0.9941
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 125$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 125$:",
        "$$\\alpha = \\frac{125}{1 + 125} = \\frac{125}{126} \\approx 0.9921$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9921",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 150$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9914,
      0.9954
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 150$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 150$:",
        "$$\\alpha = \\frac{150}{1 + 150} = \\frac{150}{151} \\approx 0.9934$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9934",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 175$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9923,
      0.9963
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 175$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 175$:",
        "$$\\alpha = \\frac{175}{1 + 175} = \\frac{175}{176} \\approx 0.9943$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9943",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 50$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9784,
      0.9824
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 50$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 50$:",
        "$$\\alpha = \\frac{50}{1 + 50} = \\frac{50}{51} \\approx 0.9804$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9804",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 75$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9848,
      0.9888
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 75$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 75$:",
        "$$\\alpha = \\frac{75}{1 + 75} = \\frac{75}{76} \\approx 0.9868$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9868",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 100$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9881,
      0.9921
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 100$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 100$:",
        "$$\\alpha = \\frac{100}{1 + 100} = \\frac{100}{101} \\approx 0.9901$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9901",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 125$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9901,
      0.9941
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 125$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 125$:",
        "$$\\alpha = \\frac{125}{1 + 125} = \\frac{125}{126} \\approx 0.9921$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9921",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 150$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9914,
      0.9954
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 150$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 150$:",
        "$$\\alpha = \\frac{150}{1 + 150} = \\frac{150}{151} \\approx 0.9934$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9934",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 175$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9923,
      0.9963
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 175$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 175$:",
        "$$\\alpha = \\frac{175}{1 + 175} = \\frac{175}{176} \\approx 0.9943$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9943",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 50$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9784,
      0.9824
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 50$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 50$:",
        "$$\\alpha = \\frac{50}{1 + 50} = \\frac{50}{51} \\approx 0.9804$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9804",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 75$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9848,
      0.9888
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 75$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 75$:",
        "$$\\alpha = \\frac{75}{1 + 75} = \\frac{75}{76} \\approx 0.9868$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9868",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 100$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9881,
      0.9921
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 100$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 100$:",
        "$$\\alpha = \\frac{100}{1 + 100} = \\frac{100}{101} \\approx 0.9901$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9901",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 125$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9901,
      0.9941
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 125$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 125$:",
        "$$\\alpha = \\frac{125}{1 + 125} = \\frac{125}{126} \\approx 0.9921$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9921",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 150$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9914,
      0.9954
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 150$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 150$:",
        "$$\\alpha = \\frac{150}{1 + 150} = \\frac{150}{151} \\approx 0.9934$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9934",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 175$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9923,
      0.9963
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 175$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 175$:",
        "$$\\alpha = \\frac{175}{1 + 175} = \\frac{175}{176} \\approx 0.9943$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9943",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 50$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9784,
      0.9824
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 50$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 50$:",
        "$$\\alpha = \\frac{50}{1 + 50} = \\frac{50}{51} \\approx 0.9804$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9804",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 75$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9848,
      0.9888
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 75$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 75$:",
        "$$\\alpha = \\frac{75}{1 + 75} = \\frac{75}{76} \\approx 0.9868$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9868",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 100$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9881,
      0.9921
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 100$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 100$:",
        "$$\\alpha = \\frac{100}{1 + 100} = \\frac{100}{101} \\approx 0.9901$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9901",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 125$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9901,
      0.9941
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 125$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 125$:",
        "$$\\alpha = \\frac{125}{1 + 125} = \\frac{125}{126} \\approx 0.9921$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9921",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = 150$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places).",
    "options": null,
    "officialAnswer": [
      0.9914,
      0.9954
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
      "givenInformationAndAssumptions": [
        "Current gain $\\beta = 150$"
      ],
      "relevantConcept": "The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\alpha = \\frac{\\beta}{1 + \\beta}",
          "terms": [
            {
              "term": "\\alpha",
              "explanation": "Ratio of collector current to emitter current (\\le 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
        "Step 2: Substitute $\\beta = 150$:",
        "$$\\alpha = \\frac{150}{1 + 150} = \\frac{150}{151} \\approx 0.9934$$."
      ],
      "finalAnswerWithUnits": "alpha = 0.9934",
      "alternativeApproachOrShortcut": "Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
      "commonMistakes": [
        "Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Current Gain",
      "Alpha and Beta"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT Physics",
    "subject": "Electronic Devices",
    "topic": "BJT Physics",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?",
    "options": [
      {
        "id": "A",
        "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"
      },
      {
        "id": "B",
        "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"
      },
      {
        "id": "C",
        "text": "Common-emitter current gain $\\beta$ decreases to zero"
      },
      {
        "id": "D",
        "text": "Emitter injection efficiency drops to zero"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
      "givenInformationAndAssumptions": [
        "BJT in active mode with increasing $V_{CE}$."
      ],
      "relevantConcept": "As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
      "formulaAndTermExplanation": [
        {
          "formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)",
          "terms": [
            {
              "term": "V_A",
              "explanation": "Early voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In active mode, the collector-base junction is reverse biased.",
        "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
        "Step 3: The depletion region extends deeper into the lightly doped base.",
        "Step 4: This decreases the effective neutral base width $W_B$.",
        "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
      "commonMistakes": [
        "Thinking the base widens instead of narrows."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "BJT Physics",
      "Early Effect",
      "Base Width Modulation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.0 \\times (1.0)^2 = 0.5 \\times 1.0 \\times 1.00 = 0.5\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 0.5 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.64,
      1.74
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.5 \\times (1.5)^2 = 0.5 \\times 1.5 \\times 2.25 = 1.69\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.69 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.0 \\times (2.0)^2 = 0.5 \\times 2.0 \\times 4.00 = 4.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 4.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.2,
      1.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.5 \\times (1.0)^2 = 0.5 \\times 2.5 \\times 1.00 = 1.25\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.25 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 3.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.33,
      3.43
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 3.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 3.0 \\times (1.5)^2 = 0.5 \\times 3.0 \\times 2.25 = 3.38\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 3.38 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.0 \\times (2.0)^2 = 0.5 \\times 1.0 \\times 4.00 = 2.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 2.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.7,
      0.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.5 \\times (1.0)^2 = 0.5 \\times 1.5 \\times 1.00 = 0.75\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 0.75 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.2,
      2.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.0 \\times (1.5)^2 = 0.5 \\times 2.0 \\times 2.25 = 2.25\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 2.25 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.5 \\times (2.0)^2 = 0.5 \\times 2.5 \\times 4.00 = 5.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 5.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 3.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 3.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 3.0 \\times (1.0)^2 = 0.5 \\times 3.0 \\times 1.00 = 1.5\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.5 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.07,
      1.17
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.0 \\times (1.5)^2 = 0.5 \\times 1.0 \\times 2.25 = 1.12\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.12 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.5 \\times (2.0)^2 = 0.5 \\times 1.5 \\times 4.00 = 3.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 3.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.0 \\times (1.0)^2 = 0.5 \\times 2.0 \\times 1.00 = 1.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.76,
      2.86
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.5 \\times (1.5)^2 = 0.5 \\times 2.5 \\times 2.25 = 2.81\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 2.81 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 3.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 3.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 3.0 \\times (2.0)^2 = 0.5 \\times 3.0 \\times 4.00 = 6.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 6.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.0 \\times (1.0)^2 = 0.5 \\times 1.0 \\times 1.00 = 0.5\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 0.5 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.64,
      1.74
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.5 \\times (1.5)^2 = 0.5 \\times 1.5 \\times 2.25 = 1.69\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.69 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.0 \\times (2.0)^2 = 0.5 \\times 2.0 \\times 4.00 = 4.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 4.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.2,
      1.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.5 \\times (1.0)^2 = 0.5 \\times 2.5 \\times 1.00 = 1.25\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.25 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 3.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.33,
      3.43
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 3.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 3.0 \\times (1.5)^2 = 0.5 \\times 3.0 \\times 2.25 = 3.38\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 3.38 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.0 \\times (2.0)^2 = 0.5 \\times 1.0 \\times 4.00 = 2.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 2.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.7,
      0.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.5 \\times (1.0)^2 = 0.5 \\times 1.5 \\times 1.00 = 0.75\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 0.75 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.2,
      2.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.0 \\times (1.5)^2 = 0.5 \\times 2.0 \\times 2.25 = 2.25\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 2.25 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.5 \\times (2.0)^2 = 0.5 \\times 2.5 \\times 4.00 = 5.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 5.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 3.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 3.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 3.0 \\times (1.0)^2 = 0.5 \\times 3.0 \\times 1.00 = 1.5\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.5 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.07,
      1.17
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.0 \\times (1.5)^2 = 0.5 \\times 1.0 \\times 2.25 = 1.12\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.12 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.5 \\times (2.0)^2 = 0.5 \\times 1.5 \\times 4.00 = 3.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 3.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.0 \\times (1.0)^2 = 0.5 \\times 2.0 \\times 1.00 = 1.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.76,
      2.86
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.5 \\times (1.5)^2 = 0.5 \\times 2.5 \\times 2.25 = 2.81\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 2.81 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 3.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 3.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 3.0 \\times (2.0)^2 = 0.5 \\times 3.0 \\times 4.00 = 6.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 6.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.0 \\times (1.0)^2 = 0.5 \\times 1.0 \\times 1.00 = 0.5\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 0.5 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 1.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.64,
      1.74
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 1.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 1.5 \\times (1.5)^2 = 0.5 \\times 1.5 \\times 2.25 = 1.69\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.69 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 3.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 3.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 3.0 - 1.0 = 2.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 2.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.0 \\times (2.0)^2 = 0.5 \\times 2.0 \\times 4.00 = 4.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 4.0 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 2.5\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.0\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.2,
      1.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 2.5\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.0\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.0 - 1.0 = 1.0\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.0\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 2.5 \\times (1.0)^2 = 0.5 \\times 2.5 \\times 1.00 = 1.25\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 1.25 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An n-channel MOSFET has threshold voltage $V_{th} = 1.0\\text{ V}$ and transconductance parameter $\\mu_n C_{ox} \\frac{W}{L} = 3.0\\text{ mA/V}^2$. The transistor is biased with gate-to-source voltage $V_{GS} = 2.5\\text{ V}$ and drain-to-source voltage $V_{DS} = 4.0\\text{ V}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.33,
      3.43
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Verify the MOSFET operating region and compute the saturation drain current.",
      "givenInformationAndAssumptions": [
        "Threshold voltage $V_{th} = 1.0\\text{ V}$",
        "Process parameter $k_n = 3.0\\text{ mA/V}^2$",
        "Bias: $V_{GS} = 2.5\\text{ V}$, $V_{DS} = 4.0\\text{ V}$"
      ],
      "relevantConcept": "First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2",
          "terms": [
            {
              "term": "V_{GS} - V_{th}",
              "explanation": "Gate overdrive voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute overdrive: $V_{ov} = V_{GS} - V_{th} = 2.5 - 1.0 = 1.5\\text{ V}$.",
        "Step 2: Check region: $V_{DS} = 4.0\\text{ V} > V_{ov} = 1.5\\text{ V}$. Hence the MOSFET is in SATURATION.",
        "Step 3: Saturation drain current formula: $I_D = \\frac{1}{2} k_n (V_{ov})^2$.",
        "Step 4: $I_D = 0.5 \\times 3.0 \\times (1.5)^2 = 0.5 \\times 3.0 \\times 2.25 = 3.38\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "ID = 3.38 mA",
      "alternativeApproachOrShortcut": "Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
      "commonMistakes": [
        "Using triode/linear region formula instead of saturation formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electronic Devices",
      "MOSFET",
      "Drain Current",
      "Saturation Region",
      "Threshold Voltage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EDC-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — MOSFET & MOS Capacitor",
    "subject": "Electronic Devices",
    "topic": "MOSFET & MOS Capacitor",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?",
    "options": [
      {
        "id": "A",
        "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"
      },
      {
        "id": "B",
        "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"
      },
      {
        "id": "C",
        "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"
      },
      {
        "id": "D",
        "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
      "givenInformationAndAssumptions": [
        "MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."
      ],
      "relevantConcept": "Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}",
          "terms": [
            {
              "term": "C_{ox}",
              "explanation": "Gate oxide capacitance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In strong inversion, minority electrons form the inversion channel.",
        "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
        "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
        "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
      "commonMistakes": [
        "Confusing the MOS capacitor (no source/drain) with a MOSFET."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electronic Devices",
      "MOS Capacitor",
      "C-V Characteristics",
      "Strong Inversion",
      "Oxide Capacitance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
