import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import employeeOfMonth from '../assets/employee-of-month.png';

export const Certifications = () => {
    const certifications = [
        {
            title: "AWS Cloud Quest: Generative AI Practitioner",
            link: "https://www.credly.com/badges/019efbe7-c545-4de6-99cf-b45587f30951/linked_in_profile",
            badge: "https://images.credly.com/images/15fa08e6-ca73-4fa3-94ed-c36f7f157313/blob",
            color: "bg-white"
        },
        {
            title: "MongoDB: Search with MongoDB",
            link: "https://www.credly.com/badges/66883cdd-e909-4a6d-9117-5d74919ee482/linked_in_profile",
            badge: "https://images.credly.com/images/b4ac66fd-9972-436e-b01e-c04aee2466de/blob",
            color: "bg-white"
        },
        {
            title: "MongoDB: AI-Powered Search Vector Search",
            link: "https://www.credly.com/badges/b5b6feb5-403a-4282-8cc4-4caa600fa5b7/linked_in_profile",
            badge: "https://images.credly.com/images/730e9c82-7869-4288-b580-9f8500a94465/blob",
            color: "bg-white"
        },
        {
            title: "AWS Cloud Quest: Cloud Practitioner",
            link: "https://www.credly.com/badges/606d2fd5-6070-472b-b85a-17a4cabab7c2/linked_in_profile",
            badge: "https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob",
            color: "bg-white"
        },
        {
            title: "Employee of the Month (WebOsmotic)",
            link: "https://drive.google.com/file/d/18CCXyxOvrz2bpNTOOw7rcuNQ1RmYRZpd/view",
            badge: employeeOfMonth,
            color: "bg-white"
        },
        {
            title: "AWS Fundamentals of ML & AI",
            link: "https://drive.google.com/file/d/1h75fneLEfczamauyzlEg5lh1jv1Nqv_f/view",
            badge: null,
            icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            color: "bg-white"
        },
        {
            title: "Web Development Bootcamp",
            link: "https://www.udemy.com/certificate/UC-59573590-40a6-4c8e-be8f-bba6c4b28cfd/",
            badge: null,
            icon: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
            color: "bg-white"
        }
    ];

    return (
        <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-medium text-[#202124] mb-12 tracking-tight"
            >
                Certifications
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                    <motion.a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, shadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                        className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 group h-full hover:border-blue-100"
                    >
                        {/* Badge Image Area */}
                        <div className={`w-32 h-32 mb-4 flex items-center justify-center ${cert.color} group-hover:scale-105 transition-transform duration-300 p-2 rounded-xl`}>
                            {cert.badge ? (
                                <img src={cert.badge} alt={cert.title} className="w-full h-full object-contain drop-shadow-sm" />
                            ) : (
                                <img src={cert.icon} alt={cert.title} className="w-full h-full object-contain" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="text-center flex-grow flex flex-col justify-between w-full">
                            <h3 className="text-base font-medium text-[#202124] mb-1 leading-snug group-hover:text-[#1a73e8] transition-colors">
                                {cert.title}
                            </h3>

                            <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-[#1a73e8] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                                View Credential <ExternalLink size={12} />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
