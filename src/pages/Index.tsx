import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Cloud, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import Experience from "@/components/Experience";

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={cn("min-h-screen transition-colors duration-300", darkMode ? "dark bg-[#0D1117]" : "bg-white")}>
      <Navbar darkMode={darkMode} />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2025 Umer Karachiwala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
