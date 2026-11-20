# MAT101 · Module 2: Eigenvalues, Diagonalization & Quadratic Forms

**Subject**: Linear Algebra and Calculus (MAT101)
**Semester**: S1 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 2: Eigenvalues, Diagonalization & Quadratic Forms

> **Quick Jump to Equation Areas**:
- [Area 1: Characteristic Equation & Eigenvalue Properties](#-area%201%20characteristic%20equation%20%20eigenvalue%20properties)
- [Area 2: Eigenvectors & Orthogonality Conditions](#-area%202%20eigenvectors%20%20orthogonality%20conditions)
- [Area 3: Cayley-Hamilton Theorem & Matrix Inversion](#-area%203%20cayleyhamilton%20theorem%20%20matrix%20inversion)
- [Area 4: Orthogonal Diagonalization & Quadratic Forms](#-area%204%20orthogonal%20diagonalization%20%20quadratic%20forms)

### 📐 Area 1: Characteristic Equation & Eigenvalue Properties
*Equations for characteristic polynomial, trace, and determinant relations.*

#### 🔹 Characteristic Equation for Matrix Order 3

$$\det(A - \lambda I) = \lambda^3 - S_1 \lambda^2 + S_2 \lambda - S_3 = 0$$

> **Key Notes & Application**: $S_1 = \text{tr}(A) = a_{11} + a_{22} + a_{33}$; $S_2 = M_{11} + M_{22} + M_{33}$ (sum of principal minors); $S_3 = \det(A)$.

#### 🔹 Trace & Determinant in Terms of Eigenvalues

$$\sum_{i=1}^n \lambda_i = \text{trace}(A), \qquad \prod_{i=1}^n \lambda_i = \det(A)$$

> **Key Notes & Application**: If matrix $A$ has eigenvalues $\lambda_i$, then $A^k$ has eigenvalues $\lambda_i^k$, and $A^{-1}$ has eigenvalues $1/\lambda_i$.

#### 🔹 Eigenvalues of Special Matrices

$$\text{Symmetric: } \lambda_i \in \mathbb{R}; \quad \text{Orthogonal: } |\lambda_i| = 1; \quad \text{Skew-symmetric: } \lambda_i \in i\mathbb{R} \cup \{0\}$$

> **Key Notes & Application**: Triangular or diagonal matrix eigenvalues are simply the main diagonal entries: $\lambda_i = a_{ii}$.

### 📐 Area 2: Eigenvectors & Orthogonality Conditions
*Homogeneous eigenvector systems and Gram-Schmidt normalization.*

#### 🔹 Eigenvector Determining Equation

$$(A - \lambda_i I) X_i = 0, \quad X_i \neq 0$$

> **Key Notes & Application**: Solved by cross-multiplication or row reduction of the singular matrix $(A - \lambda_i I)$.

#### 🔹 Orthogonality of Eigenvectors (Symmetric Matrix)

$$X_1^T X_2 = x_1 x_2 + y_1 y_2 + z_1 z_2 = 0 \quad (\text{for } \lambda_1 \neq \lambda_2)$$

> **Key Notes & Application**: Eigenvectors corresponding to distinct eigenvalues of a real symmetric matrix are always mutually orthogonal.

#### 🔹 Normalized Eigenvector (Unit Norm)

$$\hat{X} = \frac{X}{\|X\|} = \frac{1}{\sqrt{x^2 + y^2 + z^2}} \begin{bmatrix} x \\ y \\ z \end{bmatrix}$$

> **Key Notes & Application**: The normalized modal matrix $N = [\hat{X}_1 \ \hat{X}_2 \ \hat{X}_3]$ forms an orthogonal matrix ($N^T = N^{-1}$).

### 📐 Area 3: Cayley-Hamilton Theorem & Matrix Inversion
*Matrix polynomial evaluations and inverse computations.*

#### 🔹 Cayley-Hamilton Theorem Statement

$$A^3 - S_1 A^2 + S_2 A - S_3 I = 0$$

> **Key Notes & Application**: Every square matrix satisfies its own characteristic equation.

#### 🔹 Matrix Inverse via Cayley-Hamilton

$$A^{-1} = \frac{1}{S_3} (A^2 - S_1 A + S_2 I) \quad (S_3 = \det(A) \neq 0)$$

> **Key Notes & Application**: Obtained by multiplying the Cayley-Hamilton identity throughout by $A^{-1}$.

#### 🔹 High Powers of Matrix

$$A^4 = S_1 A^3 - S_2 A^2 + S_3 A$$

> **Key Notes & Application**: Allows reduction of any polynomial $P(A)$ of arbitrary high degree into a quadratic polynomial in $A$.

### 📐 Area 4: Orthogonal Diagonalization & Quadratic Forms
*Canonical reduction, matrix of quadratic forms, and definiteness classification.*

#### 🔹 Orthogonal Transformation to Diagonal Matrix

$$D = N^T A N = \text{diag}(\lambda_1, \lambda_2, \lambda_3) = \begin{bmatrix} \lambda_1 & 0 & 0 \\ 0 & \lambda_2 & 0 \\ 0 & 0 & \lambda_3 \end{bmatrix}$$

> **Key Notes & Application**: $N$ is the normalized modal matrix composed of normalized column eigenvectors.

#### 🔹 Matrix of a Quadratic Form

$$Q = X^T A X = a_{11}x^2 + a_{22}y^2 + a_{33}z^2 + 2a_{12}xy + 2a_{23}yz + 2a_{13}xz$$

> **Key Notes & Application**: Diagonal entries are coefficients of squared terms; off-diagonal entries $a_{ij} = a_{ji} = \frac{1}{2} (\text{coeff of } x_i x_j)$.

#### 🔹 Canonical Form (Sum of Squares)

$$Q = Y^T D Y = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \lambda_3 y_3^2 \quad (X = N Y)$$

> **Key Notes & Application**: Expresses the quadratic form along its principal axes.

#### 🔹 Definiteness & Signature of Quadratic Form

$$\begin{cases} \text{Positive Definite:} & \forall \lambda_i > 0 \\ \text{Negative Definite:} & \forall \lambda_i < 0 \\ \text{Positive Semi-definite:} & \lambda_i \ge 0 \text{ with at least one } 0 \\ \text{Negative Semi-definite:} & \lambda_i \le 0 \text{ with at least one } 0 \\ \text{Indefinite:} & \text{Eigenvalues have both positive & negative signs} \end{cases}$$

> **Key Notes & Application**: Index $p$ = number of positive terms; Signature $s = 2p - r$, where $r$ is the rank.

---

## 📚 Syllabus & Core Topics

### Topic 1: Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem

**Tags**: `Core Theory` `High Weightage` `Sure Shot`

**Subtopics Checklist**:
- [ ] Characteristic equation and properties of eigenvalues
- [ ] Cayley-Hamilton theorem verification and inverse calculation
- [ ] Computation of eigenvectors for distinct and repeated eigenvalues

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2025 · 14 Marks]

> **Question**: Verify Cayley-Hamilton theorem for the matrix A = [[2, -1, 1], [-1, 2, -1], [1, -1, 2]] and hence compute A^-1 and A^4.

**Key Concept / Exam Tip**: Find characteristic polynomial: λ^3 - s1 λ^2 + s2 λ - s3 = 0, where s1=tr(A), s2=sum of principal minors, s3=det(A).

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
Matrix A =
[ 2  -1   1 ]
[-1   2  -1 ]
[ 1  -1   2 ]

Required Result:
1. Verify Cayley-Hamilton Theorem.
2. Compute A^-1.
3. Compute A^4.

Step 1: Characteristic Equation det(A - λI) = 0:
Formula: λ^3 - s1 λ^2 + s2 λ - s3 = 0
- s1 = trace(A) = 2 + 2 + 2 = 6.
- s2 = Sum of principal minors:
  M11 = | 2 -1; -1 2 | = 4 - 1 = 3
  M22 = | 2  1;  1 2 | = 4 - 1 = 3
  M33 = | 2 -1; -1 2 | = 4 - 1 = 3
  s2 = 3 + 3 + 3 = 9.
- s3 = det(A) = 2(4 - 1) - (-1)(-2 + 1) + 1(1 - 2) = 2(3) + 1(-1) + 1(-1) = 6 - 1 - 1 = 4.
Characteristic equation: λ^3 - 6λ^2 + 9λ - 4 = 0.

Step 2: Verify Cayley-Hamilton Theorem:
Theorem states that A satisfies: A^3 - 6A^2 + 9A - 4I = 0.
Compute A^2:
[ 2 -1  1 ][ 2 -1  1 ]   [  6 -5  5 ]
[-1  2 -1 ][-1  2 -1 ] = [ -5  6 -5 ]
[ 1 -1  2 ][ 1 -1  2 ]   [  5 -5  6 ]

Compute A^3 = A^2 · A:
[  6 -5  5 ][ 2 -1  1 ]   [  22 -21  21 ]
[ -5  6 -5 ][-1  2 -1 ] = [ -21  22 -21 ]
[  5 -5  6 ][ 1 -1  2 ]   [  21 -21  22 ]

Evaluate A^3 - 6A^2 + 9A - 4I:
(1,1) entry: 22 - 6(6) + 9(2) - 4(1) = 22 - 36 + 18 - 4 = 0.
(1,2) entry: -21 - 6(-5) + 9(-1) - 4(0) = -21 + 30 - 9 = 0.
(1,3) entry: 21 - 6(5) + 9(1) - 4(0) = 21 - 30 + 9 = 0.
Similarly, all entries yield 0.
Therefore, A^3 - 6A^2 + 9A - 4I = 0 (Verified).

Step 3: Compute A^-1:
Multiply A^3 - 6A^2 + 9A - 4I = 0 by A^-1:
A^2 - 6A + 9I - 4A^-1 = 0
4A^-1 = A^2 - 6A + 9I
A^-1 = (1/4) [ A^2 - 6A + 9I ]

A^2 - 6A + 9I =
[ 6 -5  5 ] - [ 12 -6  6 ] + [ 9  0  0 ] = [ 3  1 -1 ]
[-5  6 -5 ] - [-6  12 -6 ] + [ 0  9  0 ] = [ 1  3  1 ]
[ 5 -5  6 ] - [  6 -6 12 ] + [ 0  0  9 ] = [-1  1  3 ]

A^-1 = (1/4) *
[ 3  1 -1 ]
[ 1  3  1 ]
[-1  1  3 ]

Step 4: Compute A^4:
From A^3 - 6A^2 + 9A - 4I = 0 => A^3 = 6A^2 - 9A + 4I.
Multiply by A:
A^4 = 6A^3 - 9A^2 + 4A
= 6(6A^2 - 9A + 4I) - 9A^2 + 4A
= 27A^2 - 50A + 24I.
Substituting A^2 and A yields:
A^4 =
[  86 -85  85 ]
[ -85  86 -85 ]
[  85 -85  86 ]

Final Answer:
A^-1 = (1/4) [[3, 1, -1], [1, 3, 1], [-1, 1, 3]], A^4 = [[86, -85, 85], [-85, 86, -85], [85, -85, 86]].

</details>

##### Q2 [2024 · 3 Marks]

> **Question**: If 2, 3, 5 are the eigenvalues of a 3 x 3 matrix A, find the eigenvalues of: (i) A^2, (ii) adj(A), and (iii) 3A + 2I.

**Key Concept / Exam Tip**: If λ is an eigenvalue of A, then λ^2 is of A^2, det(A)/λ is of adj(A), and f(λ) is of f(A).

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
Matrix A of order 3 x 3 with eigenvalues λ1 = 2, λ2 = 3, λ3 = 5.

Required Results:
Eigenvalues of:
(i) A^2
(ii) adj(A)
(iii) 3A + 2I.

Theorem / Properties:
1. If λ is an eigenvalue of A, then λ^k is an eigenvalue of A^k.
2. Since A · adj(A) = det(A) · I, the eigenvalues of adj(A) are det(A) / λ.
3. The determinant of A equals the product of its eigenvalues: det(A) = 2 · 3 · 5 = 30.
4. If λ is an eigenvalue of A, then kλ + c is an eigenvalue of kA + cI.

Step-by-Step Calculation:
(i) Eigenvalues of A^2: (λ1)^2, (λ2)^2, (λ3)^2
    2^2 = 4, 3^2 = 9, 5^2 = 25.
    Eigenvalues of A^2 are: 4, 9, 25.

(ii) Eigenvalues of adj(A): det(A) / λ
     det(A) = 30.
     30 / 2 = 15
     30 / 3 = 10
     30 / 5 = 6.
     Eigenvalues of adj(A) are: 15, 10, 6.

(iii) Eigenvalues of 3A + 2I: 3λ + 2
      3(2) + 2 = 8
      3(3) + 2 = 11
      3(5) + 2 = 17.
      Eigenvalues of 3A + 2I are: 8, 11, 17.

Final Answer:
(i) 4, 9, 25
(ii) 15, 10, 6
(iii) 8, 11, 17.

</details>

### Topic 2: Orthogonal Diagonalization & Quadratic Forms

**Tags**: `Orthogonal Matrix` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Gram-Schmidt orthogonalization process
- [ ] Orthogonal transformation X = PY and diagonalization D = P^T A P
- [ ] Reduction of quadratic forms to canonical form

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Reduce the quadratic form Q = 3x1^2 + 5x2^2 + 3x3^2 - 2x1*x2 + 2x1*x3 - 2x2*x3 to canonical form by orthogonal transformation and state its nature, rank, index, and signature.

**Key Concept / Exam Tip**: Write symmetric matrix A. Find eigenvalues. Canonical form is λ1 y1^2 + λ2 y2^2 + λ3 y3^2.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Quadratic Form:
Q = 3x1^2 + 5x2^2 + 3x3^2 - 2x1 x2 + 2x1 x3 - 2x2 x3.

Step 1: Symmetric Matrix of Quadratic Form:
A =
[  3  -1   1 ]
[ -1   5  -1 ]
[  1  -1   3 ]

Step 2: Characteristic Equation det(A - λI) = 0:
s1 = 3 + 5 + 3 = 11.
s2 = (15 - 1) + (9 - 1) + (15 - 1) = 14 + 8 + 14 = 36.
s3 = det(A) = 3(14) - (-1)(-3 + 1) + 1(1 - 5) = 42 - 2 - 4 = 36.
Characteristic polynomial: λ^3 - 11λ^2 + 36λ - 36 = 0.
Roots: λ = 2, 3, 6.

Step 3: Canonical Form:
By orthogonal transformation X = P Y, where P is the normalized modal matrix:
Q = λ1 y1^2 + λ2 y2^2 + λ3 y3^2
Q = 2y1^2 + 3y2^2 + 6y3^2.

Step 4: Characterization:
1. Nature: Positive Definite (all eigenvalues 2, 3, 6 are strictly positive).
2. Rank (r): 3 (total number of non-zero terms in canonical form).
3. Index (s): 3 (number of positive terms in canonical form).
4. Signature: 2s - r = 2(3) - 3 = 3 (difference between positive and negative terms).

Final Answer:
Canonical Form: 2y1^2 + 3y2^2 + 6y3^2; Nature: Positive Definite; Rank = 3; Index = 3; Signature = 3.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
