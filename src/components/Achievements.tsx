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
            iconBg: "bg-amber-50 text-amber-600"
        },
        {
            title: "FusionHack 2024 Finalist",
            subtitle: null,
            description: "Reached the finals by building a Go-based API service for event management with real-time scheduling and orchestration.",
            icon: <Trophy size={22} />,
            iconBg: "bg-yellow-50 text-yellow-600"
        },
        {
            title: "300+ Problems Solved",
            subtitle: null,
            description: "Solved 300+ problems on LeetCode and other platforms collectively, strengthening algorithmic problem-solving skills.",
            icon: <Code2 size={22} />,
            iconBg: "bg-blue-50 text-blue-600"
        },
        {
            title: "Mentorship & Leadership",
            subtitle: null,
            description: "Conducted peer sessions for juniors on data structures and backend fundamentals. Mentored over 20 students in coding interview preparation.",
            icon: <Users size={22} />,
            iconBg: "bg-green-50 text-green-600"
        }
    ];

    return (
        <section className="section-padding">
            <div className="section-container bg-[#f8f9fa] rounded-2xl sm:rounded-3xl px-4 xs:px-6 sm:px-8 lg:px-12 3xl:px-16 py-10 sm:py-12 lg:py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-semibold text-[#202124] mb-8 sm:mb-10 lg:mb-12 tracking-tight"
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
                            className="flex flex-col items-start p-5 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
                        >
                            <div className={`p-2.5 sm:p-3 ${achievement.iconBg} rounded-lg sm:rounded-xl mb-4 sm:mb-5 lg:mb-6`}>
                                {achievement.icon}
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl 3xl:text-2xl font-semibold text-[#202124] mb-1">
                                {achievement.title}
                            </h3>
                            {achievement.subtitle && (
                                <p className="text-xs sm:text-sm text-[#1a73e8] font-medium mb-2">
                                    {achievement.subtitle}
                                </p>
                            )}
                            <p className="text-[#5f6368] text-xs sm:text-sm 3xl:text-base leading-relaxed">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
