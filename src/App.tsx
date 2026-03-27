import React from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

import { Insights } from './components/Insights';
import { useVisitorTracker } from './hooks/useVisitorTracker';

function App() {
  useVisitorTracker();

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <span className="text-lg font-medium text-[#5f6368]">Umer Karachiwala</span>
        <div className="hidden md:flex gap-6 text-sm font-medium text-[#5f6368]">
          <a href="#experience" className="hover:text-[#1a73e8] transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[#1a73e8] transition-colors">Projects</a>
          <a href="#insights" className="hover:text-[#1a73e8] transition-colors">Insights</a>
          <a href="#skills" className="hover:text-[#1a73e8] transition-colors">Skills</a>
          <a href="#education" className="hover:text-[#1a73e8] transition-colors">Education</a>
          <a href="#certifications" className="hover:text-[#1a73e8] transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-[#1a73e8] transition-colors">Contact</a>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="insights"><Insights /></div>
        <div id="skills"><Skills /></div>
        <div id="education"><Education /></div>
        <div id="certifications"><Certifications /></div>
        <div id="achievements"><Achievements /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
