"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-black/5 dark:bg-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        Open for collaborations, internship opportunities, or just a friendly chat about AI and tech.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <a href="mailto:shubhamnagare83@gmail.com" className="flex items-center gap-4 group">
                                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/40">Email</p>
                                        <p className="font-semibold">shubhamnagare83@gmail.com</p>
                                    </div>
                                </a>
                                <a href="tel:+918767176517" className="flex items-center gap-4 group">
                                    <div className="p-4 bg-amber-500/10 rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/40">Phone</p>
                                        <p className="font-semibold">+91 8767176517</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-4 bg-pink-500/10 rounded-2xl">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/40">Location</p>
                                        <p className="font-semibold">Manmad, Nashik, Maharashtra, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/shubhamnagare83" target="_blank" rel="noopener noreferrer" className="flex-1 glass-card p-6 flex flex-col items-center gap-2 hover:bg-white/5 transition-colors text-center">
                                <Github size={32} className="mb-2" />
                                <span className="font-bold">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/shubham-n-nagare-71006331b" target="_blank" rel="noopener noreferrer" className="flex-1 glass-card p-6 flex flex-col items-center gap-2 hover:bg-white/5 transition-colors text-center">
                                <Linkedin size={32} className="mb-2" />
                                <span className="font-bold">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Your Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Your Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Subject</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Project Discussion" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Let's build something amazing..."></textarea>
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
