# PHT100 · Module 4: Magnetism & Electromagnetism

**Subject**: Engineering Physics (PHT100)
**Semester**: S2 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 4: Magnetism & Electromagnetism

> **Quick Jump to Equation Areas**:
- [Area 1: Magnetic Vector Fields & Constitutive Relations](#-area%201%20magnetic%20vector%20fields%20%20constitutive%20relations)
- [Area 2: Maxwell’s Four Fundamental Electromagnetic Equations](#-area%202%20maxwells%20four%20fundamental%20electromagnetic%20equations)
- [Area 3: EM Wave Propagation & Poynting Vector in Free Space](#-area%203%20em%20wave%20propagation%20%20poynting%20vector%20in%20free%20space)

### 📐 Area 1: Magnetic Vector Fields & Constitutive Relations
*Flux density, magnetization, susceptibility, and permeability relationships.*

#### 🔹 Fundamental Magnetic Constitutive Relation

$$\mathbf{B} = \mu_0 (\mathbf{H} + \mathbf{M}) = \mu_0 \mu_r \mathbf{H} = \mu \mathbf{H}$$

> **Key Notes & Application**: $\mathbf{B}$ = flux density (Tesla); $\mathbf{H}$ = field intensity (A/m); $\mathbf{M} = \chi_m \mathbf{H}$ = magnetization (A/m); $\mu_r = 1 + \chi_m$.

#### 🔹 Curie & Curie-Weiss Temperature Laws

$$\chi_{\text{paramagnetic}} = \frac{C}{T}, \qquad \chi_{\text{ferromagnetic}} = \frac{C}{T - T_c} \quad (T > T_c)$$

> **Key Notes & Application**: $T_c$ is the Curie temperature above which ferromagnetic materials transition to paramagnetic behavior.

### 📐 Area 2: Maxwell’s Four Fundamental Electromagnetic Equations
*Differential and integral forms unifying electrodynamics.*

#### 🔹 1. Gauss’s Law for Electricity

$$\nabla \cdot \mathbf{D} = \rho_v \iff \oint_S \mathbf{D} \cdot d\mathbf{S} = Q_{\text{enclosed}}$$

> **Key Notes & Application**: Electric charges are sources and sinks of electric displacement field $\mathbf{D}$.

#### 🔹 2. Gauss’s Law for Magnetism

$$\nabla \cdot \mathbf{B} = 0 \iff \oint_S \mathbf{B} \cdot d\mathbf{S} = 0$$

> **Key Notes & Application**: Magnetic field lines are continuous closed loops; isolated magnetic monopoles do not exist.

#### 🔹 3. Faraday’s Law of Electromagnetic Induction

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \iff \oint_C \mathbf{E} \cdot d\mathbf{r} = -\frac{\partial}{\partial t}\iint_S \mathbf{B} \cdot d\mathbf{S}$$

> **Key Notes & Application**: A time-varying magnetic field induces a circulating non-conservative electric field.

#### 🔹 4. Ampere-Maxwell Law with Displacement Current

$$\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t} \iff \oint_C \mathbf{H} \cdot d\mathbf{r} = \iint_S \left( \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t} \right) \cdot d\mathbf{S}$$

> **Key Notes & Application**: $\mathbf{J}_d = \frac{\partial \mathbf{D}}{\partial t} = \epsilon \frac{\partial \mathbf{E}}{\partial t}$ is Maxwell's displacement current density.

### 📐 Area 3: EM Wave Propagation & Poynting Vector in Free Space
*Speed of light, intrinsic wave impedance, and directional power flow.*

#### 🔹 Speed of Light & Intrinsic Impedance in Free Space

$$c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} \approx 3 \times 10^8\text{ m/s}, \qquad \eta_0 = \sqrt{\frac{\mu_0}{\epsilon_0}} \approx 377\ \Omega \approx 120\pi\ \Omega$$

> **Key Notes & Application**: Ratio of wave amplitudes: $\frac{E_0}{H_0} = \eta_0 = \sqrt{\frac{\mu_0}{\epsilon_0}}$.

#### 🔹 Poynting Vector (Instantaneous Energy Flux)

$$\mathbf{S} = \mathbf{E} \times \mathbf{H} = \frac{1}{\mu_0} (\mathbf{E} \times \mathbf{B}) \quad (\text{W/m}^2)$$

> **Key Notes & Application**: Time-averaged power flow: $\langle S \rangle = \frac{1}{2} E_0 H_0 = \frac{E_0^2}{2 \eta_0}$.

---

## 📚 Syllabus & Core Topics

### Topic 1: Maxwell Equations & Displacement Current

**Tags**: `Maxwell Equations` `Displacement Current` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Concept of displacement current and modification of Ampere Law
- [ ] Maxwell 4 equations in differential and integral forms
- [ ] Electromagnetic wave equation and velocity of light derivation

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Explain why Maxwell modified Ampere's circuital law and derive the expression for displacement current. State all four Maxwell's equations in differential and integral forms and explain the physical significance of each.

**Key Concept / Exam Tip**: Take divergence of Ampere's law: div(curl B) = 0 => div(J) = 0. But continuity is div(J) = -∂ρ/∂t. Modify with J_D = ε0 ∂E/∂t.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Part 1: Inconsistency of Ampere's Circuital Law & Need for Modification:
Ampere's circuital law in differential form is:
∇ x B = μ0 J   --- (1)
where J is the conduction current density.

Take the divergence of both sides of (1):
∇ · (∇ x B) = μ0 (∇ · J).
By vector identity, the divergence of the curl of any vector field is identically zero:
∇ · (∇ x B) = 0 => μ0 (∇ · J) = 0 => ∇ · J = 0.   --- (2)

However, the fundamental equation of continuity for electric charge conservation is:
∇ · J = - ∂ρ / ∂t   --- (3)
where ρ is volume charge density.
Comparing (2) and (3) shows that Ampere's law is only valid for steady currents (where ∂ρ/∂t = 0), but violates charge conservation for time-varying fields (such as charging a capacitor).

Part 2: Maxwell's Modification & Displacement Current:
To resolve this contradiction, Maxwell added an extra current density term J_D (Displacement Current Density):
∇ x B = μ0 (J + J_D)   --- (4)
Taking divergence of (4):
0 = μ0 [ ∇ · J + ∇ · J_D ] => ∇ · J_D = - ∇ · J.
Substitute the continuity equation ∇ · J = - ∂ρ/∂t:
∇ · J_D = - (- ∂ρ/∂t) = ∂ρ / ∂t.

From Gauss's Law for electrostatics: ∇ · E = ρ / ε0 => ρ = ε0 (∇ · E).
Therefore:
∇ · J_D = ∂/∂t [ ε0 (∇ · E) ] = ∇ · [ ε0 (∂E / ∂t) ].
Equating terms inside divergence:
J_D = ε0 (∂E / ∂t) = ∂D / ∂t (where D = ε0 E is the electric displacement field).
Total Displacement Current I_D through surface S:
I_D = iint_S (J_D · n) dS = ε0 iint_S (∂E / ∂t · n) dS = ε0 (dΦ_E / dt).

Modified Ampere-Maxwell Law:
∇ x B = μ0 [ J + ε0 (∂E / ∂t) ].

Part 3: Four Maxwell's Equations & Their Physical Meanings:
1. Gauss's Law for Electricity:
   - Differential Form: ∇ · D = ρ_v (or ∇ · E = ρ / ε0)
   - Integral Form: oint_S (D · n) dS = q_enclosed
   - Physical Meaning: Total electric flux emerging from any closed surface equals the enclosed charge. Electric field lines originate on positive charges and terminate on negative charges (isolated monopoles exist).

2. Gauss's Law for Magnetism:
   - Differential Form: ∇ · B = 0
   - Integral Form: oint_S (B · n) dS = 0
   - Physical Meaning: Magnetic flux lines are continuous closed loops; isolated magnetic monopoles do not exist.

3. Faraday's Law of Electromagnetic Induction:
   - Differential Form: ∇ x E = - ∂B / ∂t
   - Integral Form: oint_C E · dr = - d/dt [ iint_S B · n dS ]
   - Physical Meaning: A time-varying magnetic field induces a circulating non-conservative electric field.

4. Ampere-Maxwell Law:
   - Differential Form: ∇ x H = J + ∂D / ∂t
   - Integral Form: oint_C H · dr = iint_S (J + ∂D/∂t) · n dS
   - Physical Meaning: Magnetic fields are produced both by physical electric conduction currents (J) and by time-varying electric displacement fields (∂D/∂t).

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
