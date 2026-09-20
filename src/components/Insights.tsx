import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, X, Clock, Calendar } from 'lucide-react';
import instagramCardImg from '../assets/Gemini_Generated_Image_8z2kxq8z2kxq8z2k.png';
import instagramModalImg from '../assets/Gemini_Generated_Image_8z2kxq8z2kxq8z2k (1).png';

export const Insights = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const articles = [
        {
            id: 1,
            title: "Case Study: Instagram System Design",
            category: "System Design",
            icon: <Layers size={18} />,
            cardImage: instagramCardImg,
            modalImage: instagramModalImg,
            excerpt: "How does Instagram handle billions of photos? A simple look at their architecture: sharding databases to store data, using caches to load photos fast, and load balancers to keep the app running smoothly.",
            date: "Nov 28, 2025",
            readTime: "5 min read",
            color: "bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400",
            content: (
                <div className="space-y-6 text-foreground/90">
                    <p className="text-base sm:text-lg leading-relaxed">
                        Instagram is a read-heavy system. For every photo uploaded, it's viewed thousands of times. This requires an architecture optimized for <strong>fast retrieval</strong> and <strong>high availability</strong>.
                    </p>

                    <div className="bg-muted p-4 sm:p-6 rounded-xl border border-border">
                        <h4 className="text-base sm:text-lg font-medium text-foreground mb-3">The Core Challenge</h4>
                        <p className="text-sm sm:text-base">
                            Storing billions of photos and serving them instantly to millions of users globally. A single database cannot handle this load.
                        </p>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-foreground mt-8">1. Sharding (Splitting Data)</h3>
                    <p className="text-sm sm:text-base">
                        Imagine a giant phone book. It's too heavy to carry. So, you split it into volumes (A-D, E-K, etc.). That's <strong>Sharding</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                        <li>Instagram splits user data across many PostgreSQL databases.</li>
                        <li>They use a <strong>User ID</strong> to decide which "shard" (database piece) to store a photo in.</li>
                        <li>This allows them to add more servers easily as they grow.</li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-medium text-foreground mt-8">2. Caching (Speed)</h3>
                    <p className="text-sm sm:text-base">
                        Reading from a hard drive (database) is slow. Reading from memory (RAM) is fast.
                    </p>
                    <p className="text-sm sm:text-base">
                        Instagram uses <strong>Memcached</strong> to store popular photos in RAM. When you open the app, it checks the cache first. If the photo is there, it loads instantly. If not, it goes to the database.
                    </p>

                    <h3 className="text-lg sm:text-xl font-medium text-foreground mt-8">3. Load Balancing (Traffic Control)</h3>
                    <p className="text-sm sm:text-base">
                        Think of a Load Balancer as a traffic cop. It stands in front of the servers and directs user requests to the server that is least busy. This prevents any single server from crashing under too much traffic.
                    </p>
                </div>
            )
        }
    ];

    return (
        <section className="section-padding">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold tracking-tighter text-foreground mb-8 sm:mb-10 lg:mb-12"
                >
                    Insights
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${article.id}`}
                            onClick={() => setSelectedArticle(article)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group block bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg dark:hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.35)] transition-all duration-300 h-full flex flex-col cursor-pointer"
                        >
                            {/* Image Area */}
                            <motion.div layoutId={`image-${article.id}`} className="h-40 sm:h-48 lg:h-56 w-full bg-card p-4 sm:p-6 flex items-center justify-center border-b border-border">
                                <img src={article.cardImage} alt={article.title} className="h-full w-full object-contain" />
                            </motion.div>

                            <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                    <div className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1.5 sm:gap-2 ${article.color}`}>
                                        {article.icon}
                                        {article.category}
                                    </div>
                                    <span className="text-[10px] sm:text-xs text-muted-foreground">{article.readTime}</span>
                                </div>

                                {/* Content */}
                                <motion.h3 layoutId={`title-${article.id}`} className="text-base sm:text-lg lg:text-xl 3xl:text-2xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-snug">
                                    {article.title}
                                </motion.h3>
                                <p className="text-muted-foreground text-xs sm:text-sm 3xl:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                                    {article.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border mt-auto">
                                    <span className="text-[10px] sm:text-xs text-muted-foreground/70 font-medium">{article.date}</span>
                                    <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">
                                        Read <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedArticle && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedArticle(null)}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                            />
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none">
                                <motion.div
                                    layoutId={`card-${selectedArticle.id}`}
                                    className="bg-card w-full max-w-3xl max-h-[90vh] rounded-2xl sm:rounded-3xl shadow-2xl dark:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.3)] border border-border overflow-hidden flex flex-col pointer-events-auto"
                                >
                                    {/* Modal Header Image */}
                                    <motion.div layoutId={`image-${selectedArticle.id}`} className="h-48 sm:h-64 lg:h-80 w-full bg-card p-4 sm:p-6 lg:p-8 flex items-center justify-center border-b border-border shrink-0 relative">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedArticle(null); }}
                                            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-card rounded-full shadow-sm hover:bg-muted transition-colors z-10 border border-border"
                                        >
                                            <X size={18} className="sm:w-5 sm:h-5 text-muted-foreground" />
                                        </button>
                                        <img src={selectedArticle.modalImage} alt={selectedArticle.title} className="h-full w-full object-contain" />
                                    </motion.div>

                                    {/* Modal Content */}
                                    <div className="overflow-y-auto p-5 sm:p-6 md:p-8 lg:p-10">
                                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
                                            <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1.5 sm:gap-2 ${selectedArticle.color}`}>
                                                {selectedArticle.icon}
                                                {selectedArticle.category}
                                            </span>
                                            <span className="flex items-center gap-1"><Calendar size={13} /> {selectedArticle.date}</span>
                                            <span className="flex items-center gap-1"><Clock size={13} /> {selectedArticle.readTime}</span>
                                        </div>

                                        <motion.h2 layoutId={`title-${selectedArticle.id}`} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 sm:mb-8 leading-tight">
                                            {selectedArticle.title}
                                        </motion.h2>

                                        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-muted-foreground">
                                            {selectedArticle.content}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
