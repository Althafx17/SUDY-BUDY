# MAT101 · Module 5: Infinite Series & Power Series

**Subject**: Linear Algebra and Calculus (MAT101)
**Semester**: S1 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 5: Infinite Series & Power Series

> **Quick Jump to Equation Areas**:
- [Area 1: Standard Reference Series & Convergence Tests](#-area%201%20standard%20reference%20series%20%20convergence%20tests)
- [Area 2: Positive Term Series Tests (Comparison & Ratio Tests)](#-area%202%20positive%20term%20series%20tests%20comparison%20%20ratio%20tests)
- [Area 3: Alternating Series & Absolute Convergence](#-area%203%20alternating%20series%20%20absolute%20convergence)
- [Area 4: Power Series, Radius & Interval of Convergence](#-area%204%20power%20series%20radius%20%20interval%20of%20convergence)

### 📐 Area 1: Standard Reference Series & Convergence Tests
*Geometric series, p-series, and divergence test baselines.*

#### 🔹 Geometric Series Sum & Condition

$$\sum_{n=0}^\infty a r^n = \frac{a}{1 - r} \iff |r| < 1$$

> **Key Notes & Application**: Diverges if $|r| \ge 1$.

#### 🔹 p-Series (Harmonic Series) Test

$$\sum_{n=1}^\infty \frac{1}{n^p} \quad \begin{cases} \text{Converges} & \text{if } p > 1 \\ \text{Diverges} & \text{if } p \le 1 \end{cases}$$

> **Key Notes & Application**: Crucial reference benchmark for limit comparison tests.

#### 🔹 Divergence Test ($n^{\text{th}}$ Term Test)

$$\lim_{n \to \infty} a_n \neq 0 \implies \sum a_n \text{ Diverges}$$

> **Key Notes & Application**: Warning: $\lim a_n = 0$ does NOT guarantee convergence (e.g., harmonic series $\sum 1/n$).

### 📐 Area 2: Positive Term Series Tests (Comparison & Ratio Tests)
*Limit comparison, D’Alembert’s ratio test, and Raabe’s test for series of positive terms.*

#### 🔹 Limit Comparison Test (LCT)

$$L = \lim_{n \to \infty} \frac{a_n}{b_n} \quad (0 < L < \infty) \implies \sum a_n \text{ and } \sum b_n \text{ both converge or both diverge}$$

> **Key Notes & Application**: Choose $b_n = 1/n^p$ by taking the dominant terms of numerator and denominator.

#### 🔹 D’Alembert’s Ratio Test

$$L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| \quad \begin{cases} L < 1 & \implies \text{Converges} \\ L > 1 & \implies \text{Diverges} \\ L = 1 & \implies \text{Test Inconclusive (Apply Raabe's)} \end{cases}$$

> **Key Notes & Application**: Extremely effective for expressions containing factorials ($n!$) and exponentials ($x^n$).

#### 🔹 Raabe’s Test (When Ratio Test Fails $L = 1$)

$$R = \lim_{n \to \infty} n \left( \frac{a_n}{a_{n+1}} - 1 \right) \quad \begin{cases} R > 1 & \implies \text{Converges} \\ R < 1 & \implies \text{Diverges} \\ R = 1 & \implies \text{Test Inconclusive} \end{cases}$$

> **Key Notes & Application**: Notice the ratio inside Raabe's is $a_n / a_{n+1}$ (reciprocal of ratio test).

#### 🔹 Cauchy’s Root Test

$$L = \lim_{n \to \infty} (a_n)^{1/n} \quad (L < 1 \implies \text{Conv}, \ L > 1 \implies \text{Div})$$

> **Key Notes & Application**: Ideal when $a_n$ contains powers of $n$, e.g., $\left(\frac{n}{n+1}\right)^{n^2}$.

### 📐 Area 3: Alternating Series & Absolute Convergence
*Leibniz test and conditional convergence classification.*

#### 🔹 Leibniz’s Alternating Series Test

$$\sum_{n=1}^\infty (-1)^{n-1} u_n \text{ Converges if: } (1) \ u_{n+1} \le u_n \ \forall n, \quad (2) \ \lim_{n \to \infty} u_n = 0$$

> **Key Notes & Application**: $u_n > 0$ for all $n$.

#### 🔹 Absolute vs Conditional Convergence

$$\begin{cases} \sum |a_n| \text{ converges} & \implies \sum a_n \text{ is Absolutely Convergent} \\ \sum a_n \text{ converges but } \sum |a_n| \text{ diverges} & \implies \sum a_n \text{ is Conditionally Convergent} \end{cases}$$

> **Key Notes & Application**: Every absolutely convergent series is automatically convergent.

### 📐 Area 4: Power Series, Radius & Interval of Convergence
*Interval calculations and endpoint evaluations for power series.*

#### 🔹 Radius of Convergence ($R$)

$$R = \lim_{n \to \infty} \left| \frac{c_n}{c_{n+1}} \right| = \frac{1}{\lim_{n \to \infty} |c_n|^{1/n}}$$

> **Key Notes & Application**: For power series $\sum_{n=0}^\infty c_n (x - a)^n$.

#### 🔹 Interval of Convergence

$$(a - R, a + R)$$

> **Key Notes & Application**: Always check endpoints $x = a - R$ and $x = a + R$ separately using standard positive/alternating tests.

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
