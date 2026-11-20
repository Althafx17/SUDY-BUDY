# PHT100 · Module 2: Wave Optics (Interference & Diffraction)

**Subject**: Engineering Physics (PHT100)
**Semester**: S2 · KTU Scheme

---

## 📚 Syllabus & Core Topics

### Topic 1: Interference in Thin Films, Air-Wedge & Newton Rings

**Tags**: `Wave Optics` `Air Wedge` `Newton Rings` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Interference in wedge-shaped thin films and thickness calculation
- [ ] Newton rings experimental setup and wavelength / radius determination

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Explain the formation of Newton's rings by reflected monochromatic light with a neat ray diagram. Derive expressions for the diameters of dark and bright rings. Explain how Newton's rings can be used to determine the wavelength of light and the refractive index of a transparent liquid.

**Key Concept / Exam Tip**: Air film between curved lens surface (radius R) and flat glass. Effective path difference Δ = 2t + λ/2. Lens geometry: r^2 = 2Rt => 2t = D^2/(4R).

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Principle & Experimental Setup:
A plano-convex lens of large radius of curvature R is placed on an optically flat glass plate. A thin air film of progressively increasing thickness from center to periphery is formed between the curved lower surface of the lens and the top surface of the plate.
When monochromatic light of wavelength λ falls normally on this setup, light reflects from both the top (glass-air) and bottom (air-glass) surfaces of the film. Interference between these two coherent reflected beams produces concentric circular interference fringes (Newton's rings) with a dark central spot.

Part 1: Effective Optical Path Difference (Δ):
For reflected rays under normal incidence (cos(r) = 1) in an air film (μ = 1):
Geometrical path difference = 2t (where t is air film thickness).
By Stokes' law, reflection at the lower air-glass boundary introduces an additional phase change of π, equivalent to an optical path difference of λ/2:
Δ = 2t + λ/2.

Part 2: Condition for Dark Rings (Destructive Interference):
Δ = (2n + 1) λ/2
2t + λ/2 = (2n + 1) λ/2 => 2t = n λ   (where n = 0, 1, 2, ...).

Geometric Relation for Plano-Convex Lens:
From the property of intersecting chords of a circle of radius R:
r_n^2 = t (2R - t) ≈ 2 R t  (since t << R).
Therefore:
2t = r_n^2 / R.
Since diameter D_n = 2 r_n => r_n = D_n / 2 => r_n^2 = D_n^2 / 4:
2t = D_n^2 / (4R).

Substitute 2t into the dark ring condition:
D_n^2 / (4R) = n λ
D_n^2 = 4 n R λ
D_n = 2 sqrt(n R λ).
Conclusion: The diameters of dark rings are directly proportional to the square roots of natural numbers: D_n ∝ sqrt(n).

Part 3: Condition for Bright Rings (Constructive Interference):
Δ = n λ
2t + λ/2 = n λ => 2t = (2n - 1) λ/2.
Substitute 2t = D_n^2 / (4R):
D_n^2 / (4R) = (2n - 1) λ/2
D_n^2 = 2 (2n - 1) R λ
D_n = sqrt( 2(2n - 1) R λ ).
Conclusion: The diameters of bright rings are proportional to the square roots of odd natural numbers: D_n ∝ sqrt(2n - 1).

Part 4: Determination of Wavelength (λ) of Monochromatic Light:
1. Using a traveling microscope, measure the diameter of the n-th dark ring (D_n) and the (n + p)-th dark ring (D_(n+p)):
   D_n^2 = 4 n R λ
   D_(n+p)^2 = 4(n + p) R λ.
2. Subtracting:
   D_(n+p)^2 - D_n^2 = 4 p R λ
   λ = [ D_(n+p)^2 - D_n^2 ] / [ 4 p R ].
   (R is determined using a spherometer).

Part 5: Determination of Refractive Index (μ) of a Liquid:
1. Place a few drops of the test liquid between the lens and glass plate.
2. The air film is replaced by liquid of refractive index μ. The optical path difference becomes 2μt + λ/2.
3. Diameter relation becomes:
   [ D_(n+p)^2 - D_n^2 ]_liquid = 4 p R λ / μ.
4. Dividing the equation in air by the equation in liquid:
   μ = [ D_(n+p)^2 - D_n^2 ]_air / [ D_(n+p)^2 - D_n^2 ]_liquid.

Final Answer:
Dark ring: D_n^2 = 4nRλ; Bright ring: D_n^2 = 2(2n-1)Rλ; λ = [D_(n+p)^2 - D_n^2] / (4pR); μ = [ΔD^2]_air / [ΔD^2]_liquid.

</details>

##### Q2 [2024 · 7 Marks]

> **Question**: In an air-wedge experiment, 25 interference fringes are observed in a length of 1.5 cm. Light of wavelength 589.3 nm is used. The wedge is formed by placing a thin foil of thickness t at a distance of 10 cm from the line of contact. Find the thickness of the foil.

**Key Concept / Exam Tip**: Fringe width β = L / N. Formula: β = λ l / (2t) => t = λ l / (2β).

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Data:
- Total length observed L = 1.5 cm = 1.5 × 10^-2 m
- Number of interference fringes N = 25
- Wavelength of light λ = 589.3 nm = 589.3 × 10^-9 m
- Distance from edge / line of contact l = 10 cm = 0.10 m.

Step 1: Calculate Fringe Width (β):
Fringe width β is the distance between two consecutive bright or dark fringes:
β = L / N
= (1.5 × 10^-2 m) / 25
= 0.06 × 10^-2 m = 6.0 × 10^-4 m (or 0.60 mm).

Step 2: Applicable Equation for Air Wedge:
Fringe width β = λ / (2θ)
where θ is the angle of the wedge: θ = t / l (in radians, for small angles).
Therefore:
β = λ / [ 2 (t / l) ] = (λ · l) / (2t).

Step 3: Solve for Foil Thickness t:
t = (λ · l) / (2β)
Substitute numerical values:
t = [ 589.3 × 10^-9 m × 0.10 m ] / [ 2 × (6.0 × 10^-4 m) ]
= [ 58.93 × 10^-9 ] / [ 12.0 × 10^-4 ]
= 4.9108 × 10^-5 m.

Unit Conversion:
t = 4.91 × 10^-5 m = 0.0491 mm = 49.1 μm.

Final Answer:
Thickness of the foil t = 4.91 × 10^-5 m (49.1 μm).

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
