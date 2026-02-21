"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            company: "Dailogues Media",
            location: "Mumbai, India",
            role: "Frontend + Backend Developer Intern",
            period: "23 June 2025 – 9 November 2025",
            description: "Contributed as a Web Development Executive Intern, focusing on bridging the gap between design and functionality.",
            points: [
                "UI/UX Designer: Crafted intuitive user interfaces for real-world projects.",
                "Web Development: Implemented frontend and backend systems.",
                "Project Execution: Collaborated on end-to-end web deployment.",
                "Designed responsive layouts following modern design principles."
            ]
        }
    ];

    return (
        <section id="experience" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Professional <span className="gradient-text">Experience</span></h2>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                                    <p className="text-xl font-medium text-primary">{exp.company}</p>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-2 text-foreground/60 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-foreground/70 mb-8 italic">
                                "{exp.description}"
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {exp.points.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                                        <span className="text-foreground/80">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
