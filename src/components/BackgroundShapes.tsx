"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundShapes = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"
            />

            {/* Neural Network SVG Animation */}
            <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Connection Lines */}
                {[...Array(15)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1={`${Math.random() * 100}%`}
                        y1={`${Math.random() * 100}%`}
                        x2={`${Math.random() * 100}%`}
                        y2={`${Math.random() * 100}%`}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-primary/30"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 1, 0],
                            x1: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            y1: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                {/* Pulsing Nodes */}
                {[...Array(20)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx={`${Math.random() * 100}%`}
                        cy={`${Math.random() * 100}%`}
                        r="2"
                        fill="currentColor"
                        className="text-primary/50"
                        filter="url(#glow)"
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </svg>

            {/* Subtle Grid & Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 pointer-events-none" />
            <div
                className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px] dark:bg-grid-white/[0.03]"
                style={{ maskImage: 'radial-gradient(ellipse at center, black, transparent)' }}
            />
        </div>
    );
};

export default BackgroundShapes;
