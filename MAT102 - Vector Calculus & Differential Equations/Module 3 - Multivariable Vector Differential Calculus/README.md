# MAT102 · Module 3: Multivariable Vector Differential Calculus

**Subject**: Vector Calculus & Differential Equations (MAT102)
**Semester**: S2 · KTU Scheme

---

## 📚 Syllabus & Core Topics

### Topic 1: Gradient, Directional Derivative & Vector Fields

**Tags**: `Vector Diff` `Directional Derivative` `Irrotational`

**Subtopics Checklist**:
- [ ] Directional derivative and maximum rate of increase
- [ ] Divergence, curl, solenoidal and irrotational fields

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2025 · 7 Marks]

> **Question**: Find the directional derivative of phi = x^2 y z + 4 x z^2 at the point P(1, -2, -1) in the direction of the vector a = 2i - j - 2k.

**Key Concept / Exam Tip**: Directional derivative = ∇φ · u, where u = a / |a|.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Scalar Field:
φ(x, y, z) = x^2 y z + 4 x z^2.
Point: P(1, -2, -1).
Direction vector: a = 2i - j - 2k.

Step 1: Compute the Gradient ∇φ:
∇φ = (∂φ/∂x) i + (∂φ/∂y) j + (∂φ/∂z) k
- ∂φ/∂x = 2xyz + 4z^2
- ∂φ/∂y = x^2 z
- ∂φ/∂z = x^2 y + 8xz
∇φ = (2xyz + 4z^2) i + (x^2 z) j + (x^2 y + 8xz) k.

Step 2: Evaluate ∇φ at point P(1, -2, -1):
- ∂φ/∂x = 2(1)(-2)(-1) + 4(-1)^2 = 4 + 4 = 8
- ∂φ/∂y = (1)^2 (-1) = -1
- ∂φ/∂z = (1)^2 (-2) + 8(1)(-1) = -2 - 8 = -10.
Therefore:
∇φ|_P = 8i - j - 10k.

Step 3: Unit vector u in direction of a = 2i - j - 2k:
|a| = sqrt(2^2 + (-1)^2 + (-2)^2) = sqrt(4 + 1 + 4) = sqrt(9) = 3.
u = a / |a| = (2i - j - 2k) / 3.

Step 4: Compute Directional Derivative (DD):
DD = ∇φ · u
= (8i - j - 10k) · (2i - j - 2k) / 3
= [ 8(2) + (-1)(-1) + (-10)(-2) ] / 3
= [ 16 + 1 + 20 ] / 3
= 37 / 3.

Final Answer:
Directional Derivative = 37 / 3.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
