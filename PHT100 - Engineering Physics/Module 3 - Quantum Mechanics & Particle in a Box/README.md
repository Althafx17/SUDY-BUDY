# PHT100 · Module 3: Quantum Mechanics & Particle in a Box

**Subject**: Engineering Physics (PHT100)
**Semester**: S2 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 3: Quantum Mechanics & Particle in a Box

> **Quick Jump to Equation Areas**:
- [Area 1: De Broglie Hypothesis & Uncertainty Principle](#-area%201%20de%20broglie%20hypothesis%20%20uncertainty%20principle)
- [Area 2: 1D Schrödinger Equations & Particle in a Box](#-area%202%201d%20schrdinger%20equations%20%20particle%20in%20a%20box)

### 📐 Area 1: De Broglie Hypothesis & Uncertainty Principle
*Matter waves, momentum-wavelength relations, and fundamental quantum limits.*

#### 🔹 De Broglie Matter Wavelength

$$\lambda = \frac{h}{p} = \frac{h}{m v} = \frac{h}{\sqrt{2 m E}} = \frac{h}{\sqrt{2 m q V}}$$

> **Key Notes & Application**: For an accelerated electron: $\lambda = \frac{1.227}{\sqrt{V}}\text{ nm} = \frac{12.27}{\sqrt{V}}\text{ \AA}$.

#### 🔹 Heisenberg’s Uncertainty Principle

$$\Delta x \cdot \Delta p_x \ge \frac{\hbar}{2} = \frac{h}{4\pi}, \qquad \Delta E \cdot \Delta t \ge \frac{\hbar}{2}$$

> **Key Notes & Application**: Precludes electrons from existing inside the atomic nucleus.

### 📐 Area 2: 1D Schrödinger Equations & Particle in a Box
*Wave equations, quantization, normalized wavefunctions, and zero-point energy.*

#### 🔹 Time-Independent Schrödinger Equation (1D)

$$\frac{d^2\psi}{dx^2} + \frac{2m}{\hbar^2} [E - V(x)] \psi = 0$$

> **Key Notes & Application**: $\hbar = h / (2\pi) = 1.054 \times 10^{-34}\text{ J}\cdot\text{s}$. Total probability: $\int_{-\infty}^\infty |\psi|^2 dx = 1$.

#### 🔹 Quantized Energy Levels in 1D Infinite Well ($0 \le x \le L$)

$$E_n = \frac{n^2 h^2}{8 m L^2} = \frac{n^2 \pi^2 \hbar^2}{2 m L^2} \quad (n = 1, 2, 3, \dots)$$

> **Key Notes & Application**: Zero-point ground state energy ($n=1$): $E_1 = \frac{h^2}{8 m L^2} \neq 0$. Energy levels are discrete and scale with $n^2$.

#### 🔹 Normalized Eigenfunctions (Wavefunctions)

$$\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left( \frac{n \pi x}{L} \right)$$

> **Key Notes & Application**: Probability density is maximum where $\sin(n\pi x / L) = \pm 1$ and zero at nodes.

---

## 📚 Syllabus & Core Topics

### Topic 1: Schrödinger Wave Equation & 1D Potential Box

**Tags**: `Quantum Mechanics` `Schrodinger Equation` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] de Broglie matter waves and Born interpretation of wave function
- [ ] Time-independent 1D Schrödinger equation derivation
- [ ] Eigenfunctions and energy quantization of particle in a 1D box

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: State the time-independent Schrödinger wave equation for a particle. Derive the normalized wave functions and quantized energy levels for a particle of mass m confined in a 1D infinite potential well of width L. Plot the first three wave functions and probability density distributions.

**Key Concept / Exam Tip**: Potential: V(x)=0 inside (0 < x < L), V=inf outside. Boundary conditions: ψ(0)=0 and ψ(L)=0. Normalization: int |ψ|^2 dx = 1.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Time-Independent 1D Schrödinger Equation:
(d^2ψ / dx^2) + (2m / ħ^2) [ E - V(x) ] ψ(x) = 0
where m is particle mass, E is total energy, V(x) is potential energy, and ħ = h / (2π).

Potential Well Specification:
V(x) = 0 for 0 < x < L (inside the box)
V(x) = ∞ for x <= 0 and x >= L (outside the box).
Since potential is infinite outside, the particle cannot exist outside: ψ(x) = 0 for x <= 0 and x >= L.

Part 1: Solution Inside the Box (V = 0):
Inside the well, V(x) = 0:
d^2ψ / dx^2 + (2mE / ħ^2) ψ = 0.
Let k^2 = 2mE / ħ^2 (where k is the wave vector):
d^2ψ / dx^2 + k^2 ψ = 0.
General Solution:
ψ(x) = A sin(kx) + B cos(kx)   --- (1)

Part 2: Applying Boundary Conditions:
1. At x = 0 (left rigid boundary):
   ψ(0) = 0 => A sin(0) + B cos(0) = 0 => B · 1 = 0 => B = 0.
   Therefore: ψ(x) = A sin(kx).

2. At x = L (right rigid boundary):
   ψ(L) = 0 => A sin(kL) = 0.
   Since A cannot be zero (which would make ψ = 0 everywhere, no particle):
   sin(kL) = 0 => kL = n π => k = n π / L   (n = 1, 2, 3, ...).
   (n = 0 is rejected because ψ would be zero everywhere).

Part 3: Quantized Energy Eigenvalues:
Substitute k = nπ / L into k^2 = 2mE / ħ^2:
(n π / L)^2 = 2mE / ħ^2
E_n = (n^2 π^2 ħ^2) / (2m L^2).
Substitute ħ = h / (2π):
E_n = n^2 π^2 [ h^2 / (4π^2) ] / (2m L^2)
E_n = n^2 h^2 / (8 m L^2)   (n = 1, 2, 3, ...).
Conclusions:
- Energy is quantized into discrete levels.
- Ground state energy (Zero-point energy, n = 1): E1 = h^2 / (8mL^2) > 0 (particle can never be at absolute rest).
- Excited states: E2 = 4 E1, E3 = 9 E1, E4 = 16 E1.

Part 4: Normalization of Wavefunctions:
The total probability of finding the particle within the box must be unity:
int_0^L |ψ_n(x)|^2 dx = 1
int_0^L [ A sin(nπx / L) ]^2 dx = 1
A^2 int_0^L sin^2(nπx / L) dx = 1
A^2 int_0^L [ (1 - cos(2nπx / L)) / 2 ] dx = 1
A^2 [ x/2 - (L / (4nπ)) sin(2nπx / L) ]_0^L = 1
A^2 · (L / 2 - 0) = 1 => A^2 = 2 / L => A = sqrt(2 / L).

Normalized Wavefunctions:
ψ_n(x) = sqrt(2 / L) sin(n π x / L).

Part 5: Probability Density P(x) = |ψ_n(x)|^2 = (2/L) sin^2(nπx / L):
- For n = 1: Symmetric single peak with maximum probability at center x = L/2.
- For n = 2: Two symmetric probability peaks at x = L/4 and x = 3L/4, with a node (zero probability) at center x = L/2.
- For n = 3: Three probability peaks at x = L/6, L/2, 5L/6, with two nodes at x = L/3 and 2L/3.

Final Answer:
E_n = n^2 h^2 / (8 m L^2); Normalized eigenfunction: ψ_n(x) = sqrt(2/L) sin(nπx / L).

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
