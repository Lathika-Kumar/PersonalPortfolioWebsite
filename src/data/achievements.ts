export interface Achievement {
  id: string;
  title: string;
  award: string;
  rank: string;
  badgeText: string;
  competition: string;
  event: string;
  organizer: string;
  institution: string;
  date: string;
  description: string;
  highlights: string[];
  tags: string[];
  certificateUrl?: string;
  posterUrl?: string;
  featured?: boolean;
}

export const achievements: Achievement[] = [
  {
    id: "vit-mapathon-2026",
    title: "First Place – VIT Mapathon",
    award: "First Place Winner",
    rank: "1st Place",
    badgeText: "FIRST PLACE / WINNER",
    competition: "MAPATHON : Geospatial Mapping Challenge",
    event: "SustainAI 2026 – Industry-Academia Conclave 2.0",
    organizer: "School of Computer Science Engineering and Information Systems, VIT, Vellore",
    institution: "Karpagam College of Engineering",
    date: "October 8–9, 2026",
    description: "Secured First Place in the prestigious VIT Mapathon competition, an intensive geospatial mapping challenge conducted during SustainAI 2026 at Vellore Institute of Technology. Developed an agricultural mapping and satellite-based crop analysis system to distinguish paddy and banana cultivation zones using spectral vegetation indices (NDVI, NDWI) and radar polarization features.",
    highlights: [
      "Secured 1st Place in a highly competitive inter-institutional technical challenge at VIT, Vellore.",
      "Utilized satellite imagery and geospatial data to distinguish paddy and banana cultivation fields using NDVI & NDWI indices.",
      "Investigated VV/VH radar polarization features for crop classification and agricultural monitoring.",
      "Recognized for technical excellence, analytical problem solving, and sustainable real-world impact by academic and industry juries."
    ],
    tags: [
      "Geospatial Mapping",
      "Satellite Imagery",
      "Google Earth Engine",
      "NDVI & NDWI Indices",
      "Problem Solving",
      "Sustainable Agriculture"
    ],
    certificateUrl: "/achievements/vit-mapathon-certificate.png",
    posterUrl: "/achievements/vit-mapathon-poster.png",
    featured: true
  },
  {
    id: "leetcode-50-days-badge",
    title: "LeetCode 50 Days Streak Badge",
    award: "50 Days Badge 2026",
    rank: "Consistent Coder",
    badgeText: "ACTIVE CODER BADGE",
    competition: "LeetCode Daily Coding Challenge",
    event: "LeetCode Algorithm Practice",
    organizer: "LeetCode",
    institution: "Competitive Programming",
    date: "2026",
    description: "Earned the official 50 Days Coding Streak Badge on LeetCode for maintaining consistent algorithmic problem solving and daily practice in Data Structures and Algorithms across Java and Python3.",
    highlights: [
      "Maintained a continuous daily problem-solving streak across fundamental and advanced DSA topics.",
      "Solved 200+ algorithmic challenges spanning Dynamic Programming, Graphs, Two Pointers, and Binary Search.",
      "Achieved consistent submissions in Java (130+ solved) and Python3 (63+ solved)."
    ],
    tags: [
      "Data Structures & Algorithms",
      "Java",
      "Python3",
      "Problem Solving",
      "Algorithmic Thinking"
    ],
    featured: false
  }
];
