// KTU PHT100: Engineering Physics (2019 Scheme)
// 5 Modules + Previous Year Question Papers (2019 - 2026 December, 2 Sets per year)

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
          notes: 'Damped equation: d^2x/dt^2 + 2gamma dx/dt + omega_0^2 x = 0. Cases: over-damped, critically damped, under-damped. Quality factor Q = 2*pi * (energy stored / energy dissipated per cycle).',
          tags: ['Oscillations', 'Differential Eq'],
          subTopics: [
            { id: 'st-phy-1', name: 'Differential equation of damped harmonic oscillator', done: true },
            { id: 'st-phy-2', name: 'Critical damping, over-damping, and under-damping cases', done: true },
            { id: 'st-phy-3', name: 'Forced oscillations, amplitude resonance, and sharpness Q factor', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-1-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Set up the differential equation for a damped harmonic oscillator and obtain the expression for displacement in the under-damped condition. Define Quality factor Q.',
              frequency: 'Asked in Dec 2024, Dec 2022, Dec 2020',
              solved: true,
              hint: 'x(t) = A e^(-gamma t) cos(omega t + phi) where omega = sqrt(omega0^2 - gamma^2).'
            }
          ]
        },
        {
          id: 'top-phy-1-2',
          name: 'One-Dimensional Wave Motion',
          status: 'needs-revision',
          notes: 'Wave equation: d^2y/dx^2 = (1/v^2) d^2y/dt^2. Phase velocity v_p = omega/k. Group velocity v_g = d(omega)/dk. Relation: v_g = v_p - lambda (dv_p/dlambda).',
          tags: ['Wave Equation'],
          subTopics: [
            { id: 'st-phy-4', name: '1D transverse wave equation derivation', done: true },
            { id: 'st-phy-5', name: 'Phase velocity vs group velocity in dispersive media', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-1-2',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Distinguish between phase velocity and group velocity. Establish the relation v_g = v_p - lambda (dv_p / dlambda).',
              frequency: 'Asked 3 times',
              solved: false,
              hint: 'Substitute k = 2pi/lambda and omega = v_p * k into v_g = d(omega)/dk.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-pht100-2',
      number: 2,
      name: 'Module 2: Optics - Interference & Diffraction',
      topics: [
        {
          id: 'top-phy-2-1',
          name: 'Interference: Thin Films & Air-Wedge',
          status: 'studied',
          notes: 'Thin film cosine law: path difference 2mu t cos(r) = n lambda (destructive/dark) and (2n+1)lambda/2 (constructive/bright). Air wedge fringe width beta = lambda / (2 theta) = lambda L / (2t).',
          tags: ['Optics', 'Numerical'],
          subTopics: [
            { id: 'st-phy-6', name: 'Interference in thin wedge-shaped air film', done: true },
            { id: 'st-phy-7', name: 'Air wedge experiment to measure thickness of thin paper/wire', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-2-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'In an air-wedge experiment, 25 interference fringes were observed in a distance of 1.5 cm when illuminated with light of wavelength 589.3 nm. If length of the wedge is 10 cm, calculate the thickness of the spacer wire.',
              frequency: 'Every Year Numerical (2024, 2023, 2021)',
              solved: true,
              hint: 'Fringe width beta = 1.5 / 25 = 0.06 cm = 6 x 10^-4 m. Thickness t = lambda * L / (2 * beta) = (589.3e-9 * 0.1) / (2 * 6e-4) = 0.0491 mm.'
            }
          ]
        },
        {
          id: 'top-phy-2-2',
          name: 'Diffraction: Plane Transmission Grating',
          status: 'needs-revision',
          notes: 'Grating equation: (a + b) sin(theta) = n lambda. Maximum number of orders n_max = (a + b) / lambda. Resolving power of grating = lambda / dlambda = n * N.',
          tags: ['Mandatory Optics Problem'],
          subTopics: [
            { id: 'st-phy-8', name: 'Fraunhofer diffraction at a single slit', done: true },
            { id: 'st-phy-9', name: 'Plane transmission grating theory and grating element', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-2-2',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Derive the condition for maxima and minima in a plane transmission diffraction grating. A grating has 5000 lines/cm. Find the highest order spectrum possible for wavelength 600 nm.',
              frequency: 'Asked in Dec 2024, Dec 2022, Dec 2019',
              solved: false,
              hint: 'Grating element (a+b) = 1/5000 cm = 2 x 10^-6 m. Highest order n = (a+b)/lambda = 2e-6 / 600e-9 = 3.33. Hence highest order = 3.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-pht100-3',
      number: 3,
      name: 'Module 3: Quantum Mechanics & Nanomaterials',
      topics: [
        {
          id: 'top-phy-3-1',
          name: 'Schrödinger Wave Equation & 1D Box Model',
          status: 'revised',
          notes: 'Time-independent equation: - (hbar^2 / 2m) d^2psi/dx^2 + V psi = E psi. For infinite well of width L: psi_n(x) = sqrt(2/L) sin(n pi x / L), E_n = (n^2 pi^2 hbar^2) / (2 m L^2).',
          tags: ['Core Quantum', 'Eigenvalues'],
          subTopics: [
            { id: 'st-phy-10', name: 'De Broglie wavelength and Born interpretation of psi', done: true },
            { id: 'st-phy-11', name: 'Particle in a 1D box: wavefunctions and quantized energy levels', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-3-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Set up the time-independent Schrödinger wave equation for a particle in a 1D infinite potential well of width L. Find its normalized wave functions and show that energy eigenvalues are discrete.',
              frequency: 'Guaranteed 14-Mark Question (2024, 2023, 2021, 2019)',
              solved: true,
              hint: 'Boundary conditions psi(0) = 0 and psi(L) = 0 force k L = n pi. Energy E_n = n^2 h^2 / (8 m L^2).'
            }
          ]
        },
        {
          id: 'top-phy-3-2',
          name: 'Nanomaterials & Quantum Confinement',
          status: 'studied',
          notes: 'Quantum confinement occurs when dimensions approach de Broglie wavelength. 2D (Quantum well), 1D (Quantum wire), 0D (Quantum dot). Surface-to-volume ratio increases drastically.',
          tags: ['Nanotechnology'],
          subTopics: [
            { id: 'st-phy-12', name: 'Surface to volume ratio scaling effect', done: true },
            { id: 'st-phy-13', name: 'Quantum wells, wires, and dots density of states', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-3-2',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'What is quantum confinement? Distinguish between quantum wells, quantum wires, and quantum dots.',
              frequency: 'Asked in Dec 2023, Dec 2020',
              solved: false,
              hint: 'Confined in 1 dimension (well), 2 dimensions (wire), all 3 dimensions (dot).'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-pht100-4',
      number: 4,
      name: 'Module 4: Electromagnetism & Magnetic Materials',
      topics: [
        {
          id: 'top-phy-4-1',
          name: 'Maxwell Equations & Displacement Current',
          status: 'studied',
          notes: 'Displacement current J_D = epsilon_0 (dE/dt). Maxwell 4 equations: div D = rho, div B = 0, curl E = -dB/dt, curl H = J + dD/dt. Wave equation in vacuum gives c = 1/sqrt(mu_0 epsilon_0).',
          tags: ['Electromagnetism', 'Formulas'],
          subTopics: [
            { id: 'st-phy-14', name: 'Need for displacement current and Ampere-Maxwell law', done: true },
            { id: 'st-phy-15', name: 'Derivation of electromagnetic wave equation in free space', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-4-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'What is displacement current? State and derive Maxwell four electromagnetic equations in differential and integral forms.',
              frequency: 'Asked in Dec 2024, Dec 2022, Dec 2019',
              solved: true,
              hint: 'Inconsistency of Ampere law for charging capacitor: curl H = J_c + dD/dt.'
            }
          ]
        },
        {
          id: 'top-phy-4-2',
          name: 'Poynting Vector & Magnetic Materials',
          status: 'needs-revision',
          notes: 'Poynting vector S = E x H represents rate of energy flow per unit area (W/m^2). Dia, para, and ferro magnetism comparison based on susceptibility chi.',
          tags: ['Magnetism'],
          subTopics: [
            { id: 'st-phy-16', name: 'Poynting theorem and energy flux density', done: true },
            { id: 'st-phy-17', name: 'Classification of magnetic materials', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-4-2',
              year: 2023,
              exam: 'December Final (Set B)',
              marks: 7,
              text: 'State and prove Poynting Theorem. Give the physical significance of the Poynting vector S = E x H.',
              frequency: 'Asked in Dec 2023, Dec 2020',
              solved: false,
              hint: 'Rate of energy transfer in an EM field per unit cross-sectional area.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-pht100-5',
      number: 5,
      name: 'Module 5: Superconductivity & Lasers',
      topics: [
        {
          id: 'top-phy-5-1',
          name: 'Superconductivity & Meissner Effect',
          status: 'studied',
          notes: 'Zero electrical resistance below T_c. Meissner effect: B = 0 inside superconductor (perfect diamagnetism chi = -1). Critical field: H_c(T) = H_c(0)[1 - (T/T_c)^2]. Type I vs Type II.',
          tags: ['Superconductors', 'Meissner'],
          subTopics: [
            { id: 'st-phy-18', name: 'Meissner effect and critical magnetic field', done: true },
            { id: 'st-phy-19', name: 'Type I vs Type II superconductors and vortex state', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-5-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Explain Meissner effect. Prove that a superconductor is a perfect diamagnetic material with magnetic susceptibility chi = -1.',
              frequency: 'Every Year Theory (2024, 2023, 2022, 2021)',
              solved: true,
              hint: 'B = mu0(H + M) = 0 inside. Hence M = -H and chi = M/H = -1.'
            }
          ]
        },
        {
          id: 'top-phy-5-2',
          name: 'Lasers: Ruby, He-Ne & Fiber Optics',
          status: 'needs-revision',
          notes: 'Stimulated emission (Einsteins B21), population inversion in metastable state, optical resonator. Numerical aperture NA = sqrt(n1^2 - n2^2) = n1 sqrt(2 delta). Acceptance angle theta_a = sin^-1(NA).',
          tags: ['Lasers', 'Fiber Optics'],
          subTopics: [
            { id: 'st-phy-20', name: 'Einstein coefficients and population inversion', done: true },
            { id: 'st-phy-21', name: 'Construction and working of He-Ne laser', done: false },
            { id: 'st-phy-22', name: 'Numerical aperture and step-index optical fiber', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-phy-5-2',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 14,
              text: 'Explain the working of a Helium-Neon (He-Ne) gas laser with an energy level diagram. Why are He atoms added to the active medium?',
              frequency: 'Asked in Dec 2024, Dec 2022, Dec 2019',
              solved: false,
              hint: 'He 2^1S and 2^3S levels resonate with Ne 3s and 2s levels, transferring energy through inelastic collisions.'
            },
            {
              id: 'pq-phy-5-3',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Calculate the numerical aperture and acceptance angle of an optical fiber with core refractive index 1.55 and cladding refractive index 1.50.',
              frequency: 'Standard KTU Fiber Problem',
              solved: true,
              hint: 'NA = sqrt(1.55^2 - 1.50^2) = sqrt(0.1525) = 0.3905. Acceptance angle theta = sin^-1(0.3905) = 22.98 degrees.'
            }
          ]
        }
      ]
    }
  ],

  // 16 Question Papers (2019 to 2026, 2 Sets per year)
  pastPapers: [
    {
      id: 'qp-pht-2026-a',
      title: 'KTU University Model Examination - Dec 2026 (Set A)',
      year: 2026,
      examType: 'Dec 2026 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-pht-26a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-phy-1-1', topicName: 'Damped Oscillations', marks: 3, text: 'Define sharpness of resonance and Quality factor.', solved: false, hint: 'Q = omega0 / (2 gamma).' },
        { id: 'q-pht-26a-2', number: 'Q2', moduleNumber: 2, topicId: 'top-phy-2-1', topicName: 'Air-Wedge', marks: 3, text: 'Why is an extended monochromatic source required to view thin film interference fringes?', solved: false, hint: 'To illuminate wide field of view simultaneously.' },
        { id: 'q-pht-26a-3', number: 'Q3', moduleNumber: 3, topicId: 'top-phy-3-1', topicName: '1D Box Model', marks: 3, text: 'Write down the physical meaning of normalized wave function.', solved: false, hint: 'Total probability of finding particle anywhere in space is unity.' },
        { id: 'q-pht-26a-4', number: 'Q4', moduleNumber: 4, topicId: 'top-phy-4-1', topicName: 'Displacement Current', marks: 3, text: 'State the Maxwell modification to Ampere Circuital law.', solved: false, hint: 'Added displacement current density dD/dt.' },
        { id: 'q-pht-26a-5', number: 'Q5', moduleNumber: 5, topicId: 'top-phy-5-1', topicName: 'Superconductivity', marks: 3, text: 'Define critical temperature and critical magnetic field.', solved: false, hint: 'Temperature where resistivity vanishes.' },
        { id: 'q-pht-26a-6', number: 'Q11', moduleNumber: 1, topicId: 'top-phy-1-1', topicName: 'Damped Oscillations', marks: 14, text: 'Derive the equation of motion of a damped harmonic oscillator and solve for underdamped vibrations.', solved: false, hint: 'x(t) = A e^(-gamma t) cos(omega t).' },
        { id: 'q-pht-26a-7', number: 'Q13', moduleNumber: 2, topicId: 'top-phy-2-2', topicName: 'Grating', marks: 14, text: 'Derive expression for resolving power of a diffraction grating.', solved: false, hint: 'R = lambda / dlambda = n * N.' },
        { id: 'q-pht-26a-8', number: 'Q15', moduleNumber: 3, topicId: 'top-phy-3-1', topicName: '1D Box Model', marks: 14, text: 'Solve Schrodinger equation for an electron in a 1D box and find lowest 3 energy states.', solved: false, hint: 'E_n = n^2 h^2 / (8 m L^2).' },
        { id: 'q-pht-26a-9', number: 'Q17', moduleNumber: 4, topicId: 'top-phy-4-1', topicName: 'Maxwell Equations', marks: 14, text: 'Derive electromagnetic wave equation in free space from Maxwell equations and show that speed is 3x10^8 m/s.', solved: false, hint: 'c = 1 / sqrt(mu0 epsilon0).' },
        { id: 'q-pht-26a-10', number: 'Q19', moduleNumber: 5, topicId: 'top-phy-5-2', topicName: 'He-Ne Laser', marks: 14, text: 'Explain construction and working of a He-Ne laser with energy level diagram.', solved: false, hint: '632.8 nm red output.' }
      ]
    },
    {
      id: 'qp-pht-2026-b',
      title: 'KTU University Model Examination - Dec 2026 (Set B)',
      year: 2026,
      examType: 'Dec 2026 (Set B)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-pht-26b-1', number: 'Q1', moduleNumber: 2, topicId: 'top-phy-2-1', topicName: 'Air-Wedge', marks: 14, text: 'Explain the formation of interference fringes in an air-wedge and deduce formula for thickness of a thin foil.', solved: false, hint: 'beta = lambda L / (2t).' },
        { id: 'q-pht-26b-2', number: 'Q2', moduleNumber: 5, topicId: 'top-phy-5-1', topicName: 'Superconductivity', marks: 14, text: 'Differentiate between Type I and Type II superconductors with magnetization curves.', solved: false, hint: 'Type I has single Hc, Type II has Hc1 and Hc2.' }
      ]
    },
    {
      id: 'qp-pht-2025-a',
      title: 'KTU University Examination - Dec 2025 (Set A)',
      year: 2025,
      examType: 'Dec 2025 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-pht-25a-1', number: 'Q1', moduleNumber: 3, topicId: 'top-phy-3-1', topicName: '1D Box Model', marks: 14, text: 'An electron is confined to a 1D box of width 0.1 nm. Calculate its zero-point energy and wavelength of photon emitted when falling from n=2 to n=1.', solved: false, hint: 'E1 = h^2 / (8 m L^2) = 37.6 eV. Delta E = 3 E1 = 112.8 eV.' }
      ]
    },
    {
      id: 'qp-pht-2025-b',
      title: 'KTU University Examination - Dec 2025 (Set B)',
      year: 2025,
      examType: 'Dec 2025 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-pht-25b-1', number: 'Q1', moduleNumber: 5, topicId: 'top-phy-5-2', topicName: 'Fiber Optics', marks: 7, text: 'A step index fiber has core refractive index 1.48 and cladding 1.46. Calculate critical angle at core-cladding boundary and acceptance angle.', solved: false, hint: 'theta_c = sin^-1(1.46/1.48) = 80.6 deg.' }
      ]
    },
    {
      id: 'qp-pht-2024-a',
      title: 'KTU End-Semester Examination - Dec 2024 (Set A)',
      year: 2024,
      examType: 'Dec 2024 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-pht-24a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-phy-1-1', topicName: 'Damped Oscillations', marks: 7, text: 'Derive the differential equation of damped harmonic oscillator.', solved: true, hint: 'm d^2x/dt^2 + b dx/dt + kx = 0.' },
        { id: 'q-pht-24a-2', number: 'Q2', moduleNumber: 3, topicId: 'top-phy-3-1', topicName: '1D Box Model', marks: 14, text: 'Derive expression for energy of a particle in an infinite 1D potential well.', solved: true, hint: 'En = n^2 pi^2 hbar^2 / (2 m L^2).' }
      ]
    },
    {
      id: 'qp-pht-2024-b',
      title: 'KTU Supplementary Examination - Dec 2024 (Set B)',
      year: 2024,
      examType: 'Dec 2024 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-pht-24b-1', number: 'Q1', moduleNumber: 4, topicId: 'top-phy-4-1', topicName: 'Maxwell Equations', marks: 14, text: 'State Maxwell four equations in differential and integral forms.', solved: false, hint: 'div D = rho, div B = 0, curl E = -dB/dt, curl H = J + dD/dt.' }
      ]
    },
    {
      id: 'qp-pht-2023-a',
      title: 'KTU End-Semester Examination - Dec 2023 (Set A)',
      year: 2023,
      examType: 'Dec 2023 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-pht-23a-1', number: 'Q1', moduleNumber: 2, topicId: 'top-phy-2-1', topicName: 'Air-Wedge', marks: 7, text: 'In an air wedge experiment, fringe width is 0.25 mm for lambda = 600 nm. Find thickness of spacer 5 cm away.', solved: true, hint: 't = lambda L / (2 beta) = 0.06 mm.' }
      ]
    },
    {
      id: 'qp-pht-2023-b',
      title: 'KTU Supplementary Examination - Dec 2023 (Set B)',
      year: 2023,
      examType: 'Dec 2023 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-pht-23b-1', number: 'Q1', moduleNumber: 5, topicId: 'top-phy-5-1', topicName: 'Superconductivity', marks: 7, text: 'Calculate the critical field at 4.2 K for lead with Tc = 7.19 K and Hc(0) = 0.08 T.', solved: false, hint: 'Hc(T) = Hc(0)[1 - (T/Tc)^2] = 0.08 * [1 - (4.2/7.19)^2] = 0.0527 T.' }
      ]
    },
    {
      id: 'qp-pht-2022-a',
      title: 'KTU End-Semester Examination - Dec 2022 (Set A)',
      year: 2022,
      examType: 'Dec 2022 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-pht-22a-1', number: 'Q1', moduleNumber: 5, topicId: 'top-phy-5-1', topicName: 'Meissner Effect', marks: 7, text: 'Explain Meissner effect. Why does magnetic field cannot penetrate a superconductor?', solved: true, hint: 'Screening surface currents induce opposing field.' }
      ]
    },
    {
      id: 'qp-pht-2022-b',
      title: 'KTU Supplementary Examination - Dec 2022 (Set B)',
      year: 2022,
      examType: 'Dec 2022 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-pht-22b-1', number: 'Q1', moduleNumber: 2, topicId: 'top-phy-2-2', topicName: 'Grating', marks: 14, text: 'A grating has 6000 lines/cm. Find angular separation between D1 and D2 lines of sodium (589 nm and 589.6 nm) in second order.', solved: false, hint: 'd(theta) = n * dlambda / [(a+b) cos(theta)].' }
      ]
    },
    {
      id: 'qp-pht-2021-a',
      title: 'KTU End-Semester Examination - Dec 2021 (Set A)',
      year: 2021,
      examType: 'Dec 2021 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-pht-21a-1', number: 'Q1', moduleNumber: 3, topicId: 'top-phy-3-1', topicName: 'Schrodinger Equation', marks: 14, text: 'Derive time-independent Schrodinger wave equation for a free particle.', solved: true, hint: 'E = hbar^2 k^2 / (2m).' }
      ]
    },
    {
      id: 'qp-pht-2021-b',
      title: 'KTU Supplementary Examination - Dec 2021 (Set B)',
      year: 2021,
      examType: 'Dec 2021 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-pht-21b-1', number: 'Q1', moduleNumber: 5, topicId: 'top-phy-5-2', topicName: 'Fiber Optics', marks: 7, text: 'Explain acceptance angle and numerical aperture in an optical fiber with ray diagram.', solved: false, hint: 'NA = n1 sqrt(2 delta).' }
      ]
    },
    {
      id: 'qp-pht-2020-a',
      title: 'KTU End-Semester Examination - Dec 2020 (Set A)',
      year: 2020,
      examType: 'Dec 2020 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-pht-20a-1', number: 'Q1', moduleNumber: 4, topicId: 'top-phy-4-1', topicName: 'Displacement Current', marks: 7, text: 'Explain the concept of displacement current with an example of parallel plate capacitor.', solved: true, hint: 'ID = epsilon0 * d(Phi_E)/dt.' }
      ]
    },
    {
      id: 'qp-pht-2020-b',
      title: 'KTU Supplementary Examination - Dec 2020 (Set B)',
      year: 2020,
      examType: 'Dec 2020 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-pht-20b-1', number: 'Q1', moduleNumber: 1, topicId: 'top-phy-1-1', topicName: 'Damped Oscillations', marks: 7, text: 'Explain amplitude resonance in forced harmonic vibrations.', solved: false, hint: 'Occurs when driving frequency omega = sqrt(omega0^2 - 2 gamma^2).' }
      ]
    },
    {
      id: 'qp-pht-2019-a',
      title: 'KTU Regular Examination - Dec 2019 (Set A)',
      year: 2019,
      examType: 'Dec 2019 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-pht-19a-1', number: 'Q1', moduleNumber: 2, topicId: 'top-phy-2-1', topicName: 'Air-Wedge', marks: 7, text: 'Derive expression for fringe width in a wedge-shaped film.', solved: true, hint: 'beta = lambda / (2 theta).' },
        { id: 'q-pht-19a-2', number: 'Q2', moduleNumber: 5, topicId: 'top-phy-5-2', topicName: 'He-Ne Laser', marks: 14, text: 'Describe He-Ne laser with energy level diagram and role of helium.', solved: false, hint: 'Inelastic atom-atom collisions.' }
      ]
    },
    {
      id: 'qp-pht-2019-b',
      title: 'KTU Model Examination - Dec 2019 (Set B)',
      year: 2019,
      examType: 'Dec 2019 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-pht-19b-1', number: 'Q1', moduleNumber: 3, topicId: 'top-phy-3-1', topicName: '1D Box Model', marks: 14, text: 'Find probability of finding a particle in the central third of a 1D box in ground state.', solved: false, hint: 'int_{L/3}^{2L/3} (2/L) sin^2(pi x / L) dx = 1/3 + sqrt(3)/(2 pi) = 0.609.' }
      ]
    }
  ]
};
