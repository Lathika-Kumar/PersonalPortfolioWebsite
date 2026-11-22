import { GraduationCap, Code2, Github, Award } from "lucide-react";
import { profile } from "../data/profile";

export const Stats: React.FC = () => {
  const getIcon = (label: string) => {
    if (label.includes("B.Tech")) {
      return <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />;
    }
    if (label.includes("LeetCode")) {
      return <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />;
    }
    if (label.includes("GitHub")) {
      return <Github className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />;
    }
    return <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />;
  };

  return (
    <section className="py-12 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.stats.map((stat, idx) => {
            return (
              <div
                key={idx}
                className="relative overflow-hidden p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                {/* Stats Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                  <div className="p-2 rounded-xl shadow-xs border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    {getIcon(stat.label)}
                  </div>
                </div>

                {/* Stat Value */}
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {stat.value}
                </h3>

                {/* Stat Description */}
                {stat.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                    {stat.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
