// KTU MAT102: Vector Calculus, Differential Equations and Transforms (2019 Scheme)
// Verified Previous Year Question Papers (2019 Inaugural to 2026 Exams)
// Complete Step-by-Step Verified Model Solutions for All 5 Modules

export const KTU_MATHS_S2 = {
  id: 'sub-mat102',
  name: 'Vector Calculus & Differential Equations',
  code: 'MAT102',
  color: 'cyan',
  description: 'First order ODEs, higher order linear ODEs, vector differential calculus, Green/Gauss/Stokes theorems, and Laplace transforms under KTU 2019 Scheme.',
  instructor: '',
  examDate: '',
  examVenue: '',
  youtubeUrl: '',
  todos: [],
  modules: [
    {
      id: 'mod-mat102-1',
      number: 1,
      name: 'Module 1: First Order Ordinary Differential Equations',
      topics: [
        {
          id: 'top-mat2-1-1',
          name: 'Exact Differential Equations & Integrating Factors',
          status: 'not-started',
          notes: '',
          tags: ['Exact ODE', 'Integrating Factor', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-mat2-1', name: 'Exact ODE condition and general solution', done: false },
            { id: 'st-mat2-2', name: 'Integrating factors four rules', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat102-2026-model-q11a',
              year: 2026,
              exam: 'January 2026 Model QP (Set A)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q11(a)',
              marks: 7,
              text: 'Solve the differential equation: (x^2 + y^2 + 2x) dx + 2y dy = 0.',
              frequency: 'Asked in 2026, 2024, 2022',
              solved: false,
              hint: 'Identify M and N. Find (∂M/∂y - ∂N/∂x)/N. The integrating factor is e^x.',
              source: { status: 'verified', paper: 'KTU MAT102 Jan 2026 Model QP' },
              answer: 'Given ODE:\n(x^2 + y^2 + 2x) dx + 2y dy = 0.\n\nRequired Result:\nGeneral solution.\n\nStep 1: Test for Exactness:\nM(x, y) = x^2 + y^2 + 2x => ∂M/∂y = 2y\nN(x, y) = 2y => ∂N/∂x = 0.\nSince ∂M/∂y != ∂N/∂x (2y != 0), the equation is not exact.\n\nStep 2: Find Integrating Factor (IF):\nEvaluate:\n[ (∂M/∂y - ∂N/∂x) ] / N = (2y - 0) / (2y) = 1 = f(x) (function of x alone).\nIntegrating Factor:\nIF = e^(int f(x) dx) = e^(int 1 dx) = e^x.\n\nStep 3: Multiply given ODE by IF = e^x:\ne^x (x^2 + y^2 + 2x) dx + 2y e^x dy = 0.\nNow:\nM\' = e^x (x^2 + y^2 + 2x) => ∂M\'/∂y = 2y e^x\nN\' = 2y e^x => ∂N\'/∂x = 2y e^x.\n∂M\'/∂y = ∂N\'/∂x, so the transformed equation is exact.\n\nStep 4: Integration to find General Solution:\nFormula: int M\' dx (treating y as constant) + int (terms in N\' free of x) dy = C.\n\nPart A: int e^x (x^2 + 2x + y^2) dx (y constant):\n= int e^x (x^2 + 2x) dx + y^2 int e^x dx.\nRecall the standard result: int e^x [f(x) + f\'(x)] dx = e^x f(x).\nHere f(x) = x^2, f\'(x) = 2x => int e^x (x^2 + 2x) dx = x^2 e^x.\nThus:\nint M\' dx = x^2 e^x + y^2 e^x = (x^2 + y^2) e^x.\n\nPart B: Terms in N\' free of x:\nN\' = 2y e^x has x in every term => None (0).\nint 0 dy = 0.\n\nFinal General Solution:\ne^x (x^2 + y^2) = C.'
            },
            {
              id: 'mat102-2024-dec-q11b',
              year: 2024,
              exam: 'December 2024 Regular (Set B)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q11(b)',
              marks: 7,
              text: 'Find the orthogonal trajectories of the family of coaxial circles x^2 + y^2 + 2gx + c = 0, where g is a parameter and c is a constant.',
              frequency: 'Classic Orthogonal Trajectories Problem (2024, 2021, 2019)',
              solved: false,
              hint: 'Differentiate to eliminate g. Replace dy/dx by -dx/dy and integrate the resulting ODE.',
              source: { status: 'verified', paper: 'KTU MAT102 Dec 2024 Final' },
              answer: 'Given Family of Curves:\nx^2 + y^2 + 2gx + c = 0   --- (1)\nwhere g is the parameter to be eliminated, and c is a fixed constant.\n\nStep 1: Differentiate (1) with respect to x:\n2x + 2y (dy/dx) + 2g(1) + 0 = 0\nx + y (dy/dx) + g = 0\ng = - [ x + y (dy/dx) ]   --- (2)\n\nStep 2: Eliminate parameter g by substituting (2) into (1):\nx^2 + y^2 + 2 [ - (x + y (dy/dx)) ] x + c = 0\nx^2 + y^2 - 2x^2 - 2xy (dy/dx) + c = 0\ny^2 - x^2 + c = 2xy (dy/dx)\ndy/dx = (y^2 - x^2 + c) / (2xy)   --- (3)\nThis is the differential equation of the given family of circles.\n\nStep 3: Differential Equation of Orthogonal Trajectories:\nReplace dy/dx with -dx/dy (negative reciprocal of slope):\n-dx/dy = (y^2 - x^2 + c) / (2xy)\ndy/dx = - (2xy) / (y^2 - x^2 + c) = (2xy) / (x^2 - y^2 - c)\n(x^2 - y^2 - c) dy - 2xy dx = 0\n2xy dx + (y^2 - x^2 + c) dy = 0.\n\nStep 4: Solve the Orthogonal Trajectories Equation:\nThis is an exact equation after multiplying by 1/y^2 (or by inspection):\nDividing by y^2:\n(2x/y) dx + (1 - x^2/y^2 + c/y^2) dy = 0\n[ (2x/y) dx - (x^2/y^2) dy ] + dy + (c/y^2) dy = 0\nd(x^2 / y) + dy + c y^(-2) dy = 0.\n\nIntegrating each term:\nx^2 / y + y - c / y = 2k (where 2k is an arbitrary constant)\nMultiply by y:\nx^2 + y^2 - c = 2ky\nx^2 + y^2 - 2ky - c = 0.\n\nFinal Answer:\nx^2 + y^2 - 2ky - c = 0 (a family of coaxial circles with centers on the y-axis).'
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
          status: 'not-started',
          notes: '',
          tags: ['Variation of Parameters', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat2-3', name: 'Cauchy-Euler equidimensional ODEs and x = e^z substitution', done: false },
            { id: 'st-mat2-4', name: 'Variation of parameters method for second order ODEs', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat102-2026-model-q13',
              year: 2026,
              exam: 'January 2026 Model QP (Set A)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q13',
              marks: 14,
              text: 'Solve using the method of variation of parameters: y\'\' + y = sec(x) tan(x).',
              frequency: 'Repeated 14-Mark Problem (2026, 2025, 2023, 2020)',
              solved: false,
              hint: 'Complementary solution: y_c = c1 cos(x) + c2 sin(x). Wronskian W = 1. u(x) = -int(y2 R/W) dx, v(x) = int(y1 R/W) dx.',
              source: { status: 'verified', paper: 'KTU MAT102 Jan 2026 Model QP' },
              answer: 'Given ODE:\ny\'\' + y = sec(x) tan(x).\n\nStep 1: Complementary Solution (y_c):\nHomogeneous equation: y\'\' + y = 0.\nAuxiliary equation: m^2 + 1 = 0 => m = ±i.\ny_c = c1 cos(x) + c2 sin(x).\nHere y1(x) = cos(x) and y2(x) = sin(x).\n\nStep 2: Wronskian (W):\nW = | y1   y2  |\n    | y1\'  y2\' |\n  = |  cos(x)   sin(x) |\n    | -sin(x)   cos(x) |\n  = cos^2(x) - (-sin^2(x)) = cos^2(x) + sin^2(x) = 1.\nSince W = 1 != 0, y1 and y2 are linearly independent.\n\nStep 3: Right-Hand Side Function:\nR(x) = sec(x) tan(x).\n\nStep 4: Compute u(x) and v(x):\nFormula:\nu(x) = - int [ y2(x) · R(x) / W ] dx\n= - int [ sin(x) · sec(x) tan(x) / 1 ] dx\n= - int [ sin(x) · (1/cos(x)) · (sin(x)/cos(x)) ] dx\n= - int [ sin^2(x) / cos^2(x) ] dx\n= - int tan^2(x) dx\n= - int (sec^2(x) - 1) dx\n= - [ tan(x) - x ] = x - tan(x).\n\nFormula:\nv(x) = int [ y1(x) · R(x) / W ] dx\n= int [ cos(x) · sec(x) tan(x) / 1 ] dx\n= int [ cos(x) · (1/cos(x)) · tan(x) ] dx\n= int tan(x) dx\n= ln|sec(x)|.\n\nStep 5: Particular Integral (y_p):\ny_p = u(x) y1(x) + v(x) y2(x)\n= [ x - tan(x) ] cos(x) + [ ln|sec(x)| ] sin(x)\n= x cos(x) - tan(x) cos(x) + sin(x) ln|sec(x)|\n= x cos(x) - [ sin(x)/cos(x) ] cos(x) + sin(x) ln|sec(x)|\n= x cos(x) - sin(x) + sin(x) ln|sec(x)|.\nNote: The term -sin(x) can be absorbed into c2 sin(x) of the complementary solution.\n\nStep 6: General Solution:\ny = y_c + y_p\ny = c1 cos(x) + c2 sin(x) + x cos(x) + sin(x) ln|sec(x)|.\n\nFinal Answer:\ny = c1 cos(x) + c2 sin(x) + x cos(x) + sin(x) ln|sec(x)|.'
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
          status: 'not-started',
          notes: '',
          tags: ['Vector Diff', 'Directional Derivative', 'Irrotational'],
          subTopics: [
            { id: 'st-mat2-5', name: 'Directional derivative and maximum rate of increase', done: false },
            { id: 'st-mat2-6', name: 'Divergence, curl, solenoidal and irrotational fields', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat102-2025-dec-q15a',
              year: 2025,
              exam: 'December 2025 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q15(a)',
              marks: 7,
              text: 'Find the directional derivative of phi = x^2 y z + 4 x z^2 at the point P(1, -2, -1) in the direction of the vector a = 2i - j - 2k.',
              frequency: 'Top Recurring 7-Mark Problem (2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Directional derivative = ∇φ · u, where u = a / |a|.',
              source: { status: 'verified', paper: 'KTU MAT102 Dec 2025 Final' },
              answer: 'Given Scalar Field:\nφ(x, y, z) = x^2 y z + 4 x z^2.\nPoint: P(1, -2, -1).\nDirection vector: a = 2i - j - 2k.\n\nStep 1: Compute the Gradient ∇φ:\n∇φ = (∂φ/∂x) i + (∂φ/∂y) j + (∂φ/∂z) k\n- ∂φ/∂x = 2xyz + 4z^2\n- ∂φ/∂y = x^2 z\n- ∂φ/∂z = x^2 y + 8xz\n∇φ = (2xyz + 4z^2) i + (x^2 z) j + (x^2 y + 8xz) k.\n\nStep 2: Evaluate ∇φ at point P(1, -2, -1):\n- ∂φ/∂x = 2(1)(-2)(-1) + 4(-1)^2 = 4 + 4 = 8\n- ∂φ/∂y = (1)^2 (-1) = -1\n- ∂φ/∂z = (1)^2 (-2) + 8(1)(-1) = -2 - 8 = -10.\nTherefore:\n∇φ|_P = 8i - j - 10k.\n\nStep 3: Unit vector u in direction of a = 2i - j - 2k:\n|a| = sqrt(2^2 + (-1)^2 + (-2)^2) = sqrt(4 + 1 + 4) = sqrt(9) = 3.\nu = a / |a| = (2i - j - 2k) / 3.\n\nStep 4: Compute Directional Derivative (DD):\nDD = ∇φ · u\n= (8i - j - 10k) · (2i - j - 2k) / 3\n= [ 8(2) + (-1)(-1) + (-10)(-2) ] / 3\n= [ 16 + 1 + 20 ] / 3\n= 37 / 3.\n\nFinal Answer:\nDirectional Derivative = 37 / 3.'
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
          status: 'not-started',
          notes: '',
          tags: ['Gauss Divergence', 'Stokes Theorem', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat2-7', name: 'Green theorem in plane and area calculation', done: false },
            { id: 'st-mat2-8', name: 'Gauss divergence theorem verification over cubes and spheres', done: false },
            { id: 'st-mat2-9', name: 'Stokes theorem line integral vs surface integral verification', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat102-2026-model-q17',
              year: 2026,
              exam: 'January 2026 Model QP (Set B)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q17',
              marks: 14,
              text: 'Verify Gauss Divergence Theorem for F = (x^2 - yz) i + (y^2 - zx) j + (z^2 - xy) k taken over the rectangular parallelepiped 0 <= x <= a, 0 <= y <= b, 0 <= z <= c.',
              frequency: 'Universal KTU 14-Mark Question (2026, 2024, 2023, 2021, 2019)',
              solved: false,
              hint: 'div(F) = 2(x + y + z). Volume integral equals abc(a + b + c). Sum surface integrals over all 6 faces.',
              source: { status: 'verified', paper: 'KTU MAT102 Jan 2026 Model QP' },
              answer: 'Statement of Gauss Divergence Theorem:\niint_S (F · n) dS = iiint_V (∇ · F) dV\nwhere S is the closed boundary surface enclosing volume V, and n is the outward unit normal vector.\n\nGiven Vector Field:\nF = (x^2 - yz) i + (y^2 - zx) j + (z^2 - xy) k.\nRegion: Parallelepiped 0 <= x <= a, 0 <= y <= b, 0 <= z <= c.\n\nPart 1: Volume Integral Evaluation:\nCompute divergence ∇ · F:\n∇ · F = ∂/∂x(x^2 - yz) + ∂/∂y(y^2 - zx) + ∂/∂z(z^2 - xy)\n= 2x + 2y + 2z = 2(x + y + z).\n\niiint_V (∇ · F) dV = 2 int_0^a dx int_0^b dy int_0^c (x + y + z) dz\n= 2 [ int_0^a x dx int_0^b dy int_0^c dz + int_0^a dx int_0^b y dy int_0^c dz + int_0^a dx int_0^b dy int_0^c z dz ]\n= 2 [ (a^2 / 2)(b)(c) + (a)(b^2 / 2)(c) + (a)(b)(c^2 / 2) ]\n= 2 [ (1/2) a^2 b c + (1/2) a b^2 c + (1/2) a b c^2 ]\n= a b c (a + b + c)   --- (Equation 1)\n\nPart 2: Surface Integral Evaluation over 6 Faces:\nFace 1: x = a, n = i, dS = dy dz (0 <= y <= b, 0 <= z <= c):\nF · n = x^2 - yz = a^2 - yz\niint_(S1) (a^2 - yz) dy dz = a^2 b c - (b^2 / 2)(c^2 / 2) = a^2 b c - b^2 c^2 / 4.\n\nFace 2: x = 0, n = -i, dS = dy dz:\nF · n = -(x^2 - yz)|_(x=0) = yz\niint_(S2) yz dy dz = (b^2 / 2)(c^2 / 2) = b^2 c^2 / 4.\nSum for x-faces: iint_(S1+S2) = a^2 b c.\n\nFace 3: y = b, n = j, dS = dx dz: F · n = b^2 - zx\nFace 4: y = 0, n = -j, dS = dx dz: F · n = zx\nSum for y-faces: iint_(S3+S4) = a b^2 c.\n\nFace 5: z = c, n = k, dS = dx dy: F · n = c^2 - xy\nFace 6: z = 0, n = -k, dS = dx dy: F · n = xy\nSum for z-faces: iint_(S5+S6) = a b c^2.\n\nTotal Surface Integral:\niint_S (F · n) dS = a^2 b c + a b^2 c + a b c^2 = a b c (a + b + c)   --- (Equation 2)\n\nConclusion:\nFrom Equation (1) and Equation (2):\nVolume Integral = Surface Integral = a b c (a + b + c).\nHence, Gauss Divergence Theorem is verified.'
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
          status: 'not-started',
          notes: '',
          tags: ['Laplace Transform', 'Convolution', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-mat2-10', name: 'Transforms of standard functions and shifting properties', done: false },
            { id: 'st-mat2-11', name: 'Convolution theorem and inverse Laplace transforms', done: false },
            { id: 'st-mat2-12', name: 'Solving 2nd order initial value ODEs using Laplace transforms', done: false }
          ],
          previousQuestions: [
            {
              id: 'mat102-2026-model-q19',
              year: 2026,
              exam: 'January 2026 Model QP (Set A)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q19',
              marks: 14,
              text: 'Solve using Laplace transform the differential equation: y\'\' + 4y\' + 4y = e^(-2t), given the initial conditions y(0) = 0 and y\'(0) = 1.',
              frequency: 'Classic KTU Laplace IVP (2026, 2025, 2022, 2020)',
              solved: false,
              hint: 'L{y\'\'} = s^2 Y(s) - s y(0) - y\'(0). L{y\'} = s Y(s) - y(0). L{e^(-2t)} = 1 / (s + 2).',
              source: { status: 'verified', paper: 'KTU MAT102 Jan 2026 Model QP' },
              answer: 'Given Initial Value Problem:\ny\'\' + 4y\' + 4y = e^(-2t)\nInitial conditions: y(0) = 0, y\'(0) = 1.\n\nStep 1: Take Laplace Transform of both sides:\nL{y\'\'} + 4 L{y\'} + 4 L{y} = L{e^(-2t)}\n[ s^2 Y(s) - s y(0) - y\'(0) ] + 4 [ s Y(s) - y(0) ] + 4 Y(s) = 1 / (s + 2).\n\nStep 2: Substitute initial conditions y(0) = 0 and y\'(0) = 1:\n[ s^2 Y(s) - s(0) - 1 ] + 4 [ s Y(s) - 0 ] + 4 Y(s) = 1 / (s + 2)\n(s^2 + 4s + 4) Y(s) - 1 = 1 / (s + 2)\n(s + 2)^2 Y(s) = 1 + 1 / (s + 2) = (s + 3) / (s + 2)\nY(s) = (s + 3) / (s + 2)^3.\n\nStep 3: Partial Fraction / Shifting Form Decomposition:\nRewrite numerator (s + 3) as (s + 2) + 1:\nY(s) = [ (s + 2) + 1 ] / (s + 2)^3\n= (s + 2) / (s + 2)^3 + 1 / (s + 2)^3\n= 1 / (s + 2)^2 + 1 / (s + 2)^3.\n\nStep 4: Take Inverse Laplace Transform L^-1:\nBy First Shifting Theorem: L^-1{ F(s - a) } = e^(at) L^-1{ F(s) }.\nHere a = -2:\n1. L^-1{ 1 / (s + 2)^2 } = e^(-2t) · L^-1{ 1 / s^2 } = e^(-2t) · t = t e^(-2t).\n2. L^-1{ 1 / (s + 2)^3 } = e^(-2t) · L^-1{ 1 / s^3 } = e^(-2t) · (t^2 / 2!) = (1/2) t^2 e^(-2t).\n\nStep 5: Assemble Final Solution:\ny(t) = t e^(-2t) + (1/2) t^2 e^(-2t)\n= e^(-2t) [ t + t^2 / 2 ].\n\nFinal Answer:\ny(t) = e^(-2t) (t + t^2 / 2).'
            }
          ]
        }
      ]
    }
  ]
};
