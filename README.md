# Lathika Kumar — Personal Developer Portfolio

A premium, production-quality personal developer portfolio website designed for **Lathika Kumar**, B.Tech Artificial Intelligence and Data Science student at Karpagam College of Engineering. This website serves as a technical showcase highlighting AI/ML engineering, full-stack development, and DSA problem-solving capabilities.

---

## 🚀 Tech Stack

- **Framework:** React.js
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (native Vite plugin integration)
- **Icons:** Lucide React
- **Package Manager:** npm

---

## ✨ Features Implemented

1. **AI & Software Engineering Focus:** A technical design system featuring customizable themes (persisted dark mode by default), micro-interactions, and premium typography.
2. **Modular Data Architecture:** Fully decoupled, data-driven content files (profile, projects, skills, education, certifications, and social links) allowing for immediate content changes without UI code modifications.
3. **Interactive Project Experience:** A detailed overlay modal detailing the problem statement, solution, key features, technology badges, technical implementation details, and custom outcome metrics for each project.
4. **LeetCode / DSA Dashboard:** Visual profile card highlighting actual coding stats (193 solved: 130 Java, 63 Python3), active LeetCode ranking, active coding streak badge, and DSA topic breakdowns.
5. **Factual Education Timeline:** An academic timeline highlighting Karpagam College of Engineering and school percentages, with current college education visually emphasized.
6. **Downloadable & Viewable Resume:** Integrated link to view and download the verified resume PDF (`public/resume/Lathika-Kumar-Resume.pdf`).
7. **Contact Integration:** A validated contact form mapping client-side validation rules and automatically triggering email composer pre-fills via a secure `mailto:` dispatcher.

---

## 📂 Folder Structure

```text
portfolio/
├── public/
│   ├── resume/
│   │   └── Lathika-Kumar-Resume.pdf   # The actual verified resume PDF
│   └── favicon.svg                    # Site favicon asset
├── src/
│   ├── assets/                        # Static layout assets (logos, images)
│   ├── components/                    # Reusable UI widgets (Navbar, Footer, Modal, Headings)
│   ├── data/                          # Data-driven TS configurations (source of truth)
│   │   ├── certifications.ts
│   │   ├── education.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── socialLinks.ts
│   ├── hooks/                         # Custom React hooks (useTheme, useScrollSpy)
│   ├── sections/                      # Page sections (Hero, Stats, About, Skills, Projects, Coding, Education, Contact)
│   ├── App.tsx                        # Root layout orchestrator
│   ├── index.css                      # Global styles and Tailwind v4 imports
│   └── main.tsx                       # React application entry point
├── package.json                       # Core dependencies and scripts
├── tsconfig.json                      # TypeScript configurations
├── vite.config.ts                     # Vite bundle compilation properties (with Tailwind)
└── README.md                          # Documentation
```

---

## 🛠️ Local Setup and Execution

To run this project locally, follow these steps:

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install all required dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open the output URL (usually `http://localhost:5173`) in your browser to view the application.

4. **Verify the production build:**
   ```bash
   npm run build
   ```
   This compiles the application and outputs optimized static files to the `dist` folder.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Status

- **Deployment Status:** **NOT DEPLOYED**
- **Vercel Readiness:** The application is fully optimized, compiled, and prepared for Vercel deployment.
- **Strict Approval Gate:** As per instructions, deployment to Vercel is strictly disabled. No production build has been published, and Vercel credentials or commands have not been run. The deployment workflow will only be provided once explicit permission is given by the user (e.g., *"Deploy it to Vercel"*).
