"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="section-padding bg-black/5 dark:bg-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Academic <span className="gradient-text">Journey</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 border-l-4 border-l-primary"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-primary">Sanjivani University</h3>
                                <p className="text-lg font-semibold text-foreground/80">CSE – Artificial Intelligence & Machine Learning</p>
                            </div>
                            <GraduationCap className="text-primary" size={32} />
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-foreground/60">
                                <Calendar size={18} />
                                <span>2024 – 2028</span>
                            </div>
                            <div className="flex items-center gap-2 text-foreground/60">
                                <MapPin size={18} />
                                <span>Kopargaon, Maharashtra</span>
                            </div>
                            <div className="mt-6 flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                                <span className="font-medium">Current CGPA</span>
                                <span className="text-2xl font-black text-primary">7.87 / 10.0</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <div className="w-2 h-8 bg-amber-500 rounded-full" />
                            Key Highlights
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Member of Tinkerer's Lab (2024-2025)",
                                "Specialization in AI/ML & Deep Learning",
                                "Active participant in University Hackathons",
                                "Lead UI/UX Designer in Innovation Cell"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 glass-card p-4 hover:translate-x-2 transition-transform">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
