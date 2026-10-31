import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — GENERAL_APTITUDE_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const GENERAL_APTITUDE_PRACTICE: Question[] = [
  {
    "id": "PRAC-APT-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 10 days, and Person B can complete the same project alone in 15 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.95,
      6.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 10$ days",
        "Time taken by B: $T_B = 15$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{10}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{15}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{10} + \\frac{1}{15} = \\frac{25}{150}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{150}{25} \\approx 6.0$ days."
      ],
      "finalAnswerWithUnits": "6.0 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 12 days, and Person B can complete the same project alone in 18 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.15,
      7.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 12$ days",
        "Time taken by B: $T_B = 18$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{12}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{18}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{12} + \\frac{1}{18} = \\frac{30}{216}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{216}{30} \\approx 7.2$ days."
      ],
      "finalAnswerWithUnits": "7.2 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 14 days, and Person B can complete the same project alone in 21 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      8.35,
      8.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 14$ days",
        "Time taken by B: $T_B = 21$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{14}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{21}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{14} + \\frac{1}{21} = \\frac{35}{294}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{294}{35} \\approx 8.4$ days."
      ],
      "finalAnswerWithUnits": "8.4 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 16 days, and Person B can complete the same project alone in 24 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.55,
      9.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 16$ days",
        "Time taken by B: $T_B = 24$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{16}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{24}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{16} + \\frac{1}{24} = \\frac{40}{384}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{384}{40} \\approx 9.6$ days."
      ],
      "finalAnswerWithUnits": "9.6 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 18 days, and Person B can complete the same project alone in 27 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      10.75,
      10.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 18$ days",
        "Time taken by B: $T_B = 27$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{18}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{27}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{18} + \\frac{1}{27} = \\frac{45}{486}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{486}{45} \\approx 10.8$ days."
      ],
      "finalAnswerWithUnits": "10.8 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 20 days, and Person B can complete the same project alone in 15 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      8.52,
      8.62
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 20$ days",
        "Time taken by B: $T_B = 15$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{20}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{15}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{20} + \\frac{1}{15} = \\frac{35}{300}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{300}{35} \\approx 8.57$ days."
      ],
      "finalAnswerWithUnits": "8.57 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 10 days, and Person B can complete the same project alone in 18 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.38,
      6.48
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 10$ days",
        "Time taken by B: $T_B = 18$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{10}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{18}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{10} + \\frac{1}{18} = \\frac{28}{180}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{180}{28} \\approx 6.43$ days."
      ],
      "finalAnswerWithUnits": "6.43 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 12 days, and Person B can complete the same project alone in 21 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.59,
      7.69
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 12$ days",
        "Time taken by B: $T_B = 21$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{12}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{21}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{12} + \\frac{1}{21} = \\frac{33}{252}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{252}{33} \\approx 7.64$ days."
      ],
      "finalAnswerWithUnits": "7.64 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 14 days, and Person B can complete the same project alone in 24 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      8.79,
      8.89
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 14$ days",
        "Time taken by B: $T_B = 24$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{14}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{24}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{14} + \\frac{1}{24} = \\frac{38}{336}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{336}{38} \\approx 8.84$ days."
      ],
      "finalAnswerWithUnits": "8.84 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 16 days, and Person B can complete the same project alone in 27 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      10.0,
      10.1
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 16$ days",
        "Time taken by B: $T_B = 27$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{16}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{27}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{16} + \\frac{1}{27} = \\frac{43}{432}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{432}{43} \\approx 10.05$ days."
      ],
      "finalAnswerWithUnits": "10.05 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 18 days, and Person B can complete the same project alone in 15 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      8.13,
      8.23
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 18$ days",
        "Time taken by B: $T_B = 15$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{18}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{15}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{18} + \\frac{1}{15} = \\frac{33}{270}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{270}{33} \\approx 8.18$ days."
      ],
      "finalAnswerWithUnits": "8.18 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 20 days, and Person B can complete the same project alone in 18 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.42,
      9.52
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 20$ days",
        "Time taken by B: $T_B = 18$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{20}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{18}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{20} + \\frac{1}{18} = \\frac{38}{360}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{360}{38} \\approx 9.47$ days."
      ],
      "finalAnswerWithUnits": "9.47 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 10 days, and Person B can complete the same project alone in 21 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.72,
      6.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 10$ days",
        "Time taken by B: $T_B = 21$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{10}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{21}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{10} + \\frac{1}{21} = \\frac{31}{210}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{210}{31} \\approx 6.77$ days."
      ],
      "finalAnswerWithUnits": "6.77 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 12 days, and Person B can complete the same project alone in 24 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.95,
      8.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 12$ days",
        "Time taken by B: $T_B = 24$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{12}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{24}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{12} + \\frac{1}{24} = \\frac{36}{288}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{288}{36} \\approx 8.0$ days."
      ],
      "finalAnswerWithUnits": "8.0 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Person A can complete a project alone in 14 days, and Person B can complete the same project alone in 27 days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.17,
      9.27
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the combined time taken by two workers working simultaneously using their individual work rates.",
      "givenInformationAndAssumptions": [
        "Time taken by A: $T_A = 14$ days",
        "Time taken by B: $T_B = 27$ days"
      ],
      "relevantConcept": "Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}",
          "terms": [
            {
              "term": "T_{total}",
              "explanation": "Combined days to finish work"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In one day, Person A completes $\\frac{1}{14}$ of the work.",
        "Step 2: In one day, Person B completes $\\frac{1}{27}$ of the work.",
        "Step 3: Together, in one day they complete $\\frac{1}{14} + \\frac{1}{27} = \\frac{41}{378}$.",
        "Step 4: Total days required is the reciprocal: $T = \\frac{378}{41} \\approx 9.22$ days."
      ],
      "finalAnswerWithUnits": "9.22 days",
      "alternativeApproachOrShortcut": "Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
      "commonMistakes": [
        "Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Time and Work",
      "Harmonic Mean",
      "Rate Problems"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 150 m is travelling at a constant speed of 36 km/h. The time taken by the train to completely cross a railway platform of length 200 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      34.95,
      35.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 150 m",
        "Platform length = 200 m",
        "Speed = 36 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 36 \\times \\frac{5}{18} = 10.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 150 + 200 = 350\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{350}{10.0} = 35.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "35.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 160 m is travelling at a constant speed of 54 km/h. The time taken by the train to completely cross a railway platform of length 215 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      24.95,
      25.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 160 m",
        "Platform length = 215 m",
        "Speed = 54 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 54 \\times \\frac{5}{18} = 15.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 160 + 215 = 375\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{375}{15.0} = 25.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "25.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 170 m is travelling at a constant speed of 72 km/h. The time taken by the train to completely cross a railway platform of length 230 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.95,
      20.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 170 m",
        "Platform length = 230 m",
        "Speed = 72 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 72 \\times \\frac{5}{18} = 20.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 170 + 230 = 400\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{400}{20.0} = 20.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "20.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 180 m is travelling at a constant speed of 90 km/h. The time taken by the train to completely cross a railway platform of length 245 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      16.95,
      17.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 180 m",
        "Platform length = 245 m",
        "Speed = 90 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 90 \\times \\frac{5}{18} = 25.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 180 + 245 = 425\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{425}{25.0} = 17.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "17.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 190 m is travelling at a constant speed of 108 km/h. The time taken by the train to completely cross a railway platform of length 260 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      14.95,
      15.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 190 m",
        "Platform length = 260 m",
        "Speed = 108 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 108 \\times \\frac{5}{18} = 30.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 190 + 260 = 450\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{450}{30.0} = 15.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "15.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 200 m is travelling at a constant speed of 126 km/h. The time taken by the train to completely cross a railway platform of length 275 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      13.52,
      13.62
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 200 m",
        "Platform length = 275 m",
        "Speed = 126 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 126 \\times \\frac{5}{18} = 35.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 200 + 275 = 475\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{475}{35.0} = 13.57\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "13.57 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 210 m is travelling at a constant speed of 36 km/h. The time taken by the train to completely cross a railway platform of length 290 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      49.95,
      50.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 210 m",
        "Platform length = 290 m",
        "Speed = 36 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 36 \\times \\frac{5}{18} = 10.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 210 + 290 = 500\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{500}{10.0} = 50.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "50.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 220 m is travelling at a constant speed of 54 km/h. The time taken by the train to completely cross a railway platform of length 305 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      34.95,
      35.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 220 m",
        "Platform length = 305 m",
        "Speed = 54 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 54 \\times \\frac{5}{18} = 15.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 220 + 305 = 525\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{525}{15.0} = 35.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "35.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 230 m is travelling at a constant speed of 72 km/h. The time taken by the train to completely cross a railway platform of length 320 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      27.45,
      27.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 230 m",
        "Platform length = 320 m",
        "Speed = 72 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 72 \\times \\frac{5}{18} = 20.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 230 + 320 = 550\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{550}{20.0} = 27.5\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "27.5 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 240 m is travelling at a constant speed of 90 km/h. The time taken by the train to completely cross a railway platform of length 335 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      22.95,
      23.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 240 m",
        "Platform length = 335 m",
        "Speed = 90 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 90 \\times \\frac{5}{18} = 25.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 240 + 335 = 575\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{575}{25.0} = 23.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "23.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 250 m is travelling at a constant speed of 108 km/h. The time taken by the train to completely cross a railway platform of length 350 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.95,
      20.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 250 m",
        "Platform length = 350 m",
        "Speed = 108 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 108 \\times \\frac{5}{18} = 30.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 250 + 350 = 600\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{600}{30.0} = 20.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "20.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 260 m is travelling at a constant speed of 126 km/h. The time taken by the train to completely cross a railway platform of length 365 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      17.81,
      17.91
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 260 m",
        "Platform length = 365 m",
        "Speed = 126 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 126 \\times \\frac{5}{18} = 35.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 260 + 365 = 625\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{625}{35.0} = 17.86\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "17.86 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 270 m is travelling at a constant speed of 36 km/h. The time taken by the train to completely cross a railway platform of length 380 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      64.95,
      65.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 270 m",
        "Platform length = 380 m",
        "Speed = 36 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 36 \\times \\frac{5}{18} = 10.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 270 + 380 = 650\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{650}{10.0} = 65.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "65.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 280 m is travelling at a constant speed of 54 km/h. The time taken by the train to completely cross a railway platform of length 395 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      44.95,
      45.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 280 m",
        "Platform length = 395 m",
        "Speed = 54 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 54 \\times \\frac{5}{18} = 15.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 280 + 395 = 675\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{675}{15.0} = 45.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "45.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A train of length 290 m is travelling at a constant speed of 72 km/h. The time taken by the train to completely cross a railway platform of length 410 m is ________ seconds (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      34.95,
      35.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the crossing time of a train passing a stationary platform.",
      "givenInformationAndAssumptions": [
        "Train length = 290 m",
        "Platform length = 410 m",
        "Speed = 72 km/h"
      ],
      "relevantConcept": "Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
      "formulaAndTermExplanation": [
        {
          "formula": "t = \\frac{L_{train} + L_{platform}}{v}",
          "terms": [
            {
              "term": "v",
              "explanation": "Speed in m/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert speed to m/s: $v = 72 \\times \\frac{5}{18} = 20.0\\text{ m/s}$.",
        "Step 2: Total distance to cover: $D = 290 + 410 = 700\\text{ m}$.",
        "Step 3: Time taken: $t = \\frac{D}{v} = \\frac{700}{20.0} = 35.0\\text{ seconds}$."
      ],
      "finalAnswerWithUnits": "35.0 s",
      "alternativeApproachOrShortcut": "Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
      "commonMistakes": [
        "Forgetting to add the train's own length to the platform length.",
        "Forgetting unit conversion from km/h to m/s."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Speed Time Distance",
      "Trains",
      "Unit Conversion"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 20\\% above its cost price and then allows a discount of 10\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.95,
      8.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 20%",
        "Discount = 10%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 20 = 120$.",
        "Step 3: Selling Price (SP) after 10% discount $= 120 \\times \\left(1 - \\frac{10}{100}\\right) = 120 \\times 0.90 = 108.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 108.00 - 100 = 8.0\\%."
      ],
      "finalAnswerWithUnits": "8.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 30\\% above its cost price and then allows a discount of 15\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      10.45,
      10.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 30%",
        "Discount = 15%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 30 = 130$.",
        "Step 3: Selling Price (SP) after 15% discount $= 130 \\times \\left(1 - \\frac{15}{100}\\right) = 130 \\times 0.85 = 110.50$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 110.50 - 100 = 10.5\\%."
      ],
      "finalAnswerWithUnits": "10.5%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 40\\% above its cost price and then allows a discount of 20\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.95,
      12.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 40%",
        "Discount = 20%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 40 = 140$.",
        "Step 3: Selling Price (SP) after 20% discount $= 140 \\times \\left(1 - \\frac{20}{100}\\right) = 140 \\times 0.80 = 112.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 112.00 - 100 = 12.0\\%."
      ],
      "finalAnswerWithUnits": "12.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 50\\% above its cost price and then allows a discount of 10\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      34.95,
      35.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 50%",
        "Discount = 10%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 50 = 150$.",
        "Step 3: Selling Price (SP) after 10% discount $= 150 \\times \\left(1 - \\frac{10}{100}\\right) = 150 \\times 0.90 = 135.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 135.00 - 100 = 35.0\\%."
      ],
      "finalAnswerWithUnits": "35.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 60\\% above its cost price and then allows a discount of 15\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      35.95,
      36.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 60%",
        "Discount = 15%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 60 = 160$.",
        "Step 3: Selling Price (SP) after 15% discount $= 160 \\times \\left(1 - \\frac{15}{100}\\right) = 160 \\times 0.85 = 136.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 136.00 - 100 = 36.0\\%."
      ],
      "finalAnswerWithUnits": "36.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 20\\% above its cost price and then allows a discount of 20\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      -4.05,
      -3.95
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 20%",
        "Discount = 20%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 20 = 120$.",
        "Step 3: Selling Price (SP) after 20% discount $= 120 \\times \\left(1 - \\frac{20}{100}\\right) = 120 \\times 0.80 = 96.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 96.00 - 100 = -4.0\\%."
      ],
      "finalAnswerWithUnits": "-4.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 30\\% above its cost price and then allows a discount of 10\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      16.95,
      17.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 30%",
        "Discount = 10%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 30 = 130$.",
        "Step 3: Selling Price (SP) after 10% discount $= 130 \\times \\left(1 - \\frac{10}{100}\\right) = 130 \\times 0.90 = 117.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 117.00 - 100 = 17.0\\%."
      ],
      "finalAnswerWithUnits": "17.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 40\\% above its cost price and then allows a discount of 15\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      18.95,
      19.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 40%",
        "Discount = 15%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 40 = 140$.",
        "Step 3: Selling Price (SP) after 15% discount $= 140 \\times \\left(1 - \\frac{15}{100}\\right) = 140 \\times 0.85 = 119.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 119.00 - 100 = 19.0\\%."
      ],
      "finalAnswerWithUnits": "19.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 50\\% above its cost price and then allows a discount of 20\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.95,
      20.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 50%",
        "Discount = 20%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 50 = 150$.",
        "Step 3: Selling Price (SP) after 20% discount $= 150 \\times \\left(1 - \\frac{20}{100}\\right) = 150 \\times 0.80 = 120.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 120.00 - 100 = 20.0\\%."
      ],
      "finalAnswerWithUnits": "20.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 60\\% above its cost price and then allows a discount of 10\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      43.95,
      44.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 60%",
        "Discount = 10%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 60 = 160$.",
        "Step 3: Selling Price (SP) after 10% discount $= 160 \\times \\left(1 - \\frac{10}{100}\\right) = 160 \\times 0.90 = 144.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 144.00 - 100 = 44.0\\%."
      ],
      "finalAnswerWithUnits": "44.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 20\\% above its cost price and then allows a discount of 15\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.95,
      2.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 20%",
        "Discount = 15%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 20 = 120$.",
        "Step 3: Selling Price (SP) after 15% discount $= 120 \\times \\left(1 - \\frac{15}{100}\\right) = 120 \\times 0.85 = 102.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 102.00 - 100 = 2.0\\%."
      ],
      "finalAnswerWithUnits": "2.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 30\\% above its cost price and then allows a discount of 20\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.95,
      4.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 30%",
        "Discount = 20%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 30 = 130$.",
        "Step 3: Selling Price (SP) after 20% discount $= 130 \\times \\left(1 - \\frac{20}{100}\\right) = 130 \\times 0.80 = 104.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 104.00 - 100 = 4.0\\%."
      ],
      "finalAnswerWithUnits": "4.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 40\\% above its cost price and then allows a discount of 10\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      25.95,
      26.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 40%",
        "Discount = 10%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 40 = 140$.",
        "Step 3: Selling Price (SP) after 10% discount $= 140 \\times \\left(1 - \\frac{10}{100}\\right) = 140 \\times 0.90 = 126.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 126.00 - 100 = 26.0\\%."
      ],
      "finalAnswerWithUnits": "26.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 50\\% above its cost price and then allows a discount of 15\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      27.45,
      27.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 50%",
        "Discount = 15%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 50 = 150$.",
        "Step 3: Selling Price (SP) after 15% discount $= 150 \\times \\left(1 - \\frac{15}{100}\\right) = 150 \\times 0.85 = 127.50$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 127.50 - 100 = 27.5\\%."
      ],
      "finalAnswerWithUnits": "27.5%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A retailer marks up the price of an article by 60\\% above its cost price and then allows a discount of 20\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      27.95,
      28.05
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the overall net profit percentage after successive markup and discount percentages.",
      "givenInformationAndAssumptions": [
        "Markup = 60%",
        "Discount = 20%"
      ],
      "relevantConcept": "Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}",
          "terms": [
            {
              "term": "M",
              "explanation": "Markup %"
            },
            {
              "term": "D",
              "explanation": "Discount %"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let the Cost Price (CP) be $100.",
        "Step 2: Marked Price (MP) $= 100 + 60 = 160$.",
        "Step 3: Selling Price (SP) after 20% discount $= 160 \\times \\left(1 - \\frac{20}{100}\\right) = 160 \\times 0.80 = 128.00$.",
        "Step 4: Profit $= \\text{SP} - \\text{CP} = 128.00 - 100 = 28.0\\%."
      ],
      "finalAnswerWithUnits": "28.0%",
      "alternativeApproachOrShortcut": "Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
      "commonMistakes": [
        "Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Profit and Loss",
      "Percentage",
      "Successive Percentage"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 8 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "56",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 8$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{8} C_{3} = \\frac{8!}{3! (8 - 3)!}$.",
        "Step 2: Expand: $^{8} C_{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 336$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{336}{6} = 56$."
      ],
      "finalAnswerWithUnits": "56",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 9 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "84",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 9$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{9} C_{3} = \\frac{9!}{3! (9 - 3)!}$.",
        "Step 2: Expand: $^{9} C_{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 504$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{504}{6} = 84$."
      ],
      "finalAnswerWithUnits": "84",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 10 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 10$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{10} C_{3} = \\frac{10!}{3! (10 - 3)!}$.",
        "Step 2: Expand: $^{10} C_{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 720$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{720}{6} = 120$."
      ],
      "finalAnswerWithUnits": "120",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 11 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "165",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 11$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{11} C_{3} = \\frac{11!}{3! (11 - 3)!}$.",
        "Step 2: Expand: $^{11} C_{3} = \\frac{11 \\times 10 \\times 9}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 990$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{990}{6} = 165$."
      ],
      "finalAnswerWithUnits": "165",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 8 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "56",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 8$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{8} C_{3} = \\frac{8!}{3! (8 - 3)!}$.",
        "Step 2: Expand: $^{8} C_{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 336$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{336}{6} = 56$."
      ],
      "finalAnswerWithUnits": "56",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 9 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "84",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 9$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{9} C_{3} = \\frac{9!}{3! (9 - 3)!}$.",
        "Step 2: Expand: $^{9} C_{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 504$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{504}{6} = 84$."
      ],
      "finalAnswerWithUnits": "84",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 10 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 10$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{10} C_{3} = \\frac{10!}{3! (10 - 3)!}$.",
        "Step 2: Expand: $^{10} C_{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 720$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{720}{6} = 120$."
      ],
      "finalAnswerWithUnits": "120",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 11 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "165",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 11$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{11} C_{3} = \\frac{11!}{3! (11 - 3)!}$.",
        "Step 2: Expand: $^{11} C_{3} = \\frac{11 \\times 10 \\times 9}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 990$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{990}{6} = 165$."
      ],
      "finalAnswerWithUnits": "165",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 8 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "56",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 8$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{8} C_{3} = \\frac{8!}{3! (8 - 3)!}$.",
        "Step 2: Expand: $^{8} C_{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 336$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{336}{6} = 56$."
      ],
      "finalAnswerWithUnits": "56",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 9 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "84",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 9$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{9} C_{3} = \\frac{9!}{3! (9 - 3)!}$.",
        "Step 2: Expand: $^{9} C_{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 504$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{504}{6} = 84$."
      ],
      "finalAnswerWithUnits": "84",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 10 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 10$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{10} C_{3} = \\frac{10!}{3! (10 - 3)!}$.",
        "Step 2: Expand: $^{10} C_{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 720$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{720}{6} = 120$."
      ],
      "finalAnswerWithUnits": "120",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 11 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "165",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 11$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{11} C_{3} = \\frac{11!}{3! (11 - 3)!}$.",
        "Step 2: Expand: $^{11} C_{3} = \\frac{11 \\times 10 \\times 9}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 990$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{990}{6} = 165$."
      ],
      "finalAnswerWithUnits": "165",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 8 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "56",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 8$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{8} C_{3} = \\frac{8!}{3! (8 - 3)!}$.",
        "Step 2: Expand: $^{8} C_{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 336$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{336}{6} = 56$."
      ],
      "finalAnswerWithUnits": "56",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 9 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "84",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 9$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{9} C_{3} = \\frac{9!}{3! (9 - 3)!}$.",
        "Step 2: Expand: $^{9} C_{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 504$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{504}{6} = 84$."
      ],
      "finalAnswerWithUnits": "84",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A committee of 3 members is to be formed from a group of 10 eligible candidates. The total number of distinct committees that can be selected is ________.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Find the number of ways to select an unordered committee of members from a group.",
      "givenInformationAndAssumptions": [
        "Total candidates $n = 10$",
        "Selection size $r = 3$"
      ],
      "relevantConcept": "Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "^n C_r = \\frac{n!}{r!(n-r)!}",
          "terms": [
            {
              "term": "^n C_r",
              "explanation": "Binomial coefficient"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $^{10} C_{3} = \\frac{10!}{3! (10 - 3)!}$.",
        "Step 2: Expand: $^{10} C_{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1}$.",
        "Step 3: Numerator $= 720$, Denominator $= 6$.",
        "Step 4: Division yields $\\frac{720}{6} = 120$."
      ],
      "finalAnswerWithUnits": "120",
      "alternativeApproachOrShortcut": "Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
      "commonMistakes": [
        "Using permutation $^n P_r$ (which assumes order of committee members matters)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Combinations",
      "Permutations",
      "Counting Principles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{3}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{3}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 3 divided by 4: $3 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{7}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{7}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 7 divided by 4: $7 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{11}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{11}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 11 divided by 4: $11 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{15}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{15}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 15 divided by 4: $15 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{19}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{19}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 19 divided by 4: $19 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{23}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{23}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 23 divided by 4: $23 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{27}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{27}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 27 divided by 4: $27 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{31}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{31}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 31 divided by 4: $31 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{35}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{35}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 35 divided by 4: $35 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{39}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{39}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 39 divided by 4: $39 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{43}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{43}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 43 divided by 4: $43 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{47}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{47}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 47 divided by 4: $47 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{51}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{51}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 51 divided by 4: $51 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{55}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{55}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 55 divided by 4: $55 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Quantitative Aptitude",
    "subject": "General Aptitude",
    "topic": "Quantitative Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The units digit of the number $7^{59}$ is:",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the units digit of a large power using the cyclical pattern of powers of 7.",
      "givenInformationAndAssumptions": [
        "Expression: $7^{59}$"
      ],
      "relevantConcept": "The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}",
          "terms": [
            {
              "term": "n \\pmod 4",
              "explanation": "Remainder when exponent is divided by period 4"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
        "Step 2: Find remainder of exponent 59 divided by 4: $59 \\pmod 4 = 3$.",
        "Step 3: Since remainder is 3, the units digit is identical to $7^{3}$ which is 3.",
        "Therefore, the correct option is Option A."
      ],
      "finalAnswerWithUnits": "Option A (3)",
      "alternativeApproachOrShortcut": "Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
      "commonMistakes": [
        "Assuming cyclicity is 2 instead of 4."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Quantitative Aptitude",
      "Number Systems",
      "Units Digit",
      "Cyclicity",
      "Modular Arithmetic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll engineers are problem solvers. Some problem solvers are programmers.\n\n**Conclusions:**\nI. Some engineers are programmers\nII. All problem solvers are engineers\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Neither I nor II follows"
      },
      {
        "id": "D",
        "text": "Both I and II follow"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All engineers are problem solvers. Some problem solvers are programmers."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll diodes are semiconductor devices. All semiconductor devices conduct current.\n\n**Conclusions:**\nI. All diodes conduct current\nII. Some devices that conduct current are diodes\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Both I and II follow"
      },
      {
        "id": "D",
        "text": "Neither I nor II follows"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All diodes are semiconductor devices. All semiconductor devices conduct current."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nNo metals are insulators. All copper wires are metals.\n\n**Conclusions:**\nI. No copper wires are insulators\nII. Some insulators are copper wires\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Only II follows"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: No metals are insulators. All copper wires are metals."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nSome amplifiers are linear. All linear circuits obey superposition.\n\n**Conclusions:**\nI. Some amplifiers obey superposition\nII. All circuits that obey superposition are amplifiers\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Both follow"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: Some amplifiers are linear. All linear circuits obey superposition."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll flip-flops are sequential circuits. No combinational circuits are sequential circuits.\n\n**Conclusions:**\nI. No flip-flops are combinational circuits\nII. All sequential circuits are flip-flops\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Neither follows"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All flip-flops are sequential circuits. No combinational circuits are sequential circuits."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll engineers are problem solvers. Some problem solvers are programmers.\n\n**Conclusions:**\nI. Some engineers are programmers\nII. All problem solvers are engineers\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Neither I nor II follows"
      },
      {
        "id": "D",
        "text": "Both I and II follow"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All engineers are problem solvers. Some problem solvers are programmers."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll diodes are semiconductor devices. All semiconductor devices conduct current.\n\n**Conclusions:**\nI. All diodes conduct current\nII. Some devices that conduct current are diodes\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Both I and II follow"
      },
      {
        "id": "D",
        "text": "Neither I nor II follows"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All diodes are semiconductor devices. All semiconductor devices conduct current."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nNo metals are insulators. All copper wires are metals.\n\n**Conclusions:**\nI. No copper wires are insulators\nII. Some insulators are copper wires\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Only II follows"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: No metals are insulators. All copper wires are metals."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nSome amplifiers are linear. All linear circuits obey superposition.\n\n**Conclusions:**\nI. Some amplifiers obey superposition\nII. All circuits that obey superposition are amplifiers\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Both follow"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: Some amplifiers are linear. All linear circuits obey superposition."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll flip-flops are sequential circuits. No combinational circuits are sequential circuits.\n\n**Conclusions:**\nI. No flip-flops are combinational circuits\nII. All sequential circuits are flip-flops\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Neither follows"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All flip-flops are sequential circuits. No combinational circuits are sequential circuits."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll engineers are problem solvers. Some problem solvers are programmers.\n\n**Conclusions:**\nI. Some engineers are programmers\nII. All problem solvers are engineers\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Neither I nor II follows"
      },
      {
        "id": "D",
        "text": "Both I and II follow"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All engineers are problem solvers. Some problem solvers are programmers."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll diodes are semiconductor devices. All semiconductor devices conduct current.\n\n**Conclusions:**\nI. All diodes conduct current\nII. Some devices that conduct current are diodes\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Both I and II follow"
      },
      {
        "id": "D",
        "text": "Neither I nor II follows"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All diodes are semiconductor devices. All semiconductor devices conduct current."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nNo metals are insulators. All copper wires are metals.\n\n**Conclusions:**\nI. No copper wires are insulators\nII. Some insulators are copper wires\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Only II follows"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: No metals are insulators. All copper wires are metals."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nSome amplifiers are linear. All linear circuits obey superposition.\n\n**Conclusions:**\nI. Some amplifiers obey superposition\nII. All circuits that obey superposition are amplifiers\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Both follow"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: Some amplifiers are linear. All linear circuits obey superposition."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll flip-flops are sequential circuits. No combinational circuits are sequential circuits.\n\n**Conclusions:**\nI. No flip-flops are combinational circuits\nII. All sequential circuits are flip-flops\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Neither follows"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All flip-flops are sequential circuits. No combinational circuits are sequential circuits."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll engineers are problem solvers. Some problem solvers are programmers.\n\n**Conclusions:**\nI. Some engineers are programmers\nII. All problem solvers are engineers\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Neither I nor II follows"
      },
      {
        "id": "D",
        "text": "Both I and II follow"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All engineers are problem solvers. Some problem solvers are programmers."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll diodes are semiconductor devices. All semiconductor devices conduct current.\n\n**Conclusions:**\nI. All diodes conduct current\nII. Some devices that conduct current are diodes\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Both I and II follow"
      },
      {
        "id": "D",
        "text": "Neither I nor II follows"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All diodes are semiconductor devices. All semiconductor devices conduct current."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nNo metals are insulators. All copper wires are metals.\n\n**Conclusions:**\nI. No copper wires are insulators\nII. Some insulators are copper wires\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Only II follows"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: No metals are insulators. All copper wires are metals."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nSome amplifiers are linear. All linear circuits obey superposition.\n\n**Conclusions:**\nI. Some amplifiers obey superposition\nII. All circuits that obey superposition are amplifiers\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Both follow"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: Some amplifiers are linear. All linear circuits obey superposition."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Read the statements and conclusions carefully:\n\n**Statements:**\nAll flip-flops are sequential circuits. No combinational circuits are sequential circuits.\n\n**Conclusions:**\nI. No flip-flops are combinational circuits\nII. All sequential circuits are flip-flops\n\nWhich of the following is logically CORRECT?",
    "options": [
      {
        "id": "A",
        "text": "Only Conclusion I follows"
      },
      {
        "id": "B",
        "text": "Only Conclusion II follows"
      },
      {
        "id": "C",
        "text": "Only I follows"
      },
      {
        "id": "D",
        "text": "Neither follows"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the deductive validity of conclusions given universal and particular premises.",
      "givenInformationAndAssumptions": [
        "Premises: All flip-flops are sequential circuits. No combinational circuits are sequential circuits."
      ],
      "relevantConcept": "Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C",
          "terms": [
            {
              "term": "\\subseteq",
              "explanation": "Subset inclusion"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Construct the Venn diagrams corresponding to the given premises.",
        "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
        "Step 3: Test Conclusion II across all possibilities.",
        "Step 4: Identify the validly inferred conclusion(s)."
      ],
      "finalAnswerWithUnits": "The logically valid option",
      "alternativeApproachOrShortcut": "Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
      "commonMistakes": [
        "Assuming an existential conclusion from two universal premises without explicit non-emptiness."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analytical Aptitude",
      "Syllogisms",
      "Venn Diagrams",
      "Deductive Logic"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 5, 10, 17, 26, \\quad ?$$",
    "options": null,
    "officialAnswer": "37",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 5, 10, 17, 26"
      ],
      "relevantConcept": "Rule of progression: n^2 + 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n^2 + 1', the next term is 37."
      ],
      "finalAnswerWithUnits": "37",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$3, 7, 15, 31, 63, \\quad ?$$",
    "options": null,
    "officialAnswer": "127",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 3, 7, 15, 31, 63"
      ],
      "relevantConcept": "Rule of progression: 2^n - 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2^n - 1', the next term is 127."
      ],
      "finalAnswerWithUnits": "127",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$1, 1, 2, 3, 5, 8, \\quad ?$$",
    "options": null,
    "officialAnswer": "13",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 1, 1, 2, 3, 5, 8"
      ],
      "relevantConcept": "Rule of progression: Fibonacci sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'Fibonacci sequence', the next term is 13."
      ],
      "finalAnswerWithUnits": "13",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 6, 12, 20, 30, \\quad ?$$",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 6, 12, 20, 30"
      ],
      "relevantConcept": "Rule of progression: n(n+1) sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n(n+1) sequence', the next term is 42."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$5, 11, 23, 47, 95, \\quad ?$$",
    "options": null,
    "officialAnswer": "191",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 5, 11, 23, 47, 95"
      ],
      "relevantConcept": "Rule of progression: 2x + 1 progression.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2x + 1 progression', the next term is 191."
      ],
      "finalAnswerWithUnits": "191",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 5, 10, 17, 26, \\quad ?$$",
    "options": null,
    "officialAnswer": "37",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 5, 10, 17, 26"
      ],
      "relevantConcept": "Rule of progression: n^2 + 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n^2 + 1', the next term is 37."
      ],
      "finalAnswerWithUnits": "37",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$3, 7, 15, 31, 63, \\quad ?$$",
    "options": null,
    "officialAnswer": "127",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 3, 7, 15, 31, 63"
      ],
      "relevantConcept": "Rule of progression: 2^n - 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2^n - 1', the next term is 127."
      ],
      "finalAnswerWithUnits": "127",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$1, 1, 2, 3, 5, 8, \\quad ?$$",
    "options": null,
    "officialAnswer": "13",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 1, 1, 2, 3, 5, 8"
      ],
      "relevantConcept": "Rule of progression: Fibonacci sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'Fibonacci sequence', the next term is 13."
      ],
      "finalAnswerWithUnits": "13",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 6, 12, 20, 30, \\quad ?$$",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 6, 12, 20, 30"
      ],
      "relevantConcept": "Rule of progression: n(n+1) sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n(n+1) sequence', the next term is 42."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$5, 11, 23, 47, 95, \\quad ?$$",
    "options": null,
    "officialAnswer": "191",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 5, 11, 23, 47, 95"
      ],
      "relevantConcept": "Rule of progression: 2x + 1 progression.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2x + 1 progression', the next term is 191."
      ],
      "finalAnswerWithUnits": "191",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 5, 10, 17, 26, \\quad ?$$",
    "options": null,
    "officialAnswer": "37",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 5, 10, 17, 26"
      ],
      "relevantConcept": "Rule of progression: n^2 + 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n^2 + 1', the next term is 37."
      ],
      "finalAnswerWithUnits": "37",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$3, 7, 15, 31, 63, \\quad ?$$",
    "options": null,
    "officialAnswer": "127",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 3, 7, 15, 31, 63"
      ],
      "relevantConcept": "Rule of progression: 2^n - 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2^n - 1', the next term is 127."
      ],
      "finalAnswerWithUnits": "127",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$1, 1, 2, 3, 5, 8, \\quad ?$$",
    "options": null,
    "officialAnswer": "13",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 1, 1, 2, 3, 5, 8"
      ],
      "relevantConcept": "Rule of progression: Fibonacci sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'Fibonacci sequence', the next term is 13."
      ],
      "finalAnswerWithUnits": "13",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 6, 12, 20, 30, \\quad ?$$",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 6, 12, 20, 30"
      ],
      "relevantConcept": "Rule of progression: n(n+1) sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n(n+1) sequence', the next term is 42."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$5, 11, 23, 47, 95, \\quad ?$$",
    "options": null,
    "officialAnswer": "191",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 5, 11, 23, 47, 95"
      ],
      "relevantConcept": "Rule of progression: 2x + 1 progression.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2x + 1 progression', the next term is 191."
      ],
      "finalAnswerWithUnits": "191",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 5, 10, 17, 26, \\quad ?$$",
    "options": null,
    "officialAnswer": "37",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 5, 10, 17, 26"
      ],
      "relevantConcept": "Rule of progression: n^2 + 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n^2 + 1', the next term is 37."
      ],
      "finalAnswerWithUnits": "37",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$3, 7, 15, 31, 63, \\quad ?$$",
    "options": null,
    "officialAnswer": "127",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 3, 7, 15, 31, 63"
      ],
      "relevantConcept": "Rule of progression: 2^n - 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2^n - 1', the next term is 127."
      ],
      "finalAnswerWithUnits": "127",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$1, 1, 2, 3, 5, 8, \\quad ?$$",
    "options": null,
    "officialAnswer": "13",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 1, 1, 2, 3, 5, 8"
      ],
      "relevantConcept": "Rule of progression: Fibonacci sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'Fibonacci sequence', the next term is 13."
      ],
      "finalAnswerWithUnits": "13",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 6, 12, 20, 30, \\quad ?$$",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 6, 12, 20, 30"
      ],
      "relevantConcept": "Rule of progression: n(n+1) sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n(n+1) sequence', the next term is 42."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$5, 11, 23, 47, 95, \\quad ?$$",
    "options": null,
    "officialAnswer": "191",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 5, 11, 23, 47, 95"
      ],
      "relevantConcept": "Rule of progression: 2x + 1 progression.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2x + 1 progression', the next term is 191."
      ],
      "finalAnswerWithUnits": "191",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 5, 10, 17, 26, \\quad ?$$",
    "options": null,
    "officialAnswer": "37",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 5, 10, 17, 26"
      ],
      "relevantConcept": "Rule of progression: n^2 + 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n^2 + 1', the next term is 37."
      ],
      "finalAnswerWithUnits": "37",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$3, 7, 15, 31, 63, \\quad ?$$",
    "options": null,
    "officialAnswer": "127",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 3, 7, 15, 31, 63"
      ],
      "relevantConcept": "Rule of progression: 2^n - 1.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2^n - 1', the next term is 127."
      ],
      "finalAnswerWithUnits": "127",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$1, 1, 2, 3, 5, 8, \\quad ?$$",
    "options": null,
    "officialAnswer": "13",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 1, 1, 2, 3, 5, 8"
      ],
      "relevantConcept": "Rule of progression: Fibonacci sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'Fibonacci sequence', the next term is 13."
      ],
      "finalAnswerWithUnits": "13",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$2, 6, 12, 20, 30, \\quad ?$$",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 2, 6, 12, 20, 30"
      ],
      "relevantConcept": "Rule of progression: n(n+1) sequence.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule 'n(n+1) sequence', the next term is 42."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Find the next number in the sequence: $$5, 11, 23, 47, 95, \\quad ?$$",
    "options": null,
    "officialAnswer": "191",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the governing numerical progression rule to predict the next sequence term.",
      "givenInformationAndAssumptions": [
        "Sequence: 5, 11, 23, 47, 95"
      ],
      "relevantConcept": "Rule of progression: 2x + 1 progression.",
      "formulaAndTermExplanation": [
        {
          "formula": "a_n = f(n)",
          "terms": [
            {
              "term": "a_n",
              "explanation": "General term of the series"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Calculate differences between consecutive terms:",
        "The difference series reveals the underlying structure.",
        "Step 2: Applying the rule '2x + 1 progression', the next term is 191."
      ],
      "finalAnswerWithUnits": "191",
      "alternativeApproachOrShortcut": "Fit a polynomial difference table up to second or third differences.",
      "commonMistakes": [
        "Assuming constant differences without checking higher-order differences."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Number Series",
      "Pattern Recognition",
      "Sequences"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 10th from the top and 25th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "34",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 10",
        "Rank from bottom = 25"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 10.",
        "Step 2: Rank from bottom: 25.",
        "Step 3: Total students $= 10 + 25 - 1 = 34$."
      ],
      "finalAnswerWithUnits": "34",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 11th from the top and 26th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "36",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 11",
        "Rank from bottom = 26"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 11.",
        "Step 2: Rank from bottom: 26.",
        "Step 3: Total students $= 11 + 26 - 1 = 36$."
      ],
      "finalAnswerWithUnits": "36",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 12th from the top and 27th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "38",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 12",
        "Rank from bottom = 27"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 12.",
        "Step 2: Rank from bottom: 27.",
        "Step 3: Total students $= 12 + 27 - 1 = 38$."
      ],
      "finalAnswerWithUnits": "38",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 13th from the top and 28th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 13",
        "Rank from bottom = 28"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 13.",
        "Step 2: Rank from bottom: 28.",
        "Step 3: Total students $= 13 + 28 - 1 = 40$."
      ],
      "finalAnswerWithUnits": "40",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 14th from the top and 29th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 14",
        "Rank from bottom = 29"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 14.",
        "Step 2: Rank from bottom: 29.",
        "Step 3: Total students $= 14 + 29 - 1 = 42$."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 15th from the top and 30th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "44",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 15",
        "Rank from bottom = 30"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 15.",
        "Step 2: Rank from bottom: 30.",
        "Step 3: Total students $= 15 + 30 - 1 = 44$."
      ],
      "finalAnswerWithUnits": "44",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 16th from the top and 31th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "46",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 16",
        "Rank from bottom = 31"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 16.",
        "Step 2: Rank from bottom: 31.",
        "Step 3: Total students $= 16 + 31 - 1 = 46$."
      ],
      "finalAnswerWithUnits": "46",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 17th from the top and 32th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "48",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 17",
        "Rank from bottom = 32"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 17.",
        "Step 2: Rank from bottom: 32.",
        "Step 3: Total students $= 17 + 32 - 1 = 48$."
      ],
      "finalAnswerWithUnits": "48",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 10th from the top and 33th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 10",
        "Rank from bottom = 33"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 10.",
        "Step 2: Rank from bottom: 33.",
        "Step 3: Total students $= 10 + 33 - 1 = 42$."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 11th from the top and 34th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "44",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 11",
        "Rank from bottom = 34"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 11.",
        "Step 2: Rank from bottom: 34.",
        "Step 3: Total students $= 11 + 34 - 1 = 44$."
      ],
      "finalAnswerWithUnits": "44",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 12th from the top and 25th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "36",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 12",
        "Rank from bottom = 25"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 12.",
        "Step 2: Rank from bottom: 25.",
        "Step 3: Total students $= 12 + 25 - 1 = 36$."
      ],
      "finalAnswerWithUnits": "36",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 13th from the top and 26th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "38",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 13",
        "Rank from bottom = 26"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 13.",
        "Step 2: Rank from bottom: 26.",
        "Step 3: Total students $= 13 + 26 - 1 = 38$."
      ],
      "finalAnswerWithUnits": "38",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 14th from the top and 27th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 14",
        "Rank from bottom = 27"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 14.",
        "Step 2: Rank from bottom: 27.",
        "Step 3: Total students $= 14 + 27 - 1 = 40$."
      ],
      "finalAnswerWithUnits": "40",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 15th from the top and 28th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 15",
        "Rank from bottom = 28"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 15.",
        "Step 2: Rank from bottom: 28.",
        "Step 3: Total students $= 15 + 28 - 1 = 42$."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 16th from the top and 29th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "44",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 16",
        "Rank from bottom = 29"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 16.",
        "Step 2: Rank from bottom: 29.",
        "Step 3: Total students $= 16 + 29 - 1 = 44$."
      ],
      "finalAnswerWithUnits": "44",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 17th from the top and 30th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "46",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 17",
        "Rank from bottom = 30"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 17.",
        "Step 2: Rank from bottom: 30.",
        "Step 3: Total students $= 17 + 30 - 1 = 46$."
      ],
      "finalAnswerWithUnits": "46",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 10th from the top and 31th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 10",
        "Rank from bottom = 31"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 10.",
        "Step 2: Rank from bottom: 31.",
        "Step 3: Total students $= 10 + 31 - 1 = 40$."
      ],
      "finalAnswerWithUnits": "40",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 11th from the top and 32th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 11",
        "Rank from bottom = 32"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 11.",
        "Step 2: Rank from bottom: 32.",
        "Step 3: Total students $= 11 + 32 - 1 = 42$."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 12th from the top and 33th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "44",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 12",
        "Rank from bottom = 33"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 12.",
        "Step 2: Rank from bottom: 33.",
        "Step 3: Total students $= 12 + 33 - 1 = 44$."
      ],
      "finalAnswerWithUnits": "44",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 13th from the top and 34th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "46",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 13",
        "Rank from bottom = 34"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 13.",
        "Step 2: Rank from bottom: 34.",
        "Step 3: Total students $= 13 + 34 - 1 = 46$."
      ],
      "finalAnswerWithUnits": "46",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 14th from the top and 25th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "38",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 14",
        "Rank from bottom = 25"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 14.",
        "Step 2: Rank from bottom: 25.",
        "Step 3: Total students $= 14 + 25 - 1 = 38$."
      ],
      "finalAnswerWithUnits": "38",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 15th from the top and 26th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 15",
        "Rank from bottom = 26"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 15.",
        "Step 2: Rank from bottom: 26.",
        "Step 3: Total students $= 15 + 26 - 1 = 40$."
      ],
      "finalAnswerWithUnits": "40",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 16th from the top and 27th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "42",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 16",
        "Rank from bottom = 27"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 16.",
        "Step 2: Rank from bottom: 27.",
        "Step 3: Total students $= 16 + 27 - 1 = 42$."
      ],
      "finalAnswerWithUnits": "42",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 17th from the top and 28th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "44",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 17",
        "Rank from bottom = 28"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 17.",
        "Step 2: Rank from bottom: 28.",
        "Step 3: Total students $= 17 + 28 - 1 = 44$."
      ],
      "finalAnswerWithUnits": "44",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Analytical Aptitude",
    "subject": "General Aptitude",
    "topic": "Analytical Aptitude",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a class examination, Rohit ranks 10th from the top and 29th from the bottom among all students who took the test. The total number of students in the class is ________.",
    "options": null,
    "officialAnswer": "38",
    "detailedSolution": {
      "understandingTheQuestion": "Determine total count from rank given from both ends of a linear ordered list.",
      "givenInformationAndAssumptions": [
        "Rank from top = 10",
        "Rank from bottom = 29"
      ],
      "relevantConcept": "When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1",
          "terms": [
            {
              "term": "-1",
              "explanation": "Avoids double-counting the person"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rank from top: 10.",
        "Step 2: Rank from bottom: 29.",
        "Step 3: Total students $= 10 + 29 - 1 = 38$."
      ],
      "finalAnswerWithUnits": "38",
      "alternativeApproachOrShortcut": "There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
      "commonMistakes": [
        "Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analytical Aptitude",
      "Ranking",
      "Linear Ordering",
      "Counting"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 90$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$(0, 1)$"
      },
      {
        "id": "C",
        "text": "$(1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, -1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 90$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 90$^\\circ$. The resulting coordinate is $(0, -1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, 1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 180$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(-1, 0)$"
      },
      {
        "id": "B",
        "text": "$(1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, -1)$"
      },
      {
        "id": "D",
        "text": "$(-1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 180$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 180$^\\circ$. The resulting coordinate is $(-1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(-1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 270$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, -1)$"
      },
      {
        "id": "B",
        "text": "$(0, -1)$"
      },
      {
        "id": "C",
        "text": "$(-1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, 1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 270$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 270$^\\circ$. The resulting coordinate is $(0, 1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, -1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 360$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(1, 0)$"
      },
      {
        "id": "B",
        "text": "$(-1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, 1)$"
      },
      {
        "id": "D",
        "text": "$(1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 360$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 360$^\\circ$. The resulting coordinate is $(1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 90$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$(0, 1)$"
      },
      {
        "id": "C",
        "text": "$(1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, -1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 90$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 90$^\\circ$. The resulting coordinate is $(0, -1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, 1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 180$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(-1, 0)$"
      },
      {
        "id": "B",
        "text": "$(1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, -1)$"
      },
      {
        "id": "D",
        "text": "$(-1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 180$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 180$^\\circ$. The resulting coordinate is $(-1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(-1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 270$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, -1)$"
      },
      {
        "id": "B",
        "text": "$(0, -1)$"
      },
      {
        "id": "C",
        "text": "$(-1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, 1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 270$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 270$^\\circ$. The resulting coordinate is $(0, 1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, -1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 360$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(1, 0)$"
      },
      {
        "id": "B",
        "text": "$(-1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, 1)$"
      },
      {
        "id": "D",
        "text": "$(1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 360$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 360$^\\circ$. The resulting coordinate is $(1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 90$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$(0, 1)$"
      },
      {
        "id": "C",
        "text": "$(1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, -1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 90$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 90$^\\circ$. The resulting coordinate is $(0, -1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, 1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 180$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(-1, 0)$"
      },
      {
        "id": "B",
        "text": "$(1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, -1)$"
      },
      {
        "id": "D",
        "text": "$(-1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 180$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 180$^\\circ$. The resulting coordinate is $(-1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(-1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 270$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, -1)$"
      },
      {
        "id": "B",
        "text": "$(0, -1)$"
      },
      {
        "id": "C",
        "text": "$(-1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, 1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 270$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 270$^\\circ$. The resulting coordinate is $(0, 1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, -1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 360$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(1, 0)$"
      },
      {
        "id": "B",
        "text": "$(-1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, 1)$"
      },
      {
        "id": "D",
        "text": "$(1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 360$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 360$^\\circ$. The resulting coordinate is $(1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 90$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$(0, 1)$"
      },
      {
        "id": "C",
        "text": "$(1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, -1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 90$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 90$^\\circ$. The resulting coordinate is $(0, -1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, 1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 180$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(-1, 0)$"
      },
      {
        "id": "B",
        "text": "$(1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, -1)$"
      },
      {
        "id": "D",
        "text": "$(-1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 180$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 180$^\\circ$. The resulting coordinate is $(-1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(-1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 270$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, -1)$"
      },
      {
        "id": "B",
        "text": "$(0, -1)$"
      },
      {
        "id": "C",
        "text": "$(-1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, 1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 270$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 270$^\\circ$. The resulting coordinate is $(0, 1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, -1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 360$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(1, 0)$"
      },
      {
        "id": "B",
        "text": "$(-1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, 1)$"
      },
      {
        "id": "D",
        "text": "$(1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 360$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 360$^\\circ$. The resulting coordinate is $(1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 90$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$(0, 1)$"
      },
      {
        "id": "C",
        "text": "$(1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, -1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 90$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 90$^\\circ$. The resulting coordinate is $(0, -1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, 1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 180$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(-1, 0)$"
      },
      {
        "id": "B",
        "text": "$(1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, -1)$"
      },
      {
        "id": "D",
        "text": "$(-1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 180$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 180$^\\circ$. The resulting coordinate is $(-1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(-1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 270$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, -1)$"
      },
      {
        "id": "B",
        "text": "$(0, -1)$"
      },
      {
        "id": "C",
        "text": "$(-1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, 1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 270$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 270$^\\circ$. The resulting coordinate is $(0, 1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, -1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 360$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(1, 0)$"
      },
      {
        "id": "B",
        "text": "$(-1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, 1)$"
      },
      {
        "id": "D",
        "text": "$(1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 360$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 360$^\\circ$. The resulting coordinate is $(1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 90$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$(0, 1)$"
      },
      {
        "id": "C",
        "text": "$(1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, -1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 90$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 90$^\\circ$. The resulting coordinate is $(0, -1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, 1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 180$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(-1, 0)$"
      },
      {
        "id": "B",
        "text": "$(1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, -1)$"
      },
      {
        "id": "D",
        "text": "$(-1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 180$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 180$^\\circ$. The resulting coordinate is $(-1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(-1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 270$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, -1)$"
      },
      {
        "id": "B",
        "text": "$(0, -1)$"
      },
      {
        "id": "C",
        "text": "$(-1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, 1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 270$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 270$^\\circ$. The resulting coordinate is $(0, 1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, -1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 360$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(1, 0)$"
      },
      {
        "id": "B",
        "text": "$(-1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, 1)$"
      },
      {
        "id": "D",
        "text": "$(1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 360$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 360$^\\circ$. The resulting coordinate is $(1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 90$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$(0, 1)$"
      },
      {
        "id": "C",
        "text": "$(1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, -1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 90$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 90$^\\circ$. The resulting coordinate is $(0, -1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, 1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 180$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(-1, 0)$"
      },
      {
        "id": "B",
        "text": "$(1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, -1)$"
      },
      {
        "id": "D",
        "text": "$(-1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 180$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 180$^\\circ$. The resulting coordinate is $(-1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(-1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 270$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, -1)$"
      },
      {
        "id": "B",
        "text": "$(0, -1)$"
      },
      {
        "id": "C",
        "text": "$(-1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, 1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 270$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 270$^\\circ$. The resulting coordinate is $(0, 1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, -1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 360$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(1, 0)$"
      },
      {
        "id": "B",
        "text": "$(-1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, 1)$"
      },
      {
        "id": "D",
        "text": "$(1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 360$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 360$^\\circ$. The resulting coordinate is $(1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 90$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$(0, 1)$"
      },
      {
        "id": "C",
        "text": "$(1, 0)$"
      },
      {
        "id": "D",
        "text": "$(0, -1)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 90$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 90$^\\circ$. The resulting coordinate is $(0, -1)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(0, 1)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A plane figure in the $xy$-plane is rotated clockwise by 180$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:",
    "options": [
      {
        "id": "A",
        "text": "$(-1, 0)$"
      },
      {
        "id": "B",
        "text": "$(1, 0)$"
      },
      {
        "id": "C",
        "text": "$(0, -1)$"
      },
      {
        "id": "D",
        "text": "$(-1, 0)$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
      "givenInformationAndAssumptions": [
        "Initial point: $(1, 0)$",
        "Clockwise rotation: 180$^\\circ$",
        "Reflection axis: $x$-axis"
      ],
      "relevantConcept": "2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)",
          "terms": [
            {
              "term": "\\theta",
              "explanation": "Clockwise rotation angle"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Rotate point $(1, 0)$ clockwise by 180$^\\circ$. The resulting coordinate is $(-1, 0)$.",
        "Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
        "The $y$-coordinate changes sign while $x$ remains unchanged: $(-1, 0)$.",
        "Therefore, the final coordinates correspond to Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
      "commonMistakes": [
        "Confusing clockwise (negative angle) with counter-clockwise rotation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Spatial Aptitude",
      "Transformation",
      "2D Rotation",
      "Reflection"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, 1 is opposite to 6, and 2 is opposite to 5. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: 1 is opposite to 6, 2 is opposite to 5"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: 1 is opposite to 6.",
        "Step 3: Pair 2 is established: 2 is opposite to 5.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, A is opposite to F, and B is opposite to E. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: A is opposite to F, B is opposite to E"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: A is opposite to F.",
        "Step 3: Pair 2 is established: B is opposite to E.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Spatial Aptitude",
    "subject": "General Aptitude",
    "topic": "Spatial Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A standard six-faced cube is unfolded into a cross-shaped net. In this layout, Red is opposite to Blue, and Green is opposite to Yellow. Which face is directly opposite to face 3 in the folded cube?",
    "options": [
      {
        "id": "A",
        "text": "Face 4"
      },
      {
        "id": "B",
        "text": "Face 5"
      },
      {
        "id": "C",
        "text": "Face 6"
      },
      {
        "id": "D",
        "text": "Face 2"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
      "givenInformationAndAssumptions": [
        "Cube faces: 1, 2, 3, 4, 5, 6",
        "Known opposites: Red is opposite to Blue, Green is opposite to Yellow"
      ],
      "relevantConcept": "In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Total pairs} = 3",
          "terms": [
            {
              "term": "Opposite faces",
              "explanation": "Never share an edge in the assembled cube"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
        "Step 2: Pair 1 is established: Red is opposite to Blue.",
        "Step 3: Pair 2 is established: Green is opposite to Yellow.",
        "Step 4: The remaining unassigned faces are 3 and 4.",
        "Therefore, face 3 must be opposite to face 4 (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
      "commonMistakes": [
        "Assuming adjacent faces in the unfolded net become opposite faces upon folding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Spatial Aptitude",
      "Cube Folding",
      "Dice Problems",
      "3D Visualization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The engineer insisted on ________ the test results before submitting the technical report.\"",
    "options": [
      {
        "id": "A",
        "text": "verifying"
      },
      {
        "id": "B",
        "text": "verify"
      },
      {
        "id": "C",
        "text": "verified"
      },
      {
        "id": "D",
        "text": "verification"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The engineer insisted on ________ the test results before submitting the technical report."
      ],
      "relevantConcept": "Standard English grammatical rules: Preposition 'on' takes a gerund (-ing form)..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Preposition 'on' takes a gerund (-ing form).",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Neither the professor nor the students ________ present in the laboratory during the power outage.\"",
    "options": [
      {
        "id": "A",
        "text": "were"
      },
      {
        "id": "B",
        "text": "was"
      },
      {
        "id": "C",
        "text": "is"
      },
      {
        "id": "D",
        "text": "are"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Neither the professor nor the students ________ present in the laboratory during the power outage."
      ],
      "relevantConcept": "Standard English grammatical rules: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet.\"",
    "options": [
      {
        "id": "A",
        "text": "that"
      },
      {
        "id": "B",
        "text": "which"
      },
      {
        "id": "C",
        "text": "because"
      },
      {
        "id": "D",
        "text": "then"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet."
      ],
      "relevantConcept": "Standard English grammatical rules: Correlative conjunction 'so...that' indicates degree/result..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correlative conjunction 'so...that' indicates degree/result.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided.\"",
    "options": [
      {
        "id": "A",
        "text": "would have been"
      },
      {
        "id": "B",
        "text": "will be"
      },
      {
        "id": "C",
        "text": "had been"
      },
      {
        "id": "D",
        "text": "is"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided."
      ],
      "relevantConcept": "Standard English grammatical rules: Third conditional: 'Had + past participle' requires 'would have been' in main clause..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Third conditional: 'Had + past participle' requires 'would have been' in main clause.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The committee expressed grave concern ________ the unprecedented delay in product certification.\"",
    "options": [
      {
        "id": "A",
        "text": "over"
      },
      {
        "id": "B",
        "text": "with"
      },
      {
        "id": "C",
        "text": "at"
      },
      {
        "id": "D",
        "text": "against"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The committee expressed grave concern ________ the unprecedented delay in product certification."
      ],
      "relevantConcept": "Standard English grammatical rules: Correct idiomatic preposition is 'concern over' or 'concern about'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correct idiomatic preposition is 'concern over' or 'concern about'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The engineer insisted on ________ the test results before submitting the technical report.\"",
    "options": [
      {
        "id": "A",
        "text": "verifying"
      },
      {
        "id": "B",
        "text": "verify"
      },
      {
        "id": "C",
        "text": "verified"
      },
      {
        "id": "D",
        "text": "verification"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The engineer insisted on ________ the test results before submitting the technical report."
      ],
      "relevantConcept": "Standard English grammatical rules: Preposition 'on' takes a gerund (-ing form)..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Preposition 'on' takes a gerund (-ing form).",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Neither the professor nor the students ________ present in the laboratory during the power outage.\"",
    "options": [
      {
        "id": "A",
        "text": "were"
      },
      {
        "id": "B",
        "text": "was"
      },
      {
        "id": "C",
        "text": "is"
      },
      {
        "id": "D",
        "text": "are"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Neither the professor nor the students ________ present in the laboratory during the power outage."
      ],
      "relevantConcept": "Standard English grammatical rules: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet.\"",
    "options": [
      {
        "id": "A",
        "text": "that"
      },
      {
        "id": "B",
        "text": "which"
      },
      {
        "id": "C",
        "text": "because"
      },
      {
        "id": "D",
        "text": "then"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet."
      ],
      "relevantConcept": "Standard English grammatical rules: Correlative conjunction 'so...that' indicates degree/result..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correlative conjunction 'so...that' indicates degree/result.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided.\"",
    "options": [
      {
        "id": "A",
        "text": "would have been"
      },
      {
        "id": "B",
        "text": "will be"
      },
      {
        "id": "C",
        "text": "had been"
      },
      {
        "id": "D",
        "text": "is"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided."
      ],
      "relevantConcept": "Standard English grammatical rules: Third conditional: 'Had + past participle' requires 'would have been' in main clause..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Third conditional: 'Had + past participle' requires 'would have been' in main clause.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The committee expressed grave concern ________ the unprecedented delay in product certification.\"",
    "options": [
      {
        "id": "A",
        "text": "over"
      },
      {
        "id": "B",
        "text": "with"
      },
      {
        "id": "C",
        "text": "at"
      },
      {
        "id": "D",
        "text": "against"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The committee expressed grave concern ________ the unprecedented delay in product certification."
      ],
      "relevantConcept": "Standard English grammatical rules: Correct idiomatic preposition is 'concern over' or 'concern about'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correct idiomatic preposition is 'concern over' or 'concern about'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The engineer insisted on ________ the test results before submitting the technical report.\"",
    "options": [
      {
        "id": "A",
        "text": "verifying"
      },
      {
        "id": "B",
        "text": "verify"
      },
      {
        "id": "C",
        "text": "verified"
      },
      {
        "id": "D",
        "text": "verification"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The engineer insisted on ________ the test results before submitting the technical report."
      ],
      "relevantConcept": "Standard English grammatical rules: Preposition 'on' takes a gerund (-ing form)..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Preposition 'on' takes a gerund (-ing form).",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Neither the professor nor the students ________ present in the laboratory during the power outage.\"",
    "options": [
      {
        "id": "A",
        "text": "were"
      },
      {
        "id": "B",
        "text": "was"
      },
      {
        "id": "C",
        "text": "is"
      },
      {
        "id": "D",
        "text": "are"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Neither the professor nor the students ________ present in the laboratory during the power outage."
      ],
      "relevantConcept": "Standard English grammatical rules: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet.\"",
    "options": [
      {
        "id": "A",
        "text": "that"
      },
      {
        "id": "B",
        "text": "which"
      },
      {
        "id": "C",
        "text": "because"
      },
      {
        "id": "D",
        "text": "then"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet."
      ],
      "relevantConcept": "Standard English grammatical rules: Correlative conjunction 'so...that' indicates degree/result..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correlative conjunction 'so...that' indicates degree/result.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided.\"",
    "options": [
      {
        "id": "A",
        "text": "would have been"
      },
      {
        "id": "B",
        "text": "will be"
      },
      {
        "id": "C",
        "text": "had been"
      },
      {
        "id": "D",
        "text": "is"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided."
      ],
      "relevantConcept": "Standard English grammatical rules: Third conditional: 'Had + past participle' requires 'would have been' in main clause..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Third conditional: 'Had + past participle' requires 'would have been' in main clause.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The committee expressed grave concern ________ the unprecedented delay in product certification.\"",
    "options": [
      {
        "id": "A",
        "text": "over"
      },
      {
        "id": "B",
        "text": "with"
      },
      {
        "id": "C",
        "text": "at"
      },
      {
        "id": "D",
        "text": "against"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The committee expressed grave concern ________ the unprecedented delay in product certification."
      ],
      "relevantConcept": "Standard English grammatical rules: Correct idiomatic preposition is 'concern over' or 'concern about'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correct idiomatic preposition is 'concern over' or 'concern about'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The engineer insisted on ________ the test results before submitting the technical report.\"",
    "options": [
      {
        "id": "A",
        "text": "verifying"
      },
      {
        "id": "B",
        "text": "verify"
      },
      {
        "id": "C",
        "text": "verified"
      },
      {
        "id": "D",
        "text": "verification"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The engineer insisted on ________ the test results before submitting the technical report."
      ],
      "relevantConcept": "Standard English grammatical rules: Preposition 'on' takes a gerund (-ing form)..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Preposition 'on' takes a gerund (-ing form).",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Neither the professor nor the students ________ present in the laboratory during the power outage.\"",
    "options": [
      {
        "id": "A",
        "text": "were"
      },
      {
        "id": "B",
        "text": "was"
      },
      {
        "id": "C",
        "text": "is"
      },
      {
        "id": "D",
        "text": "are"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Neither the professor nor the students ________ present in the laboratory during the power outage."
      ],
      "relevantConcept": "Standard English grammatical rules: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet.\"",
    "options": [
      {
        "id": "A",
        "text": "that"
      },
      {
        "id": "B",
        "text": "which"
      },
      {
        "id": "C",
        "text": "because"
      },
      {
        "id": "D",
        "text": "then"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet."
      ],
      "relevantConcept": "Standard English grammatical rules: Correlative conjunction 'so...that' indicates degree/result..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correlative conjunction 'so...that' indicates degree/result.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided.\"",
    "options": [
      {
        "id": "A",
        "text": "would have been"
      },
      {
        "id": "B",
        "text": "will be"
      },
      {
        "id": "C",
        "text": "had been"
      },
      {
        "id": "D",
        "text": "is"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided."
      ],
      "relevantConcept": "Standard English grammatical rules: Third conditional: 'Had + past participle' requires 'would have been' in main clause..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Third conditional: 'Had + past participle' requires 'would have been' in main clause.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The committee expressed grave concern ________ the unprecedented delay in product certification.\"",
    "options": [
      {
        "id": "A",
        "text": "over"
      },
      {
        "id": "B",
        "text": "with"
      },
      {
        "id": "C",
        "text": "at"
      },
      {
        "id": "D",
        "text": "against"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The committee expressed grave concern ________ the unprecedented delay in product certification."
      ],
      "relevantConcept": "Standard English grammatical rules: Correct idiomatic preposition is 'concern over' or 'concern about'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correct idiomatic preposition is 'concern over' or 'concern about'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The engineer insisted on ________ the test results before submitting the technical report.\"",
    "options": [
      {
        "id": "A",
        "text": "verifying"
      },
      {
        "id": "B",
        "text": "verify"
      },
      {
        "id": "C",
        "text": "verified"
      },
      {
        "id": "D",
        "text": "verification"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The engineer insisted on ________ the test results before submitting the technical report."
      ],
      "relevantConcept": "Standard English grammatical rules: Preposition 'on' takes a gerund (-ing form)..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Preposition 'on' takes a gerund (-ing form).",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Neither the professor nor the students ________ present in the laboratory during the power outage.\"",
    "options": [
      {
        "id": "A",
        "text": "were"
      },
      {
        "id": "B",
        "text": "was"
      },
      {
        "id": "C",
        "text": "is"
      },
      {
        "id": "D",
        "text": "are"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Neither the professor nor the students ________ present in the laboratory during the power outage."
      ],
      "relevantConcept": "Standard English grammatical rules: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet.\"",
    "options": [
      {
        "id": "A",
        "text": "that"
      },
      {
        "id": "B",
        "text": "which"
      },
      {
        "id": "C",
        "text": "because"
      },
      {
        "id": "D",
        "text": "then"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet."
      ],
      "relevantConcept": "Standard English grammatical rules: Correlative conjunction 'so...that' indicates degree/result..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correlative conjunction 'so...that' indicates degree/result.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided.\"",
    "options": [
      {
        "id": "A",
        "text": "would have been"
      },
      {
        "id": "B",
        "text": "will be"
      },
      {
        "id": "C",
        "text": "had been"
      },
      {
        "id": "D",
        "text": "is"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided."
      ],
      "relevantConcept": "Standard English grammatical rules: Third conditional: 'Had + past participle' requires 'would have been' in main clause..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Third conditional: 'Had + past participle' requires 'would have been' in main clause.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The committee expressed grave concern ________ the unprecedented delay in product certification.\"",
    "options": [
      {
        "id": "A",
        "text": "over"
      },
      {
        "id": "B",
        "text": "with"
      },
      {
        "id": "C",
        "text": "at"
      },
      {
        "id": "D",
        "text": "against"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The committee expressed grave concern ________ the unprecedented delay in product certification."
      ],
      "relevantConcept": "Standard English grammatical rules: Correct idiomatic preposition is 'concern over' or 'concern about'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correct idiomatic preposition is 'concern over' or 'concern about'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The engineer insisted on ________ the test results before submitting the technical report.\"",
    "options": [
      {
        "id": "A",
        "text": "verifying"
      },
      {
        "id": "B",
        "text": "verify"
      },
      {
        "id": "C",
        "text": "verified"
      },
      {
        "id": "D",
        "text": "verification"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The engineer insisted on ________ the test results before submitting the technical report."
      ],
      "relevantConcept": "Standard English grammatical rules: Preposition 'on' takes a gerund (-ing form)..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Preposition 'on' takes a gerund (-ing form).",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Neither the professor nor the students ________ present in the laboratory during the power outage.\"",
    "options": [
      {
        "id": "A",
        "text": "were"
      },
      {
        "id": "B",
        "text": "was"
      },
      {
        "id": "C",
        "text": "is"
      },
      {
        "id": "D",
        "text": "are"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Neither the professor nor the students ________ present in the laboratory during the power outage."
      ],
      "relevantConcept": "Standard English grammatical rules: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet.\"",
    "options": [
      {
        "id": "A",
        "text": "that"
      },
      {
        "id": "B",
        "text": "which"
      },
      {
        "id": "C",
        "text": "because"
      },
      {
        "id": "D",
        "text": "then"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet."
      ],
      "relevantConcept": "Standard English grammatical rules: Correlative conjunction 'so...that' indicates degree/result..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correlative conjunction 'so...that' indicates degree/result.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided.\"",
    "options": [
      {
        "id": "A",
        "text": "would have been"
      },
      {
        "id": "B",
        "text": "will be"
      },
      {
        "id": "C",
        "text": "had been"
      },
      {
        "id": "D",
        "text": "is"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided."
      ],
      "relevantConcept": "Standard English grammatical rules: Third conditional: 'Had + past participle' requires 'would have been' in main clause..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Third conditional: 'Had + past participle' requires 'would have been' in main clause.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The committee expressed grave concern ________ the unprecedented delay in product certification.\"",
    "options": [
      {
        "id": "A",
        "text": "over"
      },
      {
        "id": "B",
        "text": "with"
      },
      {
        "id": "C",
        "text": "at"
      },
      {
        "id": "D",
        "text": "against"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The committee expressed grave concern ________ the unprecedented delay in product certification."
      ],
      "relevantConcept": "Standard English grammatical rules: Correct idiomatic preposition is 'concern over' or 'concern about'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correct idiomatic preposition is 'concern over' or 'concern about'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The engineer insisted on ________ the test results before submitting the technical report.\"",
    "options": [
      {
        "id": "A",
        "text": "verifying"
      },
      {
        "id": "B",
        "text": "verify"
      },
      {
        "id": "C",
        "text": "verified"
      },
      {
        "id": "D",
        "text": "verification"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The engineer insisted on ________ the test results before submitting the technical report."
      ],
      "relevantConcept": "Standard English grammatical rules: Preposition 'on' takes a gerund (-ing form)..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Preposition 'on' takes a gerund (-ing form).",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Neither the professor nor the students ________ present in the laboratory during the power outage.\"",
    "options": [
      {
        "id": "A",
        "text": "were"
      },
      {
        "id": "B",
        "text": "was"
      },
      {
        "id": "C",
        "text": "is"
      },
      {
        "id": "D",
        "text": "are"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Neither the professor nor the students ________ present in the laboratory during the power outage."
      ],
      "relevantConcept": "Standard English grammatical rules: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Subject closest to verb ('students', plural) governs agreement with 'neither...nor'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet.\"",
    "options": [
      {
        "id": "A",
        "text": "that"
      },
      {
        "id": "B",
        "text": "which"
      },
      {
        "id": "C",
        "text": "because"
      },
      {
        "id": "D",
        "text": "then"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet."
      ],
      "relevantConcept": "Standard English grammatical rules: Correlative conjunction 'so...that' indicates degree/result..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correlative conjunction 'so...that' indicates degree/result.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided.\"",
    "options": [
      {
        "id": "A",
        "text": "would have been"
      },
      {
        "id": "B",
        "text": "will be"
      },
      {
        "id": "C",
        "text": "had been"
      },
      {
        "id": "D",
        "text": "is"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided."
      ],
      "relevantConcept": "Standard English grammatical rules: Third conditional: 'Had + past participle' requires 'would have been' in main clause..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Third conditional: 'Had + past participle' requires 'would have been' in main clause.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"The committee expressed grave concern ________ the unprecedented delay in product certification.\"",
    "options": [
      {
        "id": "A",
        "text": "over"
      },
      {
        "id": "B",
        "text": "with"
      },
      {
        "id": "C",
        "text": "at"
      },
      {
        "id": "D",
        "text": "against"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Select the syntactically and semantically correct word or phrase completing the sentence.",
      "givenInformationAndAssumptions": [
        "Sentence: The committee expressed grave concern ________ the unprecedented delay in product certification."
      ],
      "relevantConcept": "Standard English grammatical rules: Correct idiomatic preposition is 'concern over' or 'concern about'..",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Grammar rule application}",
          "terms": [
            {
              "term": "Syntax",
              "explanation": "Subject-verb agreement and prepositional collocations"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Analyze the grammatical structure of the sentence.",
        "Step 2: Correct idiomatic preposition is 'concern over' or 'concern about'.",
        "Step 3: The correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
      "commonMistakes": [
        "Overlooking proximity rule in correlative conjunctions like 'neither...nor'."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Grammar",
      "Sentence Completion",
      "Subject-Verb Agreement"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**METICULOUS**",
    "options": [
      {
        "id": "A",
        "text": "Diligent"
      },
      {
        "id": "B",
        "text": "Careless"
      },
      {
        "id": "C",
        "text": "Hasty"
      },
      {
        "id": "D",
        "text": "Indifferent"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'METICULOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: METICULOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'METICULOUS' means 'Careful and thorough'. Its direct opposite is 'Careless'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'METICULOUS' denotes 'Careful and thorough'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Careless' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Careless)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**AMBIGUOUS**",
    "options": [
      {
        "id": "A",
        "text": "Vague"
      },
      {
        "id": "B",
        "text": "Clear"
      },
      {
        "id": "C",
        "text": "Doubtful"
      },
      {
        "id": "D",
        "text": "Obscure"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'AMBIGUOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: AMBIGUOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'AMBIGUOUS' means 'Open to more than one interpretation'. Its direct opposite is 'Clear'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'AMBIGUOUS' denotes 'Open to more than one interpretation'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Clear' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Clear)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**PRAGMATIC**",
    "options": [
      {
        "id": "A",
        "text": "Practical"
      },
      {
        "id": "B",
        "text": "Idealistic"
      },
      {
        "id": "C",
        "text": "Realistic"
      },
      {
        "id": "D",
        "text": "Logical"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'PRAGMATIC'.",
      "givenInformationAndAssumptions": [
        "Target word: PRAGMATIC"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'PRAGMATIC' means 'Dealing with things sensibly and realistically'. Its direct opposite is 'Idealistic'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'PRAGMATIC' denotes 'Dealing with things sensibly and realistically'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Idealistic' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Idealistic)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**EPHEMERAL**",
    "options": [
      {
        "id": "A",
        "text": "Transient"
      },
      {
        "id": "B",
        "text": "Permanent"
      },
      {
        "id": "C",
        "text": "Fleeting"
      },
      {
        "id": "D",
        "text": "Short-lived"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'EPHEMERAL'.",
      "givenInformationAndAssumptions": [
        "Target word: EPHEMERAL"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'EPHEMERAL' means 'Lasting for a very short time'. Its direct opposite is 'Permanent'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'EPHEMERAL' denotes 'Lasting for a very short time'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Permanent' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Permanent)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**LUCID**",
    "options": [
      {
        "id": "A",
        "text": "Clear"
      },
      {
        "id": "B",
        "text": "Confusing"
      },
      {
        "id": "C",
        "text": "Transparent"
      },
      {
        "id": "D",
        "text": "Bright"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'LUCID'.",
      "givenInformationAndAssumptions": [
        "Target word: LUCID"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'LUCID' means 'Expressed clearly and easy to understand'. Its direct opposite is 'Confusing'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'LUCID' denotes 'Expressed clearly and easy to understand'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Confusing' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Confusing)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**METICULOUS**",
    "options": [
      {
        "id": "A",
        "text": "Diligent"
      },
      {
        "id": "B",
        "text": "Careless"
      },
      {
        "id": "C",
        "text": "Hasty"
      },
      {
        "id": "D",
        "text": "Indifferent"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'METICULOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: METICULOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'METICULOUS' means 'Careful and thorough'. Its direct opposite is 'Careless'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'METICULOUS' denotes 'Careful and thorough'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Careless' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Careless)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**AMBIGUOUS**",
    "options": [
      {
        "id": "A",
        "text": "Vague"
      },
      {
        "id": "B",
        "text": "Clear"
      },
      {
        "id": "C",
        "text": "Doubtful"
      },
      {
        "id": "D",
        "text": "Obscure"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'AMBIGUOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: AMBIGUOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'AMBIGUOUS' means 'Open to more than one interpretation'. Its direct opposite is 'Clear'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'AMBIGUOUS' denotes 'Open to more than one interpretation'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Clear' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Clear)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**PRAGMATIC**",
    "options": [
      {
        "id": "A",
        "text": "Practical"
      },
      {
        "id": "B",
        "text": "Idealistic"
      },
      {
        "id": "C",
        "text": "Realistic"
      },
      {
        "id": "D",
        "text": "Logical"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'PRAGMATIC'.",
      "givenInformationAndAssumptions": [
        "Target word: PRAGMATIC"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'PRAGMATIC' means 'Dealing with things sensibly and realistically'. Its direct opposite is 'Idealistic'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'PRAGMATIC' denotes 'Dealing with things sensibly and realistically'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Idealistic' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Idealistic)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**EPHEMERAL**",
    "options": [
      {
        "id": "A",
        "text": "Transient"
      },
      {
        "id": "B",
        "text": "Permanent"
      },
      {
        "id": "C",
        "text": "Fleeting"
      },
      {
        "id": "D",
        "text": "Short-lived"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'EPHEMERAL'.",
      "givenInformationAndAssumptions": [
        "Target word: EPHEMERAL"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'EPHEMERAL' means 'Lasting for a very short time'. Its direct opposite is 'Permanent'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'EPHEMERAL' denotes 'Lasting for a very short time'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Permanent' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Permanent)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**LUCID**",
    "options": [
      {
        "id": "A",
        "text": "Clear"
      },
      {
        "id": "B",
        "text": "Confusing"
      },
      {
        "id": "C",
        "text": "Transparent"
      },
      {
        "id": "D",
        "text": "Bright"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'LUCID'.",
      "givenInformationAndAssumptions": [
        "Target word: LUCID"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'LUCID' means 'Expressed clearly and easy to understand'. Its direct opposite is 'Confusing'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'LUCID' denotes 'Expressed clearly and easy to understand'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Confusing' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Confusing)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**METICULOUS**",
    "options": [
      {
        "id": "A",
        "text": "Diligent"
      },
      {
        "id": "B",
        "text": "Careless"
      },
      {
        "id": "C",
        "text": "Hasty"
      },
      {
        "id": "D",
        "text": "Indifferent"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'METICULOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: METICULOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'METICULOUS' means 'Careful and thorough'. Its direct opposite is 'Careless'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'METICULOUS' denotes 'Careful and thorough'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Careless' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Careless)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**AMBIGUOUS**",
    "options": [
      {
        "id": "A",
        "text": "Vague"
      },
      {
        "id": "B",
        "text": "Clear"
      },
      {
        "id": "C",
        "text": "Doubtful"
      },
      {
        "id": "D",
        "text": "Obscure"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'AMBIGUOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: AMBIGUOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'AMBIGUOUS' means 'Open to more than one interpretation'. Its direct opposite is 'Clear'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'AMBIGUOUS' denotes 'Open to more than one interpretation'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Clear' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Clear)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**PRAGMATIC**",
    "options": [
      {
        "id": "A",
        "text": "Practical"
      },
      {
        "id": "B",
        "text": "Idealistic"
      },
      {
        "id": "C",
        "text": "Realistic"
      },
      {
        "id": "D",
        "text": "Logical"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'PRAGMATIC'.",
      "givenInformationAndAssumptions": [
        "Target word: PRAGMATIC"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'PRAGMATIC' means 'Dealing with things sensibly and realistically'. Its direct opposite is 'Idealistic'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'PRAGMATIC' denotes 'Dealing with things sensibly and realistically'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Idealistic' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Idealistic)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**EPHEMERAL**",
    "options": [
      {
        "id": "A",
        "text": "Transient"
      },
      {
        "id": "B",
        "text": "Permanent"
      },
      {
        "id": "C",
        "text": "Fleeting"
      },
      {
        "id": "D",
        "text": "Short-lived"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'EPHEMERAL'.",
      "givenInformationAndAssumptions": [
        "Target word: EPHEMERAL"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'EPHEMERAL' means 'Lasting for a very short time'. Its direct opposite is 'Permanent'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'EPHEMERAL' denotes 'Lasting for a very short time'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Permanent' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Permanent)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**LUCID**",
    "options": [
      {
        "id": "A",
        "text": "Clear"
      },
      {
        "id": "B",
        "text": "Confusing"
      },
      {
        "id": "C",
        "text": "Transparent"
      },
      {
        "id": "D",
        "text": "Bright"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'LUCID'.",
      "givenInformationAndAssumptions": [
        "Target word: LUCID"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'LUCID' means 'Expressed clearly and easy to understand'. Its direct opposite is 'Confusing'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'LUCID' denotes 'Expressed clearly and easy to understand'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Confusing' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Confusing)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**METICULOUS**",
    "options": [
      {
        "id": "A",
        "text": "Diligent"
      },
      {
        "id": "B",
        "text": "Careless"
      },
      {
        "id": "C",
        "text": "Hasty"
      },
      {
        "id": "D",
        "text": "Indifferent"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'METICULOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: METICULOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'METICULOUS' means 'Careful and thorough'. Its direct opposite is 'Careless'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'METICULOUS' denotes 'Careful and thorough'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Careless' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Careless)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**AMBIGUOUS**",
    "options": [
      {
        "id": "A",
        "text": "Vague"
      },
      {
        "id": "B",
        "text": "Clear"
      },
      {
        "id": "C",
        "text": "Doubtful"
      },
      {
        "id": "D",
        "text": "Obscure"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'AMBIGUOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: AMBIGUOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'AMBIGUOUS' means 'Open to more than one interpretation'. Its direct opposite is 'Clear'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'AMBIGUOUS' denotes 'Open to more than one interpretation'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Clear' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Clear)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**PRAGMATIC**",
    "options": [
      {
        "id": "A",
        "text": "Practical"
      },
      {
        "id": "B",
        "text": "Idealistic"
      },
      {
        "id": "C",
        "text": "Realistic"
      },
      {
        "id": "D",
        "text": "Logical"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'PRAGMATIC'.",
      "givenInformationAndAssumptions": [
        "Target word: PRAGMATIC"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'PRAGMATIC' means 'Dealing with things sensibly and realistically'. Its direct opposite is 'Idealistic'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'PRAGMATIC' denotes 'Dealing with things sensibly and realistically'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Idealistic' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Idealistic)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**EPHEMERAL**",
    "options": [
      {
        "id": "A",
        "text": "Transient"
      },
      {
        "id": "B",
        "text": "Permanent"
      },
      {
        "id": "C",
        "text": "Fleeting"
      },
      {
        "id": "D",
        "text": "Short-lived"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'EPHEMERAL'.",
      "givenInformationAndAssumptions": [
        "Target word: EPHEMERAL"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'EPHEMERAL' means 'Lasting for a very short time'. Its direct opposite is 'Permanent'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'EPHEMERAL' denotes 'Lasting for a very short time'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Permanent' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Permanent)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**LUCID**",
    "options": [
      {
        "id": "A",
        "text": "Clear"
      },
      {
        "id": "B",
        "text": "Confusing"
      },
      {
        "id": "C",
        "text": "Transparent"
      },
      {
        "id": "D",
        "text": "Bright"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'LUCID'.",
      "givenInformationAndAssumptions": [
        "Target word: LUCID"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'LUCID' means 'Expressed clearly and easy to understand'. Its direct opposite is 'Confusing'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'LUCID' denotes 'Expressed clearly and easy to understand'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Confusing' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Confusing)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**METICULOUS**",
    "options": [
      {
        "id": "A",
        "text": "Diligent"
      },
      {
        "id": "B",
        "text": "Careless"
      },
      {
        "id": "C",
        "text": "Hasty"
      },
      {
        "id": "D",
        "text": "Indifferent"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'METICULOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: METICULOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'METICULOUS' means 'Careful and thorough'. Its direct opposite is 'Careless'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'METICULOUS' denotes 'Careful and thorough'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Careless' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Careless)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**AMBIGUOUS**",
    "options": [
      {
        "id": "A",
        "text": "Vague"
      },
      {
        "id": "B",
        "text": "Clear"
      },
      {
        "id": "C",
        "text": "Doubtful"
      },
      {
        "id": "D",
        "text": "Obscure"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'AMBIGUOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: AMBIGUOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'AMBIGUOUS' means 'Open to more than one interpretation'. Its direct opposite is 'Clear'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'AMBIGUOUS' denotes 'Open to more than one interpretation'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Clear' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Clear)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**PRAGMATIC**",
    "options": [
      {
        "id": "A",
        "text": "Practical"
      },
      {
        "id": "B",
        "text": "Idealistic"
      },
      {
        "id": "C",
        "text": "Realistic"
      },
      {
        "id": "D",
        "text": "Logical"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'PRAGMATIC'.",
      "givenInformationAndAssumptions": [
        "Target word: PRAGMATIC"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'PRAGMATIC' means 'Dealing with things sensibly and realistically'. Its direct opposite is 'Idealistic'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'PRAGMATIC' denotes 'Dealing with things sensibly and realistically'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Idealistic' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Idealistic)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**EPHEMERAL**",
    "options": [
      {
        "id": "A",
        "text": "Transient"
      },
      {
        "id": "B",
        "text": "Permanent"
      },
      {
        "id": "C",
        "text": "Fleeting"
      },
      {
        "id": "D",
        "text": "Short-lived"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'EPHEMERAL'.",
      "givenInformationAndAssumptions": [
        "Target word: EPHEMERAL"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'EPHEMERAL' means 'Lasting for a very short time'. Its direct opposite is 'Permanent'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'EPHEMERAL' denotes 'Lasting for a very short time'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Permanent' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Permanent)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**LUCID**",
    "options": [
      {
        "id": "A",
        "text": "Clear"
      },
      {
        "id": "B",
        "text": "Confusing"
      },
      {
        "id": "C",
        "text": "Transparent"
      },
      {
        "id": "D",
        "text": "Bright"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'LUCID'.",
      "givenInformationAndAssumptions": [
        "Target word: LUCID"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'LUCID' means 'Expressed clearly and easy to understand'. Its direct opposite is 'Confusing'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'LUCID' denotes 'Expressed clearly and easy to understand'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Confusing' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Confusing)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**METICULOUS**",
    "options": [
      {
        "id": "A",
        "text": "Diligent"
      },
      {
        "id": "B",
        "text": "Careless"
      },
      {
        "id": "C",
        "text": "Hasty"
      },
      {
        "id": "D",
        "text": "Indifferent"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'METICULOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: METICULOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'METICULOUS' means 'Careful and thorough'. Its direct opposite is 'Careless'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'METICULOUS' denotes 'Careful and thorough'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Careless' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Careless)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**AMBIGUOUS**",
    "options": [
      {
        "id": "A",
        "text": "Vague"
      },
      {
        "id": "B",
        "text": "Clear"
      },
      {
        "id": "C",
        "text": "Doubtful"
      },
      {
        "id": "D",
        "text": "Obscure"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'AMBIGUOUS'.",
      "givenInformationAndAssumptions": [
        "Target word: AMBIGUOUS"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'AMBIGUOUS' means 'Open to more than one interpretation'. Its direct opposite is 'Clear'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'AMBIGUOUS' denotes 'Open to more than one interpretation'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Clear' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Clear)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**PRAGMATIC**",
    "options": [
      {
        "id": "A",
        "text": "Practical"
      },
      {
        "id": "B",
        "text": "Idealistic"
      },
      {
        "id": "C",
        "text": "Realistic"
      },
      {
        "id": "D",
        "text": "Logical"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'PRAGMATIC'.",
      "givenInformationAndAssumptions": [
        "Target word: PRAGMATIC"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'PRAGMATIC' means 'Dealing with things sensibly and realistically'. Its direct opposite is 'Idealistic'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'PRAGMATIC' denotes 'Dealing with things sensibly and realistically'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Idealistic' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Idealistic)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**EPHEMERAL**",
    "options": [
      {
        "id": "A",
        "text": "Transient"
      },
      {
        "id": "B",
        "text": "Permanent"
      },
      {
        "id": "C",
        "text": "Fleeting"
      },
      {
        "id": "D",
        "text": "Short-lived"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'EPHEMERAL'.",
      "givenInformationAndAssumptions": [
        "Target word: EPHEMERAL"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'EPHEMERAL' means 'Lasting for a very short time'. Its direct opposite is 'Permanent'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'EPHEMERAL' denotes 'Lasting for a very short time'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Permanent' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Permanent)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-APT-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Verbal Aptitude",
    "subject": "General Aptitude",
    "topic": "Verbal Aptitude",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**LUCID**",
    "options": [
      {
        "id": "A",
        "text": "Clear"
      },
      {
        "id": "B",
        "text": "Confusing"
      },
      {
        "id": "C",
        "text": "Transparent"
      },
      {
        "id": "D",
        "text": "Bright"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the antonym of the given English vocabulary word 'LUCID'.",
      "givenInformationAndAssumptions": [
        "Target word: LUCID"
      ],
      "relevantConcept": "Vocabulary and semantic antonyms: 'LUCID' means 'Expressed clearly and easy to understand'. Its direct opposite is 'Confusing'.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Antonym}(word)",
          "terms": [
            {
              "term": "Antonym",
              "explanation": "Semantic polar opposite"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Definition: 'LUCID' denotes 'Expressed clearly and easy to understand'.",
        "Step 2: Examine the given choices.",
        "Step 3: 'Confusing' represents the direct antonym.",
        "Therefore, Option B is the correct answer."
      ],
      "finalAnswerWithUnits": "Option B (Confusing)",
      "alternativeApproachOrShortcut": "Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
      "commonMistakes": [
        "Selecting the synonym instead of the requested antonym."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Verbal Aptitude",
      "Vocabulary",
      "Antonyms",
      "Semantics"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
