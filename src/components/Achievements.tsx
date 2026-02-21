"use client";

import { motion } from "framer-motion";
import { Trophy, Award, School, Star } from "lucide-react";

const Achievements = () => {
    const achievements = [
        {
            title: "NEC All India Rank 4",
            org: "IIT Bombay",
            icon: <Trophy className="text-amber-500" />,
            desc: "Achieved Rank 4 in the National Engineering Challenge conducted by IIT Bombay."
        },
        {
            title: "Tinkerer's Lab Member",
            org: "Sanjivani University",
            icon: <Settings className="text-blue-500" />,
            desc: "Selected member for the university's innovation hub for the academic year 2024–2025."
        },
        {
            title: "State & National Qualifier",
            org: "Essay Competition",
            icon: <Award className="text-pink-500" />,
            desc: "Represented at both state and national levels in professional writing and essay competitions."
        }
    ];

    const certifications = [
        "NPTEL Discrete Mathematics",
        "NEC 2024 IIT Bombay",
        "DevOps, Agile & Design Thinking",
        "MongoDB Certified",
        "IBM Intro to Python",
        "Internship: Dailogues Media"
    ];

    return (
        <section id="achievements" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-12">Honors & <span className="gradient-text">Achievements</span></h2>
                        <div className="space-y-6">
                            {achievements.map((item, i) => (
                                <div key={i} className="glass-card p-6 flex gap-6 hover:translate-x-2 transition-transform">
                                    <div className="p-4 bg-white/5 rounded-2xl h-fit">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-primary font-semibold text-sm mb-2">{item.org}</p>
                                        <p className="text-foreground/60 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-12">Global <span className="gradient-text">Certifications</span></h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {certifications.map((cert, i) => (
                                <div key={i} className="glass-card p-4 flex items-center gap-3">
                                    <Star className="text-amber-500 flex-shrink-0" size={16} />
                                    <span className="text-sm font-medium">{cert}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 glass-card p-8 bg-gradient-to-br from-primary/10 to-transparent">
                            <h4 className="text-xl font-bold mb-4">Languages Spoken</h4>
                            <div className="flex flex-wrap gap-4">
                                {["Japanese (Basic)", "English (Fluent)", "Marathi (Native)", "Hindi (Fluent)"].map(lang => (
                                    <span key={lang} className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Internal replacement for Settings since it wasn't imported correctly in the map
import { Settings } from "lucide-react";

export default Achievements;
