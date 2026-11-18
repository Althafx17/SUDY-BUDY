/**
 * Developer Information & Credits
 * KTU Study Buddy (Orbit Learning OS)
 *
 * This file contains official developer details, project metadata, and credits.
 * Access inside code: import { DEVELOPER_INFO } from './constants/developer';
 * Inspect in browser console: window.__DEVELOPER__ or run window.aboutDeveloper()
 */

export const DEVELOPER_INFO = {
  name: "thaf",
  alias: "HalalDev",
  role: "Lead Full-Stack Developer & Creator",
  tagline: "Building focused, high-impact learning tools for KTU Engineering students.",
  location: "Kerala, India",
  education: {
    institution: "APJ Abdul Kalam Technological University (KTU)",
    program: "B.Tech in Computer Science & Engineering",
  },
  bio: "Passionate developer dedicated to creating intuitive, distraction-free productivity and exam preparation systems. Orbit KTU Study Buddy was built to solve real challenges faced by KTU engineering students: organizing module-wise syllabus progress, providing complete 2019–2026 Previous Year Question (PYQ) banks with detailed step-by-step solutions, and integrating a free academic AI tutor.",
  github: "https://github.com/Althafx17",
  repository: "https://github.com/Althafx17/SUDY-BUDY",
  socials: [
    { label: "GitHub Profile", url: "https://github.com/Althafx17", handle: "@Althafx17" },
    { label: "Project Repository", url: "https://github.com/Althafx17/SUDY-BUDY", handle: "Althafx17/SUDY-BUDY" },
  ],
  stack: [
    { category: "Frontend Framework", name: "React 19" },
    { category: "Language", name: "Modern JavaScript (ESNext)" },
    { category: "Build Tool", name: "Vite 8" },
    { category: "Styling", name: "Tailwind CSS & Dynamic CSS Variables" },
    { category: "Icons", name: "Lucide React" },
    { category: "Math & Chemistry", name: "KaTeX Formula Engine" },
    { category: "Artificial Intelligence", name: "Gemini Academic AI Tutor (100% Free)" },
    { category: "Storage", name: "LocalStorage & Offline-First State Engine" },
  ],
  project: {
    name: "Orbit — KTU Study Buddy",
    version: "2.4.0",
    releaseYear: "2026–2027",
    targetScheme: "KTU 2019 & 2024 Engineering Schemes",
    subjectsCovered: [
      "MAT101 — Linear Algebra & Calculus (S1)",
      "CYT100 — Engineering Chemistry (S1)",
      "MAT102 — Vector Calculus, DE & Transforms (S2)",
      "PHT100 — Engineering Physics (S2)",
    ],
    features: [
      "2019–2026 Previous Year Question (PYQ) Bank with step-by-step model answers",
      "Interactive module & topic completion tracking with local persistence",
      "Free KTU Academic AI Agent to solve any engineering question or doubt",
      "Focus timer & study planner with customizable daily goals",
      "Comprehensive appearance customizer with 9 color presets & 6 dark canvas themes",
      "Zero registration, zero cloud tracking, and 100% offline-first privacy",
    ],
  },
  acknowledgements: "Dedicated to all KTU engineering students striving for academic excellence and mastery of their engineering curriculum.",
};
