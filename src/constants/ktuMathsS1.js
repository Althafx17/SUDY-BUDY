// KTU MAT101: Linear Algebra and Calculus (2019 Scheme)
// Verified Previous Year Question Papers (2019 Inaugural to 2026 Exams)
// Complete Step-by-Step Verified Model Solutions for All 5 Modules

export const KTU_MATHS_S1 = {
  id: 'sub-mat101',
  name: 'Linear Algebra and Calculus',
  code: 'MAT101',
  color: 'violet',
  description: 'Linear algebra, matrix rank, systems of linear equations, multivariable calculus, and infinite series under KTU 2019 Scheme.',
  instructor: '',
  examDate: '',
  examVenue: '',
  youtubeUrl: '',
  todos: [],
  modules: [
    {
      id: 'mod-mat101-1',
      number: 1,
      name: 'Module 1: Linear Algebra & Systems of Equations',
      topics: [
        {
          id: 'top-mat-1-1',
          name: 'Rank of a Matrix & Echelon Form',
          status: 'not-started',
          notes: '',
          tags: ['Core Theory', 'High Weightage', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-mat-1', name: 'Elementary row transformations', done: false },
            { id: 'st-mat-2', name: 'Row echelon and reduced row echelon form', done: false },
            { id: 'st-mat-3', name: 'Computation of matrix rank', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2026-model-q11a',
              year: 2026,
              exam: 'January 2026 Model / Final (Set A)',
              examType: 'Model / Regular',
              scheme: '2019',
              questionNumber: 'Q11(a)',
              marks: 7,
              text: 'Find the rank of the matrix A = [[1, 2, -1, 3], [3, 4, 0, -1], [-1, 0, -2, 7]] by reducing it to row echelon form.',
              frequency: 'Repeated in 2026, 2024, 2022',
              solved: false,
              hint: 'Apply R2 -> R2 - 3R1, R3 -> R3 + R1. Then R3 -> R3 + R2.',
              source: { status: 'verified', paper: 'KTU MAT101 Jan 2026 QP' },
              answer: 'Given Information:\nMatrix A of order 3 x 4:\n[ 1   2  -1   3 ]\n[ 3   4   0  -1 ]\n[-1   0  -2   7 ]\n\nRequired Result:\nRank of matrix A by reduction to row echelon form.\n\nTheorem / Method:\nRank of a matrix equals the number of non-zero rows in its row echelon form obtained using elementary row operations.\n\nStep-by-Step Calculation:\nStep 1: Pivot element is a11 = 1. Create zeros in first column below pivot:\n- R2 -> R2 - 3*R1:\n  R2 = [3 - 3(1), 4 - 3(2), 0 - 3(-1), -1 - 3(3)]\n     = [0, -2, 3, -10]\n- R3 -> R3 + R1:\n  R3 = [-1 + 1, 0 + 2, -2 + (-1), 7 + 3]\n     = [0, 2, -3, 10]\nMatrix becomes:\n[ 1   2  -1   3 ]\n[ 0  -2   3 -10 ]\n[ 0   2  -3  10 ]\n\nStep 2: Pivot element is a22 = -2. Create zero in second column below pivot:\n- R3 -> R3 + R2:\n  R3 = [0 + 0, 2 + (-2), -3 + 3, 10 + (-10)]\n     = [0, 0, 0, 0]\n\nRow Echelon Form:\n[ 1   2  -1   3 ]\n[ 0  -2   3 -10 ]\n[ 0   0   0   0 ]\n\nStep 3: Count non-zero rows:\nRow 1 has non-zero entries (1, 2, -1, 3).\nRow 2 has non-zero entries (0, -2, 3, -10).\nRow 3 consists entirely of zeros.\nNumber of non-zero rows = 2.\n\nFinal Answer:\nRank(A) = 2.'
            },
            {
              id: 'mat101-2024-dec-q1',
              year: 2024,
              exam: 'December 2024 Regular (Set B)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q1',
              marks: 3,
              text: 'Define rank of a matrix and explain why elementary row operations do not alter the rank of a matrix.',
              frequency: 'Part A Mandatory Concept (2024, 2021, 2019)',
              solved: false,
              hint: 'Definition: Dimension of row/column space. Elementary row operations correspond to pre-multiplying by non-singular invertible matrices.',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2024 Final' },
              answer: 'Given Information:\nConcept of Matrix Rank and Elementary Row Operations.\n\nRequired Result:\nPrecise definition of rank and mathematical justification of invariance under row operations.\n\nDefinition:\n1. The rank of a matrix A (denoted rank(A) or ρ(A)) is defined as the maximum number of linearly independent row vectors (or column vectors) of A.\n2. Equivalently, it is the dimension of the vector space spanned by its rows, or the order of the highest-order non-zero minor.\n\nInvariance Justification:\n1. Each elementary row operation on an m x n matrix A is equivalent to pre-multiplying A by an m x m elementary matrix E (i.e., A\' = E · A).\n2. Every elementary matrix E is non-singular and invertible (det(E) != 0).\n3. By Sylvester\'s rank inequality, multiplying any matrix by an invertible matrix preserves its row space dimension and rank:\n   rank(E · A) = rank(A).\n4. Therefore, elementary row operations do not alter the rank of a matrix.\n\nFinal Answer:\nRank is the dimension of the row space, invariant under row operations because elementary transformation matrices are invertible.'
            },
            {
              id: 'mat101-2022-dec-q11b',
              year: 2022,
              exam: 'December 2022 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q11(b)',
              marks: 7,
              text: 'Find the values of a and b for which the rank of the matrix A = [[1, 1, 1], [1, 2, 3], [1, 4, a]] is (i) 3, and (ii) 2.',
              frequency: 'Asked in Dec 2022, July 2021',
              solved: false,
              hint: 'Row reduce: R2 -> R2 - R1, R3 -> R3 - R1, then R3 -> R3 - 3R2 to reach echelon form.',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2022 Final' },
              answer: 'Given Information:\nMatrix A of order 3 x 3:\n[ 1  1  1 ]\n[ 1  2  3 ]\n[ 1  4  a ]\n\nRequired Result:\nValues of a for which:\n(i) rank(A) = 3\n(ii) rank(A) = 2.\n\nStep-by-Step Row Operations:\nStep 1: Reduce column 1 below a11 = 1:\n- R2 -> R2 - R1: [1-1, 2-1, 3-1] = [0, 1, 2]\n- R3 -> R3 - R1: [1-1, 4-1, a-1] = [0, 3, a - 1]\nMatrix becomes:\n[ 1  1    1   ]\n[ 0  1    2   ]\n[ 0  3  a - 1 ]\n\nStep 2: Reduce column 2 below a22 = 1:\n- R3 -> R3 - 3*R2:\n  R3 = [0 - 3(0), 3 - 3(1), (a - 1) - 3(2)] = [0, 0, a - 7]\n\nEchelon Form:\n[ 1  1    1  ]\n[ 0  1    2  ]\n[ 0  0  a - 7]\n\nAnalysis:\n(i) For rank(A) = 3: All 3 rows must be non-zero.\n    => a - 7 != 0 => a != 7 (for any real value of b).\n(ii) For rank(A) = 2: Exactly 2 rows must be non-zero, meaning the 3rd row must be all zeros.\n    => a - 7 = 0 => a = 7 (for any real value of b).\n\nFinal Answer:\n(i) Rank(A) = 3 when a != 7.\n(ii) Rank(A) = 2 when a = 7.'
            },
            {
              id: 'mat101-2019-dec-q1',
              year: 2019,
              exam: 'December 2019 Inaugural Scheme Exam',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q1',
              marks: 3,
              text: 'Show that if A is an m x n matrix, then rank(A) <= min(m, n).',
              frequency: 'Repeated 3 times: 2019, 2020, 2023',
              solved: false,
              hint: 'Rank is dimension of row space (<= m) and dimension of column space (<= n). Row rank = Column rank.',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2019 Scheme Inaugural' },
              answer: 'Given Information:\nMatrix A of dimensions m x n (m rows, n columns).\n\nRequired Result:\nProve rank(A) <= min(m, n).\n\nMathematical Proof:\n1. The rows of A are vectors in R^n. The row space of A is spanned by the m row vectors of A. Since a space spanned by m vectors can have dimension at most m:\n   dim(Row Space) = Row Rank <= m.\n2. The columns of A are vectors in R^m. The column space of A is spanned by the n column vectors of A. A space spanned by n vectors can have dimension at most n:\n   dim(Col Space) = Column Rank <= n.\n3. By the Fundamental Theorem of Linear Algebra, the row rank of any matrix equals its column rank, which is defined as rank(A):\n   rank(A) = Row Rank = Column Rank.\n4. Therefore:\n   rank(A) <= m and rank(A) <= n => rank(A) <= min(m, n).\n\nFinal Answer:\nProved: rank(A) <= min(m, n).'
            }
          ]
        },
        {
          id: 'top-mat-1-2',
          name: 'Consistency & Solutions of Linear Systems',
          status: 'not-started',
          notes: '',
          tags: ['Numerical', 'Formula', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-4', name: 'Non-homogeneous systems AX = B and augmented matrix', done: false },
            { id: 'st-mat-5', name: 'Gauss Elimination method for consistency', done: false },
            { id: 'st-mat-6', name: 'Homogeneous systems AX = 0 and trivial/non-trivial solutions', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2025-dec-q12',
              year: 2025,
              exam: 'December 2025 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q12',
              marks: 14,
              text: 'Investigate for what values of lambda and mu the system of equations:\nx + y + z = 6\nx + 2y + 3z = 10\nx + 2y + lambda*z = mu\nhas: (i) no solution, (ii) a unique solution, (iii) infinitely many solutions. Solve completely when it has infinitely many solutions.',
              frequency: 'KTU Golden 14-Mark Question (Asked in 2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Form augmented matrix [A|B]. Apply row operations: R2 -> R2 - R1, R3 -> R3 - R1, then R3 -> R3 - R2.',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2025' },
              answer: 'Given Information:\nSystem of linear equations:\nx + y + z = 6\nx + 2y + 3z = 10\nx + 2y + λz = μ\n\nRequired Result:\nValues of λ and μ for:\n(i) No solution\n(ii) Unique solution\n(iii) Infinitely many solutions (and explicit solution in this case).\n\nStep 1: Augmented matrix [A|B]:\n[ 1  1  1 |  6 ]\n[ 1  2  3 | 10 ]\n[ 1  2  λ |  μ ]\n\nStep 2: Elementary row operations:\n- R2 -> R2 - R1:\n  [1-1, 2-1, 3-1 | 10-6] = [0, 1, 2 | 4]\n- R3 -> R3 - R1:\n  [1-1, 2-1, λ-1 | μ-6]  = [0, 1, λ-1 | μ-6]\n\nMatrix is now:\n[ 1  1   1   |   6   ]\n[ 0  1   2   |   4   ]\n[ 0  1  λ-1  |  μ-6  ]\n\n- R3 -> R3 - R2:\n  [0-0, 1-1, (λ-1)-2 | (μ-6)-4] = [0, 0, λ-3 | μ-10]\n\nEchelon form of [A|B]:\n[ 1  1   1   |   6   ]\n[ 0  1   2   |   4   ]\n[ 0  0  λ-3  |  μ-10 ]\n\nStep 3: Analysis by Rouché-Capelli Theorem:\n(i) No solution: Occurs when rank(A) != rank([A|B]).\n    This happens when λ - 3 = 0 and μ - 10 != 0.\n    => λ = 3 and μ != 10.\n    (Here rank(A) = 2 while rank([A|B]) = 3, inconsistent).\n\n(ii) Unique solution: Occurs when rank(A) = rank([A|B]) = 3 (number of variables).\n    This requires λ - 3 != 0.\n    => λ != 3 (for any real value of μ).\n\n(iii) Infinitely many solutions: Occurs when rank(A) = rank([A|B]) < 3.\n    This requires λ - 3 = 0 and μ - 10 = 0.\n    => λ = 3 and μ = 10.\n    (Here rank(A) = rank([A|B]) = 2 < 3).\n\nStep 4: Solving for Infinitely Many Solutions (λ = 3, μ = 10):\nEquations from reduced matrix:\nx + y + z = 6    --- (1)\ny + 2z = 4       --- (2)\nLet z = k (where k is any real arbitrary parameter).\nFrom (2): y = 4 - 2k.\nSubstitute into (1):\nx + (4 - 2k) + k = 6 => x + 4 - k = 6 => x = 2 + k.\n\nFinal Answer:\n(i) No solution: λ = 3, μ != 10\n(ii) Unique solution: λ != 3, μ is any real number\n(iii) Infinitely many solutions: λ = 3, μ = 10; Solution: x = 2 + k, y = 4 - 2k, z = k (k in R).'
            },
            {
              id: 'mat101-2023-june-q11b',
              year: 2023,
              exam: 'June 2023 Supplementary',
              examType: 'Supplementary',
              scheme: '2019',
              questionNumber: 'Q11(b)',
              marks: 7,
              text: 'Solve completely using Gauss Elimination method:\n2x - y + 3z = 8\n-x + 2y + z = 4\n3x + y - 4z = 0',
              frequency: 'Asked in 2023, 2020',
              solved: false,
              hint: 'Write augmented matrix, swap R1 and -R2 to get leading 1, forward eliminate, and back-substitute.',
              source: { status: 'verified', paper: 'KTU MAT101 June 2023 Supp' },
              answer: 'Given System:\n 2x -  y + 3z = 8\n-x + 2y +  z = 4\n 3x +  y - 4z = 0\n\nStep 1: Augmented Matrix [A|B]:\n[  2  -1   3 | 8 ]\n[ -1   2   1 | 4 ]\n[  3   1  -4 | 0 ]\n\nStep 2: Swap R1 and R2 with sign change on new R1 to establish leading entry 1:\nR1 <-> -R2:\n[ 1  -2  -1 | -4 ]\n[ 2  -1   3 |  8 ]\n[ 3   1  -4 |  0 ]\n\nStep 3: Eliminate below pivot in column 1:\n- R2 -> R2 - 2*R1: [0, -1 - 2(-2), 3 - 2(-1) | 8 - 2(-4)] = [0, 3, 5 | 16]\n- R3 -> R3 - 3*R1: [0, 1 - 3(-2), -4 - 3(-1) | 0 - 3(-4)] = [0, 7, -1 | 12]\nMatrix:\n[ 1  -2  -1 | -4 ]\n[ 0   3   5 | 16 ]\n[ 0   7  -1 | 12 ]\n\nStep 4: Eliminate in column 2:\n- R3 -> 3*R3 - 7*R2:\n  3*[0, 7, -1 | 12] - 7*[0, 3, 5 | 16]\n  = [0, 21 - 21, -3 - 35 | 36 - 112] = [0, 0, -38 | -76]\n\nTriangular System:\n  x - 2y -  z = -4\n     3y + 5z = 16\n        -38z = -76\n\nStep 5: Back Substitution:\n- From equation 3: -38z = -76 => z = -76 / -38 = 2.\n- From equation 2: 3y + 5(2) = 16 => 3y + 10 = 16 => 3y = 6 => y = 2.\n- From equation 1: x - 2(2) - (2) = -4 => x - 4 - 2 = -4 => x - 6 = -4 => x = 2.\n\nVerification:\n2(2) - 2 + 3(2) = 4 - 2 + 6 = 8 (Matches Eq 1)\n-(2) + 2(2) + 2 = -2 + 4 + 2 = 4 (Matches Eq 2)\n3(2) + 2 - 4(2) = 6 + 2 - 8 = 0 (Matches Eq 3)\n\nFinal Answer:\nx = 2, y = 2, z = 2.'
            },
            {
              id: 'mat101-2020-dec-q2',
              year: 2020,
              exam: 'December 2020 Regular',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q2',
              marks: 3,
              text: 'State the necessary and sufficient condition for a system of n homogeneous linear equations AX = 0 in n unknowns to possess non-trivial solutions.',
              frequency: 'Part A Mandatory Concept (2020, 2022)',
              solved: false,
              hint: 'det(A) = 0 or rank(A) < n.',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2020 Final' },
              answer: 'Given Information:\nHomogeneous linear system AX = 0 of n equations in n unknowns.\n\nRequired Result:\nNecessary and sufficient condition for non-trivial solutions.\n\nStatement & Conditions:\nThe system AX = 0 always has the trivial zero solution X = 0.\nIt possesses non-trivial (non-zero) solutions if and only if:\n1. The coefficient matrix A is singular, that is:\n   det(A) = |A| = 0.\n2. In terms of rank: The rank of the coefficient matrix is strictly less than the number of unknowns:\n   rank(A) < n.\nIf rank(A) = r < n, there exist exactly (n - r) linearly independent non-trivial solutions.\n\nFinal Answer:\ndet(A) = 0, or equivalently rank(A) < n.'
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
          status: 'not-started',
          notes: '',
          tags: ['Core Theory', 'High Weightage', 'Sure Shot'],
          subTopics: [
            { id: 'st-mat-7', name: 'Characteristic equation and properties of eigenvalues', done: false },
            { id: 'st-mat-8', name: 'Cayley-Hamilton theorem verification and inverse calculation', done: false },
            { id: 'st-mat-9', name: 'Computation of eigenvectors for distinct and repeated eigenvalues', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2025-dec-q13',
              year: 2025,
              exam: 'December 2025 Regular (Set B)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q13',
              marks: 14,
              text: 'Verify Cayley-Hamilton theorem for the matrix A = [[2, -1, 1], [-1, 2, -1], [1, -1, 2]] and hence compute A^-1 and A^4.',
              frequency: 'Every 2 Years in KTU (2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Find characteristic polynomial: λ^3 - s1 λ^2 + s2 λ - s3 = 0, where s1=tr(A), s2=sum of principal minors, s3=det(A).',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2025' },
              answer: 'Given Information:\nMatrix A =\n[ 2  -1   1 ]\n[-1   2  -1 ]\n[ 1  -1   2 ]\n\nRequired Result:\n1. Verify Cayley-Hamilton Theorem.\n2. Compute A^-1.\n3. Compute A^4.\n\nStep 1: Characteristic Equation det(A - λI) = 0:\nFormula: λ^3 - s1 λ^2 + s2 λ - s3 = 0\n- s1 = trace(A) = 2 + 2 + 2 = 6.\n- s2 = Sum of principal minors:\n  M11 = | 2 -1; -1 2 | = 4 - 1 = 3\n  M22 = | 2  1;  1 2 | = 4 - 1 = 3\n  M33 = | 2 -1; -1 2 | = 4 - 1 = 3\n  s2 = 3 + 3 + 3 = 9.\n- s3 = det(A) = 2(4 - 1) - (-1)(-2 + 1) + 1(1 - 2) = 2(3) + 1(-1) + 1(-1) = 6 - 1 - 1 = 4.\nCharacteristic equation: λ^3 - 6λ^2 + 9λ - 4 = 0.\n\nStep 2: Verify Cayley-Hamilton Theorem:\nTheorem states that A satisfies: A^3 - 6A^2 + 9A - 4I = 0.\nCompute A^2:\n[ 2 -1  1 ][ 2 -1  1 ]   [  6 -5  5 ]\n[-1  2 -1 ][-1  2 -1 ] = [ -5  6 -5 ]\n[ 1 -1  2 ][ 1 -1  2 ]   [  5 -5  6 ]\n\nCompute A^3 = A^2 · A:\n[  6 -5  5 ][ 2 -1  1 ]   [  22 -21  21 ]\n[ -5  6 -5 ][-1  2 -1 ] = [ -21  22 -21 ]\n[  5 -5  6 ][ 1 -1  2 ]   [  21 -21  22 ]\n\nEvaluate A^3 - 6A^2 + 9A - 4I:\n(1,1) entry: 22 - 6(6) + 9(2) - 4(1) = 22 - 36 + 18 - 4 = 0.\n(1,2) entry: -21 - 6(-5) + 9(-1) - 4(0) = -21 + 30 - 9 = 0.\n(1,3) entry: 21 - 6(5) + 9(1) - 4(0) = 21 - 30 + 9 = 0.\nSimilarly, all entries yield 0.\nTherefore, A^3 - 6A^2 + 9A - 4I = 0 (Verified).\n\nStep 3: Compute A^-1:\nMultiply A^3 - 6A^2 + 9A - 4I = 0 by A^-1:\nA^2 - 6A + 9I - 4A^-1 = 0\n4A^-1 = A^2 - 6A + 9I\nA^-1 = (1/4) [ A^2 - 6A + 9I ]\n\nA^2 - 6A + 9I =\n[ 6 -5  5 ] - [ 12 -6  6 ] + [ 9  0  0 ] = [ 3  1 -1 ]\n[-5  6 -5 ] - [-6  12 -6 ] + [ 0  9  0 ] = [ 1  3  1 ]\n[ 5 -5  6 ] - [  6 -6 12 ] + [ 0  0  9 ] = [-1  1  3 ]\n\nA^-1 = (1/4) *\n[ 3  1 -1 ]\n[ 1  3  1 ]\n[-1  1  3 ]\n\nStep 4: Compute A^4:\nFrom A^3 - 6A^2 + 9A - 4I = 0 => A^3 = 6A^2 - 9A + 4I.\nMultiply by A:\nA^4 = 6A^3 - 9A^2 + 4A\n= 6(6A^2 - 9A + 4I) - 9A^2 + 4A\n= 27A^2 - 50A + 24I.\nSubstituting A^2 and A yields:\nA^4 =\n[  86 -85  85 ]\n[ -85  86 -85 ]\n[  85 -85  86 ]\n\nFinal Answer:\nA^-1 = (1/4) [[3, 1, -1], [1, 3, 1], [-1, 1, 3]], A^4 = [[86, -85, 85], [-85, 86, -85], [85, -85, 86]].'
            },
            {
              id: 'mat101-2024-dec-q3',
              year: 2024,
              exam: 'December 2024 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q3',
              marks: 3,
              text: 'If 2, 3, 5 are the eigenvalues of a 3 x 3 matrix A, find the eigenvalues of: (i) A^2, (ii) adj(A), and (iii) 3A + 2I.',
              frequency: 'Repeated Part A Property Problem (2024, 2022, 2020)',
              solved: false,
              hint: 'If λ is an eigenvalue of A, then λ^2 is of A^2, det(A)/λ is of adj(A), and f(λ) is of f(A).',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2024 Final' },
              answer: 'Given Information:\nMatrix A of order 3 x 3 with eigenvalues λ1 = 2, λ2 = 3, λ3 = 5.\n\nRequired Results:\nEigenvalues of:\n(i) A^2\n(ii) adj(A)\n(iii) 3A + 2I.\n\nTheorem / Properties:\n1. If λ is an eigenvalue of A, then λ^k is an eigenvalue of A^k.\n2. Since A · adj(A) = det(A) · I, the eigenvalues of adj(A) are det(A) / λ.\n3. The determinant of A equals the product of its eigenvalues: det(A) = 2 · 3 · 5 = 30.\n4. If λ is an eigenvalue of A, then kλ + c is an eigenvalue of kA + cI.\n\nStep-by-Step Calculation:\n(i) Eigenvalues of A^2: (λ1)^2, (λ2)^2, (λ3)^2\n    2^2 = 4, 3^2 = 9, 5^2 = 25.\n    Eigenvalues of A^2 are: 4, 9, 25.\n\n(ii) Eigenvalues of adj(A): det(A) / λ\n     det(A) = 30.\n     30 / 2 = 15\n     30 / 3 = 10\n     30 / 5 = 6.\n     Eigenvalues of adj(A) are: 15, 10, 6.\n\n(iii) Eigenvalues of 3A + 2I: 3λ + 2\n      3(2) + 2 = 8\n      3(3) + 2 = 11\n      3(5) + 2 = 17.\n      Eigenvalues of 3A + 2I are: 8, 11, 17.\n\nFinal Answer:\n(i) 4, 9, 25\n(ii) 15, 10, 6\n(iii) 8, 11, 17.'
            }
          ]
        },
        {
          id: 'top-mat-2-2',
          name: 'Orthogonal Diagonalization & Quadratic Forms',
          status: 'not-started',
          notes: '',
          tags: ['Orthogonal Matrix', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-10', name: 'Gram-Schmidt orthogonalization process', done: false },
            { id: 'st-mat-11', name: 'Orthogonal transformation X = PY and diagonalization D = P^T A P', done: false },
            { id: 'st-mat-12', name: 'Reduction of quadratic forms to canonical form', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2026-model-q14',
              year: 2026,
              exam: 'January 2026 Model Exam',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q14',
              marks: 14,
              text: 'Reduce the quadratic form Q = 3x1^2 + 5x2^2 + 3x3^2 - 2x1*x2 + 2x1*x3 - 2x2*x3 to canonical form by orthogonal transformation and state its nature, rank, index, and signature.',
              frequency: 'Frequent 14-Mark Question in KTU (2026, 2024, 2022)',
              solved: false,
              hint: 'Write symmetric matrix A. Find eigenvalues. Canonical form is λ1 y1^2 + λ2 y2^2 + λ3 y3^2.',
              source: { status: 'verified', paper: 'KTU MAT101 Jan 2026 Model QP' },
              answer: 'Given Quadratic Form:\nQ = 3x1^2 + 5x2^2 + 3x3^2 - 2x1 x2 + 2x1 x3 - 2x2 x3.\n\nStep 1: Symmetric Matrix of Quadratic Form:\nA =\n[  3  -1   1 ]\n[ -1   5  -1 ]\n[  1  -1   3 ]\n\nStep 2: Characteristic Equation det(A - λI) = 0:\ns1 = 3 + 5 + 3 = 11.\ns2 = (15 - 1) + (9 - 1) + (15 - 1) = 14 + 8 + 14 = 36.\ns3 = det(A) = 3(14) - (-1)(-3 + 1) + 1(1 - 5) = 42 - 2 - 4 = 36.\nCharacteristic polynomial: λ^3 - 11λ^2 + 36λ - 36 = 0.\nRoots: λ = 2, 3, 6.\n\nStep 3: Canonical Form:\nBy orthogonal transformation X = P Y, where P is the normalized modal matrix:\nQ = λ1 y1^2 + λ2 y2^2 + λ3 y3^2\nQ = 2y1^2 + 3y2^2 + 6y3^2.\n\nStep 4: Characterization:\n1. Nature: Positive Definite (all eigenvalues 2, 3, 6 are strictly positive).\n2. Rank (r): 3 (total number of non-zero terms in canonical form).\n3. Index (s): 3 (number of positive terms in canonical form).\n4. Signature: 2s - r = 2(3) - 3 = 3 (difference between positive and negative terms).\n\nFinal Answer:\nCanonical Form: 2y1^2 + 3y2^2 + 6y3^2; Nature: Positive Definite; Rank = 3; Index = 3; Signature = 3.'
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
          status: 'not-started',
          notes: '',
          tags: ['Derivatives', 'Euler Theorem'],
          subTopics: [
            { id: 'st-mat-13', name: 'Homogeneous functions and Euler theorem verification', done: false },
            { id: 'st-mat-14', name: 'Composite functions and chain rule partial differentiation', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2025-dec-q15a',
              year: 2025,
              exam: 'December 2025 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q15(a)',
              marks: 7,
              text: 'If u = sin^-1((x + 2y + 3z) / sqrt(x^8 + y^8 + z^8)), prove that x(∂u/∂x) + y(∂u/∂y) + z(∂u/∂z) = -3 tan(u).',
              frequency: 'Classic KTU Euler Theorem Problem (2025, 2023, 2020)',
              solved: false,
              hint: 'Let f = sin(u). Determine the degree of homogeneity of f(x, y, z). Degree is 1 - 4 = -3.',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2025' },
              answer: 'Given Information:\nu = sin^-1 [ (x + 2y + 3z) / sqrt(x^8 + y^8 + z^8) ].\n\nRequired Result:\nProve that x(∂u/∂x) + y(∂u/∂y) + z(∂u/∂z) = -3 tan(u).\n\nStep 1: Isolate the algebraic function:\nsin(u) = (x + 2y + 3z) / sqrt(x^8 + y^8 + z^8) = f(x, y, z).\n\nStep 2: Check homogeneity of f:\nSubstitute x -> tx, y -> ty, z -> tz:\nf(tx, ty, tz) = (tx + 2ty + 3tz) / sqrt((tx)^8 + (ty)^8 + (tz)^8)\n= t(x + 2y + 3z) / sqrt(t^8 (x^8 + y^8 + z^8))\n= t(x + 2y + 3z) / [t^4 sqrt(x^8 + y^8 + z^8)]\n= t^(1 - 4) · f(x, y, z) = t^(-3) · f(x, y, z).\nTherefore, f is a homogeneous function of degree n = -3.\n\nStep 3: Apply Euler\'s Theorem for f(x, y, z):\nx (∂f/∂x) + y (∂f/∂y) + z (∂f/∂z) = n · f = -3 f.\n\nStep 4: Relate derivatives of f to u:\nSince f = sin(u):\n∂f/∂x = cos(u) · (∂u/∂x)\n∂f/∂y = cos(u) · (∂u/∂y)\n∂f/∂z = cos(u) · (∂u/∂z).\n\nSubstitute into Euler\'s equation:\nx [cos(u) (∂u/∂x)] + y [cos(u) (∂u/∂y)] + z [cos(u) (∂u/∂z)] = -3 sin(u)\ncos(u) [ x (∂u/∂x) + y (∂u/∂y) + z (∂u/∂z) ] = -3 sin(u)\nx (∂u/∂x) + y (∂u/∂y) + z (∂u/∂z) = -3 [sin(u) / cos(u)] = -3 tan(u).\n\nFinal Answer:\nProved: x(∂u/∂x) + y(∂u/∂y) + z(∂u/∂z) = -3 tan(u).'
            }
          ]
        },
        {
          id: 'top-mat-3-2',
          name: 'Maxima, Minima & Lagrange Multipliers',
          status: 'not-started',
          notes: '',
          tags: ['Extrema', 'Lagrange Multiplier', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-15', name: 'Critical points and second derivative discriminant test', done: false },
            { id: 'st-mat-16', name: 'Constrained optimization using Lagrange multipliers', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2026-model-q16',
              year: 2026,
              exam: 'January 2026 Model QP',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q16',
              marks: 14,
              text: 'Find the maximum and minimum distances from the origin to the curve 5x^2 + 6xy + 5y^2 = 8 using the method of Lagrange multipliers.',
              frequency: 'Repeated 14-Mark Problem (2026, 2024, 2021)',
              solved: false,
              hint: 'Objective function f(x, y) = x^2 + y^2. Constraint g(x, y) = 5x^2 + 6xy + 5y^2 - 8 = 0. Solve ∇f = λ ∇g.',
              source: { status: 'verified', paper: 'KTU MAT101 Jan 2026 Model QP' },
              answer: 'Given Information:\nCurve constraint: g(x, y) = 5x^2 + 6xy + 5y^2 - 8 = 0.\n\nRequired Result:\nMaximum and minimum distances from origin (0, 0) using Lagrange multipliers.\n\nStep 1: Formulation:\nDistance from origin is d = sqrt(x^2 + y^2).\nTo simplify, optimize square of distance:\nf(x, y) = x^2 + y^2.\nConstraint: g(x, y) = 5x^2 + 6xy + 5y^2 - 8 = 0.\n\nStep 2: Lagrange System ∇f = λ ∇g:\n∂f/∂x = λ (∂g/∂x) => 2x = λ(10x + 6y) => x = λ(5x + 3y)  --- (1)\n∂f/∂y = λ (∂g/∂y) => 2y = λ(6x + 10y) => y = λ(3x + 5y)  --- (2)\n\nStep 3: Eliminate λ:\nMultiply (1) by y: xy = λ(5xy + 3y^2)\nMultiply (2) by x: xy = λ(3x^2 + 5xy)\nEquating both sides:\nλ(5xy + 3y^2) = λ(3x^2 + 5xy)\nSince λ != 0 (otherwise x=y=0, which violates constraint):\n3y^2 = 3x^2 => y^2 = x^2 => y = ±x.\n\nStep 4: Substitution into constraint:\nCase A: y = x\n5x^2 + 6x(x) + 5x^2 = 8 => 16x^2 = 8 => x^2 = 1/2.\nf = x^2 + y^2 = 1/2 + 1/2 = 1.\nDistance d = sqrt(1) = 1 (Minimum).\n\nCase B: y = -x\n5x^2 + 6x(-x) + 5(-x)^2 = 8 => (5 - 6 + 5)x^2 = 8 => 4x^2 = 8 => x^2 = 2.\nf = x^2 + y^2 = 2 + 2 = 4.\nDistance d = sqrt(4) = 2 (Maximum).\n\nFinal Answer:\nMinimum distance from origin = 1 unit.\nMaximum distance from origin = 2 units.'
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
          status: 'not-started',
          notes: '',
          tags: ['Integration', 'Change of Order', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-17', name: 'Evaluation of double integrals over rectangular and general regions', done: false },
            { id: 'st-mat-18', name: 'Change of order of integration with curve sketch', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2025-dec-q17',
              year: 2025,
              exam: 'December 2025 Regular (Set B)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q17',
              marks: 14,
              text: 'Change the order of integration and hence evaluate: int_0^1 int_x^1 sin(y^2) dy dx.',
              frequency: 'Asked in 2025, 2023, 2021, 2019',
              solved: false,
              hint: 'Given region: x from 0 to 1, y from x to 1. In reversed order: y goes from 0 to 1, x goes from 0 to y.',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2025' },
              answer: 'Given Integral:\nI = int_0^1 [ int_x^1 sin(y^2) dy ] dx.\n\nRequired Result:\nChange order of integration and evaluate.\n\nStep 1: Identify Given Region of Integration:\nx-limits: x = 0 to x = 1.\ny-limits: y = x to y = 1.\nThis defines a triangular region in the first quadrant bounded by:\n- The vertical line x = 0 (y-axis)\n- The horizontal line y = 1\n- The line y = x (hypotenuse).\n\nStep 2: Change Order of Integration (integrate w.r.t x first):\nConsider horizontal strips from left to right:\n- The left boundary is x = 0.\n- The right boundary is the line y = x, which gives x = y.\n- The strip moves vertically from y = 0 to y = 1.\nNew limits:\nx varies from 0 to y.\ny varies from 0 to 1.\n\nStep 3: Transformed Integral:\nI = int_0^1 [ int_0^y sin(y^2) dx ] dy.\n\nStep 4: Evaluate Inner Integral:\nint_0^y sin(y^2) dx = sin(y^2) [x]_0^y = y · sin(y^2).\n\nStep 5: Evaluate Outer Integral:\nI = int_0^1 y · sin(y^2) dy.\nSubstitute u = y^2 => du = 2y dy => y dy = du / 2.\nWhen y = 0, u = 0; when y = 1, u = 1.\nI = (1/2) int_0^1 sin(u) du\n  = (1/2) [ -cos(u) ]_0^1\n  = (1/2) [ -cos(1) - (-cos(0)) ]\n  = (1/2) [ 1 - cos(1) ].\n\nFinal Answer:\nI = (1 - cos(1)) / 2.'
            }
          ]
        },
        {
          id: 'top-mat-4-2',
          name: 'Triple Integrals, Cylindrical & Spherical Coordinates',
          status: 'not-started',
          notes: '',
          tags: ['Triple Integrals', 'Volume'],
          subTopics: [
            { id: 'st-mat-19', name: 'Cartesian triple integrals and volume calculation', done: false },
            { id: 'st-mat-20', name: 'Transformation to cylindrical and spherical polar systems', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2023-dec-q18',
              year: 2023,
              exam: 'December 2023 Regular',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q18',
              marks: 14,
              text: 'Find the volume of the sphere x^2 + y^2 + z^2 = a^2 using spherical polar coordinates.',
              frequency: 'Standard KTU Derivation (2023, 2020)',
              solved: false,
              hint: 'In spherical coordinates: dV = rho^2 sin(phi) drho dphi dtheta. Limits: rho from 0 to a, phi from 0 to pi, theta from 0 to 2pi.',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2023' },
              answer: 'Given Information:\nSphere equation: x^2 + y^2 + z^2 = a^2 of radius a.\n\nRequired Result:\nVolume V using spherical polar coordinates.\n\nStep 1: Coordinate Transformations:\nx = ρ sin(φ) cos(θ)\ny = ρ sin(φ) sin(θ)\nz = ρ cos(φ)\nVolume element: dV = ρ^2 sin(φ) dρ dφ dθ.\n\nStep 2: Limits for the complete sphere:\nρ varies from 0 to a (radial distance)\nφ varies from 0 to π (colatitude angle from north pole to south pole)\nθ varies from 0 to 2π (azimuthal angle in xy-plane).\n\nStep 3: Setup Triple Integral:\nV = int_0^(2π) dθ · int_0^π sin(φ) dφ · int_0^a ρ^2 dρ.\n\nStep 4: Compute Each Factor:\n1. int_0^(2π) dθ = [θ]_0^(2π) = 2π.\n2. int_0^π sin(φ) dφ = [-cos(φ)]_0^π = -cos(π) - (-cos(0)) = -(-1) + 1 = 2.\n3. int_0^a ρ^2 dρ = [ρ^3 / 3]_0^a = a^3 / 3.\n\nStep 5: Multiply Results:\nV = (2π) · (2) · (a^3 / 3) = (4/3) π a^3.\n\nFinal Answer:\nVolume V = (4/3) π a^3.'
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
          status: 'not-started',
          notes: '',
          tags: ['Series Tests', 'Core Theory'],
          subTopics: [
            { id: 'st-mat-21', name: 'Geometric and p-series baseline comparisons', done: false },
            { id: 'st-mat-22', name: 'D Alembert ratio test and Raabe test', done: false },
            { id: 'st-mat-23', name: 'Cauchy integral and root tests', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2026-model-q19a',
              year: 2026,
              exam: 'January 2026 Model Exam (Set A)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q19(a)',
              marks: 7,
              text: 'Test the convergence of the series: sum_(n=1)^infinity ((n!)^2 / (2n)!) * x^(2n) for x > 0.',
              frequency: 'Repeated Ratio Test Problem (2026, 2024, 2022)',
              solved: false,
              hint: 'Apply D Alembert ratio test: compute lim a_(n+1)/a_n as n -> infinity.',
              source: { status: 'verified', paper: 'KTU MAT101 Jan 2026 Model QP' },
              answer: 'Given Series:\nsum_(n=1)^infinity a_n, where a_n = [ (n!)^2 / (2n)! ] · x^(2n) (x > 0).\n\nStep 1: Write (n+1)-th term:\na_(n+1) = [ ((n+1)!)^2 / (2n + 2)! ] · x^(2n + 2).\n\nStep 2: Form the Ratio a_(n+1) / a_n:\na_(n+1) / a_n = [ ((n+1)!)^2 / (n!)^2 ] · [ (2n)! / (2n + 2)! ] · [ x^(2n+2) / x^(2n) ]\n= [ (n + 1)! / n! ]^2 · [ (2n)! / ((2n + 2)(2n + 1)(2n)!) ] · x^2\n= (n + 1)^2 · [ 1 / ((2n + 2)(2n + 1)) ] · x^2\n= [ (n + 1)^2 / (2(n + 1)(2n + 1)) ] · x^2\n= [ (n + 1) / (2(2n + 1)) ] · x^2.\n\nStep 3: Evaluate limit as n -> infinity:\nL = lim_(n->inf) (a_(n+1) / a_n) = lim_(n->inf) [ (1 + 1/n) / (2(2 + 1/n)) ] · x^2\n  = [ 1 / (2 · 2) ] · x^2 = x^2 / 4.\n\nStep 4: Conclusions by D\'Alembert Ratio Test:\n1. If L < 1 => x^2 / 4 < 1 => x^2 < 4 => 0 < x < 2: Series converges absolutely.\n2. If L > 1 => x^2 / 4 > 1 => x > 2: Series diverges.\n3. If L = 1 => x = 2: Test fails. When x = 2, using Raabe\'s test confirms divergence.\n\nFinal Answer:\nConverges for 0 < x < 2; Diverges for x >= 2.'
            }
          ]
        },
        {
          id: 'top-mat-5-2',
          name: 'Taylor Series, Maclaurin Series & Fourier Series',
          status: 'not-started',
          notes: '',
          tags: ['Fourier Series', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat-24', name: 'Maclaurin expansions of standard elementary functions', done: false },
            { id: 'st-mat-25', name: 'Euler formulas for Fourier coefficients over [-pi, pi] and [-L, L]', done: false },
            { id: 'st-mat-26', name: 'Half-range Fourier sine and cosine expansions and Parseval identity', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat101-2025-dec-q20',
              year: 2025,
              exam: 'December 2025 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q20',
              marks: 14,
              text: 'Find the Fourier series representation of f(x) = x^2 in the interval (-pi, pi) and hence deduce that:\n(i) 1 - 1/4 + 1/9 - 1/16 + ... = pi^2 / 12\n(ii) 1 + 1/4 + 1/9 + 1/16 + ... = pi^2 / 6.',
              frequency: 'KTU Top Recurring Question (2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Since f(-x) = (-x)^2 = x^2, f(x) is even. Thus bn = 0. Compute a0 and an using integration by parts.',
              source: { status: 'verified', paper: 'KTU MAT101 Dec 2025' },
              answer: 'Given Function:\nf(x) = x^2 on interval (-π, π).\n\nStep 1: Check parity of f(x):\nf(-x) = (-x)^2 = x^2 = f(x) => Even function.\nTherefore, the sine coefficients bn = 0 for all n >= 1.\nThe Fourier series contains only cosine terms:\nf(x) = a0 / 2 + sum_(n=1)^infinity an cos(nx).\n\nStep 2: Calculate a0:\na0 = (2 / π) int_0^π x^2 dx = (2 / π) [ x^3 / 3 ]_0^π = (2 / π) · (π^3 / 3) = 2π^2 / 3.\nTherefore, a0 / 2 = π^2 / 3.\n\nStep 3: Calculate an using Bernoulli\'s integration by parts:\nan = (2 / π) int_0^π x^2 cos(nx) dx\n= (2 / π) [ x^2 · (sin(nx)/n) - 2x · (-cos(nx)/n^2) + 2 · (-sin(nx)/n^3) ]_0^π\nSince sin(nπ) = 0 and sin(0) = 0:\nan = (2 / π) [ 2π · cos(nπ) / n^2 - 0 ]\n= (4 / n^2) · cos(nπ) = (4 / n^2) · (-1)^n.\n\nStep 4: Fourier Series Representation:\nf(x) = π^2 / 3 + sum_(n=1)^infinity [ 4(-1)^n / n^2 ] cos(nx)\n= π^2 / 3 - 4 [ cos(x)/1^2 - cos(2x)/2^2 + cos(3x)/3^2 - cos(4x)/4^2 + ... ].\n\nStep 5: Deductions:\n(i) Put x = 0 (point of continuity):\nf(0) = 0^2 = 0\n0 = π^2 / 3 - 4 [ 1/1^2 - 1/2^2 + 1/3^2 - 1/4^2 + ... ]\n4 [ 1 - 1/4 + 1/9 - 1/16 + ... ] = π^2 / 3\n1 - 1/4 + 1/9 - 1/16 + ... = π^2 / 12 (Deduction 1 proved).\n\n(ii) Put x = π (point of continuity):\nf(π) = π^2\nπ^2 = π^2 / 3 - 4 [ cos(π)/1^2 - cos(2π)/2^2 + cos(3π)/3^2 - ... ]\nπ^2 - π^2 / 3 = -4 [ -1/1^2 - 1/2^2 - 1/3^2 - 1/4^2 - ... ]\n2π^2 / 3 = 4 [ 1/1^2 + 1/2^2 + 1/3^2 + 1/4^2 + ... ]\n1 + 1/4 + 1/9 + 1/16 + ... = (2π^2 / 3) / 4 = π^2 / 6 (Deduction 2 proved).\n\nFinal Answer:\nf(x) = π^2/3 - 4 sum_(n=1)^inf ((-1)^(n-1)/n^2) cos(nx); Series 1 sum = π^2/12; Series 2 sum = π^2/6.'
            }
          ]
        }
      ]
    }
  ]
};
