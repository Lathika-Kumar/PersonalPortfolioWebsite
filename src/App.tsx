import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { CodingProfiles } from "./sections/CodingProfiles";
import { Education } from "./sections/Education";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import type { Project } from "./data/projects";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen text-slate-900 bg-white dark:text-slate-100 dark:bg-slate-950 transition-colors duration-300">
      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Contents */}
      <main>
        {/* Hero Area */}
        <Hero />

        {/* Quick Highlights Stats */}
        <Stats />

        {/* About Biography */}
        <About />

        {/* Skills Board */}
        <Skills />

        {/* Projects Board */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* LeetCode & Coding Metrics */}
        <CodingProfiles />

        {/* Education Timeline */}
        <Education />

        {/* Certifications Credential Cards */}
        <Certifications />

        {/* Contact Submission */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
