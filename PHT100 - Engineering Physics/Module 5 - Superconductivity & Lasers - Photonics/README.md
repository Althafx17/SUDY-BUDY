# PHT100 · Module 5: Superconductivity & Lasers / Photonics

**Subject**: Engineering Physics (PHT100)
**Semester**: S2 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 5: Superconductivity & Lasers / Photonics

> **Quick Jump to Equation Areas**:
- [Area 1: Superconductivity Critical Parameters & Penetration Depth](#-area%201%20superconductivity%20critical%20parameters%20%20penetration%20depth)
- [Area 2: Einstein’s Laser A & B Coefficients](#-area%202%20einsteins%20laser%20a%20%20b%20coefficients)
- [Area 3: Optical Fibers & Numerical Aperture (NA)](#-area%203%20optical%20fibers%20%20numerical%20aperture%20na)

### 📐 Area 1: Superconductivity Critical Parameters & Penetration Depth
*Critical magnetic field, temperature decay, Meissner effect, and London depth.*

#### 🔹 Critical Magnetic Field vs Temperature

$$H_c(T) = H_c(0) \left[ 1 - \left( \frac{T}{T_c} \right)^2 \right]$$

> **Key Notes & Application**: $H_c(0)$ is critical field at $0\text{ K}$; $T_c$ is critical transition temperature where $H_c(T_c) = 0$.

#### 🔹 Silsbee’s Rule for Critical Current

$$I_c = 2\pi r H_c(T) \quad (\text{for cylindrical wire of radius } r)$$

> **Key Notes & Application**: Current creates surface magnetic field; superconductivity breaks when self-field exceeds $H_c$.

#### 🔹 London Penetration Depth (\lambda_L)

$$B(x) = B(0) e^{-x / \lambda_L}, \qquad \lambda_L(0) = \sqrt{\frac{m}{\mu_0 n_s e^2}}, \quad \lambda_L(T) = \frac{\lambda_L(0)}{\sqrt{1 - (T/T_c)^4}}$$

> **Key Notes & Application**: Meissner effect: interior $\mathbf{B} = 0$, susceptibility $\chi_m = -1$ (perfect diamagnetism).

### 📐 Area 2: Einstein’s Laser A & B Coefficients
*Spontaneous and stimulated emission probability ratios and population inversion.*

#### 🔹 Ratio of Spontaneous to Stimulated Emission

$$\frac{A_{21}}{B_{21}} = \frac{8\pi h \nu^3}{c^3}, \qquad B_{12} = B_{21} \quad (\text{for equal degeneracies})$$

> **Key Notes & Application**: $A_{21}$ = spontaneous rate; $B_{21}$ = stimulated emission rate; $B_{12}$ = stimulated absorption rate.

#### 🔹 Population Ratio (Boltzmann Equilibrium)

$$\frac{N_2}{N_1} = e^{-\frac{E_2 - E_1}{k_B T}} = e^{-\frac{h\nu}{k_B T}}$$

> **Key Notes & Application**: At thermal equilibrium, $N_1 > N_2$. Laser amplification requires population inversion ($N_2 > N_1$) by optical pumping.

### 📐 Area 3: Optical Fibers & Numerical Aperture (NA)
*Total internal reflection, acceptance angle, light-gathering capacity, and $V$-number.*

#### 🔹 Critical Angle for Core-Cladding Interface

$$\sin \theta_c = \frac{n_2}{n_1} \quad (n_1 > n_2)$$

> **Key Notes & Application**: $n_1$ is core refractive index, $n_2$ is cladding refractive index.

#### 🔹 Numerical Aperture (NA) & Acceptance Angle (\theta_{\text{max}})

$$\text{NA} = \sin \theta_{\text{max}} = \sqrt{n_1^2 - n_2^2} \approx n_1 \sqrt{2\Delta}, \qquad \Delta = \frac{n_1 - n_2}{n_1}$$

> **Key Notes & Application**: $\Delta$ is the fractional refractive index change; higher NA means greater light-gathering ability.

#### 🔹 Normalized Frequency (V-Number) & Mode Count

$$V = \frac{2\pi a}{\lambda} \text{NA} = \frac{2\pi a}{\lambda} \sqrt{n_1^2 - n_2^2}, \qquad N_{\text{modes}} \approx \frac{V^2}{2} \quad (\text{Step Index, } V \gg 1)$$

> **Key Notes & Application**: Single-mode condition: $V < 2.405$; $a$ is core radius; $\lambda$ is free space wavelength.

---

## 📚 Syllabus & Core Topics

### Topic 1: Superconductivity, Meissner Effect & BCS Theory

**Tags**: `Superconductivity` `Meissner Effect` `BCS Theory`

**Subtopics Checklist**:
- [ ] Meissner effect, magnetic levitation, and critical field relation
- [ ] Type I vs Type II superconductors and vortex state
- [ ] BCS microscopic theory (Cooper pairs and energy gap)

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Explain Meissner effect and prove that a superconductor is a perfect diamagnet. Differentiate between Type I and Type II superconductors with relevant magnetization curves. Explain the qualitative concepts of BCS theory.

**Key Concept / Exam Tip**: Meissner effect: B = 0 inside superconductor. Prove χ = -1. Type I has single Hc. Type II has Hc1, Hc2, and mixed vortex state.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Part 1: Meissner Effect & Proof of Perfect Diamagnetism:
- Statement: When a superconductor is cooled below its critical transition temperature Tc in the presence of an applied magnetic field H, the magnetic flux lines are completely expelled from the interior of the material (B = 0).

Proof of Perfect Diamagnetism:
Magnetic induction B inside any magnetic material is given by:
B = μ0 (H + M)
where H is applied magnetic field, M is induced magnetization, and μ0 is permeability of free space.
Inside a superconductor in the superconducting state (T < Tc, H < Hc):
B = 0
μ0 (H + M) = 0
H + M = 0 => M = - H.

Magnetic Susceptibility χ:
χ = M / H = -H / H = -1.
Relative permeability μr = 1 + χ = 1 + (-1) = 0.
Since magnetic susceptibility χ = -1 and μr = 0, a superconductor behaves as a perfect diamagnet.

Part 2: Comparison of Type I and Type II Superconductors:
1. Transition & Critical Magnetic Fields:
   - Type I: Exhibits a single critical magnetic field Hc. The material shows complete Meissner effect up to Hc, and abruptly transitions to the normal resistive state above Hc.
   - Type II: Exhibits two critical fields: Lower critical field Hc1 and Upper critical field Hc2.
     - Below Hc1: Complete Meissner state (B = 0).
     - Between Hc1 and Hc2: Mixed/Vortex state (Abrikosov state) where magnetic flux penetrates in quantized flux filaments (vortices) surrounded by supercurrents.
     - Above Hc2: Completely transitions to normal state.
2. Magnetization Curve:
   - Type I: Magnetization increases linearly (M = -H) up to Hc, then drops abruptly to zero.
   - Type II: Magnetization increases linearly up to Hc1, then gradually drops to zero at Hc2.
3. Coherence Length (ξ) and Penetration Depth (λ):
   - Type I: ξ >> λ (positive surface energy).
   - Type II: λ >> ξ (negative surface energy).
4. Practical Utility:
   - Type I (Soft superconductors): Low Hc (~0.1 T); cannot sustain high transport currents (e.g., Pb, Hg, Sn, Al).
   - Type II (Hard superconductors): Very high Hc2 (30 T to 100 T); widely utilized for powerful superconducting electromagnets in MRI machines, Maglev trains, and LHC (e.g., Nb3Sn, Nb-Ti, YBCO).

Part 3: Qualitative Concepts of BCS Theory (Bardeen-Cooper-Schrieffer):
1. Electron-Phonon Interaction:
   As an electron moves through the crystal lattice of positive ion cores, it attracts the positive ions, creating a localized region of increased positive charge density (lattice deformation / virtual phonon emission).
2. Formation of Cooper Pairs:
   A second electron passing by is attracted to this positive charge concentration. At low temperatures (T < Tc), this indirect attractive force overcomes the Coulomb repulsion between electrons, binding two electrons with equal and opposite momenta and opposite spins (k, ↑ and -k, ↓) into a bound state called a Cooper pair.
3. Bosonic Condensation & Zero Resistance:
   Cooper pairs have total integer spin (S = 0), behaving as composite bosons. Below Tc, all Cooper pairs condense into a single macroscopic ground state separated from single-particle excitations by an energy gap Eg = 3.52 k_B Tc.
   Because thermal energy at T < Tc is insufficient to break the Cooper pairs, electrons traverse the lattice without inelastic scattering, yielding zero electrical resistance.

</details>

##### Q2 [2023 · 7 Marks]

> **Question**: The critical temperature of mercury is 4.2 K. Its critical magnetic field at 0 K is 0.0411 T. Calculate the critical field at 2.0 K.

**Key Concept / Exam Tip**: Parabolic critical field equation: Hc(T) = Hc(0) [ 1 - (T / Tc)^2 ].

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Data:
- Critical temperature Tc = 4.2 K
- Critical field at absolute zero Hc(0) = 0.0411 T
- Temperature T = 2.0 K.

Applicable Formula:
The variation of critical magnetic field with temperature follows the empirical parabolic relation:
Hc(T) = Hc(0) · [ 1 - (T / Tc)^2 ].

Step-by-Step Calculation:
1. Ratio T / Tc:
T / Tc = 2.0 / 4.2 = 0.47619.

2. Square of the ratio:
(T / Tc)^2 = (0.47619)^2 = 0.22676.

3. Factor [ 1 - (T / Tc)^2 ]:
1 - 0.22676 = 0.77324.

4. Compute Hc(2.0 K):
Hc(2.0 K) = 0.0411 T × 0.77324
= 0.03178 T = 3.178 × 10^-2 T.

Conversion to milliTesla (mT):
Hc(2.0 K) = 31.78 mT.

Final Answer:
Critical field at 2.0 K is Hc(2.0 K) = 0.0318 T (or 31.8 mT).

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
