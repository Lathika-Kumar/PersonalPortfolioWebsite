import { Mail } from "lucide-react";
import { socialLinks, contactDetails } from "../data/socialLinks";
import { SocialPlatformIcon } from "./SocialIcons";

export const Footer = () => {
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
              B.Tech Artificial Intelligence and Data Science | First Place – VIT Mapathon
            </p>
          </div>

          {/* Social and Quick Email links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-650 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                aria-label={`${link.platform} Profile`}
                title={`${link.platform} - ${link.label}`}
              >
                <SocialPlatformIcon platform={link.platform} className="h-4.5 w-4.5" />
              </a>
            ))}
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-slate-500 hover:text-indigo-650 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 dark:bg-slate-900 my-8"></div>

        {/* Footer Notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Lathika Kumar. All rights reserved.</p>
          <p className="text-slate-400 dark:text-slate-650">
            Engineered with React + Vite + TypeScript + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
