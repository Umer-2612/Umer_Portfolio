import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ExternalLink } from 'lucide-react';
import webosmoticLogo from '../assets/webosmotic-logo.png';
import codeinboundLogo from '../assets/codeinbound-logo.jpeg';

export const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = [
        {
            company: "Apple",
            role: "Software Engineering Intern",
            // period: "Incoming...",
            // logo: webosmoticLogo,
            link: "https://webosmotic.com/",
            details: [
                "Will be joining IS&T division at Apple soon...."
            ]
        },
        {
            company: "WebOsmotic Private Limited",
            role: "Jr Backend Engineer",
            period: "Oct 2023 – Jun 2025",
            logo: webosmoticLogo,
            link: "https://webosmotic.com/",
            details: [
                "Developed and maintained scalable backend services using Node.js, TypeScript, and C#, delivering production-grade features for enterprise clients.",
                "Built a Microsoft Teams bot integrating real-time communication flows, authentication layers, and messaging pipelines using Teams APIs.",
                "Engineered cloud-ready services on Azure, including containerization with Docker, deployments to Azure Kubernetes Service (AKS), and CI/CD automation.",
                "Designed and implemented backend modules for narad.io, an AI-powered Governance, Risk & Compliance (GRC) platform.",
                "Built policy & evidence management systems, supporting upload and retrieval of PDF, DOCX, Excel, and image files.",
                "Implemented AI-driven Q&A workflows, including document parsing, vector search/reference mapping, and automated compliance assessments.",
                "Developed Excel-based assessment processing to generate compliance answers, policy references, and evidence mappings using AI pipelines.",
                "Optimized APIs and storage operations using MongoDB, Redis, and multi-layer caching strategies.",
                "Collaborated across product, frontend, and DevOps teams, contributing to feature design, architecture discussions, and cloud deployments."
            ]
        },
        // {
        //     company: "CodeIn Bound",
        //     role: "Software Engineer Intern",
        //     period: "Mar 2023 – Jun 2023",
        //     logo: codeinboundLogo,
        //     link: "https://www.codeinbound.com/",
        //     details: [
        //         "Developed backend APIs for network insights with data preprocessing and feature extraction using Python and Pandas.",
        //         "Integrated model outputs into APIs for predictive latency insights.",
        //         "Participated in experimentation, performance evaluation, and production deployment cycles."
        //     ]
        // }
    ];

    return (
        <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-medium text-[#202124] mb-8 tracking-tight"
            >
                Experience
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Tabs */}
                <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 shrink-0">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`text-left px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap flex items-center gap-3 border ${activeTab === index
                                ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium border-blue-100'
                                : 'text-[#5f6368] hover:bg-gray-50 border-transparent'
                                }`}
                        >
                            <img src={exp.logo} alt={exp.company} className="w-6 h-6 rounded-full object-cover" />
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-grow min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-medium text-[#202124]">
                                    {experiences[activeTab].role}
                                </h3>
                                <a
                                    href={experiences[activeTab].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#1a73e8] hover:underline flex items-center gap-1 text-sm"
                                >
                                    Visit <ExternalLink size={14} />
                                </a>
                            </div>
                            <p className="text-[#5f6368] font-medium mb-6 text-sm">
                                {experiences[activeTab].period}
                            </p>

                            <ul className="space-y-3">
                                {experiences[activeTab].details.map((detail, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="text-[#5f6368] leading-relaxed flex items-start gap-3 text-sm"
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0" />
                                        {detail}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
