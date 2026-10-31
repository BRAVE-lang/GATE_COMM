import math
from .common import make_question

def generate_math_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. LINEAR ALGEBRA (~55 questions)
    # ==========================================
    # Set 1A: 2x2 Eigenvalues and Trace/Det (15 questions)
    cases_2x2 = [
        (4, 2, 2, 4, "Symmetric 2x2 matrix", "Easy", 1),
        (3, 1, 1, 3, "Symmetric 2x2 matrix", "Easy", 1),
        (5, 4, 1, 2, "General 2x2 matrix", "Medium", 2),
        (2, 3, 3, 2, "Symmetric with negative eigenvalue", "Medium", 2),
        (6, -2, -2, 3, "Positive definite matrix", "Medium", 2),
        (1, 4, 2, 3, "Distinct real eigenvalues", "Easy", 1),
        (7, 3, 3, -1, "Opposite sign eigenvalues", "Medium", 2),
        (2, 2, 1, 3, "Integer eigenvalues", "Easy", 1),
        (8, -4, 2, 2, "Repeated eigenvalues", "Hard", 2),
        (5, -1, 4, 1, "Repeated eigenvalue degenerate", "Hard", 2),
        (0, 1, -1, 0, "Skew-symmetric imaginary eigenvalues", "Medium", 2),
        (0, 2, -2, 0, "Skew-symmetric matrix", "Easy", 1),
        (1, 2, 0, 3, "Upper triangular matrix", "Easy", 1),
        (4, 0, 5, -2, "Lower triangular matrix", "Easy", 1),
        (10, 0, 0, 10, "Scalar matrix", "Easy", 1)
    ]
    for a, b, c, d, desc, diff, marks in cases_2x2:
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        tr = a + d
        det = a * d - b * c
        # characteristic equation: lambda^2 - tr*lambda + det = 0
        disc = tr * tr - 4 * det
        if disc >= 0:
            l1 = (tr + math.sqrt(disc)) / 2.0
            l2 = (tr - math.sqrt(disc)) / 2.0
            max_l = max(l1, l2)
            min_l = min(l1, l2)
        else:
            max_l = round(tr / 2.0, 2)
            min_l = round(math.sqrt(-disc) / 2.0, 2)

        if disc >= 0:
            stmt = f"Consider the $2 \\times 2$ real matrix: $$A = \\begin{{bmatrix}} {a} & {b} \\\\ {c} & {d} \\end{{bmatrix}}$$ The largest eigenvalue of the matrix $A$ is ________ (answer in integer or rounded off to two decimal places)."
            ans = [round(max_l - 0.05, 2), round(max_l + 0.05, 2)] if abs(max_l - round(max_l)) > 1e-4 else str(int(round(max_l)))
            qtype = "NAT"
            opts = None
            step_calc = [
                f"Step 1: Compute the trace of $A$: $\\text{{Tr}}(A) = {a} + {d} = {tr}$.",
                f"Step 2: Compute the determinant of $A$: $\\det(A) = ({a})({d}) - ({b})({c}) = {det}$.",
                f"Step 3: Solve the characteristic equation $\\lambda^2 - \\text{{Tr}}(A)\\lambda + \\det(A) = 0$:",
                f"$$\\lambda^2 - {tr}\\lambda + {det} = 0$$",
                f"Using the quadratic formula: $\\lambda = \\frac{{{tr} \\pm \\sqrt{{{disc}}}}}{{2}}$.",
                f"The eigenvalues are $\\lambda_1 = {max_l}$ and $\\lambda_2 = {min_l}$. The largest eigenvalue is ${max_l}$."
            ]
            final_ans = f"Largest eigenvalue = {max_l}"
        else:
            stmt = f"For the matrix $A = \\begin{{bmatrix}} {a} & {b} \\\\ {c} & {d} \\end{{bmatrix}}$, which of the following statements is CORRECT regarding its eigenvalues?"
            qtype = "MCQ"
            opts = [
                {"id": "A", "text": f"The eigenvalues are purely imaginary: $\\pm j{min_l}$"},
                {"id": "B", "text": "The eigenvalues are real and positive"},
                {"id": "C", "text": "The eigenvalues are real and distinct"},
                {"id": "D", "text": "The matrix has a single defective repeated eigenvalue"}
            ]
            ans = "A"
            step_calc = [
                f"Step 1: Characteristic equation is $\\lambda^2 - ({tr})\\lambda + ({det}) = 0$.",
                f"Step 2: Since $\\text{{Tr}}(A) = {tr}$ and $\\det(A) = {det} > 0$, the roots are $\\lambda = \\pm j\\sqrt{{{det}}} = \\pm j{min_l}$.",
                "Step 3: Thus, the eigenvalues are purely imaginary conjugates."
            ]
            final_ans = "Option A"

        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Linear Algebra",
            qtype=qtype,
            marks=marks,
            statement=stmt,
            options=opts,
            official_answer=ans,
            difficulty=diff,
            understanding=f"We need to evaluate the eigenvalues and spectral properties of the given $2 \\times 2$ matrix $A$.",
            given_info=[f"Matrix elements: $a_{{11}} = {a}, a_{{12}} = {b}, a_{{21}} = {c}, a_{{22}} = {d}$."],
            concept="The eigenvalues of a square matrix $A$ satisfy the characteristic equation $\\det(\\lambda I - A) = 0$. For a $2 \\times 2$ matrix, this simplifies to $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$.",
            formulas=[{
                "formula": "\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0",
                "terms": [
                    {"term": "\\text{Tr}(A)", "explanation": "Sum of principal diagonal elements"},
                    {"term": "\\det(A)", "explanation": "Product of eigenvalues"}
                ]
            }],
            derivation=step_calc,
            final_answer=final_ans,
            alternative="Remember that the sum of eigenvalues equals the trace and the product of eigenvalues equals the determinant.",
            mistakes=["Mixing up signs in the characteristic polynomial: it is $\\lambda^2 - \\text{Tr}\\cdot\\lambda + \\det = 0$, not $+ \\text{Tr}$.", "Arithmetic errors in finding the determinant."],
            tags=["Linear Algebra", "Eigenvalues", "Characteristic Equation", "Matrices"]
        )
        questions.append(q)

    # Set 1B: Cayley-Hamilton and Powers of Matrix (10 questions)
    for k_pow in [3, 4, 5, -1, 2]:
        for mat_idx, (m_a, m_d) in enumerate([(2, 3), (1, 4)]):
            qid = f"PRAC-MATH-{idx:03d}"
            idx += 1
            # A = [[m_a, 0], [0, m_d]]
            tr = m_a + m_d
            det = m_a * m_d
            if k_pow == -1:
                stmt = f"A $2 \\times 2$ matrix $A$ satisfies $A^2 - {tr}A + {det}I = 0$. If $\\det(A) = {det} \\ne 0$, then the inverse matrix $A^{{-1}}$ can be expressed as:"
                opts = [
                    {"id": "A", "text": f"$\\frac{{1}}{{{det}}}({tr}I - A)$"},
                    {"id": "B", "text": f"$\\frac{{1}}{{{det}}}(A - {tr}I)$"},
                    {"id": "C", "text": f"${tr}A - {det}I$"},
                    {"id": "D", "text": f"${det}A + {tr}I$"}
                ]
                ans = "A"
                der = [
                    f"Step 1: From the Cayley-Hamilton theorem, $A^2 - {tr}A + {det}I = 0$.",
                    f"Step 2: Multiply both sides by $A^{{-1}}$:",
                    f"$A^{{-1}}A^2 - {tr}A^{{-1}}A + {det}A^{{-1}} = 0 \\implies A - {tr}I + {det}A^{{-1}} = 0$.",
                    f"Step 3: Rearrange for $A^{{-1}}$: ${det}A^{{-1}} = {tr}I - A \\implies A^{{-1}} = \\frac{{1}}{{{det}}}({tr}I - A)$."
                ]
                final_ans = "Option A"
            else:
                p_a = m_a ** k_pow
                p_d = m_d ** k_pow
                stmt = f"Let $A$ be a diagonal matrix given by $A = \\begin{{bmatrix}} {m_a} & 0 \\\\ 0 & {m_d} \\end{{bmatrix}}$. The trace of $A^{{{k_pow}}}$ is equal to ________."
                ans = str(p_a + p_d)
                opts = None
                der = [
                    f"Step 1: For a diagonal matrix, $A^k = \\begin{{bmatrix}} {m_a}^k & 0 \\\\ 0 & {m_d}^k \\end{{bmatrix}}$.",
                    f"Step 2: For $k = {k_pow}$, the diagonal entries are ${m_a}^{{{k_pow}}} = {p_a}$ and ${m_d}^{{{k_pow}}} = {p_d}$.",
                    f"Step 3: Trace is the sum of diagonal elements: $\\text{{Tr}}(A^{{{k_pow}}}) = {p_a} + {p_d} = {p_a + p_d}$."
                ]
                final_ans = f"Trace = {p_a + p_d}"

            q = make_question(
                qid=qid,
                subject="Engineering Mathematics",
                topic="Linear Algebra",
                qtype="MCQ" if opts else "NAT",
                marks=1 if k_pow <= 2 else 2,
                statement=stmt,
                options=opts,
                official_answer=ans,
                difficulty="Easy" if k_pow <= 2 else "Medium",
                understanding="Apply the Cayley-Hamilton theorem or spectral mapping property of matrix powers.",
                given_info=[f"Matrix characteristic polynomial or diagonal matrix with entries {m_a}, {m_d}."],
                concept="Every square matrix satisfies its own characteristic equation (Cayley-Hamilton theorem). For diagonal matrices, $A^k = \\text{diag}(\\lambda_i^k)$.",
                formulas=[{"formula": "A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)", "terms": [{"term": "I", "explanation": "Identity matrix"}]}],
                derivation=der,
                final_answer=final_ans,
                alternative="For $2 \\times 2$ matrices, $A^2 = \\text{Tr}(A)A - \\det(A)I$.",
                mistakes=["Multiplying by $A$ instead of $A^{-1}$ when solving for inverse."],
                tags=["Linear Algebra", "Cayley-Hamilton", "Matrix Powers", "Inverse"]
            )
            questions.append(q)

    # Set 1C: System of Linear Equations & Rank (15 questions)
    sys_cases = [
        (2, 3, 5, 4, 6, "Unique solution test", 1, "Medium"),
        (1, 2, 3, 2, 4, "Infinite solutions / linearly dependent", 2, "Medium"),
        (1, 1, 1, 2, 3, "Non-homogeneous 3-variable system", 2, "Hard"),
        (3, -1, 2, 1, 4, "Determining consistency", 1, "Easy"),
        (2, -4, 1, -2, 3, "Parallel lines inconsistent", 1, "Easy")
    ]
    for c_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        k_val = c_i + 2
        stmt = f"Consider the system of linear equations: $$\\begin{{aligned}} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + k z &= 20 \\end{{aligned}}$$ The value of $k$ for which the system has infinitely many solutions is ________ (in integer)."
        # Row operations: R2 -> R2 - 2R1: y + z = 2
        # R3 -> R3 - 3R1: y + (k-9)z = 2
        # R3 -> R3 - R2: (k - 10)z = 0
        # For infinite solutions, k - 10 = 0 -> k = 10
        ans = "10" if c_i % 3 == 0 else str(10 + c_i % 3)
        actual_k = 10 + (c_i % 3)
        if c_i % 3 != 0:
            stmt = f"Consider the system of linear equations: $$\\begin{{aligned}} x + 2y + 3z &= 6 \\\\ 2x + 5y + 7z &= 14 \\\\ 3x + 7y + ({actual_k}) z &= b \\end{{aligned}}$$ The value of $b$ for which the system is consistent (has infinite solutions) is ________."
            ans = "20"
        
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Linear Algebra",
            qtype="NAT",
            marks=2,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Medium",
            understanding="Determine the rank conditions for consistency and infinite solutions using Gaussian elimination on the augmented matrix $[A|b]$.",
            given_info=["System of 3 linear equations with unknown parameter."],
            concept="A system $Ax = b$ has infinite solutions if and only if $\\text{rank}(A) = \\text{rank}([A|b]) < n$, where $n$ is the number of variables.",
            formulas=[{"formula": "\\text{rank}(A) = \\text{rank}([A|b]) < 3", "terms": [{"term": "\\text{rank}", "explanation": "Number of non-zero rows in row echelon form"}]}],
            derivation=[
                "Step 1: Write down the augmented matrix $[A|b]$:",
                "$$[A|b] = \\begin{{bmatrix}} 1 & 2 & 3 & 6 \\\\ 2 & 5 & 7 & 14 \\\\ 3 & 7 & k & 20 \\end{{bmatrix}}$$",
                "Step 2: Apply elementary row operations:",
                "$R_2 \\to R_2 - 2R_1 \\implies \\begin{{bmatrix}} 0 & 1 & 1 & 2 \\end{{bmatrix}}$",
                "$R_3 \\to R_3 - 3R_1 \\implies \\begin{{bmatrix}} 0 & 1 & k-9 & 2 \\end{{bmatrix}}$",
                "Step 3: $R_3 \\to R_3 - R_2 \\implies \\begin{{bmatrix}} 0 & 0 & k-10 & 0 \\end{{bmatrix}}$.",
                "Step 4: For infinite solutions, the third row must be all zeros: $k - 10 = 0 \\implies k = 10$."
            ],
            final_answer=f"Parameter value = {ans}",
            alternative="Calculate $\\det(A) = 0$ for non-trivial / infinite solutions, then verify row consistency.",
            mistakes=["Assuming $\\det(A) = 0$ alone guarantees infinite solutions; it could also mean no solution if the augmented matrix has higher rank."],
            tags=["Linear Algebra", "System of Linear Equations", "Gaussian Elimination", "Rank"]
        )
        questions.append(q)

    # Set 1D: Orthogonality, Nullity & Basis (15 questions)
    for dim_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        n_cols = 4 + (dim_i % 3)
        r_val = 2 + (dim_i % 2)
        nullity = n_cols - r_val
        stmt = f"A real matrix $M$ of size $5 \\times {n_cols}$ has a rank equal to ${r_val}$. The dimension of the null space (nullity) of the matrix $M$ is ________."
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Linear Algebra",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=str(nullity),
            difficulty="Easy",
            understanding="Apply the Rank-Nullity theorem to find the dimension of the null space.",
            given_info=[f"Matrix size: $5 \\times {n_cols}$", f"Rank of $M$: ${r_val}$"],
            concept="Rank-Nullity Theorem: For an $m \\times n$ matrix $M$, $\\text{rank}(M) + \\text{nullity}(M) = n$ (number of columns).",
            formulas=[{"formula": "\\text{rank}(M) + \\text{nullity}(M) = n", "terms": [{"term": "n", "explanation": "Total number of columns in matrix M"}]}],
            derivation=[
                f"Step 1: Identify number of columns $n = {n_cols}$.",
                f"Step 2: Identify rank of matrix $\\text{{rank}}(M) = {r_val}$.",
                f"Step 3: According to the Rank-Nullity theorem:",
                f"$$\\text{{nullity}}(M) = n - \\text{{rank}}(M) = {n_cols} - {r_val} = {nullity}$$."
            ],
            final_answer=f"Nullity = {nullity}",
            alternative="Nullity is the number of free variables in the solution space of $Mx = 0$.",
            mistakes=["Using the number of rows $m$ instead of number of columns $n$ in the rank-nullity formula."],
            tags=["Linear Algebra", "Rank-Nullity Theorem", "Null Space", "Dimension"]
        )
        questions.append(q)

    # ==========================================
    # 2. CALCULUS (~55 questions)
    # ==========================================
    # Set 2A: Limits & L'Hopital (15 questions)
    limit_params = [
        (2, 3, "sin", "NAT", "0.67"),
        (4, 2, "tan", "NAT", "2"),
        (3, 5, "exp", "NAT", "0.6"),
        (1, 1, "standard", "MCQ", "A"),
        (5, 2, "power", "NAT", "2.5")
    ]
    for l_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        a_val = (l_i % 5) + 2
        b_val = (l_i % 3) + 1
        expected = round(a_val / b_val, 2)
        stmt = f"The value of the limit: $$\\lim_{{x \\to 0}} \\frac{{\\sin({a_val}x)}}{{{b_val}x}}$$ is ________ (answer in integer or rounded off to two decimal places)."
        ans = str(int(expected)) if expected.is_integer() else [round(expected - 0.05, 2), round(expected + 0.05, 2)]
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Calculus",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Evaluate the trigonometric limit as $x \\to 0$ using standard limits or L'Hopital's rule.",
            given_info=[f"Function: $f(x) = \\frac{{\\sin({a_val}x)}}{{{b_val}x}}$ as $x \\to 0$."],
            concept="As $x \\to 0$, $\\frac{\\sin(kx)}{kx} \\to 1$. Thus $\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}$.",
            formulas=[{"formula": "\\lim_{x \\to 0}\\frac{\\sin(ax)}{bx} = \\frac{a}{b}", "terms": [{"term": "a, b", "explanation": "Coefficients of argument and denominator"}]}],
            derivation=[
                f"Step 1: Check form at $x=0$: $\\frac{{\\sin(0)}}{{0}} = \\frac{{0}}{{0}}$ (indeterminate).",
                f"Step 2: Apply L'Hopital's rule: differentiate numerator and denominator with respect to $x$:",
                f"$$\\lim_{{x \\to 0}} \\frac{{{a_val}\\cos({a_val}x)}}{{{b_val}}} = \\frac{{{a_val}\\cos(0)}}{{{b_val}}} = \\frac{{{a_val}}}{{{b_val}}} = {expected}$$."
            ],
            final_answer=f"Limit = {expected}",
            alternative="Direct standard limit: $\\frac{\\sin(ax)}{bx} = \\frac{a}{b}\\left(\\frac{\\sin(ax)}{ax}\\right) \\to \\frac{a}{b}(1) = \\frac{a}{b}$.",
            mistakes=["Differentiating using quotient rule instead of differentiating numerator and denominator separately in L'Hopital's rule."],
            tags=["Calculus", "Limits", "L'Hopital's Rule", "Trigonometric Limits"]
        )
        questions.append(q)

    # Set 2B: Maxima, Minima & Derivatives (15 questions)
    for m_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        p = m_i + 2
        # f(x) = x^3 - 3*p^2*x + 10 -> f'(x) = 3x^2 - 3p^2 = 0 -> x = +-p
        # local minimum at x = +p, local maximum at x = -p
        stmt = f"The local minimum value of the function $f(x) = 2x^3 - {6*p}x^2 + 5$ occurs at $x$ equal to ________."
        # f'(x) = 6x^2 - 12px = 6x(x - 2p) = 0 -> x = 0 (max), x = 2p (min)
        ans_x = 2 * p
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Calculus",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=str(ans_x),
            difficulty="Medium",
            understanding="Find the critical points of the cubic polynomial and identify the point of local minimum using the second derivative test.",
            given_info=[f"Function $f(x) = 2x^3 - {6*p}x^2 + 5$."],
            concept="A critical point $x_0$ where $f'(x_0) = 0$ is a local minimum if $f''(x_0) > 0$.",
            formulas=[{"formula": "f'(x) = 0, \\quad f''(x) > 0", "terms": [{"term": "f''(x)", "explanation": "Second derivative indicating curvature"}]}],
            derivation=[
                f"Step 1: Compute first derivative: $f'(x) = 6x^2 - {12*p}x$.",
                f"Step 2: Set $f'(x) = 0 \\implies 6x(x - {2*p}) = 0$. Critical points are $x = 0$ and $x = {2*p}$.",
                f"Step 3: Compute second derivative: $f''(x) = 12x - {12*p}$.",
                f"Step 4: At $x = 0$: $f''(0) = -{12*p} < 0$ (local maximum).",
                f"Step 5: At $x = {2*p}$: $f''({2*p}) = 12({2*p}) - {12*p} = {12*p} > 0$ (local minimum).",
                f"Therefore, the local minimum occurs at $x = {ans_x}$."
            ],
            final_answer=f"x = {ans_x}",
            alternative="Observe the positive leading coefficient ($+2x^3$), which implies the graph goes from $-\\infty$ to a local max at $x=0$, down to a local min at $x={ans_x}$, then to $+\\infty$.",
            mistakes=["Selecting $x=0$ instead of $x=2p$ because of confusing local minimum with local maximum."],
            tags=["Calculus", "Maxima and Minima", "Second Derivative Test", "Optimization"]
        )
        questions.append(q)

    # Set 2C: Vector Calculus & Divergence / Curl (15 questions)
    for v_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        c_val = v_i + 1
        stmt = f"A vector field is given by $\\vec{{F}} = ({c_val}x^2 y)\\hat{{i}} + (y^2 z)\\hat{{j}} + (x z^2)\\hat{{k}}$. The divergence of $\\vec{{F}}$ at the point $(1, 1, 1)$ is ________."
        # div F = d/dx(c*x^2*y) + d/dy(y^2*z) + d/dz(x*z^2) = 2*c*x*y + 2*y*z + 2*x*z
        # at (1,1,1) = 2*c + 2 + 2 = 2*c + 4
        ans_div = 2 * c_val + 4
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Calculus",
            qtype="NAT",
            marks=2,
            statement=stmt,
            options=None,
            official_answer=str(ans_div),
            difficulty="Medium",
            understanding="Evaluate the divergence of a 3D vector field at a specific coordinate point.",
            given_info=[f"Vector field: $\\vec{{F}} = ({c_val}x^2 y)\\hat{{i}} + (y^2 z)\\hat{{j}} + (x z^2)\\hat{{k}}$", "Point: $(1, 1, 1)$"],
            concept="The divergence of $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$ is given by $\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$.",
            formulas=[{"formula": "\\nabla \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}", "terms": [{"term": "\\nabla \\cdot", "explanation": "Divergence scalar operator"}]}],
            derivation=[
                f"Step 1: $\\frac{{\\partial F_x}}{{\\partial x}} = \\frac{{\\partial}}{{\\partial x}}({c_val}x^2 y) = {2*c_val}x y$.",
                "Step 2: $\\frac{\\partial F_y}{\\partial y} = \\frac{\\partial}{\\partial y}(y^2 z) = 2y z$.",
                "Step 3: $\\frac{\\partial F_z}{\\partial z} = \\frac{\\partial}{\\partial z}(x z^2) = 2x z$.",
                f"Step 4: Sum the partial derivatives: $\\nabla \\cdot \\vec{{F}} = {2*c_val}x y + 2y z + 2x z$.",
                f"Step 5: Substitute $(x, y, z) = (1, 1, 1)$:",
                f"$$\\nabla \\cdot \\vec{{F}}(1,1,1) = {2*c_val}(1)(1) + 2(1)(1) + 2(1)(1) = {2*c_val} + 2 + 2 = {ans_div}$$."
            ],
            final_answer=f"Divergence = {ans_div}",
            alternative="Ensure each component is partially differentiated only with respect to its corresponding coordinate variable.",
            mistakes=["Treating divergence as a vector quantity instead of a scalar field.", "Forgetting partial differentiation rules."],
            tags=["Calculus", "Vector Calculus", "Divergence", "Gradient"]
        )
        questions.append(q)

    # Set 2D: Multiple Integrals & Green's / Gauss Theorems (10 questions)
    for g_i in range(10):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        r_circ = g_i + 2
        stmt = f"The value of the line integral $\\oint_C (x^2 - y)dx + (x + y^2)dy$, where $C$ is a circle of radius ${r_circ}$ traversed in the counter-clockwise direction, is $k\\pi$. The value of $k$ is ________."
        # By Green's theorem: \iint (dN/dx - dM/dy) dA = \iint (1 - (-1)) dA = 2 * Area = 2 * pi * r^2
        # k = 2 * r^2
        k_val = 2 * (r_circ ** 2)
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Calculus",
            qtype="NAT",
            marks=2,
            statement=stmt,
            options=None,
            official_answer=str(k_val),
            difficulty="Hard",
            understanding="Use Green's Theorem in the plane to convert the closed contour line integral into a double integral over the circular disc.",
            given_info=[f"Line integral: $\\oint_C (x^2 - y)dx + (x + y^2)dy$", f"Boundary $C$: Circle of radius ${r_circ}$"],
            concept="Green's Theorem: $\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dx dy$.",
            formulas=[{"formula": "\\oint_C M dx + N dy = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right)dA", "terms": [{"term": "R", "explanation": "Region enclosed by contour C"}]}],
            derivation=[
                "Step 1: Identify $M = x^2 - y$ and $N = x + y^2$.",
                "Step 2: Compute partial derivatives:",
                "$\\frac{\\partial N}{\\partial x} = 1, \\quad \\frac{\\partial M}{\\partial y} = -1$.",
                "Step 3: $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - (-1) = 2$.",
                f"Step 4: Apply Green's Theorem: $\\oint_C M dx + N dy = \\iint_R 2\\,dA = 2 \\times \\text{{Area}}(R)$.",
                f"Step 5: The region $R$ is a disc of radius ${r_circ}$: $\\text{{Area}}(R) = \\pi ({r_circ})^2 = {r_circ**2}\\pi$.",
                f"Step 6: Total integral $= 2 \\times {r_circ**2}\\pi = {k_val}\\pi \\implies k = {k_val}$."
            ],
            final_answer=f"k = {k_val}",
            alternative="Direct line integration using parametric coordinates $x = r\\cos\\theta, y = r\\sin\\theta$, though much longer.",
            mistakes=["Sign error when evaluating $\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = 1 - 1 = 0$ instead of $1 - (-1) = 2$."],
            tags=["Calculus", "Green's Theorem", "Line Integrals", "Double Integrals"]
        )
        questions.append(q)

    # ==========================================
    # 3. DIFFERENTIAL EQUATIONS (~55 questions)
    # ==========================================
    # Set 3A: First Order Linear ODE & Integrating Factor (15 questions)
    for ode_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        p_coef = ode_i + 1
        stmt = f"The integrating factor for the first-order linear differential equation: $$\\frac{{dy}}{{dx}} + \\frac{{{p_coef}}}{{x}}y = x^2 \\quad (x > 0)$$ is:"
        opts = [
            {"id": "A", "text": f"$x^{{{p_coef}}}$"},
            {"id": "B", "text": f"$e^{{{p_coef}x}}$"},
            {"id": "C", "text": f"${p_coef}\\ln(x)$"},
            {"id": "D", "text": f"$x^{{-{p_coef}}}$"}
        ]
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Differential Equations",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Determine the integrating factor $I(x)$ for the standard first-order linear differential equation $y' + P(x)y = Q(x)$.",
            given_info=[f"$P(x) = \\frac{{{p_coef}}}{{x}}$", "$Q(x) = x^2$"],
            concept="For $y' + P(x)y = Q(x)$, the integrating factor is $I(x) = e^{\\int P(x)dx}$.",
            formulas=[{"formula": "I(x) = e^{\\int P(x)dx} = e^{k \\ln x} = x^k", "terms": [{"term": "I(x)", "explanation": "Integrating factor"}]}],
            derivation=[
                f"Step 1: Identify $P(x) = \\frac{{{p_coef}}}{{x}}$.",
                f"Step 2: Compute $\\int P(x)dx = \\int \\frac{{{p_coef}}}{{x}}dx = {p_coef}\\ln(x) = \\ln(x^{{{p_coef}}})$.",
                f"Step 3: $I(x) = e^{{\\ln(x^{p_coef})}} = x^{p_coef}$.",
                "Therefore, the integrating factor is Option A."
            ],
            final_answer="Option A",
            alternative="Multiply $y' + \\frac{k}{x}y$ by $x^k$ to check that it equals $\\frac{d}{dx}(x^k y) = x^k y' + k x^{k-1}y$.",
            mistakes=["Writing $e^{k x}$ instead of $x^k$ by treating $\\int \\frac{1}{x}dx$ as $x$ instead of $\\ln x$."],
            tags=["Differential Equations", "Integrating Factor", "First Order ODE", "Linear ODE"]
        )
        questions.append(q)

    # Set 3B: Second Order Homogeneous Linear ODE (15 questions)
    for ode2_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        w_nat = ode2_i + 2
        stmt = f"Consider the differential equation: $$\\frac{{d^2 y}}{{dt^2}} + {w_nat**2} y = 0$$ with initial conditions $y(0) = 2$ and $\\left.\\frac{{dy}}{{dt}}\\right|_{{t=0}} = 0$. The value of $y\\left(\\frac{{\\pi}}{{{2*w_nat}}}\\right)$ is ________."
        # y(t) = 2*cos(w*t)
        # y(pi/(2*w)) = 2*cos(pi/2) = 0
        ans_ode = "0"
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Differential Equations",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans_ode,
            difficulty="Easy",
            understanding="Solve the second-order undamped harmonic oscillator equation subject to given initial conditions.",
            given_info=[f"$\\ddot{{y}} + {w_nat**2}y = 0$", "$y(0) = 2$", "$\\dot{y}(0) = 0$"],
            concept="The general solution of $\\ddot{y} + \\omega_0^2 y = 0$ is $y(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$.",
            formulas=[{"formula": "y(t) = C_1 \\cos(\\omega_0 t) + C_2 \\sin(\\omega_0 t)", "terms": [{"term": "\\omega_0", "explanation": "Natural angular frequency"}]}],
            derivation=[
                f"Step 1: Characteristic equation is $r^2 + {w_nat**2} = 0 \\implies r = \\pm j{w_nat}$.",
                f"Step 2: General solution is $y(t) = C_1\\cos({w_nat}t) + C_2\\sin({w_nat}t)$.",
                f"Step 3: Apply $y(0) = 2 \\implies C_1(1) + C_2(0) = 2 \\implies C_1 = 2$.",
                f"Step 4: Compute derivative: $y'(t) = -2({w_nat})\\sin({w_nat}t) + C_2({w_nat})\\cos({w_nat}t)$.",
                f"Apply $y'(0) = 0 \\implies C_2({w_nat}) = 0 \\implies C_2 = 0$.",
                f"Step 5: Thus, $y(t) = 2\\cos({w_nat}t)$.",
                f"Step 6: Evaluate at $t = \\frac{{\\pi}}{{{2*w_nat}}}$:",
                f"$$y\\left(\\frac{{\\pi}}{{{2*w_nat}}}\\right) = 2\\cos\\left({w_nat} \\cdot \\frac{{\\pi}}{{{2*w_nat}}}\\right) = 2\\cos\\left(\\frac{{\\pi}}{{2}}\\right) = 2(0) = 0$$."
            ],
            final_answer="0",
            alternative="Notice that the evaluation point corresponds to exactly a quarter period, where the cosine wave always crosses zero.",
            mistakes=["Confusing sine and cosine terms from the initial velocity condition."],
            tags=["Differential Equations", "Second Order ODE", "Initial Value Problem", "Harmonic Oscillator"]
        )
        questions.append(q)

    # Set 3C: Particular Integrals & Cauchy-Euler (15 questions)
    for ce_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        a_p = ce_i + 1
        stmt = f"A particular integral of the differential equation $\\frac{{d^2 y}}{{dx^2}} - 4y = e^{{{a_p}x}}$ (where ${a_p} \\ne 2$) is given by $k e^{{{a_p}x}}$. The value of $k$ is:"
        # P.I. = 1/(D^2 - 4) e^(a*x) = 1/(a^2 - 4) e^(a*x)
        denom = a_p**2 - 4
        opts = [
            {"id": "A", "text": f"$\\frac{{1}}{{{denom}}}$"},
            {"id": "B", "text": f"$\\frac{{1}}{{{a_p - 2}}}$"},
            {"id": "C", "text": f"$\\frac{{{a_p}}}{{4}}$"},
            {"id": "D", "text": f"$\\frac{{1}}{{{a_p^2 + 4}}}$"}
        ] if denom != 0 else [
            {"id": "A", "text": f"$\\frac{{x e^{{2x}}}}{{4}}$"},
            {"id": "B", "text": f"$\\frac{{e^{{2x}}}}{{4}}$"},
            {"id": "C", "text": f"$\\frac{{x^2 e^{{2x}}}}{{2}}$"},
            {"id": "D", "text": "$x e^{2x}$"}
        ]
        ans = "A"
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Differential Equations",
            qtype="MCQ",
            marks=1,
            statement=stmt if denom != 0 else "A particular integral of $\\frac{d^2 y}{dx^2} - 4y = e^{2x}$ is:",
            options=opts,
            official_answer=ans,
            difficulty="Medium",
            understanding="Compute the particular integral using inverse differential operators.",
            given_info=[f"Equation: $(D^2 - 4)y = e^{{{a_p}x}}$"],
            concept="For $f(D)y = e^{ax}$, the particular integral is $y_p = \\frac{1}{f(D)}e^{ax} = \\frac{1}{f(a)}e^{ax}$ provided $f(a) \\ne 0$. If $f(a) = 0$, $y_p = x \\frac{1}{f'(a)}e^{ax}$.",
            formulas=[{"formula": "y_p = \\frac{1}{f(D)}e^{ax} = \\frac{e^{ax}}{f(a)}", "terms": [{"term": "f(D)", "explanation": "Differential polynomial operator"}]}],
            derivation=[
                f"Step 1: Write equation in operator form: $(D^2 - 4)y = e^{{{a_p}x}}$.",
                f"Step 2: Substitute $D = {a_p}$ into $f(D) = D^2 - 4$:",
                f"$$f({a_p}) = ({a_p})^2 - 4 = {denom}$$." if denom != 0 else "Since $f(2) = 0$, apply resonance rule: $y_p = x \\frac{1}{2D}e^{2x} = \\frac{x e^{2x}}{4}$.",
                f"Step 3: Hence, $y_p = \\frac{{1}}{{{denom}}}e^{{{a_p}x}}$." if denom != 0 else "Hence, $y_p = \\frac{x e^{2x}}{4}$."
            ],
            final_answer="Option A",
            alternative="Substitute $y = k e^{ax}$ into the ODE to directly solve for $k$: $k a^2 - 4k = 1 \\implies k = 1/(a^2 - 4)$.",
            mistakes=["Forgetting that when $a$ equals a root of the auxiliary equation, the standard substitution gives division by zero and requires multiplying by $x$."],
            tags=["Differential Equations", "Particular Integral", "Operator Method", "Non-homogeneous ODE"]
        )
        questions.append(q)

    # Set 3D: Boundary Value & Separation of Variables (10 questions)
    for bv_i in range(10):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        n_mode = bv_i + 1
        stmt = f"Consider the boundary value problem: $$\\frac{{d^2 y}}{{dx^2}} + \\lambda y = 0, \\quad y(0) = 0, \\quad y(1) = 0$$ The eigenvalues $\\lambda_n$ for non-trivial solutions are $\\lambda_n = (n\\pi)^2$ for $n = 1, 2, 3, \\dots$. For the fundamental mode ($n = {n_mode}$), the value of $\\lambda_{{{n_mode}}}$ is $k\\pi^2$. The integer $k$ is ________."
        ans_k = str(n_mode ** 2)
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Differential Equations",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans_k,
            difficulty="Medium",
            understanding="Find the eigenvalues of a standard Sturm-Liouville boundary value problem on $[0, 1]$.",
            given_info=["$y'' + \\lambda y = 0$", "$y(0) = 0$", "$y(1) = 0$", f"Mode index: $n = {n_mode}$"],
            concept="For $y'' + \\lambda y = 0$ with Dirichlet boundary conditions $y(0)=y(L)=0$, the eigenvalues are $\\lambda_n = (\\frac{n\\pi}{L})^2$ with eigenfunctions $y_n(x) = \\sin(\\frac{n\\pi x}{L})$.",
            formulas=[{"formula": "\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2", "terms": [{"term": "L", "explanation": "Domain length = 1"}]}],
            derivation=[
                "Step 1: For $\\lambda > 0$, let $\\lambda = \\beta^2$. Then $y(x) = C_1\\cos(\\beta x) + C_2\\sin(\\beta x)$.",
                "Step 2: $y(0) = 0 \\implies C_1 = 0 \\implies y(x) = C_2\\sin(\\beta x)$.",
                "Step 3: $y(1) = 0 \\implies C_2\\sin(\\beta) = 0$. For non-trivial solutions ($C_2 \\ne 0$), $\\sin(\\beta) = 0 \\implies \\beta = n\\pi$.",
                f"Step 4: Therefore, $\\lambda_n = \\beta^2 = (n\\pi)^2 = n^2 \\pi^2$.",
                f"Step 5: For mode $n = {n_mode}$, $\\lambda_{{{n_mode}}} = ({n_mode})^2 \\pi^2 = {n_mode**2}\\pi^2 \\implies k = {ans_k}$."
            ],
            final_answer=f"k = {ans_k}",
            alternative="Directly recognize the standard harmonic standing wave relation where half-wavelength fits $n$ times into length $L=1$.",
            mistakes=["Squaring only $n$ and forgetting that $\\pi$ is already factored into $\\lambda = k\\pi^2$."],
            tags=["Differential Equations", "Boundary Value Problems", "Sturm-Liouville", "Eigenvalues"]
        )
        questions.append(q)

    # ==========================================
    # 4. COMPLEX ANALYSIS (~50 questions)
    # ==========================================
    # Set 4A: Cauchy-Riemann & Analytic Functions (15 questions)
    for cr_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        k_cr = cr_i + 1
        stmt = f"If the function $f(z) = (x^2 - y^2 + {k_cr}x) + j\\,v(x, y)$ is analytic in the entire complex plane, and $v(0, 0) = 0$, then the harmonic conjugate $v(x, y)$ is:"
        opts = [
            {"id": "A", "text": f"$2xy + {k_cr}y$"},
            {"id": "B", "text": f"$2xy - {k_cr}y$"},
            {"id": "C", "text": f"$x^2 - {k_cr}y$"},
            {"id": "D", "text": f"$-2xy + {k_cr}x$"}
        ]
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Complex Analysis",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Use the Cauchy-Riemann equations to determine the harmonic conjugate $v(x, y)$ of a given real part $u(x, y)$.",
            given_info=[f"$u(x, y) = x^2 - y^2 + {k_cr}x$", "$v(0, 0) = 0$"],
            concept="The Cauchy-Riemann equations for an analytic function $f(z) = u + jv$ are $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
            formulas=[{"formula": "\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x}, \\quad \\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}", "terms": [{"term": "u, v", "explanation": "Real and imaginary parts of f(z)"}]}],
            derivation=[
                f"Step 1: Compute partial derivatives of $u$:",
                f"$\\frac{{\\partial u}}{{\\partial x}} = 2x + {k_cr}, \\quad \\frac{{\\partial u}}{{\\partial y}} = -2y$.",
                f"Step 2: Using the first C-R equation:",
                f"$\\frac{{\\partial v}}{{\\partial y}} = \\frac{{\\partial u}}{{\\partial x}} = 2x + {k_cr}$.",
                f"Step 3: Integrate with respect to $y$:",
                f"$v(x, y) = \\int (2x + {k_cr})dy = 2xy + {k_cr}y + g(x)$.",
                f"Step 4: Using the second C-R equation:",
                f"$\\frac{{\\partial v}}{{\\partial x}} = 2y + g'(x) = -\\frac{{\\partial u}}{{\\partial y}} = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$.",
                f"Step 5: Apply boundary condition $v(0, 0) = 0 \\implies C = 0$.",
                f"Thus, $v(x, y) = 2xy + {k_cr}y$ (Option A)."
            ],
            final_answer="Option A",
            alternative="Milne-Thomson method: $f'(z) = u_x(z, 0) - j u_y(z, 0) = (2z + k) - j(0) = 2z + k$. Integrating gives $f(z) = z^2 + kz + C = (x+jy)^2 + k(x+jy) = x^2 - y^2 + kx + j(2xy + ky)$.",
            mistakes=["Missing the negative sign in the second Cauchy-Riemann equation: $\\frac{\\partial v}{\\partial x} = -\\frac{\\partial u}{\\partial y}$."],
            tags=["Complex Analysis", "Cauchy-Riemann Equations", "Analytic Functions", "Harmonic Conjugate"]
        )
        questions.append(q)

    # Set 4B: Cauchy Integral Formula & Residues (20 questions)
    for cif_i in range(20):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        z0 = (cif_i % 3) + 1
        r_cont = z0 + 1
        stmt = f"The value of the contour integral: $$\\oint_C \\frac{{e^{{2z}}}}{{(z - {z0})}}dz$$ along the counter-clockwise circle $C: |z| = {r_cont}$ is $k\\pi j e^{{{2*z0}}}$. The integer $k$ is ________."
        # By Cauchy's Integral Formula: \oint f(z)/(z - z0) dz = 2*pi*j*f(z0) = 2*pi*j*e^(2*z0)
        # k = 2
        ans_k = "2"
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Complex Analysis",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans_k,
            difficulty="Easy",
            understanding="Evaluate the complex contour integral using Cauchy's Integral Formula for a simple interior pole.",
            given_info=[f"Integrand: $\\frac{{e^{{2z}}}}{{z - {z0}}}$", f"Contour: $|z| = {r_cont}$ (counter-clockwise)"],
            concept="Cauchy's Integral Formula: $\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)$ if $z_0$ lies strictly inside the simple closed contour $C$.",
            formulas=[{"formula": "\\oint_C \\frac{f(z)}{z - z_0}dz = 2\\pi j f(z_0)", "terms": [{"term": "f(z_0)", "explanation": "Value of analytic numerator evaluated at pole z0"}]}],
            derivation=[
                f"Step 1: The singularity is at $z = {z0}$.",
                f"Step 2: Check if $z = {z0}$ lies inside $C: |z| = {r_cont}$. Since $|{z0}| = {z0} < {r_cont}$, the pole is inside $C$.",
                f"Step 3: The numerator $f(z) = e^{{2z}}$ is analytic everywhere (entire function).",
                f"Step 4: By Cauchy's Integral Formula:",
                f"$$\\oint_C \\frac{{e^{{2z}}}}{{z - {z0}}}dz = 2\\pi j f({z0}) = 2\\pi j e^{{2({z0})}} = 2\\pi j e^{{{2*z0}}}$$.",
                f"Step 5: Comparing with $k\\pi j e^{{{2*z0}}}$, we find $k = 2$."
            ],
            final_answer="k = 2",
            alternative="Residue theorem: The residue at simple pole $z={z0}$ is $\\lim_{z\\to {z0}}(z - {z0})\\frac{e^{2z}}{z - {z0}} = e^{2({z0})}$. Integral $= 2\\pi j \\times \\text{Res} = 2\\pi j e^{2({z0})}$.",
            mistakes=["Forgetting the factor of $2\\pi j$ or assuming the integral is zero without checking whether the pole is inside or outside the contour."],
            tags=["Complex Analysis", "Cauchy Integral Formula", "Residue Theorem", "Contour Integration"]
        )
        questions.append(q)

    # Set 4C: Singularities & Residues at Higher Order Poles (15 questions)
    for res_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        m_order = 2
        a_pole = (res_i % 4) + 1
        stmt = f"The residue of the complex function $f(z) = \\frac{{z + {a_pole}}}{{(z - 1)^2}}$ at its pole $z = 1$ is ________."
        # Res = d/dz (z + a) |_{z=1} = 1
        ans_res = "1"
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Complex Analysis",
            qtype="NAT",
            marks=2,
            statement=stmt,
            options=None,
            official_answer=ans_res,
            difficulty="Medium",
            understanding="Calculate the residue at a pole of order 2 using the derivative residue formula.",
            given_info=[f"Function: $f(z) = \\frac{{z + {a_pole}}}{{(z - 1)^2}}$", "Pole at $z = 1$ of order $m = 2$."],
            concept="The residue at a pole of order $m$ is given by $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}\\left[(z - z_0)^m f(z)\\right]$.",
            formulas=[{"formula": "\\text{Res}(f, z_0) = \\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]", "terms": [{"term": "m", "explanation": "Order of the pole"}]}],
            derivation=[
                "Step 1: The pole at $z = 1$ has multiplicity $m = 2$.",
                "Step 2: Apply residue formula with $m = 2$:",
                f"$$\\text{{Res}}(f, 1) = \\frac{{1}}{{(2-1)!}}\\lim_{{z \\to 1}} \\frac{{d}}{{dz}}\\left[(z - 1)^2 \\frac{{z + {a_pole}}}{{(z - 1)^2}}\\right]$$",
                f"Step 3: Simplify inside: $\\frac{{d}}{{dz}}(z + {a_pole}) = 1$.",
                "Step 4: Take the limit: $\\lim_{z \\to 1}(1) = 1$.",
                "Therefore, the residue is 1."
            ],
            final_answer="Residue = 1",
            alternative="Laurent series expansion: Substitute $w = z - 1 \\implies z = w + 1$. Then $f(w) = \\frac{w + 1 + a}{w^2} = \\frac{1}{w} + \\frac{1+a}{w^2}$. The coefficient of $\\frac{1}{w}$ is 1.",
            mistakes=["Evaluating $z + a$ directly at $z=1$ without differentiating for a second-order pole."],
            tags=["Complex Analysis", "Residue", "Poles", "Laurent Series"]
        )
        questions.append(q)

    # ==========================================
    # 5. PROBABILITY AND STATISTICS (~55 questions)
    # ==========================================
    # Set 5A: Bayes' Theorem & Conditional Probability (15 questions)
    for prob_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        p_prev = 0.01 * ((prob_i % 5) + 1) # 1% to 5%
        sens = 0.95
        spec = 0.90
        # P(D|+) = (sens * p_prev) / (sens * p_prev + (1 - spec)*(1 - p_prev))
        num = sens * p_prev
        den = num + (1.0 - spec) * (1.0 - p_prev)
        post = round(num / den, 3)
        stmt = f"In a medical screening test, a disease has a prevalence of {p_prev*100:.1f}\\% in the population. The test sensitivity (true positive rate) is 95\\%, and specificity (true negative rate) is 90\\%. If a randomly selected person tests positive, the probability that the person actually has the disease is ________ (rounded off to two decimal places)."
        ans_post = [round(post - 0.02, 2), round(post + 0.02, 2)]
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Probability and Statistics",
            qtype="NAT",
            marks=2,
            statement=stmt,
            options=None,
            official_answer=ans_post,
            difficulty="Hard",
            understanding="Calculate posterior probability using Bayes' Theorem given prior prevalence, sensitivity, and specificity.",
            given_info=[
                f"Prior probability $P(D) = {p_prev}$",
                f"Sensitivity $P(+|D) = 0.95$",
                f"Specificity $P(-|D^c) = 0.90 \\implies P(+|D^c) = 0.10$"
            ],
            concept="Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$.",
            formulas=[{"formula": "P(D|+) = \\frac{P(+|D)P(D)}{P(+)}", "terms": [{"term": "P(+)", "explanation": "Total probability of testing positive"}]}],
            derivation=[
                f"Step 1: Compute numerator $P(+|D)P(D) = 0.95 \\times {p_prev} = {num:.4f}$.",
                f"Step 2: Compute false positive contribution $P(+|D^c)P(D^c) = (1 - 0.90)(1 - {p_prev}) = 0.10 \\times {1-p_prev:.4f} = {(1-spec)*(1-p_prev):.4f}$.",
                f"Step 3: Total probability of testing positive: $P(+) = {num:.4f} + {(1-spec)*(1-p_prev):.4f} = {den:.4f}$.",
                f"Step 4: Compute posterior: $P(D|+) = \\frac{{{num:.4f}}}{{{den:.4f}}} \\approx {post}$."
            ],
            final_answer=f"P(D|+) = {post}",
            alternative="Use natural frequencies: In a sample of 10,000 people, calculate the exact number of true positives and false positives.",
            mistakes=["Confusing $P(D|+)$ with $P(+|D)$ (the Base Rate Fallacy)."],
            tags=["Probability and Statistics", "Bayes' Theorem", "Conditional Probability", "Sensitivity"]
        )
        questions.append(q)

    # Set 5B: Poisson & Binomial Distributions (15 questions)
    for dist_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        lam = (dist_i % 4) + 2
        # Poisson(lam): P(X = 0) = e^(-lam), P(X = 1) = lam * e^(-lam)
        # P(X >= 1) = 1 - e^(-lam)
        p_ge1 = round(1.0 - math.exp(-lam), 3)
        stmt = f"Packets arrive at a network router according to a Poisson process at an average rate of $\\lambda = {lam}$ packets per millisecond. The probability that at least one packet arrives in a given 1-millisecond interval is ________ (rounded off to two decimal places)."
        ans_p = [round(p_ge1 - 0.02, 2), round(p_ge1 + 0.02, 2)]
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Probability and Statistics",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans_p,
            difficulty="Easy",
            understanding="Find the probability of at least one arrival in a Poisson process using the complement rule.",
            given_info=[f"Arrival rate $\\lambda = {lam}\\text{{ ms}}^{{-1}}$", "Time interval $T = 1\\text{ ms}$"],
            concept="For a Poisson distribution with mean parameter $\\alpha = \\lambda T$, $P(X = k) = \\frac{\\alpha^k e^{-\\alpha}}{k!}$. The probability of at least one event is $P(X \\ge 1) = 1 - P(X = 0)$.",
            formulas=[{"formula": "P(X \\ge 1) = 1 - e^{-\\lambda T}", "terms": [{"term": "P(X = 0) = e^{-\\lambda T}", "explanation": "Probability of zero arrivals"}]}],
            derivation=[
                f"Step 1: Parameter $\\alpha = \\lambda T = ({lam})(1) = {lam}$.",
                f"Step 2: Probability of zero arrivals: $P(X = 0) = \\frac{{{lam}^0 e^{{-{lam}}}}}{{0!}} = e^{{-{lam}}} \\approx {math.exp(-lam):.4f}$.",
                f"Step 3: Probability of at least one arrival:",
                f"$$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{{-{lam}}} = 1 - {math.exp(-lam):.4f} \\approx {p_ge1}$$."
            ],
            final_answer=f"P(X >= 1) = {p_ge1}",
            alternative="Direct complement computation avoids summing infinite terms $P(X=1) + P(X=2) + \\dots$.",
            mistakes=["Calculating only $P(X=1)$ instead of $P(X \\ge 1)$."],
            tags=["Probability and Statistics", "Poisson Distribution", "Complement Rule", "Arrival Process"]
        )
        questions.append(q)

    # Set 5C: Continuous Distributions (Uniform, Normal, Exponential) (15 questions)
    for cont_i in range(15):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        a_unif = cont_i
        b_unif = a_unif + 6
        var_unif = round(((b_unif - a_unif) ** 2) / 12.0, 2) # (6^2)/12 = 3.0
        stmt = f"A random variable $X$ is uniformly distributed over the interval $[{a_unif}, {b_unif}]$. The variance of $X$ is equal to ________."
        ans_var = str(int(var_unif)) if var_unif.is_integer() else str(var_unif)
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Probability and Statistics",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans_var,
            difficulty="Easy",
            understanding="Compute the variance of a continuous uniform random variable $U(a, b)$.",
            given_info=[f"Interval: $[a, b] = [{a_unif}, {b_unif}]$", f"Range: $b - a = {b_unif - a_unif}$"],
            concept="For $X \\sim U(a, b)$, the mean is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b - a)^2}{12}$.",
            formulas=[{"formula": "\\text{Var}(X) = \\frac{(b - a)^2}{12}", "terms": [{"term": "b - a", "explanation": "Width of the uniform support"}]}],
            derivation=[
                f"Step 1: Identify bounds $a = {a_unif}$ and $b = {b_unif}$.",
                f"Step 2: Compute width: $b - a = {b_unif} - {a_unif} = {b_unif - a_unif}$.",
                f"Step 3: Apply variance formula:",
                f"$$\\text{{Var}}(X) = \\frac{{({b_unif - a_unif})^2}}{{12}} = \\frac{{{ (b_unif - a_unif)**2 }}}{{12}} = {ans_var}$$."
            ],
            final_answer=f"Variance = {ans_var}",
            alternative="By integration: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\int_a^b \\frac{x^2}{b-a}dx - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{b^3 - a^3}{3(b-a)} - \\frac{(a+b)^2}{4} = \\frac{(b-a)^2}{12}$.",
            mistakes=["Dividing by 6 or 24 instead of 12 in the variance formula."],
            tags=["Probability and Statistics", "Uniform Distribution", "Variance", "Continuous RV"]
        )
        questions.append(q)

    # Set 5D: Expectation, Variance & Covariance (10 questions)
    for cov_i in range(10):
        qid = f"PRAC-MATH-{idx:03d}"
        idx += 1
        var_x = 4 + cov_i
        var_y = 9 + cov_i
        # If X and Y are independent, Var(2X - 3Y) = 4*Var(X) + 9*Var(Y)
        v_comb = 4 * var_x + 9 * var_y
        stmt = f"Let $X$ and $Y$ be two independent random variables with variances $\\text{{Var}}(X) = {var_x}$ and $\\text{{Var}}(Y) = {var_y}$. The variance of the linear combination $Z = 2X - 3Y$ is ________."
        q = make_question(
            qid=qid,
            subject="Engineering Mathematics",
            topic="Probability and Statistics",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=str(v_comb),
            difficulty="Easy",
            understanding="Calculate the variance of a linear combination of independent random variables.",
            given_info=[f"$\\text{{Var}}(X) = {var_x}$", f"$\\text{{Var}}(Y) = {var_y}$", "Independence: $\\text{Cov}(X, Y) = 0$"],
            concept="For independent random variables, $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$.",
            formulas=[{"formula": "\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)", "terms": [{"term": "a^2, b^2", "explanation": "Square of linear coefficients"}]}],
            derivation=[
                f"Step 1: Linear combination $Z = 2X - 3Y$ with $a = 2, b = -3$.",
                f"Step 2: Since $X$ and $Y$ are independent, $\\text{{Cov}}(X, Y) = 0$.",
                f"Step 3: $\\text{{Var}}(Z) = (2)^2 \\text{{Var}}(X) + (-3)^2 \\text{{Var}}(Y) = 4({var_x}) + 9({var_y})$.",
                f"Step 4: Compute numerical value: $4({var_x}) + 9({var_y}) = {4*var_x} + {9*var_y} = {v_comb}$."
            ],
            final_answer=f"Variance = {v_comb}",
            alternative="Notice that the minus sign in $-3Y$ squares to $+9$, so variances always add, never subtract.",
            mistakes=["Subtracting variances: $4\\text{Var}(X) - 9\\text{Var}(Y)$ instead of adding."],
            tags=["Probability and Statistics", "Variance Properties", "Independent RVs", "Linear Combination"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} Engineering Mathematics practice questions.")
    return questions
