# CYT100 · Module 2: Spectroscopic Techniques & Analytical Applications

**Subject**: Engineering Chemistry (CYT100)
**Semester**: S1 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 2: Spectroscopic Techniques & Analytical Applications

> **Quick Jump to Equation Areas**:
- [Area 1: Beer-Lambert Law & Absorption Photometry](#-area%201%20beerlambert%20law%20%20absorption%20photometry)
- [Area 2: IR Spectroscopy & Hooke’s Law for Vibrational Frequency](#-area%202%20ir%20spectroscopy%20%20hookes%20law%20for%20vibrational%20frequency)
- [Area 3: 1H-NMR Spectroscopy & Chemical Shift](#-area%203%201hnmr%20spectroscopy%20%20chemical%20shift)

### 📐 Area 1: Beer-Lambert Law & Absorption Photometry
*Light attenuation, absorbance, and concentration measurements.*

#### 🔹 Beer-Lambert Absorption Law

$$A = \log_{10}\left(\frac{I_0}{I}\right) = \epsilon \cdot c \cdot l$$

> **Key Notes & Application**: $A$ = absorbance (unitless); $\epsilon$ = molar absorptivity (L$\cdot$mol$^{-1}\cdot$cm$^{-1}$); $c$ = concentration (mol/L); $l$ = path length (cm).

#### 🔹 Transmittance to Absorbance Conversion

$$A = -\log_{10}(T) = 2 - \log_{10}(\%T) \quad (T = I / I_0)$$

> **Key Notes & Application**: When $T = 100\%$, $A = 0$; when $T = 10\%$, $A = 1$; when $T = 1\%$, $A = 2$.

### 📐 Area 2: IR Spectroscopy & Hooke’s Law for Vibrational Frequency
*Harmonic oscillator model, wavenumber, and vibrational degrees of freedom.*

#### 🔹 Hooke’s Law for Diatomic Vibrational Frequency

$$\bar{\nu} = \frac{1}{2\pi c} \sqrt{\frac{k}{\mu}} \quad (\text{cm}^{-1})$$

> **Key Notes & Application**: $k$ = bond force constant (dynes/cm); $\mu = \frac{m_1 m_2}{m_1 + m_2}$ = reduced mass (g); $c = 3 \times 10^{10}\text{ cm/s}$.

#### 🔹 Vibrational Degrees of Freedom

$$\text{Linear Molecules: } 3N - 5, \qquad \text{Non-Linear Molecules: } 3N - 6$$

> **Key Notes & Application**: $N$ = number of atoms in the molecule. (e.g., $\text{CO}_2$ has $3(3)-5 = 4$ modes; $\text{H}_2\text{O}$ has $3(3)-6 = 3$ modes).

### 📐 Area 3: 1H-NMR Spectroscopy & Chemical Shift
*Nuclear resonance frequency, chemical shifts, and multiplicity.*

#### 🔹 Chemical Shift Definition (\delta Scale)

$$\delta = \frac{\nu_{\text{sample}} - \nu_{\text{TMS}}}{\nu_{\text{operating}}} \times 10^6 \quad (\text{ppm})$$

> **Key Notes & Application**: TMS (Tetramethylsilane) is the universal internal standard reference set at $\delta = 0\text{ ppm}$.

#### 🔹 Spin-Spin Splitting Rule (Multiplicity)

$$M = n + 1$$

> **Key Notes & Application**: $n$ = number of equivalent neighboring protons giving rise to singlet (1), doublet (2), triplet (3), or quartet (4).

---

## 📚 Syllabus & Core Topics

### Topic 1: UV-Visible & Infrared (IR) Spectroscopy

**Tags**: `Spectroscopy` `Beer-Lambert` `High Weightage`

**Subtopics Checklist**:
- [ ] Beer-Lambert Law derivation and limitations
- [ ] Electronic transitions and selection rules in UV-Vis
- [ ] Vibrational modes and Hooke Law frequency calculation in IR

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2025 · 7 Marks]

> **Question**: State and derive Beer-Lambert Law. A solution of a compound with molar absorptivity 4500 L/(mol cm) shows an absorbance of 0.65 in a 1 cm path length cell. Calculate its concentration in mol/L.

**Key Concept / Exam Tip**: Beer-Lambert Law: A = ε · c · l => c = A / (ε · l).

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Statement:
When a beam of monochromatic radiation is passed through an absorbing homogeneous solution, the rate of decrease of intensity with thickness of the medium (-dI/dx) is directly proportional to both the intensity of incident light (I) and the molar concentration of the solution (c).

Mathematical Derivation:
-dI / dx = k' · I · c
Rearranging:
-dI / I = k' · c · dx

Integrate between limits: at x = 0 (entry), intensity is I0; at x = l (path length), intensity is I:
- int_(I0)^I (dI / I) = k' · c · int_0^l dx
-[ln(I) - ln(I0)] = k' · c · l
ln(I0 / I) = k' · c · l

Convert natural logarithm to base 10:
2.303 log10(I0 / I) = k' · c · l
log10(I0 / I) = (k' / 2.303) · c · l

Let ε = k' / 2.303 (molar absorptivity or extinction coefficient), and Absorbance A = log10(I0 / I):
A = ε · c · l.

Numerical Calculation:
Given:
- Absorbance A = 0.65
- Molar absorptivity ε = 4500 L mol^-1 cm^-1
- Path length l = 1 cm

Formula:
c = A / (ε · l)
c = 0.65 / (4500 · 1) = 0.65 / 4500
c = 1.4444 × 10^-4 mol/L.

Final Answer:
c = 1.44 × 10^-4 M.

</details>

##### Q2 [2024 · 7 Marks]

> **Question**: Explain the fundamental vibrational modes of CO2 and H2O molecules and predict their IR activity with scientific reasons.

**Key Concept / Exam Tip**: Criterion for IR activity: The vibration must cause a change in the net molecular dipole moment (dμ/dq != 0).

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Fundamental Criterion for IR Activity:
A molecular vibration is infrared active if and only if there is a periodic variation in the dipole moment of the molecule during the vibration (i.e., dμ/dq != 0).

Part 1: Water Molecule (H2O):
- Geometry: Non-linear (bent, V-shaped with C2v symmetry).
- Number of atoms N = 3.
- Vibrational degrees of freedom = 3N - 6 = 3(3) - 6 = 3 normal modes.

Modes of H2O:
1. Symmetric Stretching (ν1 ~ 3650 cm^-1):
   Both O-H bonds stretch and contract simultaneously along the bond axes. Net dipole moment changes periodically -> IR Active.
2. Bending / Scissoring (ν2 ~ 1595 cm^-1):
   The H-O-H bond angle periodically increases and decreases. Changes dipole moment magnitude -> IR Active.
3. Asymmetric Stretching (ν3 ~ 3750 cm^-1):
   One O-H bond stretches while the other contracts. Alters the direction and magnitude of dipole moment -> IR Active.
Conclusion: All 3 normal modes of H2O are IR Active.

Part 2: Carbon Dioxide (CO2):
- Geometry: Linear (O=C=O with D_inf_h symmetry).
- Number of atoms N = 3.
- Vibrational degrees of freedom = 3N - 5 = 3(3) - 5 = 4 normal modes.

Modes of CO2:
1. Symmetric Stretching (ν1 ~ 1330 cm^-1):
   Both C=O bonds stretch and compress symmetrically in opposite directions. The dipole moments of the two bonds cancel each other at all times (Δμ = 0) -> IR Inactive (Raman Active).
2. Asymmetric Stretching (ν3 ~ 2350 cm^-1):
   One C=O bond expands while the other contracts. Creates an alternating net dipole moment along the internuclear axis -> IR Active.
3. Bending Modes (ν2a and ν2b ~ 667 cm^-1):
   Two mutually perpendicular degenerate bending modes (one in the xy-plane and one in the xz-plane). Bending produces an oscillating dipole moment perpendicular to the molecular axis -> Both are IR Active.
Conclusion: Out of 4 vibrational modes, 3 are IR Active and 1 is IR Inactive.

Final Answer:
H2O has 3 modes (all IR active); CO2 has 4 modes (symmetric stretch is IR inactive, 1 asymmetric stretch and 2 degenerate bends are IR active).

</details>

### Topic 2: 1H NMR Spectroscopy & Chromatography

**Tags**: `NMR` `Chemical Shift` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Principle of 1H NMR and nuclear spin precession
- [ ] Chemical shift, shielding/deshielding, and TMS standard
- [ ] Spin-spin coupling, (n+1) splitting rule, and peak interpretation

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Discuss the fundamental principle of 1H NMR spectroscopy. Explain chemical shift, shielding and deshielding effects, and predict the 1H NMR spectrum of Ethanol (CH3-CH2-OH) in terms of number of signals, chemical shifts, splitting patterns, and integration ratio.

**Key Concept / Exam Tip**: Ethanol has 3 chemically non-equivalent proton environments: -CH3 (3H), -CH2- (2H), -OH (1H). Splitting follows the (n+1) multiplicity rule.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Part 1: Fundamental Principle of 1H NMR:
1. The 1H nucleus (proton) has nuclear spin I = 1/2 and possesses a non-zero magnetic moment μ.
2. In the absence of an external magnetic field, nuclear spins are randomly oriented.
3. When placed in an external magnetic field B0, the magnetic moments align into two quantized energy states:
   - Lower energy α-state (m = +1/2, parallel to B0)
   - Higher energy β-state (m = -1/2, antiparallel to B0).
4. The energy separation is ΔE = h ν = γ (h / 2π) B0.
5. When irradiated with radiofrequency (RF) radiation matching this resonance frequency, absorption occurs and protons flip to the β-state (Nuclear Magnetic Resonance).

Part 2: Chemical Shift & Shielding/Deshielding:
- Electrons circulating around a nucleus create an induced local magnetic field B_ind opposing B0. The effective field is B_eff = B0(1 - σ), where σ is the shielding constant.
- Protons surrounded by high electron density are shielded (experience lower B_eff, absorb upfield at lower δ values).
- Protons attached to electronegative atoms (like O, N, halogens) have reduced electron density; they are deshielded (experience higher B_eff, absorb downfield at higher δ values).
- Chemical Shift (δ) in ppm:
  δ = [ (ν_sample - ν_TMS) / ν_operating ] × 10^6.
  Tetramethylsilane (TMS, (CH3)4Si) is chosen as standard reference at δ = 0.0 ppm.

Part 3: 1H NMR Spectrum Analysis of Pure Ethanol (CH3-CH2-OH):
Structure: CH3 - CH2 - OH
1. Number of Signals: 3 distinct signals corresponding to 3 magnetically non-equivalent proton sets:
   - Set a: 3 protons of methyl group (-CH3)
   - Set b: 2 protons of methylene group (-CH2-)
   - Set c: 1 proton of hydroxyl group (-OH).

2. Chemical Shift (δ values):
   - Methyl (-CH3): δ ≈ 1.2 ppm (upfield, heavily shielded).
   - Hydroxyl (-OH): δ ≈ 2.0 - 5.0 ppm (variable due to hydrogen bonding).
   - Methylene (-CH2-): δ ≈ 3.7 ppm (downfield, deshielded by neighboring electronegative oxygen).

3. Spin-Spin Splitting (Multiplicity by (n + 1) Rule):
   - -CH3 protons: Neighbor has 2 protons (-CH2-). Multiplicity = 2 + 1 = 3 (Triplet), with intensity ratio 1 : 2 : 1.
   - -CH2- protons: Coupled to 3 methyl protons (-CH3). Multiplicity = 3 + 1 = 4 (Quartet), with intensity ratio 1 : 3 : 3 : 1.
   - -OH proton: In standard spectra with rapid intermolecular proton exchange, it appears as a sharp Singlet.

4. Integration Ratio of Areas Under Peaks:
   Ratio of peak areas = Number of protons in each set = 3 : 2 : 1 (-CH3 : -CH2- : -OH).

Final Answer:
Ethanol shows 3 signals: δ 1.2 (Triplet, 3H), δ 3.7 (Quartet, 2H), δ 2.5-5.0 (Singlet, 1H). Area ratio = 3 : 2 : 1.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
