"use client";

import { resumeData } from "@/data/resume";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="py-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          © {currentYear} {resumeData.name}. All rights reserved.
        </div>
        <div className="text-sm text-muted">
          Designed & built with intention.
        </div>
      </div>
    </footer>
  );
}
