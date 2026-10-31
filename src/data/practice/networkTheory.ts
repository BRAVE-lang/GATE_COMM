import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — NETWORK_THEORY_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const NETWORK_THEORY_PRACTICE: Question[] = [
  {
    "id": "PRAC-NET-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 12\\text{ V}$ is connected in series with resistor $R_1 = 4\\,\\Omega$, across which resistor $R_2 = 6\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.15,
      7.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 12\\text{ V}$",
        "Series resistor $R_1 = 4\\,\\Omega$",
        "Parallel resistor $R_2 = 6\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{12}{4 + 6} = \\frac{12}{10}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{12 \\times 6}{10} = 7.2\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 7.2 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 18\\text{ V}$ is connected in series with resistor $R_1 = 6\\,\\Omega$, across which resistor $R_2 = 12\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "12",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 18\\text{ V}$",
        "Series resistor $R_1 = 6\\,\\Omega$",
        "Parallel resistor $R_2 = 12\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{18}{6 + 12} = \\frac{18}{18}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{18 \\times 12}{18} = 12.0\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 12.0 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 24\\text{ V}$ is connected in series with resistor $R_1 = 8\\,\\Omega$, across which resistor $R_2 = 18\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      16.57,
      16.67
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 24\\text{ V}$",
        "Series resistor $R_1 = 8\\,\\Omega$",
        "Parallel resistor $R_2 = 18\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{24}{8 + 18} = \\frac{24}{26}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{24 \\times 18}{26} = 16.62\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 16.62 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 30\\text{ V}$ is connected in series with resistor $R_1 = 10\\,\\Omega$, across which resistor $R_2 = 6\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.2,
      11.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 30\\text{ V}$",
        "Series resistor $R_1 = 10\\,\\Omega$",
        "Parallel resistor $R_2 = 6\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{30}{10 + 6} = \\frac{30}{16}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{30 \\times 6}{16} = 11.25\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 11.25 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 36\\text{ V}$ is connected in series with resistor $R_1 = 4\\,\\Omega$, across which resistor $R_2 = 12\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "27",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 36\\text{ V}$",
        "Series resistor $R_1 = 4\\,\\Omega$",
        "Parallel resistor $R_2 = 12\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{36}{4 + 12} = \\frac{36}{16}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{36 \\times 12}{16} = 27.0\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 27.0 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 42\\text{ V}$ is connected in series with resistor $R_1 = 6\\,\\Omega$, across which resistor $R_2 = 18\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.45,
      31.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 42\\text{ V}$",
        "Series resistor $R_1 = 6\\,\\Omega$",
        "Parallel resistor $R_2 = 18\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{42}{6 + 18} = \\frac{42}{24}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{42 \\times 18}{24} = 31.5\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 31.5 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 12\\text{ V}$ is connected in series with resistor $R_1 = 8\\,\\Omega$, across which resistor $R_2 = 6\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.09,
      5.19
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 12\\text{ V}$",
        "Series resistor $R_1 = 8\\,\\Omega$",
        "Parallel resistor $R_2 = 6\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{12}{8 + 6} = \\frac{12}{14}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{12 \\times 6}{14} = 5.14\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 5.14 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 18\\text{ V}$ is connected in series with resistor $R_1 = 10\\,\\Omega$, across which resistor $R_2 = 12\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.77,
      9.87
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 18\\text{ V}$",
        "Series resistor $R_1 = 10\\,\\Omega$",
        "Parallel resistor $R_2 = 12\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{18}{10 + 12} = \\frac{18}{22}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{18 \\times 12}{22} = 9.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 9.82 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 24\\text{ V}$ is connected in series with resistor $R_1 = 4\\,\\Omega$, across which resistor $R_2 = 18\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.59,
      19.69
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 24\\text{ V}$",
        "Series resistor $R_1 = 4\\,\\Omega$",
        "Parallel resistor $R_2 = 18\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{24}{4 + 18} = \\frac{24}{22}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{24 \\times 18}{22} = 19.64\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 19.64 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 30\\text{ V}$ is connected in series with resistor $R_1 = 6\\,\\Omega$, across which resistor $R_2 = 6\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 30\\text{ V}$",
        "Series resistor $R_1 = 6\\,\\Omega$",
        "Parallel resistor $R_2 = 6\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{30}{6 + 6} = \\frac{30}{12}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{30 \\times 6}{12} = 15.0\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 15.0 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 36\\text{ V}$ is connected in series with resistor $R_1 = 8\\,\\Omega$, across which resistor $R_2 = 12\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      21.55,
      21.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 36\\text{ V}$",
        "Series resistor $R_1 = 8\\,\\Omega$",
        "Parallel resistor $R_2 = 12\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{36}{8 + 12} = \\frac{36}{20}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{36 \\times 12}{20} = 21.6\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 21.6 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 42\\text{ V}$ is connected in series with resistor $R_1 = 10\\,\\Omega$, across which resistor $R_2 = 18\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "27",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 42\\text{ V}$",
        "Series resistor $R_1 = 10\\,\\Omega$",
        "Parallel resistor $R_2 = 18\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{42}{10 + 18} = \\frac{42}{28}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{42 \\times 18}{28} = 27.0\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 27.0 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 12\\text{ V}$ is connected in series with resistor $R_1 = 4\\,\\Omega$, across which resistor $R_2 = 6\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.15,
      7.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 12\\text{ V}$",
        "Series resistor $R_1 = 4\\,\\Omega$",
        "Parallel resistor $R_2 = 6\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{12}{4 + 6} = \\frac{12}{10}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{12 \\times 6}{10} = 7.2\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 7.2 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 18\\text{ V}$ is connected in series with resistor $R_1 = 6\\,\\Omega$, across which resistor $R_2 = 12\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "12",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 18\\text{ V}$",
        "Series resistor $R_1 = 6\\,\\Omega$",
        "Parallel resistor $R_2 = 12\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{18}{6 + 12} = \\frac{18}{18}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{18 \\times 12}{18} = 12.0\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 12.0 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 24\\text{ V}$ is connected in series with resistor $R_1 = 8\\,\\Omega$, across which resistor $R_2 = 18\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      16.57,
      16.67
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 24\\text{ V}$",
        "Series resistor $R_1 = 8\\,\\Omega$",
        "Parallel resistor $R_2 = 18\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{24}{8 + 18} = \\frac{24}{26}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{24 \\times 18}{26} = 16.62\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 16.62 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 30\\text{ V}$ is connected in series with resistor $R_1 = 10\\,\\Omega$, across which resistor $R_2 = 6\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.2,
      11.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 30\\text{ V}$",
        "Series resistor $R_1 = 10\\,\\Omega$",
        "Parallel resistor $R_2 = 6\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{30}{10 + 6} = \\frac{30}{16}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{30 \\times 6}{16} = 11.25\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 11.25 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 36\\text{ V}$ is connected in series with resistor $R_1 = 4\\,\\Omega$, across which resistor $R_2 = 12\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "27",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 36\\text{ V}$",
        "Series resistor $R_1 = 4\\,\\Omega$",
        "Parallel resistor $R_2 = 12\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{36}{4 + 12} = \\frac{36}{16}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{36 \\times 12}{16} = 27.0\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 27.0 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 42\\text{ V}$ is connected in series with resistor $R_1 = 6\\,\\Omega$, across which resistor $R_2 = 18\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.45,
      31.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 42\\text{ V}$",
        "Series resistor $R_1 = 6\\,\\Omega$",
        "Parallel resistor $R_2 = 18\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{42}{6 + 18} = \\frac{42}{24}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{42 \\times 18}{24} = 31.5\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 31.5 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 12\\text{ V}$ is connected in series with resistor $R_1 = 8\\,\\Omega$, across which resistor $R_2 = 6\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.09,
      5.19
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 12\\text{ V}$",
        "Series resistor $R_1 = 8\\,\\Omega$",
        "Parallel resistor $R_2 = 6\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{12}{8 + 6} = \\frac{12}{14}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{12 \\times 6}{14} = 5.14\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 5.14 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In the linear DC resistive circuit, a DC voltage source of $V_s = 18\\text{ V}$ is connected in series with resistor $R_1 = 10\\,\\Omega$, across which resistor $R_2 = 12\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{th}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.77,
      9.87
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
      "givenInformationAndAssumptions": [
        "Source voltage $V_s = 18\\text{ V}$",
        "Series resistor $R_1 = 10\\,\\Omega$",
        "Parallel resistor $R_2 = 12\\,\\Omega$"
      ],
      "relevantConcept": "The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}",
          "terms": [
            {
              "term": "V_{oc}",
              "explanation": "Open-circuit terminal voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
        "Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
        "Step 3: Loop current is $I = \\frac{V_s}{R_1 + R_2} = \\frac{18}{10 + 12} = \\frac{18}{22}\\text{ A}$.",
        "Step 4: Voltage across terminals A-B is $V_{th} = I \\times R_2 = \\frac{18 \\times 12}{22} = 9.82\\text{ V}$."
      ],
      "finalAnswerWithUnits": "Vth = 9.82 V",
      "alternativeApproachOrShortcut": "Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
      "commonMistakes": [
        "Calculating closed-circuit short-circuit current instead of open-circuit voltage.",
        "Using $R_1$ in numerator instead of $R_2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Thevenin Theorem",
      "DC Circuits",
      "Voltage Divider"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 10\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 5\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 10\\text{ V}$",
        "Thevenin resistance $R_{th} = 5\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 5\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{10}{2 R_{th}} = \\frac{10}{10}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{10^2}{4 \\times 5} = \\frac{100}{20} = 5.0\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 5.0 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 15\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 10\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.57,
      5.67
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 15\\text{ V}$",
        "Thevenin resistance $R_{th} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 10\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{15}{2 R_{th}} = \\frac{15}{20}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{15^2}{4 \\times 10} = \\frac{225}{40} = 5.62\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 5.62 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 20\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 15\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.62,
      6.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 20\\text{ V}$",
        "Thevenin resistance $R_{th} = 15\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 15\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{20}{2 R_{th}} = \\frac{20}{30}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{20^2}{4 \\times 15} = \\frac{400}{60} = 6.67\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 6.67 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 25\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 20\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.76,
      7.86
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 25\\text{ V}$",
        "Thevenin resistance $R_{th} = 20\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 20\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{25}{2 R_{th}} = \\frac{25}{40}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{25^2}{4 \\times 20} = \\frac{625}{80} = 7.81\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 7.81 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 30\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 5\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "45",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 30\\text{ V}$",
        "Thevenin resistance $R_{th} = 5\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 5\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{30}{2 R_{th}} = \\frac{30}{10}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{30^2}{4 \\times 5} = \\frac{900}{20} = 45.0\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 45.0 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 10\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 10\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.45,
      2.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 10\\text{ V}$",
        "Thevenin resistance $R_{th} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 10\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{10}{2 R_{th}} = \\frac{10}{20}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{10^2}{4 \\times 10} = \\frac{100}{40} = 2.5\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 2.5 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 15\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 15\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.7,
      3.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 15\\text{ V}$",
        "Thevenin resistance $R_{th} = 15\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 15\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{15}{2 R_{th}} = \\frac{15}{30}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{15^2}{4 \\times 15} = \\frac{225}{60} = 3.75\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 3.75 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 20\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 20\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 20\\text{ V}$",
        "Thevenin resistance $R_{th} = 20\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 20\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{20}{2 R_{th}} = \\frac{20}{40}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{20^2}{4 \\times 20} = \\frac{400}{80} = 5.0\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 5.0 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 25\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 5\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      31.2,
      31.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 25\\text{ V}$",
        "Thevenin resistance $R_{th} = 5\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 5\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{25}{2 R_{th}} = \\frac{25}{10}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{25^2}{4 \\times 5} = \\frac{625}{20} = 31.25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 31.25 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 30\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 10\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      22.45,
      22.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 30\\text{ V}$",
        "Thevenin resistance $R_{th} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 10\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{30}{2 R_{th}} = \\frac{30}{20}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{30^2}{4 \\times 10} = \\frac{900}{40} = 22.5\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 22.5 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 10\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 15\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.62,
      1.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 10\\text{ V}$",
        "Thevenin resistance $R_{th} = 15\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 15\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{10}{2 R_{th}} = \\frac{10}{30}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{10^2}{4 \\times 15} = \\frac{100}{60} = 1.67\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 1.67 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 15\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 20\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.76,
      2.86
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 15\\text{ V}$",
        "Thevenin resistance $R_{th} = 20\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 20\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{15}{2 R_{th}} = \\frac{15}{40}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{15^2}{4 \\times 20} = \\frac{225}{80} = 2.81\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 2.81 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 20\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 5\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 20\\text{ V}$",
        "Thevenin resistance $R_{th} = 5\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 5\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{20}{2 R_{th}} = \\frac{20}{10}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{20^2}{4 \\times 5} = \\frac{400}{20} = 20.0\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 20.0 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 25\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 10\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      15.57,
      15.67
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 25\\text{ V}$",
        "Thevenin resistance $R_{th} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 10\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{25}{2 R_{th}} = \\frac{25}{20}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{25^2}{4 \\times 10} = \\frac{625}{40} = 15.62\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 15.62 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 30\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 15\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 30\\text{ V}$",
        "Thevenin resistance $R_{th} = 15\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 15\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{30}{2 R_{th}} = \\frac{30}{30}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{30^2}{4 \\times 15} = \\frac{900}{60} = 15.0\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 15.0 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 10\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 20\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.2,
      1.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 10\\text{ V}$",
        "Thevenin resistance $R_{th} = 20\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 20\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{10}{2 R_{th}} = \\frac{10}{40}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{10^2}{4 \\times 20} = \\frac{100}{80} = 1.25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 1.25 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 15\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 5\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.2,
      11.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 15\\text{ V}$",
        "Thevenin resistance $R_{th} = 5\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 5\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{15}{2 R_{th}} = \\frac{15}{10}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{15^2}{4 \\times 5} = \\frac{225}{20} = 11.25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 11.25 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 20\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 10\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 20\\text{ V}$",
        "Thevenin resistance $R_{th} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 10\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{20}{2 R_{th}} = \\frac{20}{20}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{20^2}{4 \\times 10} = \\frac{400}{40} = 10.0\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 10.0 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 25\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 15\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      10.37,
      10.47
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 25\\text{ V}$",
        "Thevenin resistance $R_{th} = 15\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 15\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{25}{2 R_{th}} = \\frac{25}{30}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{25^2}{4 \\times 15} = \\frac{625}{60} = 10.42\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 10.42 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 30\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 20\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      11.2,
      11.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 30\\text{ V}$",
        "Thevenin resistance $R_{th} = 20\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 20\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{30}{2 R_{th}} = \\frac{30}{40}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{30^2}{4 \\times 20} = \\frac{900}{80} = 11.25\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 11.25 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 10\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 5\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 10\\text{ V}$",
        "Thevenin resistance $R_{th} = 5\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 5\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{10}{2 R_{th}} = \\frac{10}{10}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{10^2}{4 \\times 5} = \\frac{100}{20} = 5.0\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 5.0 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 15\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 10\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      5.57,
      5.67
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 15\\text{ V}$",
        "Thevenin resistance $R_{th} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 10\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{15}{2 R_{th}} = \\frac{15}{20}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{15^2}{4 \\times 10} = \\frac{225}{40} = 5.62\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 5.62 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 20\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 15\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      6.62,
      6.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 20\\text{ V}$",
        "Thevenin resistance $R_{th} = 15\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 15\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{20}{2 R_{th}} = \\frac{20}{30}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{20^2}{4 \\times 15} = \\frac{400}{60} = 6.67\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 6.67 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 25\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 20\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      7.76,
      7.86
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 25\\text{ V}$",
        "Thevenin resistance $R_{th} = 20\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 20\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{25}{2 R_{th}} = \\frac{25}{40}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{25^2}{4 \\times 20} = \\frac{625}{80} = 7.81\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 7.81 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{th} = 30\\text{ V}$ and an equivalent Thevenin resistance of $R_{th} = 5\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "45",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
      "givenInformationAndAssumptions": [
        "Thevenin voltage $V_{th} = 30\\text{ V}$",
        "Thevenin resistance $R_{th} = 5\\,\\Omega$"
      ],
      "relevantConcept": "Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}",
          "terms": [
            {
              "term": "R_L = R_{th}",
              "explanation": "Impedance matching condition"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{th} = 5\\,\\Omega$.",
        "Step 2: Circuit current under matched condition: $I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{30}{2 R_{th}} = \\frac{30}{10}\\text{ A}$.",
        "Step 3: Power dissipated in $R_L$: $P_{\\max} = I_L^2 R_L = \\frac{V_{th}^2}{4 R_{th}} = \\frac{30^2}{4 \\times 5} = \\frac{900}{20} = 45.0\\text{ W}$."
      ],
      "finalAnswerWithUnits": "Pmax = 45.0 W",
      "alternativeApproachOrShortcut": "Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
      "commonMistakes": [
        "Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Maximum Power Transfer",
      "Thevenin Resistance",
      "Power Dissipation"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Network Theorems",
    "subject": "Network Theory",
    "topic": "Network Theorems",
    "type": "MSQ",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"
      },
      {
        "id": "B",
        "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"
      },
      {
        "id": "C",
        "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"
      },
      {
        "id": "D",
        "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"
      }
    ],
    "officialAnswer": [
      "A",
      "B"
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
      "givenInformationAndAssumptions": [
        "Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."
      ],
      "relevantConcept": "1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})",
          "terms": [
            {
              "term": "v_k, i_k",
              "explanation": "Branch voltages and branch currents obeying KCL/KVL"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
        "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
        "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
        "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
      ],
      "finalAnswerWithUnits": "Options A and B",
      "alternativeApproachOrShortcut": "Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
      "commonMistakes": [
        "Confusing 50% efficiency at maximum power transfer with high transmission efficiency."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Superposition Theorem",
      "Tellegen Theorem",
      "MSQ",
      "Reciprocity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 2\\,\\text{k}\\Omega$ and $C = 1\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 10\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega = 2000\\,\\Omega$",
        "Capacitance $C = 1\\,\\mu\\text{F} = 1 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 10\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 1 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (2 \\times 10^3) \\times (1 \\times 10^{-6}) = 2 \\times 10^{-3}\\text{ s} = 2\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 3\\,\\text{k}\\Omega$ and $C = 2\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 15\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega = 3000\\,\\Omega$",
        "Capacitance $C = 2\\,\\mu\\text{F} = 2 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 15\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 2 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (3 \\times 10^3) \\times (2 \\times 10^{-6}) = 6 \\times 10^{-3}\\text{ s} = 6\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 6 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 4\\,\\text{k}\\Omega$ and $C = 3\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 20\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "12",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega = 4000\\,\\Omega$",
        "Capacitance $C = 3\\,\\mu\\text{F} = 3 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 20\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 3 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (4 \\times 10^3) \\times (3 \\times 10^{-6}) = 12 \\times 10^{-3}\\text{ s} = 12\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 12 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 5\\,\\text{k}\\Omega$ and $C = 4\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 10\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega = 5000\\,\\Omega$",
        "Capacitance $C = 4\\,\\mu\\text{F} = 4 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 10\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 4 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (5 \\times 10^3) \\times (4 \\times 10^{-6}) = 20 \\times 10^{-3}\\text{ s} = 20\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 20 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 6\\,\\text{k}\\Omega$ and $C = 1\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 15\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega = 6000\\,\\Omega$",
        "Capacitance $C = 1\\,\\mu\\text{F} = 1 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 15\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 1 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (6 \\times 10^3) \\times (1 \\times 10^{-6}) = 6 \\times 10^{-3}\\text{ s} = 6\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 6 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 2\\,\\text{k}\\Omega$ and $C = 2\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 20\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega = 2000\\,\\Omega$",
        "Capacitance $C = 2\\,\\mu\\text{F} = 2 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 20\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 2 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (2 \\times 10^3) \\times (2 \\times 10^{-6}) = 4 \\times 10^{-3}\\text{ s} = 4\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 4 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 3\\,\\text{k}\\Omega$ and $C = 3\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 10\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "9",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega = 3000\\,\\Omega$",
        "Capacitance $C = 3\\,\\mu\\text{F} = 3 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 10\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 3 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (3 \\times 10^3) \\times (3 \\times 10^{-6}) = 9 \\times 10^{-3}\\text{ s} = 9\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 9 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 4\\,\\text{k}\\Omega$ and $C = 4\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 15\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "16",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega = 4000\\,\\Omega$",
        "Capacitance $C = 4\\,\\mu\\text{F} = 4 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 15\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 4 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (4 \\times 10^3) \\times (4 \\times 10^{-6}) = 16 \\times 10^{-3}\\text{ s} = 16\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 16 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 5\\,\\text{k}\\Omega$ and $C = 1\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 20\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega = 5000\\,\\Omega$",
        "Capacitance $C = 1\\,\\mu\\text{F} = 1 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 20\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 1 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (5 \\times 10^3) \\times (1 \\times 10^{-6}) = 5 \\times 10^{-3}\\text{ s} = 5\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 5 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 6\\,\\text{k}\\Omega$ and $C = 2\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 10\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "12",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega = 6000\\,\\Omega$",
        "Capacitance $C = 2\\,\\mu\\text{F} = 2 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 10\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 2 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (6 \\times 10^3) \\times (2 \\times 10^{-6}) = 12 \\times 10^{-3}\\text{ s} = 12\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 12 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 2\\,\\text{k}\\Omega$ and $C = 3\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 15\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega = 2000\\,\\Omega$",
        "Capacitance $C = 3\\,\\mu\\text{F} = 3 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 15\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 3 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (2 \\times 10^3) \\times (3 \\times 10^{-6}) = 6 \\times 10^{-3}\\text{ s} = 6\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 6 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 3\\,\\text{k}\\Omega$ and $C = 4\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 20\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "12",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega = 3000\\,\\Omega$",
        "Capacitance $C = 4\\,\\mu\\text{F} = 4 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 20\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 4 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (3 \\times 10^3) \\times (4 \\times 10^{-6}) = 12 \\times 10^{-3}\\text{ s} = 12\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 12 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 4\\,\\text{k}\\Omega$ and $C = 1\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 10\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega = 4000\\,\\Omega$",
        "Capacitance $C = 1\\,\\mu\\text{F} = 1 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 10\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 1 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (4 \\times 10^3) \\times (1 \\times 10^{-6}) = 4 \\times 10^{-3}\\text{ s} = 4\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 4 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 5\\,\\text{k}\\Omega$ and $C = 2\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 15\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega = 5000\\,\\Omega$",
        "Capacitance $C = 2\\,\\mu\\text{F} = 2 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 15\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 2 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (5 \\times 10^3) \\times (2 \\times 10^{-6}) = 10 \\times 10^{-3}\\text{ s} = 10\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 10 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 6\\,\\text{k}\\Omega$ and $C = 3\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 20\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "18",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega = 6000\\,\\Omega$",
        "Capacitance $C = 3\\,\\mu\\text{F} = 3 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 20\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 3 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (6 \\times 10^3) \\times (3 \\times 10^{-6}) = 18 \\times 10^{-3}\\text{ s} = 18\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 18 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 2\\,\\text{k}\\Omega$ and $C = 4\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 10\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega = 2000\\,\\Omega$",
        "Capacitance $C = 4\\,\\mu\\text{F} = 4 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 10\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 4 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (2 \\times 10^3) \\times (4 \\times 10^{-6}) = 8 \\times 10^{-3}\\text{ s} = 8\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 8 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 3\\,\\text{k}\\Omega$ and $C = 1\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 15\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega = 3000\\,\\Omega$",
        "Capacitance $C = 1\\,\\mu\\text{F} = 1 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 15\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 1 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (3 \\times 10^3) \\times (1 \\times 10^{-6}) = 3 \\times 10^{-3}\\text{ s} = 3\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 3 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 4\\,\\text{k}\\Omega$ and $C = 2\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 20\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega = 4000\\,\\Omega$",
        "Capacitance $C = 2\\,\\mu\\text{F} = 2 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 20\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 2 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (4 \\times 10^3) \\times (2 \\times 10^{-6}) = 8 \\times 10^{-3}\\text{ s} = 8\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 8 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 5\\,\\text{k}\\Omega$ and $C = 3\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 10\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "15",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega = 5000\\,\\Omega$",
        "Capacitance $C = 3\\,\\mu\\text{F} = 3 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 10\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 3 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (5 \\times 10^3) \\times (3 \\times 10^{-6}) = 15 \\times 10^{-3}\\text{ s} = 15\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 15 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 6\\,\\text{k}\\Omega$ and $C = 4\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 15\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "24",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega = 6000\\,\\Omega$",
        "Capacitance $C = 4\\,\\mu\\text{F} = 4 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 15\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 4 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (6 \\times 10^3) \\times (4 \\times 10^{-6}) = 24 \\times 10^{-3}\\text{ s} = 24\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 24 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 2\\,\\text{k}\\Omega$ and $C = 1\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 20\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 2\\text{ k}\\Omega = 2000\\,\\Omega$",
        "Capacitance $C = 1\\,\\mu\\text{F} = 1 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 20\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 2 \\times 10^3\\,\\Omega$ and $C = 1 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (2 \\times 10^3) \\times (1 \\times 10^{-6}) = 2 \\times 10^{-3}\\text{ s} = 2\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 3\\,\\text{k}\\Omega$ and $C = 2\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 10\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 3\\text{ k}\\Omega = 3000\\,\\Omega$",
        "Capacitance $C = 2\\,\\mu\\text{F} = 2 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 10\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 3 \\times 10^3\\,\\Omega$ and $C = 2 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (3 \\times 10^3) \\times (2 \\times 10^{-6}) = 6 \\times 10^{-3}\\text{ s} = 6\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 6 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 4\\,\\text{k}\\Omega$ and $C = 3\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 15\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "12",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 4\\text{ k}\\Omega = 4000\\,\\Omega$",
        "Capacitance $C = 3\\,\\mu\\text{F} = 3 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 15\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 4 \\times 10^3\\,\\Omega$ and $C = 3 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (4 \\times 10^3) \\times (3 \\times 10^{-6}) = 12 \\times 10^{-3}\\text{ s} = 12\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 12 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 5\\,\\text{k}\\Omega$ and $C = 4\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 20\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 5\\text{ k}\\Omega = 5000\\,\\Omega$",
        "Capacitance $C = 4\\,\\mu\\text{F} = 4 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 20\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 5 \\times 10^3\\,\\Omega$ and $C = 4 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (5 \\times 10^3) \\times (4 \\times 10^{-6}) = 20 \\times 10^{-3}\\text{ s} = 20\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 20 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RC$ circuit has $R = 6\\,\\text{k}\\Omega$ and $C = 1\\,\\mu\\text{F}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{ V}$). At $t = 0$, a DC voltage $V_s = 10\\text{ V}$ is applied. The time constant $\\tau$ of the circuit is ________ ms.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the time constant of a first-order series RC charging circuit.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 6\\text{ k}\\Omega = 6000\\,\\Omega$",
        "Capacitance $C = 1\\,\\mu\\text{F} = 1 \\times 10^{-6}\\,\\text{F}$",
        "Source $V_s = 10\\text{ V}$"
      ],
      "relevantConcept": "For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = R C",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time required to charge to 63.2% of final voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute product: $\\tau = R \\times C$.",
        "Step 2: $R = 6 \\times 10^3\\,\\Omega$ and $C = 1 \\times 10^{-6}\\,\\text{F}$.",
        "Step 3: $\\tau = (6 \\times 10^3) \\times (1 \\times 10^{-6}) = 6 \\times 10^{-3}\\text{ s} = 6\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 6 ms",
      "alternativeApproachOrShortcut": "Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
      "commonMistakes": [
        "Confusing milliseconds with microseconds."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RC Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 10\\,\\Omega$ and $L = 20\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 10\\,\\Omega$",
        "Inductance $L = 20\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 20 \\times 10^{-3}\\text{ H}$ and $R = 10\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{20 \\times 10^{-3}}{10} = 2.0 \\times 10^{-3}\\text{ s} = 2.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{20}{10} = 2.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 20\\,\\Omega$ and $L = 40\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 20\\,\\Omega$",
        "Inductance $L = 40\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 40 \\times 10^{-3}\\text{ H}$ and $R = 20\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{40 \\times 10^{-3}}{20} = 2.0 \\times 10^{-3}\\text{ s} = 2.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{40}{20} = 2.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 30\\,\\Omega$ and $L = 60\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 30\\,\\Omega$",
        "Inductance $L = 60\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 60 \\times 10^{-3}\\text{ H}$ and $R = 30\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{60 \\times 10^{-3}}{30} = 2.0 \\times 10^{-3}\\text{ s} = 2.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{60}{30} = 2.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 40\\,\\Omega$ and $L = 80\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 40\\,\\Omega$",
        "Inductance $L = 80\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 80 \\times 10^{-3}\\text{ H}$ and $R = 40\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{80 \\times 10^{-3}}{40} = 2.0 \\times 10^{-3}\\text{ s} = 2.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{80}{40} = 2.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 50\\,\\Omega$ and $L = 20\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.35,
      0.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 50\\,\\Omega$",
        "Inductance $L = 20\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 20 \\times 10^{-3}\\text{ H}$ and $R = 50\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{20 \\times 10^{-3}}{50} = 0.4 \\times 10^{-3}\\text{ s} = 0.4\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 0.4 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{20}{50} = 0.4\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 10\\,\\Omega$ and $L = 40\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 10\\,\\Omega$",
        "Inductance $L = 40\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 40 \\times 10^{-3}\\text{ H}$ and $R = 10\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{40 \\times 10^{-3}}{10} = 4.0 \\times 10^{-3}\\text{ s} = 4.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 4.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{40}{10} = 4.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 20\\,\\Omega$ and $L = 60\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 20\\,\\Omega$",
        "Inductance $L = 60\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 60 \\times 10^{-3}\\text{ H}$ and $R = 20\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{60 \\times 10^{-3}}{20} = 3.0 \\times 10^{-3}\\text{ s} = 3.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 3.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{60}{20} = 3.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 30\\,\\Omega$ and $L = 80\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.62,
      2.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 30\\,\\Omega$",
        "Inductance $L = 80\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 80 \\times 10^{-3}\\text{ H}$ and $R = 30\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{80 \\times 10^{-3}}{30} = 2.67 \\times 10^{-3}\\text{ s} = 2.67\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2.67 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{80}{30} = 2.67\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 40\\,\\Omega$ and $L = 20\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.45,
      0.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 40\\,\\Omega$",
        "Inductance $L = 20\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 20 \\times 10^{-3}\\text{ H}$ and $R = 40\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{20 \\times 10^{-3}}{40} = 0.5 \\times 10^{-3}\\text{ s} = 0.5\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 0.5 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{20}{40} = 0.5\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 50\\,\\Omega$ and $L = 40\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.75,
      0.85
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 50\\,\\Omega$",
        "Inductance $L = 40\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 40 \\times 10^{-3}\\text{ H}$ and $R = 50\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{40 \\times 10^{-3}}{50} = 0.8 \\times 10^{-3}\\text{ s} = 0.8\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 0.8 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{40}{50} = 0.8\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 10\\,\\Omega$ and $L = 60\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 10\\,\\Omega$",
        "Inductance $L = 60\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 60 \\times 10^{-3}\\text{ H}$ and $R = 10\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{60 \\times 10^{-3}}{10} = 6.0 \\times 10^{-3}\\text{ s} = 6.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 6.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{60}{10} = 6.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 20\\,\\Omega$ and $L = 80\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 20\\,\\Omega$",
        "Inductance $L = 80\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 80 \\times 10^{-3}\\text{ H}$ and $R = 20\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{80 \\times 10^{-3}}{20} = 4.0 \\times 10^{-3}\\text{ s} = 4.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 4.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{80}{20} = 4.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 30\\,\\Omega$ and $L = 20\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 30\\,\\Omega$",
        "Inductance $L = 20\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 20 \\times 10^{-3}\\text{ H}$ and $R = 30\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{20 \\times 10^{-3}}{30} = 0.67 \\times 10^{-3}\\text{ s} = 0.67\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 0.67 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{20}{30} = 0.67\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 40\\,\\Omega$ and $L = 40\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 40\\,\\Omega$",
        "Inductance $L = 40\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 40 \\times 10^{-3}\\text{ H}$ and $R = 40\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{40 \\times 10^{-3}}{40} = 1.0 \\times 10^{-3}\\text{ s} = 1.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 1.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{40}{40} = 1.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 50\\,\\Omega$ and $L = 60\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.15,
      1.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 50\\,\\Omega$",
        "Inductance $L = 60\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 60 \\times 10^{-3}\\text{ H}$ and $R = 50\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{60 \\times 10^{-3}}{50} = 1.2 \\times 10^{-3}\\text{ s} = 1.2\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 1.2 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{60}{50} = 1.2\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 10\\,\\Omega$ and $L = 80\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 10\\,\\Omega$",
        "Inductance $L = 80\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 80 \\times 10^{-3}\\text{ H}$ and $R = 10\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{80 \\times 10^{-3}}{10} = 8.0 \\times 10^{-3}\\text{ s} = 8.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 8.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{80}{10} = 8.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 20\\,\\Omega$ and $L = 20\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 20\\,\\Omega$",
        "Inductance $L = 20\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 20 \\times 10^{-3}\\text{ H}$ and $R = 20\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{20 \\times 10^{-3}}{20} = 1.0 \\times 10^{-3}\\text{ s} = 1.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 1.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{20}{20} = 1.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 30\\,\\Omega$ and $L = 40\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.28,
      1.38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 30\\,\\Omega$",
        "Inductance $L = 40\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 40 \\times 10^{-3}\\text{ H}$ and $R = 30\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{40 \\times 10^{-3}}{30} = 1.33 \\times 10^{-3}\\text{ s} = 1.33\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 1.33 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{40}{30} = 1.33\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 40\\,\\Omega$ and $L = 60\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 40\\,\\Omega$",
        "Inductance $L = 60\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 60 \\times 10^{-3}\\text{ H}$ and $R = 40\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{60 \\times 10^{-3}}{40} = 1.5 \\times 10^{-3}\\text{ s} = 1.5\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 1.5 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{60}{40} = 1.5\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 50\\,\\Omega$ and $L = 80\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.55,
      1.65
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 50\\,\\Omega$",
        "Inductance $L = 80\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 80 \\times 10^{-3}\\text{ H}$ and $R = 50\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{80 \\times 10^{-3}}{50} = 1.6 \\times 10^{-3}\\text{ s} = 1.6\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 1.6 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{80}{50} = 1.6\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 10\\,\\Omega$ and $L = 20\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 10\\,\\Omega$",
        "Inductance $L = 20\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 20 \\times 10^{-3}\\text{ H}$ and $R = 10\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{20 \\times 10^{-3}}{10} = 2.0 \\times 10^{-3}\\text{ s} = 2.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{20}{10} = 2.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 20\\,\\Omega$ and $L = 40\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 20\\,\\Omega$",
        "Inductance $L = 40\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 40 \\times 10^{-3}\\text{ H}$ and $R = 20\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{40 \\times 10^{-3}}{20} = 2.0 \\times 10^{-3}\\text{ s} = 2.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{40}{20} = 2.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 30\\,\\Omega$ and $L = 60\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 30\\,\\Omega$",
        "Inductance $L = 60\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 60 \\times 10^{-3}\\text{ H}$ and $R = 30\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{60 \\times 10^{-3}}{30} = 2.0 \\times 10^{-3}\\text{ s} = 2.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{60}{30} = 2.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 40\\,\\Omega$ and $L = 80\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 40\\,\\Omega$",
        "Inductance $L = 80\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 80 \\times 10^{-3}\\text{ H}$ and $R = 40\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{80 \\times 10^{-3}}{40} = 2.0 \\times 10^{-3}\\text{ s} = 2.0\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 2.0 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{80}{40} = 2.0\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RL$ circuit with $R = 50\\,\\Omega$ and $L = 20\\text{ mH}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.35,
      0.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the RL circuit time constant from inductor and resistor values.",
      "givenInformationAndAssumptions": [
        "Resistance $R = 50\\,\\Omega$",
        "Inductance $L = 20\\text{ mH}$"
      ],
      "relevantConcept": "The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\tau = \\frac{L}{R}",
          "terms": [
            {
              "term": "\\tau",
              "explanation": "Time constant of RL network"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for RL time constant: $\\tau = \\frac{L}{R}$.",
        "Step 2: $L = 20 \\times 10^{-3}\\text{ H}$ and $R = 50\\,\\Omega$.",
        "Step 3: $\\tau = \\frac{20 \\times 10^{-3}}{50} = 0.4 \\times 10^{-3}\\text{ s} = 0.4\\text{ ms}$."
      ],
      "finalAnswerWithUnits": "tau = 0.4 ms",
      "alternativeApproachOrShortcut": "Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{20}{50} = 0.4\\text{ ms}$.",
      "commonMistakes": [
        "Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Transients",
      "RL Circuit",
      "Time Constant"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.5$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.0$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.0$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.0$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.0$, the response regime is critically damped.",
        "Therefore, the correct choice is Option B."
      ],
      "finalAnswerWithUnits": "Option B",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.5$, the response regime is overdamped.",
        "Therefore, the correct choice is Option C."
      ],
      "finalAnswerWithUnits": "Option C",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.707$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.707$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.707$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.707$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.5$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.0$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.0$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.0$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.0$, the response regime is critically damped.",
        "Therefore, the correct choice is Option B."
      ],
      "finalAnswerWithUnits": "Option B",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.5$, the response regime is overdamped.",
        "Therefore, the correct choice is Option C."
      ],
      "finalAnswerWithUnits": "Option C",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.707$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.707$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.707$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.707$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.5$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.0$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.0$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.0$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.0$, the response regime is critically damped.",
        "Therefore, the correct choice is Option B."
      ],
      "finalAnswerWithUnits": "Option B",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.5$, the response regime is overdamped.",
        "Therefore, the correct choice is Option C."
      ],
      "finalAnswerWithUnits": "Option C",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.707$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.707$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.707$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.707$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.5$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.0$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.0$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.0$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.0$, the response regime is critically damped.",
        "Therefore, the correct choice is Option B."
      ],
      "finalAnswerWithUnits": "Option B",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.5$, the response regime is overdamped.",
        "Therefore, the correct choice is Option C."
      ],
      "finalAnswerWithUnits": "Option C",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.707$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.707$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.707$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.707$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.5$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.0$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "B",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.0$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.0$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.0$, the response regime is critically damped.",
        "Therefore, the correct choice is Option B."
      ],
      "finalAnswerWithUnits": "Option B",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 1.5$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "C",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 1.5$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 1.5$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 1.5$, the response regime is overdamped.",
        "Therefore, the correct choice is Option C."
      ],
      "finalAnswerWithUnits": "Option C",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transient & Steady State Analysis",
    "subject": "Network Theory",
    "topic": "Transient & Steady State Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = 0.707$, the nature of the transient response is:",
    "options": [
      {
        "id": "A",
        "text": "Underdamped with oscillatory decay"
      },
      {
        "id": "B",
        "text": "Critically damped with fastest non-oscillatory return"
      },
      {
        "id": "C",
        "text": "Overdamped with sluggish non-oscillatory decay"
      },
      {
        "id": "D",
        "text": "Undamped sustained sinusoidal oscillation"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
      "givenInformationAndAssumptions": [
        "Damping ratio $\\zeta = 0.707$"
      ],
      "relevantConcept": "Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}",
          "terms": [
            {
              "term": "\\zeta",
              "explanation": "Damping ratio"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Inspect the given damping ratio $\\zeta = 0.707$.",
        "Step 2: Compare with threshold $\\zeta = 1.0$.",
        "Step 3: Since $\\zeta = 0.707$, the response regime is underdamped.",
        "Therefore, the correct choice is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Look at pole locations: complex poles always imply underdamped oscillations.",
      "commonMistakes": [
        "Confusing underdamped with overdamped."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "RLC Circuit",
      "Damping Ratio",
      "Second-Order Transients"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 4\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.29,
      0.31
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 4\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (4)(6) - (2)(2) = 24 - 4 = 20\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{20} \\approx 0.3\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.3\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.3 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 6\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.172,
      0.192
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 6\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (6)(8) - (2)(2) = 48 - 4 = 44\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{44} \\approx 0.182\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.182\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.182 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 4\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.122,
      0.142
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 8\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (8)(10) - (2)(2) = 80 - 4 = 76\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{76} \\approx 0.132\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.132\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.132 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 6\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 10\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.097,
      0.117
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 10\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (10)(6) - (2)(2) = 60 - 4 = 56\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{56} \\approx 0.107\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.107\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.107 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 8\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 4\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.276,
      0.296
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 4\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (4)(8) - (2)(2) = 32 - 4 = 28\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{28} \\approx 0.286\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.286\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.286 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 6\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.169,
      0.189
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 6\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (6)(10) - (2)(2) = 60 - 4 = 56\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{56} \\approx 0.179\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.179\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.179 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 4\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.126,
      0.146
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 8\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (8)(6) - (2)(2) = 48 - 4 = 44\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{44} \\approx 0.136\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.136\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.136 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 6\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 10\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.095,
      0.115
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 10\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (10)(8) - (2)(2) = 80 - 4 = 76\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{76} \\approx 0.105\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.105\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.105 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 8\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 4\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.268,
      0.288
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 4\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (4)(10) - (2)(2) = 40 - 4 = 36\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{36} \\approx 0.278\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.278\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.278 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 6\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.178,
      0.198
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 6\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (6)(6) - (2)(2) = 36 - 4 = 32\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{32} \\approx 0.188\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.188\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.188 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 4\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.123,
      0.143
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 8\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (8)(8) - (2)(2) = 64 - 4 = 60\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{60} \\approx 0.133\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.133\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.133 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 6\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 10\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.094,
      0.114
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 10\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (10)(10) - (2)(2) = 100 - 4 = 96\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{96} \\approx 0.104\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.104\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.104 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 8\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 4\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.29,
      0.31
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 4\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (4)(6) - (2)(2) = 24 - 4 = 20\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{20} \\approx 0.3\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.3\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.3 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 6\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.172,
      0.192
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 6\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (6)(8) - (2)(2) = 48 - 4 = 44\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{44} \\approx 0.182\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.182\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.182 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 4\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.122,
      0.142
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 8\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (8)(10) - (2)(2) = 80 - 4 = 76\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{76} \\approx 0.132\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.132\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.132 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 6\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 10\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.097,
      0.117
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 10\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (10)(6) - (2)(2) = 60 - 4 = 56\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{56} \\approx 0.107\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.107\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.107 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 8\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 4\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.276,
      0.296
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 4\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (4)(8) - (2)(2) = 32 - 4 = 28\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{28} \\approx 0.286\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.286\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.286 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 6\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.169,
      0.189
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 6\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (6)(10) - (2)(2) = 60 - 4 = 56\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{56} \\approx 0.179\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.179\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.179 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 4\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.126,
      0.146
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 8\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (8)(6) - (2)(2) = 48 - 4 = 44\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{44} \\approx 0.136\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.136\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.136 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 6\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 10\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.095,
      0.115
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 10\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (10)(8) - (2)(2) = 80 - 4 = 76\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{76} \\approx 0.105\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.105\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.105 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 8\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 4\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.268,
      0.288
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 4\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (4)(10) - (2)(2) = 40 - 4 = 36\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{36} \\approx 0.278\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.278\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.278 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 6\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.178,
      0.198
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 6\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (6)(6) - (2)(2) = 36 - 4 = 32\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{32} \\approx 0.188\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.188\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.188 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 4\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.123,
      0.143
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 8\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (8)(8) - (2)(2) = 64 - 4 = 60\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{60} \\approx 0.133\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.133\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.133 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 6\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 10\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.094,
      0.114
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 10\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (10)(10) - (2)(2) = 100 - 4 = 96\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{96} \\approx 0.104\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.104\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.104 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 8\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 4\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.29,
      0.31
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 4\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (4)(6) - (2)(2) = 24 - 4 = 20\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{20} \\approx 0.3\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.3\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.3 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 6\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.172,
      0.192
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 6\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (6)(8) - (2)(2) = 48 - 4 = 44\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{44} \\approx 0.182\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.182\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.182 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 4\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.122,
      0.142
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 8\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (8)(10) - (2)(2) = 80 - 4 = 76\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{76} \\approx 0.132\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.132\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.132 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 6\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 10\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.097,
      0.117
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 10\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (10)(6) - (2)(2) = 60 - 4 = 56\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{56} \\approx 0.107\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.107\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.107 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 8\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 4\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.276,
      0.296
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 4\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (4)(8) - (2)(2) = 32 - 4 = 28\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{28} \\approx 0.286\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.286\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.286 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 6\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.169,
      0.189
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 6\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (6)(10) - (2)(2) = 60 - 4 = 56\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{56} \\approx 0.179\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.179\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.179 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 4\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.126,
      0.146
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 8\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (8)(6) - (2)(2) = 48 - 4 = 44\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{44} \\approx 0.136\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.136\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.136 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 6\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 10\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.095,
      0.115
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 10\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (10)(8) - (2)(2) = 80 - 4 = 76\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{76} \\approx 0.105\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.105\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.105 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 8\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 4\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 10\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.268,
      0.288
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 4\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 10\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (4)(10) - (2)(2) = 40 - 4 = 36\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{10}{36} \\approx 0.278\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.278\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.278 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 8\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 6\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 6\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.178,
      0.198
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 6\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 6\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (6)(6) - (2)(2) = 36 - 4 = 32\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{32} \\approx 0.188\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.188\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.188 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 4\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A passive, reciprocal two-port network has impedance parameters $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 2\\,\\Omega, Z_{22} = 8\\,\\Omega$. The admittance parameter $Y_{11}$ is ________ $\\Omega^{-1}$ (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.123,
      0.143
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
      "givenInformationAndAssumptions": [
        "$Z_{11} = 8\\,\\Omega$",
        "$Z_{12} = Z_{21} = 2\\,\\Omega$",
        "$Z_{22} = 8\\,\\Omega$"
      ],
      "relevantConcept": "Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}",
          "terms": [
            {
              "term": "\\det(Z)",
              "explanation": "Determinant of Z matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute determinant: $\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21} = (8)(8) - (2)(2) = 64 - 4 = 60\\,\\Omega^2$.",
        "Step 2: Formula for $Y_{11}$: $Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{8}{60} \\approx 0.133\\,\\text{S}$.",
        "Step 3: Hence, $Y_{11} = 0.133\\,\\Omega^{-1}$."
      ],
      "finalAnswerWithUnits": "Y11 = 0.133 S",
      "alternativeApproachOrShortcut": "Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = 6\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 6\\,\\Omega$.",
      "commonMistakes": [
        "Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "Z-Parameters",
      "Y-Parameters",
      "Matrix Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Two-Port Networks",
    "subject": "Network Theory",
    "topic": "Two-Port Networks",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?",
    "options": [
      {
        "id": "A",
        "text": "$AD - BC = 1$"
      },
      {
        "id": "B",
        "text": "$A = D$"
      },
      {
        "id": "C",
        "text": "$AD - BC = 0$"
      },
      {
        "id": "D",
        "text": "$B = C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
      "givenInformationAndAssumptions": [
        "Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"
      ],
      "relevantConcept": "For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
      "formulaAndTermExplanation": [
        {
          "formula": "AD - BC = 1",
          "terms": [
            {
              "term": "AD - BC",
              "explanation": "Determinant of ABCD matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
        "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
        "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
      "commonMistakes": [
        "Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Two-Port Networks",
      "ABCD Parameters",
      "Reciprocity",
      "Symmetry"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 10\\text{ mH}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      3157,
      3167
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 10\\text{ mH}$",
        "Capacitance $C = 10\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 10 \\times 10^{-3}\\text{ H}$, $C = 10 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (10 \\times 10^{-3}) \\times (10 \\times 10^{-6}) = 1.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.000e-07}} \\approx 3162\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "3162 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 20\\text{ mH}$, and $C = 20\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1576,
      1586
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 20\\text{ mH}$",
        "Capacitance $C = 20\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 20 \\times 10^{-3}\\text{ H}$, $C = 20 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (20 \\times 10^{-3}) \\times (20 \\times 10^{-6}) = 4.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{4.000e-07}} \\approx 1581\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1581 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 30\\text{ mH}$, and $C = 30\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1049,
      1059
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 30\\text{ mH}$",
        "Capacitance $C = 30\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 30 \\times 10^{-3}\\text{ H}$, $C = 30 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (30 \\times 10^{-3}) \\times (30 \\times 10^{-6}) = 9.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{9.000e-07}} \\approx 1054\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1054 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 40\\text{ mH}$, and $C = 40\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      786,
      796
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 40\\text{ mH}$",
        "Capacitance $C = 40\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 40 \\times 10^{-3}\\text{ H}$, $C = 40 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (40 \\times 10^{-3}) \\times (40 \\times 10^{-6}) = 1.600e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.600e-06}} \\approx 791\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "791 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 50\\text{ mH}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1409,
      1419
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 50\\text{ mH}$",
        "Capacitance $C = 10\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 50 \\times 10^{-3}\\text{ H}$, $C = 10 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (50 \\times 10^{-3}) \\times (10 \\times 10^{-6}) = 5.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{5.000e-07}} \\approx 1414\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1414 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 10\\text{ mH}$, and $C = 20\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      2231,
      2241
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 10\\text{ mH}$",
        "Capacitance $C = 20\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 10 \\times 10^{-3}\\text{ H}$, $C = 20 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (10 \\times 10^{-3}) \\times (20 \\times 10^{-6}) = 2.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{2.000e-07}} \\approx 2236\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "2236 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 20\\text{ mH}$, and $C = 30\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1286,
      1296
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 20\\text{ mH}$",
        "Capacitance $C = 30\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 20 \\times 10^{-3}\\text{ H}$, $C = 30 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (20 \\times 10^{-3}) \\times (30 \\times 10^{-6}) = 6.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{6.000e-07}} \\approx 1291\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1291 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 30\\text{ mH}$, and $C = 40\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      908,
      918
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 30\\text{ mH}$",
        "Capacitance $C = 40\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 30 \\times 10^{-3}\\text{ H}$, $C = 40 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (30 \\times 10^{-3}) \\times (40 \\times 10^{-6}) = 1.200e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.200e-06}} \\approx 913\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "913 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 40\\text{ mH}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1576,
      1586
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 40\\text{ mH}$",
        "Capacitance $C = 10\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 40 \\times 10^{-3}\\text{ H}$, $C = 10 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (40 \\times 10^{-3}) \\times (10 \\times 10^{-6}) = 4.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{4.000e-07}} \\approx 1581\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1581 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 50\\text{ mH}$, and $C = 20\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      995,
      1005
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 50\\text{ mH}$",
        "Capacitance $C = 20\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 50 \\times 10^{-3}\\text{ H}$, $C = 20 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (50 \\times 10^{-3}) \\times (20 \\times 10^{-6}) = 1.000e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.000e-06}} \\approx 1000\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1000 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 10\\text{ mH}$, and $C = 30\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1821,
      1831
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 10\\text{ mH}$",
        "Capacitance $C = 30\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 10 \\times 10^{-3}\\text{ H}$, $C = 30 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (10 \\times 10^{-3}) \\times (30 \\times 10^{-6}) = 3.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{3.000e-07}} \\approx 1826\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1826 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 20\\text{ mH}$, and $C = 40\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1113,
      1123
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 20\\text{ mH}$",
        "Capacitance $C = 40\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 20 \\times 10^{-3}\\text{ H}$, $C = 40 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (20 \\times 10^{-3}) \\times (40 \\times 10^{-6}) = 8.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{8.000e-07}} \\approx 1118\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1118 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 30\\text{ mH}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1821,
      1831
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 30\\text{ mH}$",
        "Capacitance $C = 10\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 30 \\times 10^{-3}\\text{ H}$, $C = 10 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (30 \\times 10^{-3}) \\times (10 \\times 10^{-6}) = 3.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{3.000e-07}} \\approx 1826\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1826 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 40\\text{ mH}$, and $C = 20\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1113,
      1123
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 40\\text{ mH}$",
        "Capacitance $C = 20\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 40 \\times 10^{-3}\\text{ H}$, $C = 20 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (40 \\times 10^{-3}) \\times (20 \\times 10^{-6}) = 8.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{8.000e-07}} \\approx 1118\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1118 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 50\\text{ mH}$, and $C = 30\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      812,
      822
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 50\\text{ mH}$",
        "Capacitance $C = 30\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 50 \\times 10^{-3}\\text{ H}$, $C = 30 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (50 \\times 10^{-3}) \\times (30 \\times 10^{-6}) = 1.500e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.500e-06}} \\approx 816\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "816 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 10\\text{ mH}$, and $C = 40\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1576,
      1586
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 10\\text{ mH}$",
        "Capacitance $C = 40\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 10 \\times 10^{-3}\\text{ H}$, $C = 40 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (10 \\times 10^{-3}) \\times (40 \\times 10^{-6}) = 4.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{4.000e-07}} \\approx 1581\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1581 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 20\\text{ mH}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      2231,
      2241
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 20\\text{ mH}$",
        "Capacitance $C = 10\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 20 \\times 10^{-3}\\text{ H}$, $C = 10 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (20 \\times 10^{-3}) \\times (10 \\times 10^{-6}) = 2.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{2.000e-07}} \\approx 2236\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "2236 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 30\\text{ mH}$, and $C = 20\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1286,
      1296
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 30\\text{ mH}$",
        "Capacitance $C = 20\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 30 \\times 10^{-3}\\text{ H}$, $C = 20 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (30 \\times 10^{-3}) \\times (20 \\times 10^{-6}) = 6.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{6.000e-07}} \\approx 1291\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1291 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 40\\text{ mH}$, and $C = 30\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      908,
      918
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 40\\text{ mH}$",
        "Capacitance $C = 30\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 40 \\times 10^{-3}\\text{ H}$, $C = 30 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (40 \\times 10^{-3}) \\times (30 \\times 10^{-6}) = 1.200e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.200e-06}} \\approx 913\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "913 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 50\\text{ mH}$, and $C = 40\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      702,
      712
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 50\\text{ mH}$",
        "Capacitance $C = 40\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 50 \\times 10^{-3}\\text{ H}$, $C = 40 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (50 \\times 10^{-3}) \\times (40 \\times 10^{-6}) = 2.000e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{2.000e-06}} \\approx 707\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "707 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 10\\text{ mH}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      3157,
      3167
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 10\\text{ mH}$",
        "Capacitance $C = 10\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 10 \\times 10^{-3}\\text{ H}$, $C = 10 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (10 \\times 10^{-3}) \\times (10 \\times 10^{-6}) = 1.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.000e-07}} \\approx 3162\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "3162 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 20\\text{ mH}$, and $C = 20\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1576,
      1586
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 20\\text{ mH}$",
        "Capacitance $C = 20\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 20 \\times 10^{-3}\\text{ H}$, $C = 20 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (20 \\times 10^{-3}) \\times (20 \\times 10^{-6}) = 4.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{4.000e-07}} \\approx 1581\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1581 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 30\\text{ mH}$, and $C = 30\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1049,
      1059
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 30\\text{ mH}$",
        "Capacitance $C = 30\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 30 \\times 10^{-3}\\text{ H}$, $C = 30 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (30 \\times 10^{-3}) \\times (30 \\times 10^{-6}) = 9.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{9.000e-07}} \\approx 1054\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1054 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 40\\text{ mH}$, and $C = 40\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      786,
      796
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 40\\text{ mH}$",
        "Capacitance $C = 40\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 40 \\times 10^{-3}\\text{ H}$, $C = 40 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (40 \\times 10^{-3}) \\times (40 \\times 10^{-6}) = 1.600e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.600e-06}} \\approx 791\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "791 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 50\\text{ mH}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1409,
      1419
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 50\\text{ mH}$",
        "Capacitance $C = 10\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 50 \\times 10^{-3}\\text{ H}$, $C = 10 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (50 \\times 10^{-3}) \\times (10 \\times 10^{-6}) = 5.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{5.000e-07}} \\approx 1414\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1414 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 10\\text{ mH}$, and $C = 20\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      2231,
      2241
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 10\\text{ mH}$",
        "Capacitance $C = 20\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 10 \\times 10^{-3}\\text{ H}$, $C = 20 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (10 \\times 10^{-3}) \\times (20 \\times 10^{-6}) = 2.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{2.000e-07}} \\approx 2236\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "2236 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 20\\text{ mH}$, and $C = 30\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1286,
      1296
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 20\\text{ mH}$",
        "Capacitance $C = 30\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 20 \\times 10^{-3}\\text{ H}$, $C = 30 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (20 \\times 10^{-3}) \\times (30 \\times 10^{-6}) = 6.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{6.000e-07}} \\approx 1291\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1291 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 30\\text{ mH}$, and $C = 40\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      908,
      918
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 30\\text{ mH}$",
        "Capacitance $C = 40\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 30 \\times 10^{-3}\\text{ H}$, $C = 40 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (30 \\times 10^{-3}) \\times (40 \\times 10^{-6}) = 1.200e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.200e-06}} \\approx 913\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "913 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 40\\text{ mH}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1576,
      1586
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 40\\text{ mH}$",
        "Capacitance $C = 10\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 40 \\times 10^{-3}\\text{ H}$, $C = 10 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (40 \\times 10^{-3}) \\times (10 \\times 10^{-6}) = 4.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{4.000e-07}} \\approx 1581\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1581 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 50\\text{ mH}$, and $C = 20\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      995,
      1005
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 50\\text{ mH}$",
        "Capacitance $C = 20\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 50 \\times 10^{-3}\\text{ H}$, $C = 20 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (50 \\times 10^{-3}) \\times (20 \\times 10^{-6}) = 1.000e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.000e-06}} \\approx 1000\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1000 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 10\\text{ mH}$, and $C = 30\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1821,
      1831
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 10\\text{ mH}$",
        "Capacitance $C = 30\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 10 \\times 10^{-3}\\text{ H}$, $C = 30 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (10 \\times 10^{-3}) \\times (30 \\times 10^{-6}) = 3.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{3.000e-07}} \\approx 1826\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1826 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 20\\text{ mH}$, and $C = 40\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1113,
      1123
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 20\\text{ mH}$",
        "Capacitance $C = 40\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 20 \\times 10^{-3}\\text{ H}$, $C = 40 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (20 \\times 10^{-3}) \\times (40 \\times 10^{-6}) = 8.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{8.000e-07}} \\approx 1118\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1118 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 30\\text{ mH}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1821,
      1831
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 30\\text{ mH}$",
        "Capacitance $C = 10\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 30 \\times 10^{-3}\\text{ H}$, $C = 10 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (30 \\times 10^{-3}) \\times (10 \\times 10^{-6}) = 3.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{3.000e-07}} \\approx 1826\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1826 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 40\\text{ mH}$, and $C = 20\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1113,
      1123
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 40\\text{ mH}$",
        "Capacitance $C = 20\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 40 \\times 10^{-3}\\text{ H}$, $C = 20 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (40 \\times 10^{-3}) \\times (20 \\times 10^{-6}) = 8.000e-07\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{8.000e-07}} \\approx 1118\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "1118 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = 50\\text{ mH}$, and $C = 30\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      812,
      822
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the resonant angular frequency of a series RLC resonant tank.",
      "givenInformationAndAssumptions": [
        "Inductance $L = 50\\text{ mH}$",
        "Capacitance $C = 30\\,\\mu\\text{F}$",
        "Resistance $R = 10\\,\\Omega$"
      ],
      "relevantConcept": "At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Resonant angular frequency in rad/s"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Convert units: $L = 50 \\times 10^{-3}\\text{ H}$, $C = 30 \\times 10^{-6}\\text{ F}$.",
        "Step 2: $LC = (50 \\times 10^{-3}) \\times (30 \\times 10^{-6}) = 1.500e-06\\text{ s}^2$.",
        "Step 3: Compute $\\omega_0 = \\frac{1}{\\sqrt{1.500e-06}} \\approx 816\\text{ rad/s}$."
      ],
      "finalAnswerWithUnits": "816 rad/s",
      "alternativeApproachOrShortcut": "Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
      "commonMistakes": [
        "Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "Resonance",
      "RLC Circuit",
      "Quality Factor",
      "Angular Frequency"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 400\\text{ W}$ and an inductive reactive power of $Q = 300\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      498,
      502
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 400\\text{ W}$",
        "Reactive power $Q = 300\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (400)^2 = 160000$, $Q^2 = (300)^2 = 90000$.",
        "Step 3: $P^2 + Q^2 = 250000$.",
        "Step 4: $S = \\sqrt{250000} \\approx 500\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "500 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 600\\text{ W}$ and an inductive reactive power of $Q = 400\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      719,
      723
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 600\\text{ W}$",
        "Reactive power $Q = 400\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (600)^2 = 360000$, $Q^2 = (400)^2 = 160000$.",
        "Step 3: $P^2 + Q^2 = 520000$.",
        "Step 4: $S = \\sqrt{520000} \\approx 721\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "721 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 800\\text{ W}$ and an inductive reactive power of $Q = 500\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      941,
      945
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 800\\text{ W}$",
        "Reactive power $Q = 500\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (800)^2 = 640000$, $Q^2 = (500)^2 = 250000$.",
        "Step 3: $P^2 + Q^2 = 890000$.",
        "Step 4: $S = \\sqrt{890000} \\approx 943\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "943 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1000\\text{ W}$ and an inductive reactive power of $Q = 600\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1164,
      1168
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1000\\text{ W}$",
        "Reactive power $Q = 600\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1000)^2 = 1000000$, $Q^2 = (600)^2 = 360000$.",
        "Step 3: $P^2 + Q^2 = 1360000$.",
        "Step 4: $S = \\sqrt{1360000} \\approx 1166\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1166 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1200\\text{ W}$ and an inductive reactive power of $Q = 300\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1235,
      1239
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1200\\text{ W}$",
        "Reactive power $Q = 300\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1200)^2 = 1440000$, $Q^2 = (300)^2 = 90000$.",
        "Step 3: $P^2 + Q^2 = 1530000$.",
        "Step 4: $S = \\sqrt{1530000} \\approx 1237\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1237 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 400\\text{ W}$ and an inductive reactive power of $Q = 400\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      564,
      568
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 400\\text{ W}$",
        "Reactive power $Q = 400\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (400)^2 = 160000$, $Q^2 = (400)^2 = 160000$.",
        "Step 3: $P^2 + Q^2 = 320000$.",
        "Step 4: $S = \\sqrt{320000} \\approx 566\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "566 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 600\\text{ W}$ and an inductive reactive power of $Q = 500\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      779,
      783
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 600\\text{ W}$",
        "Reactive power $Q = 500\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (600)^2 = 360000$, $Q^2 = (500)^2 = 250000$.",
        "Step 3: $P^2 + Q^2 = 610000$.",
        "Step 4: $S = \\sqrt{610000} \\approx 781\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "781 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 800\\text{ W}$ and an inductive reactive power of $Q = 600\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      998,
      1002
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 800\\text{ W}$",
        "Reactive power $Q = 600\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (800)^2 = 640000$, $Q^2 = (600)^2 = 360000$.",
        "Step 3: $P^2 + Q^2 = 1000000$.",
        "Step 4: $S = \\sqrt{1000000} \\approx 1000\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1000 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1000\\text{ W}$ and an inductive reactive power of $Q = 300\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1042,
      1046
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1000\\text{ W}$",
        "Reactive power $Q = 300\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1000)^2 = 1000000$, $Q^2 = (300)^2 = 90000$.",
        "Step 3: $P^2 + Q^2 = 1090000$.",
        "Step 4: $S = \\sqrt{1090000} \\approx 1044\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1044 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1200\\text{ W}$ and an inductive reactive power of $Q = 400\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1263,
      1267
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1200\\text{ W}$",
        "Reactive power $Q = 400\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1200)^2 = 1440000$, $Q^2 = (400)^2 = 160000$.",
        "Step 3: $P^2 + Q^2 = 1600000$.",
        "Step 4: $S = \\sqrt{1600000} \\approx 1265\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1265 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 400\\text{ W}$ and an inductive reactive power of $Q = 500\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      638,
      642
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 400\\text{ W}$",
        "Reactive power $Q = 500\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (400)^2 = 160000$, $Q^2 = (500)^2 = 250000$.",
        "Step 3: $P^2 + Q^2 = 410000$.",
        "Step 4: $S = \\sqrt{410000} \\approx 640\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "640 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 600\\text{ W}$ and an inductive reactive power of $Q = 600\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      846,
      850
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 600\\text{ W}$",
        "Reactive power $Q = 600\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (600)^2 = 360000$, $Q^2 = (600)^2 = 360000$.",
        "Step 3: $P^2 + Q^2 = 720000$.",
        "Step 4: $S = \\sqrt{720000} \\approx 848\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "848 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 800\\text{ W}$ and an inductive reactive power of $Q = 300\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      852,
      856
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 800\\text{ W}$",
        "Reactive power $Q = 300\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (800)^2 = 640000$, $Q^2 = (300)^2 = 90000$.",
        "Step 3: $P^2 + Q^2 = 730000$.",
        "Step 4: $S = \\sqrt{730000} \\approx 854\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "854 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1000\\text{ W}$ and an inductive reactive power of $Q = 400\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1075,
      1079
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1000\\text{ W}$",
        "Reactive power $Q = 400\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1000)^2 = 1000000$, $Q^2 = (400)^2 = 160000$.",
        "Step 3: $P^2 + Q^2 = 1160000$.",
        "Step 4: $S = \\sqrt{1160000} \\approx 1077\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1077 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1200\\text{ W}$ and an inductive reactive power of $Q = 500\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1298,
      1302
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1200\\text{ W}$",
        "Reactive power $Q = 500\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1200)^2 = 1440000$, $Q^2 = (500)^2 = 250000$.",
        "Step 3: $P^2 + Q^2 = 1690000$.",
        "Step 4: $S = \\sqrt{1690000} \\approx 1300\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1300 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 400\\text{ W}$ and an inductive reactive power of $Q = 600\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      719,
      723
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 400\\text{ W}$",
        "Reactive power $Q = 600\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (400)^2 = 160000$, $Q^2 = (600)^2 = 360000$.",
        "Step 3: $P^2 + Q^2 = 520000$.",
        "Step 4: $S = \\sqrt{520000} \\approx 721\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "721 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 600\\text{ W}$ and an inductive reactive power of $Q = 300\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      669,
      673
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 600\\text{ W}$",
        "Reactive power $Q = 300\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (600)^2 = 360000$, $Q^2 = (300)^2 = 90000$.",
        "Step 3: $P^2 + Q^2 = 450000$.",
        "Step 4: $S = \\sqrt{450000} \\approx 671\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "671 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 800\\text{ W}$ and an inductive reactive power of $Q = 400\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      892,
      896
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 800\\text{ W}$",
        "Reactive power $Q = 400\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (800)^2 = 640000$, $Q^2 = (400)^2 = 160000$.",
        "Step 3: $P^2 + Q^2 = 800000$.",
        "Step 4: $S = \\sqrt{800000} \\approx 894\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "894 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1000\\text{ W}$ and an inductive reactive power of $Q = 500\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1116,
      1120
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1000\\text{ W}$",
        "Reactive power $Q = 500\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1000)^2 = 1000000$, $Q^2 = (500)^2 = 250000$.",
        "Step 3: $P^2 + Q^2 = 1250000$.",
        "Step 4: $S = \\sqrt{1250000} \\approx 1118\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1118 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1200\\text{ W}$ and an inductive reactive power of $Q = 600\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1340,
      1344
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1200\\text{ W}$",
        "Reactive power $Q = 600\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1200)^2 = 1440000$, $Q^2 = (600)^2 = 360000$.",
        "Step 3: $P^2 + Q^2 = 1800000$.",
        "Step 4: $S = \\sqrt{1800000} \\approx 1342\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1342 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 400\\text{ W}$ and an inductive reactive power of $Q = 300\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      498,
      502
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 400\\text{ W}$",
        "Reactive power $Q = 300\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (400)^2 = 160000$, $Q^2 = (300)^2 = 90000$.",
        "Step 3: $P^2 + Q^2 = 250000$.",
        "Step 4: $S = \\sqrt{250000} \\approx 500\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "500 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 600\\text{ W}$ and an inductive reactive power of $Q = 400\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      719,
      723
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 600\\text{ W}$",
        "Reactive power $Q = 400\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (600)^2 = 360000$, $Q^2 = (400)^2 = 160000$.",
        "Step 3: $P^2 + Q^2 = 520000$.",
        "Step 4: $S = \\sqrt{520000} \\approx 721\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "721 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 800\\text{ W}$ and an inductive reactive power of $Q = 500\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      941,
      945
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 800\\text{ W}$",
        "Reactive power $Q = 500\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (800)^2 = 640000$, $Q^2 = (500)^2 = 250000$.",
        "Step 3: $P^2 + Q^2 = 890000$.",
        "Step 4: $S = \\sqrt{890000} \\approx 943\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "943 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1000\\text{ W}$ and an inductive reactive power of $Q = 600\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1164,
      1168
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1000\\text{ W}$",
        "Reactive power $Q = 600\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1000)^2 = 1000000$, $Q^2 = (600)^2 = 360000$.",
        "Step 3: $P^2 + Q^2 = 1360000$.",
        "Step 4: $S = \\sqrt{1360000} \\approx 1166\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1166 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1200\\text{ W}$ and an inductive reactive power of $Q = 300\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1235,
      1239
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1200\\text{ W}$",
        "Reactive power $Q = 300\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1200)^2 = 1440000$, $Q^2 = (300)^2 = 90000$.",
        "Step 3: $P^2 + Q^2 = 1530000$.",
        "Step 4: $S = \\sqrt{1530000} \\approx 1237\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1237 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 400\\text{ W}$ and an inductive reactive power of $Q = 400\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      564,
      568
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 400\\text{ W}$",
        "Reactive power $Q = 400\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (400)^2 = 160000$, $Q^2 = (400)^2 = 160000$.",
        "Step 3: $P^2 + Q^2 = 320000$.",
        "Step 4: $S = \\sqrt{320000} \\approx 566\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "566 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 600\\text{ W}$ and an inductive reactive power of $Q = 500\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      779,
      783
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 600\\text{ W}$",
        "Reactive power $Q = 500\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (600)^2 = 360000$, $Q^2 = (500)^2 = 250000$.",
        "Step 3: $P^2 + Q^2 = 610000$.",
        "Step 4: $S = \\sqrt{610000} \\approx 781\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "781 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 800\\text{ W}$ and an inductive reactive power of $Q = 600\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      998,
      1002
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 800\\text{ W}$",
        "Reactive power $Q = 600\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (800)^2 = 640000$, $Q^2 = (600)^2 = 360000$.",
        "Step 3: $P^2 + Q^2 = 1000000$.",
        "Step 4: $S = \\sqrt{1000000} \\approx 1000\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1000 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1000\\text{ W}$ and an inductive reactive power of $Q = 300\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1042,
      1046
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1000\\text{ W}$",
        "Reactive power $Q = 300\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1000)^2 = 1000000$, $Q^2 = (300)^2 = 90000$.",
        "Step 3: $P^2 + Q^2 = 1090000$.",
        "Step 4: $S = \\sqrt{1090000} \\approx 1044\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1044 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-NET-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — AC Sinusoidal Steady State & Resonance",
    "subject": "Network Theory",
    "topic": "AC Sinusoidal Steady State & Resonance",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A single-phase AC load consumes an active power of $P = 1200\\text{ W}$ and an inductive reactive power of $Q = 400\\text{ VAR}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      1263,
      1267
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate apparent power from active and reactive power components using the power triangle.",
      "givenInformationAndAssumptions": [
        "Active power $P = 1200\\text{ W}$",
        "Reactive power $Q = 400\\text{ VAR}$ (inductive)"
      ],
      "relevantConcept": "The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "S = \\sqrt{P^2 + Q^2}",
          "terms": [
            {
              "term": "S",
              "explanation": "Apparent power in Volt-Amperes (VA)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for apparent power: $S = \\sqrt{P^2 + Q^2}$.",
        "Step 2: $P^2 = (1200)^2 = 1440000$, $Q^2 = (400)^2 = 160000$.",
        "Step 3: $P^2 + Q^2 = 1600000$.",
        "Step 4: $S = \\sqrt{1600000} \\approx 1265\\text{ VA}$."
      ],
      "finalAnswerWithUnits": "1265 VA",
      "alternativeApproachOrShortcut": "Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
      "commonMistakes": [
        "Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Network Theory",
      "AC Steady State",
      "Power Factor",
      "Complex Power",
      "Apparent Power"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
