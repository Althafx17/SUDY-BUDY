# MAT101 · Module 3: Multivariable Calculus & Partial Differentiation

**Subject**: Linear Algebra and Calculus (MAT101)
**Semester**: S1 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 3: Multivariable Calculus & Partial Differentiation

> **Quick Jump to Equation Areas**:
- [Area 1: Partial Derivatives, Total Differential & Chain Rules](#-area%201%20partial%20derivatives%20total%20differential%20%20chain%20rules)
- [Area 2: Euler’s Theorem for Homogeneous Functions](#-area%202%20eulers%20theorem%20for%20homogeneous%20functions)
- [Area 3: Taylor & Maclaurin Expansions in Two Variables](#-area%203%20taylor%20%20maclaurin%20expansions%20in%20two%20variables)
- [Area 4: Extrema of Functions of Two Variables & Lagrange Multipliers](#-area%204%20extrema%20of%20functions%20of%20two%20variables%20%20lagrange%20multipliers)

### 📐 Area 1: Partial Derivatives, Total Differential & Chain Rules
*Multivariable rates of change, total differentials, and composite function derivatives.*

#### 🔹 Total Differential of $z = f(x, y)$

$$dz = \frac{\partial z}{\partial x} dx + \frac{\partial z}{\partial y} dy$$

> **Key Notes & Application**: For three variables $u = f(x, y, z)$: $du = \frac{\partial u}{\partial x}dx + \frac{\partial u}{\partial y}dy + \frac{\partial u}{\partial z}dz$.

#### 🔹 Chain Rule for Composite Functions

$$\frac{dz}{dt} = \frac{\partial z}{\partial u} \frac{du}{dt} + \frac{\partial z}{\partial v} \frac{dv}{dt} \quad (z = f(u, v), \ u = g(t), \ v = h(t))$$

> **Key Notes & Application**: For two independent variables $u(s, t), v(s, t)$: $\frac{\partial z}{\partial s} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial s} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial s}$.

#### 🔹 Implicit Differentiation Formula

$$\frac{dy}{dx} = -\frac{F_x}{F_y} \quad (F(x, y) = 0, \ F_y \neq 0)$$

> **Key Notes & Application**: For surface $F(x, y, z) = 0$: $\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}$ and $\frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$.

### 📐 Area 2: Euler’s Theorem for Homogeneous Functions
*Degree evaluations and differential identities for homogeneous expressions.*

#### 🔹 Homogeneous Function Definition

$$f(t x, t y) = t^n f(x, y) \implies \text{Degree } = n$$

> **Key Notes & Application**: Rational function $f(x, y) = \frac{g(x, y)}{h(x, y)}$ has degree $n = \text{deg}(g) - \text{deg}(h)$.

#### 🔹 Euler’s 1st Order Identity

$$x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = n u$$

> **Key Notes & Application**: For 3 variables: $x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} + z \frac{\partial u}{\partial z} = n u$.

#### 🔹 Euler’s 2nd Order Identity

$$x^2 \frac{\partial^2 u}{\partial x^2} + 2xy \frac{\partial^2 u}{\partial x \partial y} + y^2 \frac{\partial^2 u}{\partial y^2} = n(n - 1) u$$

> **Key Notes & Application**: High weightage in KTU exams for proofs involving $u = \sin^{-1}(...)$ or $u = \tan^{-1}(...)$.

#### 🔹 Euler’s Theorem for $f(u) = z$ (Where $z$ is Homogeneous of Degree $n$)

$$x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = n \frac{f(u)}{f'(u)} = G(u)$$

> **Key Notes & Application**: Second derivative formula: $x^2 u_{xx} + 2xy u_{xy} + y^2 u_{yy} = G(u)[G'(u) - 1]$.

### 📐 Area 3: Taylor & Maclaurin Expansions in Two Variables
*Series approximations near origin and arbitrary expansion points $(a, b)$.*

#### 🔹 Taylor’s Expansion about $(a, b)$

$$f(x, y) = f(a, b) + \left[(x - a)f_x + (y - b)f_y\right] + \frac{1}{2!}\left[(x - a)^2 f_{xx} + 2(x - a)(y - b)f_{xy} + (y - b)^2 f_{yy}\right] + \dots$$

> **Key Notes & Application**: All partial derivatives are evaluated at the base expansion point $(a, b)$.

#### 🔹 Maclaurin’s Expansion about $(0, 0)$

$$f(x, y) = f(0, 0) + [x f_x + y f_y] + \frac{1}{2!}[x^2 f_{xx} + 2xy f_{xy} + y^2 f_{yy}] + \dots$$

> **Key Notes & Application**: Standard approximation formula for multivariable polynomials and trigonometric combinations.

### 📐 Area 4: Extrema of Functions of Two Variables & Lagrange Multipliers
*Stationary points, second derivative test discriminant, and constrained optimization.*

#### 🔹 Stationary Points Determining Conditions

$$f_x(x, y) = 0 \quad \text{and} \quad f_y(x, y) = 0$$

> **Key Notes & Application**: Simultaneously solve both equations to find the critical points $(a, b)$.

#### 🔹 Second Derivative Discriminant Test

$$\Delta = r t - s^2, \quad \text{where } r = f_{xx}(a, b), \ s = f_{xy}(a, b), \ t = f_{yy}(a, b)$$

> **Key Notes & Application**: Classification: (1) $\Delta > 0$ and $r > 0 \implies$ Local Minimum; (2) $\Delta > 0$ and $r < 0 \implies$ Local Maximum; (3) $\Delta < 0 \implies$ Saddle Point; (4) $\Delta = 0 \implies$ Test Inconclusive.

#### 🔹 Lagrange’s Method of Undetermined Multipliers

$$\nabla f = \lambda \nabla g \iff \begin{cases} f_x + \lambda g_x = 0 \\ f_y + \lambda g_y = 0 \\ f_z + \lambda g_z = 0 \\ g(x, y, z) = 0 \end{cases}$$

> **Key Notes & Application**: Used to maximize/minimize $f(x, y, z)$ subject to the constraint $g(x, y, z) = 0$. $\lambda$ is the Lagrange multiplier.

---

## 📚 Syllabus & Core Topics

### Topic 1: Partial Derivatives, Euler Theorem & Chain Rule

**Tags**: `Derivatives` `Euler Theorem`

**Subtopics Checklist**:
- [ ] Homogeneous functions and Euler theorem verification
- [ ] Composite functions and chain rule partial differentiation

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2025 · 7 Marks]

> **Question**: If u = sin^-1((x + 2y + 3z) / sqrt(x^8 + y^8 + z^8)), prove that x(∂u/∂x) + y(∂u/∂y) + z(∂u/∂z) = -3 tan(u).

**Key Concept / Exam Tip**: Let f = sin(u). Determine the degree of homogeneity of f(x, y, z). Degree is 1 - 4 = -3.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
u = sin^-1 [ (x + 2y + 3z) / sqrt(x^8 + y^8 + z^8) ].

Required Result:
Prove that x(∂u/∂x) + y(∂u/∂y) + z(∂u/∂z) = -3 tan(u).

Step 1: Isolate the algebraic function:
sin(u) = (x + 2y + 3z) / sqrt(x^8 + y^8 + z^8) = f(x, y, z).

Step 2: Check homogeneity of f:
Substitute x -> tx, y -> ty, z -> tz:
f(tx, ty, tz) = (tx + 2ty + 3tz) / sqrt((tx)^8 + (ty)^8 + (tz)^8)
= t(x + 2y + 3z) / sqrt(t^8 (x^8 + y^8 + z^8))
= t(x + 2y + 3z) / [t^4 sqrt(x^8 + y^8 + z^8)]
= t^(1 - 4) · f(x, y, z) = t^(-3) · f(x, y, z).
Therefore, f is a homogeneous function of degree n = -3.

Step 3: Apply Euler's Theorem for f(x, y, z):
x (∂f/∂x) + y (∂f/∂y) + z (∂f/∂z) = n · f = -3 f.

Step 4: Relate derivatives of f to u:
Since f = sin(u):
∂f/∂x = cos(u) · (∂u/∂x)
∂f/∂y = cos(u) · (∂u/∂y)
∂f/∂z = cos(u) · (∂u/∂z).

Substitute into Euler's equation:
x [cos(u) (∂u/∂x)] + y [cos(u) (∂u/∂y)] + z [cos(u) (∂u/∂z)] = -3 sin(u)
cos(u) [ x (∂u/∂x) + y (∂u/∂y) + z (∂u/∂z) ] = -3 sin(u)
x (∂u/∂x) + y (∂u/∂y) + z (∂u/∂z) = -3 [sin(u) / cos(u)] = -3 tan(u).

Final Answer:
Proved: x(∂u/∂x) + y(∂u/∂y) + z(∂u/∂z) = -3 tan(u).

</details>

### Topic 2: Maxima, Minima & Lagrange Multipliers

**Tags**: `Extrema` `Lagrange Multiplier` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Critical points and second derivative discriminant test
- [ ] Constrained optimization using Lagrange multipliers

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Find the maximum and minimum distances from the origin to the curve 5x^2 + 6xy + 5y^2 = 8 using the method of Lagrange multipliers.

**Key Concept / Exam Tip**: Objective function f(x, y) = x^2 + y^2. Constraint g(x, y) = 5x^2 + 6xy + 5y^2 - 8 = 0. Solve ∇f = λ ∇g.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
Curve constraint: g(x, y) = 5x^2 + 6xy + 5y^2 - 8 = 0.

Required Result:
Maximum and minimum distances from origin (0, 0) using Lagrange multipliers.

Step 1: Formulation:
Distance from origin is d = sqrt(x^2 + y^2).
To simplify, optimize square of distance:
f(x, y) = x^2 + y^2.
Constraint: g(x, y) = 5x^2 + 6xy + 5y^2 - 8 = 0.

Step 2: Lagrange System ∇f = λ ∇g:
∂f/∂x = λ (∂g/∂x) => 2x = λ(10x + 6y) => x = λ(5x + 3y)  --- (1)
∂f/∂y = λ (∂g/∂y) => 2y = λ(6x + 10y) => y = λ(3x + 5y)  --- (2)

Step 3: Eliminate λ:
Multiply (1) by y: xy = λ(5xy + 3y^2)
Multiply (2) by x: xy = λ(3x^2 + 5xy)
Equating both sides:
λ(5xy + 3y^2) = λ(3x^2 + 5xy)
Since λ != 0 (otherwise x=y=0, which violates constraint):
3y^2 = 3x^2 => y^2 = x^2 => y = ±x.

Step 4: Substitution into constraint:
Case A: y = x
5x^2 + 6x(x) + 5x^2 = 8 => 16x^2 = 8 => x^2 = 1/2.
f = x^2 + y^2 = 1/2 + 1/2 = 1.
Distance d = sqrt(1) = 1 (Minimum).

Case B: y = -x
5x^2 + 6x(-x) + 5(-x)^2 = 8 => (5 - 6 + 5)x^2 = 8 => 4x^2 = 8 => x^2 = 2.
f = x^2 + y^2 = 2 + 2 = 4.
Distance d = sqrt(4) = 2 (Maximum).

Final Answer:
Minimum distance from origin = 1 unit.
Maximum distance from origin = 2 units.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
