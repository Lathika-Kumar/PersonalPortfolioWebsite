export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" }
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning" },
      { name: "Computer Vision" },
      { name: "Deep Learning" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      { name: "Scikit-learn" },
      { name: "DeepFace" },
      { name: "TensorFlow" }
    ]
  },
  {
    title: "Full-Stack & Backend",
    skills: [
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" }
    ]
  },
  {
    title: "Geospatial & Analytics",
    skills: [
      { name: "Geospatial Mapping" },
      { name: "Spatial Data Analysis" },
      { name: "Data Analytics" },
      { name: "Pandas & NumPy" },
      { name: "Matplotlib" }
    ]
  },
  {
    title: "CS Fundamentals & Tools",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Competitive Programming" },
      { name: "Git & GitHub" },
      { name: "AI-Powered Dev Tools" }
    ]
  }
];
