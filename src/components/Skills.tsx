import React from 'react';
import { motion } from 'framer-motion';

export const Skills = () => {
    const skills = [
        "Node.js", "Python (FastAPI)", "TypeScript", "Golang", "C++",
        "AWS Lambda", "AWS SQS", "API Gateway", "EC2", "ECS", "Docker", "Kubernetes", "Terraform",
        "Azure Bot Service", "AKS", "REST APIs", "Microservices", "Event-driven Architecture",
        "PostgreSQL", "MongoDB", "Redis", "Kafka", "Stripe", "Twilio", "GitHub Actions", "CI/CD",
        "Prometheus", "ELK", "CloudWatch", "Distributed Tracing"
    ];

    return (
        <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-medium text-[#202124] mb-8 tracking-tight"
            >
                Skills
            </motion.h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.02 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#e8f0fe", color: "#1a73e8", borderColor: "#1a73e8" }}
                        className="px-4 py-2 bg-gray-50 text-[#5f6368] rounded-full text-sm font-medium border border-gray-100 cursor-default transition-colors"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </section>
    );
};
