import { SectionHeading } from "../components/SectionHeading";
import { educationList } from "../data/education";
import { Calendar, GraduationCap, MapPin, Star } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/40 dark:border-slate-800/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education Timeline" subtitle="Academics" />

        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 text-left space-y-8 max-w-3xl">
          {educationList.map((edu, idx) => {
            return (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Timeline Node Point Icon */}
                <div
                  className={`absolute -left-3.5 top-1.5 p-1 rounded-full border-4 transition-colors ${
                    edu.featured
                      ? "bg-indigo-600 border-indigo-100 dark:border-indigo-950 text-white"
                      : "bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-400 dark:text-slate-500"
                  }`}
                >
                  <GraduationCap className="h-4.5 w-4.5" />
                </div>

                {/* Main Card */}
                <div
                  className={`p-6 rounded-2xl transition-all duration-200 ${
                    edu.featured
                      ? "bg-white dark:bg-slate-900 border-2 border-indigo-500 dark:border-indigo-600/80 shadow-md shadow-indigo-50 dark:shadow-none"
                      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 shadow-sm hover:border-slate-350 dark:hover:border-slate-800"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      {edu.featured && (
                        <span className="inline-flex items-center gap-1 mb-1.5 px-2 py-0.5 rounded text-3xs font-extrabold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/50 text-indigo-755 dark:text-indigo-400">
                          <Star className="h-2.5 w-2.5 fill-current" />
                          Current Institution
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-slate-905 dark:text-white leading-snug">
                        {edu.institution}
                      </h3>
                    </div>
                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-850 border border-slate-200/50 dark:border-slate-850 w-fit">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.duration}
                    </div>
                  </div>

                  {/* Degree/Course details */}
                  <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm mb-3">
                    {edu.degree}
                  </p>

                  {/* Institution Location */}
                  <div className="flex items-center gap-1 text-xs text-slate-450 dark:text-slate-450 mb-4">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Score Indicator */}
                  <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                    <span className="text-2xs font-bold text-slate-455 dark:text-slate-450 uppercase tracking-widest">
                      {edu.metricLabel}:
                    </span>
                    <span className="text-sm font-extrabold text-indigo-650 dark:text-indigo-400">
                      {edu.metricValue}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
