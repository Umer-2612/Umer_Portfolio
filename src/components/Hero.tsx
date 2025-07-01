
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Cloud } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Umer — Building Reliable Systems at Scale";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const technologies = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔷' },
    { name: 'Kubernetes', icon: '⎈' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'GitHub Actions', icon: '⚡' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <Cloud
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground min-h-[1.2em]">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          DevOps | SRE | Cloud Infrastructure | Automation
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center space-x-2 bg-card rounded-2xl px-4 py-2 border hover:border-primary/50 transition-colors"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-sm text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={scrollToProjects} size="lg" className="rounded-2xl">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-2xl">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
