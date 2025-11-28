import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto mb-12 bg-[#f8f9fa] rounded-2xl">
            <h2 className="text-3xl font-medium text-[#202124] mb-8">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <p className="text-lg text-[#5f6368]">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                    <div className="flex flex-col gap-4">
                        <a href="mailto:karachiwalaumer2612@gmail.com" className="flex items-center gap-3 text-[#5f6368] hover:text-[#1a73e8] transition-colors">
                            <Mail size={20} />
                            <span>karachiwalaumer2612@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-3 text-[#5f6368]">
                            <MapPin size={20} />
                            <span>Donegal, Ireland</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#5f6368]">
                            <Phone size={20} />
                            <span>+353 0896591216</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-4">
                    <a href="https://github.com/Umer-2612" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#5f6368] hover:text-[#1a73e8] transition-colors p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100">
                        <Github size={24} />
                        <span className="font-medium">Follow on GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/umer-karachiwala/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#5f6368] hover:text-[#1a73e8] transition-colors p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100">
                        <Linkedin size={24} />
                        <span className="font-medium">Connect on LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
