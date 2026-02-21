"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Layout, Database, Terminal, Settings } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "AI & ML",
            icon: <Brain className="text-blue-500" />,
            skills: ["Machine Learning", "AI Systems", "Neural Networks", "Data Science"],
        },
        {
            title: "Programming",
            icon: <Code2 className="text-amber-500" />,
            skills: ["Java (Full-stack)", "Python (Django, Flask)", "C++", "R (IBM Watson)"],
        },
        {
            title: "Frontend",
            icon: <Layout className="text-pink-500" />,
            skills: ["React.js", "React Native", "Figma (Master)", "UI/UX Design"],
        },
        {
            title: "Backend & DB",
            icon: <Database className="text-green-500" />,
            skills: ["MongoDB", "REST APIs", "Node.js", "SQL"],
        },
        {
            title: "DevOps & Tools",
            icon: <Settings className="text-purple-500" />,
            skills: ["DevOps Fundamentals", "Agile", "Power BI", "n8n Automation"],
        },
        {
            title: "Soft Skills",
            icon: <Terminal className="text-cyan-500" />,
            skills: ["Leadership", "Public Speaking", "Session Conduction"],
        },
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Technical <span className="gradient-text">Excellence</span></h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        A comprehensive overview of my technical toolkit and domain expertise.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 hover:border-primary/30 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/30 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
