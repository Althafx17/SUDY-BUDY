// KTU MAT101: Linear Algebra and Calculus (2019 Scheme)
// 5 Modules + Previous Year Question Papers (2019 - 2026 December, 2 Sets per year)

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
          tags: ['Core Theory', 'High Weightage'],
          subTopics: [
            { id: 'st-mat-1', name: 'Elementary row transformations', done: true },
            { id: 'st-mat-2', name: 'Row echelon and reduced row echelon form', done: true },
            { id: 'st-mat-3', name: 'Computation of matrix rank', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-1-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Find the rank of the matrix [[1, 2, -1, 3], [3, 4, 0, -1], [-1, 0, -2, 7]] by reducing to row echelon form.',
              frequency: 'Asked in Dec 2024, Dec 2022',
              solved: true,
              hint: 'Apply R2 -> R2 - 3R1, R3 -> R3 + R1. Continue until echelon form is achieved.'
            },
            {
              id: 'pq-mat-1-2',
              year: 2022,
              exam: 'December Final (Set B)',
              marks: 3,
              text: 'Define rank of a matrix and state the condition under which a non-homogeneous system AX = B has a unique solution.',
              frequency: 'Asked 3 times',
              solved: true,
              hint: 'Rank(A) = Rank([A|B]) = number of unknowns n.'
            }
          ]
        },
        {
          id: 'top-mat-1-2',
          name: 'Consistency & Solutions of Linear Systems',
          status: 'needs-revision',
          notes: 'Rouche-Frobenius theorem: Consistent if rank(A) = rank([A|B]). Unique solution if rank = n, infinitely many if rank < n.',
          tags: ['Numerical', 'Formula'],
          subTopics: [
            { id: 'st-mat-4', name: 'Non-homogeneous systems AX = B and augmented matrix', done: true },
            { id: 'st-mat-5', name: 'Gauss Elimination method for consistency', done: false },
            { id: 'st-mat-6', name: 'Homogeneous systems AX = 0 and trivial/non-trivial solutions', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-1-3',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Investigate for what values of lambda and mu the system x + y + z = 6, x + 2y + 3z = 10, x + 2y + lambda*z = mu has: (i) no solution, (ii) a unique solution, (iii) infinite solutions.',
              frequency: 'Classic KTU 14-Mark Question (Asked in 2023, 2021, 2019)',
              solved: false,
              hint: 'Reduce augmented matrix to echelon form. Analyze diagonal entry (lambda - 3) and right side (mu - 10).'
            },
            {
              id: 'pq-mat-1-4',
              year: 2020,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Solve completely the system of equations 2x - y + 3z = 8, -x + 2y + z = 4, 3x + y - 4z = 0 using Gauss elimination.',
              frequency: 'Asked 2 times',
              solved: false,
              hint: 'Forward elimination followed by back substitution.'
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
          name: 'Eigenvalues & Cayley-Hamilton Theorem',
          status: 'revised',
          notes: 'Characteristic equation: det(A - lambda*I) = 0. Cayley-Hamilton states every square matrix satisfies its own characteristic equation.',
          tags: ['Exam Essential', 'High Frequency'],
          subTopics: [
            { id: 'st-mat-7', name: 'Eigenvalues and eigenvectors of 3x3 matrices', done: true },
            { id: 'st-mat-8', name: 'Properties of eigenvalues (trace and determinant)', done: true },
            { id: 'st-mat-9', name: 'Inverse and powers of matrices via Cayley-Hamilton', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-2-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Verify Cayley-Hamilton theorem for the matrix A = [[2, -1, 1], [-1, 2, -1], [1, -1, 2]] and hence compute A^-1 and A^4.',
              frequency: 'Asked in Dec 2024, Dec 2021, Dec 2019',
              solved: true,
              hint: 'Find det(A - lambda*I) = 0. Show A^3 - 6A^2 + 9A - 4I = 0. Multiply by A^-1 to isolate A^-1 = (1/4)*(A^2 - 6A + 9I).'
            },
            {
              id: 'pq-mat-2-2',
              year: 2023,
              exam: 'December Final (Set B)',
              marks: 3,
              text: 'If 2, 3, 5 are the eigenvalues of matrix A, find the eigenvalues of A^2 and 3A + 2I.',
              frequency: 'Short Answer Part A',
              solved: true,
              hint: 'Eigenvalues of A^2 are 4, 9, 25. For 3A + 2I they are 3(lambda) + 2 -> 8, 11, 17.'
            }
          ]
        },
        {
          id: 'top-mat-2-2',
          name: 'Orthogonal Diagonalization & Quadratic Forms',
          status: 'studied',
          notes: 'Symmetric matrices have real eigenvalues and orthogonal eigenvectors. Canonical form Q = y1^2*lambda1 + y2^2*lambda2 + y3^2*lambda3.',
          tags: ['Proof', 'Numerical'],
          subTopics: [
            { id: 'st-mat-10', name: 'Gram-Schmidt orthogonalization for repeated eigenvalues', done: true },
            { id: 'st-mat-11', name: 'Modal and normalized modal matrix', done: false },
            { id: 'st-mat-12', name: 'Reduction of quadratic form to canonical form', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-2-3',
              year: 2024,
              exam: 'December Final (Set B)',
              marks: 14,
              text: 'Reduce the quadratic form 3x^2 + 5y^2 + 3z^2 - 2xy + 2xz - 2yz to canonical form by orthogonal transformation and find its nature, index, and signature.',
              frequency: 'Asked in Dec 2024, Dec 2022, Dec 2020',
              solved: false,
              hint: 'Matrix A = [[3, -1, 1], [-1, 5, -1], [1, -1, 3]]. Find normalized modal matrix P. Canonical form is Y^T D Y.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat101-3',
      number: 3,
      name: 'Module 3: Multivariable Calculus (Differentiation)',
      topics: [
        {
          id: 'top-mat-3-1',
          name: 'Partial Derivatives, Chain Rule & Total Derivative',
          status: 'studied',
          notes: 'Total differential df = (df/dx)dx + (df/dy)dy. Euler theorem for homogeneous function of degree n: x(df/dx) + y(df/dy) = n*f.',
          tags: ['Theory', 'Formulas'],
          subTopics: [
            { id: 'st-mat-13', name: 'Homogeneous functions and Eulers Theorem', done: true },
            { id: 'st-mat-14', name: 'Chain rule for functions of several variables', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-3-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'If u = sin^-1((x + y)/(sqrt(x) + sqrt(y))), prove that x(du/dx) + y(du/dy) = (1/2)*tan(u).',
              frequency: 'Asked in Dec 2024, Dec 2020',
              solved: true,
              hint: 'Let f = sin(u) = (x+y)/(sqrt(x)+sqrt(y)). f is homogeneous of degree 1/2. By Eulers theorem: x(df/dx) + y(df/dy) = (1/2)*f.'
            }
          ]
        },
        {
          id: 'top-mat-3-2',
          name: 'Maxima & Minima of Two Variables & Lagrange Multipliers',
          status: 'needs-revision',
          notes: 'Second derivative test: D = rt - s^2. If D > 0 and r < 0 -> local maximum; D > 0 and r > 0 -> local minimum; D < 0 -> saddle point.',
          tags: ['Important', 'Practice'],
          subTopics: [
            { id: 'st-mat-15', name: 'Critical points and Hessian determinant', done: true },
            { id: 'st-mat-16', name: 'Lagrange multipliers with constraint g(x,y)=0', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-3-2',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Find the extreme values of f(x, y) = x^3 + y^3 - 3axy.',
              frequency: 'Asked in Dec 2023, Dec 2019',
              solved: false,
              hint: 'Set fx = 3x^2 - 3ay = 0 and fy = 3y^2 - 3ax = 0. Critical points are (0,0) and (a,a). Test D = rt - s^2.'
            },
            {
              id: 'pq-mat-3-3',
              year: 2022,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Find the shortest and longest distances from the origin to the sphere x^2 + y^2 + z^2 = 25 using Lagrange multipliers.',
              frequency: 'Asked in 2022',
              solved: false,
              hint: 'Optimize f(x,y,z) = x^2 + y^2 + z^2 subject to constraint.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat101-4',
      number: 4,
      name: 'Module 4: Multivariable Calculus (Integration & Jacobians)',
      topics: [
        {
          id: 'top-mat-4-1',
          name: 'Double Integrals & Change of Order of Integration',
          status: 'studied',
          notes: 'Sketch the integration region carefully. Determine new limits by drawing horizontal/vertical test strips.',
          tags: ['Numerical', 'High Weightage'],
          subTopics: [
            { id: 'st-mat-17', name: 'Double integrals in Cartesian coordinates', done: true },
            { id: 'st-mat-18', name: 'Change of order of integration', done: true },
            { id: 'st-mat-19', name: 'Double integrals in polar coordinates', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-4-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Change the order of integration and evaluate integral from 0 to 1 of integral from x^2 to 2-x of xy dy dx.',
              frequency: 'Asked in Dec 2024, Dec 2021',
              solved: true,
              hint: 'The region is bounded by y = x^2 and y = 2 - x between x = 0 and x = 1. Split into two horizontal strip regions.'
            },
            {
              id: 'pq-mat-4-2',
              year: 2023,
              exam: 'December Final (Set B)',
              marks: 7,
              text: 'Evaluate double integral of sqrt(a^2 - x^2 - y^2) dx dy over the positive quadrant of the circle x^2 + y^2 = a^2 by transforming to polar coordinates.',
              frequency: 'Asked 3 times',
              solved: false,
              hint: 'x = r cos(theta), y = r sin(theta), dx dy = r dr d(theta). r from 0 to a, theta from 0 to pi/2.'
            }
          ]
        },
        {
          id: 'top-mat-4-2',
          name: 'Triple Integrals, Jacobians & Applications',
          status: 'not-started',
          notes: 'Jacobian J = d(x,y)/d(u,v). Triple integrals compute volume of 3D regions in Cartesian, cylindrical, or spherical coordinates.',
          tags: ['Theory', 'Geometry'],
          subTopics: [
            { id: 'st-mat-20', name: 'Jacobian transformations', done: false },
            { id: 'st-mat-21', name: 'Volume by triple integration', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-4-3',
              year: 2022,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Find the volume of the region bounded by the paraboloid z = x^2 + y^2 and the plane z = 4 using triple integration.',
              frequency: 'Asked in Dec 2022, Dec 2020',
              solved: false,
              hint: 'Use cylindrical coordinates: x = r cos(theta), y = r sin(theta), z = z. z goes from r^2 to 4, r from 0 to 2, theta from 0 to 2*pi.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat101-5',
      number: 5,
      name: 'Module 5: Infinite Series & Fourier Series',
      topics: [
        {
          id: 'top-mat-5-1',
          name: 'Convergence Tests for Infinite Series',
          status: 'studied',
          notes: 'P-series test: sum 1/n^p converges if p > 1. D Alembert ratio test: lim |a_{n+1}/a_n| = L (< 1 converges, > 1 diverges). Alternating series: Leibniz test.',
          tags: ['Convergence', 'Theorems'],
          subTopics: [
            { id: 'st-mat-22', name: 'Comparison and Integral tests', done: true },
            { id: 'st-mat-23', name: 'D Alembert ratio test and Raabe test', done: true },
            { id: 'st-mat-24', name: 'Alternating series and absolute convergence', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-5-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Test the convergence of the series sum from n=1 to infinity of ((n!)^2 / (2n)!) * x^n (x > 0).',
              frequency: 'Asked in Dec 2024, Dec 2023',
              solved: true,
              hint: 'Apply Ratio Test: a_{n+1}/a_n = ((n+1)^2 / ((2n+2)(2n+1))) * x -> x/4. Converges for x < 4, diverges for x > 4.'
            }
          ]
        },
        {
          id: 'top-mat-5-2',
          name: 'Fourier Series & Half-Range Expansions',
          status: 'needs-revision',
          notes: 'Euler coefficients: a0 = (1/L) int f(x) dx, an = (1/L) int f(x) cos(n pi x / L) dx, bn = (1/L) int f(x) sin(n pi x / L) dx. Parsevals theorem yields numerical series sums.',
          tags: ['Mandatory 14-Mark Question'],
          subTopics: [
            { id: 'st-mat-25', name: 'Periodic functions and Euler formulas in (-pi, pi)', done: true },
            { id: 'st-mat-26', name: 'Even and odd functions Fourier expansions', done: false },
            { id: 'st-mat-27', name: 'Half-range Fourier sine and cosine series', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat-5-2',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Obtain the Fourier series expansion of f(x) = x^2 in the interval (-pi, pi). Hence deduce that: (i) 1 - 1/4 + 1/9 - 1/16 + ... = pi^2/12, and (ii) 1 + 1/4 + 1/9 + 1/16 + ... = pi^2/6.',
              frequency: 'Most Repeated KTU Fourier Question (2024, 2022, 2020, 2019)',
              solved: false,
              hint: 'f(x) is even, so bn = 0. Compute a0 = (2/pi) int_0^pi x^2 dx = 2pi^2/3. an = (4*(-1)^n)/n^2. Set x = 0 and x = pi.'
            },
            {
              id: 'pq-mat-5-3',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Find the half-range Fourier sine series for f(x) = x(pi - x) in (0, pi).',
              frequency: 'Asked in Dec 2023, Dec 2021',
              solved: false,
              hint: 'bn = (2/pi) int_0^pi x(pi - x) sin(nx) dx. Use Bernoullis integration formula.'
            }
          ]
        }
      ]
    }
  ],

  // 16 Question Papers (2019 to 2026, 2 Sets per year)
  pastPapers: [
    {
      id: 'qp-mat-2026-a',
      title: 'KTU University Model Examination - Dec 2026 (Set A)',
      year: 2026,
      examType: 'Dec 2026 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat-26a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-1', topicName: 'Rank of a Matrix & Echelon Form', marks: 3, text: 'Define row echelon form and determine the rank of the identity matrix I_4.', solved: false, hint: 'Rank of I_4 is 4 because all 4 diagonal entries are pivots.' },
        { id: 'q-mat-26a-2', number: 'Q2', moduleNumber: 1, topicId: 'top-mat-1-2', topicName: 'Consistency & Solutions of Linear Systems', marks: 3, text: 'State the Rouche-Capelli theorem for the consistency of a non-homogeneous system AX = B.', solved: false, hint: 'System is consistent iff rank(A) = rank([A|B]).' },
        { id: 'q-mat-26a-3', number: 'Q3', moduleNumber: 2, topicId: 'top-mat-2-1', topicName: 'Eigenvalues & Cayley-Hamilton Theorem', marks: 3, text: 'State Cayley-Hamilton theorem and express A^3 in terms of A^2 and A if char polynomial is lambda^3 - 3lambda + 2 = 0.', solved: false, hint: 'A^3 = 3A - 2I.' },
        { id: 'q-mat-26a-4', number: 'Q4', moduleNumber: 2, topicId: 'top-mat-2-2', topicName: 'Orthogonal Diagonalization & Quadratic Forms', marks: 3, text: 'Classify the quadratic form Q = 2x^2 + 3y^2 + 2z^2 as positive definite, negative definite, or indefinite.', solved: false, hint: 'All coefficients are positive, hence positive definite.' },
        { id: 'q-mat-26a-5', number: 'Q5', moduleNumber: 3, topicId: 'top-mat-3-1', topicName: 'Partial Derivatives & Euler Theorem', marks: 3, text: 'If u = e^(x/y), verify whether x(du/dx) + y(du/dy) = 0.', solved: false, hint: 'u is homogeneous of degree 0, so by Euler theorem value is 0*u = 0.' },
        { id: 'q-mat-26a-6', number: 'Q6', moduleNumber: 4, topicId: 'top-mat-4-1', topicName: 'Double Integrals', marks: 3, text: 'Evaluate integral from 0 to 1 of integral from 0 to 2 of (x + 2y) dy dx.', solved: false, hint: 'Inner integral = 2x + 4. Outer integral = 1 + 4 = 5.' },
        { id: 'q-mat-26a-7', number: 'Q7', moduleNumber: 5, topicId: 'top-mat-5-1', topicName: 'Convergence Tests', marks: 3, text: 'State the D Alembert ratio test for convergence of infinite series.', solved: false, hint: 'If lim |a_{n+1}/a_n| = L < 1 converges, > 1 diverges.' },
        { id: 'q-mat-26a-8', number: 'Q8', moduleNumber: 5, topicId: 'top-mat-5-2', topicName: 'Fourier Series', marks: 3, text: 'Write down Euler formulas for Fourier coefficients of f(x) defined in (-L, L).', solved: false, hint: 'a0 = (1/L) int f dx, an = (1/L) int f cos(n pi x/L) dx, bn = (1/L) int f sin(n pi x/L) dx.' },
        { id: 'q-mat-26a-9', number: 'Q11', moduleNumber: 1, topicId: 'top-mat-1-2', topicName: 'Consistency & Solutions of Linear Systems', marks: 14, text: 'Using Gauss elimination, solve: x + 2y + z = 3, 2x + 3y + 3z = 10, 3x - y + 2z = 13.', solved: false, hint: 'Reduce augmented matrix [A|B] to upper triangular form.' },
        { id: 'q-mat-26a-10', number: 'Q13', moduleNumber: 2, topicId: 'top-mat-2-1', topicName: 'Eigenvalues & Cayley-Hamilton Theorem', marks: 14, text: 'Find the eigenvalues and eigenvectors of matrix A = [[1, 1, 3], [1, 5, 1], [3, 1, 1]]. Verify that eigenvectors corresponding to distinct eigenvalues are orthogonal.', solved: false, hint: 'Characteristic roots are lambda = -2, 3, 6.' },
        { id: 'q-mat-26a-11', number: 'Q15', moduleNumber: 3, topicId: 'top-mat-3-2', topicName: 'Maxima & Minima of Two Variables', marks: 14, text: 'Find the points of local maxima, minima, and saddle points for f(x, y) = x^4 + y^4 - 4xy + 1.', solved: false, hint: 'Critical points at (0,0), (1,1), (-1,-1). Use D = rt - s^2.' },
        { id: 'q-mat-26a-12', number: 'Q17', moduleNumber: 4, topicId: 'top-mat-4-1', topicName: 'Double Integrals', marks: 14, text: 'Change the order of integration and evaluate integral from 0 to 4a of integral from x^2/(4a) to 2*sqrt(ax) of dy dx.', solved: false, hint: 'Area bounded by parabolas y^2 = 4ax and x^2 = 4ay. Value = 16a^2/3.' },
        { id: 'q-mat-26a-13', number: 'Q19', moduleNumber: 5, topicId: 'top-mat-5-2', topicName: 'Fourier Series', marks: 14, text: 'Find the Fourier series of f(x) = x^2 in (-pi, pi). Hence prove 1/1^2 + 1/2^2 + 1/3^2 + ... = pi^2/6.', solved: false, hint: 'Even function, so bn = 0. Put x = pi.' }
      ]
    },
    {
      id: 'qp-mat-2026-b',
      title: 'KTU University Model Examination - Dec 2026 (Set B)',
      year: 2026,
      examType: 'Dec 2026 (Set B)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat-26b-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-1', topicName: 'Rank of a Matrix & Echelon Form', marks: 7, text: 'Determine the value of k for which the matrix [[1, 1, 1], [1, 2, 4], [1, 4, k]] has rank 2.', solved: false, hint: 'Row reduce to echelon form. Set third diagonal entry to 0, which yields k = 10.' },
        { id: 'q-mat-26b-2', number: 'Q2', moduleNumber: 2, topicId: 'top-mat-2-2', topicName: 'Orthogonal Diagonalization & Quadratic Forms', marks: 14, text: 'Orthogonally diagonalize the matrix A = [[3, 2, 2], [2, 3, 2], [2, 2, 3]] and write the transformation matrix P.', solved: false, hint: 'Eigenvalues are 7, 1, 1. Normalize mutually orthogonal eigenvectors.' },
        { id: 'q-mat-26b-3', number: 'Q3', moduleNumber: 3, topicId: 'top-mat-3-1', topicName: 'Partial Derivatives & Euler Theorem', marks: 7, text: 'If z = f(x, y) where x = e^u cos(v) and y = e^u sin(v), show that (dz/dx)^2 + (dz/dy)^2 = e^(-2u) * [(dz/du)^2 + (dz/dv)^2].', solved: false, hint: 'Apply multivariable chain rule.' },
        { id: 'q-mat-26b-4', number: 'Q4', moduleNumber: 4, topicId: 'top-mat-4-2', topicName: 'Triple Integrals & Jacobians', marks: 14, text: 'Evaluate triple integral of x y z dx dy dz over the positive octant of the sphere x^2 + y^2 + z^2 <= a^2.', solved: false, hint: 'Use spherical polar coordinates: x = r sin(phi) cos(theta), y = r sin(phi) sin(theta), z = r cos(phi).' },
        { id: 'q-mat-26b-5', number: 'Q5', moduleNumber: 5, topicId: 'top-mat-5-2', topicName: 'Fourier Series', marks: 14, text: 'Find the half-range cosine series for f(x) = x in (0, pi). Hence deduce sum from n=1 to infty of 1/(2n-1)^2 = pi^2/8.', solved: false, hint: 'a0 = pi, an = (2/pi) * ((cos(n pi) - 1) / n^2). Non-zero only for odd n.' }
      ]
    },
    {
      id: 'qp-mat-2025-a',
      title: 'KTU University Examination - Dec 2025 (Set A)',
      year: 2025,
      examType: 'Dec 2025 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat-25a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-2', topicName: 'Consistency & Solutions of Linear Systems', marks: 14, text: 'Test for consistency and solve: x + y + z = 6, x + 2y + 3z = 14, x + 4y + 7z = 30.', solved: false, hint: 'Augmented matrix [A|B] reduces to rank 2. Infinite solutions with one free variable.' },
        { id: 'q-mat-25a-2', number: 'Q2', moduleNumber: 2, topicId: 'top-mat-2-1', topicName: 'Eigenvalues & Cayley-Hamilton Theorem', marks: 14, text: 'Using Cayley-Hamilton theorem, find A^-1 and A^3 for A = [[1, 2], [2, -1]].', solved: false, hint: 'Characteristic equation: lambda^2 - 5 = 0. So A^2 = 5I.' },
        { id: 'q-mat-25a-3', number: 'Q3', moduleNumber: 3, topicId: 'top-mat-3-2', topicName: 'Maxima & Minima of Two Variables', marks: 14, text: 'A rectangular box open at the top is to have a volume of 32 cubic feet. Find dimensions that require the least material.', solved: false, hint: 'Minimize S = xy + 2xz + 2yz with constraint V = xyz = 32.' },
        { id: 'q-mat-25a-4', number: 'Q4', moduleNumber: 4, topicId: 'top-mat-4-1', topicName: 'Double Integrals', marks: 14, text: 'Change order of integration: integral from 0 to 1 of integral from x to sqrt(x) of (x^2 + y^2) dy dx.', solved: false, hint: 'Region between y = x and y = sqrt(x). In terms of y: x goes from y^2 to y.' },
        { id: 'q-mat-25a-5', number: 'Q5', moduleNumber: 5, topicId: 'top-mat-5-1', topicName: 'Convergence Tests', marks: 7, text: 'Test convergence of sum of (sqrt(n) / (n^2 + 1)) from n=1 to infinity.', solved: false, hint: 'Compare with 1/n^(3/2), which converges by p-series test (p = 3/2 > 1).' }
      ]
    },
    {
      id: 'qp-mat-2025-b',
      title: 'KTU University Examination - Dec 2025 (Set B)',
      year: 2025,
      examType: 'Dec 2025 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat-25b-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-1', topicName: 'Rank of a Matrix & Echelon Form', marks: 7, text: 'Find the rank of matrix A = [[1, 3, 5, 2], [2, 4, 6, 8], [3, 5, 7, 10]] by reducing to row echelon form.', solved: false, hint: 'Apply row operations R2 -> R2 - 2R1, R3 -> R3 - 3R1.' },
        { id: 'q-mat-25b-2', number: 'Q2', moduleNumber: 2, topicId: 'top-mat-2-2', topicName: 'Orthogonal Diagonalization & Quadratic Forms', marks: 14, text: 'Find the canonical form of the quadratic form x^2 + 3y^2 + 3z^2 - 2yz.', solved: false, hint: 'Eigenvalues of [[1, 0, 0], [0, 3, -1], [0, -1, 3]] are 1, 2, 4.' },
        { id: 'q-mat-25b-3', number: 'Q3', moduleNumber: 5, topicId: 'top-mat-5-2', topicName: 'Fourier Series', marks: 14, text: 'Find the Fourier series of periodic function f(x) = |x| in (-pi, pi).', solved: false, hint: 'f(x) is even. an = (2/pi) int_0^pi x cos(nx) dx. bn = 0.' }
      ]
    },
    {
      id: 'qp-mat-2024-a',
      title: 'KTU End-Semester Examination - Dec 2024 (Set A)',
      year: 2024,
      examType: 'Dec 2024 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat-24a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-1', topicName: 'Rank of a Matrix & Echelon Form', marks: 7, text: 'Reduce the matrix [[2, 3, -1, -1], [1, -1, -2, -4], [3, 1, 3, -2], [6, 3, 0, -7]] to row echelon form and find its rank.', solved: true, hint: 'R1 <-> R2, then eliminate column 1.' },
        { id: 'q-mat-24a-2', number: 'Q2', moduleNumber: 2, topicId: 'top-mat-2-1', topicName: 'Eigenvalues & Cayley-Hamilton Theorem', marks: 14, text: 'Verify Cayley-Hamilton theorem for A = [[1, 0, 3], [2, 1, -1], [1, -1, 1]] and hence find its inverse.', solved: true, hint: 'char poly: lambda^3 - 3lambda^2 + 5lambda - 9 = 0.' },
        { id: 'q-mat-24a-3', number: 'Q3', moduleNumber: 3, topicId: 'top-mat-3-1', topicName: 'Partial Derivatives & Euler Theorem', marks: 7, text: 'If u = tan^-1((x^3 + y^3)/(x - y)), prove that x(du/dx) + y(du/dy) = sin(2u).', solved: true, hint: 'f = tan(u) is homogeneous of degree 2. Use Euler theorem.' },
        { id: 'q-mat-24a-4', number: 'Q4', moduleNumber: 4, topicId: 'top-mat-4-1', topicName: 'Double Integrals', marks: 14, text: 'Change the order of integration in integral from 0 to a of integral from 0 to sqrt(a^2 - x^2) of y^2 dx dy.', solved: true, hint: 'Region is first quadrant of circle of radius a.' },
        { id: 'q-mat-24a-5', number: 'Q5', moduleNumber: 5, topicId: 'top-mat-5-2', topicName: 'Fourier Series', marks: 14, text: 'Obtain Fourier series of f(x) = x in (-pi, pi). Hence evaluate 1 - 1/3 + 1/5 - 1/7 + ... = pi/4.', solved: false, hint: 'Odd function -> a0 = an = 0. bn = 2*(-1)^{n+1}/n. Put x = pi/2.' }
      ]
    },
    {
      id: 'qp-mat-2024-b',
      title: 'KTU Supplementary Examination - Dec 2024 (Set B)',
      year: 2024,
      examType: 'Dec 2024 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat-24b-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-2', topicName: 'Consistency & Solutions of Linear Systems', marks: 14, text: 'Determine values of a and b for which x + y + 2z = 2, 2x - y + 3z = 2, 5x - y + a*z = b has no solution and infinite solutions.', solved: false, hint: 'Echelon form analysis of augmented matrix.' },
        { id: 'q-mat-24b-2', number: 'Q2', moduleNumber: 2, topicId: 'top-mat-2-2', topicName: 'Orthogonal Diagonalization & Quadratic Forms', marks: 14, text: 'Find the eigenvalues and corresponding eigenvectors of [[8, -6, 2], [-6, 7, -4], [2, -4, 3]].', solved: false, hint: 'lambda = 0, 3, 15.' }
      ]
    },
    {
      id: 'qp-mat-2023-a',
      title: 'KTU End-Semester Examination - Dec 2023 (Set A)',
      year: 2023,
      examType: 'Dec 2023 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat-23a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-2', topicName: 'Consistency & Solutions of Linear Systems', marks: 14, text: 'Solve by Gauss Elimination: x + y + z = 9, 2x + 5y + 7z = 52, 2x + y - z = 0.', solved: true, hint: 'x = 1, y = 3, z = 5.' },
        { id: 'q-mat-23a-2', number: 'Q2', moduleNumber: 2, topicId: 'top-mat-2-1', topicName: 'Eigenvalues & Cayley-Hamilton Theorem', marks: 14, text: 'Find eigenvalues of A = [[1, 2, 2], [0, 2, 1], [-1, 2, 2]] and check if A is diagonalizable.', solved: true, hint: 'Distinct eigenvalues imply diagonalizability.' }
      ]
    },
    {
      id: 'qp-mat-2023-b',
      title: 'KTU Supplementary Examination - Dec 2023 (Set B)',
      year: 2023,
      examType: 'Dec 2023 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat-23b-1', number: 'Q1', moduleNumber: 3, topicId: 'top-mat-3-2', topicName: 'Maxima & Minima of Two Variables', marks: 14, text: 'Examine f(x, y) = x^3 + 3xy^2 - 3x^2 - 3y^2 + 4 for extreme values.', solved: false, hint: 'fx = 3x^2 + 3y^2 - 6x, fy = 6xy - 6y. Points are (0,0), (2,0), (1, 1), (1, -1).' }
      ]
    },
    {
      id: 'qp-mat-2022-a',
      title: 'KTU End-Semester Examination - Dec 2022 (Set A)',
      year: 2022,
      examType: 'Dec 2022 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat-22a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-1', topicName: 'Rank of a Matrix & Echelon Form', marks: 7, text: 'Find rank of A = [[1, 2, 3, 2], [2, 3, 5, 1], [1, 3, 4, 5]].', solved: true, hint: 'Row echelon form rank = 2.' },
        { id: 'q-mat-22a-2', number: 'Q2', moduleNumber: 4, topicId: 'top-mat-4-1', topicName: 'Double Integrals', marks: 14, text: 'Evaluate double integral of e^(x^2) dx dy over region bounded by y = 0, y = x, x = 1 by reversing order.', solved: false, hint: 'Integral becomes (e - 1)/2.' }
      ]
    },
    {
      id: 'qp-mat-2022-b',
      title: 'KTU Supplementary Examination - Dec 2022 (Set B)',
      year: 2022,
      examType: 'Dec 2022 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat-22b-1', number: 'Q1', moduleNumber: 2, topicId: 'top-mat-2-1', topicName: 'Eigenvalues & Cayley-Hamilton Theorem', marks: 14, text: 'Using Cayley-Hamilton, find A^-1 for [[1, 4], [2, 3]].', solved: true, hint: 'lambda^2 - 4lambda - 5 = 0. A^-1 = (1/5)*(A - 4I).' }
      ]
    },
    {
      id: 'qp-mat-2021-a',
      title: 'KTU End-Semester Examination - Dec 2021 (Set A)',
      year: 2021,
      examType: 'Dec 2021 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat-21a-1', number: 'Q1', moduleNumber: 2, topicId: 'top-mat-2-2', topicName: 'Orthogonal Diagonalization & Quadratic Forms', marks: 14, text: 'Diagonalize [[1, 6, 1], [1, 2, 0], [0, 0, 3]] if possible.', solved: false, hint: 'Find roots of characteristic equation.' }
      ]
    },
    {
      id: 'qp-mat-2021-b',
      title: 'KTU Supplementary Examination - Dec 2021 (Set B)',
      year: 2021,
      examType: 'Dec 2021 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat-21b-1', number: 'Q1', moduleNumber: 5, topicId: 'top-mat-5-2', topicName: 'Fourier Series', marks: 14, text: 'Find Fourier series for f(x) = x + x^2 in (-pi, pi).', solved: false, hint: 'Split into odd part x and even part x^2.' }
      ]
    },
    {
      id: 'qp-mat-2020-a',
      title: 'KTU End-Semester Examination - Dec 2020 (Set A)',
      year: 2020,
      examType: 'Dec 2020 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat-20a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-2', topicName: 'Consistency & Solutions of Linear Systems', marks: 14, text: 'Show that system x + y + z = -3, 3x + y - 2z = -2, 2x + 4y + 7z = 7 is inconsistent.', solved: false, hint: 'Rank(A) = 2 while Rank([A|B]) = 3.' }
      ]
    },
    {
      id: 'qp-mat-2020-b',
      title: 'KTU Supplementary Examination - Dec 2020 (Set B)',
      year: 2020,
      examType: 'Dec 2020 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat-20b-1', number: 'Q1', moduleNumber: 3, topicId: 'top-mat-3-1', topicName: 'Partial Derivatives & Euler Theorem', marks: 7, text: 'If u = log(x^3 + y^3 - x^2*y - x*y^2), show x(du/dx) + y(du/dy) = 3.', solved: true, hint: 'Let f = e^u. f is homogeneous of degree 3.' }
      ]
    },
    {
      id: 'qp-mat-2019-a',
      title: 'KTU Regular Examination - Dec 2019 (Set A)',
      year: 2019,
      examType: 'Dec 2019 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat-19a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat-1-2', topicName: 'Consistency & Solutions of Linear Systems', marks: 14, text: 'Solve using Gauss elimination: x + y + z = 6, 2x - y + z = 3, x + 2y - z = 2.', solved: false, hint: 'x = 1, y = 2, z = 3.' },
        { id: 'q-mat-19a-2', number: 'Q2', moduleNumber: 2, topicId: 'top-mat-2-1', topicName: 'Eigenvalues & Cayley-Hamilton Theorem', marks: 14, text: 'Find eigenvalues and eigenvectors of [[3, 1, 4], [0, 2, 6], [0, 0, 5]].', solved: true, hint: 'Triangular matrix, eigenvalues are diagonal elements 3, 2, 5.' }
      ]
    },
    {
      id: 'qp-mat-2019-b',
      title: 'KTU Model Examination - Dec 2019 (Set B)',
      year: 2019,
      examType: 'Dec 2019 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat-19b-1', number: 'Q1', moduleNumber: 4, topicId: 'top-mat-4-1', topicName: 'Double Integrals', marks: 14, text: 'Change order of integration: integral from 0 to 1 of integral from x to 1 of sin(y^2) dy dx.', solved: false, hint: 'Integral evaluates to (1 - cos(1))/2.' },
        { id: 'q-mat-19b-2', number: 'Q2', moduleNumber: 5, topicId: 'top-mat-5-2', topicName: 'Fourier Series', marks: 14, text: 'Find Fourier series of f(x) = e^x in (-pi, pi).', solved: false, hint: 'Use Euler integration with e^(a x) cos(b x).' }
      ]
    }
  ]
};
