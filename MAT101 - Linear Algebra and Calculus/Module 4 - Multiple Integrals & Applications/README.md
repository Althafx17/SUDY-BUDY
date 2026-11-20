# MAT101 · Module 4: Multiple Integrals & Applications

**Subject**: Linear Algebra and Calculus (MAT101)
**Semester**: S1 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 4: Multiple Integrals & Applications

> **Quick Jump to Equation Areas**:
- [Area 1: Double Integrals in Cartesian Coordinates](#-area%201%20double%20integrals%20in%20cartesian%20coordinates)
- [Area 2: Change of Order of Integration](#-area%202%20change%20of%20order%20of%20integration)
- [Area 3: Double Integrals in Polar Coordinates](#-area%203%20double%20integrals%20in%20polar%20coordinates)
- [Area 4: Triple Integrals in Cylindrical & Spherical Polar Coordinates](#-area%204%20triple%20integrals%20in%20cylindrical%20%20spherical%20polar%20coordinates)

### 📐 Area 1: Double Integrals in Cartesian Coordinates
*Formulas for area, volume, mass, and limits evaluation.*

#### 🔹 Area of Plane Region $R$

$$A = \iint_R dx \, dy = \int_{x=a}^b \int_{y=g_1(x)}^{g_2(x)} dy \, dx$$

> **Key Notes & Application**: Vertical strip: integrate with respect to $y$ first ($y$ runs from lower curve to upper curve), then $x$ from $a$ to $b$.

#### 🔹 Volume Under a Surface $z = f(x, y)$

$$V = \iint_R f(x, y) \, dx \, dy$$

> **Key Notes & Application**: Represents the cylindrical volume bounded above by surface $z = f(x, y)$ and below by region $R$ in $xy$-plane.

#### 🔹 Mass with Variable Surface Density $\rho(x, y)$

$$M = \iint_R \rho(x, y) \, dx \, dy$$

> **Key Notes & Application**: Center of gravity: $\bar{x} = \frac{1}{M}\iint x \rho \, dx dy, \quad \bar{y} = \frac{1}{M}\iint y \rho \, dx dy$.

### 📐 Area 2: Change of Order of Integration
*Reversing integration order by re-sketching and boundary slicing.*

#### 🔹 Cartesian Order Interchange Identity

$$\int_a^b \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \, dx = \int_c^d \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \, dy$$

> **Key Notes & Application**: Essential technique when the inner integrand $\int f(x, y) dy$ lacks an elementary antiderivative (e.g., $e^{-x^2}, \frac{\sin x}{x}$).

### 📐 Area 3: Double Integrals in Polar Coordinates
*Coordinate transformations, area elements, and Jacobian conversions.*

#### 🔹 Polar Coordinate Transformations & Jacobian

$$x = r \cos \theta, \quad y = r \sin \theta, \quad x^2 + y^2 = r^2, \quad dx \, dy = r \, dr \, d\theta$$

> **Key Notes & Application**: The Jacobian determinant $J = \frac{\partial(x, y)}{\partial(r, \theta)} = r$. Always remember the extra factor of $r$!

#### 🔹 Polar Area Formula

$$A = \iint_{R'} r \, dr \, d\theta = \int_{\theta_1}^{\theta_2} \int_{r_1(\theta)}^{r_2(\theta)} r \, dr \, d\theta = \frac{1}{2} \int_{\theta_1}^{\theta_2} [r_2^2 - r_1^2] \, d\theta$$

> **Key Notes & Application**: Used for circular, cardioid ($r = a(1 + \cos\theta)$), and rose petal regions.

### 📐 Area 4: Triple Integrals in Cylindrical & Spherical Polar Coordinates
*3D volume elements and transformations for spheres and cylinders.*

#### 🔹 Volume by Cartesian Triple Integral

$$V = \iiint_D dx \, dy \, dz$$

> **Key Notes & Application**: Limits are evaluated in inside-out order: $z$ limits first, then $y$, then $x$.

#### 🔹 Cylindrical Coordinates Transformation

$$x = r \cos \theta, \ y = r \sin \theta, \ z = z \implies dV = r \, dr \, d\theta \, dz$$

> **Key Notes & Application**: Ideal for regions bounded by paraboloids ($z = x^2 + y^2$) and cylinders ($x^2 + y^2 = a^2$).

#### 🔹 Spherical Polar Coordinates Transformation

$$x = \rho \sin\phi \cos\theta, \ y = \rho \sin\phi \sin\theta, \ z = \rho \cos\phi \implies dV = \rho^2 \sin\phi \, d\rho \, d\phi \, d\theta$$

> **Key Notes & Application**: Ranges for full sphere: $\rho \in [0, R], \ \phi \in [0, \pi], \ \theta \in [0, 2\pi]$.

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
