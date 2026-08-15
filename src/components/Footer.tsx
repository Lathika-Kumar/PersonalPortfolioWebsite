import { Github, Linkedin, Mail, Code } from "lucide-react";
import { socialLinks, contactDetails } from "../data/socialLinks";

export const Footer = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return <Github className="h-4 w-4" />;
      case "LinkedIn":
        return <Linkedin className="h-4 w-4" />;
      case "LeetCode":
        return (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.743-.696L3.648 14.3a2.453 2.453 0 0 1-.744-1.768c0-.68.258-1.349.744-1.8l5.074-4.887c.451-.434 1.173-.42 1.61.031a1.083 1.083 0 0 1-.03 1.583L5.32 12.247c-.207.2-.207.53 0 .73l6.275 6.042c.2.193.53.193.73 0l2.196-2.127a1.084 1.084 0 0 1 1.583.03 1.127 1.127 0 0 1-.002 1.608zm5.253-5.263l-2.015 1.954a1.083 1.083 0 0 1-1.58-.031 1.128 1.128 0 0 1 .03-1.584l2.008-1.947c.2-.193.2-.53 0-.73l-6.276-6.042c-.2-.193-.53-.193-.73 0L7.6 10.366a1.128 1.128 0 0 1-1.584-.03 1.083 1.083 0 0 1 .03-1.58l5.215-5.04c.465-.45 1.112-.696 1.745-.696.632 0 1.277.246 1.743.696l6.276 6.042c.983.948.983 2.502.002 3.45z" />
            <path d="M12.43 14.24a1.24 1.24 0 0 1-.87-.36l-2.27-2.23a1.25 1.25 0 0 1 0-1.76 1.24 1.24 0 0 1 1.75 0l2.27 2.23a1.25 1.25 0 0 1 0 1.76 1.24 1.24 0 0 1-.88.36z" />
          </svg>
        );
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-250/60 dark:border-slate-900/60 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Identity */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Lathika Kumar
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              AI & Data Science Student | AI/ML & Software Developer
            </p>
          </div>

          {/* Social and Quick Email links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                aria-label={link.platform}
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 dark:bg-slate-900 my-8"></div>

        {/* Footer Notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Lathika Kumar. All rights reserved.</p>
          <p className="text-slate-400 dark:text-slate-650">
            Built with React + Vite + TypeScript + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
