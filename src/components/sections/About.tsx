"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Shield, BookOpen, Layers, LineChart } from "lucide-react";

const iconMap = {
  "Cyber Security & Systems": <Shield className="w-6 h-6 text-accent mb-4" />,
  "Technical Education": <BookOpen className="w-6 h-6 text-accent mb-4" />,
  "Operations & Coordination": <Layers className="w-6 h-6 text-accent mb-4" />,
  "Data & Reporting": <LineChart className="w-6 h-6 text-accent mb-4" />,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">About Me</h2>
            <p className="text-lg text-muted leading-relaxed">
              {resumeData.about.summary}
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resumeData.about.capabilities.map((cap, idx) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                {iconMap[cap.title as keyof typeof iconMap]}
                <h3 className="text-xl font-medium mb-2">{cap.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
