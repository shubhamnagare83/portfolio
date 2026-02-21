"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);
    const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

    const mainConfig = { damping: 25, stiffness: 250 };

    const cursorXSpring = useSpring(cursorX, mainConfig);
    const cursorYSpring = useSpring(cursorY, mainConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            const isSelectable = target.closest("a, button, [role='button'], input, textarea");
            setIsHovering(!!isSelectable);
        };

        const handleClick = (e: MouseEvent) => {
            const id = Date.now();
            setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
            setTimeout(() => {
                setClicks((prev) => prev.filter((c) => c.id !== id));
            }, 600);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleClick);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleClick);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
            {/* Simple Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />

            {/* Subtle border for better visibility on dark backgrounds */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 0.8,
                    opacity: isHovering ? 1 : 0,
                }}
            />

            {/* Interaction Ripples */}
            <AnimatePresence>
                {clicks.map((click) => (
                    <motion.div
                        key={click.id}
                        initial={{ opacity: 0.5, scale: 0, x: click.x, y: click.y }}
                        animate={{ opacity: 0, scale: 3 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-0 left-0 w-6 h-6 -ml-3 -mt-3 border border-primary rounded-full"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CustomCursor;
