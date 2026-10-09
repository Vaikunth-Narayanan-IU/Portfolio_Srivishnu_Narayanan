"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Skills() {
  const skillCategories = [
    { title: "Cybersecurity", skills: resumeData.skills.cybersecurity },
    { title: "Engineering", skills: resumeData.skills.engineering },
    { title: "Technical", skills: resumeData.skills.technical },
    { title: "Operations & Leadership", skills: resumeData.skills.operations },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Capabilities & Tools</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-medium mb-6 text-foreground/90 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm font-medium hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
