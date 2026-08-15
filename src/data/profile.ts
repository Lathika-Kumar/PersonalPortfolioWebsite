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
    "DSA & Problem Solver"
  ],
  bio: "Motivated B.Tech Artificial Intelligence and Data Science student at Karpagam College of Engineering. Passionate about software development, machine learning, and full-stack technologies. Actively practicing Data Structures & Algorithms (DSA) and building real-world AI-driven applications to solve practical challenges.",
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
      label: "LeetCode Problems",
      value: 193,
      description: "130 Java + 63 Python3 solved"
    },
    {
      label: "GitHub Repositories",
      value: 30,
      description: "Public repositories"
    },
    {
      label: "LeetCode Badge",
      value: "50 Days",
      description: "Active coder badge (2026)"
    }
  ]
};
