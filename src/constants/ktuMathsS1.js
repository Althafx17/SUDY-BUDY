// KTU MAT101: Linear Algebra and Calculus (2019 Scheme)
// 5 Modules + Comprehensive Previous Year Question Papers (2019 - 2026) with Step-by-Step Solutions

export const KTU_MATHS_S1 = {
  id: 'sub-mat101',
  name: 'Linear Algebra and Calculus',
  code: 'MAT101',
  color: 'violet',
  description: 'Linear algebra, matrix rank, systems of linear equations, multivariable calculus, and infinite series under KTU 2019 Scheme.',
  instructor: 'KTU Dept. of Mathematics',
  examDate: '2026-12-14T09:30',
  examVenue: 'KTU Exam Hall 1',
  youtubeUrl: 'https://www.youtube.com/watch?v=26QPDBe-NB8',
  todos: [
    { id: 'todo-mat-1', text: 'Master Cayley-Hamilton theorem and inverse matrix derivation', priority: 'high', done: true, createdAt: '2026-09-20' },
    { id: 'todo-mat-2', text: 'Practice change of order of integration in double integrals', priority: 'high', done: false, createdAt: '2026-09-22' },
    { id: 'todo-mat-3', text: 'Solve Fourier series half-range cosine expansion problems', priority: 'medium', done: false, createdAt: '2026-09-24' }
  ],
  modules: [
    {
      id: 'mod-mat101-1',
      number: 1,
      name: 'Module 1: Linear Algebra & Systems of Equations',
      topics: [
        {
          id: 'top-mat-1-1',
          name: 'Rank of a Matrix & Echelon Form',
          status: 'studied',
          notes: 'Row operations preserve rank. Number of non-zero rows in row echelon form equals rank(A). Use elementary row transformations only.',
          tags: ['Core Theory', 'High Weightage', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-mat-1', name: 'Elementary row transformations', done: true },
            { id: 'st-mat-2', name: 'Row echelon and reduced row echelon form', done: true },
            { id: 'st-mat-3', name: 'Computation of matrix rank', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-1-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model / Final (Set A)',
              marks: 7,
              text: 'Find the rank of the matrix A = [[1, 2, -1, 3], [3, 4, 0, -1], [-1, 0, -2, 7]] by reducing it to row echelon form.',
              frequency: 'Repeated in 2026, 2024, 2022',
              solved: true,
              hint: 'Apply R2 -> R2 - 3R1, R3 -> R3 + R1. Then R3 -> R3 - R2.',
              answer: 'Step 1: Given matrix A =\n[ 1   2  -1   3 ]\n[ 3   4   0  -1 ]\n[-1   0  -2   7 ]\n\nStep 2: Apply elementary row operations to create zeros below pivot a11=1:\nR2 -> R2 - 3R1:\nR2 = [3-3(1), 4-3(2), 0-3(-1), -1-3(3)] = [0, -2, 3, -10]\nR3 -> R3 + R1:\nR3 = [-1+1, 0+2, -2-1, 7+3] = [0, 2, -3, 10]\nMatrix becomes:\n[ 1   2  -1   3 ]\n[ 0  -2   3 -10 ]\n[ 0   2  -3  10 ]\n\nStep 3: Eliminate entry below pivot a22:\nR3 -> R3 + R2:\nR3 = [0, 0, 0, 0]\n\nRow Echelon Form:\n[ 1   2  -1   3 ]\n[ 0  -2   3 -10 ]\n[ 0   0   0   0 ]\n\nConclusion: Number of non-zero rows = 2.\nTherefore, Rank(A) = 2.'
            },
            {
              id: 'pq-mat-1-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set B)',
              marks: 3,
              text: 'Define rank of a matrix and explain why elementary row operations do not alter the rank of a matrix.',
              frequency: 'Classic Part A Question (Asked in 2024, 2021, 2019)',
              solved: true,
              hint: 'Definition: Maximum number of linearly independent row vectors or dimension of row space.',
              answer: 'Definition: The rank of a matrix is defined as the maximum number of linearly independent rows (or columns) in the matrix, or equivalently, the order of the highest-order non-zero minor.\n\nWhy row operations preserve rank:\n1. Elementary row operations correspond to pre-multiplying by non-singular elementary matrices.\n2. Since elementary matrices are invertible (rank is preserved under multiplication by non-singular matrices), the row space dimension remains invariant.\n3. Hence, elementary row transformations do not alter the rank.'
            },
            {
              id: 'pq-mat-1-3',
              year: 2022,
              exam: 'KTU Dec 2022 Final (Set A)',
              marks: 7,
              text: 'Find the values of a and b for which the rank of the matrix [[1, 1, 1], [1, 2, 3], [1, 4, a]] is (i) 3, (ii) 2.',
              frequency: 'Asked in Dec 2022, July 2021',
              solved: false,
              hint: 'Row reduce: R2 -> R2 - R1, R3 -> R3 - R1, then R3 -> R3 - 3R2.',
              answer: 'Step 1: Write matrix:\n[1  1  1]\n[1  2  3]\n[1  4  a]\n\nStep 2: Row transformations:\nR2 -> R2 - R1: [0, 1, 2]\nR3 -> R3 - R1: [0, 3, a - 1]\n\nStep 3: R3 -> R3 - 3R2:\nR3 = [0, 3 - 3, (a - 1) - 6] = [0, 0, a - 7]\n\nEchelon Form:\n[1  1  1]\n[0  1  2]\n[0  0  a-7]\n\nAnalysis:\n(i) Rank = 3 if the last row is non-zero => a - 7 != 0 => a != 7 (for any value of b).\n(ii) Rank = 2 if the last row is all zeros => a - 7 = 0 => a = 7.'
            },
            {
              id: 'pq-mat-1-4',
              year: 2019,
              exam: 'KTU Dec 2019 Inaugural Scheme Exam',
              marks: 3,
              text: 'Show that if A is an m x n matrix, then rank(A) <= min(m, n).',
              frequency: 'Repeated 3 times: 2019, 2020, 2023',
              solved: true,
              hint: 'Rank is the dimension of row space (<= m) and dimension of column space (<= n).',
              answer: 'Proof:\n1. The row space of A is a subspace of R^n, and since there are m rows, dim(Row Space) <= m.\n2. The column space of A is a subspace of R^m, and since there are n columns, dim(Col Space) <= n.\n3. By fundamental theorem of linear algebra, row rank = column rank = rank(A).\n4. Therefore, rank(A) <= m and rank(A) <= n, which gives rank(A) <= min(m, n).'
            }
          ]
        },
        {
          id: 'top-mat-1-2',
          name: 'Consistency & Solutions of Linear Systems',
          status: 'needs-revision',
          notes: 'Rouche-Frobenius theorem: Consistent if rank(A) = rank([A|B]). Unique solution if rank = n, infinitely many if rank < n.',
          tags: ['Numerical', 'Formula', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-4', name: 'Non-homogeneous systems AX = B and augmented matrix', done: true },
            { id: 'st-mat-5', name: 'Gauss Elimination method for consistency', done: false },
            { id: 'st-mat-6', name: 'Homogeneous systems AX = 0 and trivial/non-trivial solutions', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-1-5',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set A)',
              marks: 14,
              text: 'Investigate for what values of lambda and mu the system of equations:\nx + y + z = 6\nx + 2y + 3z = 10\nx + 2y + lambda*z = mu\nhas: (i) no solution, (ii) a unique solution, (iii) infinitely many solutions.',
              frequency: 'KTU Golden 14-Mark Question (Asked in 2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Reduce augmented matrix [A|B] to echelon form. Analyze (lambda - 3) and (mu - 10).',
              answer: 'Step 1: Form the augmented matrix [A|B]:\n[ 1  1  1 |  6 ]\n[ 1  2  3 | 10 ]\n[ 1  2  λ |  μ ]\n\nStep 2: Elementary row operations:\nR2 -> R2 - R1: [0, 1, 2 | 4]\nR3 -> R3 - R1: [0, 1, λ-1 | μ-6]\n\nStep 3: R3 -> R3 - R2:\nR3 = [0, 1-1, (λ-1)-2 | (μ-6)-4] = [0, 0, λ-3 | μ-10]\n\nEchelon form of [A|B]:\n[ 1  1   1   |   6   ]\n[ 0  1   2   |   4   ]\n[ 0  0  λ-3  |  μ-10 ]\n\nConclusions based on Rouché-Capelli Theorem:\n(i) No solution: Rank(A) != Rank([A|B])\nThis occurs when λ - 3 = 0 and μ - 10 != 0 => λ = 3 and μ != 10.\n\n(ii) Unique solution: Rank(A) = Rank([A|B]) = 3 (number of unknowns)\nThis occurs when λ - 3 != 0 => λ != 3 (for any real value of μ).\n\n(iii) Infinitely many solutions: Rank(A) = Rank([A|B]) < 3\nThis occurs when λ - 3 = 0 and μ - 10 = 0 => λ = 3 and μ = 10.'
            },
            {
              id: 'pq-mat-1-6',
              year: 2023,
              exam: 'KTU June 2023 Supplementary',
              marks: 7,
              text: 'Solve completely using Gauss Elimination: 2x - y + 3z = 8, -x + 2y + z = 4, 3x + y - 4z = 0.',
              frequency: 'Asked in 2023, 2020',
              solved: false,
              hint: 'Write augmented matrix, make pivot 1, eliminate lower entries, perform back-substitution.',
              answer: 'Step 1: Augmented matrix:\n[  2  -1   3 | 8 ]\n[ -1   2   1 | 4 ]\n[  3   1  -4 | 0 ]\n\nStep 2: Swap R1 <-> -R2 to get leading 1:\n[ 1  -2  -1 | -4 ]\n[ 2  -1   3 |  8 ]\n[ 3   1  -4 |  0 ]\n\nStep 3: Eliminate x below pivot:\nR2 -> R2 - 2R1: [0, 3, 5 | 16]\nR3 -> R3 - 3R1: [0, 7, -1 | 12]\n\nStep 4: R3 -> 3*R3 - 7*R2:\n3*[0, 7, -1 | 12] - 7*[0, 3, 5 | 16] = [0, 0, -38 | 36 - 112 = -76]\n=> -38z = -76 => z = 2.\n\nStep 5: Back-substitution:\n3y + 5(2) = 16 => 3y = 6 => y = 2.\nx - 2(2) - (2) = -4 => x - 6 = -4 => x = 2.\n\nFinal Solution: x = 2, y = 2, z = 2.'
            },
            {
              id: 'pq-mat-1-7',
              year: 2020,
              exam: 'KTU Dec 2020 Final',
              marks: 3,
              text: 'State the condition for a homogeneous system AX = 0 of n equations in n unknowns to have non-trivial solutions.',
              frequency: 'Part A regular (2020, 2022)',
              solved: true,
              hint: 'det(A) = 0 or rank(A) < n.',
              answer: 'Condition for non-trivial solutions in AX = 0:\nA system of n homogeneous linear equations in n unknowns has a non-trivial (non-zero) solution if and only if:\n1. The coefficient matrix A is singular, i.e., det(A) = 0.\n2. Equivalently, rank(A) < n (rank is strictly less than the number of unknowns).'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat101-2',
      number: 2,
      name: 'Module 2: Eigenvalues, Diagonalization & Quadratic Forms',
      topics: [
        {
          id: 'top-mat-2-1',
          name: 'Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem',
          status: 'studied',
          notes: 'Characteristic equation: det(A - lambda*I) = 0. Cayley-Hamilton: Every square matrix satisfies its own characteristic equation. Inverse: A^-1 = -(1/a0)(A^(n-1) + ... + a1*I).',
          tags: ['Core Theory', 'High Weightage', 'Sure Shot'],
          subTopics: [
            { id: 'st-mat-7', name: 'Characteristic equation and properties of eigenvalues', done: true },
            { id: 'st-mat-8', name: 'Cayley-Hamilton theorem verification and inverse calculation', done: true },
            { id: 'st-mat-9', name: 'Computation of eigenvectors for distinct and repeated eigenvalues', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-2-1',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set B)',
              marks: 14,
              text: 'Verify Cayley-Hamilton theorem for A = [[2, -1, 1], [-1, 2, -1], [1, -1, 2]] and hence compute A^-1 and A^4.',
              frequency: 'Every 2 Years in KTU (2025, 2023, 2021, 2019)',
              solved: true,
              hint: 'Find characteristic polynomial: det(A - λI) = -λ^3 + s1 λ^2 - s2 λ + s3 = 0, where s1=tr(A), s2=sum of principal minors, s3=det(A).',
              answer: 'Step 1: Compute invariants of A:\ns1 = trace(A) = 2 + 2 + 2 = 6\ns2 = M11 + M22 + M33 = (4 - 1) + (4 - 1) + (4 - 1) = 3 + 3 + 3 = 9\ns3 = det(A) = 2(3) - (-1)(-2 + 1) + 1(1 - 2) = 6 - 1 - 1 = 4\nCharacteristic equation: λ^3 - 6λ^2 + 9λ - 4 = 0.\n\nStep 2: Cayley-Hamilton Theorem states A satisfies:\nA^3 - 6A^2 + 9A - 4I = 0.\nCompute A^2:\n[ 6 -5  5 ]\n[-5  6 -5 ]\n[ 5 -5  6 ]\nCompute A^3:\n[ 22 -21  21 ]\n[-21  22 -21 ]\n[ 21 -21  22 ]\nCheck A^3 - 6A^2 + 9A - 4I = 0 (Holds true! Verified).\n\nStep 3: Finding A^-1:\nMultiply equation by A^-1:\nA^2 - 6A + 9I - 4A^-1 = 0 => A^-1 = (1/4)(A^2 - 6A + 9I)\nA^-1 = (1/4) *\n[ 3  1 -1 ]\n[ 1  3  1 ]\n[-1  1  3 ]\n\nStep 4: Finding A^4:\nA^4 = 6A^3 - 9A^2 + 4A.'
            },
            {
              id: 'pq-mat-2-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set A)',
              marks: 3,
              text: 'If 2, 3, 5 are the eigenvalues of a 3x3 matrix A, find the eigenvalues of (i) A^2, (ii) adj(A), and (iii) 3A + 2I.',
              frequency: 'Repeated Part A Property Problem (2024, 2022, 2020)',
              solved: true,
              hint: 'Eigenvalues of A^k are λ^k. Eigenvalues of adj(A) are det(A)/λ. For f(A), eigenvalues are f(λ).',
              answer: 'Given eigenvalues of A: λ1 = 2, λ2 = 3, λ3 = 5.\ndet(A) = 2 * 3 * 5 = 30.\n\n(i) Eigenvalues of A^2: λ^2\n2^2 = 4, 3^2 = 9, 5^2 = 25.\n\n(ii) Eigenvalues of adj(A): det(A) / λ\n30/2 = 15, 30/3 = 10, 30/5 = 6.\n\n(iii) Eigenvalues of 3A + 2I: 3λ + 2\n3(2) + 2 = 8, 3(3) + 2 = 11, 3(5) + 2 = 17.'
            },
            {
              id: 'pq-mat-2-3',
              year: 2021,
              exam: 'KTU July 2021 Final',
              marks: 7,
              text: 'Find the eigenvalues and eigenvectors of the matrix A = [[3, 1, 4], [0, 2, 6], [0, 0, 5]].',
              frequency: 'Asked in 2021, 2019',
              solved: false,
              hint: 'For triangular matrices, eigenvalues are the diagonal entries directly.',
              answer: 'Step 1: Since A is an upper triangular matrix, its eigenvalues are simply the diagonal entries:\nλ1 = 3, λ2 = 2, λ3 = 5.\n\nStep 2: Eigenvector for λ1 = 3: (A - 3I)X = 0:\n[0  1  4][x1]   [0]\n[0 -1  6][x2] = [0]\n[0  0  2][x3]   [0]\nFrom row 3, 2*x3 = 0 => x3 = 0.\nFrom row 1, x2 = 0. x1 is arbitrary (choose x1 = 1).\nX1 = [1, 0, 0]^T.\n\nStep 3: Eigenvector for λ2 = 2: (A - 2I)X = 0:\n[1  1  4][x1] = [0]\n[0  0  6][x2] = [0]\n[0  0  3][x3] = [0]\nx3 = 0 => x1 + x2 = 0 => x1 = -x2.\nChoose x2 = 1 => X2 = [-1, 1, 0]^T.\n\nStep 4: Eigenvector for λ3 = 5: (A - 5I)X = 0:\n[-2  1  4][x1] = [0]\n[ 0 -3  6][x2] = [0]\n[ 0  0  0][x3] = [0]\n-3*x2 + 6*x3 = 0 => x2 = 2*x3. Let x3 = 1 => x2 = 2.\n-2*x1 + (2) + 4(1) = 0 => -2*x1 = -6 => x1 = 3.\nX3 = [3, 2, 1]^T.'
            }
          ]
        },
        {
          id: 'top-mat-2-2',
          name: 'Orthogonal Diagonalization & Quadratic Forms',
          status: 'needs-revision',
          notes: 'Real symmetric matrices have real eigenvalues and orthogonal eigenvectors. Canonical form Q = y1^2 λ1 + y2^2 λ2 + y3^2 λ3. Nature: Index and Signature.',
          tags: ['Orthogonal Matrix', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-10', name: 'Gram-Schmidt orthogonalization process', done: false },
            { id: 'st-mat-11', name: 'Orthogonal transformation X = PY and diagonalization D = P^T A P', done: false },
            { id: 'st-mat-12', name: 'Reduction of quadratic forms to canonical form', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-2-4',
              year: 2026,
              exam: 'KTU 2026 Model QP',
              marks: 14,
              text: 'Reduce the quadratic form Q = 3x1^2 + 5x2^2 + 3x3^2 - 2x1*x2 + 2x1*x3 - 2x2*x3 to canonical form by orthogonal transformation and state its nature, rank, index, and signature.',
              frequency: 'Frequent 14-Mark Question in KTU (2026, 2024, 2022)',
              solved: false,
              hint: 'Write symmetric matrix A, find eigenvalues, normalize eigenvectors to get modal matrix P. Canonical form is λ1 y1^2 + λ2 y2^2 + λ3 y3^2.',
              answer: 'Step 1: Write symmetric matrix of the quadratic form:\nA =\n[ 3 -1  1 ]\n[-1  5 -1 ]\n[ 1 -1  3 ]\n\nStep 2: Characteristic equation det(A - λI) = 0:\ns1 = 3 + 5 + 3 = 11\ns2 = (15 - 1) + (9 - 1) + (15 - 1) = 14 + 8 + 14 = 36\ns3 = det(A) = 3(14) - (-1)(-2) + 1(-4) = 42 - 2 - 4 = 36\nEquation: λ^3 - 11λ^2 + 36λ - 36 = 0.\nRoots: λ = 2, 3, 6.\n\nStep 3: Canonical form:\nQ = λ1 y1^2 + λ2 y2^2 + λ3 y3^2 = 2y1^2 + 3y2^2 + 6y3^2.\n\nStep 4: Characterization:\n- Nature: Positive Definite (all eigenvalues > 0).\n- Rank r = 3 (number of non-zero terms).\n- Index s = 3 (number of positive terms).\n- Signature = 2s - r = 2(3) - 3 = 3.'
            },
            {
              id: 'pq-mat-2-5',
              year: 2023,
              exam: 'KTU Dec 2023 Final',
              marks: 3,
              text: 'Determine the nature of the quadratic form Q = x^2 + 2y^2 + 3z^2 + 2xy + 2yz.',
              frequency: 'Asked in 2023, 2020',
              solved: true,
              hint: 'Check principal minors D1, D2, D3 using Sylvester criterion.',
              answer: 'Matrix of Q:\nA =\n[ 1  1  0 ]\n[ 1  2  1 ]\n[ 0  1  3 ]\n\nPrincipal minors:\nD1 = 1 > 0\nD2 = |1 1; 1 2| = 2 - 1 = 1 > 0\nD3 = det(A) = 1(6 - 1) - 1(3) = 5 - 3 = 2 > 0\n\nConclusion: Since all leading principal minors are strictly positive (D1>0, D2>0, D3>0), the quadratic form is Positive Definite.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat101-3',
      number: 3,
      name: 'Module 3: Multivariable Calculus & Partial Differentiation',
      topics: [
        {
          id: 'top-mat-3-1',
          name: 'Partial Derivatives, Euler Theorem & Chain Rule',
          status: 'studied',
          notes: 'Euler Theorem for homogeneous function f(x,y) of degree n: x(df/dx) + y(df/dy) = n*f. Total differential dz = (dz/dx)dx + (dz/dy)dy.',
          tags: ['Derivatives', 'Euler Theorem'],
          subTopics: [
            { id: 'st-mat-13', name: 'Homogeneous functions and Euler theorem verification', done: true },
            { id: 'st-mat-14', name: 'Composite functions and chain rule partial differentiation', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-3-1',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set A)',
              marks: 7,
              text: 'If u = sin^-1((x + 2y + 3z) / (sqrt(x^8 + y^8 + z^8))), prove that x(du/dx) + y(du/dy) + z(du/dz) = -3 tan(u).',
              frequency: 'Classic KTU Euler Theorem Problem (2025, 2023, 2020)',
              solved: true,
              hint: 'Let f = sin(u). Find degree n of f: numerator degree 1, denominator degree 8/2 = 4 => n = 1 - 4 = -3.',
              answer: 'Step 1: Given u = sin^-1(f(x,y,z)) => sin(u) = (x + 2y + 3z) / sqrt(x^8 + y^8 + z^8) = f(x, y, z).\n\nStep 2: Check homogeneity of f:\nf(tx, ty, tz) = (tx + 2ty + 3tz) / sqrt(t^8 x^8 + t^8 y^8 + t^8 z^8)\n= t*(x + 2y + 3z) / (t^4 * sqrt(x^8 + y^8 + z^8))\n= t^(1-4) * f(x, y, z) = t^(-3) * f(x, y, z).\nThus f is a homogeneous function of degree n = -3.\n\nStep 3: By Euler Theorem for f:\nx(df/dx) + y(df/dy) + z(df/dz) = n*f = -3*f.\n\nStep 4: Since f = sin(u):\ndf/dx = cos(u) * du/dx, df/dy = cos(u) * du/dy, df/dz = cos(u) * du/dz.\nSubstitute:\ncos(u) * [x(du/dx) + y(du/dy) + z(du/dz)] = -3 sin(u)\n=> x(du/dx) + y(du/dy) + z(du/dz) = -3 sin(u) / cos(u) = -3 tan(u).\nHence proved!'
            },
            {
              id: 'pq-mat-3-2',
              year: 2022,
              exam: 'KTU Dec 2022 Final',
              marks: 3,
              text: 'State Euler Theorem for a homogeneous function of two variables.',
              frequency: 'Part A Definition (2022, 2019)',
              solved: true,
              hint: 'If f(x, y) is homogeneous of degree n, then x(df/dx) + y(df/dy) = n f(x, y).',
              answer: 'Statement:\nIf f(x, y) is a homogeneous function of degree n in variables x and y possessing continuous first-order partial derivatives, then:\nx (∂f/∂x) + y (∂f/∂y) = n · f(x, y).'
            }
          ]
        },
        {
          id: 'top-mat-3-2',
          name: 'Maxima, Minima & Lagrange Multipliers',
          status: 'needs-revision',
          notes: 'Stationary points where fx = fy = 0. Test: r = fxx, s = fxy, t = fyy. Delta = rt - s^2. If Delta > 0 and r < 0 => Local Max. If Delta > 0 and r > 0 => Local Min. Lagrange: grad(f) = lambda grad(g).',
          tags: ['Extrema', 'Lagrange Multiplier', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-15', name: 'Critical points and second derivative discriminant test', done: true },
            { id: 'st-mat-16', name: 'Constrained optimization using Lagrange multipliers', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-3-3',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP',
              marks: 14,
              text: 'Find the maximum and minimum distances from the origin to the curve 5x^2 + 6xy + 5y^2 = 8 using the method of Lagrange multipliers.',
              frequency: 'Repeated 14-Mark Problem (2026, 2024, 2021)',
              solved: false,
              hint: 'Objective function f = x^2 + y^2 (distance squared). Constraint g = 5x^2 + 6xy + 5y^2 - 8 = 0.',
              answer: 'Step 1: Set up objective function and constraint:\nf(x, y) = x^2 + y^2 (square of distance from origin)\nConstraint g(x, y) = 5x^2 + 6xy + 5y^2 - 8 = 0.\n\nStep 2: Lagrange system grad(f) = λ grad(g):\n2x = λ(10x + 6y) => x = λ(5x + 3y)  --- (1)\n2y = λ(6x + 10y) => y = λ(3x + 5y)  --- (2)\n\nStep 3: Multiply (1) by y and (2) by x and subtract:\nxy = λ(5xy + 3y^2)\nxy = λ(3x^2 + 5xy)\nSubtracting yields: 3λ(x^2 - y^2) = 0.\nSince λ != 0, x^2 - y^2 = 0 => y = ±x.\n\nCase 1: y = x\nSubstitute into constraint:\n5x^2 + 6x^2 + 5x^2 = 8 => 16x^2 = 8 => x^2 = 1/2.\nf = x^2 + y^2 = 1/2 + 1/2 = 1 => Distance = sqrt(1) = 1 (Minimum).\n\nCase 2: y = -x\nSubstitute into constraint:\n5x^2 - 6x^2 + 5x^2 = 8 => 4x^2 = 8 => x^2 = 2.\nf = x^2 + y^2 = 2 + 2 = 4 => Distance = sqrt(4) = 2 (Maximum).\n\nConclusion:\nMinimum distance = 1 unit.\nMaximum distance = 2 units.'
            },
            {
              id: 'pq-mat-3-4',
              year: 2023,
              exam: 'KTU Dec 2023 Final',
              marks: 7,
              text: 'Find the extreme values of the function f(x, y) = x^3 + y^3 - 3xy.',
              frequency: 'Standard KTU 7-Mark Problem (2023, 2020)',
              solved: true,
              hint: 'fx = 3x^2 - 3y = 0 => y = x^2. fy = 3y^2 - 3x = 0 => x = y^2. Stationary points: (0,0) and (1,1).',
              answer: 'Step 1: First partial derivatives:\nfx = 3x^2 - 3y = 0 => y = x^2\nfy = 3y^2 - 3x = 0 => x = y^2\n\nStep 2: Solving simultaneously:\nx = (x^2)^2 = x^4 => x(x^3 - 1) = 0 => x = 0 or x = 1.\nIf x = 0 => y = 0. Point: (0, 0).\nIf x = 1 => y = 1. Point: (1, 1).\n\nStep 3: Second derivatives:\nr = fxx = 6x\ns = fxy = -3\nt = fyy = 6y\nDiscriminant: Δ = rt - s^2 = 36xy - 9.\n\nStep 4: Test points:\nAt (0, 0): Δ = -9 < 0 => Saddle point (no extremum).\nAt (1, 1): Δ = 36(1)(1) - 9 = 27 > 0, and r = 6 > 0 => Local Minimum.\n\nMinimum value: f(1, 1) = 1^3 + 1^3 - 3(1)(1) = -1.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat101-4',
      number: 4,
      name: 'Module 4: Multiple Integrals & Applications',
      topics: [
        {
          id: 'top-mat-4-1',
          name: 'Double Integrals & Change of Order of Integration',
          status: 'studied',
          notes: 'Change of order alters limits from dy dx to dx dy. Always sketch the region of integration to read the new boundary curves accurately.',
          tags: ['Integration', 'Change of Order', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-17', name: 'Evaluation of double integrals over rectangular and general regions', done: true },
            { id: 'st-mat-18', name: 'Change of order of integration with curve sketch', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-4-1',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set B)',
              marks: 14,
              text: 'Change the order of integration and hence evaluate: int(0 to 1) int(x to 1) sin(y^2) dy dx.',
              frequency: 'Asked in 2025, 2023, 2021, 2019',
              solved: true,
              hint: 'Original region: x from 0 to 1, y from x to 1. In reversed order: y from 0 to 1, x from 0 to y.',
              answer: 'Step 1: Identify given limits:\nx goes from 0 to 1\ny goes from line y = x to line y = 1.\n\nStep 2: Sketch the region:\nTriangle bounded by x = 0 (y-axis), y = 1 (top horizontal line), and y = x (diagonal line).\n\nStep 3: Reverse the order (integrate w.r.t x first):\nHorizontal strip extends from x = 0 to x = y.\ny varies from 0 to 1.\nNew Integral: int(y=0 to 1) [ int(x=0 to y) sin(y^2) dx ] dy.\n\nStep 4: Evaluate inner integral:\nint(0 to y) sin(y^2) dx = [x * sin(y^2)]_(0)^y = y * sin(y^2).\n\nStep 5: Evaluate outer integral:\nint(0 to 1) y * sin(y^2) dy.\nLet u = y^2 => du = 2y dy => y dy = du/2.\nWhen y=0, u=0; when y=1, u=1.\n= (1/2) int(0 to 1) sin(u) du = (1/2) [-cos(u)]_0^1\n= (1/2) (1 - cos(1)).\n\nFinal Answer: (1 - cos(1)) / 2.'
            },
            {
              id: 'pq-mat-4-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set A)',
              marks: 7,
              text: 'Evaluate double integral iint_R (x + y) dx dy over the region R bounded by y = x^2 and y = x.',
              frequency: 'Classic Area / Integration Numerical (2024, 2022)',
              solved: false,
              hint: 'Intersection of y = x^2 and y = x gives x = 0 and x = 1. Limits: y from x^2 to x, x from 0 to 1.',
              answer: 'Step 1: Find points of intersection:\nx^2 = x => x(x - 1) = 0 => x = 0 and x = 1.\nPoints are (0, 0) and (1, 1).\n\nStep 2: Region limits:\nx varies from 0 to 1.\nFor each x, y varies from the lower parabola y = x^2 to the upper line y = x.\n\nStep 3: Evaluate:\nint(0 to 1) [ int(x^2 to x) (x + y) dy ] dx\nInner integral = [xy + y^2/2]_(x^2)^x\n= (x^2 + x^2/2) - (x^3 + x^4/2)\n= (3/2)x^2 - x^3 - (1/2)x^4.\n\nStep 4: Integrate w.r.t x:\n[ (3/2)(x^3/3) - x^4/4 - (1/2)(x^5/5) ]_0^1\n= 1/2 - 1/4 - 1/10 = (10 - 5 - 2) / 20 = 3/20.\n\nFinal Answer: 3/20.'
            }
          ]
        },
        {
          id: 'top-mat-4-2',
          name: 'Triple Integrals, Cylindrical & Spherical Coordinates',
          status: 'needs-revision',
          notes: 'Volume V = iiint dz dy dx. Cylindrical: x=r cos(theta), y=r sin(theta), z=z, dV = r dz dr dtheta. Spherical: dV = rho^2 sin(phi) drho dphi dtheta.',
          tags: ['Triple Integrals', 'Volume'],
          subTopics: [
            { id: 'st-mat-19', name: 'Cartesian triple integrals and volume calculation', done: false },
            { id: 'st-mat-20', name: 'Transformation to cylindrical and spherical polar systems', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-4-3',
              year: 2023,
              exam: 'KTU Dec 2023 Final',
              marks: 14,
              text: 'Find the volume of the sphere x^2 + y^2 + z^2 = a^2 using spherical polar coordinates.',
              frequency: 'Standard KTU Derivation (2023, 2020)',
              solved: true,
              hint: 'In spherical coordinates: rho goes from 0 to a, phi goes from 0 to pi, theta goes from 0 to 2pi. Jacobian dV = rho^2 sin(phi) drho dphi dtheta.',
              answer: 'Step 1: In spherical polar coordinates:\nx = ρ sin(φ) cos(θ)\ny = ρ sin(φ) sin(θ)\nz = ρ cos(φ)\ndV = ρ^2 sin(φ) dρ dφ dθ.\n\nStep 2: Integration limits for complete sphere:\nρ varies from 0 to a\nφ varies from 0 to π\nθ varies from 0 to 2π.\n\nStep 3: Setup volume integral:\nV = int(0 to 2π) dθ · int(0 to π) sin(φ) dφ · int(0 to a) ρ^2 dρ\n\nStep 4: Compute individual integrals:\nint(0 to 2π) dθ = 2π\nint(0 to π) sin(φ) dφ = [-cos(φ)]_0^π = 1 - (-1) = 2\nint(0 to a) ρ^2 dρ = a^3 / 3.\n\nStep 5: Multiply:\nV = (2π) * (2) * (a^3 / 3) = (4/3) π a^3.\nHence verified!'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat101-5',
      number: 5,
      name: 'Module 5: Infinite Series & Power Series',
      topics: [
        {
          id: 'top-mat-5-1',
          name: 'Convergence Tests for Positive Term Series',
          status: 'studied',
          notes: 'p-series: sum(1/n^p) converges if p > 1. D Alembert ratio test: lim |a_(n+1)/a_n| = L. Converges if L < 1, diverges if L > 1. Cauchy root test: lim (a_n)^(1/n) = L.',
          tags: ['Series Tests', 'Core Theory'],
          subTopics: [
            { id: 'st-mat-21', name: 'Geometric and p-series baseline comparisons', done: true },
            { id: 'st-mat-22', name: 'D Alembert ratio test and Raabe test', done: true },
            { id: 'st-mat-23', name: 'Cauchy integral and root tests', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-5-1',
              year: 2026,
              exam: 'KTU 2026 Model Exam (Set A)',
              marks: 7,
              text: 'Test the convergence of the series: sum_(n=1)^infinity ((n!)^2 / (2n)!) * x^(2n) for x > 0.',
              frequency: 'Repeated Ratio Test Problem (2026, 2024, 2022)',
              solved: true,
              hint: 'Apply D Alembert ratio test: compute a_(n+1)/a_n and simplify factorial cancellations.',
              answer: 'Step 1: Given general term:\na_n = ((n!)^2 / (2n)!) * x^(2n)\na_(n+1) = (((n+1)!)^2 / (2n + 2)!) * x^(2n + 2)\n\nStep 2: Ratio a_(n+1) / a_n:\n= [((n+1)! / n!)^2] * [(2n)! / (2n+2)!] * [x^(2n+2) / x^(2n)]\n= (n + 1)^2 * [1 / ((2n+2)(2n+1))] * x^2\n= [(n + 1)^2 / (2(n + 1)(2n + 1))] * x^2\n= [(n + 1) / (2(2n + 1))] * x^2.\n\nStep 3: Take limit as n -> infinity:\nlim_(n->inf) (a_(n+1)/a_n) = lim_(n->inf) [(1 + 1/n) / (2(2 + 1/n))] * x^2 = (1 / 4) x^2.\n\nStep 4: Conclusions by Ratio Test:\n(i) Converges if (x^2)/4 < 1 => x^2 < 4 => x < 2 (since x > 0).\n(ii) Diverges if (x^2)/4 > 1 => x > 2.\n(iii) At x = 2, ratio is 1 (Raabe test shows divergence).'
            },
            {
              id: 'pq-mat-5-2',
              year: 2021,
              exam: 'KTU Dec 2021 Final',
              marks: 3,
              text: 'State Leibniz test for the convergence of an alternating series.',
              frequency: 'Standard Part A Definition (2021, 2019)',
              solved: true,
              hint: 'Terms must alternate in sign, |a_(n+1)| <= |a_n|, and lim a_n = 0.',
              answer: 'Leibniz Test:\nAn alternating series sum_(n=1)^inf (-1)^(n-1) u_n converges if:\n1. u_n > 0 for all n.\n2. The terms are monotonically decreasing: u_(n+1) <= u_n for all n.\n3. lim_(n -> infinity) u_n = 0.'
            }
          ]
        },
        {
          id: 'top-mat-5-2',
          name: 'Taylor Series, Maclaurin Series & Fourier Series',
          status: 'needs-revision',
          notes: 'Taylor series around x=a: sum (f^(n)(a)/n!)(x-a)^n. Fourier series on [-L, L]: f(x) = a0/2 + sum(an cos(n pi x/L) + bn sin(n pi x/L)). Half range cosine: bn = 0.',
          tags: ['Fourier Series', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-24', name: 'Maclaurin expansions of standard elementary functions', done: true },
            { id: 'st-mat-25', name: 'Euler formulas for Fourier coefficients over [-pi, pi] and [-L, L]', done: false },
            { id: 'st-mat-26', name: 'Half-range Fourier sine and cosine expansions and Parseval identity', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-5-3',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set A)',
              marks: 14,
              text: 'Find the Fourier series representation of f(x) = x^2 in the interval (-pi, pi) and hence deduce that 1 - 1/4 + 1/9 - 1/16 + ... = pi^2 / 12.',
              frequency: 'KTU Top Recurring Question (2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Since f(-x) = (-x)^2 = x^2, f(x) is an even function. Therefore bn = 0. Compute a0 and an by parts.',
              answer: 'Step 1: Check parity of f(x) = x^2 on (-π, π):\nf(-x) = (-x)^2 = x^2 = f(x) => Even function.\nTherefore, bn = 0 for all n >= 1.\n\nStep 2: Compute a0:\na0 = (2/π) int(0 to π) x^2 dx = (2/π) [x^3/3]_0^π = (2/π) (π^3 / 3) = 2π^2 / 3.\nThus a0 / 2 = π^2 / 3.\n\nStep 3: Compute an using integration by parts (Bernoulli rule):\nan = (2/π) int(0 to π) x^2 cos(nx) dx\n= (2/π) [ x^2 (sin(nx)/n) - 2x (-cos(nx)/n^2) + 2 (-sin(nx)/n^3) ]_0^π\nAt π and 0, sin(nπ) = 0.\n= (2/π) [ 2π cos(nπ) / n^2 ] = (4/n^2) (-1)^n.\n\nStep 4: Fourier series expansion:\nf(x) = π^2 / 3 + 4 * sum_(n=1)^inf [ ((-1)^n / n^2) cos(nx) ]\n= π^2 / 3 - 4 [ cos(x)/1^2 - cos(2x)/2^2 + cos(3x)/3^2 - ... ]\n\nStep 5: Deduction:\nPut x = 0 (point of continuity):\nf(0) = 0\n0 = π^2 / 3 - 4 [ 1/1^2 - 1/2^2 + 1/3^2 - 1/4^2 + ... ]\n=> 4 [ 1 - 1/4 + 1/9 - 1/16 + ... ] = π^2 / 3\n=> 1 - 1/4 + 1/9 - 1/16 + ... = π^2 / 12.\nHence proved!'
            }
          ]
        }
      ]
    }
  ]
};
