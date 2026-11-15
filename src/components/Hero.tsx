import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Briefcase } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Backend Engineer shipping production systems across distributed infrastructure, AI pipelines, and platform tooling.";

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
    <section className="min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] 3xl:min-h-[60vh] flex flex-col justify-center relative overflow-hidden">
      {/* Cinematic glow backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 dark:from-primary/25 via-transparent to-transparent" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="glow-spotlight absolute -top-1/4 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] sm:w-[46rem] sm:h-[46rem] blur-3xl -z-10 opacity-70 dark:opacity-100"
      />
      <div className="absolute top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />

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
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-muted border border-border rounded-full text-muted-foreground text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Ex Apple
          </motion.div>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 3xl:text-9xl font-bold tracking-tighter text-foreground mb-4 sm:mb-6 leading-[1.05]">
            Hi, I'm <span className="gradient-text">Umer</span>.
          </h1>

          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl 3xl:max-w-4xl">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl 3xl:text-[1.7rem] text-muted-foreground leading-relaxed min-h-[4rem] sm:min-h-[3.5rem]">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </p>
          </div>

          {/* Info Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 sm:mt-8"
          >
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-muted border border-border px-3 py-1.5 rounded-full">
              <Briefcase size={14} />
              2+ yrs backend
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-muted border border-border px-3 py-1.5 rounded-full">
              <MapPin size={14} />
              Dublin, Ireland
            </span>
            {['Azure & AWS', 'AI Pipelines', 'Distributed Systems'].map((chip) => (
              <span key={chip} className="text-xs sm:text-sm text-muted-foreground bg-muted border border-border px-3 py-1.5 rounded-full">
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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-primary-hover transition-all hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)] active:scale-[0.98]"
            >
              View Experience
              <ArrowDown size={16} />
            </a>
            <a
              href="mailto:karachiwalaumer2612@gmail.com"
              className="inline-flex items-center gap-2 text-primary text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-primary/30 hover:bg-accent transition-all active:scale-[0.98]"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
