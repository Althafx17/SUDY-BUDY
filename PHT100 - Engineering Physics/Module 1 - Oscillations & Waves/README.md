# PHT100 · Module 1: Oscillations & Waves

**Subject**: Engineering Physics (PHT100)
**Semester**: S2 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 1: Oscillations & Waves

> **Quick Jump to Equation Areas**:
- [Area 1: Simple Harmonic Motion (SHM)](#-area%201%20simple%20harmonic%20motion%20shm)
- [Area 2: Damped Harmonic Oscillations](#-area%202%20damped%20harmonic%20oscillations)
- [Area 3: Forced Oscillations & Resonance](#-area%203%20forced%20oscillations%20%20resonance)

### 📐 Area 1: Simple Harmonic Motion (SHM)
*Restoring forces, angular frequency, displacement, and total mechanical energy.*

#### 🔹 SHM Governing Differential Equation

$$\frac{d^2x}{dt^2} + \omega_0^2 x = 0, \quad \omega_0 = \sqrt{\frac{k}{m}} \implies T = 2\pi \sqrt{\frac{m}{k}}$$

> **Key Notes & Application**: Displacement equation: $x(t) = A \cos(\omega_0 t + \phi)$.

#### 🔹 Total Mechanical Energy in SHM

$$E = K + U = \frac{1}{2}m v^2 + \frac{1}{2}k x^2 = \frac{1}{2}m \omega_0^2 A^2 = \text{Constant}$$

> **Key Notes & Application**: Energy oscillates between pure kinetic at mean position ($x=0$) and pure potential at extremes ($x = \pm A$).

### 📐 Area 2: Damped Harmonic Oscillations
*Resistive forces, damping coefficients, relaxation time, and quality factors.*

#### 🔹 Damped Oscillation Differential Equation

$$\frac{d^2x}{dt^2} + 2\gamma \frac{dx}{dt} + \omega_0^2 x = 0 \quad \left(2\gamma = \frac{b}{m}, \ \omega_0^2 = \frac{k}{m}\right)$$

> **Key Notes & Application**: Underdamped condition ($\gamma < \omega_0$): $x(t) = A_0 e^{-\gamma t} \cos(\omega_d t + \phi)$, with $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$.

#### 🔹 Quality Factor ($Q$) & Logarithmic Decrement ($\delta$)

$$Q = \frac{\omega_0}{2\gamma} = \frac{\omega_0 \tau}{2}, \qquad \delta = \gamma T = \ln\left(\frac{A_n}{A_{n+1}}\right) = \frac{\pi}{Q}$$

> **Key Notes & Application**: $\tau = 1/(2\gamma)$ is the amplitude relaxation time. Higher $Q$ signifies less energy dissipation per cycle.

### 📐 Area 3: Forced Oscillations & Resonance
*External harmonic excitation, resonance amplitude, and frequency response.*

#### 🔹 Forced Oscillation Steady-State Amplitude

$$A = \frac{f_0}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\gamma^2 \omega^2}} \quad \left(f_0 = \frac{F_0}{m}\right)$$

> **Key Notes & Application**: Amplitude resonance frequency: $\omega_r = \sqrt{\omega_0^2 - 2\gamma^2}$. Phase lag $\tan\delta = \frac{2\gamma\omega}{\omega_0^2 - \omega^2}$.

#### 🔹 One-Dimensional Wave Equation & Wave Speed

$$\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2}, \quad v = \sqrt{\frac{T}{\mu}} \quad (\text{Stretched String})$$

> **Key Notes & Application**: $T$ is string tension (N), $\mu$ is linear mass density (kg/m).

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
