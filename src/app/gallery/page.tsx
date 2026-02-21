"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, Camera, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
    const items = [
        {
            id: 1,
            title: "Medi A - AI Assistant",
            category: "Project",
            image: "/image copy 3.png",
            description: "Interface design for the medical AI assistant."
        },
        {
            id: 2,
            title: "Innovation Cell Session",
            category: "Event",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            description: "Conducting UI/UX workshop for 300+ students."
        },
        {
            id: 3,
            title: "Farmer Chat-GPT Hackathon",
            category: "Event",
            image: "/image copy.png",
            description: "Pitching at DYP Hackathon 2024."
        },
        {
            id: 4,
            title: "MAP Skill ERP Dashboard",
            category: "Project",
            image: "/image.png",
            description: "Admin panel view for university ERP system."
        },
        {
            id: 5,
            title: "Tinkerer's Lab Project",
            category: "Project",
            image: "/image copy 4.png",
            description: "Prototyping session in Sanjivani Innovation Cell."
        },
        {
            id: 6,
            title: "NEC IIT Bombay ",
            category: "Achievement",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
            description: "AIR 4 Recognition at IIT Bombay."
        },
        {
            id: 7,
            title: "Ohayo japan",
            category: "event",
            image: "/image copy 2.png",
            description: "japanese and indian culture"
        },

    ];

    return (
        <div className="section-padding pt-32 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                        Visual <span className="gradient-text">Gallery</span>
                    </h1>
                    <p className="text-lg text-foreground/60 max-w-2xl font-medium">
                        A showcase of my projects, event participations, and academic milestones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card overflow-hidden group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                                        {item.category === "Event" && <Camera size={14} />}
                                        {item.category === "Project" && <ImageIcon size={14} />}
                                        {item.category === "Achievement" && <Star size={14} />}
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-white/70 line-clamp-2">{item.description}</p>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 glass-card text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
