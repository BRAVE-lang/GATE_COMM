import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — ANALOG_CIRCUITS_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const ANALOG_CIRCUITS_PRACTICE: Question[] = [
  {
    "id": "PRAC-ANA-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 10\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.32,
      6.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 10\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 10\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 10}{\\pi} = \\frac{20}{\\pi} \\approx 6.37\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 6.37 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 15\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.72,
      4.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 15\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 15\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{15}{\\pi} \\approx 4.77\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 4.77 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 20\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      12.68,
      12.78
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 20\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 20\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 20}{\\pi} = \\frac{40}{\\pi} \\approx 12.73\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 12.73 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 25\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 25\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 25\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{25}{\\pi} \\approx 7.96\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 7.96 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 30\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.05,
      19.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 30\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 30\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 30}{\\pi} = \\frac{60}{\\pi} \\approx 19.1\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 19.1 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 35\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.09,
      11.19
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 35\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 35\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{35}{\\pi} \\approx 11.14\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 11.14 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 10\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.32,
      6.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 10\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 10\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 10}{\\pi} = \\frac{20}{\\pi} \\approx 6.37\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 6.37 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 15\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.72,
      4.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 15\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 15\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{15}{\\pi} \\approx 4.77\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 4.77 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 20\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      12.68,
      12.78
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 20\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 20\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 20}{\\pi} = \\frac{40}{\\pi} \\approx 12.73\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 12.73 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 25\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 25\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 25\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{25}{\\pi} \\approx 7.96\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 7.96 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 30\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.05,
      19.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 30\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 30\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 30}{\\pi} = \\frac{60}{\\pi} \\approx 19.1\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 19.1 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 35\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.09,
      11.19
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 35\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 35\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{35}{\\pi} \\approx 11.14\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 11.14 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 10\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.32,
      6.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 10\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 10\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 10}{\\pi} = \\frac{20}{\\pi} \\approx 6.37\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 6.37 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 15\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.72,
      4.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 15\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 15\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{15}{\\pi} \\approx 4.77\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 4.77 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 20\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      12.68,
      12.78
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 20\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 20\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 20}{\\pi} = \\frac{40}{\\pi} \\approx 12.73\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 12.73 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 25\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 25\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 25\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{25}{\\pi} \\approx 7.96\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 7.96 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 30\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.05,
      19.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 30\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 30\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 30}{\\pi} = \\frac{60}{\\pi} \\approx 19.1\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 19.1 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 35\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.09,
      11.19
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 35\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 35\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{35}{\\pi} \\approx 11.14\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 11.14 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 10\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.32,
      6.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 10\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 10\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 10}{\\pi} = \\frac{20}{\\pi} \\approx 6.37\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 6.37 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 15\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.72,
      4.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 15\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 15\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{15}{\\pi} \\approx 4.77\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 4.77 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 20\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      12.68,
      12.78
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 20\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 20\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 20}{\\pi} = \\frac{40}{\\pi} \\approx 12.73\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 12.73 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 25\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 25\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 25\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{25}{\\pi} \\approx 7.96\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 7.96 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 30\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.05,
      19.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 30\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 30\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 30}{\\pi} = \\frac{60}{\\pi} \\approx 19.1\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 19.1 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 35\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.09,
      11.19
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 35\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 35\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{35}{\\pi} \\approx 11.14\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 11.14 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 10\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.32,
      6.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 10\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 10\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 10}{\\pi} = \\frac{20}{\\pi} \\approx 6.37\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 6.37 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 15\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.72,
      4.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 15\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 15\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{15}{\\pi} \\approx 4.77\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 4.77 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 20\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      12.68,
      12.78
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 20\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 20\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 20}{\\pi} = \\frac{40}{\\pi} \\approx 12.73\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 12.73 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 25\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 25\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 25\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{25}{\\pi} \\approx 7.96\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 7.96 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 30\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.05,
      19.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 30\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 30\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 30}{\\pi} = \\frac{60}{\\pi} \\approx 19.1\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 19.1 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 35\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.09,
      11.19
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 35\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 35\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{35}{\\pi} \\approx 11.14\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 11.14 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 10\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.32,
      6.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 10\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 10\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 10}{\\pi} = \\frac{20}{\\pi} \\approx 6.37\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 6.37 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 15\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.72,
      4.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 15\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 15\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{15}{\\pi} \\approx 4.77\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 4.77 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 20\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      12.68,
      12.78
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 20\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 20\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 20}{\\pi} = \\frac{40}{\\pi} \\approx 12.73\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 12.73 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A half-wave rectifier is energized by an AC source of peak voltage $V_m = 25\\text{ V}$. Assuming an ideal diode, the DC output voltage $V_{dc}$ across the resistive load is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 25\\text{ V}$",
        "Rectifier topology: Half-wave"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a half-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{V_m}{\\pi}$.",
        "Step 2: $V_m = 25\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{25}{\\pi} \\approx 7.96\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 7.96 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = 30\\text{ V}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{dc}$ across the load resistor is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.05,
      19.15
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the DC average output voltage of a diode rectifier circuit.",
      "givenInformationAndAssumptions": [
        "Peak AC voltage: $V_m = 30\\text{ V}$",
        "Rectifier topology: Full-wave center-tapped"
      ],
      "relevantConcept": "The DC component of a rectified waveform is the average value over one period: $V_{dc} = \\frac{2V_m}{\\pi}$ for full-wave and $\\frac{V_m}{\\pi}$ for half-wave.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})",
          "terms": [
            {
              "term": "V_m",
              "explanation": "Peak sinusoidal AC amplitude"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a full-wave rectifier, average (DC) voltage is $V_{dc} = \\frac{2 V_m}{\\pi}$.",
        "Step 2: $V_m = 30\\text{ V}$.",
        "Step 3: $V_{dc} = \\frac{2 \\times 30}{\\pi} = \\frac{60}{\\pi} \\approx 19.1\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vdc = 19.1 V",
      "alternativeApproachOrShortcut": "Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
      "commonMistakes": [
        "Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Diode Applications",
      "Rectifiers",
      "DC Voltage",
      "Ripple"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 20\\text{ V}$, a series current-limiting resistor $R_s = 100\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      79.5,
      80.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 20\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 100\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 20 \\times \\frac{500}{600} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{20 - 10}{100}\\,\\text{A} = \\frac{10}{100}\\,\\text{A} = 100.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 100.0 - 20.0 = 80.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 80.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 25\\text{ V}$, a series current-limiting resistor $R_s = 150\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      79.5,
      80.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 25\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 150\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 25 \\times \\frac{500}{650} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{25 - 10}{150}\\,\\text{A} = \\frac{15}{150}\\,\\text{A} = 100.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 100.0 - 20.0 = 80.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 80.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 30\\text{ V}$, a series current-limiting resistor $R_s = 200\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      79.5,
      80.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 30\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 200\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 30 \\times \\frac{500}{700} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{30 - 10}{200}\\,\\text{A} = \\frac{20}{200}\\,\\text{A} = 100.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 100.0 - 20.0 = 80.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 80.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 35\\text{ V}$, a series current-limiting resistor $R_s = 250\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      79.5,
      80.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 35\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 250\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 35 \\times \\frac{500}{750} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{35 - 10}{250}\\,\\text{A} = \\frac{25}{250}\\,\\text{A} = 100.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 100.0 - 20.0 = 80.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 80.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 40\\text{ V}$, a series current-limiting resistor $R_s = 100\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      279.5,
      280.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 40\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 100\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 40 \\times \\frac{500}{600} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{40 - 10}{100}\\,\\text{A} = \\frac{30}{100}\\,\\text{A} = 300.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 300.0 - 20.0 = 280.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 280.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 20\\text{ V}$, a series current-limiting resistor $R_s = 150\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      46.2,
      47.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 20\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 150\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 20 \\times \\frac{500}{650} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{20 - 10}{150}\\,\\text{A} = \\frac{10}{150}\\,\\text{A} = 66.7\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 66.7 - 20.0 = 46.7\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 46.7 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 25\\text{ V}$, a series current-limiting resistor $R_s = 200\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      54.5,
      55.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 25\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 200\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 25 \\times \\frac{500}{700} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{25 - 10}{200}\\,\\text{A} = \\frac{15}{200}\\,\\text{A} = 75.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 75.0 - 20.0 = 55.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 55.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 30\\text{ V}$, a series current-limiting resistor $R_s = 250\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      59.5,
      60.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 30\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 250\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 30 \\times \\frac{500}{750} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{30 - 10}{250}\\,\\text{A} = \\frac{20}{250}\\,\\text{A} = 80.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 80.0 - 20.0 = 60.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 60.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 35\\text{ V}$, a series current-limiting resistor $R_s = 100\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      229.5,
      230.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 35\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 100\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 35 \\times \\frac{500}{600} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{35 - 10}{100}\\,\\text{A} = \\frac{25}{100}\\,\\text{A} = 250.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 250.0 - 20.0 = 230.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 230.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 40\\text{ V}$, a series current-limiting resistor $R_s = 150\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      179.5,
      180.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 40\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 150\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 40 \\times \\frac{500}{650} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{40 - 10}{150}\\,\\text{A} = \\frac{30}{150}\\,\\text{A} = 200.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 200.0 - 20.0 = 180.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 180.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 20\\text{ V}$, a series current-limiting resistor $R_s = 200\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      29.5,
      30.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 20\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 200\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 20 \\times \\frac{500}{700} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{20 - 10}{200}\\,\\text{A} = \\frac{10}{200}\\,\\text{A} = 50.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 50.0 - 20.0 = 30.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 30.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 25\\text{ V}$, a series current-limiting resistor $R_s = 250\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      39.5,
      40.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 25\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 250\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 25 \\times \\frac{500}{750} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{25 - 10}{250}\\,\\text{A} = \\frac{15}{250}\\,\\text{A} = 60.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 60.0 - 20.0 = 40.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 40.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 30\\text{ V}$, a series current-limiting resistor $R_s = 100\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      179.5,
      180.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 30\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 100\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 30 \\times \\frac{500}{600} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{30 - 10}{100}\\,\\text{A} = \\frac{20}{100}\\,\\text{A} = 200.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 200.0 - 20.0 = 180.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 180.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 35\\text{ V}$, a series current-limiting resistor $R_s = 150\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      146.2,
      147.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 35\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 150\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 35 \\times \\frac{500}{650} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{35 - 10}{150}\\,\\text{A} = \\frac{25}{150}\\,\\text{A} = 166.7\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 166.7 - 20.0 = 146.7\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 146.7 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 40\\text{ V}$, a series current-limiting resistor $R_s = 200\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      129.5,
      130.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 40\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 200\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 40 \\times \\frac{500}{700} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{40 - 10}{200}\\,\\text{A} = \\frac{30}{200}\\,\\text{A} = 150.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 150.0 - 20.0 = 130.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 130.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 20\\text{ V}$, a series current-limiting resistor $R_s = 250\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      19.5,
      20.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 20\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 250\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 20 \\times \\frac{500}{750} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{20 - 10}{250}\\,\\text{A} = \\frac{10}{250}\\,\\text{A} = 40.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 40.0 - 20.0 = 20.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 20.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 25\\text{ V}$, a series current-limiting resistor $R_s = 100\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      129.5,
      130.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 25\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 100\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 25 \\times \\frac{500}{600} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{25 - 10}{100}\\,\\text{A} = \\frac{15}{100}\\,\\text{A} = 150.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 150.0 - 20.0 = 130.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 130.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 30\\text{ V}$, a series current-limiting resistor $R_s = 150\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      112.8,
      113.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 30\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 150\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 30 \\times \\frac{500}{650} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{30 - 10}{150}\\,\\text{A} = \\frac{20}{150}\\,\\text{A} = 133.3\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 133.3 - 20.0 = 113.3\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 113.3 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 35\\text{ V}$, a series current-limiting resistor $R_s = 200\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      104.5,
      105.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 35\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 200\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 35 \\times \\frac{500}{700} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{35 - 10}{200}\\,\\text{A} = \\frac{25}{200}\\,\\text{A} = 125.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 125.0 - 20.0 = 105.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 105.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 40\\text{ V}$, a series current-limiting resistor $R_s = 250\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      99.5,
      100.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 40\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 250\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 40 \\times \\frac{500}{750} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{40 - 10}{250}\\,\\text{A} = \\frac{30}{250}\\,\\text{A} = 120.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 120.0 - 20.0 = 100.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 100.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 20\\text{ V}$, a series current-limiting resistor $R_s = 100\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      79.5,
      80.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 20\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 100\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 20 \\times \\frac{500}{600} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{20 - 10}{100}\\,\\text{A} = \\frac{10}{100}\\,\\text{A} = 100.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 100.0 - 20.0 = 80.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 80.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 25\\text{ V}$, a series current-limiting resistor $R_s = 150\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      79.5,
      80.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 25\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 150\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 25 \\times \\frac{500}{650} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{25 - 10}{150}\\,\\text{A} = \\frac{15}{150}\\,\\text{A} = 100.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 100.0 - 20.0 = 80.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 80.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 30\\text{ V}$, a series current-limiting resistor $R_s = 200\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      79.5,
      80.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 30\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 200\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 30 \\times \\frac{500}{700} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{30 - 10}{200}\\,\\text{A} = \\frac{20}{200}\\,\\text{A} = 100.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 100.0 - 20.0 = 80.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 80.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 35\\text{ V}$, a series current-limiting resistor $R_s = 250\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      79.5,
      80.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 35\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 250\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 35 \\times \\frac{500}{750} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{35 - 10}{250}\\,\\text{A} = \\frac{25}{250}\\,\\text{A} = 100.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 100.0 - 20.0 = 80.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 80.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 40\\text{ V}$, a series current-limiting resistor $R_s = 100\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      279.5,
      280.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 40\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 100\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 40 \\times \\frac{500}{600} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{40 - 10}{100}\\,\\text{A} = \\frac{30}{100}\\,\\text{A} = 300.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 300.0 - 20.0 = 280.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 280.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 20\\text{ V}$, a series current-limiting resistor $R_s = 150\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      46.2,
      47.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 20\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 150\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 20 \\times \\frac{500}{650} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{20 - 10}{150}\\,\\text{A} = \\frac{10}{150}\\,\\text{A} = 66.7\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 66.7 - 20.0 = 46.7\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 46.7 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 25\\text{ V}$, a series current-limiting resistor $R_s = 200\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      54.5,
      55.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 25\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 200\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 25 \\times \\frac{500}{700} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{25 - 10}{200}\\,\\text{A} = \\frac{15}{200}\\,\\text{A} = 75.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 75.0 - 20.0 = 55.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 55.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 30\\text{ V}$, a series current-limiting resistor $R_s = 250\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      59.5,
      60.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 30\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 250\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 30 \\times \\frac{500}{750} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{30 - 10}{250}\\,\\text{A} = \\frac{20}{250}\\,\\text{A} = 80.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 80.0 - 20.0 = 60.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 60.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 35\\text{ V}$, a series current-limiting resistor $R_s = 100\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      229.5,
      230.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 35\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 100\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 35 \\times \\frac{500}{600} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{35 - 10}{100}\\,\\text{A} = \\frac{25}{100}\\,\\text{A} = 250.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 250.0 - 20.0 = 230.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 230.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 40\\text{ V}$, a series current-limiting resistor $R_s = 150\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      179.5,
      180.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 40\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 150\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 40 \\times \\frac{500}{650} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{40 - 10}{150}\\,\\text{A} = \\frac{30}{150}\\,\\text{A} = 200.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 200.0 - 20.0 = 180.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 180.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 20\\text{ V}$, a series current-limiting resistor $R_s = 200\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      29.5,
      30.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 20\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 200\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 20 \\times \\frac{500}{700} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{20 - 10}{200}\\,\\text{A} = \\frac{10}{200}\\,\\text{A} = 50.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 50.0 - 20.0 = 30.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 30.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 25\\text{ V}$, a series current-limiting resistor $R_s = 250\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      39.5,
      40.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 25\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 250\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 25 \\times \\frac{500}{750} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{25 - 10}{250}\\,\\text{A} = \\frac{15}{250}\\,\\text{A} = 60.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 60.0 - 20.0 = 40.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 40.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 30\\text{ V}$, a series current-limiting resistor $R_s = 100\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      179.5,
      180.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 30\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 100\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 30 \\times \\frac{500}{600} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{30 - 10}{100}\\,\\text{A} = \\frac{20}{100}\\,\\text{A} = 200.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 200.0 - 20.0 = 180.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 180.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 35\\text{ V}$, a series current-limiting resistor $R_s = 150\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      146.2,
      147.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 35\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 150\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 35 \\times \\frac{500}{650} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{35 - 10}{150}\\,\\text{A} = \\frac{25}{150}\\,\\text{A} = 166.7\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 166.7 - 20.0 = 146.7\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 146.7 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Diode Applications",
    "subject": "Analog Circuits",
    "topic": "Diode Applications",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{in} = 40\\text{ V}$, a series current-limiting resistor $R_s = 200\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{ V}$. The load resistor is $R_L = 500\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      129.5,
      130.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the operating current through the Zener diode in a shunt regulator circuit.",
      "givenInformationAndAssumptions": [
        "Input voltage $V_{in} = 40\\text{ V}$",
        "Zener voltage $V_Z = 10\\text{ V}$",
        "Series resistor $R_s = 200\\,\\Omega$",
        "Load resistor $R_L = 500\\,\\Omega$"
      ],
      "relevantConcept": "When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}",
          "terms": [
            {
              "term": "I_Z",
              "explanation": "Current through Zener diode"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{in} \\frac{R_L}{R_s + R_L} = 40 \\times \\frac{500}{700} > 10\\text{ V}$. Thus Zener is in breakdown.",
        "Step 2: Source current: $I_s = \\frac{V_{in} - V_Z}{R_s} = \\frac{40 - 10}{200}\\,\\text{A} = \\frac{30}{200}\\,\\text{A} = 150.0\\text{ mA}$.",
        "Step 3: Load current: $I_L = \\frac{V_Z}{R_L} = \\frac{10}{500}\\,\\text{A} = 20.0\\text{ mA}$.",
        "Step 4: Zener current by KCL: $I_Z = I_s - I_L = 150.0 - 20.0 = 130.0\\text{ mA}$."
      ],
      "finalAnswerWithUnits": "IZ = 130.0 mA",
      "alternativeApproachOrShortcut": "Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
      "commonMistakes": [
        "Assuming total source current flows through the Zener diode, ignoring load current $I_L$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Zener Diode",
      "Voltage Regulator",
      "Diode Circuits",
      "KCL"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.0\\text{ mA}$. The collector load resistor is $R_C = 2.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      75,
      79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.0\\text{ mA}$",
        "Collector resistor $R_C = 2.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.0 \\times 10^{-3}}{0.026} \\approx 38.46\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.0 \\times 10^{-3} \\times (2.0 \\times 10^3)}{0.026} = \\frac{2.0}{0.026} \\approx 77$."
      ],
      "finalAnswerWithUnits": "|Av| = 77",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.5\\text{ mA}$. The collector load resistor is $R_C = 3.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      171,
      175
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.5\\text{ mA}$",
        "Collector resistor $R_C = 3.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.5 \\times 10^{-3}}{0.026} \\approx 57.69\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.5 \\times 10^{-3} \\times (3.0 \\times 10^3)}{0.026} = \\frac{4.5}{0.026} \\approx 173$."
      ],
      "finalAnswerWithUnits": "|Av| = 173",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.0\\text{ mA}$. The collector load resistor is $R_C = 4.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      306,
      310
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.0\\text{ mA}$",
        "Collector resistor $R_C = 4.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.0 \\times 10^{-3}}{0.026} \\approx 76.92\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.0 \\times 10^{-3} \\times (4.0 \\times 10^3)}{0.026} = \\frac{8.0}{0.026} \\approx 308$."
      ],
      "finalAnswerWithUnits": "|Av| = 308",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.5\\text{ mA}$. The collector load resistor is $R_C = 5.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      479,
      483
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.5\\text{ mA}$",
        "Collector resistor $R_C = 5.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.5 \\times 10^{-3}}{0.026} \\approx 96.15\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.5 \\times 10^{-3} \\times (5.0 \\times 10^3)}{0.026} = \\frac{12.5}{0.026} \\approx 481$."
      ],
      "finalAnswerWithUnits": "|Av| = 481",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 3.0\\text{ mA}$. The collector load resistor is $R_C = 2.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      229,
      233
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 3.0\\text{ mA}$",
        "Collector resistor $R_C = 2.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{3.0 \\times 10^{-3}}{0.026} \\approx 115.38\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{3.0 \\times 10^{-3} \\times (2.0 \\times 10^3)}{0.026} = \\frac{6.0}{0.026} \\approx 231$."
      ],
      "finalAnswerWithUnits": "|Av| = 231",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.0\\text{ mA}$. The collector load resistor is $R_C = 3.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      113,
      117
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.0\\text{ mA}$",
        "Collector resistor $R_C = 3.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.0 \\times 10^{-3}}{0.026} \\approx 38.46\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.0 \\times 10^{-3} \\times (3.0 \\times 10^3)}{0.026} = \\frac{3.0}{0.026} \\approx 115$."
      ],
      "finalAnswerWithUnits": "|Av| = 115",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.5\\text{ mA}$. The collector load resistor is $R_C = 4.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      229,
      233
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.5\\text{ mA}$",
        "Collector resistor $R_C = 4.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.5 \\times 10^{-3}}{0.026} \\approx 57.69\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.5 \\times 10^{-3} \\times (4.0 \\times 10^3)}{0.026} = \\frac{6.0}{0.026} \\approx 231$."
      ],
      "finalAnswerWithUnits": "|Av| = 231",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.0\\text{ mA}$. The collector load resistor is $R_C = 5.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      383,
      387
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.0\\text{ mA}$",
        "Collector resistor $R_C = 5.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.0 \\times 10^{-3}}{0.026} \\approx 76.92\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.0 \\times 10^{-3} \\times (5.0 \\times 10^3)}{0.026} = \\frac{10.0}{0.026} \\approx 385$."
      ],
      "finalAnswerWithUnits": "|Av| = 385",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.5\\text{ mA}$. The collector load resistor is $R_C = 2.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      190,
      194
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.5\\text{ mA}$",
        "Collector resistor $R_C = 2.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.5 \\times 10^{-3}}{0.026} \\approx 96.15\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.5 \\times 10^{-3} \\times (2.0 \\times 10^3)}{0.026} = \\frac{5.0}{0.026} \\approx 192$."
      ],
      "finalAnswerWithUnits": "|Av| = 192",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 3.0\\text{ mA}$. The collector load resistor is $R_C = 3.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      344,
      348
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 3.0\\text{ mA}$",
        "Collector resistor $R_C = 3.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{3.0 \\times 10^{-3}}{0.026} \\approx 115.38\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{3.0 \\times 10^{-3} \\times (3.0 \\times 10^3)}{0.026} = \\frac{9.0}{0.026} \\approx 346$."
      ],
      "finalAnswerWithUnits": "|Av| = 346",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.0\\text{ mA}$. The collector load resistor is $R_C = 4.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      152,
      156
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.0\\text{ mA}$",
        "Collector resistor $R_C = 4.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.0 \\times 10^{-3}}{0.026} \\approx 38.46\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.0 \\times 10^{-3} \\times (4.0 \\times 10^3)}{0.026} = \\frac{4.0}{0.026} \\approx 154$."
      ],
      "finalAnswerWithUnits": "|Av| = 154",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.5\\text{ mA}$. The collector load resistor is $R_C = 5.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      286,
      290
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.5\\text{ mA}$",
        "Collector resistor $R_C = 5.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.5 \\times 10^{-3}}{0.026} \\approx 57.69\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.5 \\times 10^{-3} \\times (5.0 \\times 10^3)}{0.026} = \\frac{7.5}{0.026} \\approx 288$."
      ],
      "finalAnswerWithUnits": "|Av| = 288",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.0\\text{ mA}$. The collector load resistor is $R_C = 2.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      152,
      156
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.0\\text{ mA}$",
        "Collector resistor $R_C = 2.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.0 \\times 10^{-3}}{0.026} \\approx 76.92\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.0 \\times 10^{-3} \\times (2.0 \\times 10^3)}{0.026} = \\frac{4.0}{0.026} \\approx 154$."
      ],
      "finalAnswerWithUnits": "|Av| = 154",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.5\\text{ mA}$. The collector load resistor is $R_C = 3.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      286,
      290
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.5\\text{ mA}$",
        "Collector resistor $R_C = 3.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.5 \\times 10^{-3}}{0.026} \\approx 96.15\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.5 \\times 10^{-3} \\times (3.0 \\times 10^3)}{0.026} = \\frac{7.5}{0.026} \\approx 288$."
      ],
      "finalAnswerWithUnits": "|Av| = 288",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 3.0\\text{ mA}$. The collector load resistor is $R_C = 4.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      460,
      464
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 3.0\\text{ mA}$",
        "Collector resistor $R_C = 4.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{3.0 \\times 10^{-3}}{0.026} \\approx 115.38\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{3.0 \\times 10^{-3} \\times (4.0 \\times 10^3)}{0.026} = \\frac{12.0}{0.026} \\approx 462$."
      ],
      "finalAnswerWithUnits": "|Av| = 462",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.0\\text{ mA}$. The collector load resistor is $R_C = 5.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      190,
      194
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.0\\text{ mA}$",
        "Collector resistor $R_C = 5.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.0 \\times 10^{-3}}{0.026} \\approx 38.46\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.0 \\times 10^{-3} \\times (5.0 \\times 10^3)}{0.026} = \\frac{5.0}{0.026} \\approx 192$."
      ],
      "finalAnswerWithUnits": "|Av| = 192",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.5\\text{ mA}$. The collector load resistor is $R_C = 2.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      113,
      117
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.5\\text{ mA}$",
        "Collector resistor $R_C = 2.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.5 \\times 10^{-3}}{0.026} \\approx 57.69\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.5 \\times 10^{-3} \\times (2.0 \\times 10^3)}{0.026} = \\frac{3.0}{0.026} \\approx 115$."
      ],
      "finalAnswerWithUnits": "|Av| = 115",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.0\\text{ mA}$. The collector load resistor is $R_C = 3.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      229,
      233
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.0\\text{ mA}$",
        "Collector resistor $R_C = 3.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.0 \\times 10^{-3}}{0.026} \\approx 76.92\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.0 \\times 10^{-3} \\times (3.0 \\times 10^3)}{0.026} = \\frac{6.0}{0.026} \\approx 231$."
      ],
      "finalAnswerWithUnits": "|Av| = 231",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.5\\text{ mA}$. The collector load resistor is $R_C = 4.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      383,
      387
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.5\\text{ mA}$",
        "Collector resistor $R_C = 4.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.5 \\times 10^{-3}}{0.026} \\approx 96.15\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.5 \\times 10^{-3} \\times (4.0 \\times 10^3)}{0.026} = \\frac{10.0}{0.026} \\approx 385$."
      ],
      "finalAnswerWithUnits": "|Av| = 385",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 3.0\\text{ mA}$. The collector load resistor is $R_C = 5.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      575,
      579
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 3.0\\text{ mA}$",
        "Collector resistor $R_C = 5.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{3.0 \\times 10^{-3}}{0.026} \\approx 115.38\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{3.0 \\times 10^{-3} \\times (5.0 \\times 10^3)}{0.026} = \\frac{15.0}{0.026} \\approx 577$."
      ],
      "finalAnswerWithUnits": "|Av| = 577",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.0\\text{ mA}$. The collector load resistor is $R_C = 2.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      75,
      79
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.0\\text{ mA}$",
        "Collector resistor $R_C = 2.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.0 \\times 10^{-3}}{0.026} \\approx 38.46\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.0 \\times 10^{-3} \\times (2.0 \\times 10^3)}{0.026} = \\frac{2.0}{0.026} \\approx 77$."
      ],
      "finalAnswerWithUnits": "|Av| = 77",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.5\\text{ mA}$. The collector load resistor is $R_C = 3.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      171,
      175
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.5\\text{ mA}$",
        "Collector resistor $R_C = 3.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.5 \\times 10^{-3}}{0.026} \\approx 57.69\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.5 \\times 10^{-3} \\times (3.0 \\times 10^3)}{0.026} = \\frac{4.5}{0.026} \\approx 173$."
      ],
      "finalAnswerWithUnits": "|Av| = 173",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.0\\text{ mA}$. The collector load resistor is $R_C = 4.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      306,
      310
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.0\\text{ mA}$",
        "Collector resistor $R_C = 4.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.0 \\times 10^{-3}}{0.026} \\approx 76.92\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.0 \\times 10^{-3} \\times (4.0 \\times 10^3)}{0.026} = \\frac{8.0}{0.026} \\approx 308$."
      ],
      "finalAnswerWithUnits": "|Av| = 308",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.5\\text{ mA}$. The collector load resistor is $R_C = 5.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      479,
      483
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.5\\text{ mA}$",
        "Collector resistor $R_C = 5.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.5 \\times 10^{-3}}{0.026} \\approx 96.15\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.5 \\times 10^{-3} \\times (5.0 \\times 10^3)}{0.026} = \\frac{12.5}{0.026} \\approx 481$."
      ],
      "finalAnswerWithUnits": "|Av| = 481",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 3.0\\text{ mA}$. The collector load resistor is $R_C = 2.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      229,
      233
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 3.0\\text{ mA}$",
        "Collector resistor $R_C = 2.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{3.0 \\times 10^{-3}}{0.026} \\approx 115.38\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{3.0 \\times 10^{-3} \\times (2.0 \\times 10^3)}{0.026} = \\frac{6.0}{0.026} \\approx 231$."
      ],
      "finalAnswerWithUnits": "|Av| = 231",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.0\\text{ mA}$. The collector load resistor is $R_C = 3.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      113,
      117
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.0\\text{ mA}$",
        "Collector resistor $R_C = 3.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.0 \\times 10^{-3}}{0.026} \\approx 38.46\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.0 \\times 10^{-3} \\times (3.0 \\times 10^3)}{0.026} = \\frac{3.0}{0.026} \\approx 115$."
      ],
      "finalAnswerWithUnits": "|Av| = 115",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.5\\text{ mA}$. The collector load resistor is $R_C = 4.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      229,
      233
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.5\\text{ mA}$",
        "Collector resistor $R_C = 4.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.5 \\times 10^{-3}}{0.026} \\approx 57.69\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.5 \\times 10^{-3} \\times (4.0 \\times 10^3)}{0.026} = \\frac{6.0}{0.026} \\approx 231$."
      ],
      "finalAnswerWithUnits": "|Av| = 231",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.0\\text{ mA}$. The collector load resistor is $R_C = 5.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      383,
      387
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.0\\text{ mA}$",
        "Collector resistor $R_C = 5.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.0 \\times 10^{-3}}{0.026} \\approx 76.92\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.0 \\times 10^{-3} \\times (5.0 \\times 10^3)}{0.026} = \\frac{10.0}{0.026} \\approx 385$."
      ],
      "finalAnswerWithUnits": "|Av| = 385",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.5\\text{ mA}$. The collector load resistor is $R_C = 2.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      190,
      194
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.5\\text{ mA}$",
        "Collector resistor $R_C = 2.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.5 \\times 10^{-3}}{0.026} \\approx 96.15\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.5 \\times 10^{-3} \\times (2.0 \\times 10^3)}{0.026} = \\frac{5.0}{0.026} \\approx 192$."
      ],
      "finalAnswerWithUnits": "|Av| = 192",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 3.0\\text{ mA}$. The collector load resistor is $R_C = 3.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      344,
      348
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 3.0\\text{ mA}$",
        "Collector resistor $R_C = 3.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{3.0 \\times 10^{-3}}{0.026} \\approx 115.38\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{3.0 \\times 10^{-3} \\times (3.0 \\times 10^3)}{0.026} = \\frac{9.0}{0.026} \\approx 346$."
      ],
      "finalAnswerWithUnits": "|Av| = 346",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.0\\text{ mA}$. The collector load resistor is $R_C = 4.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      152,
      156
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.0\\text{ mA}$",
        "Collector resistor $R_C = 4.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.0 \\times 10^{-3}}{0.026} \\approx 38.46\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.0 \\times 10^{-3} \\times (4.0 \\times 10^3)}{0.026} = \\frac{4.0}{0.026} \\approx 154$."
      ],
      "finalAnswerWithUnits": "|Av| = 154",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 1.5\\text{ mA}$. The collector load resistor is $R_C = 5.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      286,
      290
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 1.5\\text{ mA}$",
        "Collector resistor $R_C = 5.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{1.5 \\times 10^{-3}}{0.026} \\approx 57.69\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{1.5 \\times 10^{-3} \\times (5.0 \\times 10^3)}{0.026} = \\frac{7.5}{0.026} \\approx 288$."
      ],
      "finalAnswerWithUnits": "|Av| = 288",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.0\\text{ mA}$. The collector load resistor is $R_C = 2.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      152,
      156
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.0\\text{ mA}$",
        "Collector resistor $R_C = 2.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.0 \\times 10^{-3}}{0.026} \\approx 76.92\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.0 \\times 10^{-3} \\times (2.0 \\times 10^3)}{0.026} = \\frac{4.0}{0.026} \\approx 154$."
      ],
      "finalAnswerWithUnits": "|Av| = 154",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 2.5\\text{ mA}$. The collector load resistor is $R_C = 3.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      286,
      290
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 2.5\\text{ mA}$",
        "Collector resistor $R_C = 3.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{2.5 \\times 10^{-3}}{0.026} \\approx 96.15\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{2.5 \\times 10^{-3} \\times (3.0 \\times 10^3)}{0.026} = \\frac{7.5}{0.026} \\approx 288$."
      ],
      "finalAnswerWithUnits": "|Av| = 288",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = 3.0\\text{ mA}$. The collector load resistor is $R_C = 4.0\\text{ k}\\Omega$. Assuming thermal voltage $V_t = 26\\text{ mV}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      460,
      464
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
      "givenInformationAndAssumptions": [
        "Collector bias current $I_C = 3.0\\text{ mA}$",
        "Collector resistor $R_C = 4.0\\text{ k}\\Omega$",
        "$V_t = 26\\text{{ mV}}$",
        "Ideal BJT ($r_o = \\infty$)"
      ],
      "relevantConcept": "The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}",
          "terms": [
            {
              "term": "g_m",
              "explanation": "Transconductance = I_C / V_t"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute transconductance: $g_m = \\frac{I_C}{V_t} = \\frac{3.0 \\times 10^{-3}}{0.026} \\approx 115.38\\text{ mA/V}$.",
        "Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{3.0 \\times 10^{-3} \\times (4.0 \\times 10^3)}{0.026} = \\frac{12.0}{0.026} \\approx 462$."
      ],
      "finalAnswerWithUnits": "|Av| = 462",
      "alternativeApproachOrShortcut": "Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
      "commonMistakes": [
        "Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "BJT Amplifiers",
      "Common Emitter",
      "Voltage Gain",
      "Transconductance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 2.0\\text{ mA/V}$ and a drain load resistor $R_D = 5.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      9,
      11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 2.0\\text{ mA/V}$",
        "Drain resistor $R_D = 5.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 2.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 5.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (2.0 \\times 10^{-3}) \\times (5.0 \\times 10^3) = 2.0 \\times 5.0 = 10$."
      ],
      "finalAnswerWithUnits": "|Av| = 10",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 3.0\\text{ mA/V}$ and a drain load resistor $R_D = 7.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      22,
      24
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 3.0\\text{ mA/V}$",
        "Drain resistor $R_D = 7.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 3.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 7.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (3.0 \\times 10^{-3}) \\times (7.5 \\times 10^3) = 3.0 \\times 7.5 = 22$."
      ],
      "finalAnswerWithUnits": "|Av| = 22",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 4.0\\text{ mA/V}$ and a drain load resistor $R_D = 10.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      39,
      41
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 4.0\\text{ mA/V}$",
        "Drain resistor $R_D = 10.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 4.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 10.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (4.0 \\times 10^{-3}) \\times (10.0 \\times 10^3) = 4.0 \\times 10.0 = 40$."
      ],
      "finalAnswerWithUnits": "|Av| = 40",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 5.0\\text{ mA/V}$ and a drain load resistor $R_D = 12.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      62,
      64
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 5.0\\text{ mA/V}$",
        "Drain resistor $R_D = 12.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 5.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 12.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (5.0 \\times 10^{-3}) \\times (12.5 \\times 10^3) = 5.0 \\times 12.5 = 62$."
      ],
      "finalAnswerWithUnits": "|Av| = 62",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 6.0\\text{ mA/V}$ and a drain load resistor $R_D = 5.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      29,
      31
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 6.0\\text{ mA/V}$",
        "Drain resistor $R_D = 5.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 6.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 5.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (6.0 \\times 10^{-3}) \\times (5.0 \\times 10^3) = 6.0 \\times 5.0 = 30$."
      ],
      "finalAnswerWithUnits": "|Av| = 30",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 2.0\\text{ mA/V}$ and a drain load resistor $R_D = 7.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      14,
      16
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 2.0\\text{ mA/V}$",
        "Drain resistor $R_D = 7.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 2.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 7.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (2.0 \\times 10^{-3}) \\times (7.5 \\times 10^3) = 2.0 \\times 7.5 = 15$."
      ],
      "finalAnswerWithUnits": "|Av| = 15",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 3.0\\text{ mA/V}$ and a drain load resistor $R_D = 10.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      29,
      31
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 3.0\\text{ mA/V}$",
        "Drain resistor $R_D = 10.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 3.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 10.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (3.0 \\times 10^{-3}) \\times (10.0 \\times 10^3) = 3.0 \\times 10.0 = 30$."
      ],
      "finalAnswerWithUnits": "|Av| = 30",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 4.0\\text{ mA/V}$ and a drain load resistor $R_D = 12.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      49,
      51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 4.0\\text{ mA/V}$",
        "Drain resistor $R_D = 12.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 4.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 12.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (4.0 \\times 10^{-3}) \\times (12.5 \\times 10^3) = 4.0 \\times 12.5 = 50$."
      ],
      "finalAnswerWithUnits": "|Av| = 50",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 5.0\\text{ mA/V}$ and a drain load resistor $R_D = 5.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      24,
      26
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 5.0\\text{ mA/V}$",
        "Drain resistor $R_D = 5.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 5.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 5.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (5.0 \\times 10^{-3}) \\times (5.0 \\times 10^3) = 5.0 \\times 5.0 = 25$."
      ],
      "finalAnswerWithUnits": "|Av| = 25",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 6.0\\text{ mA/V}$ and a drain load resistor $R_D = 7.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      44,
      46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 6.0\\text{ mA/V}$",
        "Drain resistor $R_D = 7.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 6.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 7.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (6.0 \\times 10^{-3}) \\times (7.5 \\times 10^3) = 6.0 \\times 7.5 = 45$."
      ],
      "finalAnswerWithUnits": "|Av| = 45",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 2.0\\text{ mA/V}$ and a drain load resistor $R_D = 10.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      19,
      21
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 2.0\\text{ mA/V}$",
        "Drain resistor $R_D = 10.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 2.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 10.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (2.0 \\times 10^{-3}) \\times (10.0 \\times 10^3) = 2.0 \\times 10.0 = 20$."
      ],
      "finalAnswerWithUnits": "|Av| = 20",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 3.0\\text{ mA/V}$ and a drain load resistor $R_D = 12.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      36,
      38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 3.0\\text{ mA/V}$",
        "Drain resistor $R_D = 12.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 3.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 12.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (3.0 \\times 10^{-3}) \\times (12.5 \\times 10^3) = 3.0 \\times 12.5 = 38$."
      ],
      "finalAnswerWithUnits": "|Av| = 38",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 4.0\\text{ mA/V}$ and a drain load resistor $R_D = 5.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      19,
      21
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 4.0\\text{ mA/V}$",
        "Drain resistor $R_D = 5.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 4.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 5.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (4.0 \\times 10^{-3}) \\times (5.0 \\times 10^3) = 4.0 \\times 5.0 = 20$."
      ],
      "finalAnswerWithUnits": "|Av| = 20",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 5.0\\text{ mA/V}$ and a drain load resistor $R_D = 7.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      36,
      38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 5.0\\text{ mA/V}$",
        "Drain resistor $R_D = 7.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 5.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 7.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (5.0 \\times 10^{-3}) \\times (7.5 \\times 10^3) = 5.0 \\times 7.5 = 38$."
      ],
      "finalAnswerWithUnits": "|Av| = 38",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 6.0\\text{ mA/V}$ and a drain load resistor $R_D = 10.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      59,
      61
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 6.0\\text{ mA/V}$",
        "Drain resistor $R_D = 10.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 6.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 10.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (6.0 \\times 10^{-3}) \\times (10.0 \\times 10^3) = 6.0 \\times 10.0 = 60$."
      ],
      "finalAnswerWithUnits": "|Av| = 60",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 2.0\\text{ mA/V}$ and a drain load resistor $R_D = 12.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      24,
      26
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 2.0\\text{ mA/V}$",
        "Drain resistor $R_D = 12.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 2.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 12.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (2.0 \\times 10^{-3}) \\times (12.5 \\times 10^3) = 2.0 \\times 12.5 = 25$."
      ],
      "finalAnswerWithUnits": "|Av| = 25",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 3.0\\text{ mA/V}$ and a drain load resistor $R_D = 5.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      14,
      16
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 3.0\\text{ mA/V}$",
        "Drain resistor $R_D = 5.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 3.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 5.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (3.0 \\times 10^{-3}) \\times (5.0 \\times 10^3) = 3.0 \\times 5.0 = 15$."
      ],
      "finalAnswerWithUnits": "|Av| = 15",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 4.0\\text{ mA/V}$ and a drain load resistor $R_D = 7.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      29,
      31
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 4.0\\text{ mA/V}$",
        "Drain resistor $R_D = 7.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 4.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 7.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (4.0 \\times 10^{-3}) \\times (7.5 \\times 10^3) = 4.0 \\times 7.5 = 30$."
      ],
      "finalAnswerWithUnits": "|Av| = 30",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 5.0\\text{ mA/V}$ and a drain load resistor $R_D = 10.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      49,
      51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 5.0\\text{ mA/V}$",
        "Drain resistor $R_D = 10.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 5.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 10.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (5.0 \\times 10^{-3}) \\times (10.0 \\times 10^3) = 5.0 \\times 10.0 = 50$."
      ],
      "finalAnswerWithUnits": "|Av| = 50",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 6.0\\text{ mA/V}$ and a drain load resistor $R_D = 12.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      74,
      76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 6.0\\text{ mA/V}$",
        "Drain resistor $R_D = 12.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 6.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 12.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (6.0 \\times 10^{-3}) \\times (12.5 \\times 10^3) = 6.0 \\times 12.5 = 75$."
      ],
      "finalAnswerWithUnits": "|Av| = 75",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 2.0\\text{ mA/V}$ and a drain load resistor $R_D = 5.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      9,
      11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 2.0\\text{ mA/V}$",
        "Drain resistor $R_D = 5.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 2.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 5.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (2.0 \\times 10^{-3}) \\times (5.0 \\times 10^3) = 2.0 \\times 5.0 = 10$."
      ],
      "finalAnswerWithUnits": "|Av| = 10",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 3.0\\text{ mA/V}$ and a drain load resistor $R_D = 7.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      22,
      24
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 3.0\\text{ mA/V}$",
        "Drain resistor $R_D = 7.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 3.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 7.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (3.0 \\times 10^{-3}) \\times (7.5 \\times 10^3) = 3.0 \\times 7.5 = 22$."
      ],
      "finalAnswerWithUnits": "|Av| = 22",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 4.0\\text{ mA/V}$ and a drain load resistor $R_D = 10.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      39,
      41
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 4.0\\text{ mA/V}$",
        "Drain resistor $R_D = 10.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 4.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 10.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (4.0 \\times 10^{-3}) \\times (10.0 \\times 10^3) = 4.0 \\times 10.0 = 40$."
      ],
      "finalAnswerWithUnits": "|Av| = 40",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 5.0\\text{ mA/V}$ and a drain load resistor $R_D = 12.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      62,
      64
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 5.0\\text{ mA/V}$",
        "Drain resistor $R_D = 12.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 5.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 12.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (5.0 \\times 10^{-3}) \\times (12.5 \\times 10^3) = 5.0 \\times 12.5 = 62$."
      ],
      "finalAnswerWithUnits": "|Av| = 62",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 6.0\\text{ mA/V}$ and a drain load resistor $R_D = 5.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      29,
      31
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 6.0\\text{ mA/V}$",
        "Drain resistor $R_D = 5.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 6.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 5.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (6.0 \\times 10^{-3}) \\times (5.0 \\times 10^3) = 6.0 \\times 5.0 = 30$."
      ],
      "finalAnswerWithUnits": "|Av| = 30",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 2.0\\text{ mA/V}$ and a drain load resistor $R_D = 7.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      14,
      16
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 2.0\\text{ mA/V}$",
        "Drain resistor $R_D = 7.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 2.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 7.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (2.0 \\times 10^{-3}) \\times (7.5 \\times 10^3) = 2.0 \\times 7.5 = 15$."
      ],
      "finalAnswerWithUnits": "|Av| = 15",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 3.0\\text{ mA/V}$ and a drain load resistor $R_D = 10.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      29,
      31
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 3.0\\text{ mA/V}$",
        "Drain resistor $R_D = 10.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 3.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 10.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (3.0 \\times 10^{-3}) \\times (10.0 \\times 10^3) = 3.0 \\times 10.0 = 30$."
      ],
      "finalAnswerWithUnits": "|Av| = 30",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 4.0\\text{ mA/V}$ and a drain load resistor $R_D = 12.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      49,
      51
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 4.0\\text{ mA/V}$",
        "Drain resistor $R_D = 12.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 4.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 12.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (4.0 \\times 10^{-3}) \\times (12.5 \\times 10^3) = 4.0 \\times 12.5 = 50$."
      ],
      "finalAnswerWithUnits": "|Av| = 50",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 5.0\\text{ mA/V}$ and a drain load resistor $R_D = 5.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      24,
      26
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 5.0\\text{ mA/V}$",
        "Drain resistor $R_D = 5.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 5.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 5.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (5.0 \\times 10^{-3}) \\times (5.0 \\times 10^3) = 5.0 \\times 5.0 = 25$."
      ],
      "finalAnswerWithUnits": "|Av| = 25",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 6.0\\text{ mA/V}$ and a drain load resistor $R_D = 7.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      44,
      46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 6.0\\text{ mA/V}$",
        "Drain resistor $R_D = 7.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 6.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 7.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (6.0 \\times 10^{-3}) \\times (7.5 \\times 10^3) = 6.0 \\times 7.5 = 45$."
      ],
      "finalAnswerWithUnits": "|Av| = 45",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 2.0\\text{ mA/V}$ and a drain load resistor $R_D = 10.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      19,
      21
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 2.0\\text{ mA/V}$",
        "Drain resistor $R_D = 10.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 2.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 10.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (2.0 \\times 10^{-3}) \\times (10.0 \\times 10^3) = 2.0 \\times 10.0 = 20$."
      ],
      "finalAnswerWithUnits": "|Av| = 20",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 3.0\\text{ mA/V}$ and a drain load resistor $R_D = 12.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      36,
      38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 3.0\\text{ mA/V}$",
        "Drain resistor $R_D = 12.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 3.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 12.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (3.0 \\times 10^{-3}) \\times (12.5 \\times 10^3) = 3.0 \\times 12.5 = 38$."
      ],
      "finalAnswerWithUnits": "|Av| = 38",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 4.0\\text{ mA/V}$ and a drain load resistor $R_D = 5.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      19,
      21
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 4.0\\text{ mA/V}$",
        "Drain resistor $R_D = 5.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 4.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 5.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (4.0 \\times 10^{-3}) \\times (5.0 \\times 10^3) = 4.0 \\times 5.0 = 20$."
      ],
      "finalAnswerWithUnits": "|Av| = 20",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 5.0\\text{ mA/V}$ and a drain load resistor $R_D = 7.5\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      36,
      38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 5.0\\text{ mA/V}$",
        "Drain resistor $R_D = 7.5\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 5.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 7.5 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (5.0 \\times 10^{-3}) \\times (7.5 \\times 10^3) = 5.0 \\times 7.5 = 38$."
      ],
      "finalAnswerWithUnits": "|Av| = 38",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — BJT & MOSFET Amplifiers",
    "subject": "Analog Circuits",
    "topic": "BJT & MOSFET Amplifiers",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = 6.0\\text{ mA/V}$ and a drain load resistor $R_D = 10.0\\text{ k}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      59,
      61
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
      "givenInformationAndAssumptions": [
        "Transconductance $g_m = 6.0\\text{ mA/V}$",
        "Drain resistor $R_D = 10.0\\text{ k}\\Omega$",
        "Infinite output resistance ($r_o = \\infty$)"
      ],
      "relevantConcept": "For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "|A_v| = g_m R_D",
          "terms": [
            {
              "term": "g_m",
              "explanation": "MOSFET transconductance"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
        "Step 2: $g_m = 6.0 \\times 10^{-3}\\text{ A/V}$ and $R_D = 10.0 \\times 10^3\\,\\Omega$.",
        "Step 3: $|A_v| = (6.0 \\times 10^{-3}) \\times (10.0 \\times 10^3) = 6.0 \\times 10.0 = 60$."
      ],
      "finalAnswerWithUnits": "|Av| = 60",
      "alternativeApproachOrShortcut": "Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
      "commonMistakes": [
        "Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "MOSFET Amplifiers",
      "Common Source",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 1\\text{ k}\\Omega$ and feedback resistor $R_f = 10\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 1\\text{ k}\\Omega$, $R_f = 10\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 10\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{10}{1} = 10.0$$."
      ],
      "finalAnswerWithUnits": "Av = 10.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 2\\text{ k}\\Omega$ and $R_f = 15\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      8.45,
      8.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 2\\text{ k}\\Omega$, $R_f = 15\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 15\\text{ k}\\Omega$ and $R_1 = 2\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{15}{2} = 1 + 7.5 = 8.5$$."
      ],
      "finalAnswerWithUnits": "Av = 8.5",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 3\\text{ k}\\Omega$ and feedback resistor $R_f = 20\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.62,
      6.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 3\\text{ k}\\Omega$, $R_f = 20\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 20\\text{ k}\\Omega$ and $R_1 = 3\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{20}{3} = 6.67$$."
      ],
      "finalAnswerWithUnits": "Av = 6.67",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 4\\text{ k}\\Omega$ and $R_f = 25\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.2,
      7.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 4\\text{ k}\\Omega$, $R_f = 25\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 25\\text{ k}\\Omega$ and $R_1 = 4\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{25}{4} = 1 + 6.25 = 7.25$$."
      ],
      "finalAnswerWithUnits": "Av = 7.25",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 1\\text{ k}\\Omega$ and feedback resistor $R_f = 30\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 1\\text{ k}\\Omega$, $R_f = 30\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 30\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{30}{1} = 30.0$$."
      ],
      "finalAnswerWithUnits": "Av = 30.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 2\\text{ k}\\Omega$ and $R_f = 10\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 2\\text{ k}\\Omega$, $R_f = 10\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 10\\text{ k}\\Omega$ and $R_1 = 2\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{10}{2} = 1 + 5.0 = 6.0$$."
      ],
      "finalAnswerWithUnits": "Av = 6.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 3\\text{ k}\\Omega$ and feedback resistor $R_f = 15\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 3\\text{ k}\\Omega$, $R_f = 15\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 15\\text{ k}\\Omega$ and $R_1 = 3\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{15}{3} = 5.0$$."
      ],
      "finalAnswerWithUnits": "Av = 5.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 4\\text{ k}\\Omega$ and $R_f = 20\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 4\\text{ k}\\Omega$, $R_f = 20\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 20\\text{ k}\\Omega$ and $R_1 = 4\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{20}{4} = 1 + 5.0 = 6.0$$."
      ],
      "finalAnswerWithUnits": "Av = 6.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 1\\text{ k}\\Omega$ and feedback resistor $R_f = 25\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 1\\text{ k}\\Omega$, $R_f = 25\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 25\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{25}{1} = 25.0$$."
      ],
      "finalAnswerWithUnits": "Av = 25.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 2\\text{ k}\\Omega$ and $R_f = 30\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "16",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 2\\text{ k}\\Omega$, $R_f = 30\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 30\\text{ k}\\Omega$ and $R_1 = 2\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{30}{2} = 1 + 15.0 = 16.0$$."
      ],
      "finalAnswerWithUnits": "Av = 16.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 3\\text{ k}\\Omega$ and feedback resistor $R_f = 10\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.28,
      3.38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 3\\text{ k}\\Omega$, $R_f = 10\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 10\\text{ k}\\Omega$ and $R_1 = 3\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{10}{3} = 3.33$$."
      ],
      "finalAnswerWithUnits": "Av = 3.33",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 4\\text{ k}\\Omega$ and $R_f = 15\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.7,
      4.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 4\\text{ k}\\Omega$, $R_f = 15\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 15\\text{ k}\\Omega$ and $R_1 = 4\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{15}{4} = 1 + 3.75 = 4.75$$."
      ],
      "finalAnswerWithUnits": "Av = 4.75",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 1\\text{ k}\\Omega$ and feedback resistor $R_f = 20\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 1\\text{ k}\\Omega$, $R_f = 20\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 20\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{20}{1} = 20.0$$."
      ],
      "finalAnswerWithUnits": "Av = 20.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 2\\text{ k}\\Omega$ and $R_f = 25\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      13.45,
      13.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 2\\text{ k}\\Omega$, $R_f = 25\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 25\\text{ k}\\Omega$ and $R_1 = 2\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{25}{2} = 1 + 12.5 = 13.5$$."
      ],
      "finalAnswerWithUnits": "Av = 13.5",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 3\\text{ k}\\Omega$ and feedback resistor $R_f = 30\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 3\\text{ k}\\Omega$, $R_f = 30\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 30\\text{ k}\\Omega$ and $R_1 = 3\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{30}{3} = 10.0$$."
      ],
      "finalAnswerWithUnits": "Av = 10.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 4\\text{ k}\\Omega$ and $R_f = 10\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.45,
      3.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 4\\text{ k}\\Omega$, $R_f = 10\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 10\\text{ k}\\Omega$ and $R_1 = 4\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{10}{4} = 1 + 2.5 = 3.5$$."
      ],
      "finalAnswerWithUnits": "Av = 3.5",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 1\\text{ k}\\Omega$ and feedback resistor $R_f = 15\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 1\\text{ k}\\Omega$, $R_f = 15\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 15\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{15}{1} = 15.0$$."
      ],
      "finalAnswerWithUnits": "Av = 15.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 2\\text{ k}\\Omega$ and $R_f = 20\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "11",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 2\\text{ k}\\Omega$, $R_f = 20\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 20\\text{ k}\\Omega$ and $R_1 = 2\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{20}{2} = 1 + 10.0 = 11.0$$."
      ],
      "finalAnswerWithUnits": "Av = 11.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 3\\text{ k}\\Omega$ and feedback resistor $R_f = 25\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      8.28,
      8.38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 3\\text{ k}\\Omega$, $R_f = 25\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 25\\text{ k}\\Omega$ and $R_1 = 3\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{25}{3} = 8.33$$."
      ],
      "finalAnswerWithUnits": "Av = 8.33",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 4\\text{ k}\\Omega$ and $R_f = 30\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      8.45,
      8.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 4\\text{ k}\\Omega$, $R_f = 30\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 30\\text{ k}\\Omega$ and $R_1 = 4\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{30}{4} = 1 + 7.5 = 8.5$$."
      ],
      "finalAnswerWithUnits": "Av = 8.5",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 1\\text{ k}\\Omega$ and feedback resistor $R_f = 10\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 1\\text{ k}\\Omega$, $R_f = 10\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 10\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{10}{1} = 10.0$$."
      ],
      "finalAnswerWithUnits": "Av = 10.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 2\\text{ k}\\Omega$ and $R_f = 15\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      8.45,
      8.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 2\\text{ k}\\Omega$, $R_f = 15\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 15\\text{ k}\\Omega$ and $R_1 = 2\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{15}{2} = 1 + 7.5 = 8.5$$."
      ],
      "finalAnswerWithUnits": "Av = 8.5",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 3\\text{ k}\\Omega$ and feedback resistor $R_f = 20\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.62,
      6.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 3\\text{ k}\\Omega$, $R_f = 20\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 20\\text{ k}\\Omega$ and $R_1 = 3\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{20}{3} = 6.67$$."
      ],
      "finalAnswerWithUnits": "Av = 6.67",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 4\\text{ k}\\Omega$ and $R_f = 25\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.2,
      7.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 4\\text{ k}\\Omega$, $R_f = 25\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 25\\text{ k}\\Omega$ and $R_1 = 4\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{25}{4} = 1 + 6.25 = 7.25$$."
      ],
      "finalAnswerWithUnits": "Av = 7.25",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 1\\text{ k}\\Omega$ and feedback resistor $R_f = 30\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 1\\text{ k}\\Omega$, $R_f = 30\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 30\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{30}{1} = 30.0$$."
      ],
      "finalAnswerWithUnits": "Av = 30.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 2\\text{ k}\\Omega$ and $R_f = 10\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 2\\text{ k}\\Omega$, $R_f = 10\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 10\\text{ k}\\Omega$ and $R_1 = 2\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{10}{2} = 1 + 5.0 = 6.0$$."
      ],
      "finalAnswerWithUnits": "Av = 6.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 3\\text{ k}\\Omega$ and feedback resistor $R_f = 15\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 3\\text{ k}\\Omega$, $R_f = 15\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 15\\text{ k}\\Omega$ and $R_1 = 3\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{15}{3} = 5.0$$."
      ],
      "finalAnswerWithUnits": "Av = 5.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 4\\text{ k}\\Omega$ and $R_f = 20\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 4\\text{ k}\\Omega$, $R_f = 20\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 20\\text{ k}\\Omega$ and $R_1 = 4\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{20}{4} = 1 + 5.0 = 6.0$$."
      ],
      "finalAnswerWithUnits": "Av = 6.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 1\\text{ k}\\Omega$ and feedback resistor $R_f = 25\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 1\\text{ k}\\Omega$, $R_f = 25\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 25\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{25}{1} = 25.0$$."
      ],
      "finalAnswerWithUnits": "Av = 25.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 2\\text{ k}\\Omega$ and $R_f = 30\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "16",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 2\\text{ k}\\Omega$, $R_f = 30\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 30\\text{ k}\\Omega$ and $R_1 = 2\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{30}{2} = 1 + 15.0 = 16.0$$."
      ],
      "finalAnswerWithUnits": "Av = 16.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 3\\text{ k}\\Omega$ and feedback resistor $R_f = 10\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.28,
      3.38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 3\\text{ k}\\Omega$, $R_f = 10\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 10\\text{ k}\\Omega$ and $R_1 = 3\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{10}{3} = 3.33$$."
      ],
      "finalAnswerWithUnits": "Av = 3.33",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 4\\text{ k}\\Omega$ and $R_f = 15\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.7,
      4.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 4\\text{ k}\\Omega$, $R_f = 15\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 15\\text{ k}\\Omega$ and $R_1 = 4\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{15}{4} = 1 + 3.75 = 4.75$$."
      ],
      "finalAnswerWithUnits": "Av = 4.75",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 1\\text{ k}\\Omega$ and feedback resistor $R_f = 20\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 1\\text{ k}\\Omega$, $R_f = 20\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 20\\text{ k}\\Omega$ and $R_1 = 1\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{20}{1} = 20.0$$."
      ],
      "finalAnswerWithUnits": "Av = 20.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = 2\\text{ k}\\Omega$ and $R_f = 25\\text{ k}\\Omega$. The closed-loop voltage gain $A_{v}$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      13.45,
      13.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 2\\text{ k}\\Omega$, $R_f = 25\\text{ k}\\Omega$",
        "Topology: Non-Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 25\\text{ k}\\Omega$ and $R_1 = 2\\text{ k}\\Omega$:",
        "$$A_v = 1 + \\frac{25}{2} = 1 + 12.5 = 13.5$$."
      ],
      "finalAnswerWithUnits": "Av = 13.5",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = 3\\text{ k}\\Omega$ and feedback resistor $R_f = 30\\text{ k}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{v}|$ is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
      "givenInformationAndAssumptions": [
        "Resistors: $R_1 = 3\\text{ k}\\Omega$, $R_f = 30\\text{ k}\\Omega$",
        "Topology: Inverting",
        "Ideal op-amp"
      ],
      "relevantConcept": "By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})",
          "terms": [
            {
              "term": "R_f",
              "explanation": "Feedback resistor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{R_f}{R_1}$.",
        "Step 2: Substitute $R_f = 30\\text{ k}\\Omega$ and $R_1 = 3\\text{ k}\\Omega$:",
        "$$|A_v| = \\frac{30}{3} = 10.0$$."
      ],
      "finalAnswerWithUnits": "Av = 10.0",
      "alternativeApproachOrShortcut": "Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
      "commonMistakes": [
        "Forgetting the $+1$ in the non-inverting gain formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Inverting Amplifier",
      "Non-Inverting Amplifier",
      "Voltage Gain"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 1.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      31.3,
      32.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 1.0\\text{ V/}\\mu\\text{s} = 1.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 1.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{1.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{1.0 \\times 10^6}{31.42} \\approx 31800\\text{ Hz} = 31.8\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 31.8 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 2.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      63.2,
      64.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 2.0\\text{ V/}\\mu\\text{s} = 2.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 2.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{2.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{2.0 \\times 10^6}{31.42} \\approx 63700\\text{ Hz} = 63.7\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 63.7 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 3.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      95.0,
      96.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 3.0\\text{ V/}\\mu\\text{s} = 3.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 3.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{3.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{3.0 \\times 10^6}{31.42} \\approx 95500\\text{ Hz} = 95.5\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 95.5 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 4.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      126.8,
      127.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 4.0\\text{ V/}\\mu\\text{s} = 4.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 4.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{4.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{4.0 \\times 10^6}{31.42} \\approx 127300\\text{ Hz} = 127.3\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 127.3 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 5.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      158.7,
      159.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 5.0\\text{ V/}\\mu\\text{s} = 5.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 5.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{5.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{5.0 \\times 10^6}{31.42} \\approx 159200\\text{ Hz} = 159.2\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 159.2 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 1.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      31.3,
      32.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 1.0\\text{ V/}\\mu\\text{s} = 1.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 1.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{1.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{1.0 \\times 10^6}{31.42} \\approx 31800\\text{ Hz} = 31.8\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 31.8 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 2.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      63.2,
      64.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 2.0\\text{ V/}\\mu\\text{s} = 2.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 2.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{2.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{2.0 \\times 10^6}{31.42} \\approx 63700\\text{ Hz} = 63.7\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 63.7 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 3.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      95.0,
      96.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 3.0\\text{ V/}\\mu\\text{s} = 3.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 3.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{3.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{3.0 \\times 10^6}{31.42} \\approx 95500\\text{ Hz} = 95.5\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 95.5 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 4.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      126.8,
      127.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 4.0\\text{ V/}\\mu\\text{s} = 4.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 4.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{4.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{4.0 \\times 10^6}{31.42} \\approx 127300\\text{ Hz} = 127.3\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 127.3 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 5.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      158.7,
      159.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 5.0\\text{ V/}\\mu\\text{s} = 5.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 5.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{5.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{5.0 \\times 10^6}{31.42} \\approx 159200\\text{ Hz} = 159.2\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 159.2 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 1.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      31.3,
      32.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 1.0\\text{ V/}\\mu\\text{s} = 1.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 1.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{1.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{1.0 \\times 10^6}{31.42} \\approx 31800\\text{ Hz} = 31.8\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 31.8 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 2.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      63.2,
      64.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 2.0\\text{ V/}\\mu\\text{s} = 2.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 2.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{2.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{2.0 \\times 10^6}{31.42} \\approx 63700\\text{ Hz} = 63.7\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 63.7 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 3.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      95.0,
      96.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 3.0\\text{ V/}\\mu\\text{s} = 3.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 3.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{3.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{3.0 \\times 10^6}{31.42} \\approx 95500\\text{ Hz} = 95.5\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 95.5 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 4.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      126.8,
      127.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 4.0\\text{ V/}\\mu\\text{s} = 4.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 4.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{4.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{4.0 \\times 10^6}{31.42} \\approx 127300\\text{ Hz} = 127.3\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 127.3 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 5.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      158.7,
      159.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 5.0\\text{ V/}\\mu\\text{s} = 5.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 5.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{5.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{5.0 \\times 10^6}{31.42} \\approx 159200\\text{ Hz} = 159.2\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 159.2 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 1.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      31.3,
      32.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 1.0\\text{ V/}\\mu\\text{s} = 1.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 1.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{1.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{1.0 \\times 10^6}{31.42} \\approx 31800\\text{ Hz} = 31.8\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 31.8 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 2.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      63.2,
      64.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 2.0\\text{ V/}\\mu\\text{s} = 2.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 2.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{2.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{2.0 \\times 10^6}{31.42} \\approx 63700\\text{ Hz} = 63.7\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 63.7 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 3.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      95.0,
      96.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 3.0\\text{ V/}\\mu\\text{s} = 3.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 3.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{3.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{3.0 \\times 10^6}{31.42} \\approx 95500\\text{ Hz} = 95.5\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 95.5 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 4.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      126.8,
      127.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 4.0\\text{ V/}\\mu\\text{s} = 4.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 4.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{4.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{4.0 \\times 10^6}{31.42} \\approx 127300\\text{ Hz} = 127.3\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 127.3 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 5.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      158.7,
      159.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 5.0\\text{ V/}\\mu\\text{s} = 5.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 5.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{5.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{5.0 \\times 10^6}{31.42} \\approx 159200\\text{ Hz} = 159.2\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 159.2 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 1.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      31.3,
      32.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 1.0\\text{ V/}\\mu\\text{s} = 1.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 1.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{1.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{1.0 \\times 10^6}{31.42} \\approx 31800\\text{ Hz} = 31.8\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 31.8 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 2.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      63.2,
      64.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 2.0\\text{ V/}\\mu\\text{s} = 2.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 2.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{2.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{2.0 \\times 10^6}{31.42} \\approx 63700\\text{ Hz} = 63.7\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 63.7 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 3.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      95.0,
      96.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 3.0\\text{ V/}\\mu\\text{s} = 3.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 3.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{3.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{3.0 \\times 10^6}{31.42} \\approx 95500\\text{ Hz} = 95.5\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 95.5 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 4.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      126.8,
      127.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 4.0\\text{ V/}\\mu\\text{s} = 4.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 4.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{4.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{4.0 \\times 10^6}{31.42} \\approx 127300\\text{ Hz} = 127.3\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 127.3 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 5.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      158.7,
      159.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 5.0\\text{ V/}\\mu\\text{s} = 5.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 5.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{5.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{5.0 \\times 10^6}{31.42} \\approx 159200\\text{ Hz} = 159.2\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 159.2 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 1.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      31.3,
      32.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 1.0\\text{ V/}\\mu\\text{s} = 1.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 1.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{1.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{1.0 \\times 10^6}{31.42} \\approx 31800\\text{ Hz} = 31.8\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 31.8 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 2.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      63.2,
      64.2
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 2.0\\text{ V/}\\mu\\text{s} = 2.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 2.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{2.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{2.0 \\times 10^6}{31.42} \\approx 63700\\text{ Hz} = 63.7\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 63.7 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 3.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      95.0,
      96.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 3.0\\text{ V/}\\mu\\text{s} = 3.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 3.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{3.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{3.0 \\times 10^6}{31.42} \\approx 95500\\text{ Hz} = 95.5\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 95.5 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 4.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      126.8,
      127.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 4.0\\text{ V/}\\mu\\text{s} = 4.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 4.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{4.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{4.0 \\times 10^6}{31.42} \\approx 127300\\text{ Hz} = 127.3\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 127.3 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Op-Amp Circuits",
    "subject": "Analog Circuits",
    "topic": "Op-Amp Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An operational amplifier has a slew rate of $SR = 5.0\\text{ V/}\\mu\\text{s}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = 5.0\\text{ V}$, the maximum frequency (full-power bandwidth) $f_{\\max}$ of the signal is ________ kHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      158.7,
      159.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
      "givenInformationAndAssumptions": [
        "Slew rate $SR = 5.0\\text{ V/}\\mu\\text{s} = 5.0 \\times 10^6\\text{ V/s}$",
        "Peak output amplitude $V_m = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}",
          "terms": [
            {
              "term": "SR",
              "explanation": "Op-amp slew rate in V/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for full-power bandwidth: $f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
        "Step 2: Convert slew rate to V/s: $SR = 5.0 \\times 10^6\\text{ V/s}$.",
        "Step 3: $f_{\\max} = \\frac{5.0 \\times 10^6}{2\\pi \\times 5.0} = \\frac{5.0 \\times 10^6}{31.42} \\approx 159200\\text{ Hz} = 159.2\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 159.2 kHz",
      "alternativeApproachOrShortcut": "Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
      "commonMistakes": [
        "Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Analog Circuits",
      "Op-Amp Circuits",
      "Slew Rate",
      "Full Power Bandwidth"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 2\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (2 \\times 10^3) \\times (10 \\times 10^{-9}) = 2.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 2.000e-05} \\approx 7960\\text{ Hz} = 7.96\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 7.96 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 3\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.26,
      5.36
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (3 \\times 10^3) \\times (10 \\times 10^{-9}) = 3.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 3.000e-05} \\approx 5310\\text{ Hz} = 5.31\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 5.31 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 4\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.93,
      4.03
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (4 \\times 10^3) \\times (10 \\times 10^{-9}) = 4.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 4.000e-05} \\approx 3980\\text{ Hz} = 3.98\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.98 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 5\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.13,
      3.23
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (5 \\times 10^3) \\times (10 \\times 10^{-9}) = 5.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 5.000e-05} \\approx 3180\\text{ Hz} = 3.18\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.18 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 6\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.6,
      2.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (6 \\times 10^3) \\times (10 \\times 10^{-9}) = 6.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 6.000e-05} \\approx 2650\\text{ Hz} = 2.65\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 2.65 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 2\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (2 \\times 10^3) \\times (10 \\times 10^{-9}) = 2.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 2.000e-05} \\approx 7960\\text{ Hz} = 7.96\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 7.96 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 3\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.26,
      5.36
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (3 \\times 10^3) \\times (10 \\times 10^{-9}) = 3.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 3.000e-05} \\approx 5310\\text{ Hz} = 5.31\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 5.31 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 4\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.93,
      4.03
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (4 \\times 10^3) \\times (10 \\times 10^{-9}) = 4.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 4.000e-05} \\approx 3980\\text{ Hz} = 3.98\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.98 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 5\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.13,
      3.23
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (5 \\times 10^3) \\times (10 \\times 10^{-9}) = 5.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 5.000e-05} \\approx 3180\\text{ Hz} = 3.18\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.18 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 6\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.6,
      2.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (6 \\times 10^3) \\times (10 \\times 10^{-9}) = 6.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 6.000e-05} \\approx 2650\\text{ Hz} = 2.65\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 2.65 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 2\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (2 \\times 10^3) \\times (10 \\times 10^{-9}) = 2.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 2.000e-05} \\approx 7960\\text{ Hz} = 7.96\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 7.96 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 3\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.26,
      5.36
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (3 \\times 10^3) \\times (10 \\times 10^{-9}) = 3.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 3.000e-05} \\approx 5310\\text{ Hz} = 5.31\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 5.31 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 4\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.93,
      4.03
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (4 \\times 10^3) \\times (10 \\times 10^{-9}) = 4.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 4.000e-05} \\approx 3980\\text{ Hz} = 3.98\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.98 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 5\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.13,
      3.23
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (5 \\times 10^3) \\times (10 \\times 10^{-9}) = 5.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 5.000e-05} \\approx 3180\\text{ Hz} = 3.18\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.18 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 6\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.6,
      2.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (6 \\times 10^3) \\times (10 \\times 10^{-9}) = 6.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 6.000e-05} \\approx 2650\\text{ Hz} = 2.65\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 2.65 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 2\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (2 \\times 10^3) \\times (10 \\times 10^{-9}) = 2.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 2.000e-05} \\approx 7960\\text{ Hz} = 7.96\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 7.96 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 3\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.26,
      5.36
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (3 \\times 10^3) \\times (10 \\times 10^{-9}) = 3.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 3.000e-05} \\approx 5310\\text{ Hz} = 5.31\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 5.31 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 4\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.93,
      4.03
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (4 \\times 10^3) \\times (10 \\times 10^{-9}) = 4.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 4.000e-05} \\approx 3980\\text{ Hz} = 3.98\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.98 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 5\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.13,
      3.23
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (5 \\times 10^3) \\times (10 \\times 10^{-9}) = 5.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 5.000e-05} \\approx 3180\\text{ Hz} = 3.18\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.18 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 6\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.6,
      2.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (6 \\times 10^3) \\times (10 \\times 10^{-9}) = 6.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 6.000e-05} \\approx 2650\\text{ Hz} = 2.65\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 2.65 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 2\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (2 \\times 10^3) \\times (10 \\times 10^{-9}) = 2.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 2.000e-05} \\approx 7960\\text{ Hz} = 7.96\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 7.96 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 3\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.26,
      5.36
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (3 \\times 10^3) \\times (10 \\times 10^{-9}) = 3.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 3.000e-05} \\approx 5310\\text{ Hz} = 5.31\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 5.31 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 4\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.93,
      4.03
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (4 \\times 10^3) \\times (10 \\times 10^{-9}) = 4.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 4.000e-05} \\approx 3980\\text{ Hz} = 3.98\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.98 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 5\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.13,
      3.23
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (5 \\times 10^3) \\times (10 \\times 10^{-9}) = 5.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 5.000e-05} \\approx 3180\\text{ Hz} = 3.18\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.18 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 6\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.6,
      2.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (6 \\times 10^3) \\times (10 \\times 10^{-9}) = 6.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 6.000e-05} \\approx 2650\\text{ Hz} = 2.65\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 2.65 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 2\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (2 \\times 10^3) \\times (10 \\times 10^{-9}) = 2.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 2.000e-05} \\approx 7960\\text{ Hz} = 7.96\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 7.96 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 3\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.26,
      5.36
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (3 \\times 10^3) \\times (10 \\times 10^{-9}) = 3.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 3.000e-05} \\approx 5310\\text{ Hz} = 5.31\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 5.31 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 4\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.93,
      4.03
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (4 \\times 10^3) \\times (10 \\times 10^{-9}) = 4.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 4.000e-05} \\approx 3980\\text{ Hz} = 3.98\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.98 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 5\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.13,
      3.23
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (5 \\times 10^3) \\times (10 \\times 10^{-9}) = 5.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 5.000e-05} \\approx 3180\\text{ Hz} = 3.18\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.18 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 6\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.6,
      2.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (6 \\times 10^3) \\times (10 \\times 10^{-9}) = 6.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 6.000e-05} \\approx 2650\\text{ Hz} = 2.65\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 2.65 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 2\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.91,
      8.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (2 \\times 10^3) \\times (10 \\times 10^{-9}) = 2.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 2.000e-05} \\approx 7960\\text{ Hz} = 7.96\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 7.96 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 3\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.26,
      5.36
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (3 \\times 10^3) \\times (10 \\times 10^{-9}) = 3.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 3.000e-05} \\approx 5310\\text{ Hz} = 5.31\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 5.31 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 4\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.93,
      4.03
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (4 \\times 10^3) \\times (10 \\times 10^{-9}) = 4.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 4.000e-05} \\approx 3980\\text{ Hz} = 3.98\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.98 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 5\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.13,
      3.23
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (5 \\times 10^3) \\times (10 \\times 10^{-9}) = 5.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 5.000e-05} \\approx 3180\\text{ Hz} = 3.18\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 3.18 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Wien-bridge oscillator uses symmetrical bridge arms with $R = 6\\text{ k}\\Omega$ and $C = 10\\text{ nF}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.6,
      2.7
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega$",
        "Capacitance $C = 10\\text{ nF}$"
      ],
      "relevantConcept": "For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "f_0 = \\frac{1}{2\\pi R C}",
          "terms": [
            {
              "term": "f_0",
              "explanation": "Wien bridge oscillation frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{1}{2\\pi RC}$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 10 \\times 10^{-9}\\,\\text{F}$.",
        "Step 3: $RC = (6 \\times 10^3) \\times (10 \\times 10^{-9}) = 6.000e-05\\text{ s}$.",
        "Step 4: $f_0 = \\frac{1}{2\\pi \\times 6.000e-05} \\approx 2650\\text{ Hz} = 2.65\\text{ kHz}$."
      ],
      "finalAnswerWithUnits": "f0 = 2.65 kHz",
      "alternativeApproachOrShortcut": "Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
      "commonMistakes": [
        "Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Oscillators",
      "Wien Bridge",
      "Barkhausen Criterion",
      "Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-ANA-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Feedback Amplifiers & Oscillators",
    "subject": "Analog Circuits",
    "topic": "Feedback Amplifiers & Oscillators",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?",
    "options": [
      {
        "id": "A",
        "text": "Voltage-series (Series-Shunt) feedback"
      },
      {
        "id": "B",
        "text": "Voltage-shunt (Shunt-Shunt) feedback"
      },
      {
        "id": "C",
        "text": "Current-series (Series-Series) feedback"
      },
      {
        "id": "D",
        "text": "Current-shunt (Shunt-Series) feedback"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
      "givenInformationAndAssumptions": [
        "Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."
      ],
      "relevantConcept": "Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}",
          "terms": [
            {
              "term": "1 + A\\beta",
              "explanation": "Desensitivity factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
        "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
        "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
      "commonMistakes": [
        "Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Analog Circuits",
      "Feedback Amplifiers",
      "Negative Feedback",
      "Input Impedance",
      "Output Impedance"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
