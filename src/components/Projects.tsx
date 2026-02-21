"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Medi A",
            period: "2024–2025",
            description: "A Virtual AI medical assistant that leverages Machine Learning models to provide instant health guidance and symptom analysis.",
            stack: ["Python", "Flask", "Scikit-learn", "React", "MongoDB"],
            features: ["Symptom Analysis", "Health Tips", "Real-time AI Chat"],
            github: "https://github.com/shubhamnagare83",
            demo: "#"
        },
        {
            title: "MAP Skill ERP",
            period: "2024",
            description: "A comprehensive University ERP system designed for counting and managing Mandatory Activity Points (MAP) for students.",
            stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
            features: ["Point Tracking", "Role-based Access", "Admin Dashboard"],
            github: "https://github.com/shubhamnagare83",
            demo: "#"
        },
        {
            title: "Farmer Chat-GPT",
            period: "DYP Hackathon 2024",
            description: "An AI-based chatbot providing accurate, data-driven farming solutions and crop guidance directly to farmers in local languages.",
            stack: ["Python", "Django", "IBM Watson", "React Native", "GPT API"],
            features: ["Vernacular Support", "Crop Recommendation", "Market Trends"],
            github: "https://github.com/shubhamnagare83",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="section-padding bg-black/5 dark:bg-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        Practical applications of AI/ML and engineering concepts to solve real-world problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                rotateX: 5,
                                rotateY: -5,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="glass-card flex flex-col h-full transition-shadow hover:shadow-primary/20 hover:shadow-2xl"
                        >
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8 overflow-hidden rounded-t-2xl">
                                <Code size={64} className="text-foreground/20" />
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <span className="text-xs font-semibold px-2 py-1 bg-white/10 rounded uppercase tracking-wider">{project.period}</span>
                                </div>

                                <p className="text-foreground/70 mb-6 text-sm flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="text-[10px] font-bold px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded uppercase">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-foreground text-background rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
                                    >
                                        <Github size={16} />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 border border-foreground/20 rounded-lg text-sm font-bold hover:bg-white/5 transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
