import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — COMMUNICATIONS_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const COMMUNICATIONS_PRACTICE: Question[] = [
  {
    "id": "PRAC-COM-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-1|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 15 e^{-2|0|} = 15 \\times 1 = 15\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 15 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 15\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 20 e^{-3|0|} = 20 \\times 1 = 20\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 20 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 20\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 25 e^{-4|0|} = 25 \\times 1 = 25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 25 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 25\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 30 e^{-1|0|} = 30 \\times 1 = 30\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 30 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 30\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 35 e^{-2|0|} = 35 \\times 1 = 35\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 35 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 35\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-3|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 15 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 15 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 15 e^{-4|0|} = 15 \\times 1 = 15\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 15 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 15\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 20 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 20 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 20 e^{-1|0|} = 20 \\times 1 = 20\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 20 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 20\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 25 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 25 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 25 e^{-2|0|} = 25 \\times 1 = 25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 25 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 25\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 30 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 30 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 30 e^{-3|0|} = 30 \\times 1 = 30\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 30 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 30\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 35 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 35 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 35 e^{-4|0|} = 35 \\times 1 = 35\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 35 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 35\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-1|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 15 e^{-2|0|} = 15 \\times 1 = 15\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 15 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 15\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 20 e^{-3|0|} = 20 \\times 1 = 20\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 20 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 20\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 25 e^{-4|0|} = 25 \\times 1 = 25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 25 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 25\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 30 e^{-1|0|} = 30 \\times 1 = 30\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 30 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 30\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 35 e^{-2|0|} = 35 \\times 1 = 35\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 35 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 35\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-3|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 15 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 15 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 15 e^{-4|0|} = 15 \\times 1 = 15\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 15 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 15\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 20 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 20 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 20 e^{-1|0|} = 20 \\times 1 = 20\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 20 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 20\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 25 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 25 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 25 e^{-2|0|} = 25 \\times 1 = 25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 25 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 25\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 30 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 30 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 30 e^{-3|0|} = 30 \\times 1 = 30\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 30 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 30\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 35 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 35 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 35 e^{-4|0|} = 35 \\times 1 = 35\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 35 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 35\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-1|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 15 e^{-2|0|} = 15 \\times 1 = 15\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 15 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 15\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 20 e^{-3|0|} = 20 \\times 1 = 20\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 20 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 20\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 25 e^{-4|0|} = 25 \\times 1 = 25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 25 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 25\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 30 e^{-1|0|} = 30 \\times 1 = 30\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 30 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 30\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 35 e^{-2|0|} = 35 \\times 1 = 35\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 35 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 35\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-3|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 15 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 15 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 15 e^{-4|0|} = 15 \\times 1 = 15\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 15 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 15\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 20 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 20 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 20 e^{-1|0|} = 20 \\times 1 = 20\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 20 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 20\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 25 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 25 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 25 e^{-2|0|} = 25 \\times 1 = 25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 25 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 25\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 30 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 30 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 30 e^{-3|0|} = 30 \\times 1 = 30\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 30 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 30\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 35 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 35 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 35 e^{-4|0|} = 35 \\times 1 = 35\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 35 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 35\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-1|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 15 e^{-2|0|} = 15 \\times 1 = 15\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 15 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 15\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 20 e^{-3|0|} = 20 \\times 1 = 20\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 20 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 20\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 25 e^{-4|0|} = 25 \\times 1 = 25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 25 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 25\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 30 e^{-1|0|} = 30 \\times 1 = 30\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 30 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 30\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 35 e^{-2|0|} = 35 \\times 1 = 35\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 35 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 35\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-3|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 15 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 15 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 15 e^{-4|0|} = 15 \\times 1 = 15\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 15 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 15\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 20 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 20 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 20 e^{-1|0|} = 20 \\times 1 = 20\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 20 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 20\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 25 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 25 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 25 e^{-2|0|} = 25 \\times 1 = 25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 25 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 25\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 30 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 30 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 30 e^{-3|0|} = 30 \\times 1 = 30\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 30 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 30\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 35 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 35 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 35 e^{-4|0|} = 35 \\times 1 = 35\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 35 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 35\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-1|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 15 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 15 e^{-2|0|} = 15 \\times 1 = 15\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 15 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 15\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 20 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 20 e^{-3|0|} = 20 \\times 1 = 20\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 20 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 20\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 25 e^{-4|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 25 e^{-4|0|} = 25 \\times 1 = 25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 25 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 25\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 30 e^{-1|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 30 e^{-1|0|} = 30 \\times 1 = 30\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 30 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 30\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 35 e^{-2|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 35 e^{-2|0|} = 35 \\times 1 = 35\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 35 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 35\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Random Processes & Noise",
    "subject": "Communications",
    "topic": "Random Processes & Noise",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
      "givenInformationAndAssumptions": [
        "Autocorrelation: $R_{XX}(\\tau) = 10 e^{-3|\\tau|}\\text{ W}$"
      ],
      "relevantConcept": "For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E[X^2(t)] = R_{XX}(0)",
          "terms": [
            {
              "term": "R_{XX}(0)",
              "explanation": "Autocorrelation at zero time displacement"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for total average power of a WSS process: $P = R_{XX}(0)$.",
        "Step 2: Evaluate at $\\tau = 0$: $R_{XX}(0) = 10 e^{-3|0|} = 10 \\times 1 = 10\\text{ W}$."
      ],
      "finalAnswerWithUnits": "P = 10 W",
      "alternativeApproachOrShortcut": "By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = 10\\text{ W}$.",
      "commonMistakes": [
        "Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Random Processes",
      "Autocorrelation",
      "WSS",
      "Average Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 10.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.5$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.2,
      11.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 10.0\\text{ kW}$",
        "Modulation index $\\mu = 0.5$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.5)^2 / 2 = 0.25 / 2 = 0.125$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.125 = 1.125$.",
        "Step 3: Total transmitted power: $P_t = 10.0 \\times 1.125 = 11.25\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 11.25 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 1.25\\text{ kW}$. Then $P_t = P_c + P_{SB} = 11.25\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 15.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.6$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      17.65,
      17.75
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 15.0\\text{ kW}$",
        "Modulation index $\\mu = 0.6$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.6)^2 / 2 = 0.36 / 2 = 0.180$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.180 = 1.180$.",
        "Step 3: Total transmitted power: $P_t = 15.0 \\times 1.180 = 17.7\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 17.7 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 2.7\\text{ kW}$. Then $P_t = P_c + P_{SB} = 17.7\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 20.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.7$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      24.85,
      24.95
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 20.0\\text{ kW}$",
        "Modulation index $\\mu = 0.7$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.7)^2 / 2 = 0.49 / 2 = 0.245$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.245 = 1.245$.",
        "Step 3: Total transmitted power: $P_t = 20.0 \\times 1.245 = 24.9\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 24.9 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 4.9\\text{ kW}$. Then $P_t = P_c + P_{SB} = 24.9\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 25.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.8$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      32.95,
      33.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 25.0\\text{ kW}$",
        "Modulation index $\\mu = 0.8$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.8)^2 / 2 = 0.64 / 2 = 0.320$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.320 = 1.320$.",
        "Step 3: Total transmitted power: $P_t = 25.0 \\times 1.320 = 33.0\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 33.0 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 8.0\\text{ kW}$. Then $P_t = P_c + P_{SB} = 33.0\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 30.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.5$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      33.7,
      33.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 30.0\\text{ kW}$",
        "Modulation index $\\mu = 0.5$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.5)^2 / 2 = 0.25 / 2 = 0.125$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.125 = 1.125$.",
        "Step 3: Total transmitted power: $P_t = 30.0 \\times 1.125 = 33.75\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 33.75 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 3.75\\text{ kW}$. Then $P_t = P_c + P_{SB} = 33.75\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 10.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.6$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.75,
      11.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 10.0\\text{ kW}$",
        "Modulation index $\\mu = 0.6$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.6)^2 / 2 = 0.36 / 2 = 0.180$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.180 = 1.180$.",
        "Step 3: Total transmitted power: $P_t = 10.0 \\times 1.180 = 11.8\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 11.8 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 1.8\\text{ kW}$. Then $P_t = P_c + P_{SB} = 11.8\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 15.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.7$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      18.62,
      18.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 15.0\\text{ kW}$",
        "Modulation index $\\mu = 0.7$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.7)^2 / 2 = 0.49 / 2 = 0.245$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.245 = 1.245$.",
        "Step 3: Total transmitted power: $P_t = 15.0 \\times 1.245 = 18.67\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 18.67 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 3.67\\text{ kW}$. Then $P_t = P_c + P_{SB} = 18.67\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 20.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.8$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      26.35,
      26.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 20.0\\text{ kW}$",
        "Modulation index $\\mu = 0.8$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.8)^2 / 2 = 0.64 / 2 = 0.320$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.320 = 1.320$.",
        "Step 3: Total transmitted power: $P_t = 20.0 \\times 1.320 = 26.4\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 26.4 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 6.4\\text{ kW}$. Then $P_t = P_c + P_{SB} = 26.4\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 25.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.5$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      28.07,
      28.17
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 25.0\\text{ kW}$",
        "Modulation index $\\mu = 0.5$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.5)^2 / 2 = 0.25 / 2 = 0.125$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.125 = 1.125$.",
        "Step 3: Total transmitted power: $P_t = 25.0 \\times 1.125 = 28.12\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 28.12 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 3.12\\text{ kW}$. Then $P_t = P_c + P_{SB} = 28.12\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 30.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.6$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      35.35,
      35.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 30.0\\text{ kW}$",
        "Modulation index $\\mu = 0.6$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.6)^2 / 2 = 0.36 / 2 = 0.180$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.180 = 1.180$.",
        "Step 3: Total transmitted power: $P_t = 30.0 \\times 1.180 = 35.4\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 35.4 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 5.4\\text{ kW}$. Then $P_t = P_c + P_{SB} = 35.4\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 10.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.7$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      12.4,
      12.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 10.0\\text{ kW}$",
        "Modulation index $\\mu = 0.7$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.7)^2 / 2 = 0.49 / 2 = 0.245$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.245 = 1.245$.",
        "Step 3: Total transmitted power: $P_t = 10.0 \\times 1.245 = 12.45\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 12.45 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 2.45\\text{ kW}$. Then $P_t = P_c + P_{SB} = 12.45\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 15.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.8$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.75,
      19.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 15.0\\text{ kW}$",
        "Modulation index $\\mu = 0.8$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.8)^2 / 2 = 0.64 / 2 = 0.320$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.320 = 1.320$.",
        "Step 3: Total transmitted power: $P_t = 15.0 \\times 1.320 = 19.8\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 19.8 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 4.8\\text{ kW}$. Then $P_t = P_c + P_{SB} = 19.8\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 20.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.5$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      22.45,
      22.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 20.0\\text{ kW}$",
        "Modulation index $\\mu = 0.5$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.5)^2 / 2 = 0.25 / 2 = 0.125$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.125 = 1.125$.",
        "Step 3: Total transmitted power: $P_t = 20.0 \\times 1.125 = 22.5\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 22.5 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 2.5\\text{ kW}$. Then $P_t = P_c + P_{SB} = 22.5\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 25.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.6$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      29.45,
      29.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 25.0\\text{ kW}$",
        "Modulation index $\\mu = 0.6$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.6)^2 / 2 = 0.36 / 2 = 0.180$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.180 = 1.180$.",
        "Step 3: Total transmitted power: $P_t = 25.0 \\times 1.180 = 29.5\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 29.5 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 4.5\\text{ kW}$. Then $P_t = P_c + P_{SB} = 29.5\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 30.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.7$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.3,
      37.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 30.0\\text{ kW}$",
        "Modulation index $\\mu = 0.7$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.7)^2 / 2 = 0.49 / 2 = 0.245$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.245 = 1.245$.",
        "Step 3: Total transmitted power: $P_t = 30.0 \\times 1.245 = 37.35\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 37.35 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 7.35\\text{ kW}$. Then $P_t = P_c + P_{SB} = 37.35\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 10.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.8$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      13.15,
      13.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 10.0\\text{ kW}$",
        "Modulation index $\\mu = 0.8$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.8)^2 / 2 = 0.64 / 2 = 0.320$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.320 = 1.320$.",
        "Step 3: Total transmitted power: $P_t = 10.0 \\times 1.320 = 13.2\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 13.2 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 3.2\\text{ kW}$. Then $P_t = P_c + P_{SB} = 13.2\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 15.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.5$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      16.83,
      16.93
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 15.0\\text{ kW}$",
        "Modulation index $\\mu = 0.5$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.5)^2 / 2 = 0.25 / 2 = 0.125$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.125 = 1.125$.",
        "Step 3: Total transmitted power: $P_t = 15.0 \\times 1.125 = 16.88\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 16.88 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 1.88\\text{ kW}$. Then $P_t = P_c + P_{SB} = 16.88\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 20.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.6$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      23.55,
      23.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 20.0\\text{ kW}$",
        "Modulation index $\\mu = 0.6$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.6)^2 / 2 = 0.36 / 2 = 0.180$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.180 = 1.180$.",
        "Step 3: Total transmitted power: $P_t = 20.0 \\times 1.180 = 23.6\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 23.6 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 3.6\\text{ kW}$. Then $P_t = P_c + P_{SB} = 23.6\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 25.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.7$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.07,
      31.17
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 25.0\\text{ kW}$",
        "Modulation index $\\mu = 0.7$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.7)^2 / 2 = 0.49 / 2 = 0.245$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.245 = 1.245$.",
        "Step 3: Total transmitted power: $P_t = 25.0 \\times 1.245 = 31.12\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 31.12 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 6.12\\text{ kW}$. Then $P_t = P_c + P_{SB} = 31.12\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 30.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.8$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      39.55,
      39.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 30.0\\text{ kW}$",
        "Modulation index $\\mu = 0.8$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.8)^2 / 2 = 0.64 / 2 = 0.320$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.320 = 1.320$.",
        "Step 3: Total transmitted power: $P_t = 30.0 \\times 1.320 = 39.6\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 39.6 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 9.6\\text{ kW}$. Then $P_t = P_c + P_{SB} = 39.6\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 10.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.5$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.2,
      11.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 10.0\\text{ kW}$",
        "Modulation index $\\mu = 0.5$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.5)^2 / 2 = 0.25 / 2 = 0.125$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.125 = 1.125$.",
        "Step 3: Total transmitted power: $P_t = 10.0 \\times 1.125 = 11.25\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 11.25 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 1.25\\text{ kW}$. Then $P_t = P_c + P_{SB} = 11.25\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 15.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.6$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      17.65,
      17.75
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 15.0\\text{ kW}$",
        "Modulation index $\\mu = 0.6$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.6)^2 / 2 = 0.36 / 2 = 0.180$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.180 = 1.180$.",
        "Step 3: Total transmitted power: $P_t = 15.0 \\times 1.180 = 17.7\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 17.7 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 2.7\\text{ kW}$. Then $P_t = P_c + P_{SB} = 17.7\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 20.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.7$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      24.85,
      24.95
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 20.0\\text{ kW}$",
        "Modulation index $\\mu = 0.7$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.7)^2 / 2 = 0.49 / 2 = 0.245$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.245 = 1.245$.",
        "Step 3: Total transmitted power: $P_t = 20.0 \\times 1.245 = 24.9\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 24.9 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 4.9\\text{ kW}$. Then $P_t = P_c + P_{SB} = 24.9\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 25.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.8$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      32.95,
      33.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 25.0\\text{ kW}$",
        "Modulation index $\\mu = 0.8$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.8)^2 / 2 = 0.64 / 2 = 0.320$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.320 = 1.320$.",
        "Step 3: Total transmitted power: $P_t = 25.0 \\times 1.320 = 33.0\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 33.0 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 8.0\\text{ kW}$. Then $P_t = P_c + P_{SB} = 33.0\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 30.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.5$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      33.7,
      33.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 30.0\\text{ kW}$",
        "Modulation index $\\mu = 0.5$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.5)^2 / 2 = 0.25 / 2 = 0.125$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.125 = 1.125$.",
        "Step 3: Total transmitted power: $P_t = 30.0 \\times 1.125 = 33.75\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 33.75 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 3.75\\text{ kW}$. Then $P_t = P_c + P_{SB} = 33.75\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 10.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.6$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.75,
      11.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 10.0\\text{ kW}$",
        "Modulation index $\\mu = 0.6$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.6)^2 / 2 = 0.36 / 2 = 0.180$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.180 = 1.180$.",
        "Step 3: Total transmitted power: $P_t = 10.0 \\times 1.180 = 11.8\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 11.8 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 1.8\\text{ kW}$. Then $P_t = P_c + P_{SB} = 11.8\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 15.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.7$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      18.62,
      18.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 15.0\\text{ kW}$",
        "Modulation index $\\mu = 0.7$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.7)^2 / 2 = 0.49 / 2 = 0.245$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.245 = 1.245$.",
        "Step 3: Total transmitted power: $P_t = 15.0 \\times 1.245 = 18.67\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 18.67 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 3.67\\text{ kW}$. Then $P_t = P_c + P_{SB} = 18.67\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 20.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.8$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      26.35,
      26.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 20.0\\text{ kW}$",
        "Modulation index $\\mu = 0.8$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.8)^2 / 2 = 0.64 / 2 = 0.320$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.320 = 1.320$.",
        "Step 3: Total transmitted power: $P_t = 20.0 \\times 1.320 = 26.4\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 26.4 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 6.4\\text{ kW}$. Then $P_t = P_c + P_{SB} = 26.4\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 25.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.5$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      28.07,
      28.17
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 25.0\\text{ kW}$",
        "Modulation index $\\mu = 0.5$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.5)^2 / 2 = 0.25 / 2 = 0.125$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.125 = 1.125$.",
        "Step 3: Total transmitted power: $P_t = 25.0 \\times 1.125 = 28.12\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 28.12 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 3.12\\text{ kW}$. Then $P_t = P_c + P_{SB} = 28.12\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal carrier wave with unmodulated carrier power $P_c = 30.0\\text{ kW}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = 0.6$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      35.35,
      35.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
      "givenInformationAndAssumptions": [
        "Carrier power $P_c = 30.0\\text{ kW}$",
        "Modulation index $\\mu = 0.6$"
      ],
      "relevantConcept": "Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)",
          "terms": [
            {
              "term": "P_c \\mu^2 / 2",
              "explanation": "Total power in both sidebands (USB + LSB)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute $\\mu^2 / 2$: $(0.6)^2 / 2 = 0.36 / 2 = 0.180$.",
        "Step 2: $1 + \\frac{\\mu^2}{2} = 1 + 0.180 = 1.180$.",
        "Step 3: Total transmitted power: $P_t = 30.0 \\times 1.180 = 35.4\\text{ kW}$."
      ],
      "finalAnswerWithUnits": "Pt = 35.4 kW",
      "alternativeApproachOrShortcut": "Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = 5.4\\text{ kW}$. Then $P_t = P_c + P_{SB} = 35.4\\text{ kW}$.",
      "commonMistakes": [
        "Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Amplitude Modulation",
      "Carrier Power",
      "Sideband Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 50\\text{ kHz}$ and a modulating message signal frequency of $f_m = 10\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 50\\text{ kHz}$",
        "Message frequency $f_m = 10\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 50\\text{ kHz}$ and $f_m = 10\\text{ kHz}$.",
        "Step 3: $BW = 2(50 + 10) = 2(60) = 120\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 120 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{50}{10} = 5.0$. Then $BW = 2(\\beta + 1)f_m = 2(6.0) \\times 10 = 120\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 60\\text{ kHz}$ and a modulating message signal frequency of $f_m = 15\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "150",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 60\\text{ kHz}$",
        "Message frequency $f_m = 15\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 60\\text{ kHz}$ and $f_m = 15\\text{ kHz}$.",
        "Step 3: $BW = 2(60 + 15) = 2(75) = 150\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 150 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{60}{15} = 4.0$. Then $BW = 2(\\beta + 1)f_m = 2(5.0) \\times 15 = 150\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 70\\text{ kHz}$ and a modulating message signal frequency of $f_m = 20\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "180",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 70\\text{ kHz}$",
        "Message frequency $f_m = 20\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 70\\text{ kHz}$ and $f_m = 20\\text{ kHz}$.",
        "Step 3: $BW = 2(70 + 20) = 2(90) = 180\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 180 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{70}{20} = 3.5$. Then $BW = 2(\\beta + 1)f_m = 2(4.5) \\times 20 = 180\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 80\\text{ kHz}$ and a modulating message signal frequency of $f_m = 10\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "180",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 80\\text{ kHz}$",
        "Message frequency $f_m = 10\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 80\\text{ kHz}$ and $f_m = 10\\text{ kHz}$.",
        "Step 3: $BW = 2(80 + 10) = 2(90) = 180\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 180 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{80}{10} = 8.0$. Then $BW = 2(\\beta + 1)f_m = 2(9.0) \\times 10 = 180\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 90\\text{ kHz}$ and a modulating message signal frequency of $f_m = 15\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "210",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 90\\text{ kHz}$",
        "Message frequency $f_m = 15\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 90\\text{ kHz}$ and $f_m = 15\\text{ kHz}$.",
        "Step 3: $BW = 2(90 + 15) = 2(105) = 210\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 210 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{90}{15} = 6.0$. Then $BW = 2(\\beta + 1)f_m = 2(7.0) \\times 15 = 210\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 50\\text{ kHz}$ and a modulating message signal frequency of $f_m = 20\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 50\\text{ kHz}$",
        "Message frequency $f_m = 20\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 50\\text{ kHz}$ and $f_m = 20\\text{ kHz}$.",
        "Step 3: $BW = 2(50 + 20) = 2(70) = 140\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 140 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{50}{20} = 2.5$. Then $BW = 2(\\beta + 1)f_m = 2(3.5) \\times 20 = 140\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 60\\text{ kHz}$ and a modulating message signal frequency of $f_m = 10\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 60\\text{ kHz}$",
        "Message frequency $f_m = 10\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 60\\text{ kHz}$ and $f_m = 10\\text{ kHz}$.",
        "Step 3: $BW = 2(60 + 10) = 2(70) = 140\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 140 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{60}{10} = 6.0$. Then $BW = 2(\\beta + 1)f_m = 2(7.0) \\times 10 = 140\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 70\\text{ kHz}$ and a modulating message signal frequency of $f_m = 15\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "170",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 70\\text{ kHz}$",
        "Message frequency $f_m = 15\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 70\\text{ kHz}$ and $f_m = 15\\text{ kHz}$.",
        "Step 3: $BW = 2(70 + 15) = 2(85) = 170\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 170 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{70}{15} = 4.67$. Then $BW = 2(\\beta + 1)f_m = 2(5.67) \\times 15 = 170\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 80\\text{ kHz}$ and a modulating message signal frequency of $f_m = 20\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 80\\text{ kHz}$",
        "Message frequency $f_m = 20\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 80\\text{ kHz}$ and $f_m = 20\\text{ kHz}$.",
        "Step 3: $BW = 2(80 + 20) = 2(100) = 200\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 200 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{80}{20} = 4.0$. Then $BW = 2(\\beta + 1)f_m = 2(5.0) \\times 20 = 200\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 90\\text{ kHz}$ and a modulating message signal frequency of $f_m = 10\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 90\\text{ kHz}$",
        "Message frequency $f_m = 10\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 90\\text{ kHz}$ and $f_m = 10\\text{ kHz}$.",
        "Step 3: $BW = 2(90 + 10) = 2(100) = 200\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 200 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{90}{10} = 9.0$. Then $BW = 2(\\beta + 1)f_m = 2(10.0) \\times 10 = 200\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 50\\text{ kHz}$ and a modulating message signal frequency of $f_m = 15\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "130",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 50\\text{ kHz}$",
        "Message frequency $f_m = 15\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 50\\text{ kHz}$ and $f_m = 15\\text{ kHz}$.",
        "Step 3: $BW = 2(50 + 15) = 2(65) = 130\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 130 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{50}{15} = 3.33$. Then $BW = 2(\\beta + 1)f_m = 2(4.33) \\times 15 = 130\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 60\\text{ kHz}$ and a modulating message signal frequency of $f_m = 20\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "160",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 60\\text{ kHz}$",
        "Message frequency $f_m = 20\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 60\\text{ kHz}$ and $f_m = 20\\text{ kHz}$.",
        "Step 3: $BW = 2(60 + 20) = 2(80) = 160\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 160 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{60}{20} = 3.0$. Then $BW = 2(\\beta + 1)f_m = 2(4.0) \\times 20 = 160\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 70\\text{ kHz}$ and a modulating message signal frequency of $f_m = 10\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "160",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 70\\text{ kHz}$",
        "Message frequency $f_m = 10\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 70\\text{ kHz}$ and $f_m = 10\\text{ kHz}$.",
        "Step 3: $BW = 2(70 + 10) = 2(80) = 160\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 160 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{70}{10} = 7.0$. Then $BW = 2(\\beta + 1)f_m = 2(8.0) \\times 10 = 160\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 80\\text{ kHz}$ and a modulating message signal frequency of $f_m = 15\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "190",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 80\\text{ kHz}$",
        "Message frequency $f_m = 15\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 80\\text{ kHz}$ and $f_m = 15\\text{ kHz}$.",
        "Step 3: $BW = 2(80 + 15) = 2(95) = 190\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 190 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{80}{15} = 5.33$. Then $BW = 2(\\beta + 1)f_m = 2(6.33) \\times 15 = 190\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 90\\text{ kHz}$ and a modulating message signal frequency of $f_m = 20\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "220",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 90\\text{ kHz}$",
        "Message frequency $f_m = 20\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 90\\text{ kHz}$ and $f_m = 20\\text{ kHz}$.",
        "Step 3: $BW = 2(90 + 20) = 2(110) = 220\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 220 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{90}{20} = 4.5$. Then $BW = 2(\\beta + 1)f_m = 2(5.5) \\times 20 = 220\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 50\\text{ kHz}$ and a modulating message signal frequency of $f_m = 10\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 50\\text{ kHz}$",
        "Message frequency $f_m = 10\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 50\\text{ kHz}$ and $f_m = 10\\text{ kHz}$.",
        "Step 3: $BW = 2(50 + 10) = 2(60) = 120\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 120 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{50}{10} = 5.0$. Then $BW = 2(\\beta + 1)f_m = 2(6.0) \\times 10 = 120\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 60\\text{ kHz}$ and a modulating message signal frequency of $f_m = 15\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "150",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 60\\text{ kHz}$",
        "Message frequency $f_m = 15\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 60\\text{ kHz}$ and $f_m = 15\\text{ kHz}$.",
        "Step 3: $BW = 2(60 + 15) = 2(75) = 150\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 150 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{60}{15} = 4.0$. Then $BW = 2(\\beta + 1)f_m = 2(5.0) \\times 15 = 150\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 70\\text{ kHz}$ and a modulating message signal frequency of $f_m = 20\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "180",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 70\\text{ kHz}$",
        "Message frequency $f_m = 20\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 70\\text{ kHz}$ and $f_m = 20\\text{ kHz}$.",
        "Step 3: $BW = 2(70 + 20) = 2(90) = 180\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 180 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{70}{20} = 3.5$. Then $BW = 2(\\beta + 1)f_m = 2(4.5) \\times 20 = 180\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 80\\text{ kHz}$ and a modulating message signal frequency of $f_m = 10\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "180",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 80\\text{ kHz}$",
        "Message frequency $f_m = 10\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 80\\text{ kHz}$ and $f_m = 10\\text{ kHz}$.",
        "Step 3: $BW = 2(80 + 10) = 2(90) = 180\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 180 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{80}{10} = 8.0$. Then $BW = 2(\\beta + 1)f_m = 2(9.0) \\times 10 = 180\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 90\\text{ kHz}$ and a modulating message signal frequency of $f_m = 15\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "210",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 90\\text{ kHz}$",
        "Message frequency $f_m = 15\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 90\\text{ kHz}$ and $f_m = 15\\text{ kHz}$.",
        "Step 3: $BW = 2(90 + 15) = 2(105) = 210\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 210 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{90}{15} = 6.0$. Then $BW = 2(\\beta + 1)f_m = 2(7.0) \\times 15 = 210\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 50\\text{ kHz}$ and a modulating message signal frequency of $f_m = 20\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 50\\text{ kHz}$",
        "Message frequency $f_m = 20\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 50\\text{ kHz}$ and $f_m = 20\\text{ kHz}$.",
        "Step 3: $BW = 2(50 + 20) = 2(70) = 140\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 140 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{50}{20} = 2.5$. Then $BW = 2(\\beta + 1)f_m = 2(3.5) \\times 20 = 140\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 60\\text{ kHz}$ and a modulating message signal frequency of $f_m = 10\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 60\\text{ kHz}$",
        "Message frequency $f_m = 10\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 60\\text{ kHz}$ and $f_m = 10\\text{ kHz}$.",
        "Step 3: $BW = 2(60 + 10) = 2(70) = 140\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 140 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{60}{10} = 6.0$. Then $BW = 2(\\beta + 1)f_m = 2(7.0) \\times 10 = 140\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 70\\text{ kHz}$ and a modulating message signal frequency of $f_m = 15\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "170",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 70\\text{ kHz}$",
        "Message frequency $f_m = 15\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 70\\text{ kHz}$ and $f_m = 15\\text{ kHz}$.",
        "Step 3: $BW = 2(70 + 15) = 2(85) = 170\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 170 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{70}{15} = 4.67$. Then $BW = 2(\\beta + 1)f_m = 2(5.67) \\times 15 = 170\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 80\\text{ kHz}$ and a modulating message signal frequency of $f_m = 20\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 80\\text{ kHz}$",
        "Message frequency $f_m = 20\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 80\\text{ kHz}$ and $f_m = 20\\text{ kHz}$.",
        "Step 3: $BW = 2(80 + 20) = 2(100) = 200\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 200 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{80}{20} = 4.0$. Then $BW = 2(\\beta + 1)f_m = 2(5.0) \\times 20 = 200\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analog Communications",
    "subject": "Communications",
    "topic": "Analog Communications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = 90\\text{ kHz}$ and a modulating message signal frequency of $f_m = 10\\text{ kHz}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
      "givenInformationAndAssumptions": [
        "Frequency deviation $\\Delta f = 90\\text{ kHz}$",
        "Message frequency $f_m = 10\\text{ kHz}$"
      ],
      "relevantConcept": "Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "BW_{FM} = 2(\\Delta f + f_m)",
          "terms": [
            {
              "term": "BW_{FM}",
              "explanation": "Carson's bandwidth containing 98% signal power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
        "Step 2: $\\Delta f = 90\\text{ kHz}$ and $f_m = 10\\text{ kHz}$.",
        "Step 3: $BW = 2(90 + 10) = 2(100) = 200\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "BW = 200 kHz",
      "alternativeApproachOrShortcut": "Using modulation index: $\\beta = \\frac{90}{10} = 9.0$. Then $BW = 2(\\beta + 1)f_m = 2(10.0) \\times 10 = 200\\text{ kHz}$.",
      "commonMistakes": [
        "Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Analog Communications",
      "Frequency Modulation",
      "Carson's Rule",
      "Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 7$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.8,
      44.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 7$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 7$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 7 = 1.76 + 42.14 = 43.9\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 43.9 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 43.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 8$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.82,
      50.02
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 8$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 8$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 8 = 1.76 + 48.16 = 49.92\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 49.92 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 49.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 9$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      55.84,
      56.04
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 9$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 9$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 9 = 1.76 + 54.18 = 55.94\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 55.94 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 55.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 10$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      61.86,
      62.06
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 10$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 10$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 10 = 1.76 + 60.2 = 61.96\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 61.96 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 61.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 11$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      67.88,
      68.08
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 11$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 11$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 11 = 1.76 + 66.22 = 67.98\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 67.98 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 67.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 7$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.8,
      44.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 7$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 7$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 7 = 1.76 + 42.14 = 43.9\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 43.9 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 43.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 8$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.82,
      50.02
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 8$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 8$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 8 = 1.76 + 48.16 = 49.92\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 49.92 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 49.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 9$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      55.84,
      56.04
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 9$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 9$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 9 = 1.76 + 54.18 = 55.94\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 55.94 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 55.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 10$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      61.86,
      62.06
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 10$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 10$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 10 = 1.76 + 60.2 = 61.96\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 61.96 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 61.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 11$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      67.88,
      68.08
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 11$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 11$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 11 = 1.76 + 66.22 = 67.98\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 67.98 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 67.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 7$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.8,
      44.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 7$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 7$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 7 = 1.76 + 42.14 = 43.9\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 43.9 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 43.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 8$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.82,
      50.02
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 8$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 8$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 8 = 1.76 + 48.16 = 49.92\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 49.92 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 49.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 9$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      55.84,
      56.04
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 9$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 9$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 9 = 1.76 + 54.18 = 55.94\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 55.94 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 55.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 10$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      61.86,
      62.06
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 10$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 10$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 10 = 1.76 + 60.2 = 61.96\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 61.96 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 61.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 11$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      67.88,
      68.08
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 11$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 11$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 11 = 1.76 + 66.22 = 67.98\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 67.98 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 67.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 7$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.8,
      44.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 7$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 7$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 7 = 1.76 + 42.14 = 43.9\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 43.9 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 43.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 8$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.82,
      50.02
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 8$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 8$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 8 = 1.76 + 48.16 = 49.92\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 49.92 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 49.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 9$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      55.84,
      56.04
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 9$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 9$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 9 = 1.76 + 54.18 = 55.94\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 55.94 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 55.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 10$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      61.86,
      62.06
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 10$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 10$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 10 = 1.76 + 60.2 = 61.96\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 61.96 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 61.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 11$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      67.88,
      68.08
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 11$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 11$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 11 = 1.76 + 66.22 = 67.98\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 67.98 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 67.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 7$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.8,
      44.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 7$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 7$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 7 = 1.76 + 42.14 = 43.9\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 43.9 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 43.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 8$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.82,
      50.02
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 8$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 8$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 8 = 1.76 + 48.16 = 49.92\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 49.92 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 49.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 9$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      55.84,
      56.04
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 9$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 9$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 9 = 1.76 + 54.18 = 55.94\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 55.94 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 55.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 10$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      61.86,
      62.06
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 10$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 10$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 10 = 1.76 + 60.2 = 61.96\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 61.96 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 61.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 11$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      67.88,
      68.08
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 11$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 11$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 11 = 1.76 + 66.22 = 67.98\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 67.98 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 67.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 7$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.8,
      44.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 7$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 7$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 7 = 1.76 + 42.14 = 43.9\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 43.9 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 43.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 8$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.82,
      50.02
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 8$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 8$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 8 = 1.76 + 48.16 = 49.92\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 49.92 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 49.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 9$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      55.84,
      56.04
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 9$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 9$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 9 = 1.76 + 54.18 = 55.94\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 55.94 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 55.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 10$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      61.86,
      62.06
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 10$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 10$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 10 = 1.76 + 60.2 = 61.96\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 61.96 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 61.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 11$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      67.88,
      68.08
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 11$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 11$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 11 = 1.76 + 66.22 = 67.98\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 67.98 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 67.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 7$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.8,
      44.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 7$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 7$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 7 = 1.76 + 42.14 = 43.9\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 43.9 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 43.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 8$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.82,
      50.02
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 8$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 8$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 8 = 1.76 + 48.16 = 49.92\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 49.92 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 49.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 9$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      55.84,
      56.04
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 9$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 9$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 9 = 1.76 + 54.18 = 55.94\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 55.94 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 55.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 10$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      61.86,
      62.06
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 10$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 10$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 10 = 1.76 + 60.2 = 61.96\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 61.96 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 61.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 11$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      67.88,
      68.08
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 11$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 11$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 11 = 1.76 + 66.22 = 67.98\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 67.98 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 67.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 7$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.8,
      44.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 7$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 7$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 7 = 1.76 + 42.14 = 43.9\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 43.9 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 43.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 8$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.82,
      50.02
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 8$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 8$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 8 = 1.76 + 48.16 = 49.92\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 49.92 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 49.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 9$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      55.84,
      56.04
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 9$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 9$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 9 = 1.76 + 54.18 = 55.94\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 55.94 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 55.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 10$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      61.86,
      62.06
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 10$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 10$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 10 = 1.76 + 60.2 = 61.96\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 61.96 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 61.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 11$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      67.88,
      68.08
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 11$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 11$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 11 = 1.76 + 66.22 = 67.98\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 67.98 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 67.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 7$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.8,
      44.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 7$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 7$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 7 = 1.76 + 42.14 = 43.9\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 43.9 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 43.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 8$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.82,
      50.02
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 8$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 8$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 8 = 1.76 + 48.16 = 49.92\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 49.92 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 49.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 9$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      55.84,
      56.04
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 9$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 9$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 9 = 1.76 + 54.18 = 55.94\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 55.94 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 55.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 10$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      61.86,
      62.06
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 10$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 10$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 10 = 1.76 + 60.2 = 61.96\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 61.96 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 61.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 11$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      67.88,
      68.08
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 11$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 11$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 11 = 1.76 + 66.22 = 67.98\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 67.98 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 67.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Baseband & Modulation",
    "subject": "Communications",
    "topic": "Digital Baseband & Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = 6$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      37.78,
      37.98
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
      "givenInformationAndAssumptions": [
        "Word length: $n = 6$ bits/sample",
        "Full-scale sinusoidal input signal"
      ],
      "relevantConcept": "For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "SQNR_{dB} = 1.76 + 6.02 n",
          "terms": [
            {
              "term": "6.02\\text{ dB}",
              "explanation": "SQNR improvement for every 1 added bit of resolution"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for sinusoidal SQNR: $SQNR_{dB} = 1.76 + 6.02 n$.",
        "Step 2: Substitute $n = 6$ bits:",
        "$$SQNR_{dB} = 1.76 + 6.02 \\times 6 = 1.76 + 36.12 = 37.88\\text{ dB}$$."
      ],
      "finalAnswerWithUnits": "SQNR = 37.88 dB",
      "alternativeApproachOrShortcut": "Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = 37.8\\text{ dB}$.",
      "commonMistakes": [
        "Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Communications",
      "PCM",
      "Quantization Noise",
      "SQNR"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 1\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 1\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 1\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{1} \\approx 2.0$."
      ],
      "finalAnswerWithUnits": "dmin = 2.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 2\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.78,
      2.88
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 2\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 2\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{2} \\approx 2.828$."
      ],
      "finalAnswerWithUnits": "dmin = 2.828",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 3\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.41,
      3.51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 3\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 3\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{3} \\approx 3.464$."
      ],
      "finalAnswerWithUnits": "dmin = 3.464",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 4\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 4\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 4\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{4} \\approx 4.0$."
      ],
      "finalAnswerWithUnits": "dmin = 4.0",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Digital Passband Modulation",
    "subject": "Communications",
    "topic": "Digital Passband Modulation",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = 5\\,\\mu\\text{J}$. The minimum Euclidean distance $d_{\\min}$ between the two constellation points in the signal space is ________ $\\mu\\text{J}^{1/2}$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.42,
      4.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
      "givenInformationAndAssumptions": [
        "Energy per bit $E_b = 5\\,\\mu\\text{J}$",
        "Antipodal BPSK modulation"
      ],
      "relevantConcept": "BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "d_{\\min} = 2\\sqrt{E_b}",
          "terms": [
            {
              "term": "d_{\\min}",
              "explanation": "Euclidean distance between constellation symbols"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Constellation coordinates: $s_1 = +\\sqrt{E_b}, \\quad s_2 = -\\sqrt{E_b}$.",
        "Step 2: Euclidean distance: $d_{\\min} = \\sqrt{E_b} - (-\\sqrt{E_b}) = 2\\sqrt{E_b}$.",
        "Step 3: For $E_b = 5\\,\\mu\\text{J}$: $d_{\\min} = 2\\sqrt{5} \\approx 4.472$."
      ],
      "finalAnswerWithUnits": "dmin = 4.472",
      "alternativeApproachOrShortcut": "Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
      "commonMistakes": [
        "Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Digital Modulation",
      "BPSK",
      "Constellation",
      "Euclidean Distance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 10\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 10\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 10\\text{ kHz} \\times 4 = 40\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 40 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 15\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 15\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 15\\text{ kHz} \\times 4 = 60\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 60 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 20\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 20\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 20\\text{ kHz} \\times 4 = 80\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 80 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 25\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 25\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 25\\text{ kHz} \\times 4 = 100\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 100 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 30\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 30\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 30\\text{ kHz} \\times 4 = 120\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 120 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 35\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 35\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 35\\text{ kHz} \\times 4 = 140\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 140 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 10\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 10\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 10\\text{ kHz} \\times 4 = 40\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 40 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 15\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 15\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 15\\text{ kHz} \\times 4 = 60\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 60 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 20\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 20\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 20\\text{ kHz} \\times 4 = 80\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 80 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 25\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 25\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 25\\text{ kHz} \\times 4 = 100\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 100 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 30\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 30\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 30\\text{ kHz} \\times 4 = 120\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 120 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 35\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 35\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 35\\text{ kHz} \\times 4 = 140\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 140 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 10\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 10\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 10\\text{ kHz} \\times 4 = 40\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 40 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 15\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 15\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 15\\text{ kHz} \\times 4 = 60\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 60 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 20\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 20\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 20\\text{ kHz} \\times 4 = 80\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 80 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 25\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 25\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 25\\text{ kHz} \\times 4 = 100\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 100 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 30\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 30\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 30\\text{ kHz} \\times 4 = 120\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 120 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 35\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 35\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 35\\text{ kHz} \\times 4 = 140\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 140 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 10\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 10\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 10\\text{ kHz} \\times 4 = 40\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 40 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 15\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 15\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 15\\text{ kHz} \\times 4 = 60\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 60 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 20\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 20\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 20\\text{ kHz} \\times 4 = 80\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 80 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 25\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 25\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 25\\text{ kHz} \\times 4 = 100\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 100 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 30\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 30\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 30\\text{ kHz} \\times 4 = 120\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 120 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 35\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 35\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 35\\text{ kHz} \\times 4 = 140\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 140 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 10\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 10\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 10\\text{ kHz} \\times 4 = 40\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 40 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 15\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 15\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 15\\text{ kHz} \\times 4 = 60\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 60 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 20\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 20\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 20\\text{ kHz} \\times 4 = 80\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 80 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 25\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 25\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 25\\text{ kHz} \\times 4 = 100\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 100 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 30\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 30\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 30\\text{ kHz} \\times 4 = 120\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 120 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 35\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 35\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 35\\text{ kHz} \\times 4 = 140\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 140 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 10\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 10\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 10\\text{ kHz} \\times 4 = 40\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 40 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 15\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 15\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 15\\text{ kHz} \\times 4 = 60\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 60 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 20\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 20\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 20\\text{ kHz} \\times 4 = 80\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 80 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 25\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 25\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 25\\text{ kHz} \\times 4 = 100\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 100 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 30\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 30\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 30\\text{ kHz} \\times 4 = 120\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 120 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 35\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 35\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 35\\text{ kHz} \\times 4 = 140\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 140 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 10\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 10\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 10\\text{ kHz} \\times 4 = 40\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 40 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 15\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 15\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 15\\text{ kHz} \\times 4 = 60\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 60 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 20\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 20\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 20\\text{ kHz} \\times 4 = 80\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 80 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 25\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 25\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 25\\text{ kHz} \\times 4 = 100\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 100 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 30\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 30\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 30\\text{ kHz} \\times 4 = 120\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 120 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 35\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 35\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 35\\text{ kHz} \\times 4 = 140\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 140 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 10\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 10\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 10\\text{ kHz} \\times 4 = 40\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 40 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 15\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 15\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 15\\text{ kHz} \\times 4 = 60\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 60 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 20\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 20\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 20\\text{ kHz} \\times 4 = 80\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 80 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 25\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 25\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 25\\text{ kHz} \\times 4 = 100\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 100 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 30\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 30\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 30\\text{ kHz} \\times 4 = 120\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 120 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 35\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "140",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 35\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 35\\text{ kHz} \\times 4 = 140\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 140 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 10\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 10\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 10\\text{ kHz} \\times 4 = 40\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 40 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-COM-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Information Theory & Coding",
    "subject": "Communications",
    "topic": "Information Theory & Coding",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = 15\\text{ kHz}$ and a signal-to-noise power ratio of $\\text{SNR} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps.",
    "options": null,
    "officialAnswer": "60",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
      "givenInformationAndAssumptions": [
        "Channel bandwidth $B = 15\\text{ kHz}$",
        "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"
      ],
      "relevantConcept": "Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
      "formulaAndTermExplanation": [
        {
          "formula": "C = B \\log_2(1 + \\text{SNR})",
          "terms": [
            {
              "term": "C",
              "explanation": "Maximum channel capacity in bits/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute argument: $1 + \\text{SNR} = 1 + 15 = 16$.",
        "Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{ bits/symbol}$.",
        "Step 3: Channel capacity: $C = B \\times \\log_2(16) = 15\\text{ kHz} \\times 4 = 60\\text{ kbps}$."
      ],
      "finalAnswerWithUnits": "C = 60 kbps",
      "alternativeApproachOrShortcut": "Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
      "commonMistakes": [
        "Treating SNR=15 as decibels instead of linear power ratio."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Communications",
      "Information Theory",
      "Shannon Capacity",
      "Channel Capacity",
      "AWGN"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
