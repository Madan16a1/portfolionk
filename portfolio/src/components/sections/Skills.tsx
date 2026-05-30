"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillGroups } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section id="skills" className="py-[120px] bg-[var(--bg)]" aria-label="Skills and tools">
      <div className="max-w-[1100px] mx-auto px-12">
        <Reveal>
          <SectionHeader
            label="Toolkit"
            title={<>Skills &amp; <em style={{ fontStyle: "italic" }}>tools</em></>}
          />
        </Reveal>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-[72px]">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.15}>
              <h3 className="font-mono text-[11px] tracking-[0.12em] text-[var(--text-tertiary)] uppercase mb-5 pb-3 border-b border-[var(--border)]">
                {group.title}
              </h3>
              <ul className="flex flex-col">
                {group.skills.map((skill, si) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between py-3.5 border-b border-[var(--border)] last:border-none"
                  >
                    <span className="text-[14px] text-[var(--text-secondary)]">{skill.name}</span>
                    <div
                      className="w-[120px] h-[2px] bg-[var(--border-2)] rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    >
                      <motion.div
                        className="h-full bg-[var(--accent)] rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                        transition={{
                          duration: 1.2,
                          ease: EASE_OUT,
                          delay: gi * 0.1 + si * 0.06,
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
