import { SectionHeading } from "../components/SectionHeading";
import { certifications } from "../data/certifications";
import { Award, ShieldCheck, ChevronRight } from "lucide-react";

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications" subtitle="Credentials" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-xs text-left hover:border-indigo-500 dark:hover:border-indigo-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Certificate Icon */}
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-slate-700">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="inline-flex items-center gap-1 text-2xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-0.5 transition-colors"
                  >
                    Verify
                    <ChevronRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
