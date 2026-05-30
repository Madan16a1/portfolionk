"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { backdrop, slideUp } from "@/lib/motion";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";

interface CaseStudyPanelProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyPanel({ project, onClose }: CaseStudyPanelProps) {
  // Lock scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  // Keyboard escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[200] flex items-end justify-center bg-black/80 backdrop-blur-[8px]"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Case study: ${project.name}`}
        >
          <motion.div
            key="panel"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[800px] max-h-[88vh] overflow-y-auto rounded-t-[20px] bg-[var(--bg-3)] border border-[var(--border)] p-12 relative"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] transition-colors duration-200 text-lg leading-none"
              aria-label="Close case study"
            >
              ×
            </button>

            {/* Label */}
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--accent)] mb-3">
              {project.caseStudy.label}
            </p>

            {/* Title */}
            <h2 className="font-serif text-[clamp(26px,4vw,36px)] tracking-[-0.025em] text-[var(--text-primary)] mb-6">
              {project.caseStudy.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.caseStudy.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>

            {/* Sections */}
            {[
              { title: "Challenge", body: project.caseStudy.challenge },
              { title: "Research", body: project.caseStudy.research },
              { title: "Solution", body: project.caseStudy.solution },
            ].map((section) => (
              <div key={section.title} className="mt-9">
                <h3 className="font-mono text-[11px] tracking-[0.1em] text-[var(--accent)] uppercase mb-3 pb-2.5 border-b border-[var(--border)]">
                  {section.title}
                </h3>
                <p className="text-[15px] font-light text-[var(--text-secondary)] leading-[1.75]">
                  {section.body}
                </p>
              </div>
            ))}

            {/* Metrics */}
            <div className="mt-9">
              <h3 className="font-mono text-[11px] tracking-[0.1em] text-[var(--accent)] uppercase mb-3 pb-2.5 border-b border-[var(--border)]">
                Outcomes
              </h3>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {project.caseStudy.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-5"
                  >
                    <div className="font-serif text-[28px] tracking-[-0.025em] text-[var(--text-primary)]">
                      {m.value}
                    </div>
                    <div className="text-xs text-[var(--text-tertiary)] mt-1 font-light">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
