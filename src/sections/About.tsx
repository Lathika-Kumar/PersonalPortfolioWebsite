import { SectionHeading } from "../components/SectionHeading";
import { Brain, Cpu, Database, MapPin, Terminal } from "lucide-react";

export const About: React.FC = () => {
  const coreFocusAreas = [
    {
      title: "AI & Machine Learning",
      description: "Developing computer vision pipelines (OpenCV, DeepFace, ResNet18) and predictive machine learning models for real-world automated assessment.",
      icon: <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
    },
    {
      title: "Full-Stack & Backend Engineering",
      description: "Architecting performant backends, RESTful APIs, asynchronous job queues, and responsive frontends using FastAPI, Node.js, Express, and React.",
      icon: <Cpu className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
    },
    {
      title: "Geospatial & Data Analytics",
      description: "Analyzing satellite imagery, spectral indices (NDVI/NDWI), and spatial data to extract actionable insights for real-world applications.",
      icon: <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
    },
    {
      title: "Algorithmic Problem Solving",
      description: "Practicing rigorous Data Structures & Algorithms daily, with 200+ LeetCode problems solved across Java and Python3.",
      icon: <Database className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
    }
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Professional Profile" />

        {/* Top Grid: Portrait Photo & Narrative Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait Photo Column */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-[280px] sm:max-w-[300px]">
              <div className="overflow-hidden rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
                <img
                  src="/images/lathika-kumar.jpg"
                  alt="Lathika Kumar"
                  className="w-full aspect-[3/4] object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="mt-3 text-center lg:text-left">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Lathika Kumar
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  B.Tech AI & Data Science • 2024–2028
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Biography Column */}
          <div className="lg:col-span-8 space-y-5 text-left">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              Engineering Practical AI Systems, Scalable Backends & Algorithmic Solutions
            </h3>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
              I am a B.Tech Artificial Intelligence and Data Science student at Karpagam College of Engineering, Coimbatore (graduating 2028, CGPA 8.4/10). My work bridges machine learning, backend engineering, and modern full-stack development.
            </p>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
              Beyond standard web development, I focus on building practical applications with AI-powered development tools, designing reliable backend services with FastAPI and Node.js, and implementing end-to-end ML inference workflows.
            </p>

            <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20 space-y-1.5">
              <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5" />
                Technical Approach
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Combining solid Data Structures & Algorithms foundations (200+ LeetCode problems in Java and Python) with hands-on full-stack development, modern developer tooling, and applied machine learning.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Grid: 4 Core Focus Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {coreFocusAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-xs text-left hover:border-indigo-400 dark:hover:border-indigo-800 transition-all duration-200 group"
            >
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-slate-800 w-fit mb-4 group-hover:scale-110 transition-transform">
                {area.icon}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                {area.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
