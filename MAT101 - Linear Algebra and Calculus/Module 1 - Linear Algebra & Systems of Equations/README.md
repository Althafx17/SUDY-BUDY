# MAT101 · Module 1: Linear Algebra & Systems of Equations

**Subject**: Linear Algebra and Calculus (MAT101)
**Semester**: S1 · KTU Scheme

---

## 📚 Syllabus & Core Topics

### Topic 1: Rank of a Matrix & Echelon Form

**Tags**: `Core Theory` `High Weightage` `Repeated PYQ`

**Subtopics Checklist**:
- [ ] Elementary row transformations
- [ ] Row echelon and reduced row echelon form
- [ ] Computation of matrix rank

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 7 Marks]

> **Question**: Find the rank of the matrix A = [[1, 2, -1, 3], [3, 4, 0, -1], [-1, 0, -2, 7]] by reducing it to row echelon form.

**Key Concept / Exam Tip**: Apply R2 -> R2 - 3R1, R3 -> R3 + R1. Then R3 -> R3 + R2.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
Matrix A of order 3 x 4:
[ 1   2  -1   3 ]
[ 3   4   0  -1 ]
[-1   0  -2   7 ]

Required Result:
Rank of matrix A by reduction to row echelon form.

Theorem / Method:
Rank of a matrix equals the number of non-zero rows in its row echelon form obtained using elementary row operations.

Step-by-Step Calculation:
Step 1: Pivot element is a11 = 1. Create zeros in first column below pivot:
- R2 -> R2 - 3*R1:
  R2 = [3 - 3(1), 4 - 3(2), 0 - 3(-1), -1 - 3(3)]
     = [0, -2, 3, -10]
- R3 -> R3 + R1:
  R3 = [-1 + 1, 0 + 2, -2 + (-1), 7 + 3]
     = [0, 2, -3, 10]
Matrix becomes:
[ 1   2  -1   3 ]
[ 0  -2   3 -10 ]
[ 0   2  -3  10 ]

Step 2: Pivot element is a22 = -2. Create zero in second column below pivot:
- R3 -> R3 + R2:
  R3 = [0 + 0, 2 + (-2), -3 + 3, 10 + (-10)]
     = [0, 0, 0, 0]

Row Echelon Form:
[ 1   2  -1   3 ]
[ 0  -2   3 -10 ]
[ 0   0   0   0 ]

Step 3: Count non-zero rows:
Row 1 has non-zero entries (1, 2, -1, 3).
Row 2 has non-zero entries (0, -2, 3, -10).
Row 3 consists entirely of zeros.
Number of non-zero rows = 2.

Final Answer:
Rank(A) = 2.

</details>

##### Q2 [2024 · 3 Marks]

> **Question**: Define rank of a matrix and explain why elementary row operations do not alter the rank of a matrix.

**Key Concept / Exam Tip**: Definition: Dimension of row/column space. Elementary row operations correspond to pre-multiplying by non-singular invertible matrices.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
Concept of Matrix Rank and Elementary Row Operations.

Required Result:
Precise definition of rank and mathematical justification of invariance under row operations.

Definition:
1. The rank of a matrix A (denoted rank(A) or ρ(A)) is defined as the maximum number of linearly independent row vectors (or column vectors) of A.
2. Equivalently, it is the dimension of the vector space spanned by its rows, or the order of the highest-order non-zero minor.

Invariance Justification:
1. Each elementary row operation on an m x n matrix A is equivalent to pre-multiplying A by an m x m elementary matrix E (i.e., A' = E · A).
2. Every elementary matrix E is non-singular and invertible (det(E) != 0).
3. By Sylvester's rank inequality, multiplying any matrix by an invertible matrix preserves its row space dimension and rank:
   rank(E · A) = rank(A).
4. Therefore, elementary row operations do not alter the rank of a matrix.

Final Answer:
Rank is the dimension of the row space, invariant under row operations because elementary transformation matrices are invertible.

</details>

##### Q3 [2022 · 7 Marks]

> **Question**: Find the values of a and b for which the rank of the matrix A = [[1, 1, 1], [1, 2, 3], [1, 4, a]] is (i) 3, and (ii) 2.

**Key Concept / Exam Tip**: Row reduce: R2 -> R2 - R1, R3 -> R3 - R1, then R3 -> R3 - 3R2 to reach echelon form.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
Matrix A of order 3 x 3:
[ 1  1  1 ]
[ 1  2  3 ]
[ 1  4  a ]

Required Result:
Values of a for which:
(i) rank(A) = 3
(ii) rank(A) = 2.

Step-by-Step Row Operations:
Step 1: Reduce column 1 below a11 = 1:
- R2 -> R2 - R1: [1-1, 2-1, 3-1] = [0, 1, 2]
- R3 -> R3 - R1: [1-1, 4-1, a-1] = [0, 3, a - 1]
Matrix becomes:
[ 1  1    1   ]
[ 0  1    2   ]
[ 0  3  a - 1 ]

Step 2: Reduce column 2 below a22 = 1:
- R3 -> R3 - 3*R2:
  R3 = [0 - 3(0), 3 - 3(1), (a - 1) - 3(2)] = [0, 0, a - 7]

Echelon Form:
[ 1  1    1  ]
[ 0  1    2  ]
[ 0  0  a - 7]

Analysis:
(i) For rank(A) = 3: All 3 rows must be non-zero.
    => a - 7 != 0 => a != 7 (for any real value of b).
(ii) For rank(A) = 2: Exactly 2 rows must be non-zero, meaning the 3rd row must be all zeros.
    => a - 7 = 0 => a = 7 (for any real value of b).

Final Answer:
(i) Rank(A) = 3 when a != 7.
(ii) Rank(A) = 2 when a = 7.

</details>

##### Q4 [2019 · 3 Marks]

> **Question**: Show that if A is an m x n matrix, then rank(A) <= min(m, n).

**Key Concept / Exam Tip**: Rank is dimension of row space (<= m) and dimension of column space (<= n). Row rank = Column rank.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
Matrix A of dimensions m x n (m rows, n columns).

Required Result:
Prove rank(A) <= min(m, n).

Mathematical Proof:
1. The rows of A are vectors in R^n. The row space of A is spanned by the m row vectors of A. Since a space spanned by m vectors can have dimension at most m:
   dim(Row Space) = Row Rank <= m.
2. The columns of A are vectors in R^m. The column space of A is spanned by the n column vectors of A. A space spanned by n vectors can have dimension at most n:
   dim(Col Space) = Column Rank <= n.
3. By the Fundamental Theorem of Linear Algebra, the row rank of any matrix equals its column rank, which is defined as rank(A):
   rank(A) = Row Rank = Column Rank.
4. Therefore:
   rank(A) <= m and rank(A) <= n => rank(A) <= min(m, n).

Final Answer:
Proved: rank(A) <= min(m, n).

</details>

### Topic 2: Consistency & Solutions of Linear Systems

**Tags**: `Numerical` `Formula` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Non-homogeneous systems AX = B and augmented matrix
- [ ] Gauss Elimination method for consistency
- [ ] Homogeneous systems AX = 0 and trivial/non-trivial solutions

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2025 · 14 Marks]

> **Question**: Investigate for what values of lambda and mu the system of equations:
x + y + z = 6
x + 2y + 3z = 10
x + 2y + lambda*z = mu
has: (i) no solution, (ii) a unique solution, (iii) infinitely many solutions. Solve completely when it has infinitely many solutions.

**Key Concept / Exam Tip**: Form augmented matrix [A|B]. Apply row operations: R2 -> R2 - R1, R3 -> R3 - R1, then R3 -> R3 - R2.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
System of linear equations:
x + y + z = 6
x + 2y + 3z = 10
x + 2y + λz = μ

Required Result:
Values of λ and μ for:
(i) No solution
(ii) Unique solution
(iii) Infinitely many solutions (and explicit solution in this case).

Step 1: Augmented matrix [A|B]:
[ 1  1  1 |  6 ]
[ 1  2  3 | 10 ]
[ 1  2  λ |  μ ]

Step 2: Elementary row operations:
- R2 -> R2 - R1:
  [1-1, 2-1, 3-1 | 10-6] = [0, 1, 2 | 4]
- R3 -> R3 - R1:
  [1-1, 2-1, λ-1 | μ-6]  = [0, 1, λ-1 | μ-6]

Matrix is now:
[ 1  1   1   |   6   ]
[ 0  1   2   |   4   ]
[ 0  1  λ-1  |  μ-6  ]

- R3 -> R3 - R2:
  [0-0, 1-1, (λ-1)-2 | (μ-6)-4] = [0, 0, λ-3 | μ-10]

Echelon form of [A|B]:
[ 1  1   1   |   6   ]
[ 0  1   2   |   4   ]
[ 0  0  λ-3  |  μ-10 ]

Step 3: Analysis by Rouché-Capelli Theorem:
(i) No solution: Occurs when rank(A) != rank([A|B]).
    This happens when λ - 3 = 0 and μ - 10 != 0.
    => λ = 3 and μ != 10.
    (Here rank(A) = 2 while rank([A|B]) = 3, inconsistent).

(ii) Unique solution: Occurs when rank(A) = rank([A|B]) = 3 (number of variables).
    This requires λ - 3 != 0.
    => λ != 3 (for any real value of μ).

(iii) Infinitely many solutions: Occurs when rank(A) = rank([A|B]) < 3.
    This requires λ - 3 = 0 and μ - 10 = 0.
    => λ = 3 and μ = 10.
    (Here rank(A) = rank([A|B]) = 2 < 3).

Step 4: Solving for Infinitely Many Solutions (λ = 3, μ = 10):
Equations from reduced matrix:
x + y + z = 6    --- (1)
y + 2z = 4       --- (2)
Let z = k (where k is any real arbitrary parameter).
From (2): y = 4 - 2k.
Substitute into (1):
x + (4 - 2k) + k = 6 => x + 4 - k = 6 => x = 2 + k.

Final Answer:
(i) No solution: λ = 3, μ != 10
(ii) Unique solution: λ != 3, μ is any real number
(iii) Infinitely many solutions: λ = 3, μ = 10; Solution: x = 2 + k, y = 4 - 2k, z = k (k in R).

</details>

##### Q2 [2023 · 7 Marks]

> **Question**: Solve completely using Gauss Elimination method:
2x - y + 3z = 8
-x + 2y + z = 4
3x + y - 4z = 0

**Key Concept / Exam Tip**: Write augmented matrix, swap R1 and -R2 to get leading 1, forward eliminate, and back-substitute.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given System:
 2x -  y + 3z = 8
-x + 2y +  z = 4
 3x +  y - 4z = 0

Step 1: Augmented Matrix [A|B]:
[  2  -1   3 | 8 ]
[ -1   2   1 | 4 ]
[  3   1  -4 | 0 ]

Step 2: Swap R1 and R2 with sign change on new R1 to establish leading entry 1:
R1 <-> -R2:
[ 1  -2  -1 | -4 ]
[ 2  -1   3 |  8 ]
[ 3   1  -4 |  0 ]

Step 3: Eliminate below pivot in column 1:
- R2 -> R2 - 2*R1: [0, -1 - 2(-2), 3 - 2(-1) | 8 - 2(-4)] = [0, 3, 5 | 16]
- R3 -> R3 - 3*R1: [0, 1 - 3(-2), -4 - 3(-1) | 0 - 3(-4)] = [0, 7, -1 | 12]
Matrix:
[ 1  -2  -1 | -4 ]
[ 0   3   5 | 16 ]
[ 0   7  -1 | 12 ]

Step 4: Eliminate in column 2:
- R3 -> 3*R3 - 7*R2:
  3*[0, 7, -1 | 12] - 7*[0, 3, 5 | 16]
  = [0, 21 - 21, -3 - 35 | 36 - 112] = [0, 0, -38 | -76]

Triangular System:
  x - 2y -  z = -4
     3y + 5z = 16
        -38z = -76

Step 5: Back Substitution:
- From equation 3: -38z = -76 => z = -76 / -38 = 2.
- From equation 2: 3y + 5(2) = 16 => 3y + 10 = 16 => 3y = 6 => y = 2.
- From equation 1: x - 2(2) - (2) = -4 => x - 4 - 2 = -4 => x - 6 = -4 => x = 2.

Verification:
2(2) - 2 + 3(2) = 4 - 2 + 6 = 8 (Matches Eq 1)
-(2) + 2(2) + 2 = -2 + 4 + 2 = 4 (Matches Eq 2)
3(2) + 2 - 4(2) = 6 + 2 - 8 = 0 (Matches Eq 3)

Final Answer:
x = 2, y = 2, z = 2.

</details>

##### Q3 [2020 · 3 Marks]

> **Question**: State the necessary and sufficient condition for a system of n homogeneous linear equations AX = 0 in n unknowns to possess non-trivial solutions.

**Key Concept / Exam Tip**: det(A) = 0 or rank(A) < n.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Information:
Homogeneous linear system AX = 0 of n equations in n unknowns.

Required Result:
Necessary and sufficient condition for non-trivial solutions.

Statement & Conditions:
The system AX = 0 always has the trivial zero solution X = 0.
It possesses non-trivial (non-zero) solutions if and only if:
1. The coefficient matrix A is singular, that is:
   det(A) = |A| = 0.
2. In terms of rank: The rank of the coefficient matrix is strictly less than the number of unknowns:
   rank(A) < n.
If rank(A) = r < n, there exist exactly (n - r) linearly independent non-trivial solutions.

Final Answer:
det(A) = 0, or equivalently rank(A) < n.

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
