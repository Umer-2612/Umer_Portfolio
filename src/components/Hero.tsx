import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Backend Engineer specializing in scalable systems, cloud infrastructure, and AI integration.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-start px-6 md:px-20 max-w-6xl mx-auto relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#202124] mb-6">
          Hi, I'm <span className="text-[#1a73e8]">Umer</span>.
        </h1>
        <p className="text-xl md:text-2xl text-[#5f6368] max-w-2xl leading-relaxed h-[3.5rem] md:h-auto">
          {text}
          <span className="animate-pulse text-[#1a73e8]">|</span>
        </p>
      </motion.div>
    </section>
  );
};
