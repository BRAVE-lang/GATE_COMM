import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — DIGITAL_CIRCUITS_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const DIGITAL_CIRCUITS_PRACTICE: Question[] = [
  {
    "id": "PRAC-DIG-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:",
    "options": [
      {
        "id": "A",
        "text": "$AB + \\bar{A}C$"
      },
      {
        "id": "B",
        "text": "$AB + BC$"
      },
      {
        "id": "C",
        "text": "$\\bar{A}C + BC$"
      },
      {
        "id": "D",
        "text": "$A + B + C$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
      "givenInformationAndAssumptions": [
        "Boolean function: $F = AB + \\bar{A}C + BC$"
      ],
      "relevantConcept": "Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
      "formulaAndTermExplanation": [
        {
          "formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C",
          "terms": [
            {
              "term": "BC",
              "explanation": "Redundant consensus term"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
        "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
        "Step 3: Their conjunction is $BC$, which appears as the third term.",
        "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
        "Therefore, Option A is the correct minimal SOP."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
      "commonMistakes": [
        "Thinking all three terms are essential in the minimal SOP."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Boolean Algebra",
      "Consensus Theorem",
      "Logic Gates",
      "SOP"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Boolean Algebra & Logic Gates",
    "subject": "Digital Circuits",
    "topic": "Boolean Algebra & Logic Gates",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
      "givenInformationAndAssumptions": [
        "2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."
      ],
      "relevantConcept": "Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
      "formulaAndTermExplanation": [
        {
          "formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}",
          "terms": [
            {
              "term": "\\overline{AB}",
              "explanation": "Shared first-stage NAND gate"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
        "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
        "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
        "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
        "Step 5: Total number of NAND gates used is 4.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (4 NAND gates)",
      "alternativeApproachOrShortcut": "Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
      "commonMistakes": [
        "Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Universal Gates",
      "NAND Realization",
      "XOR Gate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:",
    "options": [
      {
        "id": "A",
        "text": "$A \\oplus B$ (XOR)"
      },
      {
        "id": "B",
        "text": "$\\overline{A \\oplus B}$ (XNOR)"
      },
      {
        "id": "C",
        "text": "$AB$ (AND)"
      },
      {
        "id": "D",
        "text": "$A + B$ (OR)"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
      "givenInformationAndAssumptions": [
        "4:1 MUX with $S_1 = A, S_0 = B$",
        "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"
      ],
      "relevantConcept": "The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
      "formulaAndTermExplanation": [
        {
          "formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3",
          "terms": [
            {
              "term": "Y",
              "explanation": "Multiplexer output"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
        "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
        "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
        "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
      "commonMistakes": [
        "Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Multiplexer",
      "XOR Gate",
      "MUX Realization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $4$-bit ripple-carry adder is constructed by cascading $4$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 4$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 4$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 4 \\times 10\\text{ ns} = 40\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "40 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit ripple-carry adder is constructed by cascading $8$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 8$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 8$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 8 \\times 10\\text{ ns} = 80\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "80 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $12$-bit ripple-carry adder is constructed by cascading $12$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 12$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 12$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 12 \\times 10\\text{ ns} = 120\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "120 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $16$-bit ripple-carry adder is constructed by cascading $16$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "160",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 16$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 16$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 16 \\times 10\\text{ ns} = 160\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "160 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $20$-bit ripple-carry adder is constructed by cascading $20$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 20$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 20$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 20 \\times 10\\text{ ns} = 200\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "200 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $4$-bit ripple-carry adder is constructed by cascading $4$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 4$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 4$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 4 \\times 10\\text{ ns} = 40\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "40 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit ripple-carry adder is constructed by cascading $8$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 8$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 8$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 8 \\times 10\\text{ ns} = 80\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "80 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $12$-bit ripple-carry adder is constructed by cascading $12$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 12$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 12$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 12 \\times 10\\text{ ns} = 120\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "120 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $16$-bit ripple-carry adder is constructed by cascading $16$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "160",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 16$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 16$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 16 \\times 10\\text{ ns} = 160\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "160 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $20$-bit ripple-carry adder is constructed by cascading $20$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 20$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 20$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 20 \\times 10\\text{ ns} = 200\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "200 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $4$-bit ripple-carry adder is constructed by cascading $4$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 4$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 4$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 4 \\times 10\\text{ ns} = 40\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "40 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit ripple-carry adder is constructed by cascading $8$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 8$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 8$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 8 \\times 10\\text{ ns} = 80\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "80 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $12$-bit ripple-carry adder is constructed by cascading $12$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 12$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 12$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 12 \\times 10\\text{ ns} = 120\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "120 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $16$-bit ripple-carry adder is constructed by cascading $16$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "160",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 16$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 16$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 16 \\times 10\\text{ ns} = 160\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "160 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $20$-bit ripple-carry adder is constructed by cascading $20$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 20$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 20$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 20 \\times 10\\text{ ns} = 200\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "200 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $4$-bit ripple-carry adder is constructed by cascading $4$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 4$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 4$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 4 \\times 10\\text{ ns} = 40\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "40 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit ripple-carry adder is constructed by cascading $8$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 8$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 8$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 8 \\times 10\\text{ ns} = 80\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "80 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $12$-bit ripple-carry adder is constructed by cascading $12$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 12$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 12$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 12 \\times 10\\text{ ns} = 120\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "120 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $16$-bit ripple-carry adder is constructed by cascading $16$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "160",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 16$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 16$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 16 \\times 10\\text{ ns} = 160\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "160 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $20$-bit ripple-carry adder is constructed by cascading $20$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 20$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 20$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 20 \\times 10\\text{ ns} = 200\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "200 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $4$-bit ripple-carry adder is constructed by cascading $4$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 4$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 4$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 4 \\times 10\\text{ ns} = 40\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "40 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit ripple-carry adder is constructed by cascading $8$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 8$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 8$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 8 \\times 10\\text{ ns} = 80\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "80 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $12$-bit ripple-carry adder is constructed by cascading $12$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 12$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 12$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 12 \\times 10\\text{ ns} = 120\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "120 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $16$-bit ripple-carry adder is constructed by cascading $16$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "160",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 16$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 16$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 16 \\times 10\\text{ ns} = 160\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "160 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $20$-bit ripple-carry adder is constructed by cascading $20$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 20$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 20$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 20 \\times 10\\text{ ns} = 200\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "200 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $4$-bit ripple-carry adder is constructed by cascading $4$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 4$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 4$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 4 \\times 10\\text{ ns} = 40\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "40 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit ripple-carry adder is constructed by cascading $8$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 8$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 8$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 8 \\times 10\\text{ ns} = 80\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "80 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $12$-bit ripple-carry adder is constructed by cascading $12$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 12$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 12$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 12 \\times 10\\text{ ns} = 120\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "120 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $16$-bit ripple-carry adder is constructed by cascading $16$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "160",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 16$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 16$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 16 \\times 10\\text{ ns} = 160\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "160 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $20$-bit ripple-carry adder is constructed by cascading $20$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 20$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 20$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 20 \\times 10\\text{ ns} = 200\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "200 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $4$-bit ripple-carry adder is constructed by cascading $4$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "40",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 4$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 4$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 4 \\times 10\\text{ ns} = 40\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "40 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit ripple-carry adder is constructed by cascading $8$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "80",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 8$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 8$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 8 \\times 10\\text{ ns} = 80\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "80 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $12$-bit ripple-carry adder is constructed by cascading $12$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "120",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 12$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 12$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 12 \\times 10\\text{ ns} = 120\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "120 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $16$-bit ripple-carry adder is constructed by cascading $16$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "160",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 16$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 16$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 16 \\times 10\\text{ ns} = 160\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "160 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Combinational Logic",
    "subject": "Digital Circuits",
    "topic": "Combinational Logic",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $20$-bit ripple-carry adder is constructed by cascading $20$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{carry} = 10\\text{ ns}$, the total worst-case carry propagation delay of the adder is ________ ns.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
      "givenInformationAndAssumptions": [
        "Word length $n = 20$ bits",
        "Carry delay per full adder $t_{carry} = 10\\text{ ns}$"
      ],
      "relevantConcept": "In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{total} = n \\cdot t_{carry}",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of cascaded adder stages"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of cascaded 1-bit stages: $n = 20$.",
        "Step 2: Carry delay per stage: $t_{carry} = 10\\text{ ns}$.",
        "Step 3: Total delay: $T = 20 \\times 10\\text{ ns} = 200\\text{ ns}$."
      ],
      "finalAnswerWithUnits": "200 ns",
      "alternativeApproachOrShortcut": "To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
      "commonMistakes": [
        "Dividing by $n$ or assuming parallel carry propagation in a ripple adder."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Combinational Logic",
      "Full Adder",
      "Ripple Carry Adder",
      "Propagation Delay"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 3 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 3$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 3$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 3 = 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 2.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 8$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 4 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 4$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 4$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 4$."
      ],
      "finalAnswerWithUnits": "4",
      "alternativeApproachOrShortcut": "Unused states = 12.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 16$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 5 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 5$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 5$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 5 = 10$."
      ],
      "finalAnswerWithUnits": "10",
      "alternativeApproachOrShortcut": "Unused states = 22.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 32$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 6 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 6$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 6$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 58.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 64$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 3 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 3$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 3$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 3 = 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 2.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 8$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 4 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 4$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 4$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 4$."
      ],
      "finalAnswerWithUnits": "4",
      "alternativeApproachOrShortcut": "Unused states = 12.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 16$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 5 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 5$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 5$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 5 = 10$."
      ],
      "finalAnswerWithUnits": "10",
      "alternativeApproachOrShortcut": "Unused states = 22.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 32$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 6 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 6$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 6$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 58.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 64$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 3 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 3$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 3$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 3 = 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 2.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 8$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 4 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 4$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 4$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 4$."
      ],
      "finalAnswerWithUnits": "4",
      "alternativeApproachOrShortcut": "Unused states = 12.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 16$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 5 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 5$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 5$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 5 = 10$."
      ],
      "finalAnswerWithUnits": "10",
      "alternativeApproachOrShortcut": "Unused states = 22.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 32$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 6 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 6$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 6$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 58.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 64$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 3 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 3$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 3$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 3 = 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 2.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 8$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 4 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 4$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 4$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 4$."
      ],
      "finalAnswerWithUnits": "4",
      "alternativeApproachOrShortcut": "Unused states = 12.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 16$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 5 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 5$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 5$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 5 = 10$."
      ],
      "finalAnswerWithUnits": "10",
      "alternativeApproachOrShortcut": "Unused states = 22.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 32$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 6 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 6$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 6$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 58.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 64$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 3 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 3$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 3$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 3 = 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 2.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 8$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 4 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 4$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 4$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 4$."
      ],
      "finalAnswerWithUnits": "4",
      "alternativeApproachOrShortcut": "Unused states = 12.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 16$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 5 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 5$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 5$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 5 = 10$."
      ],
      "finalAnswerWithUnits": "10",
      "alternativeApproachOrShortcut": "Unused states = 22.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 32$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 6 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 6$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 6$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 58.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 64$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 3 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 3$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 3$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 3 = 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 2.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 8$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 4 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 4$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 4$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 4$."
      ],
      "finalAnswerWithUnits": "4",
      "alternativeApproachOrShortcut": "Unused states = 12.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 16$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 5 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 5$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 5$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 5 = 10$."
      ],
      "finalAnswerWithUnits": "10",
      "alternativeApproachOrShortcut": "Unused states = 22.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 32$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 6 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 6$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 6$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 58.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 64$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 3 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 3$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 3$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 3 = 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 2.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 8$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 4 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 4$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 4$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 4$."
      ],
      "finalAnswerWithUnits": "4",
      "alternativeApproachOrShortcut": "Unused states = 12.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 16$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 5 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 5$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 5$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 5 = 10$."
      ],
      "finalAnswerWithUnits": "10",
      "alternativeApproachOrShortcut": "Unused states = 22.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 32$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 6 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 6$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 6$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 58.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 64$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 3 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 3$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 3$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 3 = 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 2.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 8$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 4 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 4$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 4$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 4$."
      ],
      "finalAnswerWithUnits": "4",
      "alternativeApproachOrShortcut": "Unused states = 12.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 16$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 5 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 5$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 5$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 5 = 10$."
      ],
      "finalAnswerWithUnits": "10",
      "alternativeApproachOrShortcut": "Unused states = 22.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 32$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 6 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 6$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 6$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 58.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 64$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 3 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 3$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 3$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 3 = 6$."
      ],
      "finalAnswerWithUnits": "6",
      "alternativeApproachOrShortcut": "Unused states = 2.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 8$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A simple ring counter is constructed using 4 flip-flops. The total number of distinct states in its sequence is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a ring counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 4$",
        "Counter topology: Ring counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 4$.",
        "Step 2: For a ring counter, a single circulating 1 gives exactly $n$ states.",
        "Step 3: Total states $= 4$."
      ],
      "finalAnswerWithUnits": "4",
      "alternativeApproachOrShortcut": "Unused states = 12.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 16$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A Johnson (twisted-ring) counter is constructed using 5 flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the modulo (number of valid states) of a Johnson counter.",
      "givenInformationAndAssumptions": [
        "Number of flip-flops $n = 5$",
        "Counter topology: Johnson (twisted ring) counter"
      ],
      "relevantConcept": "A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})",
          "terms": [
            {
              "term": "n",
              "explanation": "Number of flip-flops"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Number of flip-flops is $n = 5$.",
        "Step 2: For a Johnson counter, inverted feedback doubles the number of states to $2n$.",
        "Step 3: Total states $= 2 \\times 5 = 10$."
      ],
      "finalAnswerWithUnits": "10",
      "alternativeApproachOrShortcut": "Unused states = 22.",
      "commonMistakes": [
        "Confusing Johnson counter ($2n$) with binary counter ($2^n = 32$)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Counters",
      "Ring Counter",
      "Johnson Counter"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 5.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      99.5,
      100.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 5.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 5.0 + 3.0 = 10.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{10.0 \\times 10^{-9}} = \\frac{1000}{10.0}\\text{ MHz} = 100.0\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 100.0 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 6.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      90.4,
      91.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 6.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 6.0 + 3.0 = 11.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{11.0 \\times 10^{-9}} = \\frac{1000}{11.0}\\text{ MHz} = 90.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 90.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 7.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      82.8,
      83.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 7.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 7.0 + 3.0 = 12.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{12.0 \\times 10^{-9}} = \\frac{1000}{12.0}\\text{ MHz} = 83.3\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 83.3 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 8.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      76.4,
      77.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 8.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 8.0 + 3.0 = 13.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{13.0 \\times 10^{-9}} = \\frac{1000}{13.0}\\text{ MHz} = 76.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 76.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 9.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      70.9,
      71.9
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 9.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 9.0 + 3.0 = 14.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{14.0 \\times 10^{-9}} = \\frac{1000}{14.0}\\text{ MHz} = 71.4\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 71.4 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 5.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      99.5,
      100.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 5.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 5.0 + 3.0 = 10.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{10.0 \\times 10^{-9}} = \\frac{1000}{10.0}\\text{ MHz} = 100.0\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 100.0 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 6.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      90.4,
      91.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 6.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 6.0 + 3.0 = 11.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{11.0 \\times 10^{-9}} = \\frac{1000}{11.0}\\text{ MHz} = 90.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 90.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 7.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      82.8,
      83.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 7.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 7.0 + 3.0 = 12.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{12.0 \\times 10^{-9}} = \\frac{1000}{12.0}\\text{ MHz} = 83.3\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 83.3 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 8.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      76.4,
      77.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 8.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 8.0 + 3.0 = 13.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{13.0 \\times 10^{-9}} = \\frac{1000}{13.0}\\text{ MHz} = 76.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 76.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 9.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      70.9,
      71.9
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 9.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 9.0 + 3.0 = 14.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{14.0 \\times 10^{-9}} = \\frac{1000}{14.0}\\text{ MHz} = 71.4\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 71.4 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 5.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      99.5,
      100.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 5.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 5.0 + 3.0 = 10.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{10.0 \\times 10^{-9}} = \\frac{1000}{10.0}\\text{ MHz} = 100.0\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 100.0 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 6.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      90.4,
      91.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 6.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 6.0 + 3.0 = 11.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{11.0 \\times 10^{-9}} = \\frac{1000}{11.0}\\text{ MHz} = 90.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 90.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 7.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      82.8,
      83.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 7.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 7.0 + 3.0 = 12.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{12.0 \\times 10^{-9}} = \\frac{1000}{12.0}\\text{ MHz} = 83.3\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 83.3 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 8.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      76.4,
      77.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 8.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 8.0 + 3.0 = 13.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{13.0 \\times 10^{-9}} = \\frac{1000}{13.0}\\text{ MHz} = 76.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 76.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 9.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      70.9,
      71.9
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 9.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 9.0 + 3.0 = 14.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{14.0 \\times 10^{-9}} = \\frac{1000}{14.0}\\text{ MHz} = 71.4\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 71.4 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 5.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      99.5,
      100.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 5.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 5.0 + 3.0 = 10.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{10.0 \\times 10^{-9}} = \\frac{1000}{10.0}\\text{ MHz} = 100.0\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 100.0 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 6.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      90.4,
      91.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 6.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 6.0 + 3.0 = 11.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{11.0 \\times 10^{-9}} = \\frac{1000}{11.0}\\text{ MHz} = 90.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 90.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 7.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      82.8,
      83.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 7.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 7.0 + 3.0 = 12.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{12.0 \\times 10^{-9}} = \\frac{1000}{12.0}\\text{ MHz} = 83.3\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 83.3 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 8.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      76.4,
      77.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 8.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 8.0 + 3.0 = 13.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{13.0 \\times 10^{-9}} = \\frac{1000}{13.0}\\text{ MHz} = 76.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 76.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 9.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      70.9,
      71.9
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 9.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 9.0 + 3.0 = 14.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{14.0 \\times 10^{-9}} = \\frac{1000}{14.0}\\text{ MHz} = 71.4\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 71.4 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 5.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      99.5,
      100.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 5.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 5.0 + 3.0 = 10.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{10.0 \\times 10^{-9}} = \\frac{1000}{10.0}\\text{ MHz} = 100.0\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 100.0 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 6.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      90.4,
      91.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 6.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 6.0 + 3.0 = 11.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{11.0 \\times 10^{-9}} = \\frac{1000}{11.0}\\text{ MHz} = 90.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 90.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 7.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      82.8,
      83.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 7.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 7.0 + 3.0 = 12.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{12.0 \\times 10^{-9}} = \\frac{1000}{12.0}\\text{ MHz} = 83.3\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 83.3 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 8.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      76.4,
      77.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 8.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 8.0 + 3.0 = 13.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{13.0 \\times 10^{-9}} = \\frac{1000}{13.0}\\text{ MHz} = 76.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 76.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 9.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      70.9,
      71.9
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 9.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 9.0 + 3.0 = 14.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{14.0 \\times 10^{-9}} = \\frac{1000}{14.0}\\text{ MHz} = 71.4\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 71.4 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 5.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      99.5,
      100.5
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 5.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 5.0 + 3.0 = 10.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{10.0 \\times 10^{-9}} = \\frac{1000}{10.0}\\text{ MHz} = 100.0\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 100.0 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 6.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      90.4,
      91.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 6.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 6.0 + 3.0 = 11.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{11.0 \\times 10^{-9}} = \\frac{1000}{11.0}\\text{ MHz} = 90.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 90.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 7.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      82.8,
      83.8
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 7.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 7.0 + 3.0 = 12.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{12.0 \\times 10^{-9}} = \\frac{1000}{12.0}\\text{ MHz} = 83.3\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 83.3 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 8.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      76.4,
      77.4
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 8.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 8.0 + 3.0 = 13.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{13.0 \\times 10^{-9}} = \\frac{1000}{13.0}\\text{ MHz} = 76.9\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 76.9 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sequential Circuits",
    "subject": "Digital Circuits",
    "topic": "Sequential Circuits",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{cq} = 2.0\\text{ ns}$, the setup time is $t_{setup} = 3.0\\text{ ns}$, and the combinational logic delay is $t_{comb} = 9.0\\text{ ns}$. Assuming zero clock skew, the maximum clock frequency $f_{clk, \\max}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place).",
    "options": null,
    "officialAnswer": [
      70.9,
      71.9
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
      "givenInformationAndAssumptions": [
        "Clock-to-Q delay $t_{cq} = 2.0\\text{ ns}$",
        "Combinational logic delay $t_{comb} = 9.0\\text{ ns}$",
        "Setup time $t_{setup} = 3.0\\text{ ns}$",
        "Clock skew = 0"
      ],
      "relevantConcept": "To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}",
          "terms": [
            {
              "term": "T_{clk, \\min}",
              "explanation": "Minimum allowable clock period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute minimum clock period: $T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}$.",
        "Step 2: $T_{clk, \\min} = 2.0 + 9.0 + 3.0 = 14.0\\text{ ns}$.",
        "Step 3: Compute maximum clock frequency: $f_{\\max} = \\frac{1}{14.0 \\times 10^{-9}} = \\frac{1000}{14.0}\\text{ MHz} = 71.4\\text{ MHz}$."
      ],
      "finalAnswerWithUnits": "fmax = 71.4 MHz",
      "alternativeApproachOrShortcut": "Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
      "commonMistakes": [
        "Including hold time $t_{hold}$ in the minimum clock period equation."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Digital Circuits",
      "Sequential Circuits",
      "Setup Time",
      "Clock Frequency",
      "Static Timing Analysis"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $6$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      79.32,
      79.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 6$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{6} - 1 = 63$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{63}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{63} \\approx 79.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 79.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $7$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      39.32,
      39.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 7$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{7} - 1 = 127$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{127}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{127} \\approx 39.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 39.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.56,
      19.66
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 8$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{8} - 1 = 255$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{255}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{255} \\approx 19.61\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 19.61 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $9$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.73,
      9.83
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 9$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{9} - 1 = 511$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{511}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{511} \\approx 9.78\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 9.78 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $10$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.84,
      4.94
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 10$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{10} - 1 = 1023$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{1023}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{1023} \\approx 4.89\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 4.89 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $6$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      79.32,
      79.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 6$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{6} - 1 = 63$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{63}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{63} \\approx 79.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 79.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $7$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      39.32,
      39.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 7$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{7} - 1 = 127$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{127}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{127} \\approx 39.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 39.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.56,
      19.66
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 8$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{8} - 1 = 255$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{255}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{255} \\approx 19.61\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 19.61 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $9$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.73,
      9.83
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 9$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{9} - 1 = 511$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{511}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{511} \\approx 9.78\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 9.78 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $10$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.84,
      4.94
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 10$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{10} - 1 = 1023$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{1023}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{1023} \\approx 4.89\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 4.89 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $6$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      79.32,
      79.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 6$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{6} - 1 = 63$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{63}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{63} \\approx 79.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 79.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $7$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      39.32,
      39.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 7$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{7} - 1 = 127$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{127}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{127} \\approx 39.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 39.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.56,
      19.66
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 8$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{8} - 1 = 255$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{255}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{255} \\approx 19.61\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 19.61 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $9$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.73,
      9.83
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 9$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{9} - 1 = 511$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{511}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{511} \\approx 9.78\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 9.78 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $10$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.84,
      4.94
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 10$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{10} - 1 = 1023$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{1023}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{1023} \\approx 4.89\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 4.89 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $6$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      79.32,
      79.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 6$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{6} - 1 = 63$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{63}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{63} \\approx 79.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 79.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $7$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      39.32,
      39.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 7$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{7} - 1 = 127$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{127}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{127} \\approx 39.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 39.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.56,
      19.66
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 8$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{8} - 1 = 255$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{255}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{255} \\approx 19.61\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 19.61 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $9$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.73,
      9.83
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 9$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{9} - 1 = 511$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{511}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{511} \\approx 9.78\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 9.78 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $10$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.84,
      4.94
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 10$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{10} - 1 = 1023$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{1023}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{1023} \\approx 4.89\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 4.89 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $6$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      79.32,
      79.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 6$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{6} - 1 = 63$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{63}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{63} \\approx 79.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 79.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $7$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      39.32,
      39.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 7$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{7} - 1 = 127$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{127}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{127} \\approx 39.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 39.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.56,
      19.66
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 8$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{8} - 1 = 255$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{255}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{255} \\approx 19.61\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 19.61 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $9$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.73,
      9.83
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 9$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{9} - 1 = 511$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{511}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{511} \\approx 9.78\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 9.78 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $10$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.84,
      4.94
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 10$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{10} - 1 = 1023$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{1023}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{1023} \\approx 4.89\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 4.89 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $6$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      79.32,
      79.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 6$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{6} - 1 = 63$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{63}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{63} \\approx 79.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 79.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $7$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      39.32,
      39.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 7$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{7} - 1 = 127$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{127}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{127} \\approx 39.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 39.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.56,
      19.66
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 8$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{8} - 1 = 255$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{255}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{255} \\approx 19.61\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 19.61 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $9$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.73,
      9.83
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 9$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{9} - 1 = 511$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{511}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{511} \\approx 9.78\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 9.78 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $10$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.84,
      4.94
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 10$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{10} - 1 = 1023$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{1023}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{1023} \\approx 4.89\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 4.89 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $6$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      79.32,
      79.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 6$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{6} - 1 = 63$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{63}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{63} \\approx 79.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 79.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $7$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      39.32,
      39.42
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 7$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{7} - 1 = 127$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{127}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{127} \\approx 39.37\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 39.37 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $8$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      19.56,
      19.66
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 8$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{8} - 1 = 255$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{255}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{255} \\approx 19.61\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 19.61 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $9$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      9.73,
      9.83
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 9$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{9} - 1 = 511$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{511}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{511} \\approx 9.78\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 9.78 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "An $10$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{FS} = 5.0\\text{ V}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      4.84,
      4.94
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Determine the step size (voltage resolution) of an n-bit DAC.",
      "givenInformationAndAssumptions": [
        "Resolution $n = 10$ bits",
        "Full-scale voltage $V_{FS} = 5.0\\text{ V}$"
      ],
      "relevantConcept": "The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}",
          "terms": [
            {
              "term": "\\Delta",
              "explanation": "Step size / resolution voltage"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Total number of discrete steps is $2^n - 1 = 2^{10} - 1 = 1023$.",
        "Step 2: Step size formula: $\\Delta = \\frac{V_{FS}}{2^n - 1} = \\frac{5.0\\text{ V}}{1023}$.",
        "Step 3: Convert to millivolts: $\\Delta = \\frac{5000.0\\text{ mV}}{1023} \\approx 4.89\\text{ mV}$."
      ],
      "finalAnswerWithUnits": "Step size = 4.89 mV",
      "alternativeApproachOrShortcut": "Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
      "commonMistakes": [
        "Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "DAC",
      "Resolution",
      "Step Size"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-DIG-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Data Converters & Memories",
    "subject": "Digital Circuits",
    "topic": "Data Converters & Memories",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?",
    "options": [
      {
        "id": "A",
        "text": "Flash (Parallel Comparator) ADC"
      },
      {
        "id": "B",
        "text": "Successive Approximation Register (SAR) ADC"
      },
      {
        "id": "C",
        "text": "Dual-Slope Integrating ADC"
      },
      {
        "id": "D",
        "text": "Counter-Ramp ADC"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compare speed characteristics of standard ADC architectures.",
      "givenInformationAndAssumptions": [
        "ADC types: Flash, SAR, Dual-slope, Counter-ramp."
      ],
      "relevantConcept": "ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
      "formulaAndTermExplanation": [
        {
          "formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})",
          "terms": [
            {
              "term": "T_{conv}",
              "explanation": "Conversion time"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
        "Step 2: All comparisons occur in parallel during a single clock pulse.",
        "Step 3: Conversion time is strictly 1 clock cycle.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A (Flash ADC)",
      "alternativeApproachOrShortcut": "Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
      "commonMistakes": [
        "Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Digital Circuits",
      "Data Converters",
      "Flash ADC",
      "SAR ADC",
      "ADC Comparison"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
