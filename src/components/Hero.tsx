import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Briefcase } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Backend Engineer shipping production systems across distributed infrastructure, AI pipelines, and platform tooling. Currently at Apple.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[55vh] sm:min-h-[60vh] lg:min-h-[65vh] 3xl:min-h-[55vh] flex flex-col justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50/30 rounded-full blur-3xl -z-10" />

      <div className="section-container py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Currently at Apple
          </motion.div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-semibold tracking-tight text-[#202124] mb-4 sm:mb-6 leading-[1.1]">
            Hi, I'm <span className="gradient-text">Umer</span>.
          </h1>

          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl 3xl:max-w-4xl">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl 3xl:text-[1.7rem] text-[#5f6368] leading-relaxed min-h-[4rem] sm:min-h-[3.5rem]">
              {text}
              <span className="animate-pulse text-[#1a73e8]">|</span>
            </p>
          </div>

          {/* Info Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 sm:mt-8"
          >
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#5f6368] bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
              <Briefcase size={14} />
              2+ yrs backend
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#5f6368] bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
              <MapPin size={14} />
              Cork, Ireland
            </span>
            {['Azure & AWS', 'AI Pipelines', 'Distributed Systems'].map((chip) => (
              <span key={chip} className="text-xs sm:text-sm text-[#5f6368] bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                {chip}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 mt-8 sm:mt-10"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-[#1a73e8] text-white text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-[#1557b0] transition-all hover:shadow-lg hover:shadow-blue-200/50 active:scale-[0.98]"
            >
              View Experience
              <ArrowDown size={16} />
            </a>
            <a
              href="mailto:karachiwalaumer2612@gmail.com"
              className="inline-flex items-center gap-2 text-[#1a73e8] text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-[#1a73e8]/30 hover:bg-[#e8f0fe] transition-all active:scale-[0.98]"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
