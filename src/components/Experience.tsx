import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import webosmoticLogo from '../assets/webosmotic-logo.png';

// Inline Apple SVG component for proper color inheritance
const AppleIcon = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" fill="currentColor" className={className}>
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
);

interface Role {
    company: string;
    role: string;
    period: string;
    location: string;
    link: string;
    logo?: string;
    useAppleIcon?: boolean;
    details: string[];
    stack: string[];
}

const experiences: Role[] = [
    {
        company: "Apple",
        role: "Software Engineer Intern",
        period: "Mar 2026 – Sep 2026",
        location: "Cork, Ireland",
        link: "https://www.apple.com/",
        useAppleIcon: true,
        details: [
            "Contributed to Scheduled Updates and Revert Changeset features across 5 distributed Java/Spring Boot services, enabling business teams to schedule SEO metadata changes for 1M+ Apple Store URLs without a real-time deployment dependency.",
            "Independently designed and shipped a search feature in a module on the SEO Editing Service, evaluated Kafka vs SNS/SQS and proposed the latter for cross-DC replication, directly unblocking a feature request pending for over a year.",
            "Built a content-based search capability on OpenSearch for the SEO Editing Service, closing a gap where business teams could only search Apple Store metadata by display fields — unblocking discovery across 1M+ URLs.",
            "Led a cross-functional team at Apple's internal GenAI Hackathon; project shortlisted for sponsorship. Initiated productionisation of “No Governance Lag,” a tool automating regulatory document ingestion, version diffing, and compliance reporting for Apple supply chain teams.",
        ],
        stack: ["Java", "Spring Boot", "OpenSearch", "SNS/SQS", "Kafka"],
    },
    {
        company: "WebOsmotic Private Limited",
        role: "Jr Backend Engineer",
        period: "Apr 2024 – Jun 2025",
        location: "Surat, India",
        link: "https://webosmotic.com/",
        logo: webosmoticLogo,
        details: [
            "Built and deployed a Microsoft Teams bot as an Azure multi-tenant service, integrating Microsoft Graph Communications APIs to autonomously join scheduled interview sessions across enterprise clients; owned uptime and session reliability across concurrent tenants handling real-time audio/video stream ingestion via Microsoft PSI.",
            "Designed a sub-second latency pipeline over WebSockets streaming live audio from the C# bot to a Python AI inference server, monitoring stream health and handling failure/reconnect scenarios to keep in-meeting transcription and speaker detection reliable under load.",
            "Built document ingestion and RAG-based questionnaire automation backend for narad.io, an AI-powered TPRM platform, including error handling and retry logic to keep evidence-backed response generation consistent for security and compliance teams.",
        ],
        stack: ["C#", ".NET", "Azure", "Microsoft Graph", "Python", "WebSockets"],
    },
    {
        company: "WebOsmotic Private Limited",
        role: "Software Engineer Intern",
        period: "Oct 2023 – Mar 2024",
        location: "Surat, India",
        link: "https://webosmotic.com/",
        logo: webosmoticLogo,
        details: [
            "Built core backend for an internal Intranet platform in Node.js and MongoDB, covering project management, document management, and employee administration, with logging and error tracking to keep the platform stable across teams.",
            "Integrated a live data stream from a biometric punch machine via a third-party SDK, built a REST API layer handling timezone-aware shift tracking, converting all time data to UTC to eliminate multi-timezone data inconsistencies at the source.",
            "Collaborated directly with the CEO and Product Manager on stand-ups, client demos, and feedback loops, contributing to both technical execution and early GTM thinking for the product.",
        ],
        stack: ["Node.js", "MongoDB", "REST APIs"],
    },
];

export const Experience = () => {
    return (
        <section className="section-padding">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold tracking-tighter text-foreground mb-8 sm:mb-10 lg:mb-12"
                >
                    Experience
                </motion.h2>

                <div className="relative">
                    {/* Timeline spine */}
                    <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-border hidden xs:block" aria-hidden="true" />

                    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={`${exp.company}-${exp.role}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="relative flex gap-4 sm:gap-6"
                            >
                                {/* Logo marker */}
                                <div className="relative z-10 shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-card border border-border shadow-sm">
                                    {exp.useAppleIcon ? (
                                        <AppleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                                    ) : (
                                        <img src={exp.logo} alt={exp.company} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1 pb-1">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
                                        <h3 className="text-base sm:text-lg lg:text-xl 3xl:text-2xl font-semibold text-foreground">
                                            {exp.role}
                                        </h3>
                                        <span className="text-xs sm:text-sm font-medium text-muted-foreground shrink-0">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 mb-3 sm:mb-4">
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm sm:text-base font-medium text-primary hover:underline inline-flex items-center gap-1"
                                        >
                                            {exp.company}
                                            <ExternalLink size={12} />
                                        </a>
                                        <span className="text-muted-foreground/60">·</span>
                                        <span className="text-xs sm:text-sm text-muted-foreground">{exp.location}</span>
                                    </div>

                                    <ul className="space-y-2 sm:space-y-2.5">
                                        {exp.details.map((detail, i) => (
                                            <li
                                                key={i}
                                                className="text-muted-foreground leading-relaxed flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm 3xl:text-base"
                                            >
                                                <span className="mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                                        {exp.stack.map((tech, i) => (
                                            <span key={i} className="text-[10px] sm:text-xs font-medium text-primary bg-accent px-2 sm:px-2.5 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
