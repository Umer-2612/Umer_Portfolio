import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import webosmoticLogo from '../assets/webosmotic-logo.png';
import appleLogo from '../assets/apple-logo.svg';

// Inline Apple SVG component for proper color inheritance
const AppleIcon = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" fill="currentColor" className={className}>
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
);

export const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = [
        {
            company: "Apple",
            role: "Software Engineer Intern",
            period: "March 2026 – Present",
            location: "Cork, Ireland",
            logo: null,
            useAppleIcon: true,
            fallbackBg: "bg-gray-100 text-gray-800",
            link: "https://www.apple.com/",
            details: [
                "Contributing to Apple's internal SEO Manager platform managing metadata across 1M+ URLs, working across 4 distributed services (SEO Parent, SES, SAS, CollaborationService) built on Java (Spring Boot), Apache Cassandra, AWS SQS, and Solr.",
                "Built backend for Scheduled Updates and Revert Changeset features — enabling SEO editors to queue metadata changes at future timestamps and auto-revert campaign changes, eliminating manual deployment dependency.",
                "Delivered 19 of 25 tracked workstreams in ~12 weeks across feature development, platform health fixes, and CI stability improvements.",
                "Optimised Cassandra consistency levels, simplified Solr search handlers, and eliminated redundant DB reads on metadata update flows, improving system reliability in production.",
                "Built internal Cassandra local setup documentation (DV01 connect, data export, multi-service config) adopted by the team to eliminate dependency on shared development data.",
                "Collaborated on an internal GenAI Hackathon prototype using Apple's Claude integration to automate regulatory document tracking — a product manager from a partner team initiated collaboration to productionise the tool."
            ],
            stack: ["Java", "Spring Boot", "Cassandra", "AWS SQS", "Solr"]
        },
        {
            company: "WebOsmotic Private Limited",
            role: "Jr Backend Engineer",
            period: "Apr 2024 – Jun 2025",
            location: "Remote / India",
            logo: webosmoticLogo,
            useAppleIcon: false,
            fallbackBg: null,
            link: "https://webosmotic.com/",
            details: [
                "Built a C# .NET Teams bot using Microsoft Graph Communications APIs that autonomously joins scheduled interviews across 5 enterprise clients, processing 100+ interview sessions with real-time audio/video stream ingestion via Microsoft PSI.",
                "Engineered a sub-second latency stream relay over WebSockets from C# to a Python AI inference server for live transcription, speaker detection, and candidate analysis delivered to the interview panel in-meeting.",
                "Deployed the bot as an Azure multi-tenant service, handling bot registration, Graph API permissions (Calls.AccessMedia.All, Calls.JoinGroupCall.All), SSL config, and lifecycle management across tenant environments.",
                "Built document ingestion and vector search pipelines for narad.io, an AI-powered GRC platform, enabling ~90% reduction in manual compliance effort through RAG-based automated questionnaire responses with up to 98% answer accuracy.",
                "Owned Jenkins CI/CD as a shared service for a 12-person team — managed pipelines across Docker/AKS/Azure Pipelines and automated backend workflows with Python and TypeScript scripts integrated directly into CI."
            ],
            stack: ["C#", ".NET", "Node.js", "TypeScript", "Azure AKS", "MongoDB", "Redis"]
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
                    Experience
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-16">
                    {/* Tabs */}
                    <div className="flex lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 shrink-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                        {experiences.map((exp, index) => (
                            <button
                                key={index}
                                id={`experience-tab-${index}`}
                                onClick={() => setActiveTab(index)}
                                className={`text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 whitespace-nowrap flex items-center gap-2.5 sm:gap-3 border text-sm sm:text-base ${activeTab === index
                                    ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium border-blue-200 shadow-sm'
                                    : 'text-[#5f6368] hover:bg-gray-50 border-transparent'
                                    }`}
                            >
                                {exp.useAppleIcon ? (
                                    <AppleIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                ) : exp.logo ? (
                                    <img src={exp.logo} alt={exp.company} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                                ) : null}
                                {exp.company}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-h-[350px] sm:min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl 3xl:text-3xl font-semibold text-[#202124]">
                                        {experiences[activeTab].role}
                                    </h3>
                                    <a
                                        href={experiences[activeTab].link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#1a73e8] hover:underline flex items-center gap-1 text-xs sm:text-sm self-start sm:self-auto"
                                    >
                                        @ {experiences[activeTab].company} <ExternalLink size={13} />
                                    </a>
                                </div>
                                <p className="text-[#5f6368] font-medium mb-4 sm:mb-6 text-xs sm:text-sm">
                                    {experiences[activeTab].period} · {experiences[activeTab].location}
                                </p>

                                <ul className="space-y-2.5 sm:space-y-3">
                                    {experiences[activeTab].details.map((detail, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.04 }}
                                            className="text-[#5f6368] leading-relaxed flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm 3xl:text-base"
                                        >
                                            <span className="mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0" />
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-100">
                                    {experiences[activeTab].stack.map((tech, i) => (
                                        <span key={i} className="text-[10px] sm:text-xs font-medium text-[#1a73e8] bg-[#e8f0fe] px-2 sm:px-2.5 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
