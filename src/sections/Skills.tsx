import React, { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { skillCategories } from "../data/skills";
import { Terminal, Code, Cpu, Globe, MapPin } from "lucide-react";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="h-4 w-4" />;
      case 1:
        return <Cpu className="h-4 w-4" />;
      case 2:
        return <Globe className="h-4 w-4" />;
      case 3:
        return <MapPin className="h-4 w-4" />;
      default:
        return <Terminal className="h-4 w-4" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="Expertise" />

        {/* Tab Controls for Categories */}
        <div className="flex flex-wrap gap-2.5 mb-8 justify-start border-b border-slate-200 dark:border-slate-800 pb-4">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25 dark:bg-indigo-600 dark:text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:border-slate-800"
              }`}
            >
              {getCategoryIcon(idx)}
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-300 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-200 group text-left shadow-xs"
            >
              <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                {skill.name}
              </span>
              <div className="h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-600 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-400 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Small Note */}
        <div className="mt-8 text-left text-xs text-slate-500 dark:text-slate-400">
          * Skills verified through course curricula, academic evaluations, or active projects.
        </div>
      </div>
    </section>
  );
};
