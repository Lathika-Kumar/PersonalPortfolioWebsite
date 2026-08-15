import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Code } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import type { Theme } from "../hooks/useTheme";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { socialLinks } from "../data/socialLinks";

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "coding", label: "Coding / DSA" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    { rootMargin: "-20% 0px -60% 0px" }
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return <Github className="h-5 w-5" />;
      case "LinkedIn":
        return <Linkedin className="h-5 w-5" />;
      case "LeetCode":
        return (
          // Premium custom LeetCode SVG icon
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.743-.696L3.648 14.3a2.453 2.453 0 0 1-.744-1.768c0-.68.258-1.349.744-1.8l5.074-4.887c.451-.434 1.173-.42 1.61.031a1.083 1.083 0 0 1-.03 1.583L5.32 12.247c-.207.2-.207.53 0 .73l6.275 6.042c.2.193.53.193.73 0l2.196-2.127a1.084 1.084 0 0 1 1.583.03 1.127 1.127 0 0 1-.002 1.608zm5.253-5.263l-2.015 1.954a1.083 1.083 0 0 1-1.58-.031 1.128 1.128 0 0 1 .03-1.584l2.008-1.947c.2-.193.2-.53 0-.73l-6.276-6.042c-.2-.193-.53-.193-.73 0L7.6 10.366a1.128 1.128 0 0 1-1.584-.03 1.083 1.083 0 0 1 .03-1.58l5.215-5.04c.465-.45 1.112-.696 1.745-.696.632 0 1.277.246 1.743.696l6.276 6.042c.983.948.983 2.502.002 3.45z" />
            <path d="M12.43 14.24a1.24 1.24 0 0 1-.87-.36l-2.27-2.23a1.25 1.25 0 0 1 0-1.76 1.24 1.24 0 0 1 1.75 0l2.27 2.23a1.25 1.25 0 0 1 0 1.76 1.24 1.24 0 0 1-.88.36z" />
          </svg>
        );
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Lathika<span className="text-indigo-600 dark:text-indigo-400">.K</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  activeSection === item.id
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Right Side Buttons & Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 border-r border-slate-200 dark:border-slate-800 pr-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label={link.platform}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex lg:hidden items-center space-x-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 z-40 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1.5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
                aria-label={link.platform}
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
