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
      { name: "TypeScript" }
    ]
  },
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "Machine Learning" },
      { name: "Computer Vision" },
      { name: "Deep Learning" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      { name: "Scikit-learn" },
      { name: "DeepFace" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    title: "Backend / Application Frameworks",
    skills: [
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "Gradio" },
      { name: "Streamlit" }
    ]
  },
  {
    title: "Computer Science Core",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Problem Solving" },
      { name: "Competitive Coding" }
    ]
  }
];
