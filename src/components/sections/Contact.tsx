"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const LinkedinIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { resumeData } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">
            Have an interesting problem to solve?
          </h2>
          <p className="text-xl text-muted mb-12">
            I am currently open to new opportunities in Cyber Security and Technical Operations.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background rounded-full font-medium hover:bg-accent/90 transition-colors w-full sm:w-auto"
            >
              <Mail size={18} />
              Say Hello
            </a>
            
            <a
              href={`https://${resumeData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-colors text-foreground w-full sm:w-auto"
            >
              <LinkedinIcon size={18} />
              LinkedIn
              <ArrowUpRight size={16} className="text-muted group-hover:text-foreground transition-colors ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
