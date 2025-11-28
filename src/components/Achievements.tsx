import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export const Achievements = () => {
    const achievements = [
        {
            title: "FusionHack 2024 Finalist",
            description: "Reached the finals by building a Go-based API service for event management with real-time scheduling."
        },
        {
            title: "300+ Problems Solved",
            description: "Solved 300+ problems on LeetCode and other platforms collectively, strengthening algorithmic problem-solving skills."
        },
        {
            title: "Mentorship & Leadership",
            description: "Conducted peer sessions for juniors on data structures and backend fundamentals and mentored over 20 students in coding interview preparation."
        }
    ];

    return (
        <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto bg-[#f8f9fa] rounded-3xl my-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-medium text-[#202124] mb-16 tracking-tight"
            >
                Achievements
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-start p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                        <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl mb-6">
                            <Trophy size={24} />
                        </div>
                        <h3 className="text-xl font-medium text-[#202124] mb-3">{achievement.title}</h3>
                        <p className="text-[#5f6368] leading-relaxed">{achievement.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
