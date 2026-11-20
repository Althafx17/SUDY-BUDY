# MAT101 · Module 3: Multivariable Calculus & Partial Differentiation

**Subject**: Linear Algebra and Calculus (MAT101)
**Semester**: S1 · KTU Scheme

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
