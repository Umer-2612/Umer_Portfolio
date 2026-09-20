import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code2, Users } from 'lucide-react';

export const Achievements = () => {
    const achievements = [
        {
            title: "Employee of the Month",
            subtitle: '"The Challenge Seeker"',
            description: "Recognized at WebOsmotic for backend excellence, ownership of complex problems, and consistent delivery across enterprise projects.",
            icon: <Award size={22} />,
            iconBg: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
        },
        {
            title: "FusionHack 2024 Finalist",
            subtitle: null,
            description: "Reached the finals by building a Go-based API service for event management with real-time scheduling and orchestration.",
            icon: <Trophy size={22} />,
            iconBg: "bg-yellow-50 text-yellow-600 dark:bg-yellow-950/40 dark:text-yellow-400"
        },
        {
            title: "300+ Problems Solved",
            subtitle: null,
            description: "Solved 300+ problems on LeetCode and other platforms collectively, strengthening algorithmic problem-solving skills.",
            icon: <Code2 size={22} />,
            iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
        },
        {
            title: "Mentorship & Leadership",
            subtitle: null,
            description: "Conducted peer sessions for juniors on data structures and backend fundamentals. Mentored over 20 students in coding interview preparation.",
            icon: <Users size={22} />,
            iconBg: "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400"
        }
    ];

    return (
        <section className="section-padding">
            <div className="section-container bg-muted rounded-2xl sm:rounded-3xl px-4 xs:px-6 sm:px-8 lg:px-12 3xl:px-16 py-10 sm:py-12 lg:py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold tracking-tighter text-foreground mb-8 sm:mb-10 lg:mb-12"
                >
                    Achievements
                </motion.h2>

                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-start p-5 sm:p-6 lg:p-8 bg-card rounded-xl sm:rounded-2xl shadow-sm border border-border hover:border-primary/30 hover:shadow-md dark:hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.35)] transition-all duration-300"
                        >
                            <div className={`p-2.5 sm:p-3 ${achievement.iconBg} rounded-lg sm:rounded-xl mb-4 sm:mb-5 lg:mb-6`}>
                                {achievement.icon}
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl 3xl:text-2xl font-semibold text-foreground mb-1">
                                {achievement.title}
                            </h3>
                            {achievement.subtitle && (
                                <p className="text-xs sm:text-sm text-primary font-medium mb-2">
                                    {achievement.subtitle}
                                </p>
                            )}
                            <p className="text-muted-foreground text-xs sm:text-sm 3xl:text-base leading-relaxed">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
