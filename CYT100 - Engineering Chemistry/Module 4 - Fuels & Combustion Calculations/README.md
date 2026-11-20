# CYT100 · Module 4: Fuels & Combustion Calculations

**Subject**: Engineering Chemistry (CYT100)
**Semester**: S1 · KTU Scheme

---

## ⚡ Formula Sheet & Key Equations — Module 4: Fuels & Combustion Calculations

> **Quick Jump to Equation Areas**:
- [Area 1: Calorific Value Formulas & Dulong’s Formula](#-area%201%20calorific%20value%20formulas%20%20dulongs%20formula)
- [Area 2: Bomb Calorimeter Formula](#-area%202%20bomb%20calorimeter%20formula)
- [Area 3: Theoretical Air Requirement for Complete Combustion](#-area%203%20theoretical%20air%20requirement%20for%20complete%20combustion)

### 📐 Area 1: Calorific Value Formulas & Dulong’s Formula
*High and low heat values based on ultimate analysis composition.*

#### 🔹 Dulong’s Formula for Gross/Higher Calorific Value (HCV)

$$\text{HCV} = \frac{1}{100} \left[ 8080 \, \text{C} + 34500 \left( \text{H} - \frac{\text{O}}{8} \right) + 2240 \, \text{S} \right] \quad (\text{kcal/kg})$$

> **Key Notes & Application**: $\text{C}, \text{H}, \text{O}, \text{S}$ represent the percentage weights of carbon, hydrogen, oxygen, and sulfur in the fuel.

#### 🔹 Lower / Net Calorific Value (LCV / NCV)

$$\text{LCV} = \text{HCV} - [0.09 \times \text{H} \times 587] \quad (\text{kcal/kg})$$

> **Key Notes & Application**: Accounts for the latent heat of condensation of steam ($587\text{ kcal/kg}$ of water vapor formed).

### 📐 Area 2: Bomb Calorimeter Formula
*Experimental determination of calorific value of solid and non-volatile liquid fuels.*

#### 🔹 Bomb Calorimeter Gross Calorific Value (GCV)

$$\text{GCV} = \frac{(W + w)(t_2 - t_1 + \text{cooling correction}) - (\text{acid + fuse + cotton corrections})}{m}$$

> **Key Notes & Application**: $W$ = mass of water in calorimeter (g); $w$ = water equivalent of apparatus (g); $m$ = mass of fuel burnt (g); $(t_2 - t_1)$ = observed temperature rise ($^\circ$C).

### 📐 Area 3: Theoretical Air Requirement for Complete Combustion
*Stoichiometric oxygen and air calculation per kg of fuel.*

#### 🔹 Theoretical Minimum Oxygen ($O_{2,\text{min}}$)

$$O_{2,\text{min}} = \frac{32}{12}\text{C} + 8\left(\text{H} - \frac{\text{O}}{8}\right) + \text{S} \quad (\text{kg per kg fuel})$$

> **Key Notes & Application**: Carbon burns to $\text{CO}_2$ ($12\text{g C} + 32\text{g } O_2$), Hydrogen burns to $\text{H}_2\text{O}$ ($4\text{g H} + 32\text{g } O_2$), Sulfur burns to $\text{SO}_2$ ($32\text{g S} + 32\text{g } O_2$).

#### 🔹 Theoretical Minimum Air by Mass & Volume

$$\text{Air}_{\text{mass}} = O_{2,\text{min}} \times \frac{100}{23} \, \text{kg}, \qquad \text{Air}_{\text{volume}} = O_{2,\text{min}} \times \frac{100}{21} \, \text{m}^3$$

> **Key Notes & Application**: Air contains $23\%$ oxygen by weight and $21\%$ oxygen by volume.

---

## 📚 Syllabus & Core Topics

### Topic 1: Calorific Value & Bomb Calorimeter

**Tags**: `Fuels` `Bomb Calorimeter` `14-Mark Sure Shot`

**Subtopics Checklist**:
- [ ] Gross vs Net Calorific Value and Dulong formula
- [ ] Bomb calorimeter construction, experiment, and calculation
- [ ] Numerical problems on Bomb calorimeter corrections

#### 📝 Previous Year Questions (PYQs)

##### Q1 [2026 · 14 Marks]

> **Question**: Explain the determination of Gross and Net calorific values of a solid fuel using Bomb Calorimeter with a neat sketch and relevant equations. Include all standard corrections.

**Key Concept / Exam Tip**: Gross calorific value: HCV = [(W + w)(t2 - t1 + cooling corr) - (acid + fuse + thread corr)] / mass of fuel. LCV = HCV - 0.09 * %H * 587.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Aim:
To determine the Gross (Higher) Calorific Value (HCV) and Net (Lower) Calorific Value (LCV) of a solid or liquid fuel using an oxygen Bomb Calorimeter.

Principle:
A known mass of the fuel is completely burnt in excess oxygen in a closed cylindrical vessel (bomb). The heat released is absorbed by a known mass of surrounding water and the calorimeter vessel. From the recorded temperature rise, the calorific value is calculated.

Construction Details:
1. The Bomb: High-grade stainless steel pressure vessel lined with acid-resistant enamel or titanium. Equipped with a stainless steel oxygen inlet valve and two electrical electrode posts.
2. Crucible: Silica crucible suspended between the electrodes holding the pelletized fuel.
3. Fuse wire: Known length of fine magnesium or nickel-chromium wire in contact with the fuel pellet.
4. Water Jacket & Calorimeter: Copper calorimeter containing a known mass of water (W) surrounded by an air jacket and an outer isothermal water jacket.
5. Accessories: Electrically driven mechanical stirrer and Beckmann precision thermometer readable to 0.01 °C.

Experimental Procedure:
1. Accurately weigh m grams (usually ~0.8 to 1.0 g) of powdered dried fuel into the crucible.
2. Connect the fuse wire touching the fuel.
3. Add 10 mL of distilled water into the bomb to absorb acidic vapors of SO2 and NO2.
4. Seal the bomb and charge with pure oxygen gas to a pressure of 25 - 30 atmospheres.
5. Submerge bomb into calorimeter vessel holding W grams of water.
6. Stir water and record initial steady temperature t1 °C.
7. Fire the bomb electrically. Note the maximum temperature t2 °C reached.

Calculations and Standard Corrections:
Heat absorbed by water and apparatus = (W + w) · (t2 - t1 + c_c)
where:
- W = mass of water in calorimeter (g)
- w = water equivalent of calorimeter and bomb assembly (g)
- t1, t2 = initial and final temperatures (°C)
- c_c = cooling correction for radiation loss during the test.

Standard Corrections subtracted:
- c_a = Acid correction (heat liberated during exothermic formation of HNO3 and H2SO4 acids)
- c_f = Fuse wire correction (heat produced by combustion of fuse wire)
- c_t = Cotton thread ignition correction.

Gross Calorific Value (HCV / GCV):
HCV = [ (W + w)(t2 - t1 + c_c) - (c_a + c_f + c_t) ] / m  (cal/g or kcal/kg).

Net Calorific Value (LCV / NCV):
In combustion, hydrogen produces water vapor (H2 + 1/2 O2 -> H2O). 1 part by mass of hydrogen gives 9 parts by mass of steam.
LCV = HCV - [ 0.09 × %H × Latent heat of steam ]
LCV = HCV - [ 0.09 × %H × 587 ] cal/g.

Final Answer:
HCV = [(W+w)(Δt + cc) - (ca + cf + ct)] / m; LCV = HCV - 0.09 * %H * 587 cal/g.

</details>

##### Q2 [2023 · 7 Marks]

> **Question**: A 0.85 g coal sample was burnt in a bomb calorimeter. The water equivalent of the calorimeter was 420 g and mass of water was 2100 g. The rise in temperature was 2.45 °C. If the coal contains 4.5% hydrogen, calculate HCV and LCV (Latent heat = 587 cal/g).

**Key Concept / Exam Tip**: HCV = (W + w) * ΔT / m. LCV = HCV - 0.09 * %H * 587.

<details>
<summary><b>View Step-by-Step Model Solution</b></summary>

Given Data:
- Mass of coal sample m = 0.85 g
- Mass of water in calorimeter W = 2100 g
- Water equivalent of calorimeter w = 420 g
- Rise in temperature ΔT = (t2 - t1) = 2.45 °C
- Percentage of hydrogen %H = 4.5%
- Latent heat of condensation of steam L = 587 cal/g.

Step 1: Calculate Gross Calorific Value (HCV):
Formula: HCV = [ (W + w) · ΔT ] / m
(W + w) = 2100 + 420 = 2520 g.
Total heat liberated = 2520 × 2.45 = 6174 cal.
HCV = 6174 / 0.85 = 7263.53 cal/g.

Step 2: Calculate Net Calorific Value (LCV):
Formula: LCV = HCV - [ 0.09 × %H × Latent heat ]
Heat of steam condensation = 0.09 × 4.5 × 587 = 237.735 cal/g.
LCV = 7263.53 - 237.74 = 7025.79 cal/g.

Conversion to SI Units (1 cal = 4.184 J):
HCV = 7263.53 × 4.184 = 30390.6 kJ/kg ≈ 30.39 MJ/kg.
LCV = 7025.79 × 4.184 = 29395.9 kJ/kg ≈ 29.40 MJ/kg.

Final Answer:
HCV = 7263.5 cal/g (30.39 MJ/kg); LCV = 7025.8 cal/g (29.40 MJ/kg).

</details>

---

## 📁 Study Materials & Notes

Drop your lecture PDFs, handwritten scan notes, and question paper solutions directly into this folder.

### Notes Checklist:
- [ ] Class Lecture Notes
- [ ] Module Formula Sheet
- [ ] Solved University Question Papers
- [ ] Textbook Reference Problems
