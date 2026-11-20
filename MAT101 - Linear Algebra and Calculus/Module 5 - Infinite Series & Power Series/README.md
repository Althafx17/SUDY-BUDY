# MAT101 · Module 5: Infinite Series & Power Series

**Subject**: Linear Algebra and Calculus (MAT101)
**Semester**: S1 · KTU Scheme

---

## 📚 Syllabus & Core Topics

### Topic 1: Convergence Tests for Positive Term Series

**Tags**: `Series Tests` `Core Theory`

**Subtopics Checklist**:
- [ ] Geometric and p-series baseline comparisons
- [ ] D Alembert ratio test and Raabe test
- [ ] Cauchy integral and root tests

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 7 Marks]

> **Question**: Test the convergence of the series: sum_(n=1)^infinity ((n!)^2 / (2n)!) * x^(2n) for x > 0.

**Key Concept / Exam Tip**: Apply D Alembert ratio test: compute lim a_(n+1)/a_n as n -> infinity.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Series:
sum_(n=1)^infinity a_n, where a_n = [ (n!)^2 / (2n)! ] · x^(2n) (x > 0).

Step 1: Write (n+1)-th term:
a_(n+1) = [ ((n+1)!)^2 / (2n + 2)! ] · x^(2n + 2).

Step 2: Form the Ratio a_(n+1) / a_n:
a_(n+1) / a_n = [ ((n+1)!)^2 / (n!)^2 ] · [ (2n)! / (2n + 2)! ] · [ x^(2n+2) / x^(2n) ]
= [ (n + 1)! / n! ]^2 · [ (2n)! / ((2n + 2)(2n + 1)(2n)!) ] · x^2
= (n + 1)^2 · [ 1 / ((2n + 2)(2n + 1)) ] · x^2
= [ (n + 1)^2 / (2(n + 1)(2n + 1)) ] · x^2
= [ (n + 1) / (2(2n + 1)) ] · x^2.

Step 3: Evaluate limit as n -> infinity:
L = lim_(n->inf) (a_(n+1) / a_n) = lim_(n->inf) [ (1 + 1/n) / (2(2 + 1/n)) ] · x^2
  = [ 1 / (2 · 2) ] · x^2 = x^2 / 4.

Step 4: Conclusions by D'Alembert Ratio Test:
1. If L < 1 => x^2 / 4 < 1 => x^2 < 4 => 0 < x < 2: Series converges absolutely.
2. If L > 1 => x^2 / 4 > 1 => x > 2: Series diverges.
3. If L = 1 => x = 2: Test fails. When x = 2, using Raabe's test confirms divergence.

Final Answer:
Converges for 0 < x < 2; Diverges for x >= 2.

</details>

### Topic 2: Taylor Series, Maclaurin Series & Fourier Series

**Tags**: `Fourier Series` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Maclaurin expansions of standard elementary functions
- [ ] Euler formulas for Fourier coefficients over [-pi, pi] and [-L, L]
- [ ] Half-range Fourier sine and cosine expansions and Parseval identity

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2025 · 14 Marks]

> **Question**: Find the Fourier series representation of f(x) = x^2 in the interval (-pi, pi) and hence deduce that:
(i) 1 - 1/4 + 1/9 - 1/16 + ... = pi^2 / 12
(ii) 1 + 1/4 + 1/9 + 1/16 + ... = pi^2 / 6.

**Key Concept / Exam Tip**: Since f(-x) = (-x)^2 = x^2, f(x) is even. Thus bn = 0. Compute a0 and an using integration by parts.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Function:
f(x) = x^2 on interval (-π, π).

Step 1: Check parity of f(x):
f(-x) = (-x)^2 = x^2 = f(x) => Even function.
Therefore, the sine coefficients bn = 0 for all n >= 1.
The Fourier series contains only cosine terms:
f(x) = a0 / 2 + sum_(n=1)^infinity an cos(nx).

Step 2: Calculate a0:
a0 = (2 / π) int_0^π x^2 dx = (2 / π) [ x^3 / 3 ]_0^π = (2 / π) · (π^3 / 3) = 2π^2 / 3.
Therefore, a0 / 2 = π^2 / 3.

Step 3: Calculate an using Bernoulli's integration by parts:
an = (2 / π) int_0^π x^2 cos(nx) dx
= (2 / π) [ x^2 · (sin(nx)/n) - 2x · (-cos(nx)/n^2) + 2 · (-sin(nx)/n^3) ]_0^π
Since sin(nπ) = 0 and sin(0) = 0:
an = (2 / π) [ 2π · cos(nπ) / n^2 - 0 ]
= (4 / n^2) · cos(nπ) = (4 / n^2) · (-1)^n.

Step 4: Fourier Series Representation:
f(x) = π^2 / 3 + sum_(n=1)^infinity [ 4(-1)^n / n^2 ] cos(nx)
= π^2 / 3 - 4 [ cos(x)/1^2 - cos(2x)/2^2 + cos(3x)/3^2 - cos(4x)/4^2 + ... ].

Step 5: Deductions:
(i) Put x = 0 (point of continuity):
f(0) = 0^2 = 0
0 = π^2 / 3 - 4 [ 1/1^2 - 1/2^2 + 1/3^2 - 1/4^2 + ... ]
4 [ 1 - 1/4 + 1/9 - 1/16 + ... ] = π^2 / 3
1 - 1/4 + 1/9 - 1/16 + ... = π^2 / 12 (Deduction 1 proved).

(ii) Put x = π (point of continuity):
f(π) = π^2
π^2 = π^2 / 3 - 4 [ cos(π)/1^2 - cos(2π)/2^2 + cos(3π)/3^2 - ... ]
π^2 - π^2 / 3 = -4 [ -1/1^2 - 1/2^2 - 1/3^2 - 1/4^2 - ... ]
2π^2 / 3 = 4 [ 1/1^2 + 1/2^2 + 1/3^2 + 1/4^2 + ... ]
1 + 1/4 + 1/9 + 1/16 + ... = (2π^2 / 3) / 4 = π^2 / 6 (Deduction 2 proved).

Final Answer:
f(x) = π^2/3 - 4 sum_(n=1)^inf ((-1)^(n-1)/n^2) cos(nx); Series 1 sum = π^2/12; Series 2 sum = π^2/6.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
