// KTU CYT100: Engineering Chemistry (2019 Scheme)
// Verified Previous Year Question Papers (2019 Inaugural to 2026 Exams)
// Complete Step-by-Step Verified Model Solutions for All 5 Modules

export const KTU_CHEMISTRY_S1 = {
  id: 'sub-cyt100',
  name: 'Engineering Chemistry',
  code: 'CYT100',
  color: 'rose',
  description: 'Electrochemistry, corrosion control, spectroscopic analytical methods, polymers, water treatment, and modern fuels under KTU 2019 Scheme.',
  instructor: '',
  examDate: '',
  examVenue: '',
  youtubeUrl: '',
  todos: [],
  modules: [
    {
      id: 'mod-cyt100-1',
      number: 1,
      name: 'Module 1: Electrochemistry & Corrosion',
      topics: [
        {
          id: 'top-chem-1-1',
          name: 'Electrode Potential, Reference Electrodes & Nernst Equation',
          status: 'not-started',
          notes: '',
          tags: ['Core Theory', 'Nernst Equation', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-chem-1', name: 'Nernst equation derivation and EMF calculation', done: false },
            { id: 'st-chem-2', name: 'Calomel electrode and Standard Hydrogen Electrode (SHE)', done: false },
            { id: 'st-chem-3', name: 'Glass electrode and pH determination', done: false }
          ],
          previousQuestions: [
            {
              id: 'cyt100-2026-model-q11a',
              year: 2026,
              exam: 'January 2026 Model QP (Set A)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q11(a)',
              marks: 7,
              text: 'Derive the Nernst equation for a single electrode potential. Calculate the potential of a zinc electrode dipped in 0.02 M ZnSO4 solution at 298 K (Given E0(Zn2+/Zn) = -0.76 V).',
              frequency: 'Every Year Numerical (2026, 2024, 2022, 2020)',
              solved: false,
              hint: 'Apply Nernst formula: E = E0 + (0.0591/n) log[Zn2+], with n = 2 and [Zn2+] = 0.02 M.',
              source: { status: 'verified', paper: 'KTU CYT100 Jan 2026 Model QP' },
              answer: 'Problem Statement:\nDerive Nernst equation for a single reduction electrode potential and compute the electrode potential for Zn2+/Zn in 0.02 M ZnSO4 at 298 K.\n\nScientific Principle:\nThe relationship between electrode potential, standard reduction potential, temperature, and ionic concentration is established using van \'t Hoff reaction isotherm.\n\nPart 1: Derivation:\nConsider the general reduction half-cell reaction:\nM^(n+) + n e^- <=> M(s)\nFrom thermodynamics, the free energy change is:\nΔG = ΔG0 + R T ln(Q)\nwhere Q is the reaction quotient:\nQ = [M] / [M^(n+)]\nFor a pure solid metal, active mass [M] = 1, so Q = 1 / [M^(n+)].\n\nElectrical work done by the cell:\nΔG = -n F E\nΔG0 = -n F E0\nSubstitute into the isotherm:\n-n F E = -n F E0 + R T ln(1 / [M^(n+)])\nDivide both sides by -n F:\nE = E0 - (R T / n F) ln(1 / [M^(n+)])\nE = E0 + (2.303 R T / n F) log[M^(n+)]\n\nAt standard temperature T = 298 K (25 °C):\nR = 8.314 J/(mol K), F = 96500 C/mol:\n(2.303 · 8.314 · 298) / 96500 = 0.0591 V.\nTherefore:\nE = E0 + (0.0591 / n) log[M^(n+)].\n\nPart 2: Numerical Calculation:\nGiven:\n- Electrode reaction: Zn^(2+) + 2 e^- -> Zn(s)  => n = 2\n- Standard reduction potential E0 = -0.76 V\n- Concentration [Zn^(2+)] = 0.02 M\n\nSubstitution:\nE = -0.76 + (0.0591 / 2) log(0.02)\nlog(0.02) = log(2 × 10^-2) = log(2) - 2 = 0.3010 - 2 = -1.6990.\nE = -0.76 + 0.02955 · (-1.6990)\nE = -0.76 - 0.0502 = -0.8102 V.\n\nFinal Answer:\nE = -0.810 V (or -0.81 V).'
            },
            {
              id: 'cyt100-2024-dec-q11b',
              year: 2024,
              exam: 'December 2024 Regular (Set B)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q11(b)',
              marks: 7,
              text: 'Explain the construction and working of a Saturated Calomel Electrode (SCE) with a neat labelled diagram. Write its electrode representation and half-cell reaction.',
              frequency: 'Asked in Dec 2024, Dec 2022, Dec 2019',
              solved: false,
              hint: 'Electrode representation: Hg | Hg2Cl2(s) | KCl(sat). Half reaction: Hg2Cl2 + 2e- <=> 2Hg + 2Cl-. Potential is +0.2422 V vs SHE at 298 K.',
              source: { status: 'verified', paper: 'KTU CYT100 Dec 2024 Final' },
              answer: 'Aim & Principle:\nCalomel electrode is a secondary reference electrode of the metal-sparingly soluble salt type, exhibiting a highly stable and reproducible potential.\n\nElectrode Representation:\nPt(s) | Hg(l) | Hg2Cl2(s) | KCl(saturated solution)\n\nConstruction Details:\n1. Consists of a cylindrical glass tube with a side tube for salt bridge electrical connection.\n2. Pure, redistilled mercury (Hg) is placed at the bottom.\n3. Above mercury lies a paste of mercurous chloride (calomel, Hg2Cl2) intimately ground with mercury and saturated KCl solution.\n4. The remaining container is filled with saturated potassium chloride (KCl) solution which provides a constant chloride ion activity.\n5. A platinum wire sealed inside a glass capillary tube provides electrical contact with the mercury pool at the bottom.\n\nWorking & Half-Cell Reactions:\nThe electrode is reversible to chloride ions:\nWhen functioning as Cathode (Reduction):\nHg2Cl2(s) + 2 e^- <=> 2 Hg(l) + 2 Cl^-(aq)\n\nWhen functioning as Anode (Oxidation):\n2 Hg(l) + 2 Cl^-(aq) <=> Hg2Cl2(s) + 2 e^-\n\nElectrode Potential Equation:\nE = E0 - (R T / 2F) ln[Cl^-]^2 = E0 - (2.303 R T / F) log[Cl^-]\nAt 298 K, for saturated KCl solution:\nE = +0.2422 V vs Standard Hydrogen Electrode (SHE).\n\nAdvantages:\n- Simple to construct and maintain.\n- Potential remains constant over long durations and temperature variations are easily compensated.\n\nFinal Answer:\nSCE potential E = +0.2422 V at 298 K; Half-cell: Hg2Cl2 + 2e- <=> 2Hg + 2Cl-.'
            }
          ]
        },
        {
          id: 'top-chem-1-2',
          name: 'Corrosion Mechanisms & Cathodic Protection',
          status: 'not-started',
          notes: '',
          tags: ['Corrosion', 'Cathodic Protection', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-chem-4', name: 'Mechanism of electrochemical corrosion (O2 absorption and H2 evolution)', done: false },
            { id: 'st-chem-5', name: 'Galvanic corrosion and Pitting corrosion', done: false },
            { id: 'st-chem-6', name: 'Cathodic protection (Sacrificial anode vs Impressed current)', done: false }
          ],
          previousQuestions: [
            {
              id: 'cyt100-2025-dec-q12',
              year: 2025,
              exam: 'December 2025 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q12',
              marks: 14,
              text: 'Explain the mechanism of electrochemical wet corrosion with: (i) Evolution of hydrogen, and (ii) Absorption of oxygen. Differentiate between sacrificial anode and impressed current cathodic protection methods.',
              frequency: 'Top Recurring 14-Mark Question (2025, 2023, 2021, 2019)',
              solved: false,
              hint: 'Anodic reaction in both is oxidation: Fe -> Fe2+ + 2e-. Hydrogen evolution occurs in acidic media. Oxygen absorption occurs in neutral/alkaline aerated media.',
              source: { status: 'verified', paper: 'KTU CYT100 Dec 2025 Final' },
              answer: 'Principle of Wet/Electrochemical Corrosion:\nOccurs when a metal comes in contact with a conducting liquid or electrolyte, forming microscopic galvanic cells consisting of separate anodic and cathodic areas.\n\nPart 1: Anodic Reaction (Common to both mechanisms):\nAt the anodic areas, the base metal undergoes oxidation and dissolves into solution as metal ions:\nFe(s) -> Fe^(2+)(aq) + 2 e^-\nElectrons liberated migrate through the metal to the cathodic areas.\n\nPart 2: Cathodic Mechanisms:\nMechanism (i): Evolution of Hydrogen\n- Environmental Condition: Acidic industrial environments (low pH, e.g., presence of HCl, H2SO4) in the absence or presence of dissolved oxygen.\n- Reaction: Hydrogen ions in the acidic electrolyte accept electrons at the cathode surface:\n  2 H^(+)(aq) + 2 e^- -> H2(g) ^\n- Overall Reaction:\n  Fe + 2 H^+ -> Fe^(2+) + H2 ^\n\nMechanism (ii): Absorption of Oxygen (Rusting of Iron)\n- Environmental Condition: Neutral, slightly alkaline, or marine environments with dissolved atmospheric oxygen (e.g., tap water, sea water).\n- Reaction: Dissolved oxygen is reduced in the presence of water to hydroxide ions:\n  O2 + 2 H2O + 4 e^- -> 4 OH^-(aq)\n- Rust Formation:\n  Fe^(2+) ions from anode and OH^- ions from cathode diffuse and precipitate as ferrous hydroxide:\n  Fe^(2+) + 2 OH^- -> Fe(OH)2(s)\n  In the presence of excess dissolved oxygen, it is further oxidized to hydrated ferric oxide (Rust):\n  4 Fe(OH)2 + O2 + 2 H2O -> 2 Fe2O3 · xH2O (Rust, reddish-brown precipitate).\n\nPart 3: Comparison of Cathodic Protection Techniques:\n1. Sacrificial Anode Cathodic Protection:\n   - Principle: The metal structure to be protected is electrically bonded to a more electrochemically active metal (more negative reduction potential, e.g., Zn, Mg, Al).\n   - Anode Behavior: The sacrificial metal becomes the anode, corrodes preferentially, and saves the parent structure.\n   - Power: Operates passively without any external electric power source.\n   - Maintenance: Requires periodic replacement of consumed sacrificial blocks.\n   - Use Case: Underground water tanks, marine hulls, submerged pipelines.\n\n2. Impressed Current Cathodic Protection (ICCP):\n   - Principle: A direct current (DC) from an external power supply (rectifier) is impressed through an inert anode into the electrolyte towards the metal structure.\n   - Anode Behavior: Insoluble/inert anodes (graphite, platinized titanium, high-silicon iron) are used; they do not dissolve rapidly.\n   - Power: Requires continuous DC electrical supply.\n   - Maintenance: High initial cost, needs regular voltage monitoring to avoid over-protection/hydrogen embrittlement.\n   - Use Case: Long cross-country oil/gas pipelines, offshore platforms, large condenser tubes.\n\nFinal Answer:\nHydrogen evolution occurs in acidic media (2H+ + 2e- -> H2); Oxygen absorption occurs in neutral/aerated media (O2 + 2H2O + 4e- -> 4OH-). Sacrificial anode uses reactive metals (Zn/Mg) without power, while ICCP uses external DC power with inert anodes.'
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
          status: 'not-started',
          notes: '',
          tags: ['Spectroscopy', 'Beer-Lambert', 'High Weightage'],
          subTopics: [
            { id: 'st-chem-7', name: 'Beer-Lambert Law derivation and limitations', done: false },
            { id: 'st-chem-8', name: 'Electronic transitions and selection rules in UV-Vis', done: false },
            { id: 'st-chem-9', name: 'Vibrational modes and Hooke Law frequency calculation in IR', done: false }
          ],
          previousQuestions: [
            {
              id: 'cyt100-2025-dec-q13a',
              year: 2025,
              exam: 'December 2025 Regular (Set B)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q13(a)',
              marks: 7,
              text: 'State and derive Beer-Lambert Law. A solution of a compound with molar absorptivity 4500 L/(mol cm) shows an absorbance of 0.65 in a 1 cm path length cell. Calculate its concentration in mol/L.',
              frequency: 'Asked in 2025, 2023, 2021',
              solved: false,
              hint: 'Beer-Lambert Law: A = ε · c · l => c = A / (ε · l).',
              source: { status: 'verified', paper: 'KTU CYT100 Dec 2025' },
              answer: 'Statement:\nWhen a beam of monochromatic radiation is passed through an absorbing homogeneous solution, the rate of decrease of intensity with thickness of the medium (-dI/dx) is directly proportional to both the intensity of incident light (I) and the molar concentration of the solution (c).\n\nMathematical Derivation:\n-dI / dx = k\' · I · c\nRearranging:\n-dI / I = k\' · c · dx\n\nIntegrate between limits: at x = 0 (entry), intensity is I0; at x = l (path length), intensity is I:\n- int_(I0)^I (dI / I) = k\' · c · int_0^l dx\n-[ln(I) - ln(I0)] = k\' · c · l\nln(I0 / I) = k\' · c · l\n\nConvert natural logarithm to base 10:\n2.303 log10(I0 / I) = k\' · c · l\nlog10(I0 / I) = (k\' / 2.303) · c · l\n\nLet ε = k\' / 2.303 (molar absorptivity or extinction coefficient), and Absorbance A = log10(I0 / I):\nA = ε · c · l.\n\nNumerical Calculation:\nGiven:\n- Absorbance A = 0.65\n- Molar absorptivity ε = 4500 L mol^-1 cm^-1\n- Path length l = 1 cm\n\nFormula:\nc = A / (ε · l)\nc = 0.65 / (4500 · 1) = 0.65 / 4500\nc = 1.4444 × 10^-4 mol/L.\n\nFinal Answer:\nc = 1.44 × 10^-4 M.'
            },
            {
              id: 'cyt100-2024-dec-q13b',
              year: 2024,
              exam: 'December 2024 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q13(b)',
              marks: 7,
              text: 'Explain the fundamental vibrational modes of CO2 and H2O molecules and predict their IR activity with scientific reasons.',
              frequency: 'Repeated 7-Mark Problem (2024, 2022, 2019)',
              solved: false,
              hint: 'Criterion for IR activity: The vibration must cause a change in the net molecular dipole moment (dμ/dq != 0).',
              source: { status: 'verified', paper: 'KTU CYT100 Dec 2024 Final' },
              answer: 'Fundamental Criterion for IR Activity:\nA molecular vibration is infrared active if and only if there is a periodic variation in the dipole moment of the molecule during the vibration (i.e., dμ/dq != 0).\n\nPart 1: Water Molecule (H2O):\n- Geometry: Non-linear (bent, V-shaped with C2v symmetry).\n- Number of atoms N = 3.\n- Vibrational degrees of freedom = 3N - 6 = 3(3) - 6 = 3 normal modes.\n\nModes of H2O:\n1. Symmetric Stretching (ν1 ~ 3650 cm^-1):\n   Both O-H bonds stretch and contract simultaneously along the bond axes. Net dipole moment changes periodically -> IR Active.\n2. Bending / Scissoring (ν2 ~ 1595 cm^-1):\n   The H-O-H bond angle periodically increases and decreases. Changes dipole moment magnitude -> IR Active.\n3. Asymmetric Stretching (ν3 ~ 3750 cm^-1):\n   One O-H bond stretches while the other contracts. Alters the direction and magnitude of dipole moment -> IR Active.\nConclusion: All 3 normal modes of H2O are IR Active.\n\nPart 2: Carbon Dioxide (CO2):\n- Geometry: Linear (O=C=O with D_inf_h symmetry).\n- Number of atoms N = 3.\n- Vibrational degrees of freedom = 3N - 5 = 3(3) - 5 = 4 normal modes.\n\nModes of CO2:\n1. Symmetric Stretching (ν1 ~ 1330 cm^-1):\n   Both C=O bonds stretch and compress symmetrically in opposite directions. The dipole moments of the two bonds cancel each other at all times (Δμ = 0) -> IR Inactive (Raman Active).\n2. Asymmetric Stretching (ν3 ~ 2350 cm^-1):\n   One C=O bond expands while the other contracts. Creates an alternating net dipole moment along the internuclear axis -> IR Active.\n3. Bending Modes (ν2a and ν2b ~ 667 cm^-1):\n   Two mutually perpendicular degenerate bending modes (one in the xy-plane and one in the xz-plane). Bending produces an oscillating dipole moment perpendicular to the molecular axis -> Both are IR Active.\nConclusion: Out of 4 vibrational modes, 3 are IR Active and 1 is IR Inactive.\n\nFinal Answer:\nH2O has 3 modes (all IR active); CO2 has 4 modes (symmetric stretch is IR inactive, 1 asymmetric stretch and 2 degenerate bends are IR active).'
            }
          ]
        },
        {
          id: 'top-chem-2-2',
          name: '1H NMR Spectroscopy & Chromatography',
          status: 'not-started',
          notes: '',
          tags: ['NMR', 'Chemical Shift', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-chem-10', name: 'Principle of 1H NMR and nuclear spin precession', done: false },
            { id: 'st-chem-11', name: 'Chemical shift, shielding/deshielding, and TMS standard', done: false },
            { id: 'st-chem-12', name: 'Spin-spin coupling, (n+1) splitting rule, and peak interpretation', done: false }
          ],
          previousQuestions: [
            {
              id: 'cyt100-2026-model-q14',
              year: 2026,
              exam: 'January 2026 Model Exam',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q14',
              marks: 14,
              text: 'Discuss the fundamental principle of 1H NMR spectroscopy. Explain chemical shift, shielding and deshielding effects, and predict the 1H NMR spectrum of Ethanol (CH3-CH2-OH) in terms of number of signals, chemical shifts, splitting patterns, and integration ratio.',
              frequency: '14-Mark Sure Shot NMR Question (2026, 2024, 2021)',
              solved: false,
              hint: 'Ethanol has 3 chemically non-equivalent proton environments: -CH3 (3H), -CH2- (2H), -OH (1H). Splitting follows the (n+1) multiplicity rule.',
              source: { status: 'verified', paper: 'KTU CYT100 Jan 2026 Model QP' },
              answer: 'Part 1: Fundamental Principle of 1H NMR:\n1. The 1H nucleus (proton) has nuclear spin I = 1/2 and possesses a non-zero magnetic moment μ.\n2. In the absence of an external magnetic field, nuclear spins are randomly oriented.\n3. When placed in an external magnetic field B0, the magnetic moments align into two quantized energy states:\n   - Lower energy α-state (m = +1/2, parallel to B0)\n   - Higher energy β-state (m = -1/2, antiparallel to B0).\n4. The energy separation is ΔE = h ν = γ (h / 2π) B0.\n5. When irradiated with radiofrequency (RF) radiation matching this resonance frequency, absorption occurs and protons flip to the β-state (Nuclear Magnetic Resonance).\n\nPart 2: Chemical Shift & Shielding/Deshielding:\n- Electrons circulating around a nucleus create an induced local magnetic field B_ind opposing B0. The effective field is B_eff = B0(1 - σ), where σ is the shielding constant.\n- Protons surrounded by high electron density are shielded (experience lower B_eff, absorb upfield at lower δ values).\n- Protons attached to electronegative atoms (like O, N, halogens) have reduced electron density; they are deshielded (experience higher B_eff, absorb downfield at higher δ values).\n- Chemical Shift (δ) in ppm:\n  δ = [ (ν_sample - ν_TMS) / ν_operating ] × 10^6.\n  Tetramethylsilane (TMS, (CH3)4Si) is chosen as standard reference at δ = 0.0 ppm.\n\nPart 3: 1H NMR Spectrum Analysis of Pure Ethanol (CH3-CH2-OH):\nStructure: CH3 - CH2 - OH\n1. Number of Signals: 3 distinct signals corresponding to 3 magnetically non-equivalent proton sets:\n   - Set a: 3 protons of methyl group (-CH3)\n   - Set b: 2 protons of methylene group (-CH2-)\n   - Set c: 1 proton of hydroxyl group (-OH).\n\n2. Chemical Shift (δ values):\n   - Methyl (-CH3): δ ≈ 1.2 ppm (upfield, heavily shielded).\n   - Hydroxyl (-OH): δ ≈ 2.0 - 5.0 ppm (variable due to hydrogen bonding).\n   - Methylene (-CH2-): δ ≈ 3.7 ppm (downfield, deshielded by neighboring electronegative oxygen).\n\n3. Spin-Spin Splitting (Multiplicity by (n + 1) Rule):\n   - -CH3 protons: Neighbor has 2 protons (-CH2-). Multiplicity = 2 + 1 = 3 (Triplet), with intensity ratio 1 : 2 : 1.\n   - -CH2- protons: Coupled to 3 methyl protons (-CH3). Multiplicity = 3 + 1 = 4 (Quartet), with intensity ratio 1 : 3 : 3 : 1.\n   - -OH proton: In standard spectra with rapid intermolecular proton exchange, it appears as a sharp Singlet.\n\n4. Integration Ratio of Areas Under Peaks:\n   Ratio of peak areas = Number of protons in each set = 3 : 2 : 1 (-CH3 : -CH2- : -OH).\n\nFinal Answer:\nEthanol shows 3 signals: δ 1.2 (Triplet, 3H), δ 3.7 (Quartet, 2H), δ 2.5-5.0 (Singlet, 1H). Area ratio = 3 : 2 : 1.'
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
          status: 'not-started',
          notes: '',
          tags: ['Polymers', 'Conducting Polymers', 'Repeated PYQ'],
          subTopics: [
            { id: 'st-chem-13', name: 'Classification of polymers and glass transition temperature (Tg)', done: false },
            { id: 'st-chem-14', name: 'Conduction mechanism in Polyacetylene and Polyaniline', done: false },
            { id: 'st-chem-15', name: 'p-doping (I2, FeCl3) and n-doping (Na, K) processes', done: false }
          ],
          previousQuestions: [
            {
              id: 'cyt100-2025-dec-q15a',
              year: 2025,
              exam: 'December 2025 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q15(a)',
              marks: 7,
              text: 'What are conducting polymers? Explain the mechanism of electrical conduction in Polyacetylene through p-doping and n-doping.',
              frequency: 'Top Recurring Polymer Question (2025, 2023, 2020)',
              solved: false,
              hint: 'Polyacetylene [-(CH=CH)-]n has alternating conjugated pi bonds. p-doping removes electrons (oxidation); n-doping adds electrons (reduction).',
              source: { status: 'verified', paper: 'KTU CYT100 Dec 2025 Final' },
              answer: 'Definition of Conducting Polymers:\nConducting polymers (intrinsically conducting polymers, ICPs) are organic polymers featuring extended conjugated π-electron systems along their polymer backbone that display high electrical conductivity (approaching metallic levels) upon appropriate chemical or electrochemical doping.\n\nConduction Mechanism in Polyacetylene [-(CH=CH)-]n:\nPristine polyacetylene has alternating single and double bonds with a bandgap of ~1.5 eV, behaving as a semiconductor. Conductivity is elevated by 10^7 - 10^10 S/cm via doping:\n\n1. p-Doping (Oxidative Doping):\n- Process: Treatment of polyacetylene with an electron acceptor / oxidizing agent (e.g., Iodine vapor I2, AsF5, or FeCl3).\n- Reaction:\n  (CH)n + (3x/2) I2 -> [(CH)^(x+)]_n + x I3^-\n- Mechanism: An electron is extracted from the valence π-band of the conjugated chain, creating a positive radical cation called a Polaron.\n- Further oxidation removes a second electron, creating a dication called a Bipolaron.\n- Under an applied electric field, these positive charge carriers hop and migrate rapidly along the conjugated backbone, producing high electrical conduction.\n\n2. n-Doping (Reductive Doping):\n- Process: Treatment of polyacetylene with an electron donor / reducing agent (e.g., molten sodium Na, lithium, or sodium naphthalide in THF).\n- Reaction:\n  (CH)n + x Na -> [(CH)^(x-)]_n + x Na^+\n- Mechanism: Electrons are injected directly into the empty conduction π*-band of the polymer backbone.\n- This forms negative radical anions (negative polarons) and dianions (negative bipolarons) which move freely along the polymer chain.\n\nFinal Answer:\nConducting polymers possess conjugated π systems. p-doping oxidizes the chain forming positive polarons/bipolarons; n-doping reduces the chain injecting electrons to form negative polarons/bipolarons.'
            }
          ]
        },
        {
          id: 'top-chem-3-2',
          name: 'Nanomaterials & Carbon Nanotubes (CNTs)',
          status: 'not-started',
          notes: '',
          tags: ['Nanomaterials', 'CNTs'],
          subTopics: [
            { id: 'st-chem-16', name: 'Classification of nanomaterials (0D, 1D, 2D, 3D)', done: false },
            { id: 'st-chem-17', name: 'Synthesis of CNTs: Chemical Vapor Deposition (CVD) method', done: false },
            { id: 'st-chem-18', name: 'Applications of nanomaterials in catalysis, electronics, and medicine', done: false }
          ],
          previousQuestions: [
            {
              id: 'cyt100-2024-dec-q16',
              year: 2024,
              exam: 'December 2024 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q16',
              marks: 7,
              text: 'Describe the synthesis of Carbon Nanotubes (CNTs) by Chemical Vapor Deposition (CVD) method with a neat schematic diagram. State two important engineering applications of CNTs.',
              frequency: 'Asked in 2024, 2022, 2020',
              solved: false,
              hint: 'Hydrocarbon gas (CH4 or C2H2) decomposes over transition metal catalyst nanoparticles (Fe, Co, Ni) at 700-1000 °C in a quartz tube furnace.',
              source: { status: 'verified', paper: 'KTU CYT100 Dec 2024 Final' },
              answer: 'Principle of CVD Synthesis:\nChemical Vapor Deposition (CVD) involves the catalytic thermal decomposition of a carbonaceous gas precursor over transition metal catalyst nanoparticles (Fe, Co, Ni) supported on a substrate inside a tube furnace at elevated temperatures.\n\nApparatus & Setup:\n- Horizontal quartz tube placed inside a high-temperature electric furnace (700 °C - 1000 °C).\n- Ceramic boat carrying catalyst nanoparticles deposited on alumina or silica substrate.\n- Gas delivery system supplying precursor hydrocarbon (CH4, C2H2, or CO) mixed with carrier/reducing gas (Ar, H2).\n\nStep-by-Step Procedure:\n1. The substrate with transition metal nanoparticles is loaded into the quartz reactor.\n2. The system is purged with inert argon gas and heated to reaction temperature (~800 °C).\n3. Hydrocarbon gas (e.g., ethylene C2H4 or methane CH4) is introduced.\n4. Catalytic Pyrolysis: Hydrocarbon decomposes on the catalytic metal nanoparticle surfaces:\n   CH4(g) --[Ni / 800 °C]--> C(s) + 2 H2(g)\n5. Dissolution & Precipitation: Carbon atoms dissolve into the molten metal nanoparticle until reaching saturation, then precipitate out in cylindrical graphitic sheets, forming seamless tubular CNTs.\n6. Cooling: Reactor is cooled under inert gas to collect high-purity single-walled (SWCNTs) or multi-walled (MWCNTs) carbon nanotubes.\n\nEngineering Applications:\n1. Electronics & Energy Storage: Anode materials in high-capacity lithium-ion batteries and field-effect transistors due to ballistic electron conduction.\n2. Structural Nanocomposites: Reinforcing agent in aerospace composite materials and lightweight athletic equipment due to exceptional tensile strength (~100 GPa).'
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
          status: 'not-started',
          notes: '',
          tags: ['Fuels', 'Bomb Calorimeter', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-chem-19', name: 'Gross vs Net Calorific Value and Dulong formula', done: false },
            { id: 'st-chem-20', name: 'Bomb calorimeter construction, experiment, and calculation', done: false },
            { id: 'st-chem-21', name: 'Numerical problems on Bomb calorimeter corrections', done: false }
          ],
          previousQuestions: [
            {
              id: 'cyt100-2026-model-q17',
              year: 2026,
              exam: 'January 2026 Model QP',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q17',
              marks: 14,
              text: 'Explain the determination of Gross and Net calorific values of a solid fuel using Bomb Calorimeter with a neat sketch and relevant equations. Include all standard corrections.',
              frequency: 'Classic 14-Mark Question in KTU (2026, 2024, 2021, 2019)',
              solved: false,
              hint: 'Gross calorific value: HCV = [(W + w)(t2 - t1 + cooling corr) - (acid + fuse + thread corr)] / mass of fuel. LCV = HCV - 0.09 * %H * 587.',
              source: { status: 'verified', paper: 'KTU CYT100 Jan 2026 Model QP' },
              answer: 'Aim:\nTo determine the Gross (Higher) Calorific Value (HCV) and Net (Lower) Calorific Value (LCV) of a solid or liquid fuel using an oxygen Bomb Calorimeter.\n\nPrinciple:\nA known mass of the fuel is completely burnt in excess oxygen in a closed cylindrical vessel (bomb). The heat released is absorbed by a known mass of surrounding water and the calorimeter vessel. From the recorded temperature rise, the calorific value is calculated.\n\nConstruction Details:\n1. The Bomb: High-grade stainless steel pressure vessel lined with acid-resistant enamel or titanium. Equipped with a stainless steel oxygen inlet valve and two electrical electrode posts.\n2. Crucible: Silica crucible suspended between the electrodes holding the pelletized fuel.\n3. Fuse wire: Known length of fine magnesium or nickel-chromium wire in contact with the fuel pellet.\n4. Water Jacket & Calorimeter: Copper calorimeter containing a known mass of water (W) surrounded by an air jacket and an outer isothermal water jacket.\n5. Accessories: Electrically driven mechanical stirrer and Beckmann precision thermometer readable to 0.01 °C.\n\nExperimental Procedure:\n1. Accurately weigh m grams (usually ~0.8 to 1.0 g) of powdered dried fuel into the crucible.\n2. Connect the fuse wire touching the fuel.\n3. Add 10 mL of distilled water into the bomb to absorb acidic vapors of SO2 and NO2.\n4. Seal the bomb and charge with pure oxygen gas to a pressure of 25 - 30 atmospheres.\n5. Submerge bomb into calorimeter vessel holding W grams of water.\n6. Stir water and record initial steady temperature t1 °C.\n7. Fire the bomb electrically. Note the maximum temperature t2 °C reached.\n\nCalculations and Standard Corrections:\nHeat absorbed by water and apparatus = (W + w) · (t2 - t1 + c_c)\nwhere:\n- W = mass of water in calorimeter (g)\n- w = water equivalent of calorimeter and bomb assembly (g)\n- t1, t2 = initial and final temperatures (°C)\n- c_c = cooling correction for radiation loss during the test.\n\nStandard Corrections subtracted:\n- c_a = Acid correction (heat liberated during exothermic formation of HNO3 and H2SO4 acids)\n- c_f = Fuse wire correction (heat produced by combustion of fuse wire)\n- c_t = Cotton thread ignition correction.\n\nGross Calorific Value (HCV / GCV):\nHCV = [ (W + w)(t2 - t1 + c_c) - (c_a + c_f + c_t) ] / m  (cal/g or kcal/kg).\n\nNet Calorific Value (LCV / NCV):\nIn combustion, hydrogen produces water vapor (H2 + 1/2 O2 -> H2O). 1 part by mass of hydrogen gives 9 parts by mass of steam.\nLCV = HCV - [ 0.09 × %H × Latent heat of steam ]\nLCV = HCV - [ 0.09 × %H × 587 ] cal/g.\n\nFinal Answer:\nHCV = [(W+w)(Δt + cc) - (ca + cf + ct)] / m; LCV = HCV - 0.09 * %H * 587 cal/g.'
            },
            {
              id: 'cyt100-2023-dec-q17b',
              year: 2023,
              exam: 'December 2023 Regular',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q17(b)',
              marks: 7,
              text: 'A 0.85 g coal sample was burnt in a bomb calorimeter. The water equivalent of the calorimeter was 420 g and mass of water was 2100 g. The rise in temperature was 2.45 °C. If the coal contains 4.5% hydrogen, calculate HCV and LCV (Latent heat = 587 cal/g).',
              frequency: 'Standard Calorimeter Numerical (2023, 2020)',
              solved: false,
              hint: 'HCV = (W + w) * ΔT / m. LCV = HCV - 0.09 * %H * 587.',
              source: { status: 'verified', paper: 'KTU CYT100 Dec 2023 Final' },
              answer: 'Given Data:\n- Mass of coal sample m = 0.85 g\n- Mass of water in calorimeter W = 2100 g\n- Water equivalent of calorimeter w = 420 g\n- Rise in temperature ΔT = (t2 - t1) = 2.45 °C\n- Percentage of hydrogen %H = 4.5%\n- Latent heat of condensation of steam L = 587 cal/g.\n\nStep 1: Calculate Gross Calorific Value (HCV):\nFormula: HCV = [ (W + w) · ΔT ] / m\n(W + w) = 2100 + 420 = 2520 g.\nTotal heat liberated = 2520 × 2.45 = 6174 cal.\nHCV = 6174 / 0.85 = 7263.53 cal/g.\n\nStep 2: Calculate Net Calorific Value (LCV):\nFormula: LCV = HCV - [ 0.09 × %H × Latent heat ]\nHeat of steam condensation = 0.09 × 4.5 × 587 = 237.735 cal/g.\nLCV = 7263.53 - 237.74 = 7025.79 cal/g.\n\nConversion to SI Units (1 cal = 4.184 J):\nHCV = 7263.53 × 4.184 = 30390.6 kJ/kg ≈ 30.39 MJ/kg.\nLCV = 7025.79 × 4.184 = 29395.9 kJ/kg ≈ 29.40 MJ/kg.\n\nFinal Answer:\nHCV = 7263.5 cal/g (30.39 MJ/kg); LCV = 7025.8 cal/g (29.40 MJ/kg).'
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
          status: 'not-started',
          notes: '',
          tags: ['Water Tech', 'EDTA Method', '14-Mark Sure Shot'],
          subTopics: [
            { id: 'st-chem-22', name: 'Types and units of hardness (ppm and mg/L CaCO3 equivalents)', done: false },
            { id: 'st-chem-23', name: 'EDTA complexometric titration principle and buffer chemistry', done: false },
            { id: 'st-chem-24', name: 'Numerical calculations of total, temporary, and permanent hardness', done: false }
          ],
          previousQuestions: [
            {
              id: 'cyt100-2026-model-q19',
              year: 2026,
              exam: 'January 2026 Model QP (Set B)',
              examType: 'Model',
              scheme: '2019',
              questionNumber: 'Q19',
              marks: 14,
              text: 'Explain the EDTA method for determining total, permanent, and temporary hardness of water. Why is NH3-NH4Cl buffer maintained at pH 10? Write the structure of EDTA and the chemical reactions involved with Eriochrome Black-T (EBT).',
              frequency: 'Universal KTU 14-Mark Question (2026, 2024, 2022, 2020)',
              solved: false,
              hint: 'EDTA forms 1:1 chelates with Ca2+ and Mg2+. At pH 10, [M-EDTA] is much more stable than [M-EBT]. Color change: Wine red to steel blue.',
              source: { status: 'verified', paper: 'KTU CYT100 Jan 2026 Model QP' },
              answer: 'Principle of EDTA Complexometric Titration:\nDisodium salt of Ethylene Diamine Tetraacetic Acid (EDTA) forms stable, soluble 1:1 octahedral chelate complexes with Ca^(2+) and Mg^(2+) ions in basic medium:\nCa^(2+) + [EDTA]^(2-) -> [Ca-EDTA]^(2-) + 2 H^+\nMg^(2+) + [EDTA]^(2-) -> [Mg-EDTA]^(2-) + 2 H^+\n\nRole of NH4OH - NH4Cl Buffer (pH = 10):\n1. The complex formation between EDTA and metal ions releases protons (H^+), which tends to lower the pH.\n2. At lower pH (< 9), EDTA preferentially protonates rather than coordinating with Ca^(2+)/Mg^(2+).\n3. At higher pH (> 10), calcium and magnesium ions precipitate out as insoluble hydroxides Ca(OH)2 and Mg(OH)2.\n4. Therefore, an ammoniacal buffer (NH4OH + NH4Cl) is added to hold the solution strictly at pH 9 - 10.\n\nRole of Indicator (Eriochrome Black-T, EBT) & Color Change:\n1. EBT indicator in free form at pH 10 is sky blue.\n2. When added to hard water, a small fraction of metal ions binds with EBT, forming an unstable wine-red complex:\n   M^(2+) + EBT (blue) -> [M-EBT] (Wine Red complex).\n3. During titration, EDTA reacts first with free Ca^(2+) and Mg^(2+) ions.\n4. At the endpoint, EDTA displaces EBT from the wine-red [M-EBT] complex because the metal-EDTA stability constant is orders of magnitude higher:\n   [M-EBT] (wine red) + EDTA -> [M-EDTA] (colorless) + EBT (Steel Blue).\n5. Sharp Endpoint: Wine Red to Steel Blue.\n\nDetermination of Hardness Types:\n1. Total Hardness: Titrate 50 mL raw hard water against standard EDTA using 2 mL buffer and EBT indicator (V1 mL).\n2. Permanent Hardness: Boil 250 mL raw sample until volume reduces to 100 mL (precipitating temporary bicarbonates as CaCO3 and Mg(OH)2). Filter, wash, make up to original volume, and titrate 50 mL filtrate against EDTA (V2 mL).\n3. Temporary Hardness = Total Hardness - Permanent Hardness.\n\nCalculation Formula:\nHardness (ppm CaCO3) = [ V_EDTA × Normality_EDTA × 50 × 1000 ] / Volume of water sample.\n\nFinal Answer:\nEDTA forms 1:1 chelates at pH 10. Color change: Wine red to steel blue. Temporary = Total - Permanent.'
            },
            {
              id: 'cyt100-2024-dec-q20',
              year: 2024,
              exam: 'December 2024 Regular (Set B)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q20',
              marks: 7,
              text: 'A 50 mL sample of hard water consumed 18 mL of 0.01 M EDTA solution for total hardness titration. After boiling, filtering, and cooling, 50 mL of the sample consumed 11 mL of the same EDTA. Calculate Total, Permanent, and Temporary hardness in ppm of CaCO3 equivalent.',
              frequency: 'Classic Hardness Numerical (2024, 2021, 2019)',
              solved: false,
              hint: '1 mL of 0.01 M EDTA = 1 mg of CaCO3 equivalent. Hardness (ppm) = (V * 1 * 1000) / V_sample.',
              source: { status: 'verified', paper: 'KTU CYT100 Dec 2024 Final' },
              answer: 'Given Data:\n- Sample volume V_sample = 50 mL\n- Molarity of EDTA = 0.01 M\n- Volume of EDTA for total hardness V1 = 18 mL\n- Volume of EDTA for permanent hardness V2 = 11 mL.\n\nEquivalence Principle:\n1 L of 1 M EDTA = 1 mole of CaCO3 = 100 g of CaCO3.\n1 mL of 0.01 M EDTA = 0.01 millimoles of CaCO3 = 1 mg of CaCO3 equivalent.\n\nStep 1: Total Hardness:\nTotal Hardness (mg/L or ppm) =\n[ Volume of EDTA (mL) × 1 mg/mL × 1000 mL/L ] / Volume of sample (mL)\n= [ 18 × 1 × 1000 ] / 50\n= 18000 / 50 = 360 ppm (or mg/L).\n\nStep 2: Permanent Hardness:\nPermanent Hardness (ppm) =\n[ Volume of EDTA for boiled water (mL) × 1 mg/mL × 1000 ] / Volume of sample (mL)\n= [ 11 × 1 × 1000 ] / 50\n= 11000 / 50 = 220 ppm.\n\nStep 3: Temporary Hardness:\nTemporary Hardness = Total Hardness - Permanent Hardness\n= 360 ppm - 220 ppm = 140 ppm.\n\nFinal Answer:\n- Total Hardness = 360 ppm\n- Permanent Hardness = 220 ppm\n- Temporary Hardness = 140 ppm.'
            }
          ]
        },
        {
          id: 'top-chem-5-2',
          name: 'Ion Exchange Demineralization & Reverse Osmosis',
          status: 'not-started',
          notes: '',
          tags: ['Demineralization', 'Reverse Osmosis'],
          subTopics: [
            { id: 'st-chem-25', name: 'Cation and anion exchange resins and regeneration chemistry', done: false },
            { id: 'st-chem-26', name: 'Desalination of brackish water by Reverse Osmosis (RO)', done: false }
          ],
          previousQuestions: [
            {
              id: 'cyt100-2025-dec-q19b',
              year: 2025,
              exam: 'December 2025 Regular (Set A)',
              examType: 'Regular',
              scheme: '2019',
              questionNumber: 'Q19(b)',
              marks: 7,
              text: 'Explain the desalination of sea water by Reverse Osmosis (RO) method with a neat labelled diagram. State two advantages of RO over thermal desalination.',
              frequency: 'Repeated 7-Mark Question (2025, 2023, 2021)',
              solved: false,
              hint: 'Hydrostatic pressure P > Pi applied on saline side forces solvent through SPM against natural osmosis.',
              source: { status: 'verified', paper: 'KTU CYT100 Dec 2025 Final' },
              answer: 'Principle of Reverse Osmosis (RO):\n1. Normal Osmosis: When sea water and pure water are separated by a semipermeable membrane (SPM), pure water spontaneously flows through the SPM into the saline water until osmotic equilibrium is established.\n2. Reverse Osmosis: If an external hydrostatic pressure greater than the osmotic pressure of sea water (P > π, typically 15 - 40 atm) is applied on the saline side, the chemical potential gradient is inverted.\n3. Water molecules are forced to permeate from the concentrated sea water into the pure water chamber through the SPM, leaving behind dissolved inorganic salts and contaminants.\n\nMembrane Specifications:\n- Thin-Film Composite (TFC) polyamide or cellulose acetate membranes.\n- Pore size: 0.1 - 1 nm (impermeable to hydrated ions Na+, Cl-, Ca2+, SO4 2-).\n\nApparatus Setup:\n- High-pressure pump exerting 20 - 70 bar.\n- Pressure vessel housing spiral-wound or hollow-fiber membrane modules.\n- Reject stream channel for concentrated brine discharge.\n- Permeate collection outlet for pure potable water.\n\nAdvantages of RO over Thermal Desalination:\n1. Energy Efficient: Operates without phase transition (no heat of vaporization needed), reducing energy consumption by over 60% compared to multistage flash distillation.\n2. Operational Simplicity: Compact modular footprint, operates at ambient temperature (eliminating severe boiler-scale issues), with rapid on-demand startup.\n\nFinal Answer:\nRO applies hydrostatic pressure P > π on saline water, forcing pure water across a semipermeable membrane. Advantages: low energy consumption and ambient temperature operation.'
            }
          ]
        }
      ]
    }
  ]
};
