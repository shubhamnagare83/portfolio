"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";

const ShubhamCompanion = () => {
    const [message, setMessage] = useState("");
    const [isIdle, setIsIdle] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const idleTimer = useRef<NodeJS.Timeout | null>(null);

    const resetIdleTimer = () => {
        if (idleTimer.current) clearTimeout(idleTimer.current);
        setIsIdle(false);
        idleTimer.current = setTimeout(() => setIsIdle(true), 20000);
    };

    useEffect(() => {
        // Initial reveal and greeting
        setTimeout(() => {
            setIsVisible(true);
            setMessage("Hey 👋 I'm Shubham. Welcome to my AI world.");
            setTimeout(() => setMessage(""), 5000);
        }, 1500);

        // Idle detection
        window.addEventListener("mousemove", resetIdleTimer);
        window.addEventListener("scroll", resetIdleTimer);
        resetIdleTimer();

        return () => {
            window.removeEventListener("mousemove", resetIdleTimer);
            window.removeEventListener("scroll", resetIdleTimer);
        };
    }, []);

    useEffect(() => {
        if (isIdle) {
            setMessage("Need help exploring?");
            setTimeout(() => setMessage(""), 4000);
        }
    }, [isIdle]);

    // Project hover detection (simplified for global use)
    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("#projects")) {
                // Only trigger once in a while
                if (!message) {
                    setMessage("This one is one of my favorite builds!");
                    setTimeout(() => setMessage(""), 4000);
                }
            }
        };
        window.addEventListener("mouseover", handleMouseOver);
        return () => window.removeEventListener("mouseover", handleMouseOver);
    }, [message]);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="mb-4 mr-2 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl rounded-tr-none text-xs font-bold text-white shadow-2xl max-w-[150px] text-center pointer-events-none"
                    >
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                drag
                dragConstraints={{ left: -300, right: 0, top: -500, bottom: 0 }}
                dragElastic={0.1}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
                whileHover={{ scale: 1.1 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                className="pointer-events-auto cursor-grab active:cursor-grabbing relative"
            >
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                >
                    {/* Subtle Breathing Animation wrapper */}
                    <motion.g
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {/* Body / Hoodie */}
                        <path
                            d="M30 60C30 45 40 40 50 40C60 40 70 45 70 60V85H30V60Z"
                            fill="#1e293b"
                            stroke="#3b82f6"
                            strokeWidth="2"
                        />
                        {/* Neon Lines on Hoodie */}
                        <path d="M40 70L60 70" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
                        <path d="M45 75L55 75" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />

                        {/* Head */}
                        <circle cx="50" cy="35" r="18" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />

                        {/* Hair/Cap */}
                        <path d="M35 30C35 22 42 18 50 18C58 18 65 22 65 30H35Z" fill="#0f172a" />

                        {/* Eyes */}
                        <g>
                            <motion.circle
                                cx="43" cy="36" r="2" fill="#3b82f6"
                                animate={{ scaleY: [1, 0.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                            />
                            <motion.circle
                                cx="57" cy="36" r="2" fill="#3b82f6"
                                animate={{ scaleY: [1, 0.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                            />
                        </g>

                        {/* Glowing Aura */}
                        <motion.circle
                            cx="50"
                            cy="45"
                            r="40"
                            stroke="#3b82f6"
                            strokeWidth="0.5"
                            strokeDasharray="4 4"
                            opacity="0.2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.g>
                </svg>

                {/* Small laptop icon in SVG or separate? Let's add it to the body */}
                <div className="absolute top-[65%] left-[40%] text-[8px] text-primary/80 animate-pulse font-mono tracking-tighter pointer-events-none">
                    {`<AI/>`}
                </div>
            </motion.div>
        </div>
    );
};

export default ShubhamCompanion;
