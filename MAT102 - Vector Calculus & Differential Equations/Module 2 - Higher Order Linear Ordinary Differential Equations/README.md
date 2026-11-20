# MAT102 · Module 2: Higher Order Linear Ordinary Differential Equations

**Subject**: Vector Calculus & Differential Equations (MAT102)
**Semester**: S2 · KTU Scheme

---

## 📚 Syllabus & Core Topics

### Topic 1: Method of Variation of Parameters & Cauchy-Euler Equations

**Tags**: `Variation of Parameters` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Cauchy-Euler equidimensional ODEs and x = e^z substitution
- [ ] Variation of parameters method for second order ODEs

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Solve using the method of variation of parameters: y'' + y = sec(x) tan(x).

**Key Concept / Exam Tip**: Complementary solution: y_c = c1 cos(x) + c2 sin(x). Wronskian W = 1. u(x) = -int(y2 R/W) dx, v(x) = int(y1 R/W) dx.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given ODE:
y'' + y = sec(x) tan(x).

Step 1: Complementary Solution (y_c):
Homogeneous equation: y'' + y = 0.
Auxiliary equation: m^2 + 1 = 0 => m = ±i.
y_c = c1 cos(x) + c2 sin(x).
Here y1(x) = cos(x) and y2(x) = sin(x).

Step 2: Wronskian (W):
W = | y1   y2  |
    | y1'  y2' |
  = |  cos(x)   sin(x) |
    | -sin(x)   cos(x) |
  = cos^2(x) - (-sin^2(x)) = cos^2(x) + sin^2(x) = 1.
Since W = 1 != 0, y1 and y2 are linearly independent.

Step 3: Right-Hand Side Function:
R(x) = sec(x) tan(x).

Step 4: Compute u(x) and v(x):
Formula:
u(x) = - int [ y2(x) · R(x) / W ] dx
= - int [ sin(x) · sec(x) tan(x) / 1 ] dx
= - int [ sin(x) · (1/cos(x)) · (sin(x)/cos(x)) ] dx
= - int [ sin^2(x) / cos^2(x) ] dx
= - int tan^2(x) dx
= - int (sec^2(x) - 1) dx
= - [ tan(x) - x ] = x - tan(x).

Formula:
v(x) = int [ y1(x) · R(x) / W ] dx
= int [ cos(x) · sec(x) tan(x) / 1 ] dx
= int [ cos(x) · (1/cos(x)) · tan(x) ] dx
= int tan(x) dx
= ln|sec(x)|.

Step 5: Particular Integral (y_p):
y_p = u(x) y1(x) + v(x) y2(x)
= [ x - tan(x) ] cos(x) + [ ln|sec(x)| ] sin(x)
= x cos(x) - tan(x) cos(x) + sin(x) ln|sec(x)|
= x cos(x) - [ sin(x)/cos(x) ] cos(x) + sin(x) ln|sec(x)|
= x cos(x) - sin(x) + sin(x) ln|sec(x)|.
Note: The term -sin(x) can be absorbed into c2 sin(x) of the complementary solution.

Step 6: General Solution:
y = y_c + y_p
y = c1 cos(x) + c2 sin(x) + x cos(x) + sin(x) ln|sec(x)|.

Final Answer:
y = c1 cos(x) + c2 sin(x) + x cos(x) + sin(x) ln|sec(x)|.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
