# MAT102 · Module 4: Vector Integral Calculus & Integral Theorems

**Subject**: Vector Calculus & Differential Equations (MAT102)
**Semester**: S2 · KTU Scheme

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
