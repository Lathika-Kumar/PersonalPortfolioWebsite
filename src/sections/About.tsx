import { SectionHeading } from "../components/SectionHeading";
import { Shield, Brain, User, Heart, Settings } from "lucide-react";

export const About: React.FC = () => {
  const coreInterests = [
    {
      title: "Deepfake Detection",
      description: "Analyzing visual and audio biometric signatures using ML models to check digital media authenticity.",
      icon: <Shield className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Emotion Recognition",
      description: "Integrating Computer Vision models to parse human facial expressions and recommend personalized items.",
      icon: <Heart className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Disease Prediction Model",
      description: "Developing risk assessment pipelines with Random Forest classifiers to predict health issues from symptom inputs.",
      icon: <Brain className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Social Impact Systems",
      description: "Building eligibility checking rules engines (like SchemeBridge) to bridge citizen needs with national welfare benefits.",
      icon: <User className="h-5 w-5 text-indigo-500" />
    }
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/40 dark:border-slate-800/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Biography" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Bridging Artificial Intelligence and Software Engineering
            </h3>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
              I am a B.Tech Artificial Intelligence and Data Science student at Karpagam College of Engineering, Coimbatore (graduation 2028). I'm focused on developing strong skills in software development, machine learning, and core computer science fundamentals.
            </p>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
              My engineering approach centers on building real-world AI applications. I enjoy diving into complex problems, writing clean code, and building systems that address practical human challenges.
            </p>
            <div className="p-4 rounded-xl border border-indigo-100 dark:border-indigo-950/60 bg-indigo-50/20 dark:bg-indigo-950/10 space-y-1">
              <span className="text-xs font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                <Settings className="h-3.5 w-3.5" />
                Current Exploration
              </span>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                Exploring full-stack frameworks (Vite, React.js, FastAPI), optimization of deep learning models on edge devices, and solving competitive coding problems in Java and Python.
              </p>
            </div>
          </div>

          {/* Interests Column */}
          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreInterests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-left hover:border-indigo-300 dark:hover:border-indigo-950 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-slate-850 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {interest.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
