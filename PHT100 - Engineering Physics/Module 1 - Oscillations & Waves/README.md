# PHT100 · Module 1: Oscillations & Waves

**Subject**: Engineering Physics (PHT100)
**Semester**: S2 · KTU Scheme

---

## 📚 Syllabus & Core Topics

### Topic 1: Damped & Forced Harmonic Oscillations

**Tags**: `Oscillations` `Damping` `Quality Factor` `Repeated PYQ`

**Subtopics Checklist**:
- [ ] Differential equation of damped harmonic oscillator
- [ ] Critical damping, over-damping, and under-damping cases
- [ ] Forced oscillations, amplitude resonance, and sharpness Q factor

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Set up the differential equation for a damped harmonic oscillator and obtain solutions for: (i) Under-damped, (ii) Critically damped, and (iii) Over-damped conditions. Define Quality factor Q and show that Q = omega_0 / (2 gamma).

**Key Concept / Exam Tip**: Restoring force F_r = -kx, Damping force F_d = -b(dx/dt). Let 2γ = b/m, ω0^2 = k/m. Solve auxiliary equation r^2 + 2γr + ω0^2 = 0.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Part 1: Setting up the Differential Equation:
Consider a particle of mass m undergoing damped harmonic motion. Forces acting on it:
1. Restoring force proportional to displacement: F_r = -k x (k = force constant).
2. Damping/resistive force proportional to velocity: F_d = -b (dx/dt) (b = damping constant).

By Newton's Second Law:
m (d^2x/dt^2) = F_r + F_d = -k x - b (dx/dt)
m (d^2x/dt^2) + b (dx/dt) + k x = 0
Divide by m:
d^2x/dt^2 + (b/m) (dx/dt) + (k/m) x = 0.

Introduce standard notation:
Let 2γ = b/m (damping factor) and ω0^2 = k/m (natural angular frequency squared):
d^2x/dt^2 + 2γ (dx/dt) + ω0^2 x = 0.   --- (Equation 1)

Part 2: General Solution of Equation (1):
Let trial solution be x = C e^(r t).
Auxiliary equation: r^2 + 2γ r + ω0^2 = 0.
Roots: r = [ -2γ ± sqrt(4γ^2 - 4ω0^2) ] / 2 = -γ ± sqrt(γ^2 - ω0^2).

Part 3: Analysis of Three Physical Cases:
Case (i): Under-damped condition (γ^2 < ω0^2, Light Damping)
- The term under the radical is negative: sqrt(γ^2 - ω0^2) = i sqrt(ω0^2 - γ^2) = i ω, where ω = sqrt(ω0^2 - γ^2).
- Roots are complex conjugates: r = -γ ± i ω.
- Displacement solution:
  x(t) = A e^(-γ t) cos(ω t + φ)
  where A and φ are constants determined by initial conditions.
- Physical Interpretation: The system executes oscillatory motion with angular frequency ω < ω0 whose amplitude A(t) = A e^(-γ t) decays exponentially to zero.

Case (ii): Critically damped condition (γ^2 = ω0^2, Critical Damping)
- Roots are real and equal: r1 = r2 = -γ.
- General solution:
  x(t) = (C1 + C2 t) e^(-γ t).
- Physical Interpretation: Non-oscillatory. The displaced body returns to its equilibrium position in the shortest possible time without crossing equilibrium.

Case (iii): Over-damped condition (γ^2 > ω0^2, Heavy Damping)
- Roots are real, negative, and distinct: r1, r2 = -γ ± sqrt(γ^2 - ω0^2).
- Solution:
  x(t) = C1 e^(-(γ - sqrt(γ^2 - ω0^2)) t) + C2 e^(-(γ + sqrt(γ^2 - ω0^2)) t).
- Physical Interpretation: Completely aperiodic and non-oscillatory. The body creeps back very sluggishly to equilibrium.

Part 4: Quality Factor (Q):
- Definition: Q is defined as 2π times the ratio of total energy stored in the oscillator to the energy dissipated per cycle:
  Q = 2π · [ Energy stored / Energy dissipated in one cycle ] = 2π · [ E / ΔE ].
- Since energy is proportional to the square of amplitude:
  E(t) = E0 e^(-2γ t).
  Rate of energy loss: dE/dt = -2γ E.
- Energy dissipated in one period T = 2π / ω0:
  ΔE ≈ |dE/dt| · T = 2γ E · (2π / ω0).
- Substituting into Q definition:
  Q = 2π · E / [ 2γ E · (2π / ω0) ] = ω0 / (2γ).

Final Answer:
Differential Equation: d^2x/dt^2 + 2γ(dx/dt) + ω0^2 x = 0; Under-damped solution: x(t) = A e^(-γt) cos(ωt + φ); Q = ω0 / (2γ).

</details>

##### Q2 [2024 · 7 Marks]

> **Question**: Distinguish between phase velocity (v_p) and group velocity (v_g). Establish Rayleigh's formula relating phase velocity and group velocity in a dispersive medium: v_g = v_p - lambda (dv_p / dlambda).

**Key Concept / Exam Tip**: Phase velocity v_p = ω/k. Group velocity v_g = dω/dk. Express k in terms of wavelength λ: k = 2π/λ.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Part 1: Distinctions Between Phase Velocity and Group Velocity:
1. Definition:
   - Phase Velocity (v_p): The velocity with which the phase of a single individual monochromatic sinusoidal wave propagates through space:
     v_p = ω / k (where ω is angular frequency, k is wave vector).
   - Group Velocity (v_g): The velocity with which the overall envelope or modulation of a group/packet of waves of slightly different frequencies travels:
     v_g = dω / dk.
2. Physical Transport:
   - Phase velocity does not necessarily carry energy or information.
   - Group velocity represents the speed of energy, signal, and information propagation.
3. Dispersive vs Non-dispersive Media:
   - In vacuum / non-dispersive media: v_p = v_g = c (independent of wavelength).
   - In dispersive media: v_p is a function of wavelength λ, causing v_g != v_p.

Part 2: Derivation of Rayleigh's Formula:
From the definition of phase velocity:
ω = v_p · k   --- (1)

Differentiate with respect to propagation constant k:
v_g = dω / dk = d/dk [ v_p · k ]
v_g = v_p · (dk/dk) + k · (dv_p / dk)
v_g = v_p + k (dv_p / dk)   --- (2)

Now, relate propagation constant k to wavelength λ in the medium:
k = 2π / λ
Differentiate k with respect to λ:
dk / dλ = d/dλ [ 2π · λ^(-1) ] = - 2π / λ^2.

By chain rule:
dv_p / dk = (dv_p / dλ) · (dλ / dk) = (dv_p / dλ) · [ 1 / (dk / dλ) ]
dv_p / dk = (dv_p / dλ) · [ - λ^2 / (2π) ].

Substitute dv_p/dk and k = 2π/λ into Equation (2):
v_g = v_p + (2π / λ) · [ - (λ^2 / 2π) (dv_p / dλ) ]
v_g = v_p - λ (dv_p / dλ).

Physical Significance:
- In normal dispersion: Refractive index increases as wavelength decreases, meaning dv_p/dλ > 0. Hence v_g < v_p.
- In anomalous dispersion: dv_p/dλ < 0, giving v_g > v_p.
- In non-dispersive medium: dv_p/dλ = 0, giving v_g = v_p.

Final Answer:
Proved: v_g = v_p - λ (dv_p / dλ).

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
