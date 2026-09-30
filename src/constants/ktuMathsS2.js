// KTU MAT102: Vector Calculus, Differential Equations and Transforms (2019 Scheme)
// 5 Modules + Previous Year Question Papers (2019 - 2026 December, 2 Sets per year)

export const KTU_MATHS_S2 = {
  id: 'sub-mat102',
  name: 'Vector Calculus & Differential Equations',
  code: 'MAT102',
  color: 'cyan',
  description: 'First order ODEs, higher order linear ODEs, vector differential calculus, Green/Gauss/Stokes theorems, and Laplace transforms under KTU 2019 Scheme.',
  instructor: 'KTU Dept. of Mathematics',
  examDate: '2027-04-14T09:30',
  examVenue: 'KTU Exam Hall 3',
  youtubeUrl: 'https://www.youtube.com/watch?v=IPvYjXCsTg8',
  todos: [
    { id: 'todo-mat2-1', text: 'Master Method of Variation of Parameters for 2nd order ODEs', priority: 'high', done: true, createdAt: '2026-09-20' },
    { id: 'todo-mat2-2', text: 'Verify Gauss Divergence Theorem and Stokes Theorem problems', priority: 'high', done: false, createdAt: '2026-09-22' },
    { id: 'todo-mat2-3', text: 'Solve initial value ODEs using Laplace Convolution theorem', priority: 'medium', done: false, createdAt: '2026-09-24' }
  ],
  modules: [
    {
      id: 'mod-mat102-1',
      number: 1,
      name: 'Module 1: First Order Ordinary Differential Equations',
      topics: [
        {
          id: 'top-mat2-1-1',
          name: 'Exact Differential Equations & Integrating Factors',
          status: 'studied',
          notes: 'M dx + N dy = 0 is exact if dM/dy = dN/dx. Solution is int M dx (y const) + int (terms in N free of x) dy = C. Integrating factor IF = e^(int f(x) dx) if (dM/dy - dN/dx)/N = f(x).',
          tags: ['Core Theory', 'Exact ODEs'],
          subTopics: [
            { id: 'st-mat2-1', name: 'Exact ODE condition and general solution', done: true },
            { id: 'st-mat2-2', name: 'Integrating factors four rules', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-1-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Solve (x^2 + y^2 + 2x) dx + 2y dy = 0.',
              frequency: 'Asked in Dec 2024, Dec 2022',
              solved: true,
              hint: 'dM/dy = 2y = dN/dx. Equation is exact! Solution: x^3/3 + xy^2 + x^2 = C.'
            }
          ]
        },
        {
          id: 'top-mat2-1-2',
          name: 'Bernoulli Equations & Orthogonal Trajectories',
          status: 'needs-revision',
          notes: 'Bernoulli ODE: dy/dx + P(x)y = Q(x)y^n. Divide by y^n and substitute v = y^(1-n) to linearize. Orthogonal trajectories: replace dy/dx with -dx/dy.',
          tags: ['Applications'],
          subTopics: [
            { id: 'st-mat2-3', name: 'Bernoulli non-linear reduction', done: true },
            { id: 'st-mat2-4', name: 'Orthogonal trajectories in Cartesian and Polar forms', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-1-2',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Find the orthogonal trajectories of the family of parabolas y^2 = 4ax.',
              frequency: 'Classic KTU Question (Asked 4 times)',
              solved: false,
              hint: 'Differentiate: 2y dy/dx = 4a = y^2/x. So dy/dx = y/(2x). Replace with -dx/dy = y/(2x) -> 2x dx + y dy = 0 -> 2x^2 + y^2 = C.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat102-2',
      number: 2,
      name: 'Module 2: Higher Order Linear Differential Equations',
      topics: [
        {
          id: 'top-mat2-2-1',
          name: 'Homogeneous & Non-Homogeneous Linear ODEs',
          status: 'studied',
          notes: 'Auxiliary equation roots: real distinct, repeated, complex. Particular Integral (PI) for X = e^(ax), sin(ax)/cos(ax), x^m, e^(ax)V.',
          tags: ['Formulas', 'PI Rules'],
          subTopics: [
            { id: 'st-mat2-5', name: 'Complementary function rules', done: true },
            { id: 'st-mat2-6', name: 'Particular integral shortcuts for standard RHS functions', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-2-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Solve (D^2 - 4D + 4)y = 8(e^(2x) + sin(2x)).',
              frequency: 'Asked in Dec 2024, Dec 2021',
              solved: true,
              hint: 'm^2 - 4m + 4 = 0 -> m = 2, 2. CF = (c1 + c2*x)e^(2x). For e^(2x) use x^2/2 rule.'
            }
          ]
        },
        {
          id: 'top-mat2-2-2',
          name: 'Method of Variation of Parameters & Cauchy-Euler Equations',
          status: 'needs-revision',
          notes: 'Variation of Parameters: y_p = -y1 int (y2 R / W) dx + y2 int (y1 R / W) dx where W = y1 y2 prime - y1 prime y2 (Wronskian). Cauchy-Euler: substitute x = e^t, xD = theta.',
          tags: ['Mandatory 14-Mark Question'],
          subTopics: [
            { id: 'st-mat2-7', name: 'Method of variation of parameters formula and application', done: false },
            { id: 'st-mat2-8', name: 'Cauchy-Euler homogeneous linear equations', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-2-2',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Solve (D^2 + 1)y = sec(x) by the method of variation of parameters.',
              frequency: 'Most Repeated KTU ODE Question (2024, 2023, 2021, 2019)',
              solved: false,
              hint: 'y1 = cos(x), y2 = sin(x), W = 1. u = -int sin(x)sec(x)dx = ln|cos(x)|. v = int cos(x)sec(x)dx = x.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat102-3',
      number: 3,
      name: 'Module 3: Vector Differential Calculus',
      topics: [
        {
          id: 'top-mat2-3-1',
          name: 'Gradient, Directional Derivative & Normal Vector',
          status: 'studied',
          notes: 'Grad f = (df/dx)i + (df/dy)j + (df/dz)k. Directional derivative of f along unit vector u is grad(f) . u. Maximum rate of change is |grad f| along grad f.',
          tags: ['Vectors', 'Calculus'],
          subTopics: [
            { id: 'st-mat2-9', name: 'Gradient and directional derivative computation', done: true },
            { id: 'st-mat2-10', name: 'Unit normal to level surface grad(f)/|grad(f)|', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-3-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Find the directional derivative of f(x, y, z) = x^2 y z + 4 x z^2 at the point (1, -2, -1) in the direction of the vector 2i - j - 2k.',
              frequency: 'Asked in Dec 2024, Dec 2022',
              solved: true,
              hint: 'grad f = (2xyz + 4z^2)i + (x^2 z)j + (x^2 y + 8xz)k. Unit vector u = (2i - j - 2k)/3. Take dot product.'
            }
          ]
        },
        {
          id: 'top-mat2-3-2',
          name: 'Divergence, Curl, Solenoidal & Irrotational Fields',
          status: 'revised',
          notes: 'Div F = grad . F (solenoidal if div F = 0). Curl F = grad x F (irrotational if curl F = 0). If F is irrotational, F = grad(phi) where phi is scalar potential.',
          tags: ['Potential Function', 'Essential'],
          subTopics: [
            { id: 'st-mat2-11', name: 'Physical meaning of div and curl', done: true },
            { id: 'st-mat2-12', name: 'Scalar potential phi derivation for conservative fields', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-3-2',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Show that F = (y^2 cos(x) + z^3)i + (2y sin(x) - 4)j + (3xz^2 + 2)k is irrotational and conservative. Find its scalar potential phi and the work done in moving an object from (0, 1, -1) to (pi/2, -1, 2).',
              frequency: 'Standard KTU 14-Mark Question (2024, 2023, 2020)',
              solved: true,
              hint: 'Show curl F = 0. Integrate components to find phi = y^2 sin(x) + x z^3 - 4y + 2z. Work done = phi(B) - phi(A).'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat102-4',
      number: 4,
      name: 'Module 4: Vector Integral Calculus & Integral Theorems',
      topics: [
        {
          id: 'top-mat2-4-1',
          name: 'Greens Theorem in a Plane',
          status: 'studied',
          notes: 'Line integral oint (P dx + Q dy) = double integral of (dQ/dx - dP/dy) dA over region R.',
          tags: ['Theorems'],
          subTopics: [
            { id: 'st-mat2-13', name: 'Verification of Greens theorem', done: true },
            { id: 'st-mat2-14', name: 'Area computation using Greens theorem', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-4-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Verify Green theorem in the plane for oint_C [(3x^2 - 8y^2) dx + (4y - 6xy) dy] where C is the boundary of the region bounded by y = sqrt(x) and y = x^2.',
              frequency: 'Asked in Dec 2024, Dec 2021',
              solved: true,
              hint: 'dQ/dx - dP/dy = -6y - (-16y) = 10y. Double integral over region gives 3/2.'
            }
          ]
        },
        {
          id: 'top-mat2-4-2',
          name: 'Gauss Divergence Theorem & Stokes Theorem',
          status: 'needs-revision',
          notes: 'Gauss Divergence: oiint_S F . n dS = iiint_V (div F) dV. Stokes: oint_C F . dr = iint_S (curl F) . n dS.',
          tags: ['High Weightage 14 Marks'],
          subTopics: [
            { id: 'st-mat2-15', name: 'Gauss divergence theorem over closed volumes (cube, cylinder, sphere)', done: false },
            { id: 'st-mat2-16', name: 'Stokes theorem line-to-surface integral conversion', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-4-2',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Verify Gauss Divergence Theorem for F = 4xz i - y^2 j + yz k over the cube bounded by x=0, x=1, y=0, y=1, z=0, z=1.',
              frequency: 'Classic KTU Question (2023, 2022, 2019)',
              solved: false,
              hint: 'div F = 4z - 2y + y = 4z - y. Triple integral = int_0^1 int_0^1 int_0^1 (4z - y) dx dy dz = 3/2.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat102-5',
      number: 5,
      name: 'Module 5: Laplace Transforms & Applications',
      topics: [
        {
          id: 'top-mat2-5-1',
          name: 'Laplace Transform Properties & Shifting Theorems',
          status: 'studied',
          notes: 'L{e^(at) f(t)} = F(s - a). L{t^n f(t)} = (-1)^n d^n/ds^n F(s). L{f(t)/t} = int_s^infty F(u) du. L{f prime(t)} = s F(s) - f(0).',
          tags: ['Transforms', 'Formulas'],
          subTopics: [
            { id: 'st-mat2-17', name: 'Standard Laplace transform formulas', done: true },
            { id: 'st-mat2-18', name: 'First and second shifting theorems and unit step function', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-5-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Find the Laplace transform of: (i) t e^(-2t) sin(3t), (ii) (cos(2t) - cos(3t))/t.',
              frequency: 'Asked in Dec 2024, Dec 2020',
              solved: true,
              hint: '(i) Use -d/ds of L{e^(-2t) sin(3t)}. (ii) int_s^infty [u/(u^2 + 4) - u/(u^2 + 9)] du = (1/2) ln((s^2+9)/(s^2+4)).'
            }
          ]
        },
        {
          id: 'top-mat2-5-2',
          name: 'Convolution Theorem & Solving Differential Equations',
          status: 'needs-revision',
          notes: 'Convolution: (f * g)(t) = int_0^t f(u) g(t-u) du. L^-1{F(s) G(s)} = f(t) * g(t). Differential equation with IVP transformed to algebraic equation in s.',
          tags: ['Mandatory ODE Application'],
          subTopics: [
            { id: 'st-mat2-19', name: 'Inverse Laplace and partial fractions', done: true },
            { id: 'st-mat2-20', name: 'Convolution theorem', done: false },
            { id: 'st-mat2-21', name: 'Solving 2nd order initial value ODEs via Laplace', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-5-2',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Using Laplace transform, solve y prime prime + 4y prime + 4y = e^(-t) subject to y(0) = 0, y prime(0) = 0.',
              frequency: 'Asked in Dec 2024, Dec 2022',
              solved: false,
              hint: '(s^2 + 4s + 4) Y(s) = 1/(s + 1) -> Y(s) = 1/((s+1)(s+2)^2). Use partial fractions to invert.'
            },
            {
              id: 'pq-mat2-5-3',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Apply Convolution Theorem to evaluate L^-1 { 1 / (s^2 (s^2 + a^2)) }.',
              frequency: 'Asked in Dec 2023, Dec 2019',
              solved: false,
              hint: 'L^-1{1/s^2} = t, L^-1{1/(s^2+a^2)} = (1/a) sin(at). Convolution integral = (1/a) int_0^t (t-u) sin(au) du.'
            }
          ]
        }
      ]
    }
  ],

  // 16 Question Papers (2019 to 2026, 2 Sets per year)
  pastPapers: [
    {
      id: 'qp-mat2-2026-a',
      title: 'KTU University Model Examination - Dec 2026 (Set A)',
      year: 2026,
      examType: 'Dec 2026 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat2-26a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat2-1-1', topicName: 'Exact ODEs', marks: 3, text: 'State the condition for M(x, y) dx + N(x, y) dy = 0 to be an exact differential equation.', solved: false, hint: 'dM/dy = dN/dx.' },
        { id: 'q-mat2-26a-2', number: 'Q2', moduleNumber: 2, topicId: 'top-mat2-2-1', topicName: 'Higher Order ODEs', marks: 3, text: 'Find the particular integral of (D^2 + 4)y = cos(2x).', solved: false, hint: 'Resonance case: PI = (x / (2*2)) sin(2x) = (x/4) sin(2x).' },
        { id: 'q-mat2-26a-3', number: 'Q3', moduleNumber: 3, topicId: 'top-mat2-3-1', topicName: 'Vector Differential Calculus', marks: 3, text: 'Find a unit vector normal to the surface x^2 + y^2 + z^2 = 9 at the point (1, 2, 2).', solved: false, hint: 'grad(f) = 2xi + 2yj + 2zk = 2i + 4j + 4k. |grad f| = 6. Normal = (i + 2j + 2k)/3.' },
        { id: 'q-mat2-26a-4', number: 'Q4', moduleNumber: 4, topicId: 'top-mat2-4-1', topicName: 'Greens Theorem', marks: 3, text: 'State Green theorem in a plane.', solved: false, hint: 'oint (P dx + Q dy) = iint (dQ/dx - dP/dy) dA.' },
        { id: 'q-mat2-26a-5', number: 'Q5', moduleNumber: 5, topicId: 'top-mat2-5-1', topicName: 'Laplace Transforms', marks: 3, text: 'Find the Laplace transform of f(t) = t^2 e^(3t).', solved: false, hint: '2! / (s - 3)^3 = 2 / (s - 3)^3.' },
        { id: 'q-mat2-26a-6', number: 'Q11', moduleNumber: 1, topicId: 'top-mat2-1-1', topicName: 'Exact ODEs', marks: 14, text: 'Solve (y + y^3/3 + x^2/2) dx + (1/4)(x + x y^2) dy = 0 using an integrating factor.', solved: false, hint: 'Find IF of form x^a y^b.' },
        { id: 'q-mat2-26a-7', number: 'Q13', moduleNumber: 2, topicId: 'top-mat2-2-2', topicName: 'Variation of Parameters', marks: 14, text: 'Using the method of variation of parameters, solve y prime prime - 2y prime + y = e^x / x.', solved: false, hint: 'y1 = e^x, y2 = x e^x, W = e^(2x). u = -x, v = ln|x|.' },
        { id: 'q-mat2-26a-8', number: 'Q15', moduleNumber: 3, topicId: 'top-mat2-3-2', topicName: 'Irrotational Fields', marks: 14, text: 'Prove that F = (6xy + z^3) i + (3x^2 - z) j + (3xz^2 - y) k is irrotational and find its scalar potential.', solved: false, hint: 'phi = 3x^2 y + x z^3 - yz + C.' },
        { id: 'q-mat2-26a-9', number: 'Q17', moduleNumber: 4, topicId: 'top-mat2-4-2', topicName: 'Gauss Divergence Theorem', marks: 14, text: 'Verify Gauss Divergence theorem for F = 2xy i + yz^2 j + xz k over the region bounded by x=0, y=0, z=0 and x+y+z=1.', solved: false, hint: 'div F = 2y + z^2 + x.' },
        { id: 'q-mat2-26a-10', number: 'Q19', moduleNumber: 5, topicId: 'top-mat2-5-2', topicName: 'Solving ODEs via Laplace', marks: 14, text: 'Solve y prime prime - 3y prime + 2y = 4e^(2t) with y(0) = -3, y prime(0) = 5 using Laplace transform.', solved: false, hint: 'L{y prime prime} - 3L{y prime} + 2L{y} = 4/(s - 2).' }
      ]
    },
    {
      id: 'qp-mat2-2026-b',
      title: 'KTU University Model Examination - Dec 2026 (Set B)',
      year: 2026,
      examType: 'Dec 2026 (Set B)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat2-26b-1', number: 'Q1', moduleNumber: 2, topicId: 'top-mat2-2-1', topicName: 'Cauchy-Euler Equations', marks: 14, text: 'Solve x^2 (d^2y/dx^2) - 3x (dy/dx) + 4y = x^2 ln(x).', solved: false, hint: 'Put x = e^t. [D(D-1) - 3D + 4]y = t e^(2t).' },
        { id: 'q-mat2-26b-2', number: 'Q2', moduleNumber: 4, topicId: 'top-mat2-4-2', topicName: 'Stokes Theorem', marks: 14, text: 'Verify Stokes theorem for F = (2x - y) i - y z^2 j - y^2 z k where S is the upper half of the sphere x^2 + y^2 + z^2 = 1 and C is its boundary in the xy-plane.', solved: false, hint: 'C is unit circle x^2 + y^2 = 1, z = 0. Line integral = pi.' }
      ]
    },
    {
      id: 'qp-mat2-2025-a',
      title: 'KTU University Examination - Dec 2025 (Set A)',
      year: 2025,
      examType: 'Dec 2025 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat2-25a-1', number: 'Q1', moduleNumber: 2, topicId: 'top-mat2-2-2', topicName: 'Variation of Parameters', marks: 14, text: 'Solve (D^2 + 4)y = tan(2x) using variation of parameters.', solved: false, hint: 'y1 = cos(2x), y2 = sin(2x), W = 2.' },
        { id: 'q-mat2-25a-2', number: 'Q2', moduleNumber: 5, topicId: 'top-mat2-5-2', topicName: 'Convolution Theorem', marks: 14, text: 'Using convolution theorem, find L^-1 { s / ((s^2 + 1)(s^2 + 4)) }.', solved: false, hint: 'L^-1{s/(s^2+4)} = cos(2t), L^-1{1/(s^2+1)} = sin(t). Value = (1/3)(cos(t) - cos(2t)).' }
      ]
    },
    {
      id: 'qp-mat2-2025-b',
      title: 'KTU University Examination - Dec 2025 (Set B)',
      year: 2025,
      examType: 'Dec 2025 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat2-25b-1', number: 'Q1', moduleNumber: 3, topicId: 'top-mat2-3-1', topicName: 'Directional Derivative', marks: 7, text: 'Find the directional derivative of phi = 4 e^(2x - y + z) at (1, 1, -1) in the direction of the vector from (1, 1, -1) to (-3, 5, 6).', solved: false, hint: 'Displacement vector = -4i + 4j + 7k. Unit vector = (-4i + 4j + 7k)/9.' }
      ]
    },
    {
      id: 'qp-mat2-2024-a',
      title: 'KTU End-Semester Examination - Dec 2024 (Set A)',
      year: 2024,
      examType: 'Dec 2024 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat2-24a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat2-1-1', topicName: 'Exact ODEs', marks: 7, text: 'Solve (1 + e^(x/y)) dx + e^(x/y) (1 - x/y) dy = 0.', solved: true, hint: 'Exact equation! Solution: x + y e^(x/y) = C.' },
        { id: 'q-mat2-24a-2', number: 'Q2', moduleNumber: 2, topicId: 'top-mat2-2-2', topicName: 'Variation of Parameters', marks: 14, text: 'Solve y prime prime + y = cosec(x) by method of variation of parameters.', solved: true, hint: 'u = -x, v = ln|sin(x)|.' },
        { id: 'q-mat2-24a-3', number: 'Q3', moduleNumber: 5, topicId: 'top-mat2-5-2', topicName: 'Solving ODEs via Laplace', marks: 14, text: 'Solve y prime prime + 9y = cos(2t), y(0) = 1, y prime(0) = 0 using Laplace transform.', solved: true, hint: '(s^2 + 9) Y(s) = s + s/(s^2 + 4).' }
      ]
    },
    {
      id: 'qp-mat2-2024-b',
      title: 'KTU Supplementary Examination - Dec 2024 (Set B)',
      year: 2024,
      examType: 'Dec 2024 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat2-24b-1', number: 'Q1', moduleNumber: 4, topicId: 'top-mat2-4-2', topicName: 'Gauss Divergence Theorem', marks: 14, text: 'Evaluate iint_S F . n dS where F = x i + y j + z k and S is the sphere x^2 + y^2 + z^2 = a^2.', solved: false, hint: 'div F = 3. By Gauss divergence theorem, integral = 3 * (4/3 * pi * a^3) = 4 pi a^3.' }
      ]
    },
    {
      id: 'qp-mat2-2023-a',
      title: 'KTU End-Semester Examination - Dec 2023 (Set A)',
      year: 2023,
      examType: 'Dec 2023 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat2-23a-1', number: 'Q1', moduleNumber: 3, topicId: 'top-mat2-3-2', topicName: 'Irrotational Fields', marks: 14, text: 'Find constants a, b, c so that F = (x + 2y + az) i + (bx - 3y - z) j + (4x + cy + 2z) k is irrotational.', solved: true, hint: 'Equating curl components to zero gives a = 4, b = 2, c = -1.' }
      ]
    },
    {
      id: 'qp-mat2-2023-b',
      title: 'KTU Supplementary Examination - Dec 2023 (Set B)',
      year: 2023,
      examType: 'Dec 2023 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat2-23b-1', number: 'Q1', moduleNumber: 5, topicId: 'top-mat2-5-1', topicName: 'Laplace Transforms', marks: 7, text: 'Find the inverse Laplace transform of (s + 2) / (s^2 + 4s + 13).', solved: false, hint: '(s + 2)/((s+2)^2 + 9) -> e^(-2t) cos(3t).' }
      ]
    },
    {
      id: 'qp-mat2-2022-a',
      title: 'KTU End-Semester Examination - Dec 2022 (Set A)',
      year: 2022,
      examType: 'Dec 2022 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat2-22a-1', number: 'Q1', moduleNumber: 2, topicId: 'top-mat2-2-1', topicName: 'Higher Order ODEs', marks: 14, text: 'Solve (D^2 - 2D + 1) y = x e^x sin(x).', solved: false, hint: 'Use shift theorem on D operator.' }
      ]
    },
    {
      id: 'qp-mat2-2022-b',
      title: 'KTU Supplementary Examination - Dec 2022 (Set B)',
      year: 2022,
      examType: 'Dec 2022 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat2-22b-1', number: 'Q1', moduleNumber: 4, topicId: 'top-mat2-4-1', topicName: 'Greens Theorem', marks: 14, text: 'Using Green theorem, find the area bounded by the ellipse x = a cos(t), y = b sin(t).', solved: true, hint: 'Area = (1/2) oint (x dy - y dx) = pi a b.' }
      ]
    },
    {
      id: 'qp-mat2-2021-a',
      title: 'KTU End-Semester Examination - Dec 2021 (Set A)',
      year: 2021,
      examType: 'Dec 2021 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat2-21a-1', number: 'Q1', moduleNumber: 5, topicId: 'top-mat2-5-2', topicName: 'Convolution Theorem', marks: 14, text: 'Find L^-1 { 1 / (s (s^2 + 1)) } using convolution.', solved: true, hint: 'int_0^t sin(u) du = 1 - cos(t).' }
      ]
    },
    {
      id: 'qp-mat2-2021-b',
      title: 'KTU Supplementary Examination - Dec 2021 (Set B)',
      year: 2021,
      examType: 'Dec 2021 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat2-21b-1', number: 'Q1', moduleNumber: 1, topicId: 'top-mat2-1-2', topicName: 'Bernoulli Equations', marks: 7, text: 'Solve dy/dx + y/x = y^2 ln(x).', solved: false, hint: 'Bernoulli ODE with n = 2. Put v = 1/y.' }
      ]
    },
    {
      id: 'qp-mat2-2020-a',
      title: 'KTU End-Semester Examination - Dec 2020 (Set A)',
      year: 2020,
      examType: 'Dec 2020 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat2-20a-1', number: 'Q1', moduleNumber: 3, topicId: 'top-mat2-3-1', topicName: 'Directional Derivative', marks: 7, text: 'Find the angle between the surfaces x^2 + y^2 + z^2 = 9 and z = x^2 + y^2 - 3 at (2, -1, 2).', solved: true, hint: 'cos(theta) = (grad f1 . grad f2) / (|grad f1| |grad f2|).' }
      ]
    },
    {
      id: 'qp-mat2-2020-b',
      title: 'KTU Supplementary Examination - Dec 2020 (Set B)',
      year: 2020,
      examType: 'Dec 2020 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat2-20b-1', number: 'Q1', moduleNumber: 2, topicId: 'top-mat2-2-1', topicName: 'Higher Order ODEs', marks: 7, text: 'Solve (D^3 - D) y = e^x + e^(-x).', solved: false, hint: 'Roots of auxiliary equation: 0, 1, -1.' }
      ]
    },
    {
      id: 'qp-mat2-2019-a',
      title: 'KTU Regular Examination - Dec 2019 (Set A)',
      year: 2019,
      examType: 'Dec 2019 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-mat2-19a-1', number: 'Q1', moduleNumber: 4, topicId: 'top-mat2-4-2', topicName: 'Stokes Theorem', marks: 14, text: 'Verify Stokes theorem for F = y i + z j + x k over the triangle with vertices (1, 0, 0), (0, 1, 0), (0, 0, 1).', solved: false, hint: 'Plane equation x + y + z = 1. Line integral = -1/2.' }
      ]
    },
    {
      id: 'qp-mat2-2019-b',
      title: 'KTU Model Examination - Dec 2019 (Set B)',
      year: 2019,
      examType: 'Dec 2019 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-mat2-19b-1', number: 'Q1', moduleNumber: 5, topicId: 'top-mat2-5-2', topicName: 'Solving ODEs via Laplace', marks: 14, text: 'Solve y prime prime + 2y prime + 5y = e^(-t) sin(t), y(0) = 0, y prime(0) = 1 using Laplace.', solved: false, hint: 'Take transform of both sides and resolve in partial fractions.' }
      ]
    }
  ]
};
