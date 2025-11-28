import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
    const projects = [
        {
            title: "Realtime Meeting Intelligence",
            description: "AI meeting assistants for Teams & Zoom. Real-time audio/video streaming via Microsoft PSI.",
            tags: [".NET", "C++", "AWS EKS", "Kustomize", "Microsoft PSI"],
            links: { github: "https://github.com/Umer-2612/realtime-meeting-intelligence" }
        },
        {
            title: "Restaurant Platform",
            description: "Full-stack restaurant management with Stripe. Deployed on AWS EC2 with auto-restart.",
            tags: ["Node.js", "Stripe", "AWS EC2", "Admin Controls"],
            links: {
                github: "https://github.com/Umer-2612/Restaurant-Api",
                demo: "https://www.punjabitouchindianrestaurant.com.au/"
            }
        },
        {
            title: "Multi-Agent Voice AI",
            description: "LangChain framework for orchestrating GPT-driven agents. Encrypted message queues.",
            tags: ["Python", "LangChain", "OpenAI", "Voice AI"],
            links: { github: "https://github.com/Umer-2612/ai-talking-agent-backend" }
        }
    ];

    return (
        <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto bg-[#f8f9fa] rounded-3xl my-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-medium text-[#202124] mb-8 tracking-tight"
            >
                Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex gap-2">
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-gray-50 rounded-full transition-colors text-[#5f6368] hover:text-[#1a73e8]">
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-gray-50 rounded-full transition-colors text-[#5f6368] hover:text-[#1a73e8]">
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>

                        <p className="text-[#5f6368] text-sm leading-relaxed mb-4 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-[10px] font-medium text-[#5f6368] bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
