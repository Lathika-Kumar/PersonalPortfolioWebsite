import { GraduationCap, Code2, Github, Award } from "lucide-react";
import { profile } from "../data/profile";

export const Stats: React.FC = () => {
  const getIcon = (label: string) => {
    if (label.includes("B.Tech")) {
      return <GraduationCap className="h-6 w-6 text-indigo-500" />;
    }
    if (label.includes("LeetCode Problems")) {
      return <Code2 className="h-6 w-6 text-indigo-500" />;
    }
    if (label.includes("GitHub")) {
      return <Github className="h-6 w-6 text-indigo-500" />;
    }
    return <Award className="h-6 w-6 text-indigo-500" />;
  };

  return (
    <section className="py-12 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850/60 text-left hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Stats Card Header */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </span>
                <div className="p-2 rounded-xl bg-white dark:bg-slate-850 shadow-sm border border-slate-200/50 dark:border-slate-800/50">
                  {getIcon(stat.label)}
                </div>
              </div>

              {/* Stat Value */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {stat.value}
              </h3>

              {/* Stat Description */}
              {stat.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
