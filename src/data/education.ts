export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  metricLabel: string;
  metricValue: string;
  featured?: boolean;
}

export const educationList: EducationEntry[] = [
  {
    institution: "Karpagam College of Engineering",
    location: "Coimbatore, Tamil Nadu",
    degree: "B.Tech. Artificial Intelligence and Data Science",
    duration: "2024 – 2028",
    metricLabel: "CGPA",
    metricValue: "8.4 / 10",
    featured: true
  },
  {
    institution: "Dhava Amudham Matric Higher Secondary School",
    location: "Srimushnam, Cuddalore, Tamil Nadu",
    degree: "Higher Secondary Course (HSC / Class 12)",
    duration: "2023 – 2024",
    metricLabel: "Percentage",
    metricValue: "92.5%",
    featured: false
  },
  {
    institution: "Dhava Amudham Matric Higher Secondary School",
    location: "Srimushnam, Cuddalore, Tamil Nadu",
    degree: "Secondary School Leaving Certificate (SSLC / Class 10)",
    duration: "2021 – 2022",
    metricLabel: "Percentage",
    metricValue: "97.6%",
    featured: false
  }
];
