import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — ENGINEERING_MATHEMATICS_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const ENGINEERING_MATHEMATICS_PRACTICE: Question[] = [
  {
    "id": "PRAC-MATH-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 4 & 2 \\\\ 2 & 4 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 4, a_{12} = 2, a_{21} = 2, a_{22} = 4$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 4 + 4 = 8$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (4)(4) - (2)(2) = 12$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 8\\lambda + 12 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{8 \\pm \\sqrt{16}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 6.0$ and $\\lambda_2 = 2.0$. The largest eigenvalue is $6.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 6.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 3, a_{12} = 1, a_{21} = 1, a_{22} = 3$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 3 + 3 = 6$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (3)(3) - (1)(1) = 8$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 6\\lambda + 8 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{6 \\pm \\sqrt{4}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 4.0$ and $\\lambda_2 = 2.0$. The largest eigenvalue is $4.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 4.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 5 & 4 \\\\ 1 & 2 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 5, a_{12} = 4, a_{21} = 1, a_{22} = 2$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 5 + 2 = 7$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (5)(2) - (4)(1) = 6$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 7\\lambda + 6 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{7 \\pm \\sqrt{25}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 6.0$ and $\\lambda_2 = 1.0$. The largest eigenvalue is $6.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 6.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 2 & 3 \\\\ 3 & 2 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 2, a_{12} = 3, a_{21} = 3, a_{22} = 2$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 2 + 2 = 4$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (2)(2) - (3)(3) = -5$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 4\\lambda + -5 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{4 \\pm \\sqrt{36}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 5.0$ and $\\lambda_2 = -1.0$. The largest eigenvalue is $5.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 5.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 6 & -2 \\\\ -2 & 3 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 6, a_{12} = -2, a_{21} = -2, a_{22} = 3$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 6 + 3 = 9$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (6)(3) - (-2)(-2) = 14$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 9\\lambda + 14 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{9 \\pm \\sqrt{25}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 7.0$ and $\\lambda_2 = 2.0$. The largest eigenvalue is $7.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 7.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 1 & 4 \\\\ 2 & 3 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 1, a_{12} = 4, a_{21} = 2, a_{22} = 3$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 1 + 3 = 4$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (1)(3) - (4)(2) = -5$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 4\\lambda + -5 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{4 \\pm \\sqrt{36}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 5.0$ and $\\lambda_2 = -1.0$. The largest eigenvalue is $5.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 5.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 7 & 3 \\\\ 3 & -1 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 7, a_{12} = 3, a_{21} = 3, a_{22} = -1$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 7 + -1 = 6$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (7)(-1) - (3)(3) = -16$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 6\\lambda + -16 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{6 \\pm \\sqrt{100}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 8.0$ and $\\lambda_2 = -2.0$. The largest eigenvalue is $8.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 8.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 2 & 2 \\\\ 1 & 3 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 2, a_{12} = 2, a_{21} = 1, a_{22} = 3$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 2 + 3 = 5$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (2)(3) - (2)(1) = 4$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 5\\lambda + 4 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{5 \\pm \\sqrt{9}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 4.0$ and $\\lambda_2 = 1.0$. The largest eigenvalue is $4.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 4.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 8 & -4 \\\\ 2 & 2 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 8, a_{12} = -4, a_{21} = 2, a_{22} = 2$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 8 + 2 = 10$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (8)(2) - (-4)(2) = 24$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 10\\lambda + 24 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{10 \\pm \\sqrt{4}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 6.0$ and $\\lambda_2 = 4.0$. The largest eigenvalue is $6.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 6.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 5 & -1 \\\\ 4 & 1 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 5, a_{12} = -1, a_{21} = 4, a_{22} = 1$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 5 + 1 = 6$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (5)(1) - (-1)(4) = 9$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 6\\lambda + 9 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{6 \\pm \\sqrt{0}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 3.0$ and $\\lambda_2 = 3.0$. The largest eigenvalue is $3.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 3.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "MCQ",
    "marks": 2,
    "negativeMarks": -0.67,
    "statement": "For the matrix $A = \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$, which of the following statements is CORRECT regarding its eigenvalues?",
    "options": [
      {
        "id": "A",
        "text": "The eigenvalues are purely imaginary: $\\pm j1.0$"
      },
      {
        "id": "B",
        "text": "The eigenvalues are real and positive"
      },
      {
        "id": "C",
        "text": "The eigenvalues are real and distinct"
      },
      {
        "id": "D",
        "text": "The matrix has a single defective repeated eigenvalue"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 0, a_{12} = 1, a_{21} = -1, a_{22} = 0$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $\\lambda^2 - (0)\\lambda + (1) = 0$.",
        "Step 2: Since $\\text{Tr}(A) = 0$ and $\\det(A) = 1 > 0$, the roots are $\\lambda = \\pm j\\sqrt{1} = \\pm j1.0$.",
        "Step 3: Thus, the eigenvalues are purely imaginary conjugates."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "For the matrix $A = \\begin{bmatrix} 0 & 2 \\\\ -2 & 0 \\end{bmatrix}$, which of the following statements is CORRECT regarding its eigenvalues?",
    "options": [
      {
        "id": "A",
        "text": "The eigenvalues are purely imaginary: $\\pm j2.0$"
      },
      {
        "id": "B",
        "text": "The eigenvalues are real and positive"
      },
      {
        "id": "C",
        "text": "The eigenvalues are real and distinct"
      },
      {
        "id": "D",
        "text": "The matrix has a single defective repeated eigenvalue"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 0, a_{12} = 2, a_{21} = -2, a_{22} = 0$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $\\lambda^2 - (0)\\lambda + (4) = 0$.",
        "Step 2: Since $\\text{Tr}(A) = 0$ and $\\det(A) = 4 > 0$, the roots are $\\lambda = \\pm j\\sqrt{4} = \\pm j2.0$.",
        "Step 3: Thus, the eigenvalues are purely imaginary conjugates."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 1, a_{12} = 2, a_{21} = 0, a_{22} = 3$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 1 + 3 = 4$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (1)(3) - (2)(0) = 3$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 4\\lambda + 3 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{4 \\pm \\sqrt{4}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 3.0$ and $\\lambda_2 = 1.0$. The largest eigenvalue is $3.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 3.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 4 & 0 \\\\ 5 & -2 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 4, a_{12} = 0, a_{21} = 5, a_{22} = -2$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 4 + -2 = 2$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (4)(-2) - (0)(5) = -8$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 2\\lambda + -8 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{2 \\pm \\sqrt{36}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 4.0$ and $\\lambda_2 = -2.0$. The largest eigenvalue is $4.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 4.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the $2 \\times 2$ real matrix: $$A = \\begin{bmatrix} 10 & 0 \\\\ 0 & 10 \\end{bmatrix}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
      "givenInformationAndAssumptions": [
        "Matrix elements: $a_{11} = 10, a_{12} = 0, a_{21} = 0, a_{22} = 10$."
      ],
      "relevantConcept": "The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
          "terms": [
            {
              "term": "\\text{Tr}(A)",
              "explanation": "Sum of principal diagonal elements"
            },
            {
              "term": "\\det(A)",
              "explanation": "Product of eigenvalues"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute the trace of $A$: $\\text{Tr}(A) = 10 + 10 = 20$.",
        "Step 2: Compute the determinant of $A$: $\\det(A) = (10)(10) - (0)(0) = 100$.",
        "Step 3: Solve the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$:",
        "$$\\lambda^2 - 20\\lambda + 100 = 0$$",
        "Using the quadratic formula: $\\lambda = \\frac{20 \\pm \\sqrt{0}}{2}$.",
        "The eigenvalues are $\\lambda_1 = 10.0$ and $\\lambda_2 = 10.0$. The largest eigenvalue is $10.0$."
      ],
      "finalAnswerWithUnits": "Largest eigenvalue = 10.0",
      "alternativeApproachOrShortcut": "Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
      "commonMistakes": [
        "Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.",
        "Arithmetic errors in finding the determinant."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Eigenvalues",
      "Characteristic Equation",
      "Matrices"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Let $A$ be a diagonal matrix given by $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$. The trace of $A^{3}$ is equal to ________.",
    "options": null,
    "officialAnswer": "35",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 2, 3."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a diagonal matrix, $A^k = \\begin{bmatrix} 2^k & 0 \\\\ 0 & 3^k \\end{bmatrix}$.",
        "Step 2: For $k = 3$, the diagonal entries are $2^{3} = 8$ and $3^{3} = 27$.",
        "Step 3: Trace is the sum of diagonal elements: $\\text{Tr}(A^{3}) = 8 + 27 = 35$."
      ],
      "finalAnswerWithUnits": "Trace = 35",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Let $A$ be a diagonal matrix given by $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 4 \\end{bmatrix}$. The trace of $A^{3}$ is equal to ________.",
    "options": null,
    "officialAnswer": "65",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 1, 4."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a diagonal matrix, $A^k = \\begin{bmatrix} 1^k & 0 \\\\ 0 & 4^k \\end{bmatrix}$.",
        "Step 2: For $k = 3$, the diagonal entries are $1^{3} = 1$ and $4^{3} = 64$.",
        "Step 3: Trace is the sum of diagonal elements: $\\text{Tr}(A^{3}) = 1 + 64 = 65$."
      ],
      "finalAnswerWithUnits": "Trace = 65",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Let $A$ be a diagonal matrix given by $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$. The trace of $A^{4}$ is equal to ________.",
    "options": null,
    "officialAnswer": "97",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 2, 3."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a diagonal matrix, $A^k = \\begin{bmatrix} 2^k & 0 \\\\ 0 & 3^k \\end{bmatrix}$.",
        "Step 2: For $k = 4$, the diagonal entries are $2^{4} = 16$ and $3^{4} = 81$.",
        "Step 3: Trace is the sum of diagonal elements: $\\text{Tr}(A^{4}) = 16 + 81 = 97$."
      ],
      "finalAnswerWithUnits": "Trace = 97",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Let $A$ be a diagonal matrix given by $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 4 \\end{bmatrix}$. The trace of $A^{4}$ is equal to ________.",
    "options": null,
    "officialAnswer": "257",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 1, 4."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a diagonal matrix, $A^k = \\begin{bmatrix} 1^k & 0 \\\\ 0 & 4^k \\end{bmatrix}$.",
        "Step 2: For $k = 4$, the diagonal entries are $1^{4} = 1$ and $4^{4} = 256$.",
        "Step 3: Trace is the sum of diagonal elements: $\\text{Tr}(A^{4}) = 1 + 256 = 257$."
      ],
      "finalAnswerWithUnits": "Trace = 257",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Let $A$ be a diagonal matrix given by $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$. The trace of $A^{5}$ is equal to ________.",
    "options": null,
    "officialAnswer": "275",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 2, 3."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a diagonal matrix, $A^k = \\begin{bmatrix} 2^k & 0 \\\\ 0 & 3^k \\end{bmatrix}$.",
        "Step 2: For $k = 5$, the diagonal entries are $2^{5} = 32$ and $3^{5} = 243$.",
        "Step 3: Trace is the sum of diagonal elements: $\\text{Tr}(A^{5}) = 32 + 243 = 275$."
      ],
      "finalAnswerWithUnits": "Trace = 275",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Let $A$ be a diagonal matrix given by $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 4 \\end{bmatrix}$. The trace of $A^{5}$ is equal to ________.",
    "options": null,
    "officialAnswer": "1025",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 1, 4."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a diagonal matrix, $A^k = \\begin{bmatrix} 1^k & 0 \\\\ 0 & 4^k \\end{bmatrix}$.",
        "Step 2: For $k = 5$, the diagonal entries are $1^{5} = 1$ and $4^{5} = 1024$.",
        "Step 3: Trace is the sum of diagonal elements: $\\text{Tr}(A^{5}) = 1 + 1024 = 1025$."
      ],
      "finalAnswerWithUnits": "Trace = 1025",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $2 \\times 2$ matrix $A$ satisfies $A^2 - 5A + 6I = 0$. If $\\det(A) = 6 \\ne 0$, then the inverse matrix $A^{-1}$ can be expressed as:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{6}(5I - A)$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{6}(A - 5I)$"
      },
      {
        "id": "C",
        "text": "$5A - 6I$"
      },
      {
        "id": "D",
        "text": "$6A + 5I$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 2, 3."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: From the Cayley-Hamilton theorem, $A^2 - 5A + 6I = 0$.",
        "Step 2: Multiply both sides by $A^{-1}$:",
        "$A^{-1}A^2 - 5A^{-1}A + 6A^{-1} = 0 \\implies A - 5I + 6A^{-1} = 0$.",
        "Step 3: Rearrange for $A^{-1}$: $6A^{-1} = 5I - A \\implies A^{-1} = \\frac{1}{6}(5I - A)$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A $2 \\times 2$ matrix $A$ satisfies $A^2 - 5A + 4I = 0$. If $\\det(A) = 4 \\ne 0$, then the inverse matrix $A^{-1}$ can be expressed as:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{4}(5I - A)$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{4}(A - 5I)$"
      },
      {
        "id": "C",
        "text": "$5A - 4I$"
      },
      {
        "id": "D",
        "text": "$4A + 5I$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 1, 4."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: From the Cayley-Hamilton theorem, $A^2 - 5A + 4I = 0$.",
        "Step 2: Multiply both sides by $A^{-1}$:",
        "$A^{-1}A^2 - 5A^{-1}A + 4A^{-1} = 0 \\implies A - 5I + 4A^{-1} = 0$.",
        "Step 3: Rearrange for $A^{-1}$: $4A^{-1} = 5I - A \\implies A^{-1} = \\frac{1}{4}(5I - A)$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $A$ be a diagonal matrix given by $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$. The trace of $A^{2}$ is equal to ________.",
    "options": null,
    "officialAnswer": "13",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 2, 3."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a diagonal matrix, $A^k = \\begin{bmatrix} 2^k & 0 \\\\ 0 & 3^k \\end{bmatrix}$.",
        "Step 2: For $k = 2$, the diagonal entries are $2^{2} = 4$ and $3^{2} = 9$.",
        "Step 3: Trace is the sum of diagonal elements: $\\text{Tr}(A^{2}) = 4 + 9 = 13$."
      ],
      "finalAnswerWithUnits": "Trace = 13",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $A$ be a diagonal matrix given by $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 4 \\end{bmatrix}$. The trace of $A^{2}$ is equal to ________.",
    "options": null,
    "officialAnswer": "17",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
      "givenInformationAndAssumptions": [
        "Matrix characteristic polynomial or diagonal matrix with entries 1, 4."
      ],
      "relevantConcept": "Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)",
          "terms": [
            {
              "term": "I",
              "explanation": "Identity matrix"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For a diagonal matrix, $A^k = \\begin{bmatrix} 1^k & 0 \\\\ 0 & 4^k \\end{bmatrix}$.",
        "Step 2: For $k = 2$, the diagonal entries are $1^{2} = 1$ and $4^{2} = 16$.",
        "Step 3: Trace is the sum of diagonal elements: $\\text{Tr}(A^{2}) = 1 + 16 = 17$."
      ],
      "finalAnswerWithUnits": "Trace = 17",
      "alternativeApproachOrShortcut": "For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
      "commonMistakes": [
        "Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Cayley-Hamilton",
      "Matrix Powers",
      "Inverse"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + k z &= 20 \\end{aligned}$$ The value of $k$ for which the system has infinitely many solutions is ________ (in integer).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 10",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (11) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (12) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + k z &= 20 \\end{aligned}$$ The value of $k$ for which the system has infinitely many solutions is ________ (in integer).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 10",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (11) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (12) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + k z &= 20 \\end{aligned}$$ The value of $k$ for which the system has infinitely many solutions is ________ (in integer).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 10",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (11) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (12) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + k z &= 20 \\end{aligned}$$ The value of $k$ for which the system has infinitely many solutions is ________ (in integer).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 10",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (11) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (12) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + k z &= 20 \\end{aligned}$$ The value of $k$ for which the system has infinitely many solutions is ________ (in integer).",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 10",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (11) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "Consider the system of linear equations: $$\\begin{aligned} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + (12) z &= b \\end{aligned}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
      "givenInformationAndAssumptions": [
        "System of 3 linear equations with unknown parameter."
      ],
      "relevantConcept": "A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3",
          "terms": [
            {
              "term": "\\text{rank}",
              "explanation": "Number of non-zero rows in row echelon form"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write down the augmented matrix $[A|b]$:",
        "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
        "Step 2: Apply elementary row operations:",
        "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
        "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
        "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
        "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
      ],
      "finalAnswerWithUnits": "Parameter value = 20",
      "alternativeApproachOrShortcut": "Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
      "commonMistakes": [
        "Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Linear Algebra",
      "System of Linear Equations",
      "Gaussian Elimination",
      "Rank"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 4$ has a rank equal to $2$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 4$",
        "Rank of $M$: $2$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 4$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 2$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 4 - 2 = 2$$."
      ],
      "finalAnswerWithUnits": "Nullity = 2",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 5$ has a rank equal to $3$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 5$",
        "Rank of $M$: $3$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 5$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 3$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 5 - 3 = 2$$."
      ],
      "finalAnswerWithUnits": "Nullity = 2",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 6$ has a rank equal to $2$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 6$",
        "Rank of $M$: $2$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 6$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 2$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 6 - 2 = 4$$."
      ],
      "finalAnswerWithUnits": "Nullity = 4",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 4$ has a rank equal to $3$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 4$",
        "Rank of $M$: $3$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 4$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 3$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 4 - 3 = 1$$."
      ],
      "finalAnswerWithUnits": "Nullity = 1",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 5$ has a rank equal to $2$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 5$",
        "Rank of $M$: $2$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 5$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 2$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 5 - 2 = 3$$."
      ],
      "finalAnswerWithUnits": "Nullity = 3",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 6$ has a rank equal to $3$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 6$",
        "Rank of $M$: $3$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 6$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 3$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 6 - 3 = 3$$."
      ],
      "finalAnswerWithUnits": "Nullity = 3",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 4$ has a rank equal to $2$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 4$",
        "Rank of $M$: $2$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 4$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 2$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 4 - 2 = 2$$."
      ],
      "finalAnswerWithUnits": "Nullity = 2",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 5$ has a rank equal to $3$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 5$",
        "Rank of $M$: $3$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 5$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 3$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 5 - 3 = 2$$."
      ],
      "finalAnswerWithUnits": "Nullity = 2",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 6$ has a rank equal to $2$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 6$",
        "Rank of $M$: $2$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 6$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 2$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 6 - 2 = 4$$."
      ],
      "finalAnswerWithUnits": "Nullity = 4",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 4$ has a rank equal to $3$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 4$",
        "Rank of $M$: $3$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 4$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 3$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 4 - 3 = 1$$."
      ],
      "finalAnswerWithUnits": "Nullity = 1",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 5$ has a rank equal to $2$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 5$",
        "Rank of $M$: $2$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 5$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 2$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 5 - 2 = 3$$."
      ],
      "finalAnswerWithUnits": "Nullity = 3",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 6$ has a rank equal to $3$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 6$",
        "Rank of $M$: $3$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 6$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 3$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 6 - 3 = 3$$."
      ],
      "finalAnswerWithUnits": "Nullity = 3",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 4$ has a rank equal to $2$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 4$",
        "Rank of $M$: $2$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 4$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 2$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 4 - 2 = 2$$."
      ],
      "finalAnswerWithUnits": "Nullity = 2",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 5$ has a rank equal to $3$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 5$",
        "Rank of $M$: $3$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 5$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 3$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 5 - 3 = 2$$."
      ],
      "finalAnswerWithUnits": "Nullity = 2",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Linear Algebra",
    "subject": "Engineering Mathematics",
    "topic": "Linear Algebra",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A real matrix $M$ of size $5 \\times 6$ has a rank equal to $2$. The dimension of the null space (nullity) of the matrix $M$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply the Rank-Nullity theorem to find the dimension of the null space.",
      "givenInformationAndAssumptions": [
        "Matrix size: $5 \\times 6$",
        "Rank of $M$: $2$"
      ],
      "relevantConcept": "Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{rank}(M) + \\text{nullity}(M) = n",
          "terms": [
            {
              "term": "n",
              "explanation": "Total number of columns in matrix M"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify number of columns $n = 6$.",
        "Step 2: Identify rank of matrix $\\text{rank}(M) = 2$.",
        "Step 3: According to the Rank-Nullity theorem:",
        "$$\\text{nullity}(M) = n - \\text{rank}(M) = 6 - 2 = 4$$."
      ],
      "finalAnswerWithUnits": "Nullity = 4",
      "alternativeApproachOrShortcut": "Nullity is the number of free variables in the solution space of $Mx = 0$.",
      "commonMistakes": [
        "Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Linear Algebra",
      "Rank-Nullity Theorem",
      "Null Space",
      "Dimension"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(2x)}{1x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(2x)}{1x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{2\\cos(2x)}{1} = \\frac{2\\cos(0)}{1} = \\frac{2}{1} = 2.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 2.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(3x)}{2x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.45,
      1.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(3x)}{2x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{3\\cos(3x)}{2} = \\frac{3\\cos(0)}{2} = \\frac{3}{2} = 1.5$$."
      ],
      "finalAnswerWithUnits": "Limit = 1.5",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(4x)}{3x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.28,
      1.38
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(4x)}{3x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{4\\cos(4x)}{3} = \\frac{4\\cos(0)}{3} = \\frac{4}{3} = 1.33$$."
      ],
      "finalAnswerWithUnits": "Limit = 1.33",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(5x)}{1x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(5x)}{1x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{5\\cos(5x)}{1} = \\frac{5\\cos(0)}{1} = \\frac{5}{1} = 5.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 5.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(6x)}{2x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(6x)}{2x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{6\\cos(6x)}{2} = \\frac{6\\cos(0)}{2} = \\frac{6}{2} = 3.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 3.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(2x)}{3x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.62,
      0.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(2x)}{3x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{2\\cos(2x)}{3} = \\frac{2\\cos(0)}{3} = \\frac{2}{3} = 0.67$$."
      ],
      "finalAnswerWithUnits": "Limit = 0.67",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(3x)}{1x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(3x)}{1x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{3\\cos(3x)}{1} = \\frac{3\\cos(0)}{1} = \\frac{3}{1} = 3.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 3.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(4x)}{2x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(4x)}{2x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{4\\cos(4x)}{2} = \\frac{4\\cos(0)}{2} = \\frac{4}{2} = 2.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 2.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(5x)}{3x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      1.62,
      1.72
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(5x)}{3x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{5\\cos(5x)}{3} = \\frac{5\\cos(0)}{3} = \\frac{5}{3} = 1.67$$."
      ],
      "finalAnswerWithUnits": "Limit = 1.67",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(6x)}{1x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(6x)}{1x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{6\\cos(6x)}{1} = \\frac{6\\cos(0)}{1} = \\frac{6}{1} = 6.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 6.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(2x)}{2x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(2x)}{2x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{2\\cos(2x)}{2} = \\frac{2\\cos(0)}{2} = \\frac{2}{2} = 1.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 1.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(3x)}{3x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(3x)}{3x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{3\\cos(3x)}{3} = \\frac{3\\cos(0)}{3} = \\frac{3}{3} = 1.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 1.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(4x)}{1x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(4x)}{1x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{4\\cos(4x)}{1} = \\frac{4\\cos(0)}{1} = \\frac{4}{1} = 4.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 4.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      2.45,
      2.55
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(5x)}{2x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{5\\cos(5x)}{2} = \\frac{5\\cos(0)}{2} = \\frac{5}{2} = 2.5$$."
      ],
      "finalAnswerWithUnits": "Limit = 2.5",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the limit: $$\\lim_{x \\to 0} \\frac{\\sin(6x)}{3x}$$ is ________ (answer in integer or rounded off to two decimal places).",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
      "givenInformationAndAssumptions": [
        "Function: $f(x) = \\frac{\\sin(6x)}{3x}$ as $x \\to 0$."
      ],
      "relevantConcept": "As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}",
          "terms": [
            {
              "term": "a, b",
              "explanation": "Coefficients of argument and denominator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Check form at $x=0$: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (indeterminate).",
        "Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
        "$$\\lim_{x \\to 0} \\frac{6\\cos(6x)}{3} = \\frac{6\\cos(0)}{3} = \\frac{6}{3} = 2.0$$."
      ],
      "finalAnswerWithUnits": "Limit = 2.0",
      "alternativeApproachOrShortcut": "Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
      "commonMistakes": [
        "Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Calculus",
      "Limits",
      "L'Hopital's Rule",
      "Trigonometric Limits"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 12x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 12x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 24x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 4) = 0$. Critical points are $x = 0$ and $x = 4$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 24$.",
        "Step 4: At $x = 0$: $f''(0) = -24 < 0$ (local maximum).",
        "Step 5: At $x = 4$: $f''(4) = 12(4) - 24 = 24 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 4$."
      ],
      "finalAnswerWithUnits": "x = 4",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 18x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 18x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 36x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 6) = 0$. Critical points are $x = 0$ and $x = 6$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 36$.",
        "Step 4: At $x = 0$: $f''(0) = -36 < 0$ (local maximum).",
        "Step 5: At $x = 6$: $f''(6) = 12(6) - 36 = 36 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 6$."
      ],
      "finalAnswerWithUnits": "x = 6",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 24x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 24x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 48x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 8) = 0$. Critical points are $x = 0$ and $x = 8$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 48$.",
        "Step 4: At $x = 0$: $f''(0) = -48 < 0$ (local maximum).",
        "Step 5: At $x = 8$: $f''(8) = 12(8) - 48 = 48 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 8$."
      ],
      "finalAnswerWithUnits": "x = 8",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 30x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 30x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 60x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 10) = 0$. Critical points are $x = 0$ and $x = 10$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 60$.",
        "Step 4: At $x = 0$: $f''(0) = -60 < 0$ (local maximum).",
        "Step 5: At $x = 10$: $f''(10) = 12(10) - 60 = 60 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 10$."
      ],
      "finalAnswerWithUnits": "x = 10",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 36x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "12",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 36x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 72x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 12) = 0$. Critical points are $x = 0$ and $x = 12$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 72$.",
        "Step 4: At $x = 0$: $f''(0) = -72 < 0$ (local maximum).",
        "Step 5: At $x = 12$: $f''(12) = 12(12) - 72 = 72 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 12$."
      ],
      "finalAnswerWithUnits": "x = 12",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 42x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "14",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 42x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 84x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 14) = 0$. Critical points are $x = 0$ and $x = 14$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 84$.",
        "Step 4: At $x = 0$: $f''(0) = -84 < 0$ (local maximum).",
        "Step 5: At $x = 14$: $f''(14) = 12(14) - 84 = 84 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 14$."
      ],
      "finalAnswerWithUnits": "x = 14",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 48x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "16",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 48x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 96x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 16) = 0$. Critical points are $x = 0$ and $x = 16$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 96$.",
        "Step 4: At $x = 0$: $f''(0) = -96 < 0$ (local maximum).",
        "Step 5: At $x = 16$: $f''(16) = 12(16) - 96 = 96 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 16$."
      ],
      "finalAnswerWithUnits": "x = 16",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 54x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "18",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 54x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 108x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 18) = 0$. Critical points are $x = 0$ and $x = 18$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 108$.",
        "Step 4: At $x = 0$: $f''(0) = -108 < 0$ (local maximum).",
        "Step 5: At $x = 18$: $f''(18) = 12(18) - 108 = 108 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 18$."
      ],
      "finalAnswerWithUnits": "x = 18",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 60x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 60x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 120x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 20) = 0$. Critical points are $x = 0$ and $x = 20$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 120$.",
        "Step 4: At $x = 0$: $f''(0) = -120 < 0$ (local maximum).",
        "Step 5: At $x = 20$: $f''(20) = 12(20) - 120 = 120 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 20$."
      ],
      "finalAnswerWithUnits": "x = 20",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 66x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "22",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 66x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 132x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 22) = 0$. Critical points are $x = 0$ and $x = 22$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 132$.",
        "Step 4: At $x = 0$: $f''(0) = -132 < 0$ (local maximum).",
        "Step 5: At $x = 22$: $f''(22) = 12(22) - 132 = 132 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 22$."
      ],
      "finalAnswerWithUnits": "x = 22",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 72x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "24",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 72x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 144x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 24) = 0$. Critical points are $x = 0$ and $x = 24$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 144$.",
        "Step 4: At $x = 0$: $f''(0) = -144 < 0$ (local maximum).",
        "Step 5: At $x = 24$: $f''(24) = 12(24) - 144 = 144 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 24$."
      ],
      "finalAnswerWithUnits": "x = 24",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 78x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "26",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 78x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 156x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 26) = 0$. Critical points are $x = 0$ and $x = 26$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 156$.",
        "Step 4: At $x = 0$: $f''(0) = -156 < 0$ (local maximum).",
        "Step 5: At $x = 26$: $f''(26) = 12(26) - 156 = 156 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 26$."
      ],
      "finalAnswerWithUnits": "x = 26",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 84x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "28",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 84x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 168x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 28) = 0$. Critical points are $x = 0$ and $x = 28$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 168$.",
        "Step 4: At $x = 0$: $f''(0) = -168 < 0$ (local maximum).",
        "Step 5: At $x = 28$: $f''(28) = 12(28) - 168 = 168 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 28$."
      ],
      "finalAnswerWithUnits": "x = 28",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 90x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 90x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 180x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 30) = 0$. Critical points are $x = 0$ and $x = 30$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 180$.",
        "Step 4: At $x = 0$: $f''(0) = -180 < 0$ (local maximum).",
        "Step 5: At $x = 30$: $f''(30) = 12(30) - 180 = 180 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 30$."
      ],
      "finalAnswerWithUnits": "x = 30",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The local minimum value of the function $f(x) = 2x^3 - 96x^2 + 5$ occurs at $x$ equal to ________.",
    "options": null,
    "officialAnswer": "32",
    "detailedSolution": {
      "understandingTheQuestion": "Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
      "givenInformationAndAssumptions": [
        "Function $f(x) = 2x^3 - 96x^2 + 5$."
      ],
      "relevantConcept": "A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f'(x) = 0, \\quad f''(x) > 0",
          "terms": [
            {
              "term": "f''(x)",
              "explanation": "Second derivative indicating curvature"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute first derivative: $f'(x) = 6x^2 - 192x$.",
        "Step 2: Set $f'(x) = 0 \\implies 6x(x - 32) = 0$. Critical points are $x = 0$ and $x = 32$.",
        "Step 3: Compute second derivative: $f''(x) = 12x - 192$.",
        "Step 4: At $x = 0$: $f''(0) = -192 < 0$ (local maximum).",
        "Step 5: At $x = 32$: $f''(32) = 12(32) - 192 = 192 > 0$ (local minimum).",
        "Therefore, the local minimum occurs at $x = 32$."
      ],
      "finalAnswerWithUnits": "x = 32",
      "alternativeApproachOrShortcut": "Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
      "commonMistakes": [
        "Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Maxima and Minima",
      "Second Derivative Test",
      "Optimization"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (1x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (1x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(1x^2 y) = 2x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 2x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 2(1)(1) + 2(1)(1) + 2(1)(1) = 2 + 2 + 2 = 6$$."
      ],
      "finalAnswerWithUnits": "Divergence = 6",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (2x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (2x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(2x^2 y) = 4x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 4x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 4(1)(1) + 2(1)(1) + 2(1)(1) = 4 + 2 + 2 = 8$$."
      ],
      "finalAnswerWithUnits": "Divergence = 8",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (3x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "10",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (3x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(3x^2 y) = 6x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 6x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 6(1)(1) + 2(1)(1) + 2(1)(1) = 6 + 2 + 2 = 10$$."
      ],
      "finalAnswerWithUnits": "Divergence = 10",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (4x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "12",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (4x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(4x^2 y) = 8x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 8x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 8(1)(1) + 2(1)(1) + 2(1)(1) = 8 + 2 + 2 = 12$$."
      ],
      "finalAnswerWithUnits": "Divergence = 12",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (5x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "14",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (5x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(5x^2 y) = 10x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 10x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 10(1)(1) + 2(1)(1) + 2(1)(1) = 10 + 2 + 2 = 14$$."
      ],
      "finalAnswerWithUnits": "Divergence = 14",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (6x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "16",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (6x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(6x^2 y) = 12x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 12x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 12(1)(1) + 2(1)(1) + 2(1)(1) = 12 + 2 + 2 = 16$$."
      ],
      "finalAnswerWithUnits": "Divergence = 16",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (7x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "18",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (7x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(7x^2 y) = 14x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 14x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 14(1)(1) + 2(1)(1) + 2(1)(1) = 14 + 2 + 2 = 18$$."
      ],
      "finalAnswerWithUnits": "Divergence = 18",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (8x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "20",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (8x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(8x^2 y) = 16x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 16x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 16(1)(1) + 2(1)(1) + 2(1)(1) = 16 + 2 + 2 = 20$$."
      ],
      "finalAnswerWithUnits": "Divergence = 20",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (9x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "22",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (9x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(9x^2 y) = 18x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 18x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 18(1)(1) + 2(1)(1) + 2(1)(1) = 18 + 2 + 2 = 22$$."
      ],
      "finalAnswerWithUnits": "Divergence = 22",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (10x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "24",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (10x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(10x^2 y) = 20x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 20x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 20(1)(1) + 2(1)(1) + 2(1)(1) = 20 + 2 + 2 = 24$$."
      ],
      "finalAnswerWithUnits": "Divergence = 24",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (11x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "26",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (11x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(11x^2 y) = 22x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 22x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 22(1)(1) + 2(1)(1) + 2(1)(1) = 22 + 2 + 2 = 26$$."
      ],
      "finalAnswerWithUnits": "Divergence = 26",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (12x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "28",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (12x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(12x^2 y) = 24x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 24x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 24(1)(1) + 2(1)(1) + 2(1)(1) = 24 + 2 + 2 = 28$$."
      ],
      "finalAnswerWithUnits": "Divergence = 28",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (13x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "30",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (13x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(13x^2 y) = 26x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 26x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 26(1)(1) + 2(1)(1) + 2(1)(1) = 26 + 2 + 2 = 30$$."
      ],
      "finalAnswerWithUnits": "Divergence = 30",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (14x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "32",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (14x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(14x^2 y) = 28x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 28x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 28(1)(1) + 2(1)(1) + 2(1)(1) = 28 + 2 + 2 = 32$$."
      ],
      "finalAnswerWithUnits": "Divergence = 32",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "A vector field is given by $\\vec{F} = (15x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$. The divergence of $\\vec{F}$ at the point $(1, 1, 1)$ is ________.",
    "options": null,
    "officialAnswer": "34",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the divergence of a 3D vector field at a specific coordinate point.",
      "givenInformationAndAssumptions": [
        "Vector field: $\\vec{F} = (15x^2 y)\\hat{i} + (y^2 z)\\hat{j} + (x z^2)\\hat{k}$",
        "Point: $(1, 1, 1)$"
      ],
      "relevantConcept": "The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}",
          "terms": [
            {
              "term": "\\nabla \\cdot",
              "explanation": "Divergence scalar operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $\\frac{\\partial F_x}{\\partial x} = \\frac{\\partial}{\\partial x}(15x^2 y) = 30x y$.",
        "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
        "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
        "Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{F} = 30x y + 2y z + 2x z$.",
        "Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
        "$$\\nabla \\cdot \\vec{F}(1,1,1) = 30(1)(1) + 2(1)(1) + 2(1)(1) = 30 + 2 + 2 = 34$$."
      ],
      "finalAnswerWithUnits": "Divergence = 34",
      "alternativeApproachOrShortcut": "Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
      "commonMistakes": [
        "Treating divergence as a vector quantity instead of a scalar field.",
        "Forgetting partial differentiation rules."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Calculus",
      "Vector Calculus",
      "Divergence",
      "Gradient"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $2$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $2$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $2$: $\\text{Area}(R) = \\pi (2)^2 = 4\\pi$.",
        "Step 6: Total integral $= 2 \\times 4\\pi = 8\\pi \\implies k = 8$."
      ],
      "finalAnswerWithUnits": "k = 8",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $3$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "18",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $3$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $3$: $\\text{Area}(R) = \\pi (3)^2 = 9\\pi$.",
        "Step 6: Total integral $= 2 \\times 9\\pi = 18\\pi \\implies k = 18$."
      ],
      "finalAnswerWithUnits": "k = 18",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $4$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "32",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $4$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $4$: $\\text{Area}(R) = \\pi (4)^2 = 16\\pi$.",
        "Step 6: Total integral $= 2 \\times 16\\pi = 32\\pi \\implies k = 32$."
      ],
      "finalAnswerWithUnits": "k = 32",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $5$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "50",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $5$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $5$: $\\text{Area}(R) = \\pi (5)^2 = 25\\pi$.",
        "Step 6: Total integral $= 2 \\times 25\\pi = 50\\pi \\implies k = 50$."
      ],
      "finalAnswerWithUnits": "k = 50",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $6$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "72",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $6$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $6$: $\\text{Area}(R) = \\pi (6)^2 = 36\\pi$.",
        "Step 6: Total integral $= 2 \\times 36\\pi = 72\\pi \\implies k = 72$."
      ],
      "finalAnswerWithUnits": "k = 72",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $7$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "98",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $7$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $7$: $\\text{Area}(R) = \\pi (7)^2 = 49\\pi$.",
        "Step 6: Total integral $= 2 \\times 49\\pi = 98\\pi \\implies k = 98$."
      ],
      "finalAnswerWithUnits": "k = 98",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $8$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "128",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $8$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $8$: $\\text{Area}(R) = \\pi (8)^2 = 64\\pi$.",
        "Step 6: Total integral $= 2 \\times 64\\pi = 128\\pi \\implies k = 128$."
      ],
      "finalAnswerWithUnits": "k = 128",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $9$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "162",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $9$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $9$: $\\text{Area}(R) = \\pi (9)^2 = 81\\pi$.",
        "Step 6: Total integral $= 2 \\times 81\\pi = 162\\pi \\implies k = 162$."
      ],
      "finalAnswerWithUnits": "k = 162",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $10$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "200",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $10$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $10$: $\\text{Area}(R) = \\pi (10)^2 = 100\\pi$.",
        "Step 6: Total integral $= 2 \\times 100\\pi = 200\\pi \\implies k = 200$."
      ],
      "finalAnswerWithUnits": "k = 200",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Calculus",
    "subject": "Engineering Mathematics",
    "topic": "Calculus",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius $11$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________.",
    "options": null,
    "officialAnswer": "242",
    "detailedSolution": {
      "understandingTheQuestion": "Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
      "givenInformationAndAssumptions": [
        "Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$",
        "Boundary $C$: Circle of radius $11$"
      ],
      "relevantConcept": "Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA",
          "terms": [
            {
              "term": "R",
              "explanation": "Region enclosed by contour C"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
        "Step 2: Compute partial derivatives:",
        "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
        "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
        "Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{Area}(R)$.",
        "Step 5: The region $R$ is a disc of radius $11$: $\\text{Area}(R) = \\pi (11)^2 = 121\\pi$.",
        "Step 6: Total integral $= 2 \\times 121\\pi = 242\\pi \\implies k = 242$."
      ],
      "finalAnswerWithUnits": "k = 242",
      "alternativeApproachOrShortcut": "Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
      "commonMistakes": [
        "Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Calculus",
      "Green's Theorem",
      "Line Integrals",
      "Double Integrals"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{1}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{1}$"
      },
      {
        "id": "B",
        "text": "$e^{1x}$"
      },
      {
        "id": "C",
        "text": "$1\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-1}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{1}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{1}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{1}{x}dx = 1\\ln(x) = \\ln(x^{1})$.",
        "Step 3: $I(x) = e^{\\ln(x^1)} = x^1$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{2}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{2}$"
      },
      {
        "id": "B",
        "text": "$e^{2x}$"
      },
      {
        "id": "C",
        "text": "$2\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{2}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{2}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{2}{x}dx = 2\\ln(x) = \\ln(x^{2})$.",
        "Step 3: $I(x) = e^{\\ln(x^2)} = x^2$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{3}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{3}$"
      },
      {
        "id": "B",
        "text": "$e^{3x}$"
      },
      {
        "id": "C",
        "text": "$3\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-3}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{3}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{3}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{3}{x}dx = 3\\ln(x) = \\ln(x^{3})$.",
        "Step 3: $I(x) = e^{\\ln(x^3)} = x^3$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{4}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{4}$"
      },
      {
        "id": "B",
        "text": "$e^{4x}$"
      },
      {
        "id": "C",
        "text": "$4\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-4}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{4}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{4}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{4}{x}dx = 4\\ln(x) = \\ln(x^{4})$.",
        "Step 3: $I(x) = e^{\\ln(x^4)} = x^4$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{5}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{5}$"
      },
      {
        "id": "B",
        "text": "$e^{5x}$"
      },
      {
        "id": "C",
        "text": "$5\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-5}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{5}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{5}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{5}{x}dx = 5\\ln(x) = \\ln(x^{5})$.",
        "Step 3: $I(x) = e^{\\ln(x^5)} = x^5$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{6}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{6}$"
      },
      {
        "id": "B",
        "text": "$e^{6x}$"
      },
      {
        "id": "C",
        "text": "$6\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-6}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{6}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{6}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{6}{x}dx = 6\\ln(x) = \\ln(x^{6})$.",
        "Step 3: $I(x) = e^{\\ln(x^6)} = x^6$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{7}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{7}$"
      },
      {
        "id": "B",
        "text": "$e^{7x}$"
      },
      {
        "id": "C",
        "text": "$7\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-7}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{7}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{7}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{7}{x}dx = 7\\ln(x) = \\ln(x^{7})$.",
        "Step 3: $I(x) = e^{\\ln(x^7)} = x^7$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{8}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{8}$"
      },
      {
        "id": "B",
        "text": "$e^{8x}$"
      },
      {
        "id": "C",
        "text": "$8\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-8}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{8}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{8}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{8}{x}dx = 8\\ln(x) = \\ln(x^{8})$.",
        "Step 3: $I(x) = e^{\\ln(x^8)} = x^8$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{9}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{9}$"
      },
      {
        "id": "B",
        "text": "$e^{9x}$"
      },
      {
        "id": "C",
        "text": "$9\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-9}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{9}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{9}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{9}{x}dx = 9\\ln(x) = \\ln(x^{9})$.",
        "Step 3: $I(x) = e^{\\ln(x^9)} = x^9$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{10}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{10}$"
      },
      {
        "id": "B",
        "text": "$e^{10x}$"
      },
      {
        "id": "C",
        "text": "$10\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-10}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{10}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{10}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{10}{x}dx = 10\\ln(x) = \\ln(x^{10})$.",
        "Step 3: $I(x) = e^{\\ln(x^10)} = x^10$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{11}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{11}$"
      },
      {
        "id": "B",
        "text": "$e^{11x}$"
      },
      {
        "id": "C",
        "text": "$11\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-11}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{11}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{11}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{11}{x}dx = 11\\ln(x) = \\ln(x^{11})$.",
        "Step 3: $I(x) = e^{\\ln(x^11)} = x^11$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{12}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{12}$"
      },
      {
        "id": "B",
        "text": "$e^{12x}$"
      },
      {
        "id": "C",
        "text": "$12\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-12}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{12}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{12}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{12}{x}dx = 12\\ln(x) = \\ln(x^{12})$.",
        "Step 3: $I(x) = e^{\\ln(x^12)} = x^12$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{13}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{13}$"
      },
      {
        "id": "B",
        "text": "$e^{13x}$"
      },
      {
        "id": "C",
        "text": "$13\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-13}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{13}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{13}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{13}{x}dx = 13\\ln(x) = \\ln(x^{13})$.",
        "Step 3: $I(x) = e^{\\ln(x^13)} = x^13$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{14}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{14}$"
      },
      {
        "id": "B",
        "text": "$e^{14x}$"
      },
      {
        "id": "C",
        "text": "$14\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-14}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{14}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{14}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{14}{x}dx = 14\\ln(x) = \\ln(x^{14})$.",
        "Step 3: $I(x) = e^{\\ln(x^14)} = x^14$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The integrating factor for the first-order linear differential equation: $$\\frac{dy}{dx} + \\frac{15}{x}y = x^2 \\quad (x > 0)$$ is:",
    "options": [
      {
        "id": "A",
        "text": "$x^{15}$"
      },
      {
        "id": "B",
        "text": "$e^{15x}$"
      },
      {
        "id": "C",
        "text": "$15\\ln(x)$"
      },
      {
        "id": "D",
        "text": "$x^{-15}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
      "givenInformationAndAssumptions": [
        "$P(x) = \\frac{15}{x}$",
        "$Q(x) = x^2$"
      ],
      "relevantConcept": "For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k",
          "terms": [
            {
              "term": "I(x)",
              "explanation": "Integrating factor"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify $P(x) = \\frac{15}{x}$.",
        "Step 2: Compute $\\int P(x)dx = \\int \\frac{15}{x}dx = 15\\ln(x) = \\ln(x^{15})$.",
        "Step 3: $I(x) = e^{\\ln(x^15)} = x^15$.",
        "Therefore, the integrating factor is Option A."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
      "commonMistakes": [
        "Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Integrating Factor",
      "First Order ODE",
      "Linear ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 4 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{4}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 4y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 4 = 0 \\implies r = \\pm j2$.",
        "Step 2: General solution is $y(t) = C_1\\cos(2t) + C_2\\sin(2t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(2)\\sin(2t) + C_2(2)\\cos(2t)$.",
        "Apply $y'(0) = 0 \\implies C_2(2) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(2t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{4}$:",
        "$$y\\left(\\frac{\\pi}{4}\\right) = 2\\cos\\left(2 \\cdot \\frac{\\pi}{4}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 9 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{6}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 9y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 9 = 0 \\implies r = \\pm j3$.",
        "Step 2: General solution is $y(t) = C_1\\cos(3t) + C_2\\sin(3t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(3)\\sin(3t) + C_2(3)\\cos(3t)$.",
        "Apply $y'(0) = 0 \\implies C_2(3) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(3t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{6}$:",
        "$$y\\left(\\frac{\\pi}{6}\\right) = 2\\cos\\left(3 \\cdot \\frac{\\pi}{6}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 16 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{8}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 16y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 16 = 0 \\implies r = \\pm j4$.",
        "Step 2: General solution is $y(t) = C_1\\cos(4t) + C_2\\sin(4t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(4)\\sin(4t) + C_2(4)\\cos(4t)$.",
        "Apply $y'(0) = 0 \\implies C_2(4) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(4t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{8}$:",
        "$$y\\left(\\frac{\\pi}{8}\\right) = 2\\cos\\left(4 \\cdot \\frac{\\pi}{8}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 25 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{10}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 25y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 25 = 0 \\implies r = \\pm j5$.",
        "Step 2: General solution is $y(t) = C_1\\cos(5t) + C_2\\sin(5t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(5)\\sin(5t) + C_2(5)\\cos(5t)$.",
        "Apply $y'(0) = 0 \\implies C_2(5) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(5t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{10}$:",
        "$$y\\left(\\frac{\\pi}{10}\\right) = 2\\cos\\left(5 \\cdot \\frac{\\pi}{10}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 36 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{12}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 36y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 36 = 0 \\implies r = \\pm j6$.",
        "Step 2: General solution is $y(t) = C_1\\cos(6t) + C_2\\sin(6t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(6)\\sin(6t) + C_2(6)\\cos(6t)$.",
        "Apply $y'(0) = 0 \\implies C_2(6) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(6t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{12}$:",
        "$$y\\left(\\frac{\\pi}{12}\\right) = 2\\cos\\left(6 \\cdot \\frac{\\pi}{12}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 49 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{14}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 49y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 49 = 0 \\implies r = \\pm j7$.",
        "Step 2: General solution is $y(t) = C_1\\cos(7t) + C_2\\sin(7t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(7)\\sin(7t) + C_2(7)\\cos(7t)$.",
        "Apply $y'(0) = 0 \\implies C_2(7) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(7t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{14}$:",
        "$$y\\left(\\frac{\\pi}{14}\\right) = 2\\cos\\left(7 \\cdot \\frac{\\pi}{14}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 64 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{16}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 64y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 64 = 0 \\implies r = \\pm j8$.",
        "Step 2: General solution is $y(t) = C_1\\cos(8t) + C_2\\sin(8t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(8)\\sin(8t) + C_2(8)\\cos(8t)$.",
        "Apply $y'(0) = 0 \\implies C_2(8) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(8t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{16}$:",
        "$$y\\left(\\frac{\\pi}{16}\\right) = 2\\cos\\left(8 \\cdot \\frac{\\pi}{16}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 81 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{18}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 81y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 81 = 0 \\implies r = \\pm j9$.",
        "Step 2: General solution is $y(t) = C_1\\cos(9t) + C_2\\sin(9t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(9)\\sin(9t) + C_2(9)\\cos(9t)$.",
        "Apply $y'(0) = 0 \\implies C_2(9) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(9t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{18}$:",
        "$$y\\left(\\frac{\\pi}{18}\\right) = 2\\cos\\left(9 \\cdot \\frac{\\pi}{18}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 100 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{20}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 100y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 100 = 0 \\implies r = \\pm j10$.",
        "Step 2: General solution is $y(t) = C_1\\cos(10t) + C_2\\sin(10t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(10)\\sin(10t) + C_2(10)\\cos(10t)$.",
        "Apply $y'(0) = 0 \\implies C_2(10) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(10t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{20}$:",
        "$$y\\left(\\frac{\\pi}{20}\\right) = 2\\cos\\left(10 \\cdot \\frac{\\pi}{20}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 121 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{22}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 121y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 121 = 0 \\implies r = \\pm j11$.",
        "Step 2: General solution is $y(t) = C_1\\cos(11t) + C_2\\sin(11t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(11)\\sin(11t) + C_2(11)\\cos(11t)$.",
        "Apply $y'(0) = 0 \\implies C_2(11) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(11t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{22}$:",
        "$$y\\left(\\frac{\\pi}{22}\\right) = 2\\cos\\left(11 \\cdot \\frac{\\pi}{22}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 144 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{24}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 144y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 144 = 0 \\implies r = \\pm j12$.",
        "Step 2: General solution is $y(t) = C_1\\cos(12t) + C_2\\sin(12t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(12)\\sin(12t) + C_2(12)\\cos(12t)$.",
        "Apply $y'(0) = 0 \\implies C_2(12) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(12t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{24}$:",
        "$$y\\left(\\frac{\\pi}{24}\\right) = 2\\cos\\left(12 \\cdot \\frac{\\pi}{24}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 169 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{26}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 169y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 169 = 0 \\implies r = \\pm j13$.",
        "Step 2: General solution is $y(t) = C_1\\cos(13t) + C_2\\sin(13t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(13)\\sin(13t) + C_2(13)\\cos(13t)$.",
        "Apply $y'(0) = 0 \\implies C_2(13) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(13t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{26}$:",
        "$$y\\left(\\frac{\\pi}{26}\\right) = 2\\cos\\left(13 \\cdot \\frac{\\pi}{26}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 196 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{28}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 196y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 196 = 0 \\implies r = \\pm j14$.",
        "Step 2: General solution is $y(t) = C_1\\cos(14t) + C_2\\sin(14t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(14)\\sin(14t) + C_2(14)\\cos(14t)$.",
        "Apply $y'(0) = 0 \\implies C_2(14) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(14t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{28}$:",
        "$$y\\left(\\frac{\\pi}{28}\\right) = 2\\cos\\left(14 \\cdot \\frac{\\pi}{28}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 225 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{30}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 225y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 225 = 0 \\implies r = \\pm j15$.",
        "Step 2: General solution is $y(t) = C_1\\cos(15t) + C_2\\sin(15t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(15)\\sin(15t) + C_2(15)\\cos(15t)$.",
        "Apply $y'(0) = 0 \\implies C_2(15) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(15t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{30}$:",
        "$$y\\left(\\frac{\\pi}{30}\\right) = 2\\cos\\left(15 \\cdot \\frac{\\pi}{30}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the differential equation: $$\\frac{d^2 y}{dt^2} + 256 y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{dy}{dt}\\right|_{t=0} = 0$. The value of $y\\left(\\frac{\\pi}{32}\\right)$ is ________.",
    "options": null,
    "officialAnswer": "0",
    "detailedSolution": {
      "understandingTheQuestion": "Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
      "givenInformationAndAssumptions": [
        "$\\ddot{y} + 256y = 0$",
        "$y(0) = 2$",
        "$\\dot{y}(0) = 0$"
      ],
      "relevantConcept": "The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)",
          "terms": [
            {
              "term": "\\omega_0",
              "explanation": "Natural angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Characteristic equation is $r^2 + 256 = 0 \\implies r = \\pm j16$.",
        "Step 2: General solution is $y(t) = C_1\\cos(16t) + C_2\\sin(16t)$.",
        "Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
        "Step 4: Compute derivative: $y'(t) = -2(16)\\sin(16t) + C_2(16)\\cos(16t)$.",
        "Apply $y'(0) = 0 \\implies C_2(16) = 0 \\implies C_2 = 0$.",
        "Step 5: Thus, $y(t) = 2\\cos(16t)$.",
        "Step 6: Evaluate at $t = \\frac{\\pi}{32}$:",
        "$$y\\left(\\frac{\\pi}{32}\\right) = 2\\cos\\left(16 \\cdot \\frac{\\pi}{32}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2(0) = 0$$."
      ],
      "finalAnswerWithUnits": "0",
      "alternativeApproachOrShortcut": "Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
      "commonMistakes": [
        "Confusing sine and cosine terms from the initial velocity condition."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Differential Equations",
      "Second Order ODE",
      "Initial Value Problem",
      "Harmonic Oscillator"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{1x}$ (where $1 \\ne 2$) is given by $k e^{1x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{-3}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{-1}$"
      },
      {
        "id": "C",
        "text": "$\\frac{1}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{7}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{1x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{1x}$.",
        "Step 2: Substitute $D = 1$ into $f(D) = D^2 - 4$:",
        "$$f(1) = (1)^2 - 4 = -3$$.",
        "Step 3: Hence, $y_p = \\frac{1}{-3}e^{1x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of $\\frac{d^2 y}{dx^2} - 4y = e^{2x}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{x e^{2x}}{4}$"
      },
      {
        "id": "B",
        "text": "$\\frac{e^{2x}}{4}$"
      },
      {
        "id": "C",
        "text": "$\\frac{x^2 e^{2x}}{2}$"
      },
      {
        "id": "D",
        "text": "$x e^{2x}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{2x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{2x}$.",
        "Step 2: Substitute $D = 2$ into $f(D) = D^2 - 4$:",
        "Since $f(2) = 0$, apply resonance rule: $y_p = x \\frac{1}{2D}e^{2x} = \\frac{x e^{2x}}{4}$.",
        "Hence, $y_p = \\frac{x e^{2x}}{4}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{3x}$ (where $3 \\ne 2$) is given by $k e^{3x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{5}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{1}$"
      },
      {
        "id": "C",
        "text": "$\\frac{3}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{5}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{3x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{3x}$.",
        "Step 2: Substitute $D = 3$ into $f(D) = D^2 - 4$:",
        "$$f(3) = (3)^2 - 4 = 5$$.",
        "Step 3: Hence, $y_p = \\frac{1}{5}e^{3x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{4x}$ (where $4 \\ne 2$) is given by $k e^{4x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{12}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{4}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{4x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{4x}$.",
        "Step 2: Substitute $D = 4$ into $f(D) = D^2 - 4$:",
        "$$f(4) = (4)^2 - 4 = 12$$.",
        "Step 3: Hence, $y_p = \\frac{1}{12}e^{4x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{5x}$ (where $5 \\ne 2$) is given by $k e^{5x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{21}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{3}$"
      },
      {
        "id": "C",
        "text": "$\\frac{5}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{3}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{5x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{5x}$.",
        "Step 2: Substitute $D = 5$ into $f(D) = D^2 - 4$:",
        "$$f(5) = (5)^2 - 4 = 21$$.",
        "Step 3: Hence, $y_p = \\frac{1}{21}e^{5x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{6x}$ (where $6 \\ne 2$) is given by $k e^{6x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{32}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{4}$"
      },
      {
        "id": "C",
        "text": "$\\frac{6}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{0}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{6x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{6x}$.",
        "Step 2: Substitute $D = 6$ into $f(D) = D^2 - 4$:",
        "$$f(6) = (6)^2 - 4 = 32$$.",
        "Step 3: Hence, $y_p = \\frac{1}{32}e^{6x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{7x}$ (where $7 \\ne 2$) is given by $k e^{7x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{45}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{5}$"
      },
      {
        "id": "C",
        "text": "$\\frac{7}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{1}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{7x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{7x}$.",
        "Step 2: Substitute $D = 7$ into $f(D) = D^2 - 4$:",
        "$$f(7) = (7)^2 - 4 = 45$$.",
        "Step 3: Hence, $y_p = \\frac{1}{45}e^{7x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{8x}$ (where $8 \\ne 2$) is given by $k e^{8x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{60}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{6}$"
      },
      {
        "id": "C",
        "text": "$\\frac{8}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{14}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{8x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{8x}$.",
        "Step 2: Substitute $D = 8$ into $f(D) = D^2 - 4$:",
        "$$f(8) = (8)^2 - 4 = 60$$.",
        "Step 3: Hence, $y_p = \\frac{1}{60}e^{8x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{9x}$ (where $9 \\ne 2$) is given by $k e^{9x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{77}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{7}$"
      },
      {
        "id": "C",
        "text": "$\\frac{9}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{15}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{9x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{9x}$.",
        "Step 2: Substitute $D = 9$ into $f(D) = D^2 - 4$:",
        "$$f(9) = (9)^2 - 4 = 77$$.",
        "Step 3: Hence, $y_p = \\frac{1}{77}e^{9x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{10x}$ (where $10 \\ne 2$) is given by $k e^{10x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{96}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{8}$"
      },
      {
        "id": "C",
        "text": "$\\frac{10}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{12}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{10x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{10x}$.",
        "Step 2: Substitute $D = 10$ into $f(D) = D^2 - 4$:",
        "$$f(10) = (10)^2 - 4 = 96$$.",
        "Step 3: Hence, $y_p = \\frac{1}{96}e^{10x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{11x}$ (where $11 \\ne 2$) is given by $k e^{11x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{117}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{9}$"
      },
      {
        "id": "C",
        "text": "$\\frac{11}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{13}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{11x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{11x}$.",
        "Step 2: Substitute $D = 11$ into $f(D) = D^2 - 4$:",
        "$$f(11) = (11)^2 - 4 = 117$$.",
        "Step 3: Hence, $y_p = \\frac{1}{117}e^{11x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{12x}$ (where $12 \\ne 2$) is given by $k e^{12x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{140}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{10}$"
      },
      {
        "id": "C",
        "text": "$\\frac{12}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{10}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{12x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{12x}$.",
        "Step 2: Substitute $D = 12$ into $f(D) = D^2 - 4$:",
        "$$f(12) = (12)^2 - 4 = 140$$.",
        "Step 3: Hence, $y_p = \\frac{1}{140}e^{12x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{13x}$ (where $13 \\ne 2$) is given by $k e^{13x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{165}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{11}$"
      },
      {
        "id": "C",
        "text": "$\\frac{13}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{11}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{13x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{13x}$.",
        "Step 2: Substitute $D = 13$ into $f(D) = D^2 - 4$:",
        "$$f(13) = (13)^2 - 4 = 165$$.",
        "Step 3: Hence, $y_p = \\frac{1}{165}e^{13x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{14x}$ (where $14 \\ne 2$) is given by $k e^{14x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{192}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{12}$"
      },
      {
        "id": "C",
        "text": "$\\frac{14}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{8}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{14x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{14x}$.",
        "Step 2: Substitute $D = 14$ into $f(D) = D^2 - 4$:",
        "$$f(14) = (14)^2 - 4 = 192$$.",
        "Step 3: Hence, $y_p = \\frac{1}{192}e^{14x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A particular integral of the differential equation $\\frac{d^2 y}{dx^2} - 4y = e^{15x}$ (where $15 \\ne 2$) is given by $k e^{15x}$. The value of $k$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{221}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{13}$"
      },
      {
        "id": "C",
        "text": "$\\frac{15}{4}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{9}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the particular integral using inverse differential operators.",
      "givenInformationAndAssumptions": [
        "Equation: $(D^2 - 4)y = e^{15x}$"
      ],
      "relevantConcept": "For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}",
          "terms": [
            {
              "term": "f(D)",
              "explanation": "Differential polynomial operator"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write equation in operator form: $(D^2 - 4)y = e^{15x}$.",
        "Step 2: Substitute $D = 15$ into $f(D) = D^2 - 4$:",
        "$$f(15) = (15)^2 - 4 = 221$$.",
        "Step 3: Hence, $y_p = \\frac{1}{221}e^{15x}$."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
      "commonMistakes": [
        "Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Particular Integral",
      "Operator Method",
      "Non-homogeneous ODE"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 1$), the value of $\\lambda_{1}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 1$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 1$, $\\lambda_{1} = (1)^2 \\pi^2 = 1\\pi^2 \\implies k = 1$."
      ],
      "finalAnswerWithUnits": "k = 1",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 2$), the value of $\\lambda_{2}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 2$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 2$, $\\lambda_{2} = (2)^2 \\pi^2 = 4\\pi^2 \\implies k = 4$."
      ],
      "finalAnswerWithUnits": "k = 4",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 3$), the value of $\\lambda_{3}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "9",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 3$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 3$, $\\lambda_{3} = (3)^2 \\pi^2 = 9\\pi^2 \\implies k = 9$."
      ],
      "finalAnswerWithUnits": "k = 9",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 4$), the value of $\\lambda_{4}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "16",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 4$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 4$, $\\lambda_{4} = (4)^2 \\pi^2 = 16\\pi^2 \\implies k = 16$."
      ],
      "finalAnswerWithUnits": "k = 16",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 5$), the value of $\\lambda_{5}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "25",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 5$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 5$, $\\lambda_{5} = (5)^2 \\pi^2 = 25\\pi^2 \\implies k = 25$."
      ],
      "finalAnswerWithUnits": "k = 25",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 6$), the value of $\\lambda_{6}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "36",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 6$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 6$, $\\lambda_{6} = (6)^2 \\pi^2 = 36\\pi^2 \\implies k = 36$."
      ],
      "finalAnswerWithUnits": "k = 36",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 7$), the value of $\\lambda_{7}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "49",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 7$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 7$, $\\lambda_{7} = (7)^2 \\pi^2 = 49\\pi^2 \\implies k = 49$."
      ],
      "finalAnswerWithUnits": "k = 49",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 8$), the value of $\\lambda_{8}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "64",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 8$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 8$, $\\lambda_{8} = (8)^2 \\pi^2 = 64\\pi^2 \\implies k = 64$."
      ],
      "finalAnswerWithUnits": "k = 64",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 9$), the value of $\\lambda_{9}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "81",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 9$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 9$, $\\lambda_{9} = (9)^2 \\pi^2 = 81\\pi^2 \\implies k = 81$."
      ],
      "finalAnswerWithUnits": "k = 81",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Differential Equations",
    "subject": "Engineering Mathematics",
    "topic": "Differential Equations",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the boundary value problem: $$\\frac{d^2 y}{dx^2} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = 10$), the value of $\\lambda_{10}$ is $k\\pi^2$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "100",
    "detailedSolution": {
      "understandingTheQuestion": "Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
      "givenInformationAndAssumptions": [
        "$y'' + \\lambda y = 0$",
        "$y(0) = 0$",
        "$y(1) = 0$",
        "Mode index: $n = 10$"
      ],
      "relevantConcept": "For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2",
          "terms": [
            {
              "term": "L",
              "explanation": "Domain length = 1"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
        "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
        "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
        "Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
        "Step 5: For mode $n = 10$, $\\lambda_{10} = (10)^2 \\pi^2 = 100\\pi^2 \\implies k = 100$."
      ],
      "finalAnswerWithUnits": "k = 100",
      "alternativeApproachOrShortcut": "Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
      "commonMistakes": [
        "Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Differential Equations",
      "Boundary Value Problems",
      "Sturm-Liouville",
      "Eigenvalues"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 1x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 1y$"
      },
      {
        "id": "B",
        "text": "$2xy - 1y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 1y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 1x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 1x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 1, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 1$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 1)dy = 2xy + 1y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 1y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 2x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 2y$"
      },
      {
        "id": "B",
        "text": "$2xy - 2y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 2y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 2x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 2x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 2, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 2$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 2)dy = 2xy + 2y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 2y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 3x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 3y$"
      },
      {
        "id": "B",
        "text": "$2xy - 3y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 3y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 3x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 3x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 3, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 3$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 3)dy = 2xy + 3y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 3y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 4x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 4y$"
      },
      {
        "id": "B",
        "text": "$2xy - 4y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 4y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 4x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 4x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 4, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 4$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 4)dy = 2xy + 4y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 4y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 5x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 5y$"
      },
      {
        "id": "B",
        "text": "$2xy - 5y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 5y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 5x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 5x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 5, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 5$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 5)dy = 2xy + 5y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 5y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 6x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 6y$"
      },
      {
        "id": "B",
        "text": "$2xy - 6y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 6y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 6x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 6x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 6, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 6$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 6)dy = 2xy + 6y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 6y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 7x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 7y$"
      },
      {
        "id": "B",
        "text": "$2xy - 7y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 7y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 7x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 7x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 7, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 7$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 7)dy = 2xy + 7y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 7y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 8x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 8y$"
      },
      {
        "id": "B",
        "text": "$2xy - 8y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 8y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 8x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 8x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 8, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 8$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 8)dy = 2xy + 8y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 8y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 9x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 9y$"
      },
      {
        "id": "B",
        "text": "$2xy - 9y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 9y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 9x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 9x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 9, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 9$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 9)dy = 2xy + 9y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 9y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 10x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 10y$"
      },
      {
        "id": "B",
        "text": "$2xy - 10y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 10y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 10x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 10x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 10, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 10$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 10)dy = 2xy + 10y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 10y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 11x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 11y$"
      },
      {
        "id": "B",
        "text": "$2xy - 11y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 11y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 11x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 11x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 11, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 11$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 11)dy = 2xy + 11y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 11y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 12x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 12y$"
      },
      {
        "id": "B",
        "text": "$2xy - 12y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 12y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 12x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 12x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 12, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 12$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 12)dy = 2xy + 12y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 12y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 13x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 13y$"
      },
      {
        "id": "B",
        "text": "$2xy - 13y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 13y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 13x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 13x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 13, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 13$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 13)dy = 2xy + 13y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 13y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 14x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 14y$"
      },
      {
        "id": "B",
        "text": "$2xy - 14y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 14y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 14x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 14x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 14, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 14$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 14)dy = 2xy + 14y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 14y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "If the function $f(z) = (x^2 - y^2 + 15x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:",
    "options": [
      {
        "id": "A",
        "text": "$2xy + 15y$"
      },
      {
        "id": "B",
        "text": "$2xy - 15y$"
      },
      {
        "id": "C",
        "text": "$x^2 - 15y$"
      },
      {
        "id": "D",
        "text": "$-2xy + 15x$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
      "givenInformationAndAssumptions": [
        "$u(x, y) = x^2 - y^2 + 15x$",
        "$v(0, 0) = 0$"
      ],
      "relevantConcept": "The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}",
          "terms": [
            {
              "term": "u, v",
              "explanation": "Real and imaginary parts of f(z)"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute partial derivatives of $u$:",
        "$\\frac{\\partial u}{\\partial x} = 2x + 15, \\quad \\frac{\\partial u}{\\partial y} = -2y$.",
        "Step 2: Using the first C-R equation:",
        "$\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 15$.",
        "Step 3: Integrate with respect to $y$:",
        "$v(x, y) = \\int (2x + 15)dy = 2xy + 15y + g(x)$.",
        "Step 4: Using the second C-R equation:",
        "$\\frac{\\partial v}{\\partial x} = 2y + g'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
        "Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
        "Thus, $v(x, y) = 2xy + 15y$ (Option A)."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
      "commonMistakes": [
        "Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy-Riemann Equations",
      "Analytic Functions",
      "Harmonic Conjugate"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 1)}dz$$ along the counter-clockwise circle $C: |z| = 2$ is $k\\pi j e^{2}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 1}$",
        "Contour: $|z| = 2$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 1$.",
        "Step 2: Check if $z = 1$ lies inside $C: |z| = 2$. Since $|1| = 1 < 2$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 1}dz = 2\\pi j f(1) = 2\\pi j e^{2(1)} = 2\\pi j e^{2}$$.",
        "Step 5: Comparing with $k\\pi j e^{2}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 2)}dz$$ along the counter-clockwise circle $C: |z| = 3$ is $k\\pi j e^{4}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 2}$",
        "Contour: $|z| = 3$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 2$.",
        "Step 2: Check if $z = 2$ lies inside $C: |z| = 3$. Since $|2| = 2 < 3$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 2}dz = 2\\pi j f(2) = 2\\pi j e^{2(2)} = 2\\pi j e^{4}$$.",
        "Step 5: Comparing with $k\\pi j e^{4}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 3)}dz$$ along the counter-clockwise circle $C: |z| = 4$ is $k\\pi j e^{6}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 3}$",
        "Contour: $|z| = 4$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 3$.",
        "Step 2: Check if $z = 3$ lies inside $C: |z| = 4$. Since $|3| = 3 < 4$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 3}dz = 2\\pi j f(3) = 2\\pi j e^{2(3)} = 2\\pi j e^{6}$$.",
        "Step 5: Comparing with $k\\pi j e^{6}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 1)}dz$$ along the counter-clockwise circle $C: |z| = 2$ is $k\\pi j e^{2}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 1}$",
        "Contour: $|z| = 2$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 1$.",
        "Step 2: Check if $z = 1$ lies inside $C: |z| = 2$. Since $|1| = 1 < 2$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 1}dz = 2\\pi j f(1) = 2\\pi j e^{2(1)} = 2\\pi j e^{2}$$.",
        "Step 5: Comparing with $k\\pi j e^{2}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 2)}dz$$ along the counter-clockwise circle $C: |z| = 3$ is $k\\pi j e^{4}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 2}$",
        "Contour: $|z| = 3$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 2$.",
        "Step 2: Check if $z = 2$ lies inside $C: |z| = 3$. Since $|2| = 2 < 3$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 2}dz = 2\\pi j f(2) = 2\\pi j e^{2(2)} = 2\\pi j e^{4}$$.",
        "Step 5: Comparing with $k\\pi j e^{4}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 3)}dz$$ along the counter-clockwise circle $C: |z| = 4$ is $k\\pi j e^{6}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 3}$",
        "Contour: $|z| = 4$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 3$.",
        "Step 2: Check if $z = 3$ lies inside $C: |z| = 4$. Since $|3| = 3 < 4$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 3}dz = 2\\pi j f(3) = 2\\pi j e^{2(3)} = 2\\pi j e^{6}$$.",
        "Step 5: Comparing with $k\\pi j e^{6}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 1)}dz$$ along the counter-clockwise circle $C: |z| = 2$ is $k\\pi j e^{2}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 1}$",
        "Contour: $|z| = 2$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 1$.",
        "Step 2: Check if $z = 1$ lies inside $C: |z| = 2$. Since $|1| = 1 < 2$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 1}dz = 2\\pi j f(1) = 2\\pi j e^{2(1)} = 2\\pi j e^{2}$$.",
        "Step 5: Comparing with $k\\pi j e^{2}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 2)}dz$$ along the counter-clockwise circle $C: |z| = 3$ is $k\\pi j e^{4}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 2}$",
        "Contour: $|z| = 3$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 2$.",
        "Step 2: Check if $z = 2$ lies inside $C: |z| = 3$. Since $|2| = 2 < 3$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 2}dz = 2\\pi j f(2) = 2\\pi j e^{2(2)} = 2\\pi j e^{4}$$.",
        "Step 5: Comparing with $k\\pi j e^{4}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 3)}dz$$ along the counter-clockwise circle $C: |z| = 4$ is $k\\pi j e^{6}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 3}$",
        "Contour: $|z| = 4$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 3$.",
        "Step 2: Check if $z = 3$ lies inside $C: |z| = 4$. Since $|3| = 3 < 4$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 3}dz = 2\\pi j f(3) = 2\\pi j e^{2(3)} = 2\\pi j e^{6}$$.",
        "Step 5: Comparing with $k\\pi j e^{6}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 1)}dz$$ along the counter-clockwise circle $C: |z| = 2$ is $k\\pi j e^{2}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 1}$",
        "Contour: $|z| = 2$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 1$.",
        "Step 2: Check if $z = 1$ lies inside $C: |z| = 2$. Since $|1| = 1 < 2$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 1}dz = 2\\pi j f(1) = 2\\pi j e^{2(1)} = 2\\pi j e^{2}$$.",
        "Step 5: Comparing with $k\\pi j e^{2}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 2)}dz$$ along the counter-clockwise circle $C: |z| = 3$ is $k\\pi j e^{4}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 2}$",
        "Contour: $|z| = 3$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 2$.",
        "Step 2: Check if $z = 2$ lies inside $C: |z| = 3$. Since $|2| = 2 < 3$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 2}dz = 2\\pi j f(2) = 2\\pi j e^{2(2)} = 2\\pi j e^{4}$$.",
        "Step 5: Comparing with $k\\pi j e^{4}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 3)}dz$$ along the counter-clockwise circle $C: |z| = 4$ is $k\\pi j e^{6}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 3}$",
        "Contour: $|z| = 4$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 3$.",
        "Step 2: Check if $z = 3$ lies inside $C: |z| = 4$. Since $|3| = 3 < 4$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 3}dz = 2\\pi j f(3) = 2\\pi j e^{2(3)} = 2\\pi j e^{6}$$.",
        "Step 5: Comparing with $k\\pi j e^{6}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 1)}dz$$ along the counter-clockwise circle $C: |z| = 2$ is $k\\pi j e^{2}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 1}$",
        "Contour: $|z| = 2$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 1$.",
        "Step 2: Check if $z = 1$ lies inside $C: |z| = 2$. Since $|1| = 1 < 2$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 1}dz = 2\\pi j f(1) = 2\\pi j e^{2(1)} = 2\\pi j e^{2}$$.",
        "Step 5: Comparing with $k\\pi j e^{2}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 2)}dz$$ along the counter-clockwise circle $C: |z| = 3$ is $k\\pi j e^{4}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 2}$",
        "Contour: $|z| = 3$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 2$.",
        "Step 2: Check if $z = 2$ lies inside $C: |z| = 3$. Since $|2| = 2 < 3$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 2}dz = 2\\pi j f(2) = 2\\pi j e^{2(2)} = 2\\pi j e^{4}$$.",
        "Step 5: Comparing with $k\\pi j e^{4}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 3)}dz$$ along the counter-clockwise circle $C: |z| = 4$ is $k\\pi j e^{6}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 3}$",
        "Contour: $|z| = 4$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 3$.",
        "Step 2: Check if $z = 3$ lies inside $C: |z| = 4$. Since $|3| = 3 < 4$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 3}dz = 2\\pi j f(3) = 2\\pi j e^{2(3)} = 2\\pi j e^{6}$$.",
        "Step 5: Comparing with $k\\pi j e^{6}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 1)}dz$$ along the counter-clockwise circle $C: |z| = 2$ is $k\\pi j e^{2}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 1}$",
        "Contour: $|z| = 2$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 1$.",
        "Step 2: Check if $z = 1$ lies inside $C: |z| = 2$. Since $|1| = 1 < 2$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 1}dz = 2\\pi j f(1) = 2\\pi j e^{2(1)} = 2\\pi j e^{2}$$.",
        "Step 5: Comparing with $k\\pi j e^{2}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 2)}dz$$ along the counter-clockwise circle $C: |z| = 3$ is $k\\pi j e^{4}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 2}$",
        "Contour: $|z| = 3$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 2$.",
        "Step 2: Check if $z = 2$ lies inside $C: |z| = 3$. Since $|2| = 2 < 3$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 2}dz = 2\\pi j f(2) = 2\\pi j e^{2(2)} = 2\\pi j e^{4}$$.",
        "Step 5: Comparing with $k\\pi j e^{4}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 3)}dz$$ along the counter-clockwise circle $C: |z| = 4$ is $k\\pi j e^{6}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 3}$",
        "Contour: $|z| = 4$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 3$.",
        "Step 2: Check if $z = 3$ lies inside $C: |z| = 4$. Since $|3| = 3 < 4$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 3}dz = 2\\pi j f(3) = 2\\pi j e^{2(3)} = 2\\pi j e^{6}$$.",
        "Step 5: Comparing with $k\\pi j e^{6}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 1)}dz$$ along the counter-clockwise circle $C: |z| = 2$ is $k\\pi j e^{2}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 1}$",
        "Contour: $|z| = 2$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 1$.",
        "Step 2: Check if $z = 1$ lies inside $C: |z| = 2$. Since $|1| = 1 < 2$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 1}dz = 2\\pi j f(1) = 2\\pi j e^{2(1)} = 2\\pi j e^{2}$$.",
        "Step 5: Comparing with $k\\pi j e^{2}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "The value of the contour integral: $$\\oint_C \\frac{e^{2z}}{(z - 2)}dz$$ along the counter-clockwise circle $C: |z| = 3$ is $k\\pi j e^{4}$. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
      "givenInformationAndAssumptions": [
        "Integrand: $\\frac{e^{2z}}{z - 2}$",
        "Contour: $|z| = 3$ (counter-clockwise)"
      ],
      "relevantConcept": "Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)",
          "terms": [
            {
              "term": "f(z_0)",
              "explanation": "Value of analytic numerator evaluated at pole z0"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The singularity is at $z = 2$.",
        "Step 2: Check if $z = 2$ lies inside $C: |z| = 3$. Since $|2| = 2 < 3$, the pole is inside $C$.",
        "Step 3: The numerator $f(z) = e^{2z}$ is analytic everywhere (entire function).",
        "Step 4: By Cauchy's Integral Formula:",
        "$$\\oint_C \\frac{e^{2z}}{z - 2}dz = 2\\pi j f(2) = 2\\pi j e^{2(2)} = 2\\pi j e^{4}$$.",
        "Step 5: Comparing with $k\\pi j e^{4}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
      "commonMistakes": [
        "Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Complex Analysis",
      "Cauchy Integral Formula",
      "Residue Theorem",
      "Contour Integration"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 1}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 1}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 1}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 1) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 2}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 2}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 2}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 2) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 3}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 3}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 3}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 3) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 4}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 4}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 4}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 4) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 1}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 1}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 1}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 1) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 2}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 2}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 2}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 2) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 3}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 3}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 3}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 3) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 4}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 4}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 4}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 4) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 1}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 1}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 1}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 1) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 2}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 2}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 2}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 2) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 3}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 3}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 3}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 3) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 4}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 4}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 4}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 4) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 1}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 1}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 1}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 1) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 2}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 2}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 2}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 2) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Complex Analysis",
    "subject": "Engineering Mathematics",
    "topic": "Complex Analysis",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "The residue of the complex function $f(z) = \\frac{z + 3}{(z - 1)^2}$ at its pole $z = 1$ is ________.",
    "options": null,
    "officialAnswer": "1",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the residue at a pole of order 2 using the derivative residue formula.",
      "givenInformationAndAssumptions": [
        "Function: $f(z) = \\frac{z + 3}{(z - 1)^2}$",
        "Pole at $z = 1$ of order $m = 2$."
      ],
      "relevantConcept": "The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]",
          "terms": [
            {
              "term": "m",
              "explanation": "Order of the pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
        "Step 2: Apply residue formula with $m = 2$:",
        "$$\\text{Res}(f, 1) = \\frac{1}{(2-1)!}\\lim_{z \\to 1} \\frac{d}{dz}\\left[(z - 1)^2 \\frac{z + 3}{(z - 1)^2}\\right]$$",
        "Step 3: Simplify inside: $\\frac{d}{dz}(z + 3) = 1$.",
        "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
        "Therefore, the residue is 1."
      ],
      "finalAnswerWithUnits": "Residue = 1",
      "alternativeApproachOrShortcut": "Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
      "commonMistakes": [
        "Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Medium",
    "tags": [
      "Complex Analysis",
      "Residue",
      "Poles",
      "Laurent Series"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 1.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.07,
      0.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.01$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.01 = 0.0095$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.01) = 0.10 \\times 0.9900 = 0.0990$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0095 + 0.0990 = 0.1085$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0095}{0.1085} \\approx 0.088$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.088",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 2.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.14,
      0.18
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.02$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.02 = 0.0190$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.02) = 0.10 \\times 0.9800 = 0.0980$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0190 + 0.0980 = 0.1170$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0190}{0.1170} \\approx 0.162$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.162",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 3.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.21,
      0.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.03$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.03 = 0.0285$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.03) = 0.10 \\times 0.9700 = 0.0970$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0285 + 0.0970 = 0.1255$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0285}{0.1255} \\approx 0.227$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.227",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 4.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.26,
      0.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.04$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.04 = 0.0380$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.04) = 0.10 \\times 0.9600 = 0.0960$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0380 + 0.0960 = 0.1340$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0380}{0.1340} \\approx 0.284$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.284",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 5.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.31,
      0.35
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.05$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.05 = 0.0475$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.05) = 0.10 \\times 0.9500 = 0.0950$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0475 + 0.0950 = 0.1425$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0475}{0.1425} \\approx 0.333$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.333",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 1.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.07,
      0.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.01$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.01 = 0.0095$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.01) = 0.10 \\times 0.9900 = 0.0990$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0095 + 0.0990 = 0.1085$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0095}{0.1085} \\approx 0.088$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.088",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 2.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.14,
      0.18
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.02$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.02 = 0.0190$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.02) = 0.10 \\times 0.9800 = 0.0980$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0190 + 0.0980 = 0.1170$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0190}{0.1170} \\approx 0.162$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.162",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 3.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.21,
      0.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.03$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.03 = 0.0285$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.03) = 0.10 \\times 0.9700 = 0.0970$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0285 + 0.0970 = 0.1255$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0285}{0.1255} \\approx 0.227$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.227",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 4.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.26,
      0.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.04$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.04 = 0.0380$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.04) = 0.10 \\times 0.9600 = 0.0960$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0380 + 0.0960 = 0.1340$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0380}{0.1340} \\approx 0.284$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.284",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 5.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.31,
      0.35
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.05$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.05 = 0.0475$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.05) = 0.10 \\times 0.9500 = 0.0950$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0475 + 0.0950 = 0.1425$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0475}{0.1425} \\approx 0.333$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.333",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 1.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.07,
      0.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.01$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.01 = 0.0095$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.01) = 0.10 \\times 0.9900 = 0.0990$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0095 + 0.0990 = 0.1085$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0095}{0.1085} \\approx 0.088$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.088",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 2.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.14,
      0.18
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.02$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.02 = 0.0190$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.02) = 0.10 \\times 0.9800 = 0.0980$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0190 + 0.0980 = 0.1170$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0190}{0.1170} \\approx 0.162$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.162",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 3.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.21,
      0.25
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.03$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.03 = 0.0285$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.03) = 0.10 \\times 0.9700 = 0.0970$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0285 + 0.0970 = 0.1255$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0285}{0.1255} \\approx 0.227$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.227",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 4.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.26,
      0.3
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.04$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.04 = 0.0380$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.04) = 0.10 \\times 0.9600 = 0.0960$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0380 + 0.0960 = 0.1340$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0380}{0.1340} \\approx 0.284$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.284",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 2,
    "negativeMarks": 0,
    "statement": "In a medical screening test, a disease has a prevalence of 5.0\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.31,
      0.35
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
      "givenInformationAndAssumptions": [
        "Prior probability $P(D) = 0.05$",
        "Sensitivity $P(+|D) = 0.95$",
        "Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
      ],
      "relevantConcept": "Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}",
          "terms": [
            {
              "term": "P(+)",
              "explanation": "Total probability of testing positive"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times 0.05 = 0.0475$.",
        "Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - 0.05) = 0.10 \\times 0.9500 = 0.0950$.",
        "Step 3: Total probability of testing positive: $P(+) = 0.0475 + 0.0950 = 0.1425$.",
        "Step 4: Compute posterior: $P(D|+) = \\frac{0.0475}{0.1425} \\approx 0.333$."
      ],
      "finalAnswerWithUnits": "P(D|+) = 0.333",
      "alternativeApproachOrShortcut": "Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
      "commonMistakes": [
        "Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Hard",
    "tags": [
      "Probability and Statistics",
      "Bayes' Theorem",
      "Conditional Probability",
      "Sensitivity"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 2$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.84,
      0.89
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 2\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (2)(1) = 2$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{2^0 e^{-2}}{0!} = e^{-2} \\approx 0.1353$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-2} = 1 - 0.1353 \\approx 0.865$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.865",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 3$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.93,
      0.97
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 3\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (3)(1) = 3$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{3^0 e^{-3}}{0!} = e^{-3} \\approx 0.0498$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-3} = 1 - 0.0498 \\approx 0.95$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.95",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 4$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.96,
      1.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 4\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (4)(1) = 4$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{4^0 e^{-4}}{0!} = e^{-4} \\approx 0.0183$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-4} = 1 - 0.0183 \\approx 0.982$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.982",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 5$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.97,
      1.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 5\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (5)(1) = 5$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{5^0 e^{-5}}{0!} = e^{-5} \\approx 0.0067$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-5} = 1 - 0.0067 \\approx 0.993$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.993",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 2$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.84,
      0.89
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 2\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (2)(1) = 2$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{2^0 e^{-2}}{0!} = e^{-2} \\approx 0.1353$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-2} = 1 - 0.1353 \\approx 0.865$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.865",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 3$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.93,
      0.97
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 3\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (3)(1) = 3$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{3^0 e^{-3}}{0!} = e^{-3} \\approx 0.0498$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-3} = 1 - 0.0498 \\approx 0.95$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.95",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 4$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.96,
      1.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 4\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (4)(1) = 4$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{4^0 e^{-4}}{0!} = e^{-4} \\approx 0.0183$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-4} = 1 - 0.0183 \\approx 0.982$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.982",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 5$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.97,
      1.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 5\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (5)(1) = 5$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{5^0 e^{-5}}{0!} = e^{-5} \\approx 0.0067$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-5} = 1 - 0.0067 \\approx 0.993$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.993",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 2$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.84,
      0.89
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 2\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (2)(1) = 2$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{2^0 e^{-2}}{0!} = e^{-2} \\approx 0.1353$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-2} = 1 - 0.1353 \\approx 0.865$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.865",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 3$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.93,
      0.97
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 3\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (3)(1) = 3$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{3^0 e^{-3}}{0!} = e^{-3} \\approx 0.0498$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-3} = 1 - 0.0498 \\approx 0.95$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.95",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 4$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.96,
      1.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 4\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (4)(1) = 4$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{4^0 e^{-4}}{0!} = e^{-4} \\approx 0.0183$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-4} = 1 - 0.0183 \\approx 0.982$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.982",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 5$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.97,
      1.01
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 5\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (5)(1) = 5$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{5^0 e^{-5}}{0!} = e^{-5} \\approx 0.0067$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-5} = 1 - 0.0067 \\approx 0.993$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.993",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 2$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.84,
      0.89
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 2\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (2)(1) = 2$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{2^0 e^{-2}}{0!} = e^{-2} \\approx 0.1353$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-2} = 1 - 0.1353 \\approx 0.865$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.865",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 3$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.93,
      0.97
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 3\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (3)(1) = 3$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{3^0 e^{-3}}{0!} = e^{-3} \\approx 0.0498$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-3} = 1 - 0.0498 \\approx 0.95$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.95",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = 4$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places).",
    "options": null,
    "officialAnswer": [
      0.96,
      1.0
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Find the probability of at least one arrival in a Poisson process using the complement rule.",
      "givenInformationAndAssumptions": [
        "Arrival rate $\\lambda = 4\\text{ ms}^{-1}$",
        "Time interval $T = 1\\text{ ms}$"
      ],
      "relevantConcept": "For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}",
          "terms": [
            {
              "term": "P(X = 0) = e^{-\\lambda T}",
              "explanation": "Probability of zero arrivals"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Parameter $\\alpha = \\lambda T = (4)(1) = 4$.",
        "Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{4^0 e^{-4}}{0!} = e^{-4} \\approx 0.0183$.",
        "Step 3: Probability of at least one arrival:",
        "$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-4} = 1 - 0.0183 \\approx 0.982$$."
      ],
      "finalAnswerWithUnits": "P(X >= 1) = 0.982",
      "alternativeApproachOrShortcut": "Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
      "commonMistakes": [
        "Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Poisson Distribution",
      "Complement Rule",
      "Arrival Process"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[0, 6]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [0, 6]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 0$ and $b = 6$.",
        "Step 2: Compute width: $b - a = 6 - 0 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[1, 7]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [1, 7]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 1$ and $b = 7$.",
        "Step 2: Compute width: $b - a = 7 - 1 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[2, 8]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [2, 8]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 2$ and $b = 8$.",
        "Step 2: Compute width: $b - a = 8 - 2 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[3, 9]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [3, 9]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 3$ and $b = 9$.",
        "Step 2: Compute width: $b - a = 9 - 3 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[4, 10]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [4, 10]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 4$ and $b = 10$.",
        "Step 2: Compute width: $b - a = 10 - 4 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[5, 11]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [5, 11]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 5$ and $b = 11$.",
        "Step 2: Compute width: $b - a = 11 - 5 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[6, 12]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [6, 12]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 6$ and $b = 12$.",
        "Step 2: Compute width: $b - a = 12 - 6 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[7, 13]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [7, 13]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 7$ and $b = 13$.",
        "Step 2: Compute width: $b - a = 13 - 7 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[8, 14]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [8, 14]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 8$ and $b = 14$.",
        "Step 2: Compute width: $b - a = 14 - 8 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[9, 15]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [9, 15]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 9$ and $b = 15$.",
        "Step 2: Compute width: $b - a = 15 - 9 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[10, 16]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [10, 16]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 10$ and $b = 16$.",
        "Step 2: Compute width: $b - a = 16 - 10 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[11, 17]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [11, 17]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 11$ and $b = 17$.",
        "Step 2: Compute width: $b - a = 17 - 11 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[12, 18]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [12, 18]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 12$ and $b = 18$.",
        "Step 2: Compute width: $b - a = 18 - 12 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[13, 19]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [13, 19]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 13$ and $b = 19$.",
        "Step 2: Compute width: $b - a = 19 - 13 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A random variable $X$ is uniformly distributed over the interval $[14, 20]$. The variance of $X$ is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the variance of a continuous uniform random variable $U(a, b)$.",
      "givenInformationAndAssumptions": [
        "Interval: $[a, b] = [14, 20]$",
        "Range: $b - a = 6$"
      ],
      "relevantConcept": "For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}",
          "terms": [
            {
              "term": "b - a",
              "explanation": "Width of the uniform support"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify bounds $a = 14$ and $b = 20$.",
        "Step 2: Compute width: $b - a = 20 - 14 = 6$.",
        "Step 3: Apply variance formula:",
        "$$\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$$."
      ],
      "finalAnswerWithUnits": "Variance = 3",
      "alternativeApproachOrShortcut": "By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
      "commonMistakes": [
        "Dividing by 6 or 24 instead of 12 in the variance formula."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Uniform Distribution",
      "Variance",
      "Continuous RV"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 4$ and $\\text{Var}(Y) = 9$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "97",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 4$",
        "$\\text{Var}(Y) = 9$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(4) + 9(9)$.",
        "Step 4: Compute numerical value: $4(4) + 9(9) = 16 + 81 = 97$."
      ],
      "finalAnswerWithUnits": "Variance = 97",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 5$ and $\\text{Var}(Y) = 10$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "110",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 5$",
        "$\\text{Var}(Y) = 10$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(5) + 9(10)$.",
        "Step 4: Compute numerical value: $4(5) + 9(10) = 20 + 90 = 110$."
      ],
      "finalAnswerWithUnits": "Variance = 110",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 6$ and $\\text{Var}(Y) = 11$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "123",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 6$",
        "$\\text{Var}(Y) = 11$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(6) + 9(11)$.",
        "Step 4: Compute numerical value: $4(6) + 9(11) = 24 + 99 = 123$."
      ],
      "finalAnswerWithUnits": "Variance = 123",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 7$ and $\\text{Var}(Y) = 12$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "136",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 7$",
        "$\\text{Var}(Y) = 12$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(7) + 9(12)$.",
        "Step 4: Compute numerical value: $4(7) + 9(12) = 28 + 108 = 136$."
      ],
      "finalAnswerWithUnits": "Variance = 136",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 8$ and $\\text{Var}(Y) = 13$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "149",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 8$",
        "$\\text{Var}(Y) = 13$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(8) + 9(13)$.",
        "Step 4: Compute numerical value: $4(8) + 9(13) = 32 + 117 = 149$."
      ],
      "finalAnswerWithUnits": "Variance = 149",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 9$ and $\\text{Var}(Y) = 14$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "162",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 9$",
        "$\\text{Var}(Y) = 14$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(9) + 9(14)$.",
        "Step 4: Compute numerical value: $4(9) + 9(14) = 36 + 126 = 162$."
      ],
      "finalAnswerWithUnits": "Variance = 162",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 10$ and $\\text{Var}(Y) = 15$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "175",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 10$",
        "$\\text{Var}(Y) = 15$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(10) + 9(15)$.",
        "Step 4: Compute numerical value: $4(10) + 9(15) = 40 + 135 = 175$."
      ],
      "finalAnswerWithUnits": "Variance = 175",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 11$ and $\\text{Var}(Y) = 16$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "188",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 11$",
        "$\\text{Var}(Y) = 16$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(11) + 9(16)$.",
        "Step 4: Compute numerical value: $4(11) + 9(16) = 44 + 144 = 188$."
      ],
      "finalAnswerWithUnits": "Variance = 188",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 12$ and $\\text{Var}(Y) = 17$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "201",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 12$",
        "$\\text{Var}(Y) = 17$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(12) + 9(17)$.",
        "Step 4: Compute numerical value: $4(12) + 9(17) = 48 + 153 = 201$."
      ],
      "finalAnswerWithUnits": "Variance = 201",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-MATH-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Probability and Statistics",
    "subject": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Let $X$ and $Y$ be two independent random variables with variances $\\text{Var}(X) = 13$ and $\\text{Var}(Y) = 18$. The variance of the linear combination $Z = 2X - 3Y$ is ________.",
    "options": null,
    "officialAnswer": "214",
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the variance of a linear combination of independent random variables.",
      "givenInformationAndAssumptions": [
        "$\\text{Var}(X) = 13$",
        "$\\text{Var}(Y) = 18$",
        "Independence: $\\text{Cov}(X, Y) = 0$"
      ],
      "relevantConcept": "For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)",
          "terms": [
            {
              "term": "a^2, b^2",
              "explanation": "Square of linear coefficients"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
        "Step 2: Since $X$ and $Y$ are independent, $\\text{Cov}(X, Y) = 0$.",
        "Step 3: $\\text{Var}(Z) = (2)^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(13) + 9(18)$.",
        "Step 4: Compute numerical value: $4(13) + 9(18) = 52 + 162 = 214$."
      ],
      "finalAnswerWithUnits": "Variance = 214",
      "alternativeApproachOrShortcut": "Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
      "commonMistakes": [
        "Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Probability and Statistics",
      "Variance Properties",
      "Independent RVs",
      "Linear Combination"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
