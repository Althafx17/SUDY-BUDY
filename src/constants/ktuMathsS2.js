// KTU MAT102: Vector Calculus, Differential Equations and Transforms (2019 Scheme)
// 5 Modules + Comprehensive Previous Year Question Papers (2019 - 2026) with Step-by-Step Solutions

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
          notes: 'M dx + N dy = 0 is exact if dM/dy = dN/dx. General solution: int M dx (y as constant) + int (terms of N independent of x) dy = C. Integrating factor: IF = exp(int ((dM/dy - dN/dx)/N) dx).',
          tags: ['Exact ODE', 'Integrating Factor', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-mat2-1', name: 'Exact ODE condition and general solution', done: true },
            { id: 'st-mat2-2', name: 'Integrating factors four rules', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-1-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set A)',
              marks: 7,
              text: 'Solve the differential equation: (x^2 + y^2 + 2x) dx + 2y dy = 0.',
              frequency: 'Asked in 2026, 2024, 2022',
              solved: true,
              hint: 'Check exactness: dM/dy = 2y, dN/dx = 0. Notice IF = e^x or group terms as d(x^2 + y^2).',
              answer: 'Step 1: Identify M and N:\nM = x^2 + y^2 + 2x\nN = 2y\n∂M/∂y = 2y, ∂N/∂x = 0.\nNot exact as ∂M/∂y != ∂N/∂x.\n\nStep 2: Find Integrating Factor (IF):\n(∂M/∂y - ∂N/∂x) / N = (2y - 0) / (2y) = 1 (function of x alone, f(x) = 1).\nIF = e^(int 1 dx) = e^x.\n\nStep 3: Multiply given ODE by e^x:\ne^x (x^2 + y^2 + 2x) dx + 2y e^x dy = 0.\nNew M\' = e^x (x^2 + y^2 + 2x), New N\' = 2y e^x.\n∂M\'/∂y = 2y e^x, ∂N\'/∂x = 2y e^x (Exact!).\n\nStep 4: Integrate:\nint M\' dx (y constant) = int e^x (x^2 + 2x + y^2) dx\n= (x^2 + y^2) e^x.\nTerms in N\' independent of x = None (0).\n\nFinal Solution:\ne^x (x^2 + y^2) = C.'
            },
            {
              id: 'pq-mat2-1-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set B)',
              marks: 7,
              text: 'Find the orthogonal trajectories of the family of coaxial circles x^2 + y^2 + 2gx + c = 0, where g is a parameter.',
              frequency: 'Classic Orthogonal Trajectories Problem (2024, 2021, 2019)',
              solved: false,
              hint: 'Differentiate to eliminate parameter g, then replace dy/dx with -dx/dy.',
              answer: 'Step 1: Eliminate parameter g:\nx^2 + y^2 + 2gx + c = 0 => 2g = -(x^2 + y^2 + c) / x  --- (1)\nDifferentiating w.r.t x:\n2x + 2y (dy/dx) + 2g = 0 => 2g = -2x - 2y (dy/dx)  --- (2)\n\nStep 2: Equating (1) and (2):\n-(x^2 + y^2 + c) / x = -2x - 2y (dy/dx)\nx^2 + y^2 + c = 2x^2 + 2xy (dy/dx)\n2xy (dy/dx) = y^2 - x^2 + c\ndy/dx = (y^2 - x^2 + c) / (2xy).\n\nStep 3: For orthogonal trajectories, replace dy/dx by -dx/dy:\n-dx/dy = (y^2 - x^2 + c) / (2xy)\ndy/dx = -2xy / (y^2 - x^2 + c) = 2xy / (x^2 - y^2 - c).\nThis is an exact equation representing the family of circles x^2 + y^2 + 2fy - c = 0, where f is the arbitrary constant.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat102-2',
      number: 2,
      name: 'Module 2: Higher Order Linear Ordinary Differential Equations',
      topics: [
        {
          id: 'top-mat2-2-1',
          name: 'Method of Variation of Parameters & Cauchy-Euler Equations',
          status: 'needs-revision',
          notes: 'For y\'\' + P y\' + Q y = R, complementary function y_h = c1 y1 + c2 y2. Wronskian W = y1 y2\' - y1\' y2. Particular Integral: y_p = u y1 + v y2, where u = -int(y2 R / W) dx, v = int(y1 R / W) dx.',
          tags: ['Variation of Parameters', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat2-3', name: 'Cauchy-Euler equidimensional ODEs and x = e^z substitution', done: true },
            { id: 'st-mat2-4', name: 'Variation of parameters method for second order ODEs', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-2-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set A)',
              marks: 14,
              text: 'Solve using the method of variation of parameters: y\'\' + y = sec(x) tan(x).',
              frequency: 'Repeated 14-Mark Problem (2026, 2025, 2023, 2020)',
              solved: true,
              hint: 'y_h = c1 cos(x) + c2 sin(x). Wronskian W = cos^2(x) + sin^2(x) = 1. u = -int(sin(x) sec(x) tan(x)) dx, v = int(cos(x) sec(x) tan(x)) dx.',
              answer: 'Step 1: Complementary Solution (y_c):\nAuxiliary equation: m^2 + 1 = 0 => m = ±i.\ny_c = c1 cos(x) + c2 sin(x).\nHere y1 = cos(x), y2 = sin(x).\n\nStep 2: Wronskian (W):\nW = y1 y2\' - y1\' y2 = cos(x)(cos(x)) - (-sin(x))(sin(x)) = cos^2(x) + sin^2(x) = 1.\n\nStep 3: Right-hand side R(x) = sec(x) tan(x):\nCalculate u(x):\nu(x) = - int [y2 · R / W] dx = - int [sin(x) · sec(x) tan(x)] dx\n= - int [sin(x) · (sin(x)/cos^2(x))] dx = - int [tan^2(x)] dx\n= - int (sec^2(x) - 1) dx = - [tan(x) - x] = x - tan(x).\n\nStep 4: Calculate v(x):\nv(x) = int [y1 · R / W] dx = int [cos(x) · sec(x) tan(x)] dx\n= int [cos(x) · (1/cos(x)) · tan(x)] dx = int tan(x) dx = ln|sec(x)|.\n\nStep 5: Particular Integral (y_p):\ny_p = u(x) y1 + v(x) y2\n= (x - tan(x)) cos(x) + ln|sec(x)| sin(x)\n= x cos(x) - sin(x) + sin(x) ln|sec(x)|.\n\nStep 6: General Solution:\ny = y_c + y_p = c1 cos(x) + c2 sin(x) + x cos(x) + sin(x) ln|sec(x)|.'
            },
            {
              id: 'pq-mat2-2-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set A)',
              marks: 7,
              text: 'Solve Cauchy-Euler equation: x^2 y\'\' - 3x y\' + 4y = x^2.',
              frequency: 'Asked in 2024, 2022, 2021',
              solved: false,
              hint: 'Substitute x = e^z, z = ln(x). Then x D = D_z, x^2 D^2 = D_z(D_z - 1).',
              answer: 'Step 1: Substitution x = e^z, z = ln(x):\nx (dy/dx) = D_z y\nx^2 (d^2y/dx^2) = D_z(D_z - 1) y.\n\nStep 2: Substitute into ODE:\n[D_z(D_z - 1) - 3 D_z + 4] y = (e^z)^2 = e^(2z)\n(D_z^2 - 4 D_z + 4) y = e^(2z).\n\nStep 3: Auxiliary equation:\nm^2 - 4m + 4 = 0 => (m - 2)^2 = 0 => m = 2, 2.\nComplementary Function: y_c = (c1 + c2 z) e^(2z).\n\nStep 4: Particular Integral y_p:\ny_p = (1 / (D_z - 2)^2) e^(2z) = (z^2 / 2!) e^(2z) = (z^2 / 2) e^(2z).\n\nStep 5: Back-substitute z = ln(x), e^(2z) = x^2:\ny = (c1 + c2 ln(x)) x^2 + (1/2) (ln(x))^2 · x^2.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat102-3',
      number: 3,
      name: 'Module 3: Multivariable Vector Differential Calculus',
      topics: [
        {
          id: 'top-mat2-3-1',
          name: 'Gradient, Directional Derivative & Vector Fields',
          status: 'studied',
          notes: 'grad(phi) = (dphi/dx)i + (dphi/dy)j + (dphi/dz)k. Directional derivative along unit vector u = grad(phi) . u. Solenoidal field: div(F) = 0. Irrotational field: curl(F) = 0.',
          tags: ['Vector Diff', 'Directional Derivative', 'Irrotational'],
          subTopics: [
            { id: 'st-mat2-5', name: 'Directional derivative and maximum rate of increase', done: true },
            { id: 'st-mat2-6', name: 'Divergence, curl, solenoidal and irrotational fields', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-3-1',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set A)',
              marks: 7,
              text: 'Find the directional derivative of phi = x^2 y z + 4 x z^2 at the point (1, -2, -1) in the direction of the vector 2i - j - 2k.',
              frequency: 'Top Recurring 7-Mark Problem (2025, 2023, 2021, 2019)',
              solved: true,
              hint: 'grad(phi) = (2xyz + 4z^2)i + (x^2 z)j + (x^2 y + 8xz)k. Evaluate at point and take dot product with unit vector.',
              answer: 'Step 1: Compute grad(φ) = ∇φ:\n∂φ/∂x = 2xyz + 4z^2\n∂φ/∂y = x^2 z\n∂φ/∂z = x^2 y + 8xz\n∇φ = (2xyz + 4z^2) i + (x^2 z) j + (x^2 y + 8xz) k.\n\nStep 2: Evaluate at point P(1, -2, -1):\n∂φ/∂x = 2(1)(-2)(-1) + 4(-1)^2 = 4 + 4 = 8\n∂φ/∂y = (1)^2 (-1) = -1\n∂φ/∂z = (1)^2 (-2) + 8(1)(-1) = -2 - 8 = -10\n∇φ_(1,-2,-1) = 8i - j - 10k.\n\nStep 3: Find unit vector in direction a = 2i - j - 2k:\n|a| = sqrt(2^2 + (-1)^2 + (-2)^2) = sqrt(4 + 1 + 4) = sqrt(9) = 3.\nu = (2i - j - 2k) / 3.\n\nStep 4: Directional Derivative:\nDD = ∇φ · u = (8·2 + (-1)·(-1) + (-10)·(-2)) / 3\n= (16 + 1 + 20) / 3 = 37 / 3.\n\nFinal Answer: 37 / 3.'
            },
            {
              id: 'pq-mat2-3-2',
              year: 2022,
              exam: 'KTU Dec 2022 Final',
              marks: 7,
              text: 'Show that F = (y^2 cos(x) + z^3) i + (2y sin(x) - 4) j + (3x z^2 + 2) k is conservative (irrotational) and find its scalar potential phi.',
              frequency: 'Asked in 2022, 2020',
              solved: false,
              hint: 'Verify curl(F) = 0. Then integrate dphi = F . dr.',
              answer: 'Step 1: Check curl(F) = ∇ x F:\ncurl(F) =\n|   i             j             k       |\n| ∂/∂x          ∂/∂y          ∂/∂z      |\n| y^2 cos(x)+z^3  2y sin(x)-4   3xz^2+2   |\n\ni-component: ∂/∂y(3xz^2 + 2) - ∂/∂z(2y sin(x) - 4) = 0 - 0 = 0.\nj-component: ∂/∂z(y^2 cos(x) + z^3) - ∂/∂x(3xz^2 + 2) = 3z^2 - 3z^2 = 0.\nk-component: ∂/∂x(2y sin(x) - 4) - ∂/∂y(y^2 cos(x) + z^3) = 2y cos(x) - 2y cos(x) = 0.\nSince curl(F) = 0, F is conservative.\n\nStep 2: Find scalar potential φ such that ∇φ = F:\n∂φ/∂x = y^2 cos(x) + z^3 => φ = y^2 sin(x) + x z^3 + f(y, z)\n∂φ/∂y = 2y sin(x) - 4 => 2y sin(x) + ∂f/∂y = 2y sin(x) - 4 => ∂f/∂y = -4 => f = -4y + g(z)\n∂φ/∂z = 3xz^2 + 2 => 3xz^2 + g\'(z) = 3xz^2 + 2 => g\'(z) = 2 => g(z) = 2z + C.\n\nFinal Scalar Potential:\nφ(x, y, z) = y^2 sin(x) + x z^3 - 4y + 2z + C.'
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
          name: 'Green Theorem, Gauss Divergence Theorem & Stokes Theorem',
          status: 'needs-revision',
          notes: 'Green Theorem: oint (M dx + N dy) = iint (dN/dx - dM/dy) dx dy. Gauss Divergence: iint_S (F . n) dS = iiint_V div(F) dV. Stokes: oint F . dr = iint_S (curl(F) . n) dS.',
          tags: ['Gauss Divergence', 'Stokes Theorem', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat2-7', name: 'Green theorem in plane and area calculation', done: true },
            { id: 'st-mat2-8', name: 'Gauss divergence theorem verification over cubes and spheres', done: false },
            { id: 'st-mat2-9', name: 'Stokes theorem line integral vs surface integral verification', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-4-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set B)',
              marks: 14,
              text: 'Verify Gauss Divergence Theorem for F = (x^2 - yz) i + (y^2 - zx) j + (z^2 - xy) k taken over the rectangular parallelepiped 0 <= x <= a, 0 <= y <= b, 0 <= z <= c.',
              frequency: 'Universal KTU 14-Mark Question (2026, 2024, 2023, 2021, 2019)',
              solved: false,
              hint: 'div(F) = 2(x + y + z). Volume integral = 2 int_0^a int_0^b int_0^c (x + y + z) dz dy dx = abc(a + b + c). Surface integral sum over 6 faces.',
              answer: 'Step 1: Statement of Gauss Divergence Theorem:\niint_S (F · n) dS = iiint_V (∇ · F) dV.\n\nStep 2: Volume Integral Evaluation:\n∇ · F = ∂/∂x(x^2 - yz) + ∂/∂y(y^2 - zx) + ∂/∂z(z^2 - xy) = 2x + 2y + 2z = 2(x + y + z).\niiint_V 2(x + y + z) dV = 2 int_0^a dx int_0^b dy int_0^c (x + y + z) dz\n= 2 [ (a^2 b c / 2) + (a b^2 c / 2) + (a b c^2 / 2) ]\n= a b c (a + b + c).\n\nStep 3: Surface Integral Evaluation across 6 faces:\n1. Face x = a (n = i): F·n = a^2 - yz. Integral = a^2 bc - b^2 c^2 / 4.\n2. Face x = 0 (n = -i): F·n = yz. Integral = b^2 c^2 / 4.\nSum for x-faces = a^2 bc.\n3. Similarly for y-faces (y = b, y = 0): Sum = a b^2 c.\n4. Similarly for z-faces (z = c, z = 0): Sum = a b c^2.\n\nTotal Surface Integral:\niint_S (F · n) dS = a^2 bc + ab^2 c + abc^2 = abc(a + b + c).\n\nConclusion:\nVolume Integral = Surface Integral = abc(a + b + c).\nHence Gauss Divergence Theorem is verified!'
            },
            {
              id: 'pq-mat2-4-2',
              year: 2023,
              exam: 'KTU Dec 2023 Final',
              marks: 7,
              text: 'Apply Green Theorem to evaluate oint_C [(3x^2 - 8y^2) dx + (4y - 6xy) dy], where C is the boundary of the region bounded by y = sqrt(x) and y = x^2.',
              frequency: 'Asked in 2023, 2020',
              solved: true,
              hint: 'dM/dy = -16y, dN/dx = -6y. dN/dx - dM/dy = 10y.',
              answer: 'Step 1: Identify M and N:\nM = 3x^2 - 8y^2 => ∂M/∂y = -16y\nN = 4y - 6xy => ∂N/∂x = -6y\n\nStep 2: By Green Theorem:\noint_C (M dx + N dy) = iint_R (∂N/∂x - ∂M/∂y) dx dy\n= iint_R [-6y - (-16y)] dx dy = iint_R 10y dx dy.\n\nStep 3: Limits of region R bounded by y = x^2 and y = sqrt(x):\nIntersection points: x^2 = sqrt(x) => x^4 = x => x(x^3 - 1) = 0 => x = 0 and x = 1.\nFor each x in [0, 1], y varies from x^2 to sqrt(x).\n\nStep 4: Evaluate Double Integral:\nint_0^1 [ int_(x^2)^(sqrt(x)) 10y dy ] dx\n= 10 int_0^1 [ y^2 / 2 ]_(x^2)^(sqrt(x)) dx = 5 int_0^1 (x - x^4) dx\n= 5 [ x^2 / 2 - x^5 / 5 ]_0^1 = 5 (1/2 - 1/5) = 5 (3/10) = 3/2.\n\nFinal Answer: 3/2.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-mat102-5',
      number: 5,
      name: 'Module 5: Laplace Transforms & Differential Equations',
      topics: [
        {
          id: 'top-mat2-5-1',
          name: 'Laplace Transforms, Convolution Theorem & IVPs',
          status: 'studied',
          notes: 'L{f\'(t)} = s F(s) - f(0). L{f\'\'(t)} = s^2 F(s) - s f(0) - f\'(0). Convolution: (f * g)(t) = int_0^t f(u) g(t-u) du, L{f * g} = F(s) G(s).',
          tags: ['Laplace Transform', 'Convolution', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat2-10', name: 'Transforms of standard functions and shifting properties', done: true },
            { id: 'st-mat2-11', name: 'Convolution theorem and inverse Laplace transforms', done: true },
            { id: 'st-mat2-12', name: 'Solving 2nd order initial value ODEs using Laplace transforms', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-mat2-5-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set A)',
              marks: 14,
              text: 'Solve using Laplace transform the differential equation: y\'\' + 4y\' + 4y = e^(-2t), given y(0) = 0 and y\'(0) = 1.',
              frequency: 'Classic KTU Laplace IVP (2026, 2025, 2022, 2020)',
              solved: false,
              hint: 'Take Laplace transform: (s^2 + 4s + 4) Y(s) - 1 = 1 / (s + 2) => Y(s) = 1/(s+2)^2 + 1/(s+2)^3.',
              answer: 'Step 1: Take Laplace transform of both sides:\nL{y\'\'} + 4 L{y\'} + 4 L{y} = L{e^(-2t)}\n[s^2 Y(s) - s y(0) - y\'(0)] + 4 [s Y(s) - y(0)] + 4 Y(s) = 1 / (s + 2).\n\nStep 2: Substitute initial conditions y(0) = 0, y\'(0) = 1:\n[s^2 Y(s) - 1] + 4 s Y(s) + 4 Y(s) = 1 / (s + 2)\n(s^2 + 4s + 4) Y(s) - 1 = 1 / (s + 2)\n(s + 2)^2 Y(s) = 1 + 1 / (s + 2) = (s + 3) / (s + 2)\nY(s) = 1 / (s + 2)^2 + 1 / (s + 2)^3.\n\nStep 3: Inverse Laplace Transform:\nRecall L^-1{1 / (s + 2)^2} = t e^(-2t) (First shifting property).\nRecall L^-1{1 / (s + 2)^3} = (t^2 / 2!) e^(-2t) = (1/2) t^2 e^(-2t).\n\nStep 4: Final Solution:\ny(t) = t e^(-2t) + (1/2) t^2 e^(-2t) = e^(-2t) (t + t^2 / 2).'
            },
            {
              id: 'pq-mat2-5-2',
              year: 2023,
              exam: 'KTU Dec 2023 Final',
              marks: 7,
              text: 'Evaluate L^-1{1 / [s(s^2 + 4)]} using Convolution theorem.',
              frequency: 'Asked in 2023, 2021',
              solved: true,
              hint: 'Let F(s) = 1/s => f(t) = 1. G(s) = 1/(s^2 + 4) => g(t) = (1/2) sin(2t).',
              answer: 'Step 1: Express as product of two transforms:\nH(s) = F(s) · G(s) = (1 / s) · (1 / (s^2 + 4))\nwhere:\nf(t) = L^-1{1 / s} = 1\ng(t) = L^-1{1 / (s^2 + 4)} = (1/2) sin(2t).\n\nStep 2: By Convolution Theorem:\nL^-1{F(s) G(s)} = (f * g)(t) = int_0^t f(t - u) g(u) du\n= int_0^t (1) · [(1/2) sin(2u)] du\n= (1/2) [ -cos(2u) / 2 ]_0^t\n= -(1/4) [ cos(2t) - cos(0) ] = -(1/4) [ cos(2t) - 1 ]\n= (1 - cos(2t)) / 4.\n\nFinal Answer: (1 - cos(2t)) / 4 (or (1/2) sin^2(t)).'
            }
          ]
        }
      ]
    }
  ]
};
