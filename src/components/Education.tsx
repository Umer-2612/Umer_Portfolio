import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
    const education = [
        {
            school: "Atlantic Technological University",
            location: "Donegal, Ireland",
            degree: "Masters of Science in Computing in DevOps",
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
        <section className="section-padding">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-semibold text-[#202124] mb-8 sm:mb-10 lg:mb-12 tracking-tight"
                >
                    Education
                </motion.h2>

                <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-3 sm:gap-4 lg:gap-6 items-start group"
                        >
                            <div className="mt-0.5 sm:mt-1 p-2 sm:p-3 bg-blue-50 text-[#1a73e8] rounded-full shrink-0 group-hover:bg-[#1a73e8] group-hover:text-white transition-colors">
                                <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-base sm:text-lg lg:text-xl 3xl:text-2xl font-semibold text-[#202124] leading-snug">
                                    {edu.school}
                                </h3>
                                <p className="text-[#5f6368] text-sm sm:text-base 3xl:text-lg mb-1">{edu.degree}</p>
                                <div className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-0.5 text-xs sm:text-sm text-[#5f6368] opacity-80">
                                    <span>{edu.location}</span>
                                    <span className="hidden xs:inline">•</span>
                                    <span>{edu.period}</span>
                                    {edu.grade && (
                                        <>
                                            <span className="hidden xs:inline">•</span>
                                            <span className="font-medium text-[#1a73e8]">{edu.grade}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
