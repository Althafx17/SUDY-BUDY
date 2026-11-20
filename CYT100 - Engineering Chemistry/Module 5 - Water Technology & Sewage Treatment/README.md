# CYT100 · Module 5: Water Technology & Sewage Treatment

**Subject**: Engineering Chemistry (CYT100)
**Semester**: S1 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 5: Water Technology & Sewage Treatment

> **Quick Jump to Equation Areas**:
- [Area 1: Water Hardness Calculations & Equivalents](#-area%201%20water%20hardness%20calculations%20%20equivalents)
- [Area 2: EDTA Titration Hardness Formulas](#-area%202%20edta%20titration%20hardness%20formulas)
- [Area 3: Biological (BOD) & Chemical Oxygen Demand (COD)](#-area%203%20biological%20bod%20%20chemical%20oxygen%20demand%20cod)

### 📐 Area 1: Water Hardness Calculations & Equivalents
*$\text{CaCO}_3$ equivalent calculations for temporary and permanent hardness.*

#### 🔹 Equivalent of $\text{CaCO}_3$

$$\text{Equiv. } \text{CaCO}_3 = \frac{\text{Mass of hardness causing salt} \times 50}{\text{Equivalent weight of salt}} = \text{Mass} \times \text{Multiplication Factor}$$

> **Key Notes & Application**: Multiplication factors: $\text{Ca(HCO}_3)_2 = 100/162$; $\text{Mg(HCO}_3)_2 = 100/146$; $\text{CaSO}_4 = 100/136$; $\text{MgSO}_4 = 100/120$; $\text{CaCl}_2 = 100/111$; $\text{MgCl}_2 = 100/95$.

#### 🔹 Total, Temporary & Permanent Hardness

$$\text{Total Hardness} = \text{Temporary Hardness} + \text{Permanent Hardness}$$

> **Key Notes & Application**: Temporary = Carbonate/Bicarbonate hardness (removable by boiling); Permanent = Non-carbonate hardness (sulfates/chlorides).

### 📐 Area 2: EDTA Titration Hardness Formulas
*Standard volumetric determination using disodium EDTA and EBT indicator.*

#### 🔹 Total Hardness by EDTA Titration

$$\text{Hardness (ppm)} = \frac{V_{\text{EDTA}} \times M_{\text{EDTA}} \times 100 \times 1000}{V_{\text{water sample}}}$$

> **Key Notes & Application**: $1\text{ ppm} = 1\text{ mg/L} = 0.1\text{ mg/100 mL} = 0.07^\circ\text{Clark} = 0.1^\circ\text{French}$.

### 📐 Area 3: Biological (BOD) & Chemical Oxygen Demand (COD)
*Organic pollution metrics in industrial and domestic wastewater.*

#### 🔹 5-Day Biochemical Oxygen Demand ($\text{BOD}_5$)

$$\text{BOD}_5 = \frac{(D_1 - D_2) - (B_1 - B_2)(1 - P)}{P} \quad (\text{mg/L or ppm})$$

> **Key Notes & Application**: $D_1, D_2$ = dissolved oxygen before & after 5 days incubation at $20^\circ\text{C}$; $P$ = dilution factor ($V_{\text{sample}} / V_{\text{total}}$); $B_1, B_2$ = blank values.

#### 🔹 Chemical Oxygen Demand (COD)

$$\text{COD} = \frac{(V_b - V_s) \times N_{\text{FAS}} \times 8 \times 1000}{V_{\text{sample}}} \quad (\text{mg/L or ppm})$$

> **Key Notes & Application**: $V_b, V_s$ = titre values for blank and sample against standard ferrous ammonium sulfate; $8$ is the equivalent weight of oxygen.

---

## 📚 Syllabus & Core Topics

### Topic 1: Hardness of Water & EDTA Titration

**Tags**: `Water Tech` `EDTA Method` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Types and units of hardness (ppm and mg/L CaCO3 equivalents)
- [ ] EDTA complexometric titration principle and buffer chemistry
- [ ] Numerical calculations of total, temporary, and permanent hardness

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Explain the EDTA method for determining total, permanent, and temporary hardness of water. Why is NH3-NH4Cl buffer maintained at pH 10? Write the structure of EDTA and the chemical reactions involved with Eriochrome Black-T (EBT).

**Key Concept / Exam Tip**: EDTA forms 1:1 chelates with Ca2+ and Mg2+. At pH 10, [M-EDTA] is much more stable than [M-EBT]. Color change: Wine red to steel blue.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Principle of EDTA Complexometric Titration:
Disodium salt of Ethylene Diamine Tetraacetic Acid (EDTA) forms stable, soluble 1:1 octahedral chelate complexes with Ca^(2+) and Mg^(2+) ions in basic medium:
Ca^(2+) + [EDTA]^(2-) -> [Ca-EDTA]^(2-) + 2 H^+
Mg^(2+) + [EDTA]^(2-) -> [Mg-EDTA]^(2-) + 2 H^+

Role of NH4OH - NH4Cl Buffer (pH = 10):
1. The complex formation between EDTA and metal ions releases protons (H^+), which tends to lower the pH.
2. At lower pH (< 9), EDTA preferentially protonates rather than coordinating with Ca^(2+)/Mg^(2+).
3. At higher pH (> 10), calcium and magnesium ions precipitate out as insoluble hydroxides Ca(OH)2 and Mg(OH)2.
4. Therefore, an ammoniacal buffer (NH4OH + NH4Cl) is added to hold the solution strictly at pH 9 - 10.

Role of Indicator (Eriochrome Black-T, EBT) & Color Change:
1. EBT indicator in free form at pH 10 is sky blue.
2. When added to hard water, a small fraction of metal ions binds with EBT, forming an unstable wine-red complex:
   M^(2+) + EBT (blue) -> [M-EBT] (Wine Red complex).
3. During titration, EDTA reacts first with free Ca^(2+) and Mg^(2+) ions.
4. At the endpoint, EDTA displaces EBT from the wine-red [M-EBT] complex because the metal-EDTA stability constant is orders of magnitude higher:
   [M-EBT] (wine red) + EDTA -> [M-EDTA] (colorless) + EBT (Steel Blue).
5. Sharp Endpoint: Wine Red to Steel Blue.

Determination of Hardness Types:
1. Total Hardness: Titrate 50 mL raw hard water against standard EDTA using 2 mL buffer and EBT indicator (V1 mL).
2. Permanent Hardness: Boil 250 mL raw sample until volume reduces to 100 mL (precipitating temporary bicarbonates as CaCO3 and Mg(OH)2). Filter, wash, make up to original volume, and titrate 50 mL filtrate against EDTA (V2 mL).
3. Temporary Hardness = Total Hardness - Permanent Hardness.

Calculation Formula:
Hardness (ppm CaCO3) = [ V_EDTA × Normality_EDTA × 50 × 1000 ] / Volume of water sample.

Final Answer:
EDTA forms 1:1 chelates at pH 10. Color change: Wine red to steel blue. Temporary = Total - Permanent.

</details>

##### Q2 [2024 · 7 Marks]

> **Question**: A 50 mL sample of hard water consumed 18 mL of 0.01 M EDTA solution for total hardness titration. After boiling, filtering, and cooling, 50 mL of the sample consumed 11 mL of the same EDTA. Calculate Total, Permanent, and Temporary hardness in ppm of CaCO3 equivalent.

**Key Concept / Exam Tip**: 1 mL of 0.01 M EDTA = 1 mg of CaCO3 equivalent. Hardness (ppm) = (V * 1 * 1000) / V_sample.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Data:
- Sample volume V_sample = 50 mL
- Molarity of EDTA = 0.01 M
- Volume of EDTA for total hardness V1 = 18 mL
- Volume of EDTA for permanent hardness V2 = 11 mL.

Equivalence Principle:
1 L of 1 M EDTA = 1 mole of CaCO3 = 100 g of CaCO3.
1 mL of 0.01 M EDTA = 0.01 millimoles of CaCO3 = 1 mg of CaCO3 equivalent.

Step 1: Total Hardness:
Total Hardness (mg/L or ppm) =
[ Volume of EDTA (mL) × 1 mg/mL × 1000 mL/L ] / Volume of sample (mL)
= [ 18 × 1 × 1000 ] / 50
= 18000 / 50 = 360 ppm (or mg/L).

Step 2: Permanent Hardness:
Permanent Hardness (ppm) =
[ Volume of EDTA for boiled water (mL) × 1 mg/mL × 1000 ] / Volume of sample (mL)
= [ 11 × 1 × 1000 ] / 50
= 11000 / 50 = 220 ppm.

Step 3: Temporary Hardness:
Temporary Hardness = Total Hardness - Permanent Hardness
= 360 ppm - 220 ppm = 140 ppm.

Final Answer:
- Total Hardness = 360 ppm
- Permanent Hardness = 220 ppm
- Temporary Hardness = 140 ppm.

</details>

### Topic 2: Ion Exchange Demineralization & Reverse Osmosis

**Tags**: `Demineralization` `Reverse Osmosis`

**Subtopics Checklist**:
- [ ] Cation and anion exchange resins and regeneration chemistry
- [ ] Desalination of brackish water by Reverse Osmosis (RO)

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2025 · 7 Marks]

> **Question**: Explain the desalination of sea water by Reverse Osmosis (RO) method with a neat labelled diagram. State two advantages of RO over thermal desalination.

**Key Concept / Exam Tip**: Hydrostatic pressure P > Pi applied on saline side forces solvent through SPM against natural osmosis.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Principle of Reverse Osmosis (RO):
1. Normal Osmosis: When sea water and pure water are separated by a semipermeable membrane (SPM), pure water spontaneously flows through the SPM into the saline water until osmotic equilibrium is established.
2. Reverse Osmosis: If an external hydrostatic pressure greater than the osmotic pressure of sea water (P > π, typically 15 - 40 atm) is applied on the saline side, the chemical potential gradient is inverted.
3. Water molecules are forced to permeate from the concentrated sea water into the pure water chamber through the SPM, leaving behind dissolved inorganic salts and contaminants.

Membrane Specifications:
- Thin-Film Composite (TFC) polyamide or cellulose acetate membranes.
- Pore size: 0.1 - 1 nm (impermeable to hydrated ions Na+, Cl-, Ca2+, SO4 2-).

Apparatus Setup:
- High-pressure pump exerting 20 - 70 bar.
- Pressure vessel housing spiral-wound or hollow-fiber membrane modules.
- Reject stream channel for concentrated brine discharge.
- Permeate collection outlet for pure potable water.

Advantages of RO over Thermal Desalination:
1. Energy Efficient: Operates without phase transition (no heat of vaporization needed), reducing energy consumption by over 60% compared to multistage flash distillation.
2. Operational Simplicity: Compact modular footprint, operates at ambient temperature (eliminating severe boiler-scale issues), with rapid on-demand startup.

Final Answer:
RO applies hydrostatic pressure P > π on saline water, forcing pure water across a semipermeable membrane. Advantages: low energy consumption and ambient temperature operation.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
