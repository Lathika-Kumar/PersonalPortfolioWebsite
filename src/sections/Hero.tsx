import { useState, useEffect } from "react";
import { ArrowRight, Download, Eye, Terminal, Sparkles, Trophy } from "lucide-react";
import { profile } from "../data/profile";
import { socialLinks } from "../data/socialLinks";
import { SocialPlatformIcon } from "../components/SocialIcons";

const terminalCommands = [
  "> lathika.init()",
  "Loading B.Tech AI & Data Science profile...",
  "Karpagam College of Engineering (CGPA: 8.4/10)",
  "> lathika.getLatestAchievement()",
  "WINNER: 1st Place – VIT Mapathon (Geospatial Mapping Challenge)",
  "> lathika.getCoreFocus()",
  "['Artificial Intelligence', 'Machine Learning', 'Full-Stack & Backend', 'DSA']",
  "> lathika.getLeetCodeStats()",
  "Total Solved: 193 (130 Java, 63 Python3)",
  "> lathika.runInferenceCheck()",
  "Running MediaAuthenticity verification...",
  "Integrity: Valid [SHA-256 Verified]",
  "> _"
];

export const Hero: React.FC = () => {
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [terminalIndex, setTerminalIndex] = useState(0);

  useEffect(() => {
    if (terminalIndex < terminalCommands.length) {
      const timer = setTimeout(() => {
        setTerminalText((prev) => [...prev, terminalCommands[terminalIndex]]);
        setTerminalIndex((prev) => prev + 1);
      }, terminalIndex === 0 ? 500 : terminalCommands[terminalIndex - 1].startsWith(">") ? 900 : 350);
      return () => clearTimeout(timer);
    }
  }, [terminalIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 md:pt-32 pb-16 overflow-hidden bg-white dark:bg-slate-950 transition-colors"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-indigo-400/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-sky-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info Columns */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full border border-indigo-200/50 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-300">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                <span className="text-xs font-semibold tracking-wider uppercase">
                  B.Tech – AI & Data Science
                </span>
              </div>
              <button
                onClick={() => handleScrollTo("achievements")}
                className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full border border-amber-300/60 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 hover:scale-105 transition-transform cursor-pointer text-xs font-semibold"
              >
                <Trophy className="h-3.5 w-3.5 text-amber-500" />
                <span>1st Place – VIT Mapathon</span>
              </button>
            </div>

            {/* Name and Professional Titles */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm <span className="text-indigo-650 dark:text-indigo-400">{profile.name}</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200">
                AI & Data Science Student | AI/ML & Software Developer
              </p>
            </div>

            {/* Factual description */}
            <p className="text-slate-650 dark:text-slate-350 text-base md:text-lg max-w-2xl leading-relaxed">
              B.Tech Artificial Intelligence and Data Science student at Karpagam College of Engineering. 
              Engineering machine learning pipelines, full-stack web applications, and backend services with practical AI development tools. Passionate about data analytics and mastering Data Structures & Algorithms.
            </p>

            {/* Resume and CTA Button Grid */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScrollTo("projects")}
                className="flex items-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-indigo-650 hover:bg-indigo-700 dark:bg-indigo-550 dark:hover:bg-indigo-600 shadow-md shadow-indigo-200 dark:shadow-none transition-all cursor-pointer text-sm"
              >
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="/resume/Lathika-Kumar-Resume.pdf"
                  download="Lathika-Kumar-Resume.pdf"
                  className="flex items-center gap-2 py-3 px-5 rounded-xl font-semibold text-slate-755 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 transition-colors border border-slate-200/50 dark:border-slate-700/50 text-sm cursor-pointer"
                  aria-label="Download Lathika Kumar Resume PDF"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a
                  href="/resume/Lathika-Kumar-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl font-semibold text-slate-755 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 transition-colors border border-slate-200/50 dark:border-slate-700/50 cursor-pointer"
                  aria-label="View Lathika Kumar Resume in a new browser tab"
                  title="View Resume in Browser"
                >
                  <Eye className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Social profiles row */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-850/60 max-w-sm">
              <span className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mr-1">
                Profiles:
              </span>
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-indigo-650 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-850 border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                  aria-label={`${link.platform} Profile`}
                  title={`${link.platform} - ${link.label}`}
                >
                  <SocialPlatformIcon platform={link.platform} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Technical Terminal (Col 5) */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-xl overflow-hidden font-mono text-left">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-indigo-500" />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    lathika_shell.sh
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/80"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/80"></div>
                </div>
              </div>
              {/* Terminal Content Panel */}
              <div className="p-4 md:p-6 min-h-[300px] max-h-[360px] overflow-y-auto space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {terminalText.map((cmd, i) => {
                  const isCommand = cmd.startsWith(">");
                  const isSuccess =
                    cmd.includes("WINNER") ||
                    cmd.includes("1st Place") ||
                    cmd.includes("Total Solved:") ||
                    cmd.includes("Valid");
                  return (
                    <div 
                      key={i} 
                      className={`${
                        isCommand 
                          ? "text-indigo-650 dark:text-indigo-455 font-bold" 
                          : isSuccess 
                            ? "text-emerald-600 dark:text-emerald-400 font-semibold" 
                            : "text-slate-550 dark:text-slate-400"
                      }`}
                    >
                      {cmd}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
