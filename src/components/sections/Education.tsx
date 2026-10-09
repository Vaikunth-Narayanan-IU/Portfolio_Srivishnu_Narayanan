"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col h-full hover:border-accent/30 transition-colors"
            >
              <div className="text-sm text-accent mb-4 font-medium">{edu.dates}</div>
              <h3 className="text-xl font-medium mb-2">{edu.degree}</h3>
              <div className="text-foreground/80 mb-6">{edu.institution}</div>
              <p className="text-sm text-muted leading-relaxed mt-auto">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
