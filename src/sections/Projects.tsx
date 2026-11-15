import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

type FilterType = "all" | "ai" | "fullstack" | "software";

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "ai") {
      return (
        project.category.toLowerCase().includes("ai") ||
        project.category.toLowerCase().includes("machine") ||
        project.category.toLowerCase().includes("vision") ||
        project.category.toLowerCase().includes("learning")
      );
    }
    if (filter === "fullstack") {
      return project.category.toLowerCase().includes("full stack");
    }
    if (filter === "software") {
      return (
        project.category.toLowerCase().includes("software") ||
        project.technologies.includes("Java")
      );
    }
    return true;
  });

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/40 dark:border-slate-800/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Portfolio" />

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-10 justify-start">
          {(
            [
              { type: "all", label: "All Projects" },
              { type: "ai", label: "AI & ML / CV" },
              { type: "fullstack", label: "Full Stack" },
              { type: "software", label: "Software Engineering" }
            ] as const
          ).map((btn) => (
            <button
              key={btn.type}
              onClick={() => setFilter(btn.type)}
              className={`py-2 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === btn.type
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                  : "bg-white text-slate-650 hover:bg-slate-100 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-850 dark:hover:text-white border border-slate-200/60 dark:border-slate-850"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-250/60 dark:border-slate-850/60 shadow-sm hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-900 transition-all duration-300 group text-left overflow-hidden"
            >
              {/* Card Header & Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider text-indigo-650 dark:text-indigo-455 bg-indigo-50 dark:bg-indigo-950/40 rounded-md">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-850">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-3xs font-semibold rounded bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-350"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-3xs font-semibold rounded bg-slate-50 dark:bg-slate-850 text-slate-450 dark:text-slate-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-650 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-350 transition-colors cursor-pointer"
                >
                  View Details
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-350 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                    aria-label={`${project.title} GitHub Source Code`}
                    title="View Source on GitHub"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Lathika-Kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-semibold border border-slate-350 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 transition-colors shadow-sm text-sm cursor-pointer"
          >
            <Github className="h-4 w-4" />
            View All GitHub Projects (30 Repos)
          </a>
        </div>
      </div>
    </section>
  );
};
