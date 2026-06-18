import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
    const projects = [
        {
            title: "Realtime Meeting Intelligence",
            description: "AI meeting assistants for Microsoft Teams (.NET) and Zoom (C++), streaming real-time audio/video via Microsoft PSI to power contextual insights.",
            impact: "Architected the Teams media pipeline (TeamsCallLifecycleService, TeamsSessionCoordinator, MediaStreamRouter, LRU-based routing) and refactored the Zoom SDK for high-throughput, low-latency handling.",
            tags: [".NET", "C++", "AWS EKS", "Kustomize", "Microsoft PSI"],
            links: { github: "https://github.com/Umer-2612/realtime-meeting-intelligence" }
        },
        {
            title: "Restaurant Platform (Australia)",
            description: "Created a backend API layer with Stripe integration and admin controls for a live restaurant site.",
            impact: "Deployed on AWS EC2 with auto-restart scripts and health checks.",
            tags: ["Node.js", "Stripe", "AWS EC2", "Admin Controls"],
            links: {
                github: "https://github.com/Umer-2612/Restaurant-Api",
                demo: "https://www.punjabitouchindianrestaurant.com.au/"
            }
        },
        {
            title: "Multi-Agent Voice AI Framework",
            description: "LangChain-inspired multi-agent framework for orchestrating GPT-driven business automation with agent memory and tool integration.",
            impact: "Developed real-time conversational agent with encrypted message queues and anonymized logs to preserve user privacy.",
            tags: ["Python", "LangChain", "OpenAI", "Voice AI"],
            links: { github: "https://github.com/Umer-2612/ai-talking-agent-backend" }
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
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-transparent hover:border-blue-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="flex justify-between items-start mb-3 sm:mb-4">
                                <h3 className="text-base sm:text-lg 3xl:text-xl font-semibold text-[#202124] group-hover:text-[#1a73e8] transition-colors pr-2">
                                    {project.title}
                                </h3>
                                <div className="flex gap-1.5 sm:gap-2 shrink-0">
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-gray-50 rounded-full transition-colors text-[#5f6368] hover:text-[#1a73e8]">
                                            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                                        </a>
                                    )}
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-gray-50 rounded-full transition-colors text-[#5f6368] hover:text-[#1a73e8]">
                                        <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-[#5f6368] text-xs sm:text-sm 3xl:text-base leading-relaxed mb-2 sm:mb-3">
                                {project.description}
                            </p>

                            <p className="text-[#5f6368] text-[11px] sm:text-xs 3xl:text-sm leading-relaxed mb-4 italic opacity-80 flex-grow">
                                {project.impact}
                            </p>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 sm:pt-4 border-t border-gray-50">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-[9px] sm:text-[10px] 3xl:text-xs font-medium text-[#5f6368] bg-gray-50 px-2 py-0.5 sm:py-1 rounded-full border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
