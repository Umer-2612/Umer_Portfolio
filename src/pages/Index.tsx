import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Insights from "@/components/Insights";
import OpenSource from "@/components/OpenSource";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        darkMode ? "dark bg-[#0D1117]" : "bg-gradient-to-b from-[#fdfcf3] via-white to-[#f1f5f9]"
      )}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#c4e9ff_0,#ffffff_45%)] opacity-60 dark:bg-[radial-gradient(circle_at_top,#0f172a_0,#020617_45%)] dark:opacity-40" />
        <Hero />
        <Impact />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Insights />
        <OpenSource />
        <Certifications />
        <Contact />
      </main>

      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Umer Karachiwala. Always curious,
            always building.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
