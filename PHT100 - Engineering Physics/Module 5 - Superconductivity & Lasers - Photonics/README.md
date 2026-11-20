# PHT100 · Module 5: Superconductivity & Lasers / Photonics

**Subject**: Engineering Physics (PHT100)
**Semester**: S2 · KTU Scheme

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
