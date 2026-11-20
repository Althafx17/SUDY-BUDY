# MAT102 · Module 1: First Order Ordinary Differential Equations

**Subject**: Vector Calculus & Differential Equations (MAT102)
**Semester**: S2 · KTU Scheme

---

## 📚 Syllabus & Core Topics

### Topic 1: Exact Differential Equations & Integrating Factors

**Tags**: `Exact ODE` `Integrating Factor` `Repeated PYQ`

**Subtopics Checklist**:
- [ ] Exact ODE condition and general solution
- [ ] Integrating factors four rules

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 7 Marks]

> **Question**: Solve the differential equation: (x^2 + y^2 + 2x) dx + 2y dy = 0.

**Key Concept / Exam Tip**: Identify M and N. Find (∂M/∂y - ∂N/∂x)/N. The integrating factor is e^x.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given ODE:
(x^2 + y^2 + 2x) dx + 2y dy = 0.

Required Result:
General solution.

Step 1: Test for Exactness:
M(x, y) = x^2 + y^2 + 2x => ∂M/∂y = 2y
N(x, y) = 2y => ∂N/∂x = 0.
Since ∂M/∂y != ∂N/∂x (2y != 0), the equation is not exact.

Step 2: Find Integrating Factor (IF):
Evaluate:
[ (∂M/∂y - ∂N/∂x) ] / N = (2y - 0) / (2y) = 1 = f(x) (function of x alone).
Integrating Factor:
IF = e^(int f(x) dx) = e^(int 1 dx) = e^x.

Step 3: Multiply given ODE by IF = e^x:
e^x (x^2 + y^2 + 2x) dx + 2y e^x dy = 0.
Now:
M' = e^x (x^2 + y^2 + 2x) => ∂M'/∂y = 2y e^x
N' = 2y e^x => ∂N'/∂x = 2y e^x.
∂M'/∂y = ∂N'/∂x, so the transformed equation is exact.

Step 4: Integration to find General Solution:
Formula: int M' dx (treating y as constant) + int (terms in N' free of x) dy = C.

Part A: int e^x (x^2 + 2x + y^2) dx (y constant):
= int e^x (x^2 + 2x) dx + y^2 int e^x dx.
Recall the standard result: int e^x [f(x) + f'(x)] dx = e^x f(x).
Here f(x) = x^2, f'(x) = 2x => int e^x (x^2 + 2x) dx = x^2 e^x.
Thus:
int M' dx = x^2 e^x + y^2 e^x = (x^2 + y^2) e^x.

Part B: Terms in N' free of x:
N' = 2y e^x has x in every term => None (0).
int 0 dy = 0.

Final General Solution:
e^x (x^2 + y^2) = C.

</details>

##### Q2 [2024 · 7 Marks]

> **Question**: Find the orthogonal trajectories of the family of coaxial circles x^2 + y^2 + 2gx + c = 0, where g is a parameter and c is a constant.

**Key Concept / Exam Tip**: Differentiate to eliminate g. Replace dy/dx by -dx/dy and integrate the resulting ODE.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Family of Curves:
x^2 + y^2 + 2gx + c = 0   --- (1)
where g is the parameter to be eliminated, and c is a fixed constant.

Step 1: Differentiate (1) with respect to x:
2x + 2y (dy/dx) + 2g(1) + 0 = 0
x + y (dy/dx) + g = 0
g = - [ x + y (dy/dx) ]   --- (2)

Step 2: Eliminate parameter g by substituting (2) into (1):
x^2 + y^2 + 2 [ - (x + y (dy/dx)) ] x + c = 0
x^2 + y^2 - 2x^2 - 2xy (dy/dx) + c = 0
y^2 - x^2 + c = 2xy (dy/dx)
dy/dx = (y^2 - x^2 + c) / (2xy)   --- (3)
This is the differential equation of the given family of circles.

Step 3: Differential Equation of Orthogonal Trajectories:
Replace dy/dx with -dx/dy (negative reciprocal of slope):
-dx/dy = (y^2 - x^2 + c) / (2xy)
dy/dx = - (2xy) / (y^2 - x^2 + c) = (2xy) / (x^2 - y^2 - c)
(x^2 - y^2 - c) dy - 2xy dx = 0
2xy dx + (y^2 - x^2 + c) dy = 0.

Step 4: Solve the Orthogonal Trajectories Equation:
This is an exact equation after multiplying by 1/y^2 (or by inspection):
Dividing by y^2:
(2x/y) dx + (1 - x^2/y^2 + c/y^2) dy = 0
[ (2x/y) dx - (x^2/y^2) dy ] + dy + (c/y^2) dy = 0
d(x^2 / y) + dy + c y^(-2) dy = 0.

Integrating each term:
x^2 / y + y - c / y = 2k (where 2k is an arbitrary constant)
Multiply by y:
x^2 + y^2 - c = 2ky
x^2 + y^2 - 2ky - c = 0.

Final Answer:
x^2 + y^2 - 2ky - c = 0 (a family of coaxial circles with centers on the y-axis).

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
