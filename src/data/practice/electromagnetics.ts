import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — ELECTROMAGNETICS_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const ELECTROMAGNETICS_PRACTICE: Question[] = [
  {
    "id": "PRAC-EMT-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 2$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 2$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{2} \\times 12 = \\frac{12}{2} = 6.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 6.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 3$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 3$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{3} \\times 12 = \\frac{12}{3} = 4.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 4.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 4$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 4$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{4} \\times 12 = \\frac{12}{4} = 3.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 3.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 5$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": [
      2.35,
      2.45
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 5$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{5} \\times 12 = \\frac{12}{5} = 2.4\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.4 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Electrostatics & Magnetostatics",
    "subject": "Electromagnetics",
    "topic": "Electrostatics & Magnetostatics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{r1} = 1$) from medium 2 ($z < 0$, $\\epsilon_{r2} = 6$). If the electric field in medium 1 is $\\vec{E}_1 = 3\\hat{a}_x + 4\\hat{a}_y + 12\\hat{a}_z\\text{ V/m}$, the $z$-component (normal component) of the electric field $\\vec{E}_2$ in medium 2 is ________ V/m.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
      "givenInformationAndAssumptions": [
        "Medium 1 ($z > 0$): $\\epsilon_{r1} = 1$",
        "Medium 2 ($z < 0$): $\\epsilon_{r2} = 6$",
        "Normal field $E_{{n1}} = 12\\text{{ V/m}}$",
        "Charge-free interface ($\\rho_s = 0$)"
      ],
      "relevantConcept": "At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}",
          "terms": [
            {
              "term": "D_{n1} = D_{n2}",
              "explanation": "Continuity of normal electric displacement field"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Normal vector to the interface $z = 0$ is $\\hat{a}_z$.",
        "Step 2: The normal electric field in medium 1 is $E_{n1} = 12\\text{ V/m}$.",
        "Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
        "Step 4: $E_{n2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}} E_{n1} = \\frac{1}{6} \\times 12 = \\frac{12}{6} = 2.0\\text{ V/m}$."
      ],
      "finalAnswerWithUnits": "En2 = 2.0 V/m",
      "alternativeApproachOrShortcut": "Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
      "commonMistakes": [
        "Multiplying by $\\epsilon_{r2}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Electrostatics",
      "Boundary Conditions",
      "Dielectric Interface",
      "Displacement Field"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.3,
      0.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(1 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 1 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(1 \\times 10^9)\\sin(1 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(1 \\times 10^9) = 10 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (10 \\times 10^9) = \\frac{10}{9\\pi} \\approx 0.35\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.35 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.66,
      0.76
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(2 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 2 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(2 \\times 10^9)\\sin(2 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(2 \\times 10^9) = 20 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (20 \\times 10^9) = \\frac{20}{9\\pi} \\approx 0.71\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 0.71 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.01,
      1.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(3 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 3 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(3 \\times 10^9)\\sin(3 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(3 \\times 10^9) = 30 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (30 \\times 10^9) = \\frac{30}{9\\pi} \\approx 1.06\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.06 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.36,
      1.46
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(4 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 4 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(4 \\times 10^9)\\sin(4 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(4 \\times 10^9) = 40 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (40 \\times 10^9) = \\frac{40}{9\\pi} \\approx 1.41\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.41 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Maxwell's Equations & Boundary Conditions",
    "subject": "Electromagnetics",
    "topic": "Maxwell's Equations & Boundary Conditions",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$. Given permittivity of free space $\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$, the amplitude of the displacement current density $\\vec{J}_d$ is ________ A/m$^2$ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.72,
      1.82
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
      "givenInformationAndAssumptions": [
        "$\\vec{E} = 10\\cos(5 \\times 10^9 t - \\beta z)\\hat{a}_x\\text{ V/m}$",
        "Relative permittivity $\\epsilon_r = 4.0$",
        "$\\omega = 5 \\times 10^9\\text{ rad/s}$",
        "$\\epsilon_0 = \\frac{1}{36\\pi \\times 10^9}\\text{ F/m}$"
      ],
      "relevantConcept": "Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}",
          "terms": [
            {
              "term": "J_d",
              "explanation": "Displacement current density in A/m^2"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute time derivative: $\\frac{\\partial \\vec{E}}{\\partial t} = -10(5 \\times 10^9)\\sin(5 \\times 10^9 t - \\beta z)\\hat{a}_x$.",
        "Step 2: Amplitude of $\\frac{\\partial \\vec{E}}{\\partial t}$ is $10(5 \\times 10^9) = 50 \\times 10^9\\text{ V/(m\\cdot s)}$.",
        "Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{1}{36\\pi \\times 10^9} = \\frac{1}{9\\pi \\times 10^9}\\text{ F/m}$.",
        "Step 4: Amplitude of $\\vec{J}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{1}{9\\pi \\times 10^9} \\times (50 \\times 10^9) = \\frac{50}{9\\pi} \\approx 1.77\\text{ A/m}^2$."
      ],
      "finalAnswerWithUnits": "Jd = 1.77 A/m^2",
      "alternativeApproachOrShortcut": "Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
      "commonMistakes": [
        "Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Maxwell Equations",
      "Displacement Current",
      "Permittivity",
      "Plane Waves"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 4$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      186,
      190
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 4$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{4} = 2$.",
        "Step 3: $\\eta = \\frac{377}{2} \\approx 188\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 188 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{2} = 60\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 9$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      124,
      128
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 9$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{9} = 3$.",
        "Step 3: $\\eta = \\frac{377}{3} \\approx 126\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 126 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{3} = 40\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 16$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      92,
      96
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 16$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{16} = 4$.",
        "Step 3: $\\eta = \\frac{377}{4} \\approx 94\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 94 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{4} = 30\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 25$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      73,
      77
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 25$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{25} = 5$.",
        "Step 3: $\\eta = \\frac{377}{5} \\approx 75\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 75 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{5} = 24\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 4$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      186,
      190
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 4$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{4} = 2$.",
        "Step 3: $\\eta = \\frac{377}{2} \\approx 188\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 188 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{2} = 60\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 9$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      124,
      128
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 9$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{9} = 3$.",
        "Step 3: $\\eta = \\frac{377}{3} \\approx 126\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 126 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{3} = 40\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 16$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      92,
      96
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 16$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{16} = 4$.",
        "Step 3: $\\eta = \\frac{377}{4} \\approx 94\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 94 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{4} = 30\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 25$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      73,
      77
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 25$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{25} = 5$.",
        "Step 3: $\\eta = \\frac{377}{5} \\approx 75\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 75 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{5} = 24\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 4$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      186,
      190
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 4$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{4} = 2$.",
        "Step 3: $\\eta = \\frac{377}{2} \\approx 188\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 188 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{2} = 60\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 9$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      124,
      128
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 9$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{9} = 3$.",
        "Step 3: $\\eta = \\frac{377}{3} \\approx 126\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 126 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{3} = 40\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 16$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      92,
      96
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 16$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{16} = 4$.",
        "Step 3: $\\eta = \\frac{377}{4} \\approx 94\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 94 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{4} = 30\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 25$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      73,
      77
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 25$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{25} = 5$.",
        "Step 3: $\\eta = \\frac{377}{5} \\approx 75\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 75 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{5} = 24\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 4$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      186,
      190
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 4$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{4} = 2$.",
        "Step 3: $\\eta = \\frac{377}{2} \\approx 188\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 188 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{2} = 60\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 9$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      124,
      128
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 9$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{9} = 3$.",
        "Step 3: $\\eta = \\frac{377}{3} \\approx 126\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 126 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{3} = 40\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 16$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      92,
      96
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 16$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{16} = 4$.",
        "Step 3: $\\eta = \\frac{377}{4} \\approx 94\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 94 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{4} = 30\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 25$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      73,
      77
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 25$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{25} = 5$.",
        "Step 3: $\\eta = \\frac{377}{5} \\approx 75\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 75 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{5} = 24\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 4$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      186,
      190
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 4$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{4} = 2$.",
        "Step 3: $\\eta = \\frac{377}{2} \\approx 188\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 188 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{2} = 60\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 9$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      124,
      128
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 9$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{9} = 3$.",
        "Step 3: $\\eta = \\frac{377}{3} \\approx 126\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 126 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{3} = 40\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 16$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      92,
      96
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 16$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{16} = 4$.",
        "Step 3: $\\eta = \\frac{377}{4} \\approx 94\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 94 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{4} = 30\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 25$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      73,
      77
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 25$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{25} = 5$.",
        "Step 3: $\\eta = \\frac{377}{5} \\approx 75\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 75 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{5} = 24\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 4$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      186,
      190
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 4$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{4} = 2$.",
        "Step 3: $\\eta = \\frac{377}{2} \\approx 188\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 188 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{2} = 60\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 9$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      124,
      128
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 9$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{9} = 3$.",
        "Step 3: $\\eta = \\frac{377}{3} \\approx 126\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 126 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{3} = 40\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 16$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      92,
      96
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 16$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{16} = 4$.",
        "Step 3: $\\eta = \\frac{377}{4} \\approx 94\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 94 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{4} = 30\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 25$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      73,
      77
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 25$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{25} = 5$.",
        "Step 3: $\\eta = \\frac{377}{5} \\approx 75\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 75 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{5} = 24\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 4$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      186,
      190
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 4$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{4} = 2$.",
        "Step 3: $\\eta = \\frac{377}{2} \\approx 188\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 188 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{2} = 60\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 9$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      124,
      128
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 9$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{9} = 3$.",
        "Step 3: $\\eta = \\frac{377}{3} \\approx 126\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 126 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{3} = 40\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 16$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      92,
      96
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 16$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{16} = 4$.",
        "Step 3: $\\eta = \\frac{377}{4} \\approx 94\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 94 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{4} = 30\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 25$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      73,
      77
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 25$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{25} = 5$.",
        "Step 3: $\\eta = \\frac{377}{5} \\approx 75\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 75 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{5} = 24\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 4$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      186,
      190
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 4$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{4} = 2$.",
        "Step 3: $\\eta = \\frac{377}{2} \\approx 188\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 188 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{2} = 60\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = 9$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer).",
    "options": null,
    "officialAnswer": [
      124,
      128
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
      "givenInformationAndAssumptions": [
        "Relative permittivity $\\epsilon_r = 9$",
        "Relative permeability $\\mu_r = 1$",
        "Lossless medium ($\\sigma = 0$)"
      ],
      "relevantConcept": "The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega",
          "terms": [
            {
              "term": "\\eta_0",
              "explanation": "Intrinsic impedance of free space ~ 377 ohm"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula: $\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$.",
        "Step 2: $\\sqrt{\\epsilon_r} = \\sqrt{9} = 3$.",
        "Step 3: $\\eta = \\frac{377}{3} \\approx 126\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "eta = 126 ohm",
      "alternativeApproachOrShortcut": "Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{3} = 40\\pi\\,\\Omega$.",
      "commonMistakes": [
        "Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Intrinsic Impedance",
      "Wave Velocity",
      "Permittivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Plane Waves & Polarization",
    "subject": "Electromagnetics",
    "topic": "Plane Waves & Polarization",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:",
    "options": [
      {
        "id": "A",
        "text": "Left-Hand Circular Polarization (LHCP)"
      },
      {
        "id": "B",
        "text": "Right-Hand Circular Polarization (RHCP)"
      },
      {
        "id": "C",
        "text": "Linear polarization at 45° to the x-axis"
      },
      {
        "id": "D",
        "text": "Elliptical polarization"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
      "givenInformationAndAssumptions": [
        "$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$",
        "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$",
        "Propagation along $+z$ direction"
      ],
      "relevantConcept": "1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}",
          "terms": [
            {
              "term": "\\text{LHCP}",
              "explanation": "Left-hand circular polarization (IEEE convention)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
        "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
        "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
        "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
        "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
        "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (LHCP)",
      "alternativeApproachOrShortcut": "Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
      "commonMistakes": [
        "Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Electromagnetics",
      "Plane Waves",
      "Polarization",
      "Circular Polarization",
      "LHCP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 100\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 100\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{100 - 50}{100 + 50} = \\frac{50}{150}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{100}{50}, \\frac{50}{100}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 150\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 150\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{150 - 50}{150 + 50} = \\frac{100}{200}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.500$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.500}{1 - 0.500} = 3.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 3.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{150}{50}, \\frac{50}{150}\\right) = 3.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 25\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 25\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{25 - 50}{25 + 50} = \\frac{-25}{75}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{25}{50}, \\frac{50}{25}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 200\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 200\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{200 - 50}{200 + 50} = \\frac{150}{250}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.600$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.600}{1 - 0.600} = 4.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 4.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{200}{50}, \\frac{50}{200}\\right) = 4.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 75\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 75\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{75 - 50}{75 + 50} = \\frac{25}{125}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.200$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.200}{1 - 0.200} = 1.5$."
      ],
      "finalAnswerWithUnits": "VSWR = 1.5",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{75}{50}, \\frac{50}{75}\\right) = 1.5$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 100\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 100\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{100 - 50}{100 + 50} = \\frac{50}{150}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{100}{50}, \\frac{50}{100}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 150\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 150\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{150 - 50}{150 + 50} = \\frac{100}{200}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.500$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.500}{1 - 0.500} = 3.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 3.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{150}{50}, \\frac{50}{150}\\right) = 3.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 25\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 25\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{25 - 50}{25 + 50} = \\frac{-25}{75}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{25}{50}, \\frac{50}{25}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 200\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 200\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{200 - 50}{200 + 50} = \\frac{150}{250}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.600$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.600}{1 - 0.600} = 4.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 4.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{200}{50}, \\frac{50}{200}\\right) = 4.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 75\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 75\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{75 - 50}{75 + 50} = \\frac{25}{125}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.200$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.200}{1 - 0.200} = 1.5$."
      ],
      "finalAnswerWithUnits": "VSWR = 1.5",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{75}{50}, \\frac{50}{75}\\right) = 1.5$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 100\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 100\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{100 - 50}{100 + 50} = \\frac{50}{150}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{100}{50}, \\frac{50}{100}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 150\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 150\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{150 - 50}{150 + 50} = \\frac{100}{200}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.500$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.500}{1 - 0.500} = 3.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 3.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{150}{50}, \\frac{50}{150}\\right) = 3.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 25\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 25\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{25 - 50}{25 + 50} = \\frac{-25}{75}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{25}{50}, \\frac{50}{25}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 200\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 200\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{200 - 50}{200 + 50} = \\frac{150}{250}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.600$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.600}{1 - 0.600} = 4.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 4.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{200}{50}, \\frac{50}{200}\\right) = 4.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 75\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 75\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{75 - 50}{75 + 50} = \\frac{25}{125}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.200$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.200}{1 - 0.200} = 1.5$."
      ],
      "finalAnswerWithUnits": "VSWR = 1.5",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{75}{50}, \\frac{50}{75}\\right) = 1.5$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 100\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 100\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{100 - 50}{100 + 50} = \\frac{50}{150}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{100}{50}, \\frac{50}{100}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 150\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 150\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{150 - 50}{150 + 50} = \\frac{100}{200}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.500$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.500}{1 - 0.500} = 3.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 3.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{150}{50}, \\frac{50}{150}\\right) = 3.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 25\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 25\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{25 - 50}{25 + 50} = \\frac{-25}{75}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{25}{50}, \\frac{50}{25}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 200\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 200\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{200 - 50}{200 + 50} = \\frac{150}{250}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.600$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.600}{1 - 0.600} = 4.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 4.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{200}{50}, \\frac{50}{200}\\right) = 4.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 75\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 75\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{75 - 50}{75 + 50} = \\frac{25}{125}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.200$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.200}{1 - 0.200} = 1.5$."
      ],
      "finalAnswerWithUnits": "VSWR = 1.5",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{75}{50}, \\frac{50}{75}\\right) = 1.5$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 100\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 100\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{100 - 50}{100 + 50} = \\frac{50}{150}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{100}{50}, \\frac{50}{100}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 150\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 150\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{150 - 50}{150 + 50} = \\frac{100}{200}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.500$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.500}{1 - 0.500} = 3.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 3.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{150}{50}, \\frac{50}{150}\\right) = 3.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 25\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 25\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{25 - 50}{25 + 50} = \\frac{-25}{75}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{25}{50}, \\frac{50}{25}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 200\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 200\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{200 - 50}{200 + 50} = \\frac{150}{250}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.600$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.600}{1 - 0.600} = 4.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 4.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{200}{50}, \\frac{50}{200}\\right) = 4.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 75\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 75\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{75 - 50}{75 + 50} = \\frac{25}{125}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.200$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.200}{1 - 0.200} = 1.5$."
      ],
      "finalAnswerWithUnits": "VSWR = 1.5",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{75}{50}, \\frac{50}{75}\\right) = 1.5$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 100\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 100\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{100 - 50}{100 + 50} = \\frac{50}{150}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{100}{50}, \\frac{50}{100}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 150\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 150\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{150 - 50}{150 + 50} = \\frac{100}{200}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.500$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.500}{1 - 0.500} = 3.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 3.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{150}{50}, \\frac{50}{150}\\right) = 3.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 25\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 25\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{25 - 50}{25 + 50} = \\frac{-25}{75}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.333$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.333}{1 - 0.333} = 2.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 2.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{25}{50}, \\frac{50}{25}\\right) = 2.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 200\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 200\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{200 - 50}{200 + 50} = \\frac{150}{250}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.600$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.600}{1 - 0.600} = 4.0$."
      ],
      "finalAnswerWithUnits": "VSWR = 4.0",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{200}{50}, \\frac{50}{200}\\right) = 4.0$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = 75\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
      "givenInformationAndAssumptions": [
        "Characteristic impedance $Z_0 = 50\\,\\Omega$",
        "Load resistance $Z_L = 75\\,\\Omega$"
      ],
      "relevantConcept": "For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}",
          "terms": [
            {
              "term": "VSWR",
              "explanation": "Voltage standing wave ratio (\\ge 1)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute reflection coefficient: $\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{75 - 50}{75 + 50} = \\frac{25}{125}$.",
        "Step 2: Magnitude $|\\Gamma| = 0.200$.",
        "Step 3: Compute VSWR: $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{1 + 0.200}{1 - 0.200} = 1.5$."
      ],
      "finalAnswerWithUnits": "VSWR = 1.5",
      "alternativeApproachOrShortcut": "Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{75}{50}, \\frac{50}{75}\\right) = 1.5$.",
      "commonMistakes": [
        "Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "VSWR",
      "Reflection Coefficient",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 200\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 200\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 200\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 200} = \\sqrt{10000} = 100\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 100 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{100^2}{200} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 450\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "150",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 450\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 450\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 450} = \\sqrt{22500} = 150\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 150 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{150^2}{450} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 800\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 800\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 800\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 800} = \\sqrt{40000} = 200\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 200 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{200^2}{800} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 1250\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "250",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 1250\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 1250\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 1250} = \\sqrt{62500} = 250\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 250 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{250^2}{1250} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 200\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 200\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 200\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 200} = \\sqrt{10000} = 100\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 100 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{100^2}{200} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 450\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "150",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 450\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 450\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 450} = \\sqrt{22500} = 150\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 150 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{150^2}{450} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 800\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 800\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 800\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 800} = \\sqrt{40000} = 200\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 200 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{200^2}{800} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 1250\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "250",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 1250\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 1250\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 1250} = \\sqrt{62500} = 250\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 250 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{250^2}{1250} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 200\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 200\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 200\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 200} = \\sqrt{10000} = 100\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 100 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{100^2}{200} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 450\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "150",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 450\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 450\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 450} = \\sqrt{22500} = 150\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 150 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{150^2}{450} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 800\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 800\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 800\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 800} = \\sqrt{40000} = 200\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 200 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{200^2}{800} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 1250\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "250",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 1250\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 1250\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 1250} = \\sqrt{62500} = 250\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 250 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{250^2}{1250} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 200\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 200\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 200\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 200} = \\sqrt{10000} = 100\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 100 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{100^2}{200} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 450\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "150",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 450\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 450\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 450} = \\sqrt{22500} = 150\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 150 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{150^2}{450} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 800\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 800\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 800\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 800} = \\sqrt{40000} = 200\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 200 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{200^2}{800} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 1250\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "250",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 1250\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 1250\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 1250} = \\sqrt{62500} = 250\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 250 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{250^2}{1250} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 200\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 200\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 200\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 200} = \\sqrt{10000} = 100\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 100 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{100^2}{200} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 450\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "150",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 450\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 450\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 450} = \\sqrt{22500} = 150\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 150 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{150^2}{450} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 800\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 800\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 800\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 800} = \\sqrt{40000} = 200\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 200 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{200^2}{800} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 1250\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "250",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 1250\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 1250\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 1250} = \\sqrt{62500} = 250\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 250 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{250^2}{1250} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 200\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 200\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 200\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 200} = \\sqrt{10000} = 100\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 100 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{100^2}{200} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 450\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "150",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 450\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 450\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 450} = \\sqrt{22500} = 150\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 150 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{150^2}{450} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 800\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 800\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 800\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 800} = \\sqrt{40000} = 200\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 200 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{200^2}{800} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 1250\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "250",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 1250\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 1250\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 1250} = \\sqrt{62500} = 250\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 250 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{250^2}{1250} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Transmission Lines & Smith Chart",
    "subject": "Electromagnetics",
    "topic": "Transmission Lines & Smith Chart",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = 200\\,\\Omega$ to a feeder line of characteristic impedance $Z_{in} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Design a quarter-wave transformer by finding the required characteristic impedance.",
      "givenInformationAndAssumptions": [
        "Feeder line impedance $Z_{in} = 50\\,\\Omega$",
        "Terminating load $Z_L = 200\\,\\Omega$",
        "Length $l = \\lambda/4$"
      ],
      "relevantConcept": "A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Z_0 = \\sqrt{Z_{in} Z_L}",
          "terms": [
            {
              "term": "Z_0",
              "explanation": "Characteristic impedance of quarter-wave line"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{Z_{in} \\times Z_L}$.",
        "Step 2: $Z_{in} = 50\\,\\Omega$ and $Z_L = 200\\,\\Omega$.",
        "Step 3: $Z_0 = \\sqrt{50 \\times 200} = \\sqrt{10000} = 100\\,\\Omega$."
      ],
      "finalAnswerWithUnits": "Z0 = 100 ohm",
      "alternativeApproachOrShortcut": "Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{100^2}{200} = 50\\,\\Omega$.",
      "commonMistakes": [
        "Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Transmission Lines",
      "Quarter-Wave Transformer",
      "Impedance Matching"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 3.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 3.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 3.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (3.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 3.0}\\text{ Hz} = \\frac{15}{3.0}\\text{ GHz} = 5.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 5.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 4.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.7,
      3.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 4.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 4.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (4.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 4.0}\\text{ Hz} = \\frac{15}{4.0}\\text{ GHz} = 3.75\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.75 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 5.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 5.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 5.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (5.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 5.0}\\text{ Hz} = \\frac{15}{5.0}\\text{ GHz} = 3.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 6.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.45,
      2.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 6.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 6.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (6.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 6.0}\\text{ Hz} = \\frac{15}{6.0}\\text{ GHz} = 2.5\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 2.5 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 3.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 3.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 3.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (3.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 3.0}\\text{ Hz} = \\frac{15}{3.0}\\text{ GHz} = 5.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 5.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 4.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.7,
      3.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 4.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 4.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (4.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 4.0}\\text{ Hz} = \\frac{15}{4.0}\\text{ GHz} = 3.75\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.75 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 5.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 5.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 5.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (5.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 5.0}\\text{ Hz} = \\frac{15}{5.0}\\text{ GHz} = 3.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 6.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.45,
      2.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 6.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 6.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (6.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 6.0}\\text{ Hz} = \\frac{15}{6.0}\\text{ GHz} = 2.5\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 2.5 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 3.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 3.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 3.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (3.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 3.0}\\text{ Hz} = \\frac{15}{3.0}\\text{ GHz} = 5.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 5.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 4.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.7,
      3.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 4.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 4.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (4.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 4.0}\\text{ Hz} = \\frac{15}{4.0}\\text{ GHz} = 3.75\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.75 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 5.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 5.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 5.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (5.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 5.0}\\text{ Hz} = \\frac{15}{5.0}\\text{ GHz} = 3.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 6.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.45,
      2.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 6.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 6.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (6.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 6.0}\\text{ Hz} = \\frac{15}{6.0}\\text{ GHz} = 2.5\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 2.5 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 3.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 3.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 3.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (3.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 3.0}\\text{ Hz} = \\frac{15}{3.0}\\text{ GHz} = 5.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 5.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 4.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.7,
      3.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 4.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 4.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (4.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 4.0}\\text{ Hz} = \\frac{15}{4.0}\\text{ GHz} = 3.75\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.75 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 5.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 5.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 5.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (5.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 5.0}\\text{ Hz} = \\frac{15}{5.0}\\text{ GHz} = 3.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 6.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.45,
      2.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 6.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 6.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (6.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 6.0}\\text{ Hz} = \\frac{15}{6.0}\\text{ GHz} = 2.5\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 2.5 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 3.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 3.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 3.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (3.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 3.0}\\text{ Hz} = \\frac{15}{3.0}\\text{ GHz} = 5.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 5.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 4.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.7,
      3.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 4.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 4.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (4.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 4.0}\\text{ Hz} = \\frac{15}{4.0}\\text{ GHz} = 3.75\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.75 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 5.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 5.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 5.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (5.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 5.0}\\text{ Hz} = \\frac{15}{5.0}\\text{ GHz} = 3.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 6.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.45,
      2.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 6.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 6.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (6.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 6.0}\\text{ Hz} = \\frac{15}{6.0}\\text{ GHz} = 2.5\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 2.5 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 3.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 3.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 3.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (3.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 3.0}\\text{ Hz} = \\frac{15}{3.0}\\text{ GHz} = 5.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 5.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 4.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      3.7,
      3.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 4.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 4.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (4.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 4.0}\\text{ Hz} = \\frac{15}{4.0}\\text{ GHz} = 3.75\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.75 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 5.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 5.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 5.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (5.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 5.0}\\text{ Hz} = \\frac{15}{5.0}\\text{ GHz} = 3.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 3.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 6.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.45,
      2.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 6.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 6.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (6.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 6.0}\\text{ Hz} = \\frac{15}{6.0}\\text{ GHz} = 2.5\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 2.5 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An air-filled rectangular metallic waveguide has broad wall dimension $a = 3.0\\text{ cm}$ and narrow wall dimension $b = 1.5\\text{ cm}$. The cutoff frequency $f_c$ for the dominant $TE_{10}$ mode is ________ GHz (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
      "givenInformationAndAssumptions": [
        "Broad dimension $a = 3.0\\text{ cm}$",
        "Narrow dimension $b = 1.5\\text{{ cm}}$",
        "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"
      ],
      "relevantConcept": "For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_c = \\frac{c}{2a}",
          "terms": [
            {
              "term": "f_c",
              "explanation": "Cutoff frequency below which wave cannot propagate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Formula for dominant $TE_{10}$ mode cutoff: $f_c = \\frac{c}{2a}$.",
        "Step 2: $c = 3 \\times 10^8\\text{ m/s}$ and $a = 3.0 \\times 10^{-2}\\text{ m}$.",
        "Step 3: $f_c = \\frac{3 \\times 10^8}{2 \\times (3.0 \\times 10^{-2})} = \\frac{3 \\times 10^{10}}{2 \\times 3.0}\\text{ Hz} = \\frac{15}{3.0}\\text{ GHz} = 5.0\\text{ GHz}$."
      ],
      "finalAnswerWithUnits": "fc = 5.0 GHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
      "commonMistakes": [
        "Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Waveguides",
      "Rectangular Waveguide",
      "Cutoff Frequency",
      "Dominant Mode"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-EMT-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Waveguides & Antennas",
    "subject": "Electromagnetics",
    "topic": "Waveguides & Antennas",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:",
    "options": [
      {
        "id": "A",
        "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"
      },
      {
        "id": "B",
        "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"
      },
      {
        "id": "C",
        "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"
      },
      {
        "id": "D",
        "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
      "givenInformationAndAssumptions": [
        "Thin half-wave dipole ($l = \\lambda/2$) in free space."
      ],
      "relevantConcept": "For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
      "formulaAndTermExplanation": [
        {
          "formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}",
          "terms": [
            {
              "term": "R_{rad}",
              "explanation": "Radiation resistance representing radiated power"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
        "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
        "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
        "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (73 ohm, 1.64)",
      "alternativeApproachOrShortcut": "Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
      "commonMistakes": [
        "Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Electromagnetics",
      "Antennas",
      "Half-Wave Dipole",
      "Radiation Resistance",
      "Directivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
