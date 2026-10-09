"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Experience</h2>
        </motion.div>

        <div className="max-w-4xl relative">
          <div className="absolute left-0 md:left-[8.5rem] top-2 bottom-0 w-px bg-white/10" />

          <div className="flex flex-col gap-12">
            {resumeData.experience.map((exp, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-0 flex flex-col md:flex-row gap-4 md:gap-12"
                >
                  <div className="hidden md:block w-32 shrink-0 pt-1 text-sm text-muted">
                    {exp.dates}
                  </div>
                  
                  <div className="absolute left-[-5px] md:left-[8.15rem] top-2 w-3 h-3 rounded-full bg-background border-2 border-accent" />

                  <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors cursor-pointer"
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-foreground">{exp.role}</h3>
                        <div className="text-accent font-medium mt-1">{exp.company}</div>
                        <div className="md:hidden text-sm text-muted mt-2">{exp.dates}</div>
                      </div>
                      <motion.div 
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="text-muted hidden sm:block shrink-0"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>

                    <p className="text-muted leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-white/10">
                            <ul className="list-none space-y-3 mb-6">
                              {exp.accomplishments.map((acc, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                                  <span className="text-accent mt-1 shrink-0">•</span>
                                  <span>{acc}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-muted-foreground border border-white/5"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
