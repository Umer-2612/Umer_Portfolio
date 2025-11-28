import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
    const education = [
        {
            school: "Atlantic Technological University",
            location: "Donegal, Ireland",
            degree: "Masters in Science in Computing in DevOps",
            period: "Sept 2025 – Present",
            grade: null
        },
        {
            school: "Bhagwan Mahavir College of Engineering and Technology",
            location: "Surat, India",
            degree: "Bachelor of Technology in Computer Engineering",
            period: "Oct 2021 – May 2025",
            grade: "CGPA: 8.48/10"
        }
    ];

    return (
        <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-medium text-[#202124] mb-16 tracking-tight"
            >
                Education
            </motion.h2>

            <div className="space-y-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-6 items-start group"
                    >
                        <div className="mt-1 p-3 bg-blue-50 text-[#1a73e8] rounded-full shrink-0 group-hover:bg-[#1a73e8] group-hover:text-white transition-colors">
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-[#202124]">{edu.school}</h3>
                            <p className="text-[#5f6368] mb-1">{edu.degree}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#5f6368] opacity-80">
                                <span>{edu.location}</span>
                                <span>•</span>
                                <span>{edu.period}</span>
                                {edu.grade && (
                                    <>
                                        <span>•</span>
                                        <span className="font-medium text-[#1a73e8]">{edu.grade}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
