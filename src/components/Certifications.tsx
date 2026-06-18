import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
            title: "AWS Cloud Quest: Cloud Essentials",
            link: "https://www.credly.com/badges/606d2fd5-6070-472b-b85a-17a4cabab7c2/linked_in_profile",
            badge: "https://images.credly.com/size/680x680/images/7cf036b0-c609-4378-a7be-9969e1dea7ab/blob",
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
        <section className="section-padding">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-semibold text-[#202124] mb-8 sm:mb-10 lg:mb-12 tracking-tight"
                >
                    Certifications
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 3xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 group h-full hover:border-blue-100 hover:shadow-md"
                        >
                            {/* Badge Image Area */}
                            <div className={`w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 3xl:w-32 3xl:h-32 mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center ${cert.color} group-hover:scale-105 transition-transform duration-300 p-1 sm:p-2 rounded-lg sm:rounded-xl`}>
                                {cert.badge ? (
                                    <img src={cert.badge} alt={cert.title} className="w-full h-full object-contain drop-shadow-sm" />
                                ) : (
                                    <img src={cert.icon} alt={cert.title} className="w-full h-full object-contain" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="text-center flex-grow flex flex-col justify-between w-full">
                                <h3 className="text-[11px] xs:text-xs sm:text-sm lg:text-base 3xl:text-lg font-medium text-[#202124] mb-1 leading-snug group-hover:text-[#1a73e8] transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="mt-2 sm:mt-3 flex items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-xs font-medium text-[#1a73e8] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                                    View <ExternalLink size={10} className="sm:w-3 sm:h-3" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
