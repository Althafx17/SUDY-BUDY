// KTU CYT100: Engineering Chemistry (2019 Scheme)
// 5 Modules + Comprehensive Previous Year Question Papers (2019 - 2026) with Step-by-Step Solutions

export const KTU_CHEMISTRY_S1 = {
  id: 'sub-cyt100',
  name: 'Engineering Chemistry',
  code: 'CYT100',
  color: 'rose',
  description: 'Electrochemistry, corrosion control, spectroscopic analytical methods, polymers, water treatment, and modern fuels under KTU 2019 Scheme.',
  instructor: 'KTU Dept. of Chemistry',
  examDate: '2026-12-18T09:30',
  examVenue: 'KTU Exam Hall 2',
  youtubeUrl: 'https://www.youtube.com/watch?v=JcI5Vnw0b2c',
  todos: [
    { id: 'todo-chem-1', text: 'Derive Nernst equation for single electrode potential', priority: 'high', done: true, createdAt: '2026-09-21' },
    { id: 'todo-chem-2', text: 'Practice EDTA hardness calculation numerical problems', priority: 'high', done: false, createdAt: '2026-09-23' },
    { id: 'todo-chem-3', text: 'Learn conduction mechanism in Polyaniline and Polyacetylene', priority: 'medium', done: false, createdAt: '2026-09-24' }
  ],
  modules: [
    {
      id: 'mod-cyt100-1',
      number: 1,
      name: 'Module 1: Electrochemistry & Corrosion',
      topics: [
        {
          id: 'top-chem-1-1',
          name: 'Electrode Potential, Reference Electrodes & Nernst Equation',
          status: 'studied',
          notes: 'Nernst Equation: E = E0 - (2.303RT/nF) log([M]/[M^n+]). At 298K, E = E0 + (0.0591/n) log[M^n+]. Calomel electrode: Hg | Hg2Cl2(s) | KCl(sat). Glass electrode: E_G = E0_G + 0.0591 pH.',
          tags: ['Core Theory', 'Nernst Equation', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-chem-1', name: 'Nernst equation derivation and EMF calculation', done: true },
            { id: 'st-chem-2', name: 'Calomel electrode and Standard Hydrogen Electrode (SHE)', done: true },
            { id: 'st-chem-3', name: 'Glass electrode and pH determination', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-1-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP (Set A)',
              marks: 7,
              text: 'Derive the Nernst equation for a single electrode potential. Calculate the potential of a zinc electrode dipped in 0.02 M ZnSO4 solution at 298 K (Given E0(Zn2+/Zn) = -0.76 V).',
              frequency: 'Every Year Numerical (2026, 2024, 2022, 2020)',
              solved: true,
              hint: 'Apply Nernst formula: E = E0 + (0.0591/n) log[Zn2+], with n = 2 and [Zn2+] = 0.02 M.',
              answer: 'Step 1: Reduction reaction for metal electrode:\nM^n+ + n e^- -> M(s)\n\nStep 2: From thermodynamics:\nΔG = ΔG0 + RT ln(Q)\nSince ΔG = -nFE and ΔG0 = -nFE0, and reaction quotient Q = [M] / [M^n+] = 1 / [M^n+]:\n-nFE = -nFE0 + RT ln(1 / [M^n+])\nDivide both sides by -nF:\nE = E0 - (RT / nF) ln(1 / [M^n+]) = E0 + (2.303RT / nF) log[M^n+].\nAt T = 298 K, R = 8.314 J/mol K, F = 96500 C:\nE = E0 + (0.0591 / n) log[M^n+].\n\nStep 3: Numerical calculation:\nFor Zn electrode: Zn2+ + 2e^- -> Zn (n = 2)\nE0 = -0.76 V, [Zn2+] = 0.02 M\nE = -0.76 + (0.0591 / 2) log(0.02)\nlog(0.02) = log(2 * 10^-2) = 0.3010 - 2 = -1.699\nE = -0.76 + 0.02955 * (-1.699) = -0.76 - 0.0502 = -0.8102 V.\n\nFinal Answer: E = -0.810 V.'
            },
            {
              id: 'pq-chem-1-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set B)',
              marks: 7,
              text: 'Explain the construction and working of a Saturated Calomel Electrode (SCE) with a neat labelled diagram. Write the electrode representation and half-cell reaction.',
              frequency: 'Asked in Dec 2024, Dec 2022, Dec 2019',
              solved: false,
              hint: 'Electrode representation: Hg | Hg2Cl2(s) | KCl(sat). Half reaction: Hg2Cl2 + 2e- <=> 2Hg + 2Cl-. Potential is +0.2422 V vs SHE at 298 K.',
              answer: 'Step 1: Electrode Representation:\nPt | Hg(l) | Hg2Cl2(s) | KCl(saturated solution)\n\nStep 2: Construction:\n- A glass tube having a bent side-tube for salt bridge connection.\n- Pure mercury (Hg) is placed at the bottom, covered with a paste of mercury and mercurous chloride (calomel, Hg2Cl2).\n- The remaining space is filled with a saturated solution of potassium chloride (KCl).\n- A platinum wire sealed inside a glass tube makes electrical contact with the mercury pool.\n\nStep 3: Working & Half-cell reaction:\nWhen acting as cathode (reduction):\nHg2Cl2(s) + 2e^- <=> 2Hg(l) + 2Cl^-\nPotential: E = E0 - (0.0591 / 2) log[Cl^-]^2 = E0 - 0.0591 log[Cl^-].\nFor saturated KCl at 298 K, E = +0.2422 V.\n\nStep 4: Advantages:\n- Reversible and stable potential.\n- Easy to construct, transport, and maintain.'
            },
            {
              id: 'pq-chem-1-3',
              year: 2021,
              exam: 'KTU July 2021 Final',
              marks: 3,
              text: 'Why is a glass electrode called an ion-selective electrode? Give its boundary potential formula.',
              frequency: 'Part A Definition (2021, 2019)',
              solved: true,
              hint: 'It selectively responds to H+ ions across a thin hydrated silicate glass membrane.',
              answer: '1. Why ion-selective: The thin, sensitive bulb made of special silicate glass (e.g., Corning 015) selectively exchanges H+ ions from the test solution with Na+/Li+ ions in the hydrated gel layers of the glass surface.\n2. Boundary potential equation:\nEb = E1 - E2 = (2.303 RT / F) log([H+]_test / [H+]_internal) = 0.0591 (pH_internal - pH_test) at 298 K.'
            }
          ]
        },
        {
          id: 'top-chem-1-2',
          name: 'Corrosion Mechanisms & Cathodic Protection',
          status: 'needs-revision',
          notes: 'Electrochemical corrosion: Anode undergoes oxidation. Cathode undergoes reduction (hydrogen evolution or oxygen absorption). Sacrificial anode: more active metal (Zn, Mg). Impressed current: DC current applied against corrosion potential.',
          tags: ['Corrosion', 'Cathodic Protection', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-chem-4', name: 'Mechanism of electrochemical corrosion (O2 absorption and H2 evolution)', done: true },
            { id: 'st-chem-5', name: 'Galvanic corrosion and Pitting corrosion', done: false },
            { id: 'st-chem-6', name: 'Cathodic protection (Sacrificial anode vs Impressed current)', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-1-4',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set A)',
              marks: 14,
              text: 'Explain the mechanism of electrochemical wet corrosion with: (i) Evolution of hydrogen, and (ii) Absorption of oxygen. Differentiate between sacrificial anode and impressed current cathodic protection methods.',
              frequency: 'Top Recurring 14-Mark Question (2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Anodic reaction in both is M -> M^n+ + n e^-. Hydrogen evolution occurs in acidic media; oxygen absorption occurs in neutral or alkaline aerated media.',
              answer: 'Step 1: Anodic Reaction (Common to both):\nMetal undergoes oxidation at the anode:\nFe(s) -> Fe2+(aq) + 2e^-\n\nStep 2: Cathodic Reactions:\n(i) Evolution of Hydrogen (Acidic environment, absence of oxygen):\n2H+(aq) + 2e^- -> H2(g)\nOverall reaction: Fe + 2H+ -> Fe2+ + H2(g).\n\n(ii) Absorption of Oxygen (Neutral/alkaline environment, aerated):\nO2 + 2H2O + 4e^- -> 4OH^-\nFe2+ and OH^- combine: Fe2+ + 2OH^- -> Fe(OH)2.\nFurther oxidation in presence of excess oxygen produces rust: 4Fe(OH)2 + O2 + 2H2O -> 2Fe2O3·xH2O (Hydrated ferric oxide / Rust).\n\nStep 3: Comparison of Cathodic Protection Methods:\n1. Sacrificial Anode Protection:\n- Principle: The metallic structure to be protected (cathode) is connected with a more electropositive/reactive sacrificial metal (e.g., Zn, Mg, Al).\n- External Power: No external power source required.\n- Anode Consumption: Anode gets consumed and needs periodic replacement.\n- Application: Buried pipelines, ship hulls, water heaters.\n\n2. Impressed Current Cathodic Protection (ICCP):\n- Principle: An external direct current (DC) from a power source is applied against the natural corrosion current, forcing the metal structure to become cathode.\n- External Power: Requires external DC power source (rectifier).\n- Anodes used: Inert/insoluble anodes like graphite, platinized titanium.\n- Application: Long-distance cross-country pipelines, offshore oil rigs, large storage tanks.'
            },
            {
              id: 'pq-chem-1-5',
              year: 2023,
              exam: 'KTU June 2023 Supplementary',
              marks: 3,
              text: 'Why does a small anodic area coupled with a large cathodic area result in severe and rapid corrosion?',
              frequency: 'Classic KTU Part A Conceptual (2023, 2020)',
              solved: true,
              hint: 'Current density at anode = total corrosion current / anode area. Small area creates very high dissolution rate.',
              answer: 'Reason:\n1. The rate of cathodic reduction determines the total electrons consumed, which must equal the electrons liberated at the anode.\n2. When the cathode area is large, the total cathodic reaction demand is high.\n3. Because the anode area is very small, all this electron release is concentrated over a tiny region.\n4. Therefore, the anodic current density (current per unit area) becomes extremely intense, causing localized, rapid pitting and catastrophic failure of the metal.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-cyt100-2',
      number: 2,
      name: 'Module 2: Spectroscopic Techniques & Analytical Applications',
      topics: [
        {
          id: 'top-chem-2-1',
          name: 'UV-Visible & Infrared (IR) Spectroscopy',
          status: 'studied',
          notes: 'Beer-Lambert Law: A = epsilon * c * l. UV involves electronic transitions (sigma->sigma*, pi->pi*, n->pi*). IR involves vibrational transitions. Hooke Law for stretching frequency: nu_bar = (1/2 pi c) sqrt(k / mu).',
          tags: ['Spectroscopy', 'Beer-Lambert', 'High Weightage'],
          subTopics: [
            { id: 'st-chem-7', name: 'Beer-Lambert Law derivation and limitations', done: true },
            { id: 'st-chem-8', name: 'Electronic transitions and selection rules in UV-Vis', done: true },
            { id: 'st-chem-9', name: 'Vibrational modes and Hooke Law frequency calculation in IR', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-2-1',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set B)',
              marks: 7,
              text: 'State and derive Beer-Lambert Law. A solution of a compound with molar absorptivity 4500 L/(mol cm) shows an absorbance of 0.65 in a 1 cm path length cell. Calculate its concentration.',
              frequency: 'Asked in 2025, 2023, 2021',
              solved: true,
              hint: 'A = epsilon * c * l => c = A / (epsilon * l).',
              answer: 'Step 1: Statement of Beer-Lambert Law:\nWhen a beam of monochromatic radiation passes through an absorbing solution, the rate of decrease of intensity with thickness (-dI/dx) is directly proportional to the intensity of incident light (I) and the molar concentration of the solution (c).\n\nStep 2: Derivation:\n-dI/dx = k\' · I · c\n-dI / I = k\' · c · dx\nIntegrating between limits I = I0 at x = 0, and I = I at x = l:\nln(I0 / I) = k\' · c · l\nConverting to base 10:\nlog(I0 / I) = (k\' / 2.303) · c · l = ε · c · l\nSince Absorbance A = log(I0 / I):\nA = ε · c · l (where ε is molar absorptivity/extinction coefficient).\n\nStep 3: Numerical calculation:\nGiven: ε = 4500 L mol^-1 cm^-1, l = 1 cm, A = 0.65\nc = A / (ε · l) = 0.65 / (4500 · 1) = 1.444 × 10^-4 mol/L.\n\nFinal Answer: Concentration c = 1.44 × 10^-4 M.'
            },
            {
              id: 'pq-chem-2-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set A)',
              marks: 7,
              text: 'Explain the fundamental vibrational modes of CO2 and H2O molecules and predict their IR activity.',
              frequency: 'Repeated 7-Mark Problem (2024, 2022, 2019)',
              solved: false,
              hint: 'Rule for IR activity: The vibration must cause a net change in dipole moment. Linear CO2 has 3N-5=4 modes; non-linear H2O has 3N-6=3 modes.',
              answer: 'Step 1: Degrees of freedom:\n- For non-linear H2O (N = 3): 3N - 6 = 9 - 6 = 3 normal modes.\n- For linear CO2 (N = 3): 3N - 5 = 9 - 5 = 4 normal modes.\n\nStep 2: Vibrations of H2O (Non-linear bent molecule):\n1. Symmetric stretching (ν1 ~ 3650 cm^-1): Dipole moment changes -> IR Active.\n2. Asymmetric stretching (ν3 ~ 3750 cm^-1): Dipole moment changes -> IR Active.\n3. Scissoring bending (ν2 ~ 1595 cm^-1): Dipole moment changes -> IR Active.\nConclusion: All 3 modes of H2O are IR Active.\n\nStep 3: Vibrations of CO2 (Linear O=C=O molecule):\n1. Symmetric stretching: Dipole moments cancel out (Δμ = 0) -> IR Inactive.\n2. Asymmetric stretching: Produces alternating dipole moment (Δμ != 0) -> IR Active.\n3. Bending modes (degenerate pair in xy and xz planes): Produces perpendicular dipole moment -> Both IR Active.\nConclusion: 3 modes are IR Active, 1 mode (symmetric stretch) is IR Inactive.'
            }
          ]
        },
        {
          id: 'top-chem-2-2',
          name: '1H NMR Spectroscopy & Chromatography',
          status: 'needs-revision',
          notes: 'NMR principle: Nuclear spin I=1/2 in magnetic field precesses at Larmor frequency nu = gamma B0 / 2pi. Chemical shift delta = (nu_sample - nu_TMS)/nu_operating * 10^6. Spin-spin splitting follows (n+1) rule.',
          tags: ['NMR', 'Chemical Shift', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-chem-10', name: 'Principle of 1H NMR and nuclear spin precession', done: false },
            { id: 'st-chem-11', name: 'Chemical shift, shielding/deshielding, and TMS standard', done: false },
            { id: 'st-chem-12', name: 'Spin-spin coupling, (n+1) splitting rule, and peak interpretation', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-2-3',
              year: 2026,
              exam: 'KTU 2026 Model Exam',
              marks: 14,
              text: 'Discuss the principle of 1H NMR spectroscopy. Explain chemical shift, shielding/deshielding effects, and predict the 1H NMR spectrum of Ethanol (CH3-CH2-OH) in terms of number of signals, chemical shifts, splitting patterns, and integration ratio.',
              frequency: '14-Mark Sure Shot NMR Question (2026, 2024, 2021)',
              solved: false,
              hint: 'Ethanol has 3 non-equivalent sets of protons: -CH3 (3H), -CH2- (2H), -OH (1H). Splitting: n+1 rule.',
              answer: 'Step 1: Principle of 1H NMR:\nProtons (1H, spin I = 1/2) possess magnetic moments. In an external magnetic field B0, their nuclear spins align either parallel (low energy α-state) or antiparallel (high energy β-state). Radiofrequency radiation induces resonance when ΔE = hν = γ(h/2π)B0.\n\nStep 2: Shielding & Deshielding:\n- Electrons surrounding a proton circulate and generate an induced local magnetic field opposing B0 (shielding, pushes signal upfield, lower δ).\n- Electronegative groups pull electrons away, reducing electron density (deshielding, pushes signal downfield, higher δ).\n\nStep 3: NMR Spectrum of pure Ethanol (CH3-CH2-OH):\n1. Number of signals: 3 signals (three chemically non-equivalent proton environments).\n2. Methyl protons (-CH3, 3 protons):\n- Chemical shift: δ ~ 1.2 ppm (upfield).\n- Splitting: Coupled to 2 adjacent protons of -CH2- => (2 + 1) = Triplet.\n- Peak intensity ratio: 1 : 2 : 1.\n3. Methylene protons (-CH2-, 2 protons):\n- Chemical shift: δ ~ 3.7 ppm (downfield due to adjacent electronegative oxygen).\n- Splitting: Coupled to 3 protons of -CH3 => (3 + 1) = Quartet.\n- Peak intensity ratio: 1 : 3 : 3 : 1.\n4. Hydroxyl proton (-OH, 1 proton):\n- Chemical shift: δ ~ 2.0 - 5.0 ppm (broad singlet due to rapid intermolecular exchange).\n5. Integration ratio of peak areas:\nRatio = 3 : 2 : 1 (Methyl : Methylene : Hydroxyl).'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-cyt100-3',
      number: 3,
      name: 'Module 3: Polymers, Conducting Polymers & Nanomaterials',
      topics: [
        {
          id: 'top-chem-3-1',
          name: 'Polymers & Conducting Polymers',
          status: 'studied',
          notes: 'Conducting polymers have conjugated pi-electron backbone (alternating single and double bonds). Examples: Polyacetylene, Polyaniline, Polypyrrole. Doping (p-doping or n-doping) introduces polarons and bipolarons to increase conductivity by 10^10 times.',
          tags: ['Polymers', 'Conducting Polymers', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-chem-13', name: 'Classification of polymers and glass transition temperature (Tg)', done: true },
            { id: 'st-chem-14', name: 'Conduction mechanism in Polyacetylene and Polyaniline', done: false },
            { id: 'st-chem-15', name: 'p-doping (I2, FeCl3) and n-doping (Na, K) processes', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-3-1',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set A)',
              marks: 7,
              text: 'What are conducting polymers? Explain the mechanism of electrical conduction in Polyacetylene through p-doping and n-doping.',
              frequency: 'Top Recurring Polymer Question (2025, 2023, 2020)',
              solved: true,
              hint: 'Polyacetylene (-CH=CH-)_n has conjugated pi bonds. p-doping oxidizes backbone creating positive polarons; n-doping reduces backbone creating negative polarons.',
              answer: 'Step 1: Definition of Conducting Polymers:\nPolymers with conjugated π-electron systems along their main backbone that exhibit metallic or semiconducting electrical conductivity upon chemical or electrochemical doping.\n\nStep 2: Conduction in Polyacetylene [-(CH=CH)-]n:\n1. Pristine polyacetylene has alternating single and double bonds, but has a small band gap (~1.4 eV), making it an insulator/semiconductor.\n2. Conduction occurs by creating mobile charge carriers (polarons, bipolarons, and solitons) via doping:\n\nStep 3: Doping Mechanisms:\n(i) p-Doping (Oxidative Doping):\n- Polymer is treated with electron acceptors / oxidizing agents like I2, Br2, or FeCl3.\n- Electrons are removed from the π-backbone:\n(CH)n + 3x/2 I2 -> [(CH)^x+]_n + x I3^-\n- A positive charge with an unpaired spin is created (polaron). Further oxidation pairs the spins into a bipolaron, which moves freely along the conjugated chain, imparting high electrical conductivity.\n\n(ii) n-Doping (Reductive Doping):\n- Polymer is treated with electron donors / reducing agents like molten Na or potassium naphthalide.\n- Electrons are added to the π-antibonding system:\n(CH)n + x Na -> [(CH)^x-]_n + x Na^+\n- Mobile negative charge carriers (radical anions) conduct electricity.'
            },
            {
              id: 'pq-chem-3-2',
              year: 2022,
              exam: 'KTU Dec 2022 Final',
              marks: 3,
              text: 'Define Glass Transition Temperature (Tg) of a polymer and state two factors influencing it.',
              frequency: 'Standard Part A Definition (2022, 2019)',
              solved: true,
              hint: 'Temperature below which amorphous polymer is hard and glassy, and above which it is rubbery and flexible.',
              answer: 'Definition:\nThe Glass Transition Temperature (Tg) is the critical temperature at which an amorphous polymer transitions from a hard, rigid, brittle (glassy) state to a flexible, compliant, rubbery state.\n\nFactors affecting Tg:\n1. Chain flexibility: Bulky side groups or rigid aromatic rings in the main chain decrease flexibility and increase Tg.\n2. Intermolecular forces: Presence of polar groups or hydrogen bonding increases intermolecular attraction and raises Tg.'
            }
          ]
        },
        {
          id: 'top-chem-3-2',
          name: 'Nanomaterials & Carbon Nanotubes (CNTs)',
          status: 'needs-revision',
          notes: 'Nanomaterials have at least one dimension between 1-100 nm. Carbon Nanotubes (CNTs): SWCNTs and MWCNTs. High tensile strength, thermal conductivity, and ballistic electron transport.',
          tags: ['Nanomaterials', 'CNTs'],
          subTopics: [
            { id: 'st-chem-16', name: 'Classification of nanomaterials (0D, 1D, 2D, 3D)', done: true },
            { id: 'st-chem-17', name: 'Synthesis of CNTs: Chemical Vapor Deposition (CVD) method', done: false },
            { id: 'st-chem-18', name: 'Applications of nanomaterials in catalysis, electronics, and medicine', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-3-3',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set A)',
              marks: 7,
              text: 'Describe the synthesis of Carbon Nanotubes (CNTs) by Chemical Vapor Deposition (CVD) method with a neat schematic. State two applications of CNTs.',
              frequency: 'Asked in 2024, 2022, 2020',
              solved: false,
              hint: 'Hydrocarbon gas (CH4 or C2H2) decomposes over transition metal catalyst nanoparticles (Fe, Co, Ni) at 700-1000 °C in a quartz tube furnace.',
              answer: 'Step 1: Principle & Apparatus:\n- Substrate with transition metal catalyst nanoparticles (Fe, Co, or Ni) is placed in a quartz tube inside a high-temperature tube furnace.\n- The chamber is purged with an inert gas (Ar or N2).\n\nStep 2: Process Steps:\n1. Temperature is raised to 700 °C - 1000 °C.\n2. Carbon precursor gas (methane CH4, ethylene C2H4, or acetylene C2H2) mixed with carrier gas (H2/Ar) is introduced.\n3. The hydrocarbon gas decomposes on the catalytic metal nanoparticles:\nCH4 -> C(s) + 2H2(g)\n4. Carbon atoms dissolve into the catalyst nanoparticle, reach saturation, and precipitate out in tubular form as cylindrical graphene sheets (CNTs).\n\nStep 3: Applications:\n1. Field-effect transistors and high-capacity lithium-ion battery electrodes.\n2. Ultra-strong lightweight structural nanocomposites for aerospace and sports equipment.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-cyt100-4',
      number: 4,
      name: 'Module 4: Fuels & Combustion Calculations',
      topics: [
        {
          id: 'top-chem-4-1',
          name: 'Calorific Value & Bomb Calorimeter',
          status: 'studied',
          notes: 'HCV = (W + w)(t2 - t1 - corrections) / m. Dulong formula: HCV = (1/100) [8080 C + 34500 (H - O/8) + 2240 S]. LCV = HCV - 0.09 H * 587 cal/g.',
          tags: ['Fuels', 'Bomb Calorimeter', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-chem-19', name: 'Gross vs Net Calorific Value and Dulong formula', done: true },
            { id: 'st-chem-20', name: 'Bomb calorimeter construction, experiment, and calculation', done: true },
            { id: 'st-chem-21', name: 'Numerical problems on Bomb calorimeter corrections', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-4-1',
              year: 2026,
              exam: 'KTU Jan 2026 Model QP',
              marks: 14,
              text: 'Explain the determination of Gross and Net calorific values of a solid fuel using Bomb Calorimeter with a neat sketch and relevant equations. Include all standard corrections.',
              frequency: 'Classic 14-Mark Question in KTU (2026, 2024, 2021, 2019)',
              solved: false,
              hint: 'HCV = (W + w)(t2 - t1 + cooling corr - acid corr - fuse corr) / mass of fuel. LCV = HCV - 0.09 * %H * 587.',
              answer: 'Step 1: Construction of Bomb Calorimeter:\n- A strong cylindrical stainless steel vessel (bomb) with an acid-resisting lining (enamel or titanium).\n- Equipped with an oxygen inlet valve and two electrical terminals connected to a resistance wire (fuse wire) dipping into a silica crucible holding fuel pellet.\n- The bomb is placed in an insulated copper calorimeter containing a known weight of water (W), fitted with an electrically driven stirrer and a precision Beckmann thermometer.\n\nStep 2: Experimental Procedure:\n- A known mass (m grams) of dried fuel is weighed into the crucible.\n- Bomb is sealed and pressurized with oxygen to 25 - 30 atmospheres.\n- Initial steady temperature t1 is noted.\n- Fuel is ignited electrically. Water is stirred, and maximum temperature t2 is recorded.\n\nStep 3: Formula and Corrections:\nGross Calorific Value (GCV / HCV):\nGCV = [(W + w)(t2 - t1 + c_cooling) - (c_acid + c_fuse + c_cotton)] / m\nwhere:\n- W = mass of water in calorimeter\n- w = water equivalent of calorimeter and apparatus\n- c_cooling = cooling correction\n- c_acid = correction for HNO3 and H2SO4 formed\n- c_fuse = correction for heat liberated by burning fuse wire.\n\nStep 4: Net Calorific Value (LCV / NCV):\nLCV = HCV - [0.09 × %H × 587] cal/g (accounting for latent heat of steam formed from hydrogen in fuel).'
            },
            {
              id: 'pq-chem-4-2',
              year: 2023,
              exam: 'KTU Dec 2023 Final',
              marks: 7,
              text: 'A 0.85 g coal sample was burnt in a bomb calorimeter. The water equivalent of the calorimeter was 420 g and mass of water was 2100 g. The rise in temperature was 2.45 °C. If the coal contains 4.5% hydrogen, calculate HCV and LCV (Latent heat = 587 cal/g).',
              frequency: 'Standard Calorimeter Numerical (2023, 2020)',
              solved: true,
              hint: 'HCV = (W + w) * deltaT / m. Then LCV = HCV - 0.09 * H * 587.',
              answer: 'Step 1: Given data:\nm = 0.85 g\nW = 2100 g\nw = 420 g\nΔT = 2.45 °C\n%H = 4.5%\nLatent heat L = 587 cal/g.\n\nStep 2: Calculate Gross Calorific Value (HCV):\nHCV = (W + w) · ΔT / m\n= (2100 + 420) · 2.45 / 0.85\n= 2520 · 2.45 / 0.85 = 6174 / 0.85 = 7263.53 cal/g.\n\nStep 3: Calculate Net Calorific Value (LCV):\nLCV = HCV - (0.09 · %H · 587)\n= 7263.53 - (0.09 · 4.5 · 587)\n= 7263.53 - 237.74 = 7025.79 cal/g.\n\nFinal Answer:\nHCV = 7263.5 cal/g (or 30.40 MJ/kg)\nLCV = 7025.8 cal/g (or 29.40 MJ/kg).'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-cyt100-5',
      number: 5,
      name: 'Module 5: Water Technology & Sewage Treatment',
      topics: [
        {
          id: 'top-chem-5-1',
          name: 'Hardness of Water & EDTA Titration',
          status: 'studied',
          notes: 'Temporary hardness: Bicarbonates of Ca and Mg (removed by boiling). Permanent hardness: Chlorides and sulfates of Ca and Mg. EDTA forms stable 1:1 wine red to blue chelates at pH 10 with EBT indicator.',
          tags: ['Water Tech', 'EDTA Method', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-chem-22', name: 'Types and units of hardness (ppm and mg/L CaCO3 equivalents)', done: true },
            { id: 'st-chem-23', name: 'EDTA complexometric titration principle and buffer chemistry', done: true },
            { id: 'st-chem-24', name: 'Numerical calculations of total, temporary, and permanent hardness', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-5-1',
              year: 2026,
              exam: 'KTU 2026 Model QP (Set B)',
              marks: 14,
              text: 'Explain the EDTA method for determining total, permanent, and temporary hardness of water. Why is NH3-NH4Cl buffer maintained at pH 10? Write the color changes with Eriochrome Black-T (EBT).',
              frequency: 'Universal KTU 14-Mark Question (2026, 2024, 2022, 2020)',
              solved: false,
              hint: 'EBT binds Ca2+/Mg2+ to form unstable wine-red complex. EDTA displaces EBT at pH 10 to form colorless stable chelate, releasing free blue EBT.',
              answer: 'Step 1: Principle of EDTA Method:\nDisodium salt of Ethylene Diamine Tetraacetic Acid (EDTA) forms stable, soluble 1:1 chelate complexes with Ca2+ and Mg2+ ions in alkaline medium:\nCa2+ + [EDTA]^2- -> [Ca-EDTA]^2- + 2H+\nMg2+ + [EDTA]^2- -> [Mg-EDTA]^2- + 2H+\n\nStep 2: Role of Buffer (pH 10):\n- A buffer solution of NH4OH + NH4Cl is added to maintain pH = 9 - 10.\n- At pH < 9, EDTA binds protons rather than metal ions.\n- At pH > 10, Ca2+ and Mg2+ precipitate out as hydroxides Ca(OH)2 and Mg(OH)2.\n\nStep 3: Indicator and Color Change:\n- Eriochrome Black-T (EBT) is added as metal ion indicator.\n- Initially, EBT forms an unstable complex with Mg2+:\nMg2+ + EBT -> [Mg-EBT] (Wine-red complex)\n- During titration, EDTA displaces EBT from the complex because [M-EDTA] is far more stable than [M-EBT]:\n[Mg-EBT] (wine red) + EDTA -> [Mg-EDTA] + EBT (Free blue)\n- End Point: Sharp color change from Wine Red to Steel Blue.\n\nStep 4: Procedure for Hardness Types:\n1. Total Hardness: Titrate untreated raw sample with standard EDTA.\n2. Permanent Hardness: Boil sample to precipitate bicarbonates as carbonates, filter, and titrate filtrate with EDTA.\n3. Temporary Hardness = Total Hardness - Permanent Hardness.'
            },
            {
              id: 'pq-chem-5-2',
              year: 2024,
              exam: 'KTU Dec 2024 Final (Set B)',
              marks: 7,
              text: 'A 50 mL sample of hard water consumed 18 mL of 0.01 M EDTA solution for total hardness titration. After boiling, filtering, and cooling, 50 mL of the sample consumed 11 mL of the same EDTA. Calculate Total, Permanent, and Temporary hardness in ppm.',
              frequency: 'Classic Hardness Numerical (2024, 2021, 2019)',
              solved: true,
              hint: '1 mL of 0.01 M EDTA = 1 mg CaCO3 equivalent. Total hardness = (V1 * 1 * 1000) / V_sample.',
              answer: 'Step 1: Formula:\n1 mL of 0.01 M EDTA = 0.01 millimoles of CaCO3 = 1 mg of CaCO3 equivalent.\nHardness in ppm (mg/L) = (Volume of EDTA consumed in mL × 1 mg × 1000 mL/L) / (Volume of sample in mL).\n\nStep 2: Total Hardness calculation:\nV_EDTA = 18 mL, V_sample = 50 mL\nTotal Hardness = (18 × 1 × 1000) / 50 = 360 ppm.\n\nStep 3: Permanent Hardness calculation:\nV_EDTA = 11 mL, V_sample = 50 mL\nPermanent Hardness = (11 × 1 × 1000) / 50 = 220 ppm.\n\nStep 4: Temporary Hardness calculation:\nTemporary Hardness = Total Hardness - Permanent Hardness\n= 360 - 220 = 140 ppm.\n\nFinal Answer:\n- Total Hardness = 360 ppm\n- Permanent Hardness = 220 ppm\n- Temporary Hardness = 140 ppm.'
            }
          ]
        },
        {
          id: 'top-chem-5-2',
          name: 'Ion Exchange Demineralization & Reverse Osmosis',
          status: 'needs-revision',
          notes: 'Ion exchange produces completely demineralized water using cation exchange resin (RH2) and anion exchange resin (R(OH)2). Reverse Osmosis (RO) applies pressure > osmotic pressure across semipermeable cellulose acetate/polyamide membrane.',
          tags: ['Demineralization', 'Reverse Osmosis'],
          subTopics: [
            { id: 'st-chem-25', name: 'Cation and anion exchange resins and regeneration chemistry', done: false },
            { id: 'st-chem-26', name: 'Desalination of brackish water by Reverse Osmosis (RO)', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-5-3',
              year: 2025,
              exam: 'KTU Dec 2025 Final (Set A)',
              marks: 7,
              text: 'Explain the desalination of sea water by Reverse Osmosis (RO) method with a neat labelled diagram. State two advantages of RO over thermal desalination.',
              frequency: 'Repeated 7-Mark Question (2025, 2023, 2021)',
              solved: true,
              hint: 'When hydrostatic pressure P > Pi is applied to concentrated saline side, pure water flows through semipermeable membrane to freshwater side.',
              answer: 'Step 1: Principle of Reverse Osmosis:\n- When two solutions of different concentrations are separated by a semipermeable membrane (SPM), solvent naturally flows from dilute to concentrated side (Osmosis).\n- If a hydrostatic pressure greater than the osmotic pressure (π ~ 15 - 40 atm) is applied on the concentrated/saline side, the natural flow is reversed.\n- Pure water is forced across the SPM leaving concentrated brine behind.\n\nStep 2: Membrane Material:\n- Thin film composite polyamide or cellulose acetate membranes having pore sizes ~ 0.1 - 1 nm.\n\nStep 3: Advantages over thermal distillation:\n1. Operates at ambient temperature with significantly lower energy consumption (no phase change/heat of vaporization needed).\n2. Compact footprint, low capital cost, and instantaneous start-up/shutdown capability.'
            }
          ]
        }
      ]
    }
  ]
};
