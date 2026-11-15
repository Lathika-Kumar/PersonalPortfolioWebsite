export interface Profile {
  name: string;
  titles: string[];
  bio: string;
  location: string;
  email: string;
  phone: string;
  stats: {
    label: string;
    value: string | number;
    description?: string;
  }[];
}

export const profile: Profile = {
  name: "Lathika Kumar",
  titles: [
    "AI & Data Science Student",
    "AI/ML & Software Developer",
    "Full-Stack & Backend Engineer",
    "DSA & Problem Solver"
  ],
  bio: "B.Tech Artificial Intelligence and Data Science undergraduate at Karpagam College of Engineering with an 8.4 CGPA. First Place Winner at VIT Mapathon. Passionate about machine learning, backend engineering, and building full-stack applications with AI-powered development tools. Dedicated to data analytics, competitive programming (190+ LeetCode problems solved), and solving real-world challenges through innovative software solutions.",
  location: "Cuddalore, Tamil Nadu, India",
  email: "lathikakumar798@gmail.com",
  phone: "+91 7904358845",
  stats: [
    {
      label: "B.Tech AI & DS",
      value: "CGPA 8.4",
      description: "Karpagam College of Engineering"
    },
    {
      label: "VIT Mapathon",
      value: "1st Place",
      description: "Geospatial Challenge Winner"
    },
    {
      label: "LeetCode Solved",
      value: "193+",
      description: "130 Java + 63 Python3 solved"
    },
    {
      label: "GitHub Repositories",
      value: "30",
      description: "Public code repositories"
    }
  ]
};
