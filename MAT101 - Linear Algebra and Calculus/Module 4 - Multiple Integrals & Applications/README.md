# MAT101 · Module 4: Multiple Integrals & Applications

**Subject**: Linear Algebra and Calculus (MAT101)
**Semester**: S1 · KTU Scheme

---

## 📚 Syllabus & Core Topics

### Topic 1: Double Integrals & Change of Order of Integration

**Tags**: `Integration` `Change of Order` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Evaluation of double integrals over rectangular and general regions
- [ ] Change of order of integration with curve sketch

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2025 · 14 Marks]

> **Question**: Change the order of integration and hence evaluate: int_0^1 int_x^1 sin(y^2) dy dx.

**Key Concept / Exam Tip**: Given region: x from 0 to 1, y from x to 1. In reversed order: y goes from 0 to 1, x goes from 0 to y.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Integral:
I = int_0^1 [ int_x^1 sin(y^2) dy ] dx.

Required Result:
Change order of integration and evaluate.

Step 1: Identify Given Region of Integration:
x-limits: x = 0 to x = 1.
y-limits: y = x to y = 1.
This defines a triangular region in the first quadrant bounded by:
- The vertical line x = 0 (y-axis)
- The horizontal line y = 1
- The line y = x (hypotenuse).

Step 2: Change Order of Integration (integrate w.r.t x first):
Consider horizontal strips from left to right:
- The left boundary is x = 0.
- The right boundary is the line y = x, which gives x = y.
- The strip moves vertically from y = 0 to y = 1.
New limits:
x varies from 0 to y.
y varies from 0 to 1.

Step 3: Transformed Integral:
I = int_0^1 [ int_0^y sin(y^2) dx ] dy.

Step 4: Evaluate Inner Integral:
int_0^y sin(y^2) dx = sin(y^2) [x]_0^y = y · sin(y^2).

Step 5: Evaluate Outer Integral:
I = int_0^1 y · sin(y^2) dy.
Substitute u = y^2 => du = 2y dy => y dy = du / 2.
When y = 0, u = 0; when y = 1, u = 1.
I = (1/2) int_0^1 sin(u) du
  = (1/2) [ -cos(u) ]_0^1
  = (1/2) [ -cos(1) - (-cos(0)) ]
  = (1/2) [ 1 - cos(1) ].

Final Answer:
I = (1 - cos(1)) / 2.

</details>

### Topic 2: Triple Integrals, Cylindrical & Spherical Coordinates

**Tags**: `Triple Integrals` `Volume`

**Subtopics Checklist**:
- [ ] Cartesian triple integrals and volume calculation
- [ ] Transformation to cylindrical and spherical polar systems

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2023 · 14 Marks]

> **Question**: Find the volume of the sphere x^2 + y^2 + z^2 = a^2 using spherical polar coordinates.

**Key Concept / Exam Tip**: In spherical coordinates: dV = rho^2 sin(phi) drho dphi dtheta. Limits: rho from 0 to a, phi from 0 to pi, theta from 0 to 2pi.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
Sphere equation: x^2 + y^2 + z^2 = a^2 of radius a.

Required Result:
Volume V using spherical polar coordinates.

Step 1: Coordinate Transformations:
x = ρ sin(φ) cos(θ)
y = ρ sin(φ) sin(θ)
z = ρ cos(φ)
Volume element: dV = ρ^2 sin(φ) dρ dφ dθ.

Step 2: Limits for the complete sphere:
ρ varies from 0 to a (radial distance)
φ varies from 0 to π (colatitude angle from north pole to south pole)
θ varies from 0 to 2π (azimuthal angle in xy-plane).

Step 3: Setup Triple Integral:
V = int_0^(2π) dθ · int_0^π sin(φ) dφ · int_0^a ρ^2 dρ.

Step 4: Compute Each Factor:
1. int_0^(2π) dθ = [θ]_0^(2π) = 2π.
2. int_0^π sin(φ) dφ = [-cos(φ)]_0^π = -cos(π) - (-cos(0)) = -(-1) + 1 = 2.
3. int_0^a ρ^2 dρ = [ρ^3 / 3]_0^a = a^3 / 3.

Step 5: Multiply Results:
V = (2π) · (2) · (a^3 / 3) = (4/3) π a^3.

Final Answer:
Volume V = (4/3) π a^3.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
