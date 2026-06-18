import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <section className="section-padding">
            <div className="section-container bg-[#f8f9fa] rounded-2xl sm:rounded-3xl px-4 xs:px-6 sm:px-8 lg:px-12 3xl:px-16 py-10 sm:py-12 lg:py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-semibold text-[#202124] mb-6 sm:mb-8 tracking-tight"
                >
                    Contact
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <p className="text-sm sm:text-base lg:text-lg 3xl:text-xl text-[#5f6368] leading-relaxed">
                            Feel free to reach out for collaborations or just a friendly hello.
                        </p>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <a href="mailto:karachiwalaumer2612@gmail.com" className="flex items-center gap-2.5 sm:gap-3 text-[#5f6368] hover:text-[#1a73e8] transition-colors text-sm sm:text-base 3xl:text-lg">
                                <Mail size={18} className="sm:w-5 sm:h-5 shrink-0" />
                                <span className="break-all">karachiwalaumer2612@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-2.5 sm:gap-3 text-[#5f6368] text-sm sm:text-base 3xl:text-lg">
                                <MapPin size={18} className="sm:w-5 sm:h-5 shrink-0" />
                                <span>Cork, Ireland</span>
                            </div>
                            <div className="flex items-center gap-2.5 sm:gap-3 text-[#5f6368] text-sm sm:text-base 3xl:text-lg">
                                <Phone size={18} className="sm:w-5 sm:h-5 shrink-0" />
                                <span>+353 0896591216</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col justify-center gap-3 sm:gap-4"
                    >
                        <a
                            href="https://github.com/Umer-2612"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 sm:gap-3 text-[#5f6368] hover:text-[#1a73e8] transition-all p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 text-sm sm:text-base 3xl:text-lg"
                        >
                            <Github size={20} className="sm:w-6 sm:h-6 shrink-0" />
                            <span className="font-medium">Follow on GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/umer-karachiwala/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 sm:gap-3 text-[#5f6368] hover:text-[#1a73e8] transition-all p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 text-sm sm:text-base 3xl:text-lg"
                        >
                            <Linkedin size={20} className="sm:w-6 sm:h-6 shrink-0" />
                            <span className="font-medium">Connect on LinkedIn</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
