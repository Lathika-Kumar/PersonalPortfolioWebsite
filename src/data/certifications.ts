export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud & Simplilearn SkillUp"
  },
  {
    title: "Microsoft Copilot",
    issuer: "Microsoft"
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy & Python Institute"
  },
  {
    title: "Artificial Intelligence Internship",
    issuer: "Learn Flu"
  },
  {
    title: "Presentation Skills",
    issuer: "Infosys Springboard"
  }
];
