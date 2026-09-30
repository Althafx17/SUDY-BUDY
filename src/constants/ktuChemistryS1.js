// KTU CYT100: Engineering Chemistry (2019 Scheme)
// 5 Modules + Previous Year Question Papers (2019 - 2026 December, 2 Sets per year)

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
          name: 'Electrode Potential & Reference Electrodes',
          status: 'studied',
          notes: 'Nernst Equation: E = E0 - (2.303RT/nF) log([M]/[M^n+]). Calomel electrode: Hg | Hg2Cl2(s) | KCl(sat). Glass electrode measures pH based on boundary potential across hydrated glass bulb.',
          tags: ['Core Theory', 'Nernst Equation'],
          subTopics: [
            { id: 'st-chem-1', name: 'Nernst equation derivation and EMF calculation', done: true },
            { id: 'st-chem-2', name: 'Calomel electrode and Standard Hydrogen Electrode (SHE)', done: true },
            { id: 'st-chem-3', name: 'Glass electrode and pH determination', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-1-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Derive the Nernst equation for single electrode potential. Calculate the potential of a zinc electrode immersed in 0.05 M ZnSO4 solution at 298 K (E0 = -0.76 V).',
              frequency: 'Every Year Numerical (Asked in 2024, 2022, 2020)',
              solved: true,
              hint: 'E = E0 + (0.0591/n) log[Zn2+]. With n = 2 and [Zn2+] = 0.05, E = -0.76 + (0.0591/2) log(0.05) = -0.798 V.'
            },
            {
              id: 'pq-chem-1-2',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Explain the construction and working of a Saturated Calomel Electrode with a neat sketch.',
              frequency: 'Asked in Dec 2023, Dec 2021, Dec 2019',
              solved: false,
              hint: 'Half cell reaction: Hg2Cl2 + 2e- <-> 2Hg + 2Cl-. Electrode potential is +0.2422 V at 25 C.'
            }
          ]
        },
        {
          id: 'top-chem-1-2',
          name: 'Corrosion Mechanisms & Cathodic Protection',
          status: 'needs-revision',
          notes: 'Electrochemical corrosion occurs via galvanic action. Anode undergoes oxidation. Cathode undergoes reduction (hydrogen evolution or oxygen absorption). Protection: Sacrificial anode (Mg, Zn) or Impressed current cathodic protection.',
          tags: ['High Weightage'],
          subTopics: [
            { id: 'st-chem-4', name: 'Mechanism of wet/electrochemical corrosion (O2 absorption and H2 evolution)', done: true },
            { id: 'st-chem-5', name: 'Galvanic and Pitting corrosion', done: false },
            { id: 'st-chem-6', name: 'Sacrificial anode and impressed current cathodic protection', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-1-3',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Explain electrochemical corrosion with oxygen absorption mechanism. Differentiate between galvanic corrosion and differential aeration corrosion.',
              frequency: 'Asked in Dec 2024, Dec 2022',
              solved: true,
              hint: 'Anode: Fe -> Fe2+ + 2e-. Cathode: O2 + 2H2O + 4e- -> 4OH-. Net rust: Fe(OH)2 oxidizes to Fe2O3.xH2O.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-cyt100-2',
      number: 2,
      name: 'Module 2: Spectroscopic Techniques & Analytical Methods',
      topics: [
        {
          id: 'top-chem-2-1',
          name: 'UV-Visible Spectroscopy & Beer-Lambert Law',
          status: 'studied',
          notes: 'Beer-Lambert law: A = epsilon * c * l. Electronic transitions: sigma->sigma*, n->sigma*, pi->pi*, n->pi*. Chromophores and auxochromes shift lambda_max (bathochromic red shift).',
          tags: ['Analytical', 'Optics'],
          subTopics: [
            { id: 'st-chem-7', name: 'Beer-Lamberts Law derivation and limitations', done: true },
            { id: 'st-chem-8', name: 'Electronic transitions and chromophores', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-2-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'State and derive Beer-Lambert law. A solution of concentration 0.002 M placed in a 1 cm cell transmits 40% of incident light. Calculate the molar extinction coefficient.',
              frequency: 'Asked in Dec 2024, Dec 2021',
              solved: true,
              hint: 'A = log(100/40) = 0.3979. Epsilon = A / (c * l) = 0.3979 / (0.002 * 1) = 198.95 L mol^-1 cm^-1.'
            }
          ]
        },
        {
          id: 'top-chem-2-2',
          name: 'IR Spectroscopy & Thermal Analysis (DTA)',
          status: 'needs-revision',
          notes: 'Condition for IR activity: change in dipole moment during vibration. Stretching and bending modes. DTA compares sample temp against inert reference (Al2O3).',
          tags: ['Instrumentation', 'Theory'],
          subTopics: [
            { id: 'st-chem-9', name: 'Vibrational modes of H2O and CO2 molecules', done: true },
            { id: 'st-chem-10', name: 'Principle and thermogram interpretation of DTA', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-2-2',
              year: 2023,
              exam: 'December Final (Set B)',
              marks: 7,
              text: 'Why is CO2 molecule IR active even though it has zero net dipole moment? Explain its fundamental vibrational modes.',
              frequency: 'Asked 3 times',
              solved: false,
              hint: 'Symmetric stretching produces no dipole change (IR inactive). Asymmetric stretching and degenerate bending modes produce net dipole moments and are IR active.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-cyt100-3',
      number: 3,
      name: 'Module 3: Polymers & Conducting Materials',
      topics: [
        {
          id: 'top-chem-3-1',
          name: 'Conducting Polymers (Polyaniline & Polyacetylene)',
          status: 'studied',
          notes: 'Conduction requires conjugated pi-electron backbone. Doping (p-doping with I2 or n-doping with Na) creates polarons and bipolarons enabling electrical conductivity.',
          tags: ['Materials Science', 'High Frequency'],
          subTopics: [
            { id: 'st-chem-11', name: 'Mechanism of electrical conduction in Polyacetylene', done: true },
            { id: 'st-chem-12', name: 'Protonic acid doping in Polyaniline', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-3-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Explain the mechanism of electrical conduction in Polyacetylene through p-doping and n-doping. List two engineering applications.',
              frequency: 'Asked in Dec 2024, Dec 2022, Dec 2019',
              solved: true,
              hint: 'Conjugated alternating single and double bonds. Oxidative p-doping removes electron creating polaron positive hole.'
            }
          ]
        },
        {
          id: 'top-chem-3-2',
          name: 'Specialty Polymers: Kevlar & Biodegradable PLA',
          status: 'not-started',
          notes: 'Kevlar: aromatic polyamide (poly p-phenylene terephthalamide). High tensile strength due to rigid aromatic rings and dense interchain hydrogen bonding.',
          tags: ['Synthesis', 'Polymers'],
          subTopics: [
            { id: 'st-chem-13', name: 'Synthesis and Kevlar fiber properties', done: false },
            { id: 'st-chem-14', name: 'Biodegradable polymer: Polylactic Acid (PLA)', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-3-2',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Give the synthesis, structural features, and exceptional properties of Kevlar.',
              frequency: 'Asked in Dec 2023, Dec 2020',
              solved: false,
              hint: 'Polycondensation of 1,4-phenylene-diamine with terephthaloyl chloride in N-methyl pyrrolidone.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-cyt100-4',
      number: 4,
      name: 'Module 4: Water Technology & Sewage Treatment',
      topics: [
        {
          id: 'top-chem-4-1',
          name: 'Hardness of Water & EDTA Titration',
          status: 'revised',
          notes: 'Temporary hardness (carbonates of Ca/Mg) removed by boiling. Permanent hardness (chlorides/sulfates of Ca/Mg). EDTA forms stable 1:1 complex with Ca2+ and Mg2+ at pH 10 with EBT indicator.',
          tags: ['Mandatory Numerical', 'EDTA'],
          subTopics: [
            { id: 'st-chem-15', name: 'Principle of EDTA complexometric titration', done: true },
            { id: 'st-chem-16', name: 'Calculation of temporary and permanent hardness in ppm', done: true }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-4-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: '50 mL of hard water required 25 mL of 0.01 M EDTA solution using EBT indicator. 50 mL of boiled water required 10 mL of EDTA. Calculate total, temporary, and permanent hardness in ppm CaCO3 equivalents.',
              frequency: 'Standard KTU Numerical (2024, 2023, 2021, 2019)',
              solved: true,
              hint: '1 mL 0.01 M EDTA = 1 mg CaCO3 eq. Total = (25*1*1000)/50 = 500 ppm. Permanent = (10*1*1000)/50 = 200 ppm. Temporary = 300 ppm.'
            }
          ]
        },
        {
          id: 'top-chem-4-2',
          name: 'Demineralization (Ion-Exchange) & Reverse Osmosis',
          status: 'studied',
          notes: 'Ion-exchange process produces mineral-free water using cation resin (R-H) and anion resin (R-OH). Reverse osmosis applies hydrostatic pressure greater than osmotic pressure across semipermeable membrane (cellulose acetate).',
          tags: ['Treatment', 'Desalination'],
          subTopics: [
            { id: 'st-chem-17', name: 'Ion exchange demineralization and resin regeneration', done: true },
            { id: 'st-chem-18', name: 'Reverse osmosis desalination process', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-4-2',
              year: 2023,
              exam: 'December Final (Set B)',
              marks: 7,
              text: 'Describe the Ion-Exchange process for complete demineralization of water with reactions and a neat diagram.',
              frequency: 'Asked in Dec 2023, Dec 2020',
              solved: false,
              hint: 'Cation: 2RH + Ca2+ -> R2Ca + 2H+. Anion: R-OH + Cl- -> RCl + OH-. Neutralization H+ + OH- -> H2O.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-cyt100-5',
      number: 5,
      name: 'Module 5: Fuels, Combustion & Lubricants',
      topics: [
        {
          id: 'top-chem-5-1',
          name: 'Calorific Value & Bomb Calorimeter',
          status: 'studied',
          notes: 'Higher Calorific Value (HCV) and Lower Calorific Value (LCV): LCV = HCV - 0.09 * %H * 587 cal/g. Bomb calorimeter formula: HCV = (W + w)(T2 - T1 - corrections) / m.',
          tags: ['Numerical', 'Bomb Calorimeter'],
          subTopics: [
            { id: 'st-chem-19', name: 'Bomb calorimeter construction and working', done: true },
            { id: 'st-chem-20', name: 'Calorific value numerical calculation with corrections', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-5-1',
              year: 2024,
              exam: 'December Final (Set A)',
              marks: 7,
              text: '0.8 g of a coal sample was combusted in a Bomb Calorimeter. The mass of water was 2000 g and water equivalent of calorimeter was 400 g. Rise in temperature was 2.5 C. If coal contains 4% hydrogen, calculate HCV and LCV.',
              frequency: 'Asked in Dec 2024, Dec 2022',
              solved: true,
              hint: 'HCV = (2000 + 400)*2.5 / 0.8 = 7500 cal/g. LCV = 7500 - 0.09*4*587 = 7288.68 cal/g.'
            }
          ]
        },
        {
          id: 'top-chem-5-2',
          name: 'Knocking, Octane/Cetane Number & Lubricants',
          status: 'needs-revision',
          notes: 'Octane rating measures petrol anti-knocking quality (isooctane = 100, n-heptane = 0). Cetane rating for diesel (hexadecane = 100). Lubricants mechanism: fluid film vs boundary lubrication.',
          tags: ['Theory', 'Petroleum'],
          subTopics: [
            { id: 'st-chem-21', name: 'Knocking in petrol and diesel engines and anti-knock agents', done: true },
            { id: 'st-chem-22', name: 'Mechanisms of lubrication and flash/fire points', done: false }
          ],
          previousQuestions: [
            {
              id: 'pq-chem-5-2',
              year: 2023,
              exam: 'December Final (Set A)',
              marks: 7,
              text: 'Define Octane number and Cetane number. How can the Octane number of petrol be improved?',
              frequency: 'Asked in Dec 2023, Dec 2021',
              solved: false,
              hint: 'Isomerization, reforming, catalytic cracking, and blending with ethanol or aromatics.'
            }
          ]
        }
      ]
    }
  ],

  // 16 Question Papers (2019 to 2026, 2 Sets per year)
  pastPapers: [
    {
      id: 'qp-cyt-2026-a',
      title: 'KTU University Model Examination - Dec 2026 (Set A)',
      year: 2026,
      examType: 'Dec 2026 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-cyt-26a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-chem-1-1', topicName: 'Electrode Potential', marks: 3, text: 'State the Nernst equation for an electrode reduction reaction and define each term.', solved: false, hint: 'E = E0 - (RT/nF) ln(1/[M^n+]).' },
        { id: 'q-cyt-26a-2', number: 'Q2', moduleNumber: 1, topicId: 'top-chem-1-2', topicName: 'Corrosion', marks: 3, text: 'Why does an iron nail rust faster in saline water than in freshwater?', solved: false, hint: 'NaCl ions increase electrical conductivity of electrolyte.' },
        { id: 'q-cyt-26a-3', number: 'Q3', moduleNumber: 2, topicId: 'top-chem-2-1', topicName: 'UV-Visible Spectroscopy', marks: 3, text: 'Distinguish between chromophore and auxochrome with suitable examples.', solved: false, hint: 'Chromophore absorbs UV (e.g. -NO2, -C=C-), auxochrome enhances color (e.g. -OH, -NH2).' },
        { id: 'q-cyt-26a-4', number: 'Q4', moduleNumber: 3, topicId: 'top-chem-3-1', topicName: 'Conducting Polymers', marks: 3, text: 'What are polarons and bipolarons in conducting polymers?', solved: false, hint: 'Charge carriers formed upon partial oxidation or reduction.' },
        { id: 'q-cyt-26a-5', number: 'Q5', moduleNumber: 4, topicId: 'top-chem-4-1', topicName: 'Hardness of Water', marks: 3, text: 'Why is a buffer solution of pH 10 added during EDTA titration of water hardness?', solved: false, hint: 'Maintains pH at 10 where Ca-EDTA and Mg-EDTA complexes are maximally stable.' },
        { id: 'q-cyt-26a-6', number: 'Q6', moduleNumber: 5, topicId: 'top-chem-5-1', topicName: 'Fuels', marks: 3, text: 'Define Gross Calorific Value and Net Calorific Value.', solved: false, hint: 'GCV includes latent heat of condensation of steam; NCV excludes it.' },
        { id: 'q-cyt-26a-7', number: 'Q11', moduleNumber: 1, topicId: 'top-chem-1-1', topicName: 'Electrode Potential', marks: 14, text: 'Describe the construction and working of a Glass electrode for pH measurement. Mention two advantages.', solved: false, hint: 'Boundary potential E_b developed across thin pH-sensitive glass membrane.' },
        { id: 'q-cyt-26a-8', number: 'Q13', moduleNumber: 2, topicId: 'top-chem-2-1', topicName: 'UV-Visible Spectroscopy', marks: 14, text: 'State Beer-Lambert law and derive the mathematical expression. Give two deviations of this law.', solved: false, hint: 'Derive A = epsilon * c * l. Chemical association and polychromatic light cause deviations.' },
        { id: 'q-cyt-26a-9', number: 'Q15', moduleNumber: 3, topicId: 'top-chem-3-1', topicName: 'Conducting Polymers', marks: 14, text: 'Explain the mechanism of electrical conduction in polyaniline and write its structure in leucoemeraldine and emeraldine salt states.', solved: false, hint: 'Protonic acid doping converts emeraldine base to highly conductive emeraldine salt.' },
        { id: 'q-cyt-26a-10', number: 'Q17', moduleNumber: 4, topicId: 'top-chem-4-1', topicName: 'Hardness of Water', marks: 14, text: '100 mL of sample water required 18 mL of 0.01 M EDTA. After boiling, 100 mL required 6 mL EDTA. Calculate temporary and permanent hardness in ppm.', solved: false, hint: 'Total = 180 ppm, Permanent = 60 ppm, Temporary = 120 ppm.' },
        { id: 'q-cyt-26a-11', number: 'Q19', moduleNumber: 5, topicId: 'top-chem-5-1', topicName: 'Bomb Calorimeter', marks: 14, text: 'Explain the determination of calorific value of solid fuel using a Bomb Calorimeter with a neat sketch and relevant equations.', solved: false, hint: 'HCV = (W + w)(delta T - acid corr - fuse corr)/m.' }
      ]
    },
    {
      id: 'qp-cyt-2026-b',
      title: 'KTU University Model Examination - Dec 2026 (Set B)',
      year: 2026,
      examType: 'Dec 2026 (Set B)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-cyt-26b-1', number: 'Q1', moduleNumber: 1, topicId: 'top-chem-1-2', topicName: 'Corrosion', marks: 14, text: 'Explain Sacrificial Anode and Impressed Current Cathodic Protection methods with diagrams.', solved: false, hint: 'Sacrificial: attach more electropositive metal (Zn). Impressed: apply DC negative potential to structure.' },
        { id: 'q-cyt-26b-2', number: 'Q2', moduleNumber: 4, topicId: 'top-chem-4-2', topicName: 'Water Technology', marks: 14, text: 'Explain Reverse Osmosis desalination process. What are the advantages over conventional methods?', solved: false, hint: 'Semipermeable membrane, low thermal energy requirement.' }
      ]
    },
    {
      id: 'qp-cyt-2025-a',
      title: 'KTU University Examination - Dec 2025 (Set A)',
      year: 2025,
      examType: 'Dec 2025 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-cyt-25a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-chem-1-1', topicName: 'Electrode Potential', marks: 7, text: 'Calculate the EMF of cell: Zn | Zn2+(0.1 M) || Cu2+(0.01 M) | Cu at 298 K. Given E0_Zn = -0.76 V and E0_Cu = +0.34 V.', solved: false, hint: 'E_cell = E0_cell - (0.0591/2) log([Zn2+]/[Cu2+]) = 1.10 - 0.0295 log(10) = 1.0705 V.' }
      ]
    },
    {
      id: 'qp-cyt-2025-b',
      title: 'KTU University Examination - Dec 2025 (Set B)',
      year: 2025,
      examType: 'Dec 2025 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-cyt-25b-1', number: 'Q1', moduleNumber: 2, topicId: 'top-chem-2-2', topicName: 'IR Spectroscopy', marks: 7, text: 'Discuss the principle and instrumentation of Differential Thermal Analysis (DTA).', solved: false, hint: 'Records temp difference delta T between sample and inert substance as temp is programmed.' }
      ]
    },
    {
      id: 'qp-cyt-2024-a',
      title: 'KTU End-Semester Examination - Dec 2024 (Set A)',
      year: 2024,
      examType: 'Dec 2024 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-cyt-24a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-chem-1-1', topicName: 'Electrode Potential', marks: 7, text: 'Derive Nernst equation for single electrode potential.', solved: true, hint: 'van t Hoff isotherm delta G = delta G0 + RT ln Q.' },
        { id: 'q-cyt-24a-2', number: 'Q2', moduleNumber: 4, topicId: 'top-chem-4-1', topicName: 'Hardness of Water', marks: 7, text: 'Explain the estimation of hardness of water by EDTA method.', solved: true, hint: 'EBT indicator forms wine-red complex; free EDTA steals metal ions yielding steel blue.' }
      ]
    },
    {
      id: 'qp-cyt-2024-b',
      title: 'KTU Supplementary Examination - Dec 2024 (Set B)',
      year: 2024,
      examType: 'Dec 2024 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-cyt-24b-1', number: 'Q1', moduleNumber: 3, topicId: 'top-chem-3-1', topicName: 'Conducting Polymers', marks: 7, text: 'Write notes on conducting polymers and their classifications.', solved: false, hint: 'Inherently conducting vs doped conducting polymers.' }
      ]
    },
    {
      id: 'qp-cyt-2023-a',
      title: 'KTU End-Semester Examination - Dec 2023 (Set A)',
      year: 2023,
      examType: 'Dec 2023 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-cyt-23a-1', number: 'Q1', moduleNumber: 4, topicId: 'top-chem-4-2', topicName: 'Demineralization', marks: 14, text: 'Explain the ion-exchange demineralization process of water treatment with diagram.', solved: true, hint: 'Separate cation and anion exchanger columns.' }
      ]
    },
    {
      id: 'qp-cyt-2023-b',
      title: 'KTU Supplementary Examination - Dec 2023 (Set B)',
      year: 2023,
      examType: 'Dec 2023 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-cyt-23b-1', number: 'Q1', moduleNumber: 5, topicId: 'top-chem-5-1', topicName: 'Bomb Calorimeter', marks: 7, text: 'A sample of coal has 80% C, 5% H, 1% S, and rest ash. Calculate HCV and LCV using Dulongs formula.', solved: false, hint: 'Dulong: HCV = (1/100)[8080 C + 34500(H - O/8) + 2240 S].' }
      ]
    },
    {
      id: 'qp-cyt-2022-a',
      title: 'KTU End-Semester Examination - Dec 2022 (Set A)',
      year: 2022,
      examType: 'Dec 2022 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-cyt-22a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-chem-1-2', topicName: 'Corrosion', marks: 14, text: 'Explain the mechanism of electrochemical corrosion when iron is exposed to an aerated neutral aqueous medium.', solved: true, hint: 'Rusting in oxygen-rich water.' }
      ]
    },
    {
      id: 'qp-cyt-2022-b',
      title: 'KTU Supplementary Examination - Dec 2022 (Set B)',
      year: 2022,
      examType: 'Dec 2022 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-cyt-22b-1', number: 'Q1', moduleNumber: 2, topicId: 'top-chem-2-1', topicName: 'UV-Visible Spectroscopy', marks: 7, text: 'Explain the different electronic transitions possible when organic molecules absorb UV radiation.', solved: false, hint: 'sigma -> sigma*, pi -> pi*, n -> sigma*, n -> pi*.' }
      ]
    },
    {
      id: 'qp-cyt-2021-a',
      title: 'KTU End-Semester Examination - Dec 2021 (Set A)',
      year: 2021,
      examType: 'Dec 2021 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-cyt-21a-1', number: 'Q1', moduleNumber: 3, topicId: 'top-chem-3-2', topicName: 'Kevlar', marks: 7, text: 'Explain the synthesis and applications of Kevlar.', solved: true, hint: 'Poly(p-phenylene terephthalamide).' }
      ]
    },
    {
      id: 'qp-cyt-2021-b',
      title: 'KTU Supplementary Examination - Dec 2021 (Set B)',
      year: 2021,
      examType: 'Dec 2021 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-cyt-21b-1', number: 'Q1', moduleNumber: 4, topicId: 'top-chem-4-1', topicName: 'Hardness of Water', marks: 7, text: 'Define boiler scale and sludge. What are their disadvantages in thermal power generation?', solved: false, hint: 'Poor thermal conductivity causes boiler tube explosion.' }
      ]
    },
    {
      id: 'qp-cyt-2020-a',
      title: 'KTU End-Semester Examination - Dec 2020 (Set A)',
      year: 2020,
      examType: 'Dec 2020 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-cyt-20a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-chem-1-1', topicName: 'Electrode Potential', marks: 14, text: 'Explain the measurement of electrode potential using Saturated Calomel Electrode.', solved: false, hint: 'Couple unknown with reference calomel cell.' }
      ]
    },
    {
      id: 'qp-cyt-2020-b',
      title: 'KTU Supplementary Examination - Dec 2020 (Set B)',
      year: 2020,
      examType: 'Dec 2020 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-cyt-20b-1', number: 'Q1', moduleNumber: 5, topicId: 'top-chem-5-2', topicName: 'Lubricants', marks: 7, text: 'Explain hydrodynamic and boundary lubrication mechanisms.', solved: true, hint: 'Fluid film separates metal asperities completely.' }
      ]
    },
    {
      id: 'qp-cyt-2019-a',
      title: 'KTU Regular Examination - Dec 2019 (Set A)',
      year: 2019,
      examType: 'Dec 2019 (Set A)',
      marks: 100,
      difficulty: 'Challenging',
      questions: [
        { id: 'q-cyt-19a-1', number: 'Q1', moduleNumber: 1, topicId: 'top-chem-1-2', topicName: 'Corrosion', marks: 7, text: 'What is differential aeration corrosion? Explain water-line corrosion.', solved: false, hint: 'Area with less oxygen becomes anodic and corrodes.' },
        { id: 'q-cyt-19a-2', number: 'Q2', moduleNumber: 4, topicId: 'top-chem-4-1', topicName: 'Hardness of Water', marks: 14, text: 'Standardize EDTA with CaCl2 and describe procedure for determining hardness.', solved: true, hint: 'Primary standard CaCO3 dissolved in HCl.' }
      ]
    },
    {
      id: 'qp-cyt-2019-b',
      title: 'KTU Model Examination - Dec 2019 (Set B)',
      year: 2019,
      examType: 'Dec 2019 (Set B)',
      marks: 100,
      difficulty: 'Moderate',
      questions: [
        { id: 'q-cyt-19b-1', number: 'Q1', moduleNumber: 2, topicId: 'top-chem-2-1', topicName: 'Beer-Lambert Law', marks: 7, text: 'State Beer-Lambert law. Explain why it fails at high concentrations.', solved: false, hint: 'Intermolecular interactions and refractive index changes.' }
      ]
    }
  ]
};
