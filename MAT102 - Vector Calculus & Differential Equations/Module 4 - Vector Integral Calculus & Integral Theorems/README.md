# MAT102 · Module 4: Vector Integral Calculus & Integral Theorems

**Subject**: Vector Calculus & Differential Equations (MAT102)
**Semester**: S2 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 4: Vector Integral Calculus & Integral Theorems

> **Quick Jump to Equation Areas**:
- [Area 1: Line Integrals & Work Done](#-area%201%20line%20integrals%20%20work%20done)
- [Area 2: Green’s, Stokes’ & Gauss Divergence Integral Theorems](#-area%202%20greens%20stokes%20%20gauss%20divergence%20integral%20theorems)

### 📐 Area 1: Line Integrals & Work Done
*Vector circulation along paths and conservative line integral independence.*

#### 🔹 Work Done by Force Field $\mathbf{F}$

$$W = \int_C \mathbf{F} \cdot d\mathbf{r} = \int_C (F_1 dx + F_2 dy + F_3 dz)$$

> **Key Notes & Application**: If field is conservative ($\mathbf{F} = \nabla \phi$), $W = \phi(B) - \phi(A)$ independent of path, and $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$.

### 📐 Area 2: Green’s, Stokes’ & Gauss Divergence Integral Theorems
*Three fundamental bridge theorems connecting line, surface, and volume integrals.*

#### 🔹 Green’s Theorem in the Plane

$$\oint_C (M \, dx + N \, dy) = \iint_R \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) dx \, dy$$

> **Key Notes & Application**: Converts line integral around closed curve $C$ into a double integral over enclosed region $R$.

#### 🔹 Stokes’ Theorem (Contour to Surface)

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot \hat{\mathbf{n}} \, dS$$

> **Key Notes & Application**: Equates circulation of $\mathbf{F}$ along boundary $C$ to the surface flux of $\text{curl } \mathbf{F}$.

#### 🔹 Gauss’ Divergence Theorem (Surface to Volume)

$$\iint_S \mathbf{F} \cdot \hat{\mathbf{n}} \, dS = \iiint_V (\nabla \cdot \mathbf{F}) \, dV$$

> **Key Notes & Application**: Converts total outward flux through closed boundary surface $S$ into a volume integral of divergence.

---

## 📚 Syllabus & Core Topics

### Topic 1: Green Theorem, Gauss Divergence Theorem & Stokes Theorem

**Tags**: `Gauss Divergence` `Stokes Theorem` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Green theorem in plane and area calculation
- [ ] Gauss divergence theorem verification over cubes and spheres
- [ ] Stokes theorem line integral vs surface integral verification

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Verify Gauss Divergence Theorem for F = (x^2 - yz) i + (y^2 - zx) j + (z^2 - xy) k taken over the rectangular parallelepiped 0 <= x <= a, 0 <= y <= b, 0 <= z <= c.

**Key Concept / Exam Tip**: div(F) = 2(x + y + z). Volume integral equals abc(a + b + c). Sum surface integrals over all 6 faces.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Statement of Gauss Divergence Theorem:
iint_S (F · n) dS = iiint_V (∇ · F) dV
where S is the closed boundary surface enclosing volume V, and n is the outward unit normal vector.

Given Vector Field:
F = (x^2 - yz) i + (y^2 - zx) j + (z^2 - xy) k.
Region: Parallelepiped 0 <= x <= a, 0 <= y <= b, 0 <= z <= c.

Part 1: Volume Integral Evaluation:
Compute divergence ∇ · F:
∇ · F = ∂/∂x(x^2 - yz) + ∂/∂y(y^2 - zx) + ∂/∂z(z^2 - xy)
= 2x + 2y + 2z = 2(x + y + z).

iiint_V (∇ · F) dV = 2 int_0^a dx int_0^b dy int_0^c (x + y + z) dz
= 2 [ int_0^a x dx int_0^b dy int_0^c dz + int_0^a dx int_0^b y dy int_0^c dz + int_0^a dx int_0^b dy int_0^c z dz ]
= 2 [ (a^2 / 2)(b)(c) + (a)(b^2 / 2)(c) + (a)(b)(c^2 / 2) ]
= 2 [ (1/2) a^2 b c + (1/2) a b^2 c + (1/2) a b c^2 ]
= a b c (a + b + c)   --- (Equation 1)

Part 2: Surface Integral Evaluation over 6 Faces:
Face 1: x = a, n = i, dS = dy dz (0 <= y <= b, 0 <= z <= c):
F · n = x^2 - yz = a^2 - yz
iint_(S1) (a^2 - yz) dy dz = a^2 b c - (b^2 / 2)(c^2 / 2) = a^2 b c - b^2 c^2 / 4.

Face 2: x = 0, n = -i, dS = dy dz:
F · n = -(x^2 - yz)|_(x=0) = yz
iint_(S2) yz dy dz = (b^2 / 2)(c^2 / 2) = b^2 c^2 / 4.
Sum for x-faces: iint_(S1+S2) = a^2 b c.

Face 3: y = b, n = j, dS = dx dz: F · n = b^2 - zx
Face 4: y = 0, n = -j, dS = dx dz: F · n = zx
Sum for y-faces: iint_(S3+S4) = a b^2 c.

Face 5: z = c, n = k, dS = dx dy: F · n = c^2 - xy
Face 6: z = 0, n = -k, dS = dx dy: F · n = xy
Sum for z-faces: iint_(S5+S6) = a b c^2.

Total Surface Integral:
iint_S (F · n) dS = a^2 b c + a b^2 c + a b c^2 = a b c (a + b + c)   --- (Equation 2)

Conclusion:
From Equation (1) and Equation (2):
Volume Integral = Surface Integral = a b c (a + b + c).
Hence, Gauss Divergence Theorem is verified.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
