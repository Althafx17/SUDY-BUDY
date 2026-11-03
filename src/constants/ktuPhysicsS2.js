// KTU PHT100: Engineering Physics (2019 Scheme)
// 5 Modules + Comprehensive Previous Year Question Papers (2019 - 2026) with Step-by-Step Solutions

export const KTU_PHYSICS_S2 = {
  id: 'sub-pht100',
  name: 'Engineering Physics',
  code: 'PHT100',
  color: 'emerald',
  description: 'Oscillations, wave optics, quantum mechanics, electromagnetism, superconductivity, and laser photonics under KTU 2019 Scheme.',
  instructor: 'KTU Dept. of Physics',
  examDate: '2027-04-18T09:30',
  examVenue: 'KTU Exam Hall 4',
  youtubeUrl: 'https://www.youtube.com/watch?v=26QPDBe-NB8',
  todos: [
    { id: 'todo-phy-1', text: 'Derive particle in a 1D infinite potential box energy eigenvalues', priority: 'high', done: true, createdAt: '2026-09-21' },
    { id: 'todo-phy-2', text: 'Practice Air-Wedge thickness and Newton rings diameter numericals', priority: 'high', done: false, createdAt: '2026-09-23' },
    { id: 'todo-phy-3', text: 'Derive Maxwell 4 electromagnetic equations and displacement current', priority: 'medium', done: false, createdAt: '2026-09-24' }
  ],
  modules: [
    {
      id: 'mod-pht100-1',
      number: 1,
      name: 'Module 1: Oscillations & Waves',
      topics: [
        {
          id: 'top-phy-1-1',
          name: 'Damped & Forced Harmonic Oscillations',
          status: 'studied',
          notes: 'Damped equation: d^2x/dt^2 + 2gamma dx/dt + omega_0^2 x = 0. Under-damped solution: x(t) = A e^(-gamma t) cos(omega t + phi). Quality factor: Q = omega_0 / (2 gamma) = 2pi * (Energy stored / Energy lost per cycle).',
          tags: ['Oscillations', 'Damping', 'Quality Factor', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-phy-1', name: 'Differential equation of damped harmonic oscillator', done: true },
            { id: 'st-phy-2', name: 'Critical damping, over-damping, and under-damping cases', done: true },
            { id: 'st-phy-3', name: 'Forced oscillations, amplitude resonance, and sharpness Q factor', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-1-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set A)',
              marks: 14,
              text: 'Set up the differential equation for a damped harmonic oscillator and solve it for under-damped, critically damped, and over-damped conditions. Define Quality factor Q and show that Q = omega_0 / (2 gamma).',
              frequency: 'Universal 14-Mark Question in KTU (2026, 2024, 2022, 2020)',
              solved: true,
              hint: 'Restoring force -kx, damping force -b(dx/dt). Equation: m(d^2x/dt^2) + b(dx/dt) + kx = 0. Let 2gamma = b/m, omega_0^2 = k/m.',
              answer: 'Step 1: Setting up differential equation:\nForces acting on the particle:\n1. Restoring force F_r = -k x\n2. Damping force F_d = -b (dx/dt)\nBy Newton Second Law: m (d^2x/dt^2) = -k x - b (dx/dt)\nm (d^2x/dt^2) + b (dx/dt) + k x = 0\nd^2x/dt^2 + (b/m)(dx/dt) + (k/m)x = 0\nLet 2γ = b/m (damping coefficient) and ω0^2 = k/m (natural frequency):\nd^2x/dt^2 + 2γ (dx/dt) + ω0^2 x = 0.\n\nStep 2: Trial solution x = C e^(r t):\nAuxiliary equation: r^2 + 2γ r + ω0^2 = 0\nRoots: r = -γ ± sqrt(γ^2 - ω0^2).\n\nStep 3: Three Physical Cases:\n1. Over-damped (γ^2 > ω0^2, heavy damping):\nRoots are real and distinct. Displacement decays exponentially without any oscillations:\nx(t) = e^(-γ t) [ C1 e^(sqrt(γ^2 - ω0^2) t) + C2 e^(-sqrt(γ^2 - ω0^2) t) ].\n\n2. Critically damped (γ^2 = ω0^2):\nRoots are real and equal (r = -γ). Particle returns to equilibrium in minimum time without oscillating:\nx(t) = (C1 + C2 t) e^(-γ t).\n\n3. Under-damped (γ^2 < ω0^2, light damping):\nRoots are complex: r = -γ ± i ω, where ω = sqrt(ω0^2 - γ^2).\nx(t) = A e^(-γ t) cos(ω t + φ).\nRepresents an oscillation with exponentially decaying amplitude A(t) = A e^(-γ t).\n\nStep 4: Quality Factor (Q):\nQ is defined as 2π times the ratio of total energy stored to energy dissipated per cycle:\nQ = 2π · E / (ΔE per cycle).\nSince energy decays as E(t) = E0 e^(-2γ t), ΔE / E ≈ 2γ T = 2γ (2π / ω0).\nQ = 2π / (2γ · 2π / ω0) = ω0 / (2γ).'
            },
            {
              id: 'pq-phy-1-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set B)',
              marks: 7,
              text: 'Distinguish between phase velocity (v_p) and group velocity (v_g). Establish Rayleigh formula relating phase velocity and group velocity in a dispersive medium: v_g = v_p - lambda (dv_p / dlambda).',
              frequency: 'Asked in 2024, 2022, 2019',
              solved: false,
              hint: 'Phase velocity v_p = omega / k => omega = v_p * k. Group velocity v_g = d(omega)/dk. Substitute k = 2pi / lambda.',
              answer: 'Step 1: Definitions:\n- Phase velocity (v_p): The velocity with which the phase of a single monochromatic wave advances in space: v_p = ω / k.\n- Group velocity (v_g): The velocity with which the overall envelope/modulation of a wave packet (energy/signal) travels: v_g = dω / dk.\n\nStep 2: Derivation of Rayleigh Formula:\nWe know: ω = v_p · k\nDifferentiating w.r.t propagation constant k:\nv_g = dω / dk = d/dk (v_p · k) = v_p + k (dv_p / dk)  --- (1)\n\nStep 3: Relate k and wavelength λ:\nk = 2π / λ\ndk / dλ = -2π / λ^2\nTherefore dk = -(2π / λ^2) dλ, which means:\ndv_p / dk = (dv_p / dλ) · (dλ / dk) = (dv_p / dλ) · (-λ^2 / 2π).\n\nStep 4: Substitute back into (1):\nv_g = v_p + (2π / λ) · [ - (λ^2 / 2π) (dv_p / dλ) ]\nv_g = v_p - λ (dv_p / dλ).\n\nStep 5: Physical Significance:\n- In a non-dispersive medium: dv_p/dλ = 0 => v_g = v_p.\n- In normal dispersion: dv_p/dλ > 0 => v_g < v_p.'
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
          status: 'studied',
          notes: 'Thin film cosine law: 2 mu t cos(r) = n lambda (destructive/constructive depends on phase change on reflection). Air-wedge fringe width beta = lambda / (2 theta) = lambda L / (2 t). Newton rings diameter: D_n^2 = 4 n R lambda.',
          tags: ['Wave Optics', 'Air Wedge', 'Newton Rings', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-phy-4', name: 'Interference in wedge-shaped thin films and thickness calculation', done: true },
            { id: 'st-phy-5', name: 'Newton rings experimental setup and wavelength / radius determination', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-2-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set A)',
              marks: 14,
              text: 'Explain the formation of Newton rings by reflected monochromatic light. Derive expressions for the diameters of dark and bright rings. How can Newton rings be used to determine the wavelength of monochromatic light and the refractive index of a transparent liquid?',
              frequency: 'Universal KTU 14-Mark Question (2026, 2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Air film between plano-convex lens of radius R and glass plate. Path difference Delta = 2t + lambda/2. Geometry: t = r^2 / (2R).',
              answer: 'Step 1: Setup & Optical Path Difference:\nA plano-convex lens of large radius of curvature R is placed on an optically flat glass plate, forming an air film of varying thickness t.\nEffective path difference for reflected light:\nΔ = 2 μ t cos(r) + λ/2.\nFor normal incidence (cos(r) = 1) and air film (μ = 1):\nΔ = 2t + λ/2.\n\nStep 2: Condition for Dark Rings:\n2t + λ/2 = (2n + 1) λ/2 => 2t = n λ  (n = 0, 1, 2, ...).\nFrom geometry of plano-convex lens: r_n^2 = 2 R t => 2t = r_n^2 / R = D_n^2 / (4R).\nSubstitute 2t = n λ:\nD_n^2 / (4R) = n λ => D_n^2 = 4 n R λ\nDiameter of n-th dark ring: D_n = 2 sqrt(n R λ).\n\nStep 3: Condition for Bright Rings:\n2t + λ/2 = n λ => 2t = (2n - 1) λ/2\nD_n^2 / (4R) = (2n - 1) λ/2 => D_n^2 = 2(2n - 1) R λ\nDiameter of n-th bright ring: D_n = sqrt(2(2n - 1) R λ).\n\nStep 4: Determination of Wavelength (λ):\nMeasure diameters of (n+p)-th and n-th dark rings:\nD_(n+p)^2 - D_n^2 = 4(n+p)Rλ - 4nRλ = 4 p R λ\n=> λ = [D_(n+p)^2 - D_n^2] / [4 p R].\n\nStep 5: Determination of Refractive Index (μ) of Liquid:\nWhen the air gap is replaced with a liquid of refractive index μ:\n[D_(n+p)^2 - D_n^2]_liquid = 4 p R λ / μ\n=> μ = [D_(n+p)^2 - D_n^2]_air / [D_(n+p)^2 - D_n^2]_liquid.'
            },
            {
              id: 'pq-phy-2-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set A)',
              marks: 7,
              text: 'In an air-wedge experiment, 25 interference fringes are observed in a length of 1.5 cm. Light of wavelength 589.3 nm is used. The wedge is formed by placing a thin foil of thickness t at a distance of 10 cm from the line of contact. Find the thickness of the foil.',
              frequency: 'Classic Air-Wedge Numerical (2024, 2022, 2020)',
              solved: true,
              hint: 'Fringe width beta = L / N = 1.5 cm / 25. Formula beta = lambda * l / (2t) => t = lambda * l / (2 * beta).',
              answer: 'Step 1: Given data:\nWavelength λ = 589.3 nm = 589.3 × 10^-9 m\nFringe width β = Total length / number of fringes = 1.5 cm / 25 = 0.06 cm = 6 × 10^-4 m\nDistance from line of contact l = 10 cm = 0.10 m.\n\nStep 2: Formula for Air-Wedge fringe width:\nβ = λ / (2θ) = λ · l / (2t)\nwhere θ = t / l is the wedge angle.\n\nStep 3: Solve for thickness t:\nt = λ · l / (2β)\n= (589.3 × 10^-9 m × 0.10 m) / (2 × 6 × 10^-4 m)\n= (58.93 × 10^-9) / (12 × 10^-4)\n= 4.9108 × 10^-5 m = 0.0491 mm = 49.1 μm.\n\nFinal Answer: Thickness of foil t = 4.91 × 10^-5 m (49.1 μm).'
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
          status: 'needs-revision',
          notes: 'Time-independent Schrödinger equation: d^2psi/dx^2 + (2m/hbar^2)(E - V)psi = 0. Particle in 1D box (0 < x < L): psi_n(x) = sqrt(2/L) sin(n pi x / L). Energy eigenvalues: E_n = n^2 h^2 / (8 m L^2).',
          tags: ['Quantum Mechanics', 'Schrodinger Equation', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-phy-6', name: 'de Broglie matter waves and Born interpretation of wave function', done: true },
            { id: 'st-phy-7', name: 'Time-independent 1D Schrödinger equation derivation', done: true },
            { id: 'st-phy-8', name: 'Eigenfunctions and energy quantization of particle in a 1D box', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-3-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set B)',
              marks: 14,
              text: 'State the time-independent Schrödinger wave equation for a free particle. Derive the normalized wave functions and quantized energy levels for a particle of mass m confined in a 1D infinite potential well of width L. Plot the first three wave functions and probability distributions.',
              frequency: 'Universal KTU 14-Mark Question (2026, 2024, 2023, 2021, 2019)',
              solved: true,
              hint: 'Potential V(x) = 0 for 0 < x < L, V(x) = inf elsewhere. Boundary conditions psi(0) = 0 and psi(L) = 0.',
              answer: 'Step 1: Potential Well definition:\nV(x) = 0 for 0 <= x <= L\nV(x) = ∞ for x < 0 and x > L.\nSince V = ∞ outside, ψ(x) = 0 outside the well.\n\nStep 2: Schrödinger equation inside well (V = 0):\nd^2ψ/dx^2 + (2mE / ħ^2) ψ = 0\nLet k^2 = 2mE / ħ^2 => d^2ψ/dx^2 + k^2 ψ = 0.\nGeneral solution: ψ(x) = A sin(kx) + B cos(kx).\n\nStep 3: Apply Boundary Conditions:\n1. At x = 0, ψ(0) = 0 => B cos(0) = 0 => B = 0.\nSo ψ(x) = A sin(kx).\n2. At x = L, ψ(L) = 0 => A sin(kL) = 0.\nSince A != 0, sin(kL) = 0 => kL = nπ => k = nπ / L (where n = 1, 2, 3, ...).\n\nStep 4: Energy Quantization:\nk^2 = 2mE / ħ^2 = n^2 π^2 / L^2\nE_n = n^2 π^2 ħ^2 / (2m L^2) = n^2 h^2 / (8m L^2) (since ħ = h / 2π).\nFor ground state n = 1: E1 = h^2 / (8mL^2).\nExcited states: E2 = 4 E1, E3 = 9 E1.\n\nStep 5: Normalization of Wavefunction:\nint_0^L |ψ_n(x)|^2 dx = 1 => A^2 int_0^L sin^2(nπx / L) dx = 1\nA^2 · (L / 2) = 1 => A = sqrt(2 / L).\nNormalized wavefunctions: ψ_n(x) = sqrt(2/L) sin(nπx / L).\n\nStep 6: Probability Density P(x) = |ψ_n(x)|^2 = (2/L) sin^2(nπx / L):\n- For n = 1: Single central peak at x = L/2.\n- For n = 2: Two peaks at x = L/4 and 3L/4, node at x = L/2.\n- For n = 3: Three peaks, two nodes.'
            },
            {
              id: 'pq-phy-3-2',
              year: 2023,
              exam: 'KTU Dec 2023 Final',
              marks: 7,
              text: 'An electron is bound in an infinite 1D potential well of width 1.2 Angstroms. Calculate the lowest energy and the energy required to excite it from the ground state to the second excited state.',
              frequency: 'Standard Quantum Numerical (2023, 2020)',
              solved: false,
              hint: 'E1 = h^2 / (8 m L^2). Ground state is n=1, second excited state is n=3. Energy required Delta E = E3 - E1 = (3^2 - 1^2) E1 = 8 E1.',
              answer: 'Step 1: Given values:\nm = 9.109 × 10^-31 kg\nL = 1.2 Å = 1.2 × 10^-10 m\nh = 6.626 × 10^-34 J s.\n\nStep 2: Ground state energy (n = 1):\nE1 = h^2 / (8 m L^2)\n= (6.626 × 10^-34)^2 / [8 × 9.109 × 10^-31 × (1.2 × 10^-10)^2]\n= (4.390 × 10^-67) / [8 × 9.109 × 10^-31 × 1.44 × 10^-20]\n= 4.390 × 10^-67 / 1.0493 × 10^-49 = 4.184 × 10^-18 J.\nIn electron-volts (eV):\nE1 = (4.184 × 10^-18) / (1.602 × 10^-19) = 26.12 eV.\n\nStep 3: Excitation to second excited state (n = 3):\nGround state: n = 1\nFirst excited state: n = 2\nSecond excited state: n = 3\nE3 = 3^2 · E1 = 9 E1.\nΔE = E3 - E1 = 8 E1 = 8 × 26.12 eV = 208.96 eV (or 3.347 × 10^-17 J).\n\nFinal Answer:\n- Lowest energy E1 = 26.12 eV\n- Excitation energy ΔE = 209.0 eV.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-pht100-4',
      number: 4,
      name: 'Module 4: Electromagnetism & Maxwell Equations',
      topics: [
        {
          id: 'top-phy-4-1',
          name: 'Maxwell Equations & Displacement Current',
          status: 'studied',
          notes: 'Displacement current J_D = epsilon_0 (dE/dt). Maxwell 4 Equations: (1) div(D) = rho_v, (2) div(B) = 0, (3) curl(E) = -dB/dt, (4) curl(H) = J + dD/dt. Wave speed in vacuum: c = 1 / sqrt(mu_0 epsilon_0) = 3 x 10^8 m/s.',
          tags: ['Maxwell Equations', 'Displacement Current', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-phy-9', name: 'Concept of displacement current and modification of Ampere Law', done: true },
            { id: 'st-phy-10', name: 'Maxwell 4 equations in differential and integral forms', done: true },
            { id: 'st-phy-11', name: 'Electromagnetic wave equation and velocity of light derivation', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-4-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set A)',
              marks: 14,
              text: 'Explain why Maxwell modified Ampere circuital law and derive the expression for displacement current. State all four Maxwell equations in differential form and explain the physical significance of each.',
              frequency: 'Universal KTU 14-Mark Question (2026, 2025, 2023, 2021, 2019)',
              solved: true,
              hint: 'Taking divergence of Ampere law curl(B) = mu_0 J gives div(curl B) = 0 => div(J) = 0. But continuity equation is div(J) = -drho/dt.',
              answer: 'Step 1: Need for Modification of Ampere Law:\nOriginal Ampere circuital law in differential form: ∇ x B = μ0 J.\nTaking divergence on both sides:\n∇ · (∇ x B) = μ0 (∇ · J).\nSince divergence of curl is identically zero:\n0 = μ0 (∇ · J) => ∇ · J = 0.\nHowever, the equation of continuity for time-varying fields is:\n∇ · J = -∂ρ/∂t.\nThus Ampere law was incomplete for time-varying electromagnetic fields.\n\nStep 2: Maxwell Modification & Displacement Current:\nFrom Gauss Law: ∇ · E = ρ / ε0 => ρ = ε0 (∇ · E).\nSubstitute into continuity equation:\n∇ · J = -∂/∂t [ε0 (∇ · E)] = -∇ · [ε0 (∂E/∂t)]\n∇ · [J + ε0 (∂E/∂t)] = 0.\nMaxwell defined Displacement Current Density:\nJ_D = ε0 (∂E/∂t) = ∂D/∂t.\nModified Ampere-Maxwell Law: ∇ x B = μ0 (J + ε0 ∂E/∂t).\n\nStep 3: Four Maxwell Equations (Differential Form) & Physical Meaning:\n1. ∇ · D = ρ_v (Gauss Law for Electrostatics):\nElectric flux diverging from a volume equals the enclosed electric charge. Isolated electric charges (monopoles) exist.\n\n2. ∇ · B = 0 (Gauss Law for Magnetism):\nTotal magnetic flux through any closed surface is zero. Magnetic monopoles do not exist; magnetic field lines form closed continuous loops.\n\n3. ∇ x E = -∂B/∂t (Faraday Law of Electromagnetic Induction):\nA time-varying magnetic field induces a circulating non-conservative electric field.\n\n4. ∇ x H = J + ∂D/∂t (Ampere-Maxwell Law):\nMagnetic fields are generated both by conduction electric currents (J) and time-varying electric flux/displacement currents (∂D/∂t).'
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
          status: 'studied',
          notes: 'Zero electrical resistance below critical temperature Tc. Critical magnetic field: Hc(T) = Hc(0) [1 - (T/Tc)^2]. Meissner effect: B = 0 inside superconductor (perfect diamagnetism chi = -1). BCS theory: electron-phonon-electron Cooper pairs.',
          tags: ['Superconductivity', 'Meissner Effect', 'BCS Theory'],
          subTopics: [
            { id: 'st-phy-12', name: 'Meissner effect, magnetic levitation, and critical field relation', done: true },
            { id: 'st-phy-13', name: 'Type I vs Type II superconductors and vortex state', done: true },
            { id: 'st-phy-14', name: 'BCS microscopic theory (Cooper pairs and energy gap)', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-5-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set B)',
              marks: 14,
              text: 'Explain Meissner effect and prove that a superconductor is a perfect diamagnet. Differentiate between Type I and Type II superconductors with relevant magnetization curves. Explain the qualitative concepts of BCS theory.',
              frequency: 'Universal KTU 14-Mark Question (2026, 2024, 2022, 2020)',
              solved: false,
              hint: 'B = mu_0 (H + M) = 0 => M = -H => chi = M/H = -1. Type I has single critical field Hc. Type II has lower Hc1 and upper Hc2 with intermediate vortex state.',
              answer: 'Step 1: Meissner Effect:\nWhen a superconducting material is cooled below its critical temperature Tc in the presence of an applied magnetic field, the magnetic flux lines are completely expelled from the interior of the material (B = 0).\n\nStep 2: Proof of Perfect Diamagnetism:\nMagnetic induction inside the material is given by:\nB = μ0 (H + M)\nwhere H is the applied magnetic field and M is the magnetization.\nInside the superconductor below Tc, B = 0:\nμ0 (H + M) = 0 => M = -H\nMagnetic susceptibility χ = M / H = -H / H = -1.\nSince χ = -1 and relative permeability μr = 1 + χ = 0, a superconductor is a perfect diamagnet.\n\nStep 3: Comparison of Type I vs Type II Superconductors:\n1. Critical Magnetic Fields:\n- Type I: Single critical magnetic field Hc. Complete Meissner effect up to Hc; abruptly transitions to normal state.\n- Type II: Two critical fields Hc1 (lower) and Hc2 (upper). Complete Meissner effect below Hc1. Between Hc1 and Hc2, exists in mixed/vortex state where flux penetrates in quantized filaments.\n2. Penetration Depth vs Coherence Length:\n- Type I: Coherence length ξ >> Penetration depth λ.\n- Type II: Penetration depth λ >> Coherence length ξ.\n3. Practical applications:\n- Type I: Low critical field (~0.1 T), cannot sustain strong currents (e.g., Pb, Hg, Al).\n- Type II: High upper critical field (~30 T to 100 T), ideal for powerful superconducting magnets in MRI and particle accelerators (e.g., Nb3Sn, YBCO).\n\nStep 4: BCS Theory (Bardeen-Cooper-Schrieffer):\n- Conduction electrons interact via crystal lattice vibrations (electron-phonon-electron interaction).\n- An electron moving through the lattice distorts positive ions, creating a localized positive charge concentration that attracts a second electron.\n- At T < Tc, this net attractive force overcomes Coulomb repulsion, binding pairs of electrons with opposite spins and momenta into Cooper pairs.\n- Cooper pairs act as composite bosons, condensing into a common macroscopic ground state with an energy gap ΔE, flowing through the lattice with zero scattering and zero electrical resistance.'
            },
            {
              id: 'pq-phy-5-2',
              year: 2023,
              exam: 'KTU Dec 2023 Final',
              marks: 7,
              text: 'The critical temperature of mercury is 4.2 K. Its critical field at 0 K is 0.0411 T. Calculate the critical field at 2.0 K.',
              frequency: 'Standard Superconductor Numerical (2023, 2021)',
              solved: true,
              hint: 'Hc(T) = Hc(0) [1 - (T / Tc)^2].',
              answer: 'Step 1: Formula:\nHc(T) = Hc(0) · [ 1 - (T / Tc)^2 ]\n\nStep 2: Given values:\nTc = 4.2 K\nT = 2.0 K\nHc(0) = 0.0411 T.\n\nStep 3: Calculation:\nHc(2.0 K) = 0.0411 · [ 1 - (2.0 / 4.2)^2 ]\n= 0.0411 · [ 1 - (0.4762)^2 ]\n= 0.0411 · [ 1 - 0.2268 ]\n= 0.0411 · 0.7732 = 0.03178 T.\n\nFinal Answer: Hc(2.0 K) = 0.0318 T (or 31.8 mT).'
            }
          ]
        }
      ]
    }
  ]
};
