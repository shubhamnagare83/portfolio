"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const fullText = "Shubham N. Nagare";
    const titles = ["AIML Engineer", "Full-stack Developer", "UI/UX Specialist", "Problem Solver"];

    useEffect(() => {
        // Typewriter effect for name
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i <= fullText.length) {
                setDisplayText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);

        // Carousel for titles
        const timer = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => {
            clearInterval(typeInterval);
            clearInterval(timer);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />

            <motion.div
                className="max-w-5xl w-full text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <motion.p
                        className="text-xl md:text-2xl font-semibold mb-2 text-foreground/60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Hi, I'm
                    </motion.p>
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none"
                    >
                        <motion.span
                            className="inline-block"
                            animate={{
                                color: ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#3b82f6"],
                                textShadow: [
                                    "0 0 20px rgba(59, 130, 246, 0.5)",
                                    "0 0 20px rgba(245, 158, 11, 0.5)",
                                    "0 0 20px rgba(16, 185, 129, 0.5)",
                                    "0 0 20px rgba(139, 92, 246, 0.5)",
                                    "0 0 20px rgba(59, 130, 246, 0.5)"
                                ]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            {displayText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-1.5 h-10 md:h-16 bg-current ml-2 align-middle"
                            />
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        className="h-12 md:h-16 mb-10 overflow-hidden"
                        variants={itemVariants}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={titles[titleIndex]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl md:text-4xl text-foreground/80 font-medium italic"
                            >
                                {titles[titleIndex]}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 font-medium"
                        variants={itemVariants}
                    >
                        Transforming Ideas into Intelligent AI-Driven Solutions.
                        I specialize in building practical, real-world AI/ML systems and modern web applications.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="https://github.com/shubhamnagare83"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
                    >
                        <Github size={20} />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shubham-n-nagare-71006331b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-foreground/20 px-8 py-3 rounded-full font-bold hover:bg-white/5 transition-colors"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                    <a
                        href="#projects"
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
                    >
                        View Projects
                        <ArrowRight size={20} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                    <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-foreground/30 rounded-full" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
