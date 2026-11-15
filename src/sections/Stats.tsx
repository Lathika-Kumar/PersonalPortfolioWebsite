import { GraduationCap, Code2, Github, Trophy } from "lucide-react";
import { profile } from "../data/profile";

export const Stats: React.FC = () => {
  const getIcon = (label: string) => {
    if (label.includes("B.Tech")) {
      return <GraduationCap className="h-6 w-6 text-indigo-500" />;
    }
    if (label.includes("VIT Mapathon")) {
      return <Trophy className="h-6 w-6 text-amber-500" />;
    }
    if (label.includes("LeetCode")) {
      return <Code2 className="h-6 w-6 text-indigo-500" />;
    }
    if (label.includes("GitHub")) {
      return <Github className="h-6 w-6 text-indigo-500" />;
    }
    return <Trophy className="h-6 w-6 text-amber-500" />;
  };

  return (
    <section className="py-12 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.stats.map((stat, idx) => {
            const isMapathon = stat.label.includes("VIT Mapathon");
            return (
              <div
                key={idx}
                className={`relative overflow-hidden p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] ${
                  isMapathon
                    ? "bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-slate-50 dark:from-amber-500/15 dark:via-slate-900 dark:to-slate-900 border-2 border-amber-400/50 dark:border-amber-500/40 shadow-sm shadow-amber-500/10"
                    : "bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850/60 shadow-sm"
                }`}
              >
                {/* Stats Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold uppercase tracking-widest ${
                      isMapathon
                        ? "text-amber-700 dark:text-amber-400"
                        : "text-slate-400 dark:text-slate-500"
                    }`}>
                      {stat.label}
                    </span>
                    {isMapathon && (
                      <span className="px-1.5 py-0.2 rounded text-3xs font-extrabold uppercase bg-amber-500 text-white">
                        Winner
                      </span>
                    )}
                  </div>
                  <div className={`p-2 rounded-xl shadow-sm border ${
                    isMapathon
                      ? "bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800"
                      : "bg-white dark:bg-slate-850 border-slate-200/50 dark:border-slate-800/50"
                  }`}>
                    {getIcon(stat.label)}
                  </div>
                </div>

                {/* Stat Value */}
                <h3 className={`text-2xl md:text-3xl font-extrabold tracking-tight ${
                  isMapathon
                    ? "text-amber-600 dark:text-amber-400"
                    : "text-slate-950 dark:text-white"
                }`}>
                  {stat.value}
                </h3>

                {/* Stat Description */}
                {stat.description && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
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
