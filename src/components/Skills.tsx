import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Plug, GitBranch, Activity } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code2 size={16} />,
    "Cloud & Infrastructure": <Cloud size={16} />,
    "Databases & Search": <Database size={16} />,
    "Integrations": <Plug size={16} />,
    "CI/CD": <GitBranch size={16} />,
    "Monitoring": <Activity size={16} />,
};

const categoryColors: Record<string, string> = {
    "Programming Languages": "from-blue-500 to-indigo-500",
    "Cloud & Infrastructure": "from-orange-400 to-amber-500",
    "Databases & Search": "from-emerald-500 to-teal-500",
    "Integrations": "from-purple-500 to-pink-500",
    "CI/CD": "from-cyan-500 to-blue-500",
    "Monitoring": "from-rose-400 to-red-500",
};

export const Skills = () => {
    const skillCategories: Record<string, string[]> = {
        "Programming Languages": ["Java (Spring Boot)", "Node.js (Express)", "TypeScript", "Python", ".NET / C#", "C++"],
        "Cloud & Infrastructure": ["AWS (EKS, CloudFormation, EC2, AutoScaling)", "Azure (AKS, Bot Services, Pipelines)", "Docker", "Kubernetes", "Terraform"],
        "Databases & Search": ["Apache Cassandra", "MongoDB", "PostgreSQL", "Redis", "Solr", "OpenSearch"],
        "Integrations": ["Stripe", "Razorpay", "Microsoft Graph", "WhatsApp Graph APIs", "Socket.io"],
        "CI/CD": ["GitHub Actions", "Jenkins", "AWS CodePipeline", "Azure Pipelines"],
        "Monitoring": ["Splunk", "Prometheus", "CloudWatch", "ELK"],
    };

    return (
        <section className="section-padding">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-semibold text-[#202124] mb-8 sm:mb-10 lg:mb-12 tracking-tight"
                >
                    Skills
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {Object.entries(skillCategories).map(([category, skills], catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.08 }}
                            className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                                <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${categoryColors[category]} text-white`}>
                                    {categoryIcons[category]}
                                </div>
                                <h3 className="text-sm sm:text-base 3xl:text-lg font-semibold text-[#202124]">
                                    {category}
                                </h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.05 + index * 0.02 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "#e8f0fe", color: "#1a73e8", borderColor: "#1a73e8" }}
                                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-50 text-[#5f6368] rounded-full text-[11px] sm:text-xs 3xl:text-sm font-medium border border-gray-100 cursor-default transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
