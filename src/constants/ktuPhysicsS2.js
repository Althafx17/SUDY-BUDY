// KTU PHT100: Engineering Physics (2019 Scheme)
// Verified Previous Year Question Papers (2019 Inaugural to 2026 Exams)
// Complete Step-by-Step Verified Model Solutions for All 5 Modules

export const KTU_PHYSICS_S2 = {
  id: 'sub-pht100',
  name: 'Engineering Physics',
  code: 'PHT100',
  color: 'emerald',
  description: 'Oscillations, wave optics, quantum mechanics, electromagnetism, superconductivity, and laser photonics under KTU 2019 Scheme.',
  instructor: '',
  examDate: '',
  examVenue: '',
  youtubeUrl: '',
  todos: [],
  modules: [
    {
      id: 'mod-pht100-1',
      number: 1,
      name: 'Module 1: Oscillations & Waves',
      topics: [
        {
          id: 'top-phy-1-1',
          name: 'Damped & Forced Harmonic Oscillations',
          status: 'not-started',
          notes: '',
          tags: ['Oscillations', 'Damping', 'Quality Factor', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-phy-1', name: 'Differential equation of damped harmonic oscillator', done: false },
            { id: 'st-phy-2', name: 'Critical damping, over-damping, and under-damping cases', done: false },
            { id: 'st-phy-3', name: 'Forced oscillations, amplitude resonance, and sharpness Q factor', done: false }
          ],
          previousQuestions: [
            {
              id: 'pht100-2026-model-q11',
              year: 2026,
              exam: 'January 2026 Model QP (Set A)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q11',
              marks: 14,
              text: 'Set up the differential equation for a damped harmonic oscillator and obtain solutions for: (i) Under-damped, (ii) Critically damped, and (iii) Over-damped conditions. Define Quality factor Q and show that Q = omega_0 / (2 gamma).',
              frequency: 'Universal 14-Mark Question in KTU (2026, 2024, 2022, 2020)',
              solved: false,
              hint: 'Restoring force F_r = -kx, Damping force F_d = -b(dx/dt). Let 2γ = b/m, ω0^2 = k/m. Solve auxiliary equation r^2 + 2γr + ω0^2 = 0.',
              source: { status: 'verified', paper: 'KTU PHT100 Jan 2026 Model QP' },
              answer: 'Part 1: Setting up the Differential Equation:\nConsider a particle of mass m undergoing damped harmonic motion. Forces acting on it:\n1. Restoring force proportional to displacement: F_r = -k x (k = force constant).\n2. Damping/resistive force proportional to velocity: F_d = -b (dx/dt) (b = damping constant).\n\nBy Newton\'s Second Law:\nm (d^2x/dt^2) = F_r + F_d = -k x - b (dx/dt)\nm (d^2x/dt^2) + b (dx/dt) + k x = 0\nDivide by m:\nd^2x/dt^2 + (b/m) (dx/dt) + (k/m) x = 0.\n\nIntroduce standard notation:\nLet 2γ = b/m (damping factor) and ω0^2 = k/m (natural angular frequency squared):\nd^2x/dt^2 + 2γ (dx/dt) + ω0^2 x = 0.   --- (Equation 1)\n\nPart 2: General Solution of Equation (1):\nLet trial solution be x = C e^(r t).\nAuxiliary equation: r^2 + 2γ r + ω0^2 = 0.\nRoots: r = [ -2γ ± sqrt(4γ^2 - 4ω0^2) ] / 2 = -γ ± sqrt(γ^2 - ω0^2).\n\nPart 3: Analysis of Three Physical Cases:\nCase (i): Under-damped condition (γ^2 < ω0^2, Light Damping)\n- The term under the radical is negative: sqrt(γ^2 - ω0^2) = i sqrt(ω0^2 - γ^2) = i ω, where ω = sqrt(ω0^2 - γ^2).\n- Roots are complex conjugates: r = -γ ± i ω.\n- Displacement solution:\n  x(t) = A e^(-γ t) cos(ω t + φ)\n  where A and φ are constants determined by initial conditions.\n- Physical Interpretation: The system executes oscillatory motion with angular frequency ω < ω0 whose amplitude A(t) = A e^(-γ t) decays exponentially to zero.\n\nCase (ii): Critically damped condition (γ^2 = ω0^2, Critical Damping)\n- Roots are real and equal: r1 = r2 = -γ.\n- General solution:\n  x(t) = (C1 + C2 t) e^(-γ t).\n- Physical Interpretation: Non-oscillatory. The displaced body returns to its equilibrium position in the shortest possible time without crossing equilibrium.\n\nCase (iii): Over-damped condition (γ^2 > ω0^2, Heavy Damping)\n- Roots are real, negative, and distinct: r1, r2 = -γ ± sqrt(γ^2 - ω0^2).\n- Solution:\n  x(t) = C1 e^(-(γ - sqrt(γ^2 - ω0^2)) t) + C2 e^(-(γ + sqrt(γ^2 - ω0^2)) t).\n- Physical Interpretation: Completely aperiodic and non-oscillatory. The body creeps back very sluggishly to equilibrium.\n\nPart 4: Quality Factor (Q):\n- Definition: Q is defined as 2π times the ratio of total energy stored in the oscillator to the energy dissipated per cycle:\n  Q = 2π · [ Energy stored / Energy dissipated in one cycle ] = 2π · [ E / ΔE ].\n- Since energy is proportional to the square of amplitude:\n  E(t) = E0 e^(-2γ t).\n  Rate of energy loss: dE/dt = -2γ E.\n- Energy dissipated in one period T = 2π / ω0:\n  ΔE ≈ |dE/dt| · T = 2γ E · (2π / ω0).\n- Substituting into Q definition:\n  Q = 2π · E / [ 2γ E · (2π / ω0) ] = ω0 / (2γ).\n\nFinal Answer:\nDifferential Equation: d^2x/dt^2 + 2γ(dx/dt) + ω0^2 x = 0; Under-damped solution: x(t) = A e^(-γt) cos(ωt + φ); Q = ω0 / (2γ).'
            },
            {
              id: 'pht100-2024-dec-q12',
              year: 2024,
              exam: 'December 2024 Regular (Set B)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q12',
              marks: 7,
              text: 'Distinguish between phase velocity (v_p) and group velocity (v_g). Establish Rayleigh\'s formula relating phase velocity and group velocity in a dispersive medium: v_g = v_p - lambda (dv_p / dlambda).',
              frequency: 'Asked in 2024, 2022, 2019',
              solved: false,
              hint: 'Phase velocity v_p = ω/k. Group velocity v_g = dω/dk. Express k in terms of wavelength λ: k = 2π/λ.',
              source: { status: 'verified', paper: 'KTU PHT100 Dec 2024 Final' },
              answer: 'Part 1: Distinctions Between Phase Velocity and Group Velocity:\n1. Definition:\n   - Phase Velocity (v_p): The velocity with which the phase of a single individual monochromatic sinusoidal wave propagates through space:\n     v_p = ω / k (where ω is angular frequency, k is wave vector).\n   - Group Velocity (v_g): The velocity with which the overall envelope or modulation of a group/packet of waves of slightly different frequencies travels:\n     v_g = dω / dk.\n2. Physical Transport:\n   - Phase velocity does not necessarily carry energy or information.\n   - Group velocity represents the speed of energy, signal, and information propagation.\n3. Dispersive vs Non-dispersive Media:\n   - In vacuum / non-dispersive media: v_p = v_g = c (independent of wavelength).\n   - In dispersive media: v_p is a function of wavelength λ, causing v_g != v_p.\n\nPart 2: Derivation of Rayleigh\'s Formula:\nFrom the definition of phase velocity:\nω = v_p · k   --- (1)\n\nDifferentiate with respect to propagation constant k:\nv_g = dω / dk = d/dk [ v_p · k ]\nv_g = v_p · (dk/dk) + k · (dv_p / dk)\nv_g = v_p + k (dv_p / dk)   --- (2)\n\nNow, relate propagation constant k to wavelength λ in the medium:\nk = 2π / λ\nDifferentiate k with respect to λ:\ndk / dλ = d/dλ [ 2π · λ^(-1) ] = - 2π / λ^2.\n\nBy chain rule:\ndv_p / dk = (dv_p / dλ) · (dλ / dk) = (dv_p / dλ) · [ 1 / (dk / dλ) ]\ndv_p / dk = (dv_p / dλ) · [ - λ^2 / (2π) ].\n\nSubstitute dv_p/dk and k = 2π/λ into Equation (2):\nv_g = v_p + (2π / λ) · [ - (λ^2 / 2π) (dv_p / dλ) ]\nv_g = v_p - λ (dv_p / dλ).\n\nPhysical Significance:\n- In normal dispersion: Refractive index increases as wavelength decreases, meaning dv_p/dλ > 0. Hence v_g < v_p.\n- In anomalous dispersion: dv_p/dλ < 0, giving v_g > v_p.\n- In non-dispersive medium: dv_p/dλ = 0, giving v_g = v_p.\n\nFinal Answer:\nProved: v_g = v_p - λ (dv_p / dλ).'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-pht100-2',
      number: 2,
      name: 'Module 2: Wave Optics (Interference & Diffraction)',
      topics: [
        {
          id: 'top-phy-2-1',
          name: 'Interference in Thin Films, Air-Wedge & Newton Rings',
          status: 'not-started',
          notes: '',
          tags: ['Wave Optics', 'Air Wedge', 'Newton Rings', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-phy-4', name: 'Interference in wedge-shaped thin films and thickness calculation', done: false },
            { id: 'st-phy-5', name: 'Newton rings experimental setup and wavelength / radius determination', done: false }
          ],
          previousQuestions: [
            {
              id: 'pht100-2026-model-q13',
              year: 2026,
              exam: 'January 2026 Model QP (Set A)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q13',
              marks: 14,
              text: 'Explain the formation of Newton\'s rings by reflected monochromatic light with a neat ray diagram. Derive expressions for the diameters of dark and bright rings. Explain how Newton\'s rings can be used to determine the wavelength of light and the refractive index of a transparent liquid.',
              frequency: 'Universal KTU 14-Mark Question (2026, 2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Air film between curved lens surface (radius R) and flat glass. Effective path difference Δ = 2t + λ/2. Lens geometry: r^2 = 2Rt => 2t = D^2/(4R).',
              source: { status: 'verified', paper: 'KTU PHT100 Jan 2026 Model QP' },
              answer: 'Principle & Experimental Setup:\nA plano-convex lens of large radius of curvature R is placed on an optically flat glass plate. A thin air film of progressively increasing thickness from center to periphery is formed between the curved lower surface of the lens and the top surface of the plate.\nWhen monochromatic light of wavelength λ falls normally on this setup, light reflects from both the top (glass-air) and bottom (air-glass) surfaces of the film. Interference between these two coherent reflected beams produces concentric circular interference fringes (Newton\'s rings) with a dark central spot.\n\nPart 1: Effective Optical Path Difference (Δ):\nFor reflected rays under normal incidence (cos(r) = 1) in an air film (μ = 1):\nGeometrical path difference = 2t (where t is air film thickness).\nBy Stokes\' law, reflection at the lower air-glass boundary introduces an additional phase change of π, equivalent to an optical path difference of λ/2:\nΔ = 2t + λ/2.\n\nPart 2: Condition for Dark Rings (Destructive Interference):\nΔ = (2n + 1) λ/2\n2t + λ/2 = (2n + 1) λ/2 => 2t = n λ   (where n = 0, 1, 2, ...).\n\nGeometric Relation for Plano-Convex Lens:\nFrom the property of intersecting chords of a circle of radius R:\nr_n^2 = t (2R - t) ≈ 2 R t  (since t << R).\nTherefore:\n2t = r_n^2 / R.\nSince diameter D_n = 2 r_n => r_n = D_n / 2 => r_n^2 = D_n^2 / 4:\n2t = D_n^2 / (4R).\n\nSubstitute 2t into the dark ring condition:\nD_n^2 / (4R) = n λ\nD_n^2 = 4 n R λ\nD_n = 2 sqrt(n R λ).\nConclusion: The diameters of dark rings are directly proportional to the square roots of natural numbers: D_n ∝ sqrt(n).\n\nPart 3: Condition for Bright Rings (Constructive Interference):\nΔ = n λ\n2t + λ/2 = n λ => 2t = (2n - 1) λ/2.\nSubstitute 2t = D_n^2 / (4R):\nD_n^2 / (4R) = (2n - 1) λ/2\nD_n^2 = 2 (2n - 1) R λ\nD_n = sqrt( 2(2n - 1) R λ ).\nConclusion: The diameters of bright rings are proportional to the square roots of odd natural numbers: D_n ∝ sqrt(2n - 1).\n\nPart 4: Determination of Wavelength (λ) of Monochromatic Light:\n1. Using a traveling microscope, measure the diameter of the n-th dark ring (D_n) and the (n + p)-th dark ring (D_(n+p)):\n   D_n^2 = 4 n R λ\n   D_(n+p)^2 = 4(n + p) R λ.\n2. Subtracting:\n   D_(n+p)^2 - D_n^2 = 4 p R λ\n   λ = [ D_(n+p)^2 - D_n^2 ] / [ 4 p R ].\n   (R is determined using a spherometer).\n\nPart 5: Determination of Refractive Index (μ) of a Liquid:\n1. Place a few drops of the test liquid between the lens and glass plate.\n2. The air film is replaced by liquid of refractive index μ. The optical path difference becomes 2μt + λ/2.\n3. Diameter relation becomes:\n   [ D_(n+p)^2 - D_n^2 ]_liquid = 4 p R λ / μ.\n4. Dividing the equation in air by the equation in liquid:\n   μ = [ D_(n+p)^2 - D_n^2 ]_air / [ D_(n+p)^2 - D_n^2 ]_liquid.\n\nFinal Answer:\nDark ring: D_n^2 = 4nRλ; Bright ring: D_n^2 = 2(2n-1)Rλ; λ = [D_(n+p)^2 - D_n^2] / (4pR); μ = [ΔD^2]_air / [ΔD^2]_liquid.'
            },
            {
              id: 'pht100-2024-dec-q14',
              year: 2024,
              exam: 'December 2024 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q14',
              marks: 7,
              text: 'In an air-wedge experiment, 25 interference fringes are observed in a length of 1.5 cm. Light of wavelength 589.3 nm is used. The wedge is formed by placing a thin foil of thickness t at a distance of 10 cm from the line of contact. Find the thickness of the foil.',
              frequency: 'Classic Air-Wedge Numerical (2024, 2022, 2020)',
              solved: false,
              hint: 'Fringe width β = L / N. Formula: β = λ l / (2t) => t = λ l / (2β).',
              source: { status: 'verified', paper: 'KTU PHT100 Dec 2024 Final' },
              answer: 'Given Data:\n- Total length observed L = 1.5 cm = 1.5 × 10^-2 m\n- Number of interference fringes N = 25\n- Wavelength of light λ = 589.3 nm = 589.3 × 10^-9 m\n- Distance from edge / line of contact l = 10 cm = 0.10 m.\n\nStep 1: Calculate Fringe Width (β):\nFringe width β is the distance between two consecutive bright or dark fringes:\nβ = L / N\n= (1.5 × 10^-2 m) / 25\n= 0.06 × 10^-2 m = 6.0 × 10^-4 m (or 0.60 mm).\n\nStep 2: Applicable Equation for Air Wedge:\nFringe width β = λ / (2θ)\nwhere θ is the angle of the wedge: θ = t / l (in radians, for small angles).\nTherefore:\nβ = λ / [ 2 (t / l) ] = (λ · l) / (2t).\n\nStep 3: Solve for Foil Thickness t:\nt = (λ · l) / (2β)\nSubstitute numerical values:\nt = [ 589.3 × 10^-9 m × 0.10 m ] / [ 2 × (6.0 × 10^-4 m) ]\n= [ 58.93 × 10^-9 ] / [ 12.0 × 10^-4 ]\n= 4.9108 × 10^-5 m.\n\nUnit Conversion:\nt = 4.91 × 10^-5 m = 0.0491 mm = 49.1 μm.\n\nFinal Answer:\nThickness of the foil t = 4.91 × 10^-5 m (49.1 μm).'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-pht100-3',
      number: 3,
      name: 'Module 3: Quantum Mechanics & Particle in a Box',
      topics: [
        {
          id: 'top-phy-3-1',
          name: 'Schrödinger Wave Equation & 1D Potential Box',
          status: 'not-started',
          notes: '',
          tags: ['Quantum Mechanics', 'Schrodinger Equation', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-phy-6', name: 'de Broglie matter waves and Born interpretation of wave function', done: false },
            { id: 'st-phy-7', name: 'Time-independent 1D Schrödinger equation derivation', done: false },
            { id: 'st-phy-8', name: 'Eigenfunctions and energy quantization of particle in a 1D box', done: false }
          ],
          previousQuestions: [
            {
              id: 'pht100-2026-model-q15',
              year: 2026,
              exam: 'January 2026 Model QP (Set B)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q15',
              marks: 14,
              text: 'State the time-independent Schrödinger wave equation for a particle. Derive the normalized wave functions and quantized energy levels for a particle of mass m confined in a 1D infinite potential well of width L. Plot the first three wave functions and probability density distributions.',
              frequency: 'Universal KTU 14-Mark Question (2026, 2024, 2023, 2021, 2019)',
              solved: false,
              hint: 'Potential: V(x)=0 inside (0 < x < L), V=inf outside. Boundary conditions: ψ(0)=0 and ψ(L)=0. Normalization: int |ψ|^2 dx = 1.',
              source: { status: 'verified', paper: 'KTU PHT100 Jan 2026 Model QP' },
              answer: 'Time-Independent 1D Schrödinger Equation:\n(d^2ψ / dx^2) + (2m / ħ^2) [ E - V(x) ] ψ(x) = 0\nwhere m is particle mass, E is total energy, V(x) is potential energy, and ħ = h / (2π).\n\nPotential Well Specification:\nV(x) = 0 for 0 < x < L (inside the box)\nV(x) = ∞ for x <= 0 and x >= L (outside the box).\nSince potential is infinite outside, the particle cannot exist outside: ψ(x) = 0 for x <= 0 and x >= L.\n\nPart 1: Solution Inside the Box (V = 0):\nInside the well, V(x) = 0:\nd^2ψ / dx^2 + (2mE / ħ^2) ψ = 0.\nLet k^2 = 2mE / ħ^2 (where k is the wave vector):\nd^2ψ / dx^2 + k^2 ψ = 0.\nGeneral Solution:\nψ(x) = A sin(kx) + B cos(kx)   --- (1)\n\nPart 2: Applying Boundary Conditions:\n1. At x = 0 (left rigid boundary):\n   ψ(0) = 0 => A sin(0) + B cos(0) = 0 => B · 1 = 0 => B = 0.\n   Therefore: ψ(x) = A sin(kx).\n\n2. At x = L (right rigid boundary):\n   ψ(L) = 0 => A sin(kL) = 0.\n   Since A cannot be zero (which would make ψ = 0 everywhere, no particle):\n   sin(kL) = 0 => kL = n π => k = n π / L   (n = 1, 2, 3, ...).\n   (n = 0 is rejected because ψ would be zero everywhere).\n\nPart 3: Quantized Energy Eigenvalues:\nSubstitute k = nπ / L into k^2 = 2mE / ħ^2:\n(n π / L)^2 = 2mE / ħ^2\nE_n = (n^2 π^2 ħ^2) / (2m L^2).\nSubstitute ħ = h / (2π):\nE_n = n^2 π^2 [ h^2 / (4π^2) ] / (2m L^2)\nE_n = n^2 h^2 / (8 m L^2)   (n = 1, 2, 3, ...).\nConclusions:\n- Energy is quantized into discrete levels.\n- Ground state energy (Zero-point energy, n = 1): E1 = h^2 / (8mL^2) > 0 (particle can never be at absolute rest).\n- Excited states: E2 = 4 E1, E3 = 9 E1, E4 = 16 E1.\n\nPart 4: Normalization of Wavefunctions:\nThe total probability of finding the particle within the box must be unity:\nint_0^L |ψ_n(x)|^2 dx = 1\nint_0^L [ A sin(nπx / L) ]^2 dx = 1\nA^2 int_0^L sin^2(nπx / L) dx = 1\nA^2 int_0^L [ (1 - cos(2nπx / L)) / 2 ] dx = 1\nA^2 [ x/2 - (L / (4nπ)) sin(2nπx / L) ]_0^L = 1\nA^2 · (L / 2 - 0) = 1 => A^2 = 2 / L => A = sqrt(2 / L).\n\nNormalized Wavefunctions:\nψ_n(x) = sqrt(2 / L) sin(n π x / L).\n\nPart 5: Probability Density P(x) = |ψ_n(x)|^2 = (2/L) sin^2(nπx / L):\n- For n = 1: Symmetric single peak with maximum probability at center x = L/2.\n- For n = 2: Two symmetric probability peaks at x = L/4 and x = 3L/4, with a node (zero probability) at center x = L/2.\n- For n = 3: Three probability peaks at x = L/6, L/2, 5L/6, with two nodes at x = L/3 and 2L/3.\n\nFinal Answer:\nE_n = n^2 h^2 / (8 m L^2); Normalized eigenfunction: ψ_n(x) = sqrt(2/L) sin(nπx / L).'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-pht100-4',
      number: 4,
      name: 'Module 4: Magnetism & Electromagnetism',
      topics: [
        {
          id: 'top-phy-4-1',
          name: 'Maxwell Equations & Displacement Current',
          status: 'not-started',
          notes: '',
          tags: ['Maxwell Equations', 'Displacement Current', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-phy-9', name: 'Concept of displacement current and modification of Ampere Law', done: false },
            { id: 'st-phy-10', name: 'Maxwell 4 equations in differential and integral forms', done: false },
            { id: 'st-phy-11', name: 'Electromagnetic wave equation and velocity of light derivation', done: false }
          ],
          previousQuestions: [
            {
              id: 'pht100-2026-model-q17',
              year: 2026,
              exam: 'January 2026 Model QP (Set A)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q17',
              marks: 14,
              text: 'Explain why Maxwell modified Ampere\'s circuital law and derive the expression for displacement current. State all four Maxwell\'s equations in differential and integral forms and explain the physical significance of each.',
              frequency: 'Universal KTU 14-Mark Question (2026, 2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Take divergence of Ampere\'s law: div(curl B) = 0 => div(J) = 0. But continuity is div(J) = -∂ρ/∂t. Modify with J_D = ε0 ∂E/∂t.',
              source: { status: 'verified', paper: 'KTU PHT100 Jan 2026 Model QP' },
              answer: 'Part 1: Inconsistency of Ampere\'s Circuital Law & Need for Modification:\nAmpere\'s circuital law in differential form is:\n∇ x B = μ0 J   --- (1)\nwhere J is the conduction current density.\n\nTake the divergence of both sides of (1):\n∇ · (∇ x B) = μ0 (∇ · J).\nBy vector identity, the divergence of the curl of any vector field is identically zero:\n∇ · (∇ x B) = 0 => μ0 (∇ · J) = 0 => ∇ · J = 0.   --- (2)\n\nHowever, the fundamental equation of continuity for electric charge conservation is:\n∇ · J = - ∂ρ / ∂t   --- (3)\nwhere ρ is volume charge density.\nComparing (2) and (3) shows that Ampere\'s law is only valid for steady currents (where ∂ρ/∂t = 0), but violates charge conservation for time-varying fields (such as charging a capacitor).\n\nPart 2: Maxwell\'s Modification & Displacement Current:\nTo resolve this contradiction, Maxwell added an extra current density term J_D (Displacement Current Density):\n∇ x B = μ0 (J + J_D)   --- (4)\nTaking divergence of (4):\n0 = μ0 [ ∇ · J + ∇ · J_D ] => ∇ · J_D = - ∇ · J.\nSubstitute the continuity equation ∇ · J = - ∂ρ/∂t:\n∇ · J_D = - (- ∂ρ/∂t) = ∂ρ / ∂t.\n\nFrom Gauss\'s Law for electrostatics: ∇ · E = ρ / ε0 => ρ = ε0 (∇ · E).\nTherefore:\n∇ · J_D = ∂/∂t [ ε0 (∇ · E) ] = ∇ · [ ε0 (∂E / ∂t) ].\nEquating terms inside divergence:\nJ_D = ε0 (∂E / ∂t) = ∂D / ∂t (where D = ε0 E is the electric displacement field).\nTotal Displacement Current I_D through surface S:\nI_D = iint_S (J_D · n) dS = ε0 iint_S (∂E / ∂t · n) dS = ε0 (dΦ_E / dt).\n\nModified Ampere-Maxwell Law:\n∇ x B = μ0 [ J + ε0 (∂E / ∂t) ].\n\nPart 3: Four Maxwell\'s Equations & Their Physical Meanings:\n1. Gauss\'s Law for Electricity:\n   - Differential Form: ∇ · D = ρ_v (or ∇ · E = ρ / ε0)\n   - Integral Form: oint_S (D · n) dS = q_enclosed\n   - Physical Meaning: Total electric flux emerging from any closed surface equals the enclosed charge. Electric field lines originate on positive charges and terminate on negative charges (isolated monopoles exist).\n\n2. Gauss\'s Law for Magnetism:\n   - Differential Form: ∇ · B = 0\n   - Integral Form: oint_S (B · n) dS = 0\n   - Physical Meaning: Magnetic flux lines are continuous closed loops; isolated magnetic monopoles do not exist.\n\n3. Faraday\'s Law of Electromagnetic Induction:\n   - Differential Form: ∇ x E = - ∂B / ∂t\n   - Integral Form: oint_C E · dr = - d/dt [ iint_S B · n dS ]\n   - Physical Meaning: A time-varying magnetic field induces a circulating non-conservative electric field.\n\n4. Ampere-Maxwell Law:\n   - Differential Form: ∇ x H = J + ∂D / ∂t\n   - Integral Form: oint_C H · dr = iint_S (J + ∂D/∂t) · n dS\n   - Physical Meaning: Magnetic fields are produced both by physical electric conduction currents (J) and by time-varying electric displacement fields (∂D/∂t).'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-pht100-5',
      number: 5,
      name: 'Module 5: Superconductivity & Lasers / Photonics',
      topics: [
        {
          id: 'top-phy-5-1',
          name: 'Superconductivity, Meissner Effect & BCS Theory',
          status: 'not-started',
          notes: '',
          tags: ['Superconductivity', 'Meissner Effect', 'BCS Theory'],
          subTopics: [
            { id: 'st-phy-12', name: 'Meissner effect, magnetic levitation, and critical field relation', done: false },
            { id: 'st-phy-13', name: 'Type I vs Type II superconductors and vortex state', done: false },
            { id: 'st-phy-14', name: 'BCS microscopic theory (Cooper pairs and energy gap)', done: false }
          ],
          previousQuestions: [
            {
              id: 'pht100-2026-model-q19',
              year: 2026,
              exam: 'January 2026 Model QP (Set B)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q19',
              marks: 14,
              text: 'Explain Meissner effect and prove that a superconductor is a perfect diamagnet. Differentiate between Type I and Type II superconductors with relevant magnetization curves. Explain the qualitative concepts of BCS theory.',
              frequency: 'Universal KTU 14-Mark Question (2026, 2024, 2022, 2020)',
              solved: false,
              hint: 'Meissner effect: B = 0 inside superconductor. Prove χ = -1. Type I has single Hc. Type II has Hc1, Hc2, and mixed vortex state.',
              source: { status: 'verified', paper: 'KTU PHT100 Jan 2026 Model QP' },
              answer: 'Part 1: Meissner Effect & Proof of Perfect Diamagnetism:\n- Statement: When a superconductor is cooled below its critical transition temperature Tc in the presence of an applied magnetic field H, the magnetic flux lines are completely expelled from the interior of the material (B = 0).\n\nProof of Perfect Diamagnetism:\nMagnetic induction B inside any magnetic material is given by:\nB = μ0 (H + M)\nwhere H is applied magnetic field, M is induced magnetization, and μ0 is permeability of free space.\nInside a superconductor in the superconducting state (T < Tc, H < Hc):\nB = 0\nμ0 (H + M) = 0\nH + M = 0 => M = - H.\n\nMagnetic Susceptibility χ:\nχ = M / H = -H / H = -1.\nRelative permeability μr = 1 + χ = 1 + (-1) = 0.\nSince magnetic susceptibility χ = -1 and μr = 0, a superconductor behaves as a perfect diamagnet.\n\nPart 2: Comparison of Type I and Type II Superconductors:\n1. Transition & Critical Magnetic Fields:\n   - Type I: Exhibits a single critical magnetic field Hc. The material shows complete Meissner effect up to Hc, and abruptly transitions to the normal resistive state above Hc.\n   - Type II: Exhibits two critical fields: Lower critical field Hc1 and Upper critical field Hc2.\n     - Below Hc1: Complete Meissner state (B = 0).\n     - Between Hc1 and Hc2: Mixed/Vortex state (Abrikosov state) where magnetic flux penetrates in quantized flux filaments (vortices) surrounded by supercurrents.\n     - Above Hc2: Completely transitions to normal state.\n2. Magnetization Curve:\n   - Type I: Magnetization increases linearly (M = -H) up to Hc, then drops abruptly to zero.\n   - Type II: Magnetization increases linearly up to Hc1, then gradually drops to zero at Hc2.\n3. Coherence Length (ξ) and Penetration Depth (λ):\n   - Type I: ξ >> λ (positive surface energy).\n   - Type II: λ >> ξ (negative surface energy).\n4. Practical Utility:\n   - Type I (Soft superconductors): Low Hc (~0.1 T); cannot sustain high transport currents (e.g., Pb, Hg, Sn, Al).\n   - Type II (Hard superconductors): Very high Hc2 (30 T to 100 T); widely utilized for powerful superconducting electromagnets in MRI machines, Maglev trains, and LHC (e.g., Nb3Sn, Nb-Ti, YBCO).\n\nPart 3: Qualitative Concepts of BCS Theory (Bardeen-Cooper-Schrieffer):\n1. Electron-Phonon Interaction:\n   As an electron moves through the crystal lattice of positive ion cores, it attracts the positive ions, creating a localized region of increased positive charge density (lattice deformation / virtual phonon emission).\n2. Formation of Cooper Pairs:\n   A second electron passing by is attracted to this positive charge concentration. At low temperatures (T < Tc), this indirect attractive force overcomes the Coulomb repulsion between electrons, binding two electrons with equal and opposite momenta and opposite spins (k, ↑ and -k, ↓) into a bound state called a Cooper pair.\n3. Bosonic Condensation & Zero Resistance:\n   Cooper pairs have total integer spin (S = 0), behaving as composite bosons. Below Tc, all Cooper pairs condense into a single macroscopic ground state separated from single-particle excitations by an energy gap Eg = 3.52 k_B Tc.\n   Because thermal energy at T < Tc is insufficient to break the Cooper pairs, electrons traverse the lattice without inelastic scattering, yielding zero electrical resistance.'
            },
            {
              id: 'pht100-2023-dec-q20',
              year: 2023,
              exam: 'December 2023 Regular',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q20',
              marks: 7,
              text: 'The critical temperature of mercury is 4.2 K. Its critical magnetic field at 0 K is 0.0411 T. Calculate the critical field at 2.0 K.',
              frequency: 'Standard Superconductor Numerical (2023, 2021)',
              solved: false,
              hint: 'Parabolic critical field equation: Hc(T) = Hc(0) [ 1 - (T / Tc)^2 ].',
              source: { status: 'verified', paper: 'KTU PHT100 Dec 2023 Final' },
              answer: 'Given Data:\n- Critical temperature Tc = 4.2 K\n- Critical field at absolute zero Hc(0) = 0.0411 T\n- Temperature T = 2.0 K.\n\nApplicable Formula:\nThe variation of critical magnetic field with temperature follows the empirical parabolic relation:\nHc(T) = Hc(0) · [ 1 - (T / Tc)^2 ].\n\nStep-by-Step Calculation:\n1. Ratio T / Tc:\nT / Tc = 2.0 / 4.2 = 0.47619.\n\n2. Square of the ratio:\n(T / Tc)^2 = (0.47619)^2 = 0.22676.\n\n3. Factor [ 1 - (T / Tc)^2 ]:\n1 - 0.22676 = 0.77324.\n\n4. Compute Hc(2.0 K):\nHc(2.0 K) = 0.0411 T × 0.77324\n= 0.03178 T = 3.178 × 10^-2 T.\n\nConversion to milliTesla (mT):\nHc(2.0 K) = 31.78 mT.\n\nFinal Answer:\nCritical field at 2.0 K is Hc(2.0 K) = 0.0318 T (or 31.8 mT).'
            }
          ]
        }
      ]
    }
  ]
};
