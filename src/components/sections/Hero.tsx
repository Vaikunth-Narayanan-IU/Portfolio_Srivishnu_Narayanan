"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent tracking-wide uppercase">
              {resumeData.availability}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6"
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-background shadow-xl shrink-0 ring-2 ring-white/10">
              <Image 
                src="/profile.jpg" 
                alt={resumeData.name} 
                fill 
                className="object-cover"
                sizes="(max-width: 640px) 96px, 128px"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-tight">
              I&apos;m {resumeData.name.split(" ")[0]}.<br />
              <span className="text-muted text-4xl md:text-5xl block mt-2">{resumeData.title}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted max-w-2xl mb-10 leading-relaxed"
          >
            {resumeData.about.heading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#experience"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-white transition-colors"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-colors text-foreground"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
