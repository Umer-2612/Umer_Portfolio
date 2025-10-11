import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/60 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/70"
          : "bg-transparent dark:bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg font-semibold tracking-wide text-slate-900 transition hover:text-primary dark:text-slate-100"
          >
            Umer<span className="text-primary">.dev</span>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {[
              "About",
              "Impact",
              "Experience",
              "Education",
              "Skills",
              "Projects",
              "Certifications",
              "Insights",
              "Open Source",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))
                }
                className="text-sm font-medium text-slate-500 transition hover:text-primary dark:text-slate-300"
              >
                {item}
              </button>
            ))}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="hidden rounded-full text-sm text-slate-600 hover:text-primary dark:text-slate-300 lg:flex"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light mode" : "Dark mode"}
              </Button>
              <Button className="rounded-full px-5 text-sm" asChild>
                <a href="mailto:karachiwalaumer2612@gmail.com">Hire me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
