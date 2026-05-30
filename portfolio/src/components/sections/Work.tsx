"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import CaseStudyPanel from "@/components/ui/CaseStudyPanel";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { projects } from "@/lib/data";
import { cardHover } from "@/lib/motion";
import type { Project } from "@/types";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path d="M1 7h12M7 1l6 6-6 6" />
    </svg>
  );
}

export default function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-[120px] bg-[var(--bg)]" aria-label="Featured work">
      <div className="max-w-[1100px] mx-auto px-12">
        <Reveal>
          <SectionHeader
            label="Featured Work"
            title={<>Selected <em className="font-serif" style={{ fontStyle: "italic" }}>projects</em></>}
          />
        </Reveal>

        <div className="mt-[72px]">
          {projects.map((project, i) => {
            const isReverse = i % 2 !== 0;

            return (
              <div
                key={project.id}
                className="border-t border-[var(--border)] last:border-b last:border-[var(--border)]"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center py-16 cursor-pointer group transition-colors duration-300 hover:bg-white/[0.015] ${
                    isReverse ? "" : ""
                  }`}
                  onClick={() => setActiveProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveProject(project); }}
                  aria-label={`View case study for ${project.name}`}
                >
                  {/* Meta */}
                  <Reveal delay={i * 0.05} className={isReverse ? "md:order-2 md:pl-12" : "md:pr-12"}>
                    <div className="flex gap-2 flex-wrap mb-5">
                      {project.tags.map((tag) => (
                        <Tag key={tag.label} label={tag.label} variant={tag.variant} />
                      ))}
                    </div>
                    <h3 className="font-serif text-[clamp(26px,3.5vw,40px)] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] mb-4">
                      {project.name}
                    </h3>
                    <p className="text-[15px] font-light text-[var(--text-secondary)] leading-[1.7] mb-7 max-w-[380px]">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--accent)] tracking-[0.02em] group-hover:gap-3 transition-all duration-200">
                      View case study
                      <ArrowIcon />
                    </span>
                  </Reveal>

                  {/* Thumbnail */}
                  <Reveal delay={i * 0.05 + 0.1} className={isReverse ? "md:order-1" : ""}>
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      variants={cardHover}
                      className="aspect-[4/3] rounded-[12px] overflow-hidden border border-[var(--border)] bg-[var(--bg-3)]"
                    >
                      <ProjectThumbnail variant={project.thumbnailVariant} />
                    </motion.div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CaseStudyPanel
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
