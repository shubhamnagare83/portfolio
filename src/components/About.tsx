"use client";

"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const About = () => {
    return (
        <section id="about" className="section-padding bg-black/5 dark:bg-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <AnimateOnScroll direction="left">
                        <div className="glass-card p-1 overflow-hidden">
                            <img
                                src="/profile.jpeg"
                                alt="Shubham N. Nagare"
                                className="rounded-2xl w-full aspect-square object-cover"
                            />
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll direction="right" delay={0.2}>
                        <div>
                            <h2 className="text-4xl font-bold mb-6">About <span className="gradient-text">Me</span></h2>
                            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
                                <p>
                                    I am <span className="font-semibold text-primary">Shubham N. Nagare</span>, a second-year engineering student at Sanjivani University, specializing in CSE (Artificial Intelligence & Machine Learning).
                                </p>
                                <p>
                                    With a strong interest in software development and data-driven technologies, I've cultivated hands-on experience in Java, Python, and modern web development. My focus is on building practical, real-world solutions that bridge the gap between complex AI models and user-centric applications.
                                </p>
                                <p>
                                    As a UI/UX enthusiast and a member of the Innovation Cell at Sanjivani University, I've also led sessions for 300+ students, sharing my passion for design-thinking and web development.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <AnimateOnScroll delay={0.4} distance={20}>
                                    <div className="glass-card p-4">
                                        <p className="text-sm text-foreground/40">Location</p>
                                        <p className="font-semibold">Nashik, India</p>
                                    </div>
                                </AnimateOnScroll>
                                <AnimateOnScroll delay={0.6} distance={20}>
                                    <div className="glass-card p-4">
                                        <p className="text-sm text-foreground/40">Education</p>
                                        <p className="font-semibold">CSE (AI/ML)</p>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default About;
