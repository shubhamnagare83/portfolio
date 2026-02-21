"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
        </div>
    );
}
