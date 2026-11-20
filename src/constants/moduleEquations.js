// KTU B.Tech Engineering Formula Reference Bank for All 4 Subjects & 20 Modules
export const MODULE_EQUATIONS = {
  // MAT101: Linear Algebra and Calculus
  'sub-mat101': {
    1: {
      heading: 'Module 1: Linear Algebra & Systems of Equations',
      areas: [
        {
          name: 'Area 1: Matrix Rank & Row Echelon Forms',
          description: 'Fundamental conditions, elementary operations, and rank properties.',
          equations: [
            {
              title: 'Definition of Matrix Rank',
              formula: 'ρ(A) = Number of non-zero rows in the row echelon form of A',
              latex: '\\rho(A) = \\text{non-zero rows in row echelon form}',
              notes: 'For matrix A of order m × n: ρ(A) ≤ min(m, n). Square matrix of order n is invertible ⟺ ρ(A) = n.'
            },
            {
              title: 'Elementary Row Operations (ERO)',
              formula: 'Rᵢ ↔ Rⱼ,  Rᵢ → k·Rᵢ (k ≠ 0),  Rᵢ → Rᵢ + k·Rⱼ',
              latex: 'R_i \\leftrightarrow R_j, \\quad R_i \\to k R_i \\ (k \\neq 0), \\quad R_i \\to R_i + k R_j',
              notes: 'Elementary row operations preserve the rank of the matrix: ρ(EA) = ρ(A).'
            },
            {
              title: 'Rank Inequalities & Sylvester Law',
              formula: 'ρ(A + B) ≤ ρ(A) + ρ(B),  ρ(AB) ≤ min{ρ(A), ρ(B)},  nullity(A) = n - ρ(A)',
              latex: '\\rho(AB) \\le \\min\\{\\rho(A), \\rho(B)\\}, \\quad \\text{nullity}(A) = n - \\rho(A)',
              notes: 'Dimension of null space (free variables) equals total variables n minus rank r.'
            }
          ]
        },
        {
          name: 'Area 2: Non-Homogeneous Systems (AX = B) & Consistency',
          description: 'Rouché–Capelli theorem criteria for solution existence and uniqueness.',
          equations: [
            {
              title: 'Rouché–Capelli Consistency Criterion',
              formula: 'System is consistent ⟺ ρ(A) = ρ([A|B]) = r',
              latex: '\\text{Consistent} \\iff \\rho(A) = \\rho([A|B]) = r',
              notes: '[A|B] is the augmented matrix formed by joining column vector B to A.'
            },
            {
              title: 'Unique Solution Condition',
              formula: 'ρ(A) = ρ([A|B]) = r = n (number of unknowns) ⟹ Unique Solution',
              latex: 'r = n \\implies \\text{Unique Solution}',
              notes: 'The echelon form has non-zero pivots for all n variables.'
            },
            {
              title: 'Infinitely Many Solutions & Free Parameters',
              formula: 'ρ(A) = ρ([A|B]) = r < n ⟹ ∞-many solutions with (n - r) arbitrary parameters',
              latex: 'r < n \\implies \\infty\\text{-many solutions with } (n - r) \\text{ parameters}',
              notes: 'Assign parameters (k₁, k₂, ...) to the (n - r) free variables to write the general solution.'
            },
            {
              title: 'Inconsistent System (No Solution)',
              formula: 'ρ(A) < ρ([A|B]) ⟹ System is Inconsistent (No Solution)',
              latex: '\\rho(A) < \\rho([A|B]) \\implies \\text{No Solution}',
              notes: 'Arises when a row in the augmented matrix is [0 0 ... 0 | b] with b ≠ 0.'
            }
          ]
        },
        {
          name: 'Area 3: Homogeneous Linear Systems (AX = 0)',
          description: 'Trivial and non-trivial solutions for square and rectangular systems.',
          equations: [
            {
              title: 'Trivial Solution Criterion',
              formula: 'Trivial solution X = 0 always exists. It is the ONLY solution ⟺ ρ(A) = n',
              latex: '\\rho(A) = n \\implies \\text{Only trivial solution } X = 0',
              notes: 'For square matrix n × n, unique trivial solution occurs when |A| ≠ 0.'
            },
            {
              title: 'Non-Trivial Solution Condition',
              formula: 'Non-trivial solution exists ⟺ ρ(A) < n ⟺ det(A) = 0',
              latex: '\\rho(A) < n \\iff \\det(A) = 0 \\implies \\text{Non-trivial solutions exist}',
              notes: 'Number of linearly independent solutions = n - r.'
            }
          ]
        },
        {
          name: 'Area 4: Gauss Elimination & Inversion',
          description: 'Forward elimination and Gauss-Jordan matrix inversion.',
          equations: [
            {
              title: 'Pivot Multiplier in Gauss Elimination',
              formula: 'mᵢₖ = aᵢₖ / aₖₖ,  Rᵢ → Rᵢ - mᵢₖ·Rₖ (for i > k)',
              latex: 'm_{ik} = \\frac{a_{ik}}{a_{kk}}, \\quad R_i \\to R_i - m_{ik} R_k',
              notes: 'Reduces matrix to upper triangular echelon form.'
            },
            {
              title: 'Gauss-Jordan Matrix Inversion',
              formula: '[A | Iₙ]  ──(ERO)──>  [Iₙ | A⁻¹]',
              latex: '[A \\mid I_n] \\xrightarrow{\\text{ERO}} [I_n \\mid A^{-1}]',
              notes: 'Transforms coefficient matrix into identity while transforming identity into the inverse.'
            }
          ]
        }
      ]
    },
    2: {
      heading: 'Module 2: Eigenvalues, Diagonalization & Quadratic Forms',
      areas: [
        {
          name: 'Area 1: Characteristic Equation & Eigenvalues',
          description: 'Characteristic polynomial, trace, and determinant relations.',
          equations: [
            {
              title: 'Characteristic Equation (3 × 3 Matrix)',
              formula: 'λ³ - S₁·λ² + S₂·λ - S₃ = 0',
              latex: '\\lambda^3 - S_1 \\lambda^2 + S_2 \\lambda - S_3 = 0',
              notes: 'S₁ = trace(A); S₂ = sum of principal minors (M₁₁ + M₂₂ + M₃₃); S₃ = det(A).'
            },
            {
              title: 'Trace & Determinant in Terms of Eigenvalues',
              formula: '∑ λᵢ = trace(A) = a₁₁ + a₂₂ + a₃₃,   ∏ λᵢ = det(A)',
              latex: '\\sum \\lambda_i = \\text{tr}(A), \\qquad \\prod \\lambda_i = \\det(A)',
              notes: 'Eigenvalues of Aᵏ are λᵢᵏ; eigenvalues of A⁻¹ are 1/λᵢ.'
            }
          ]
        },
        {
          name: 'Area 2: Eigenvectors & Orthogonal Modal Matrix',
          description: 'Determining vectors and Gram-Schmidt normalization.',
          equations: [
            {
              title: 'Eigenvector Equation',
              formula: '(A - λᵢ I) Xᵢ = 0  (Xᵢ ≠ 0)',
              latex: '(A - \\lambda_i I) X_i = 0',
              notes: 'Solved by cross-multiplication or row reduction of singular matrix.'
            },
            {
              title: 'Normalized Eigenvector',
              formula: 'X̂ = X / ||X|| = (1 / √(x² + y² + z²)) · [x, y, z]ᵀ',
              latex: '\\hat{X} = \\frac{X}{\\|X\\|} = \\frac{1}{\\sqrt{x^2 + y^2 + z^2}} X',
              notes: 'Normalized modal matrix N satisfies Nᵀ·N = I (orthogonal matrix).'
            }
          ]
        },
        {
          name: 'Area 3: Cayley-Hamilton Theorem & Matrix Inversion',
          description: 'Every square matrix satisfies its own characteristic equation.',
          equations: [
            {
              title: 'Cayley-Hamilton Theorem Statement',
              formula: 'A³ - S₁·A² + S₂·A - S₃·I = 0',
              latex: 'A^3 - S_1 A^2 + S_2 A - S_3 I = 0',
              notes: 'Allows expressing high matrix powers A⁴, A⁵ as linear/quadratic combinations.'
            },
            {
              title: 'Matrix Inverse by Cayley-Hamilton',
              formula: 'A⁻¹ = (1 / S₃) · (A² - S₁·A + S₂·I)   (S₃ = det(A) ≠ 0)',
              latex: 'A^{-1} = \\frac{1}{S_3}(A^2 - S_1 A + S_2 I)',
              notes: 'Multiply the Cayley-Hamilton equation throughout by A⁻¹.'
            }
          ]
        },
        {
          name: 'Area 4: Orthogonal Diagonalization & Quadratic Forms',
          description: 'Canonical reduction and definiteness classification.',
          equations: [
            {
              title: 'Orthogonal Diagonalization Transformation',
              formula: 'D = Nᵀ A N = diag(λ₁, λ₂, λ₃)',
              latex: 'D = N^T A N = \\text{diag}(\\lambda_1, \\lambda_2, \\lambda_3)',
              notes: 'N is the normalized modal matrix composed of column eigenvectors.'
            },
            {
              title: 'Canonical Form of Quadratic Form',
              formula: 'Q = Xᵀ A X = λ₁ y₁² + λ₂ y₂² + λ₃ y₃²  (X = N Y)',
              latex: 'Q = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\lambda_3 y_3^2',
              notes: 'Classifications: Positive definite (all λᵢ > 0), Negative definite (all λᵢ < 0), Semi-definite (≥ 0 with at least one 0), Indefinite (both positive and negative signs).'
            }
          ]
        }
      ]
    },
    3: {
      heading: 'Module 3: Multivariable Calculus & Partial Differentiation',
      areas: [
        {
          name: 'Area 1: Total Differential & Chain Rules',
          description: 'Total differential and composite function partial rates.',
          equations: [
            {
              title: 'Total Differential of z = f(x, y)',
              formula: 'dz = (∂z/∂x) dx + (∂z/∂y) dy',
              latex: 'dz = \\frac{\\partial z}{\\partial x} dx + \\frac{\\partial z}{\\partial y} dy',
              notes: 'Approximates changes Δz ≈ (∂z/∂x)Δx + (∂z/∂y)Δy.'
            },
            {
              title: 'Chain Rule for Composite Functions',
              formula: 'dz/dt = (∂z/∂u)(du/dt) + (∂z/∂v)(dv/dt)  for z = f(u, v), u = g(t), v = h(t)',
              latex: '\\frac{dz}{dt} = \\frac{\\partial z}{\\partial u}\\frac{du}{dt} + \\frac{\\partial z}{\\partial v}\\frac{dv}{dt}',
              notes: 'Tree diagram expansion for composite multivariable dependencies.'
            }
          ]
        },
        {
          name: 'Area 2: Euler’s Theorem on Homogeneous Functions',
          description: 'Differentiation identities for homogeneous multivariable functions.',
          equations: [
            {
              title: 'Homogeneous Degree Condition',
              formula: 'f(tx, ty) = tⁿ · f(x, y) ⟹ Degree = n',
              latex: 'f(tx, ty) = t^n f(x, y)',
              notes: 'Degree of rational function g(x, y)/h(x, y) equals deg(g) - deg(h).'
            },
            {
              title: 'Euler’s 1st Order Identity',
              formula: 'x (∂u/∂x) + y (∂u/∂y) = n u',
              latex: 'x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u',
              notes: 'If u = f(z) with z homogeneous of degree n, then x·uₓ + y·uᵧ = n·f(z)/f\'(z) = G(u).'
            },
            {
              title: 'Euler’s 2nd Order Identity',
              formula: 'x² (∂²u/∂x²) + 2xy (∂²u/∂x∂y) + y² (∂²u/∂y²) = n(n - 1) u',
              latex: 'x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = n(n-1)u',
              notes: 'Repeated KTU question for u = sin⁻¹((x+y)/(√x+√y)).'
            }
          ]
        },
        {
          name: 'Area 3: Extrema of Two Variables & Lagrange Multipliers',
          description: 'Discriminant test, stationary points, and constrained optimization.',
          equations: [
            {
              title: 'Second Derivative Discriminant Test',
              formula: 'Δ = r·t - s²,  where r = fₓₓ, s = fₓᵧ, t = fᵧᵧ',
              latex: '\\Delta = r t - s^2, \\quad r = f_{xx}, \\ s = f_{xy}, \\ t = f_{yy}',
              notes: 'Δ > 0 and r > 0 ⟹ Local Min; Δ > 0 and r < 0 ⟹ Local Max; Δ < 0 ⟹ Saddle Point; Δ = 0 ⟹ Inconclusive.'
            },
            {
              title: 'Lagrange Multiplier System',
              formula: '∇f = λ ∇g  ⟺  fₓ + λ gₓ = 0,  fᵧ + λ gᵧ = 0,  f_z + λ g_z = 0,  g(x, y, z) = 0',
              latex: '\\nabla f = \\lambda \\nabla g, \\quad g(x, y, z) = 0',
              notes: 'Maximizes/minimizes objective f(x,y,z) subject to constraint g(x,y,z)=0.'
            }
          ]
        }
      ]
    },
    4: {
      heading: 'Module 4: Multiple Integrals & Applications',
      areas: [
        {
          name: 'Area 1: Double Integrals in Cartesian Coordinates',
          description: 'Area, volume under surface, and mass with variable density.',
          equations: [
            {
              title: 'Area of Plane Region R',
              formula: 'Area = ∬_R dx dy = ∫ₐᵇ ∫_{g₁(x)}^{g₂(x)} dy dx',
              latex: 'A = \\iint_R dx \\, dy = \\int_a^b \\int_{g_1(x)}^{g_2(x)} dy \\, dx',
              notes: 'Vertical strip: inner integral in y, outer in x.'
            },
            {
              title: 'Volume Under Surface z = f(x, y)',
              formula: 'Volume = ∬_R f(x, y) dx dy',
              latex: 'V = \\iint_R f(x, y) \\, dx \\, dy',
              notes: 'Represents the solid bounded by surface z = f(x, y) over region R.'
            }
          ]
        },
        {
          name: 'Area 2: Polar Coordinates & Jacobian',
          description: 'Coordinate transformations and polar area element.',
          equations: [
            {
              title: 'Polar Coordinate Transformation & Area Element',
              formula: 'x = r cos θ,  y = r sin θ,  x² + y² = r²,  dx dy = r dr dθ',
              latex: 'x = r \\cos\\theta, \\ y = r \\sin\\theta, \\ dx dy = r \\, dr \\, d\\theta',
              notes: 'Jacobian determinant J = r. Always include the r factor in polar integrations!'
            }
          ]
        },
        {
          name: 'Area 3: Triple Integrals in Cylindrical & Spherical',
          description: 'Volume elements for 3D curved surfaces.',
          equations: [
            {
              title: 'Cylindrical Volume Element',
              formula: 'dV = r dr dθ dz   (x = r cos θ, y = r sin θ, z = z)',
              latex: 'dV = r \\, dr \\, d\\theta \\, dz',
              notes: 'Suited for cylinders and paraboloids of revolution.'
            },
            {
              title: 'Spherical Polar Volume Element',
              formula: 'dV = ρ² sin φ dρ dφ dθ   (x = ρ sin φ cos θ, y = ρ sin φ sin θ, z = ρ cos φ)',
              latex: 'dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta',
              notes: 'Full sphere limits: ρ ∈ [0, R], φ ∈ [0, π], θ ∈ [0, 2π].'
            }
          ]
        }
      ]
    },
    5: {
      heading: 'Module 5: Infinite Series & Power Series',
      areas: [
        {
          name: 'Area 1: Baseline Series Tests',
          description: 'Geometric series and p-series reference benchmarks.',
          equations: [
            {
              title: 'Geometric Series Sum',
              formula: '∑_{n=0}^∞ a·rⁿ = a / (1 - r)  ⟺  |r| < 1',
              latex: '\\sum_{n=0}^\\infty a r^n = \\frac{a}{1 - r} \\iff |r| < 1',
              notes: 'Diverges if |r| ≥ 1.'
            },
            {
              title: 'p-Series (Harmonic Series) Test',
              formula: '∑_{n=1}^∞ (1 / nᵖ) converges ⟺ p > 1; diverges ⟺ p ≤ 1',
              latex: '\\sum_{n=1}^\\infty \\frac{1}{n^p} \\quad (p > 1 \\implies \\text{Conv}, \\ p \\le 1 \\implies \\text{Div})',
              notes: 'Primary benchmark for limit comparison tests.'
            }
          ]
        },
        {
          name: 'Area 2: Ratio & Raabe’s Tests',
          description: 'Convergence tests for positive-term series.',
          equations: [
            {
              title: 'D’Alembert’s Ratio Test',
              formula: 'L = lim_{n→∞} |a_{n+1} / a_n|  (L < 1 ⟹ Conv, L > 1 ⟹ Div, L = 1 ⟹ Test Fails)',
              latex: 'L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|',
              notes: 'Best for factorials (n!) and geometric terms (xⁿ).'
            },
            {
              title: 'Raabe’s Test (When Ratio Test L = 1 Fails)',
              formula: 'R = lim_{n→∞} n · [ (a_n / a_{n+1}) - 1 ]  (R > 1 ⟹ Conv, R < 1 ⟹ Div)',
              latex: 'R = \\lim_{n\\to\\infty} n \\left( \\frac{a_n}{a_{n+1}} - 1 \\right)',
              notes: 'Notice the ratio inside Raabe\'s test is inverted (a_n / a_{n+1}).'
            }
          ]
        },
        {
          name: 'Area 3: Power Series & Radius of Convergence',
          description: 'Interval and radius calculations for ∑ cₙ(x - a)ⁿ.',
          equations: [
            {
              title: 'Radius of Convergence (R)',
              formula: 'R = lim_{n→∞} |c_n / c_{n+1}| = 1 / (lim_{n→∞} |c_n|^(1/n))',
              latex: 'R = \\lim_{n\\to\\infty} \\left| \\frac{c_n}{c_{n+1}} \\right|',
              notes: 'Interval of convergence is (a - R, a + R). Test endpoints separately!'
            }
          ]
        }
      ]
    }
  },

  // CYT100: Engineering Chemistry
  'sub-cyt100': {
    1: {
      heading: 'Module 1: Electrochemistry & Corrosion',
      areas: [
        {
          name: 'Area 1: Nernst Equation & Cell Potentials',
          description: 'Electrode potentials, EMF, and free energy relations.',
          equations: [
            {
              title: 'Nernst Equation at 298 K (25°C)',
              formula: 'E = E° - (0.0591 / n) · log₁₀( [Products] / [Reactants] )',
              latex: 'E = E^\\circ - \\frac{0.0591}{n} \\log_{10} \\left( \\frac{[\\text{Red}]}{[\\text{Ox}]} \\right)',
              notes: 'Single metal electrode: E = E° + (0.0591 / n)·log₁₀[Mⁿ⁺].'
            },
            {
              title: 'Standard Cell EMF',
              formula: 'E°_{cell} = E°_{cathode} - E°_{anode}   (Standard Reduction Potentials)',
              latex: 'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}',
              notes: 'Spontaneous reaction has E_{cell} > 0.'
            },
            {
              title: 'Free Energy & Equilibrium Constant',
              formula: 'ΔG° = -n F E°_{cell} = -2.303 R T log₁₀ K_{eq}',
              latex: '\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}} = -2.303 R T \\log_{10} K_{\\text{eq}}',
              notes: 'F = 96500 C/mol; ΔG° < 0 signifies spontaneity.'
            }
          ]
        },
        {
          name: 'Area 2: Reference Electrodes & Potentiometric pH',
          description: 'Calomel and glass electrode potentials.',
          equations: [
            {
              title: 'Glass Electrode Potential & pH Formula',
              formula: 'E_G = E°_G - 0.0591 · pH  ⟹  pH = (E°_G - E_{SCE} - E_{cell}) / 0.0591',
              latex: 'E_G = E^\\circ_G - 0.0591 \\cdot \\text{pH}',
              notes: 'SCE reference potential E_{SCE} = +0.2422 V at 298 K.'
            }
          ]
        },
        {
          name: 'Area 3: Corrosion Kinetics & PBR',
          description: 'Corrosion rate and Pilling-Bedworth oxide criteria.',
          equations: [
            {
              title: 'Pilling-Bedworth Ratio (PBR)',
              formula: 'PBR = V_{oxide} / V_{metal} = (M · d) / (n · m · D)',
              latex: '\\text{PBR} = \\frac{M \\cdot d}{n \\cdot m \\cdot D}',
              notes: 'Protective non-porous oxide film formed if 1 ≤ PBR ≤ 2 (e.g. Al, Cr, Ni).'
            }
          ]
        }
      ]
    },
    2: {
      heading: 'Module 2: Spectroscopic Techniques & Analytical Applications',
      areas: [
        {
          name: 'Area 1: Beer-Lambert Law & Absorption',
          description: 'Light attenuation, absorbance, and concentration measurements.',
          equations: [
            {
              title: 'Beer-Lambert Absorption Law',
              formula: 'A = log₁₀(I₀ / I) = ε · c · l',
              latex: 'A = \\log_{10}\\left(\\frac{I_0}{I}\\right) = \\epsilon \\cdot c \\cdot l',
              notes: 'A = absorbance (unitless); ε = molar absorptivity (L·mol⁻¹·cm⁻¹); c = concentration (mol/L); l = path length (cm).'
            },
            {
              title: 'Transmittance to Absorbance Conversion',
              formula: 'A = -log₁₀(T) = 2 - log₁₀(%T)',
              latex: 'A = 2 - \\log_{10}(\\%T)',
              notes: '100% T ⟹ A = 0; 10% T ⟹ A = 1; 1% T ⟹ A = 2.'
            }
          ]
        },
        {
          name: 'Area 2: IR Spectroscopy & Hooke’s Law',
          description: 'Molecular vibrational frequency and reduced mass.',
          equations: [
            {
              title: 'Hooke’s Law for Diatomic Vibrational Frequency',
              formula: 'ν̄ = (1 / 2πc) · √(k / μ)   (cm⁻¹)',
              latex: '\\bar{\\nu} = \\frac{1}{2\\pi c} \\sqrt{\\frac{k}{\\mu}}',
              notes: 'k = bond force constant (dynes/cm); μ = (m₁m₂)/(m₁+m₂) = reduced mass (g).'
            },
            {
              title: 'Vibrational Degrees of Freedom',
              formula: 'Linear: 3N - 5,  Non-Linear: 3N - 6   (N = number of atoms)',
              latex: '\\text{Linear: } 3N - 5, \\quad \\text{Non-Linear: } 3N - 6',
              notes: 'CO₂ has 4 modes; H₂O has 3 modes.'
            }
          ]
        },
        {
          name: 'Area 3: 1H-NMR Spectroscopy & Chemical Shift',
          description: 'Chemical shift and spin-spin splitting multiplicity.',
          equations: [
            {
              title: 'Chemical Shift Definition (δ scale)',
              formula: 'δ = [ (ν_{sample} - ν_{TMS}) / ν_{operating} ] × 10⁶  (ppm)',
              latex: '\\delta = \\frac{\\nu_{\\text{sample}} - \\nu_{\\text{TMS}}}{\\nu_{\\text{operating}}} \\times 10^6 \\, \\text{ppm}',
              notes: 'TMS reference set at δ = 0 ppm. Splitting multiplicity M = n + 1.'
            }
          ]
        }
      ]
    },
    3: {
      heading: 'Module 3: Polymers, Conducting Polymers & Nanomaterials',
      areas: [
        {
          name: 'Area 1: Polymer Molecular Weights & PDI',
          description: 'Statistical averages and molecular weight distribution index.',
          equations: [
            {
              title: 'Number-Average & Weight-Average Molecular Weights',
              formula: 'M̄ₙ = (∑ Nᵢ Mᵢ) / (∑ Nᵢ),   M̄_w = (∑ Nᵢ Mᵢ²) / (∑ Nᵢ Mᵢ)',
              latex: '\\bar{M}_n = \\frac{\\sum N_i M_i}{\\sum N_i}, \\quad \\bar{M}_w = \\frac{\\sum N_i M_i^2}{\\sum N_i M_i}',
              notes: 'Polydispersity Index PDI = M̄_w / M̄ₙ ≥ 1. Monodisperse polymers have PDI = 1.'
            },
            {
              title: 'Degree of Polymerization (DP)',
              formula: 'DP = M̄ₙ / M₀   (M₀ = monomer unit molecular weight)',
              latex: '\\text{DP} = \\frac{\\bar{M}_n}{M_0}',
              notes: 'Indicates the average number of repeating monomer units in polymer chains.'
            }
          ]
        },
        {
          name: 'Area 2: Nanomaterial Surface-to-Volume Ratio',
          description: 'Scaling laws in nanomaterial chemistry.',
          equations: [
            {
              title: 'Spherical Nanoparticle Surface-to-Volume Ratio',
              formula: 'Surface Area / Volume = (4πr²) / ((4/3)πr³) = 3/r = 6/d',
              latex: '\\frac{\\text{Surface Area}}{\\text{Volume}} = \\frac{6}{d}',
              notes: 'As diameter d decreases into nanoscale (1-100 nm), specific surface area explodes.'
            }
          ]
        }
      ]
    },
    4: {
      heading: 'Module 4: Fuels & Combustion Calculations',
      areas: [
        {
          name: 'Area 1: Calorific Value Formulas & Dulong’s Formula',
          description: 'Gross and net heating values based on elemental composition.',
          equations: [
            {
              title: 'Dulong’s Formula for Higher Calorific Value (HCV)',
              formula: 'HCV = (1/100) · [ 8080·C + 34500·(H - O/8) + 2240·S ]  (kcal/kg)',
              latex: '\\text{HCV} = \\frac{1}{100} \\left[ 8080 \\, \\text{C} + 34500 \\left( \\text{H} - \\frac{\\text{O}}{8} \\right) + 2240 \\, \\text{S} \\right]',
              notes: 'C, H, O, S are percentage weights from ultimate fuel analysis.'
            },
            {
              title: 'Lower Calorific Value (LCV)',
              formula: 'LCV = HCV - [0.09 × H × 587]  (kcal/kg)',
              latex: '\\text{LCV} = \\text{HCV} - [0.09 \\times \\text{H} \\times 587] \\, \\text{kcal/kg}',
              notes: 'Subtracts latent heat of condensation of water vapor formed.'
            }
          ]
        },
        {
          name: 'Area 2: Theoretical Air Requirement for Combustion',
          description: 'Stoichiometric oxygen and air calculation per kg fuel.',
          equations: [
            {
              title: 'Theoretical Minimum Oxygen (O₂_min)',
              formula: 'O₂_min = (32/12)·C + 8·(H - O/8) + S  (kg per kg fuel)',
              latex: 'O_{2,\\text{min}} = \\frac{32}{12}\\text{C} + 8\\left(\\text{H} - \\frac{\\text{O}}{8}\\right) + \\text{S}',
              notes: 'Theoretical minimum air by mass = O₂_min × (100 / 23) kg.'
            }
          ]
        }
      ]
    },
    5: {
      heading: 'Module 5: Water Technology & Sewage Treatment',
      areas: [
        {
          name: 'Area 1: Hardness & CaCO₃ Equivalents',
          description: 'Water hardness calculations and conversion factors.',
          equations: [
            {
              title: 'Equivalent of CaCO₃',
              formula: 'Equiv. CaCO₃ = [ Mass of salt × 50 ] / [ Eq. wt of salt ] = Mass × Multiplication Factor',
              latex: '\\text{Equiv. } \\text{CaCO}_3 = \\text{Mass} \\times \\frac{100}{2 \\times \\text{Eq. Wt}}',
              notes: 'Multiplication factors: Ca(HCO₃)₂ = 100/162; Mg(HCO₃)₂ = 100/146; CaSO₄ = 100/136; MgSO₄ = 100/120.'
            },
            {
              title: 'Total Hardness by EDTA Titration',
              formula: 'Total Hardness (ppm) = (V_{EDTA} × M_{EDTA} × 100 × 1000) / V_{water sample}',
              latex: '\\text{Hardness (ppm)} = \\frac{V_{\\text{EDTA}} \\times M_{\\text{EDTA}} \\times 100 \\times 1000}{V_{\\text{sample}}}',
              notes: '1 ppm = 1 mg/L = 0.07°Clark = 0.1°French.'
            }
          ]
        },
        {
          name: 'Area 2: Biochemical & Chemical Oxygen Demand (BOD & COD)',
          description: 'Pollution metrics in industrial wastewater.',
          equations: [
            {
              title: '5-Day Biochemical Oxygen Demand (BOD₅)',
              formula: 'BOD₅ = [ (D₁ - D₂) - (B₁ - B₂)(1 - P) ] / P  (mg/L)',
              latex: '\\text{BOD}_5 = \\frac{(D_1 - D_2) - (B_1 - B_2)(1 - P)}{P}',
              notes: 'D₁, D₂ = DO before and after 5 days incubation at 20°C; P = dilution factor.'
            },
            {
              title: 'Chemical Oxygen Demand (COD)',
              formula: 'COD = [ (V_b - V_s) × N_{FAS} × 8 × 1000 ] / V_{sample}  (mg/L)',
              latex: '\\text{COD} = \\frac{(V_b - V_s) \\times N_{\\text{FAS}} \\times 8 \\times 1000}{V_{\\text{sample}}}',
              notes: 'Measures total oxygen required to chemically oxidize organic and inorganic pollutants.'
            }
          ]
        }
      ]
    }
  },

  // MAT102: Vector Calculus & Differential Equations
  'sub-mat102': {
    1: {
      heading: 'Module 1: First Order Ordinary Differential Equations',
      areas: [
        {
          name: 'Area 1: Exact Differential Equations & Integrating Factors',
          description: 'Exactness condition and integrating factor rules.',
          equations: [
            {
              title: 'Exactness Condition for M dx + N dy = 0',
              formula: '∂M/∂y = ∂N/∂x',
              latex: '\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}',
              notes: 'Solution: ∫_{y=const} M dx + ∫ (terms of N free from x) dy = C.'
            },
            {
              title: 'Integrating Factor Rules',
              formula: '(1/N)(∂M/∂y - ∂N/∂x) = f(x) ⟹ IF = e^{∫ f(x) dx};   (1/M)(∂N/∂x - ∂M/∂y) = g(y) ⟹ IF = e^{∫ g(y) dy}',
              latex: '\\text{IF} = e^{\\int f(x) dx} \\quad \\text{or} \\quad e^{\\int g(y) dy}',
              notes: 'Multiply non-exact equation throughout by IF to make it exact.'
            }
          ]
        },
        {
          name: 'Area 2: Linear ODEs & Bernoulli’s Equation',
          description: 'First order linear solutions and non-linear Bernoulli reduction.',
          equations: [
            {
              title: 'Linear First Order ODE (dy/dx + P(x)y = Q(x))',
              formula: 'y · e^{∫ P dx} = ∫ Q(x) · e^{∫ P dx} dx + C',
              latex: 'y \\cdot \\text{IF} = \\int Q(x) \\cdot \\text{IF} \\, dx + C, \\quad \\text{IF} = e^{\\int P dx}',
              notes: 'Standard integrating factor method.'
            },
            {
              title: 'Bernoulli’s Equation Reduction',
              formula: 'dy/dx + P(x)y = Q(x)yⁿ  ⟹  dv/dx + (1 - n)P(x)v = (1 - n)Q(x)  (v = y^{1 - n})',
              latex: 'v = y^{1 - n} \\implies \\frac{dv}{dx} + (1 - n) P(x) v = (1 - n) Q(x)',
              notes: 'Converts non-linear Bernoulli equation into linear ODE in v.'
            }
          ]
        }
      ]
    },
    2: {
      heading: 'Module 2: Higher Order Linear Ordinary Differential Equations',
      areas: [
        {
          name: 'Area 1: Auxiliary Equation & Complementary Function (y_c)',
          description: 'Constant-coefficient homogeneous ODE roots.',
          equations: [
            {
              title: 'Auxiliary Equation (m² + a·m + b = 0)',
              formula: 'y\'\' + a y\' + b y = 0 ⟹ m² + a m + b = 0',
              latex: 'm^2 + a m + b = 0',
              notes: 'Distinct real roots: y_c = c₁e^{m₁x} + c₂e^{m₂x}; Equal roots: y_c = (c₁ + c₂x)e^{mx}; Complex roots (α ± iβ): y_c = e^{αx}(c₁ cos βx + c₂ sin βx).'
            }
          ]
        },
        {
          name: 'Area 2: Particular Integral (y_p) Short Rules',
          description: 'Inverse differential operator rules (1/f(D))X.',
          equations: [
            {
              title: 'Short Methods for Exponential & Sine/Cosine',
              formula: '(1/f(D)) e^{ax} = e^{ax} / f(a),   (1/f(D²)) sin ax = (sin ax) / f(-a²)',
              latex: '\\frac{1}{f(D)} e^{ax} = \\frac{e^{ax}}{f(a)}, \\quad \\frac{1}{f(D^2)} \\sin ax = \\frac{\\sin ax}{f(-a^2)}',
              notes: 'If denominator equals 0: multiply by x and differentiate denominator with respect to D.'
            },
            {
              title: 'Variation of Parameters Formula',
              formula: 'y_p = -y₁ ∫ (y₂ X / W) dx + y₂ ∫ (y₁ X / W) dx,   W = y₁ y₂\' - y₂ y₁\'',
              latex: 'y_p = -y_1 \\int \\frac{y_2 X}{W} dx + y_2 \\int \\frac{y_1 X}{W} dx',
              notes: 'W is the non-zero Wronskian of complementary solutions y₁, y₂.'
            }
          ]
        }
      ]
    },
    3: {
      heading: 'Module 3: Multivariable Vector Differential Calculus',
      areas: [
        {
          name: 'Area 1: Gradient & Directional Derivative',
          description: 'Surface normals and maximum rate of increase.',
          equations: [
            {
              title: 'Gradient of Scalar Field',
              formula: '∇ϕ = (∂ϕ/∂x) i + (∂ϕ/∂y) j + (∂ϕ/∂z) k',
              latex: '\\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\mathbf{i} + \\frac{\\partial \\phi}{\\partial y}\\mathbf{j} + \\frac{\\partial \\phi}{\\partial z}\\mathbf{k}',
              notes: 'Vector normal to level surface ϕ(x,y,z)=c. Unit normal n̂ = ∇ϕ / |∇ϕ|.'
            },
            {
              title: 'Directional Derivative along Vector a',
              formula: 'DD = ∇ϕ · â = ∇ϕ · (a / |a|)',
              latex: '\\text{DD} = \\nabla \\phi \\cdot \\hat{\\mathbf{a}} = \\nabla \\phi \\cdot \\frac{\\mathbf{a}}{|\\mathbf{a}|}',
              notes: 'Maximum directional derivative occurs in the direction of ∇ϕ, with magnitude |∇ϕ|.'
            }
          ]
        },
        {
          name: 'Area 2: Divergence, Curl & Solenoidal / Irrotational Fields',
          description: 'Vector flux density and rotational circulation.',
          equations: [
            {
              title: 'Divergence & Solenoidal Condition',
              formula: 'div F = ∇ · F = ∂F₁/∂x + ∂F₂/∂y + ∂F₃/∂z = 0 ⟺ F is Solenoidal',
              latex: '\\text{div } \\mathbf{F} = \\nabla \\cdot \\mathbf{F} = 0 \\iff \\mathbf{F} \\text{ is Solenoidal}',
              notes: 'Represents net outward volume flux density.'
            },
            {
              title: 'Curl & Irrotational (Conservative) Condition',
              formula: 'curl F = ∇ × F = 0 ⟺ F is Irrotational (Conservative)',
              latex: '\\text{curl } \\mathbf{F} = \\nabla \\times \\mathbf{F} = \\mathbf{0} \\iff \\mathbf{F} = \\nabla \\phi',
              notes: 'If curl F = 0, F can be derived from scalar potential ϕ such that F = ∇ϕ.'
            }
          ]
        }
      ]
    },
    4: {
      heading: 'Module 4: Vector Integral Calculus & Integral Theorems',
      areas: [
        {
          name: 'Area 1: Line Integrals & Work Done',
          description: 'Work done along vector curves.',
          equations: [
            {
              title: 'Work Done by Force Field F',
              formula: 'W = ∫_C F · dr = ∫_C (F₁ dx + F₂ dy + F₃ dz)',
              latex: 'W = \\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_C (F_1 dx + F_2 dy + F_3 dz)',
              notes: 'For conservative field (F = ∇ϕ), W = ϕ(B) - ϕ(A) independent of path.'
            }
          ]
        },
        {
          name: 'Area 2: Green’s, Stokes’ & Gauss Divergence Theorems',
          description: 'The three fundamental integral theorems of vector calculus.',
          equations: [
            {
              title: 'Green’s Theorem in the Plane',
              formula: '∮_C (M dx + N dy) = ∬_R (∂N/∂x - ∂M/∂y) dx dy',
              latex: '\\oint_C (M \\, dx + N \\, dy) = \\iint_R \\left( \\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} \\right) dx \\, dy',
              notes: 'Converts closed line integral to double integral over enclosed region R.'
            },
            {
              title: 'Stokes’ Theorem (Circulation to Surface Flux)',
              formula: '∮_C F · dr = ∬_S (∇ × F) · n̂ dS',
              latex: '\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot \\hat{\\mathbf{n}} \\, dS',
              notes: 'Equates circulation of F around boundary curve C to flux of curl F through surface S.'
            },
            {
              title: 'Gauss’ Divergence Theorem (Surface Flux to Volume)',
              formula: '∬_S F · n̂ dS = ∭_V (∇ · F) dV',
              latex: '\\iint_S \\mathbf{F} \\cdot \\hat{\\mathbf{n}} \\, dS = \\iiint_V (\\nabla \\cdot \\mathbf{F}) \\, dV',
              notes: 'Converts total outward surface flux into volume integral of divergence.'
            }
          ]
        }
      ]
    },
    5: {
      heading: 'Module 5: Laplace Transforms & Differential Equations',
      areas: [
        {
          name: 'Area 1: Elementary Laplace Transforms & First Shifting',
          description: 'Transforms of standard functions and exponential shift theorem.',
          equations: [
            {
              title: 'Standard Elementary Transforms',
              formula: 'L{1} = 1/s,  L{tⁿ} = n!/sⁿ⁺¹,  L{e^{at}} = 1/(s - a),  L{sin at} = a/(s² + a²),  L{cos at} = s/(s² + a²)',
              latex: '\\mathcal{L}\\{1\\} = \\frac{1}{s}, \\quad \\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}, \\quad \\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}, \\quad \\mathcal{L}\\{\\sin at\\} = \\frac{a}{s^2+a^2}',
              notes: 'Hyperbolic: L{sinh at} = a/(s² - a²), L{cosh at} = s/(s² - a²).'
            },
            {
              title: 'First Shifting Property',
              formula: 'L{e^{at} f(t)} = F(s - a)   where F(s) = L{f(t)}',
              latex: '\\mathcal{L}\\{e^{at} f(t)\\} = F(s - a)',
              notes: 'Multiplication by t: L{t·f(t)} = -d/ds[F(s)]. Division by t: L{f(t)/t} = ∫_s^∞ F(u) du.'
            }
          ]
        },
        {
          name: 'Area 2: Transforms of Derivatives & Initial Value Problems',
          description: 'Solving ODEs via Laplace transformation.',
          equations: [
            {
              title: 'Transform of Derivatives',
              formula: 'L{y\'(t)} = s Y(s) - y(0),   L{y\'\'(t)} = s² Y(s) - s y(0) - y\'(0)',
              latex: '\\mathcal{L}\\{y\'\'(t)\\} = s^2 Y(s) - s y(0) - y\'(0)',
              notes: 'Directly applies initial conditions to solve second order ODEs algebraically.'
            },
            {
              title: 'Convolution Theorem',
              formula: 'L⁻¹{ F(s) · G(s) } = (f * g)(t) = ∫₀ᵗ f(τ) g(t - τ) dτ',
              latex: '\\mathcal{L}^{-1}\\{F(s) G(s)\\} = \\int_0^t f(\\tau) g(t - \\tau) d\\tau',
              notes: 'Inverts products of transforms without partial fractions.'
            }
          ]
        }
      ]
    }
  },

  // PHT100: Engineering Physics
  'sub-pht100': {
    1: {
      heading: 'Module 1: Oscillations & Waves',
      areas: [
        {
          name: 'Area 1: Simple Harmonic Motion (SHM)',
          description: 'Restoring forces, angular frequency, and total mechanical energy.',
          equations: [
            {
              title: 'SHM Governing Equation & Period',
              formula: 'd²x/dt² + ω₀² x = 0,   ω₀ = √(k / m)  ⟹  T = 2π √(m / k)',
              latex: '\\frac{d^2x}{dt^2} + \\omega_0^2 x = 0, \\quad T = 2\\pi \\sqrt{\\frac{m}{k}}',
              notes: 'Displacement x(t) = A cos(ω₀t + ϕ). Total energy E = (1/2)m ω₀² A² = Constant.'
            }
          ]
        },
        {
          name: 'Area 2: Damped Oscillations & Quality Factor',
          description: 'Resistive damping, logarithmic decrement, and relaxation time.',
          equations: [
            {
              title: 'Damped Oscillation Equation & Underdamped Frequency',
              formula: 'd²x/dt² + 2γ (dx/dt) + ω₀² x = 0,   ω_d = √(ω₀² - γ²)',
              latex: '\\frac{d^2x}{dt^2} + 2\\gamma \\frac{dx}{dt} + \\omega_0^2 x = 0, \\quad \\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2}',
              notes: 'Underdamped (γ < ω₀): x(t) = A₀ e^{-γt} cos(ω_d t + ϕ).'
            },
            {
              title: 'Quality Factor (Q) & Logarithmic Decrement (δ)',
              formula: 'Q = ω₀ / (2γ) = ω₀ τ / 2,   δ = γ T = ln(Aₙ / Aₙ₊₁) = π / Q',
              latex: 'Q = \\frac{\\omega_0}{2\\gamma}, \\qquad \\delta = \\ln\\left(\\frac{A_n}{A_{n+1}}\\right) = \\frac{\\pi}{Q}',
              notes: 'τ = 1/(2γ) is relaxation time; higher Q implies sharper resonance and lower damping.'
            }
          ]
        },
        {
          name: 'Area 3: Forced Oscillations & Wave Speed',
          description: 'Resonance amplitude and 1D wave equation.',
          equations: [
            {
              title: 'Resonance Amplitude & 1D Wave Speed',
              formula: 'A = f₀ / √[ (ω₀² - ω²)² + 4γ²ω² ],   v = √(T / μ)  (stretched string)',
              latex: 'A = \\frac{f_0}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\gamma^2\\omega^2}}, \\quad v = \\sqrt{\\frac{T}{\\mu}}',
              notes: 'Amplitude resonance occurs at ω_r = √(ω₀² - 2γ²).'
            }
          ]
        }
      ]
    },
    2: {
      heading: 'Module 2: Wave Optics (Interference & Diffraction)',
      areas: [
        {
          name: 'Area 1: Thin Film Interference & Air Wedge',
          description: 'Path difference with Stokes’ phase change and wedge thickness.',
          equations: [
            {
              title: 'Thin Film Optical Path Difference',
              formula: 'Δ = 2μ t cos r ± (λ / 2)',
              latex: '\\Delta = 2\\mu t \\cos r \\pm \\frac{\\lambda}{2}',
              notes: 'Constructive (Bright): 2μ t cos r = (2n + 1)(λ / 2); Destructive (Dark): 2μ t cos r = n λ.'
            },
            {
              title: 'Air Wedge Fringe Width & Spacer Thickness',
              formula: 'β = λ / (2θ) = λ L / (2t)  ⟹  t = λ L / (2β)',
              latex: '\\beta = \\frac{\\lambda L}{2t} \\implies t = \\frac{\\lambda L}{2\\beta}',
              notes: 'L = wedge length, t = thickness of spacer/wire, β = fringe width.'
            }
          ]
        },
        {
          name: 'Area 2: Newton’s Rings Experiment',
          description: 'Fringe diameters by reflection.',
          equations: [
            {
              title: 'Dark Ring Diameter & Monochromatic Wavelength',
              formula: 'Dₙ² = 4 n λ R  ⟹  λ = (D_{n+m}² - Dₙ²) / (4 m R)',
              latex: 'D_n^2 = 4 n \\lambda R, \\qquad \\lambda = \\frac{D_{n+m}^2 - D_n^2}{4 m R}',
              notes: 'Refractive index of unknown liquid: μ = (D_{n+m}² - Dₙ²)_{air} / (D_{n+m}² - Dₙ²)_{liquid}.'
            }
          ]
        },
        {
          name: 'Area 3: Diffraction Grating & Resolving Power',
          description: 'Grating equation and spectral resolution.',
          equations: [
            {
              title: 'Plane Transmission Grating Equation',
              formula: '(a + b) sin θ = n λ,   Resolving Power = λ / dλ = n · N',
              latex: '(a + b) \\sin\\theta = n \\lambda, \\quad \\frac{\\lambda}{d\\lambda} = n \\cdot N',
              notes: '(a + b) is the grating element; N is total illuminated lines.'
            }
          ]
        }
      ]
    },
    3: {
      heading: 'Module 3: Quantum Mechanics & Particle in a Box',
      areas: [
        {
          name: 'Area 1: De Broglie Wavelength & Uncertainty Principle',
          description: 'Wave-particle duality and fundamental quantum bounds.',
          equations: [
            {
              title: 'De Broglie Wavelength of Particle',
              formula: 'λ = h / p = h / (m v) = h / √(2 m E) = 12.27 / √V  Å  (for electron)',
              latex: '\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mE}} \\approx \\frac{12.27}{\\sqrt{V}} \\, \\text{\\AA}',
              notes: 'Heisenberg uncertainty: Δx · Δp_x ≥ ℏ/2 = h/(4π), ΔE · Δt ≥ ℏ/2.'
            }
          ]
        },
        {
          name: 'Area 2: Schrödinger Equation & 1D Infinite Well (Box)',
          description: 'Quantized energy eigenvalues and eigenfunctions.',
          equations: [
            {
              title: 'Quantized Energy Eigenvalues (0 ≤ x ≤ L)',
              formula: 'Eₙ = (n² h²) / (8 m L²) = (n² π² ℏ²) / (2 m L²)   (n = 1, 2, 3, ...)',
              latex: 'E_n = \\frac{n^2 h^2}{8 m L^2} = \\frac{n^2 \\pi^2 \\hbar^2}{2 m L^2} \\quad (n = 1, 2, 3, \\dots)',
              notes: 'Ground state zero-point energy (n = 1): E₁ = h² / (8mL²) ≠ 0.'
            },
            {
              title: 'Normalized Eigenfunctions (Wavefunctions)',
              formula: 'ψₙ(x) = √(2 / L) · sin(n π x / L)',
              latex: '\\psi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\left( \\frac{n\\pi x}{L} \\right)',
              notes: 'Probability density P(x) = |ψₙ(x)|². Total probability ∫₀ᴸ |ψₙ|² dx = 1.'
            }
          ]
        }
      ]
    },
    4: {
      heading: 'Module 4: Magnetism & Electromagnetism',
      areas: [
        {
          name: 'Area 1: Magnetic Field Vectors & Constitutive Relations',
          description: 'Flux density, magnetization, susceptibility, and permeability.',
          equations: [
            {
              title: 'Magnetic Constitutive Equation',
              formula: 'B = μ₀ (H + M) = μ₀ μᵣ H = μ H,   M = χₘ H,   μᵣ = 1 + χₘ',
              latex: '\\mathbf{B} = \\mu_0 (\\mathbf{H} + \\mathbf{M}) = \\mu_0 \\mu_r \\mathbf{H}, \\quad \\mu_r = 1 + \\chi_m',
              notes: 'Curie law for paramagnets: χ = C / T. Curie-Weiss law for ferromagnets: χ = C / (T - T_c).'
            }
          ]
        },
        {
          name: 'Area 2: Maxwell’s Four Fundamental Equations',
          description: 'Electrodynamics unification in differential form.',
          equations: [
            {
              title: 'Maxwell’s Equations (Differential Form)',
              formula: '1. ∇·D = ρ_v   |   2. ∇·B = 0   |   3. ∇×E = -∂B/∂t   |   4. ∇×H = J + ∂D/∂t',
              latex: '\\nabla \\cdot \\mathbf{D} = \\rho_v, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{H} = \\mathbf{J} + \\frac{\\partial \\mathbf{D}}{\\partial t}',
              notes: 'Displacement current density J_d = ∂D/∂t = ε (∂E/∂t).'
            },
            {
              title: 'Speed of Light & Intrinsic Impedance in Free Space',
              formula: 'c = 1 / √(μ₀ ε₀) ≈ 3 × 10⁸ m/s,   η₀ = √(μ₀ / ε₀) ≈ 377 Ω = 120π Ω',
              latex: 'c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}, \\qquad \\eta_0 = \\sqrt{\\frac{\\mu_0}{\\epsilon_0}} \\approx 377\\ \\Omega',
              notes: 'Poynting energy flux vector S = E × H = (1/μ₀)(E × B).'
            }
          ]
        }
      ]
    },
    5: {
      heading: 'Module 5: Superconductivity & Lasers / Photonics',
      areas: [
        {
          name: 'Area 1: Superconductivity Critical Fields & London Depth',
          description: 'Critical magnetic field and Meissner diamagnetism.',
          equations: [
            {
              title: 'Critical Field Temperature Variation',
              formula: 'H_c(T) = H_c(0) · [ 1 - (T / T_c)² ]',
              latex: 'H_c(T) = H_c(0) \\left[ 1 - \\left( \\frac{T}{T_c} \\right)^2 \\right]',
              notes: 'Silsbee critical current for wire of radius r: I_c = 2π r H_c.'
            },
            {
              title: 'Meissner Effect & London Penetration Depth',
              formula: 'B = 0 ⟺ χₘ = -1 (perfect diamagnetism);  B(x) = B(0) e^{-x / λ_L}',
              latex: '\\mathbf{B} = 0 \\iff \\chi_m = -1, \\qquad B(x) = B(0) e^{-x / \\lambda_L}',
              notes: 'London depth λ_L(0) = √(m / (μ₀ n_s e²)).'
            }
          ]
        },
        {
          name: 'Area 2: Einstein’s Laser A & B Coefficients & Optical Fibers',
          description: 'Spontaneous/stimulated emission ratios and numerical aperture.',
          equations: [
            {
              title: 'Einstein Coefficients Ratio',
              formula: 'A₂₁ / B₂₁ = (8π h ν³) / c³,   B₁₂ = B₂₁',
              latex: '\\frac{A_{21}}{B_{21}} = \\frac{8\\pi h \\nu^3}{c^3}, \\qquad B_{12} = B_{21}',
              notes: 'Laser requires population inversion N₂ > N₁ achieved through optical pumping.'
            },
            {
              title: 'Optical Fiber Numerical Aperture (NA) & V-Number',
              formula: 'NA = sin θ_{max} = √(n₁² - n₂²) ≈ n₁ √(2Δ),   V = (2π a / λ) · NA',
              latex: '\\text{NA} = \\sqrt{n_1^2 - n_2^2} \\approx n_1 \\sqrt{2\\Delta}, \\quad V = \\frac{2\\pi a}{\\lambda}\\text{NA}',
              notes: 'Single mode fiber condition: V < 2.405; total modes in step index fiber M ≈ V²/2.'
            }
          ]
        }
      ]
    }
  }
};
