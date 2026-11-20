# CYT100 · Module 1: Electrochemistry & Corrosion

**Subject**: Engineering Chemistry (CYT100)
**Semester**: S1 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 1: Electrochemistry & Corrosion

> **Quick Jump to Equation Areas**:
- [Area 1: Nernst Equation & Thermodynamic Parameters](#-area%201%20nernst%20equation%20%20thermodynamic%20parameters)
- [Area 2: Reference Electrodes & Potentiometric pH Measurement](#-area%202%20reference%20electrodes%20%20potentiometric%20ph%20measurement)
- [Area 3: Corrosion Kinetics & Pilling-Bedworth Ratio](#-area%203%20corrosion%20kinetics%20%20pillingbedworth%20ratio)

### 📐 Area 1: Nernst Equation & Thermodynamic Parameters
*Electrode potentials, cell EMF, Gibbs free energy, and equilibrium constants.*

#### 🔹 Nernst Equation for Single Electrode Potential

$$E = E^\circ - \frac{2.303 R T}{n F} \log_{10} \left( \frac{[\text{Red}]}{[\text{Ox}]} \right)$$

> **Key Notes & Application**: At $T = 298\text{ K}$ ($25^\circ\text{C}$): $E = E^\circ + \frac{0.0591}{n} \log_{10} [M^{n+}]$.

#### 🔹 Standard EMF of Electrochemical Cell

$$E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} \quad (\text{Standard Reduction Potentials})$$

> **Key Notes & Application**: Electrons flow from anode to cathode; spontaneous cell reaction has $E_{\text{cell}} > 0$.

#### 🔹 Free Energy & Equilibrium Constant Relationship

$$\Delta G^\circ = -n F E^\circ_{\text{cell}} = -2.303 R T \log_{10} K_{\text{eq}}$$

> **Key Notes & Application**: $F = 96500\text{ C/mol}$; $\Delta G^\circ < 0$ signifies thermodynamic spontaneity.

### 📐 Area 2: Reference Electrodes & Potentiometric pH Measurement
*Calomel and glass electrode potentials and pH calculations.*

#### 🔹 Saturated Calomel Electrode (SCE) Potential

$$E_{\text{SCE}} = E^\circ_{\text{calomel}} - 0.0591 \log [\text{Cl}^-] = +0.2422\text{ V (at } 298\text{ K)}$$

> **Key Notes & Application**: Reversible with respect to chloride ions: $\text{Hg}_2\text{Cl}_2 + 2e^- \rightleftharpoons 2\text{Hg} + 2\text{Cl}^-$.

#### 🔹 Glass Electrode Potential & pH Formula

$$E_G = E^\circ_G - 0.0591 \cdot \text{pH} \implies \text{pH} = \frac{E^\circ_G - E_{\text{SCE}} - E_{\text{cell}}}{0.0591}$$

> **Key Notes & Application**: Measured using cell: $\text{Glass Electrode} \mid \text{Unknown Solution} \mid\mid \text{SCE}$.

### 📐 Area 3: Corrosion Kinetics & Pilling-Bedworth Ratio
*Corrosion rate quantification and oxide protective layer criteria.*

#### 🔹 Corrosion Penetration Rate (CPR)

$$\text{CPR} = \frac{K \cdot W}{D \cdot A \cdot t} \quad (\text{mpy = mils per year})$$

> **Key Notes & Application**: $W$ = weight loss (mg), $D$ = density (g/cm$^3$), $A$ = surface area (in$^2$), $t$ = exposure time (hr), $K = 534$ for mpy.

#### 🔹 Pilling-Bedworth Ratio (PBR)

$$\text{PBR} = \frac{V_{\text{oxide}}}{V_{\text{metal}}} = \frac{M \cdot d}{n \cdot m \cdot D}$$

> **Key Notes & Application**: $M, D$ = molar mass & density of oxide; $m, d$ = atomic weight & density of metal; $n$ = metal atoms per oxide formula. Protective oxide if $1 \le \text{PBR} \le 2$.

---

## 📚 Syllabus & Core Topics

### Topic 1: Electrode Potential, Reference Electrodes & Nernst Equation

**Tags**: `Core Theory` `Nernst Equation` `Repeated PYQ`

**Subtopics Checklist**:
- [ ] Nernst equation derivation and EMF calculation
- [ ] Calomel electrode and Standard Hydrogen Electrode (SHE)
- [ ] Glass electrode and pH determination

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 7 Marks]

> **Question**: Derive the Nernst equation for a single electrode potential. Calculate the potential of a zinc electrode dipped in 0.02 M ZnSO4 solution at 298 K (Given E0(Zn2+/Zn) = -0.76 V).

**Key Concept / Exam Tip**: Apply Nernst formula: E = E0 + (0.0591/n) log[Zn2+], with n = 2 and [Zn2+] = 0.02 M.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Problem Statement:
Derive Nernst equation for a single reduction electrode potential and compute the electrode potential for Zn2+/Zn in 0.02 M ZnSO4 at 298 K.

Scientific Principle:
The relationship between electrode potential, standard reduction potential, temperature, and ionic concentration is established using van 't Hoff reaction isotherm.

Part 1: Derivation:
Consider the general reduction half-cell reaction:
M^(n+) + n e^- <=> M(s)
From thermodynamics, the free energy change is:
ΔG = ΔG0 + R T ln(Q)
where Q is the reaction quotient:
Q = [M] / [M^(n+)]
For a pure solid metal, active mass [M] = 1, so Q = 1 / [M^(n+)].

Electrical work done by the cell:
ΔG = -n F E
ΔG0 = -n F E0
Substitute into the isotherm:
-n F E = -n F E0 + R T ln(1 / [M^(n+)])
Divide both sides by -n F:
E = E0 - (R T / n F) ln(1 / [M^(n+)])
E = E0 + (2.303 R T / n F) log[M^(n+)]

At standard temperature T = 298 K (25 °C):
R = 8.314 J/(mol K), F = 96500 C/mol:
(2.303 · 8.314 · 298) / 96500 = 0.0591 V.
Therefore:
E = E0 + (0.0591 / n) log[M^(n+)].

Part 2: Numerical Calculation:
Given:
- Electrode reaction: Zn^(2+) + 2 e^- -> Zn(s)  => n = 2
- Standard reduction potential E0 = -0.76 V
- Concentration [Zn^(2+)] = 0.02 M

Substitution:
E = -0.76 + (0.0591 / 2) log(0.02)
log(0.02) = log(2 × 10^-2) = log(2) - 2 = 0.3010 - 2 = -1.6990.
E = -0.76 + 0.02955 · (-1.6990)
E = -0.76 - 0.0502 = -0.8102 V.

Final Answer:
E = -0.810 V (or -0.81 V).

</details>

##### Q2 [2024 · 7 Marks]

> **Question**: Explain the construction and working of a Saturated Calomel Electrode (SCE) with a neat labelled diagram. Write its electrode representation and half-cell reaction.

**Key Concept / Exam Tip**: Electrode representation: Hg | Hg2Cl2(s) | KCl(sat). Half reaction: Hg2Cl2 + 2e- <=> 2Hg + 2Cl-. Potential is +0.2422 V vs SHE at 298 K.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Aim & Principle:
Calomel electrode is a secondary reference electrode of the metal-sparingly soluble salt type, exhibiting a highly stable and reproducible potential.

Electrode Representation:
Pt(s) | Hg(l) | Hg2Cl2(s) | KCl(saturated solution)

Construction Details:
1. Consists of a cylindrical glass tube with a side tube for salt bridge electrical connection.
2. Pure, redistilled mercury (Hg) is placed at the bottom.
3. Above mercury lies a paste of mercurous chloride (calomel, Hg2Cl2) intimately ground with mercury and saturated KCl solution.
4. The remaining container is filled with saturated potassium chloride (KCl) solution which provides a constant chloride ion activity.
5. A platinum wire sealed inside a glass capillary tube provides electrical contact with the mercury pool at the bottom.

Working & Half-Cell Reactions:
The electrode is reversible to chloride ions:
When functioning as Cathode (Reduction):
Hg2Cl2(s) + 2 e^- <=> 2 Hg(l) + 2 Cl^-(aq)

When functioning as Anode (Oxidation):
2 Hg(l) + 2 Cl^-(aq) <=> Hg2Cl2(s) + 2 e^-

Electrode Potential Equation:
E = E0 - (R T / 2F) ln[Cl^-]^2 = E0 - (2.303 R T / F) log[Cl^-]
At 298 K, for saturated KCl solution:
E = +0.2422 V vs Standard Hydrogen Electrode (SHE).

Advantages:
- Simple to construct and maintain.
- Potential remains constant over long durations and temperature variations are easily compensated.

Final Answer:
SCE potential E = +0.2422 V at 298 K; Half-cell: Hg2Cl2 + 2e- <=> 2Hg + 2Cl-.

</details>

### Topic 2: Corrosion Mechanisms & Cathodic Protection

**Tags**: `Corrosion` `Cathodic Protection` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Mechanism of electrochemical corrosion (O2 absorption and H2 evolution)
- [ ] Galvanic corrosion and Pitting corrosion
- [ ] Cathodic protection (Sacrificial anode vs Impressed current)

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2025 · 14 Marks]

> **Question**: Explain the mechanism of electrochemical wet corrosion with: (i) Evolution of hydrogen, and (ii) Absorption of oxygen. Differentiate between sacrificial anode and impressed current cathodic protection methods.

**Key Concept / Exam Tip**: Anodic reaction in both is oxidation: Fe -> Fe2+ + 2e-. Hydrogen evolution occurs in acidic media. Oxygen absorption occurs in neutral/alkaline aerated media.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Principle of Wet/Electrochemical Corrosion:
Occurs when a metal comes in contact with a conducting liquid or electrolyte, forming microscopic galvanic cells consisting of separate anodic and cathodic areas.

Part 1: Anodic Reaction (Common to both mechanisms):
At the anodic areas, the base metal undergoes oxidation and dissolves into solution as metal ions:
Fe(s) -> Fe^(2+)(aq) + 2 e^-
Electrons liberated migrate through the metal to the cathodic areas.

Part 2: Cathodic Mechanisms:
Mechanism (i): Evolution of Hydrogen
- Environmental Condition: Acidic industrial environments (low pH, e.g., presence of HCl, H2SO4) in the absence or presence of dissolved oxygen.
- Reaction: Hydrogen ions in the acidic electrolyte accept electrons at the cathode surface:
  2 H^(+)(aq) + 2 e^- -> H2(g) ^
- Overall Reaction:
  Fe + 2 H^+ -> Fe^(2+) + H2 ^

Mechanism (ii): Absorption of Oxygen (Rusting of Iron)
- Environmental Condition: Neutral, slightly alkaline, or marine environments with dissolved atmospheric oxygen (e.g., tap water, sea water).
- Reaction: Dissolved oxygen is reduced in the presence of water to hydroxide ions:
  O2 + 2 H2O + 4 e^- -> 4 OH^-(aq)
- Rust Formation:
  Fe^(2+) ions from anode and OH^- ions from cathode diffuse and precipitate as ferrous hydroxide:
  Fe^(2+) + 2 OH^- -> Fe(OH)2(s)
  In the presence of excess dissolved oxygen, it is further oxidized to hydrated ferric oxide (Rust):
  4 Fe(OH)2 + O2 + 2 H2O -> 2 Fe2O3 · xH2O (Rust, reddish-brown precipitate).

Part 3: Comparison of Cathodic Protection Techniques:
1. Sacrificial Anode Cathodic Protection:
   - Principle: The metal structure to be protected is electrically bonded to a more electrochemically active metal (more negative reduction potential, e.g., Zn, Mg, Al).
   - Anode Behavior: The sacrificial metal becomes the anode, corrodes preferentially, and saves the parent structure.
   - Power: Operates passively without any external electric power source.
   - Maintenance: Requires periodic replacement of consumed sacrificial blocks.
   - Use Case: Underground water tanks, marine hulls, submerged pipelines.

2. Impressed Current Cathodic Protection (ICCP):
   - Principle: A direct current (DC) from an external power supply (rectifier) is impressed through an inert anode into the electrolyte towards the metal structure.
   - Anode Behavior: Insoluble/inert anodes (graphite, platinized titanium, high-silicon iron) are used; they do not dissolve rapidly.
   - Power: Requires continuous DC electrical supply.
   - Maintenance: High initial cost, needs regular voltage monitoring to avoid over-protection/hydrogen embrittlement.
   - Use Case: Long cross-country oil/gas pipelines, offshore platforms, large condenser tubes.

Final Answer:
Hydrogen evolution occurs in acidic media (2H+ + 2e- -> H2); Oxygen absorption occurs in neutral/aerated media (O2 + 2H2O + 4e- -> 4OH-). Sacrificial anode uses reactive metals (Zn/Mg) without power, while ICCP uses external DC power with inert anodes.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
