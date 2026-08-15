import { useEffect } from "react";
import { X, Github, ExternalLink, Cpu, AlertCircle, Award } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 rounded-full">
            {project.category}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {project.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
          {project.title}
        </h3>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Details (Col 1 & 2) */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                Project Overview
              </h4>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            {project.problem && (
              <div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  The Problem
                </h4>
                <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  The Solution
                </h4>
                <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm">
                  {project.solution}
                </p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-3">
                  Key Implemented Features
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-350">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-indigo-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technicalImplementation && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850/50 border border-slate-100 dark:border-slate-800/40">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-indigo-500" />
                  Technical Implementation
                </h4>
                <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                  {project.technicalImplementation}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar Metrics, Tech Stack, Links (Col 3) */}
          <div className="space-y-6">
            {/* Action Links */}
            <div className="flex flex-col gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 border border-transparent dark:border-slate-800 transition-colors shadow-sm text-sm"
              >
                <Github className="h-4 w-4" />
                View GitHub Source
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demonstration
                </a>
              )}
            </div>

            {/* Tech Stack List */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Challenges sidebar if present */}
            {project.challenges && (
              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 dark:bg-amber-950/10">
                <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 mb-1 flex items-center gap-1.5 uppercase tracking-wider">
                  <AlertCircle className="h-3.5 w-3.5" />
                  Key Challenge
                </h4>
                <p className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Project Outcome sidebar if present */}
            {project.outcome && (
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/10">
                <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1.5 uppercase tracking-wider">
                  <Award className="h-3.5 w-3.5" />
                  Outcome
                </h4>
                <p className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
