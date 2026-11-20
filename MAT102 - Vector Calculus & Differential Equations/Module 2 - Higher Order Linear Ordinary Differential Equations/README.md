# MAT102 · Module 2: Higher Order Linear Ordinary Differential Equations

**Subject**: Vector Calculus & Differential Equations (MAT102)
**Semester**: S2 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 2: Higher Order Linear Ordinary Differential Equations

> **Quick Jump to Equation Areas**:
- [Area 1: Homogeneous Linear ODEs with Constant Coefficients](#-area%201%20homogeneous%20linear%20odes%20with%20constant%20coefficients)
- [Area 2: Particular Integral ($y_p$) Short Methods](#-area%202%20particular%20integral%20yp%20short%20methods)
- [Area 3: Method of Variation of Parameters & Cauchy-Euler Equation](#-area%203%20method%20of%20variation%20of%20parameters%20%20cauchyeuler%20equation)

### 📐 Area 1: Homogeneous Linear ODEs with Constant Coefficients
*Auxiliary equation roots and complementary function ($y_c$) rules.*

#### 🔹 Auxiliary Equation (AE)

$$y'' + a y' + b y = 0 \implies m^2 + a m + b = 0$$

> **Key Notes & Application**: Roots $m_1, m_2$ determine the complementary solution $y_c$.

#### 🔹 Complementary Function Cases

$$\begin{cases} \text{Real & Distinct } (m_1 \neq m_2): & y_c = c_1 e^{m_1 x} + c_2 e^{m_2 x} \\ \text{Real & Equal } (m_1 = m_2 = m): & y_c = (c_1 + c_2 x) e^{m x} \\ \text{Complex } (\alpha \pm i \beta): & y_c = e^{\alpha x} (c_1 \cos \beta x + c_2 \sin \beta x) \end{cases}$$

> **Key Notes & Application**: For repeated complex roots: $e^{\alpha x}[(c_1 + c_2 x)\cos \beta x + (c_3 + c_4 x)\sin \beta x]$.

### 📐 Area 2: Particular Integral ($y_p$) Short Methods
*Inverse differential operator rules $\frac{1}{f(D)} X$.*

#### 🔹 Exponential & Trigonometric Short Rules

$$\frac{1}{f(D)} e^{ax} = \frac{1}{f(a)} e^{ax}, \qquad \frac{1}{f(D^2)} \sin ax = \frac{1}{f(-a^2)} \sin ax$$

> **Key Notes & Application**: Case of failure: if $f(a) = 0$, $y_p = x \frac{1}{f'(a)} e^{ax}$; if $f(-a^2) = 0$, $y_p = x \frac{1}{f'(D^2)} \sin ax$.

#### 🔹 Exponential Shift Theorem

$$\frac{1}{f(D)} [e^{ax} V] = e^{ax} \frac{1}{f(D + a)} V$$

> **Key Notes & Application**: Shifts $e^{ax}$ outside by replacing operator $D$ with $(D + a)$.

### 📐 Area 3: Method of Variation of Parameters & Cauchy-Euler Equation
*Wronskian solutions and variable-coefficient reductions.*

#### 🔹 Variation of Parameters Formula

$$y_p = -y_1 \int \frac{y_2 X}{W} dx + y_2 \int \frac{y_1 X}{W} dx, \quad W = y_1 y_2' - y_2 y_1'$$

> **Key Notes & Application**: $W = W(y_1, y_2)$ is the Wronskian of linearly independent solutions $y_1, y_2$.

#### 🔹 Cauchy-Euler Reduction

$$x^2 \frac{d^2y}{dx^2} + a x \frac{dy}{dx} + b y = X(x) \implies [\theta(\theta - 1) + a \theta + b]y = X(e^z) \quad (x = e^z, \ \theta = d/dz)$$

> **Key Notes & Application**: Converts variable-coefficient ODE into a constant-coefficient ODE in $z$.

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
