# MAT102 · Module 5: Laplace Transforms & Differential Equations

**Subject**: Vector Calculus & Differential Equations (MAT102)
**Semester**: S2 · KTU Scheme

---

## 📚 Syllabus & Core Topics

### Topic 1: Laplace Transforms, Convolution Theorem & IVPs

**Tags**: `Laplace Transform` `Convolution` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Transforms of standard functions and shifting properties
- [ ] Convolution theorem and inverse Laplace transforms
- [ ] Solving 2nd order initial value ODEs using Laplace transforms

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Solve using Laplace transform the differential equation: y'' + 4y' + 4y = e^(-2t), given the initial conditions y(0) = 0 and y'(0) = 1.

**Key Concept / Exam Tip**: L{y''} = s^2 Y(s) - s y(0) - y'(0). L{y'} = s Y(s) - y(0). L{e^(-2t)} = 1 / (s + 2).

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Initial Value Problem:
y'' + 4y' + 4y = e^(-2t)
Initial conditions: y(0) = 0, y'(0) = 1.

Step 1: Take Laplace Transform of both sides:
L{y''} + 4 L{y'} + 4 L{y} = L{e^(-2t)}
[ s^2 Y(s) - s y(0) - y'(0) ] + 4 [ s Y(s) - y(0) ] + 4 Y(s) = 1 / (s + 2).

Step 2: Substitute initial conditions y(0) = 0 and y'(0) = 1:
[ s^2 Y(s) - s(0) - 1 ] + 4 [ s Y(s) - 0 ] + 4 Y(s) = 1 / (s + 2)
(s^2 + 4s + 4) Y(s) - 1 = 1 / (s + 2)
(s + 2)^2 Y(s) = 1 + 1 / (s + 2) = (s + 3) / (s + 2)
Y(s) = (s + 3) / (s + 2)^3.

Step 3: Partial Fraction / Shifting Form Decomposition:
Rewrite numerator (s + 3) as (s + 2) + 1:
Y(s) = [ (s + 2) + 1 ] / (s + 2)^3
= (s + 2) / (s + 2)^3 + 1 / (s + 2)^3
= 1 / (s + 2)^2 + 1 / (s + 2)^3.

Step 4: Take Inverse Laplace Transform L^-1:
By First Shifting Theorem: L^-1{ F(s - a) } = e^(at) L^-1{ F(s) }.
Here a = -2:
1. L^-1{ 1 / (s + 2)^2 } = e^(-2t) · L^-1{ 1 / s^2 } = e^(-2t) · t = t e^(-2t).
2. L^-1{ 1 / (s + 2)^3 } = e^(-2t) · L^-1{ 1 / s^3 } = e^(-2t) · (t^2 / 2!) = (1/2) t^2 e^(-2t).

Step 5: Assemble Final Solution:
y(t) = t e^(-2t) + (1/2) t^2 e^(-2t)
= e^(-2t) [ t + t^2 / 2 ].

Final Answer:
y(t) = e^(-2t) (t + t^2 / 2).

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
