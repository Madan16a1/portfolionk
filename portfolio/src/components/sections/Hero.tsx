"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { GraduationCap, Code2 } from "lucide-react";

// Skill Badge Component
function SkillBadge({ category, skills }: { category: string; skills: string[] }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
      <span className="text-sm font-semibold text-[var(--text-primary)]">
        {category}
      </span>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-2.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      aria-label="Hero section"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 60% 50%, rgba(79,142,247,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full pb-20">
        <div className="relative">
          {/* Profile Image - Absolute Positioned (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="hidden md:block absolute -right-12 top-12 z-0 pointer-events-none"
          >
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[240px] h-[240px] 2xl:w-[280px] 2xl:h-[280px] flex-shrink-0 pointer-events-auto hover:scale-105 transition-transform duration-500"
            >
              <ProfileImage />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col justify-center max-w-[800px]">
            {/* Label */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-[var(--accent)] uppercase mb-6 w-fit origin-left"
            >
              <span className="block w-6 h-px bg-[var(--accent)]" aria-hidden="true" />
              React UI/UX Designer
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-[clamp(42px,6vw,68px)] leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)] mb-4"
            >
              React Developer &amp; Designer
              <br />
              turning ideas into
              <br />
              pixel-perfect web apps
            </motion.h1>

            {/* Credentials - IMPROVED WITH LUCIDE ICONS & AUTHENTIC CLAIMS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col gap-3 text-sm text-[var(--text-secondary)] mb-6"
            >
              <div className="flex items-center gap-2.5">
                <GraduationCap size={18} className="text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                <span>Itahari International College, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Code2 size={18} className="text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                <span>Bsc IT student • 5+ Production Projects</span>
              </div>
            </motion.div>

            {/* Description - AUTHENTIC & PERSONAL VERSION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-[16px] md:text-[17px] font-light leading-[1.8] text-[var(--text-secondary)] mb-7"
            >
              I design and build fast, responsive React applications—from Figma prototypes 
              to production code. Currently shipping freelance projects while studying at 
              Itahari International College. I love clean code, thoughtful interfaces, and 
              understanding the &quot;why&quot; behind design decisions.
            </motion.p>

            {/* Skill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mb-8 space-y-3 border-l border-[var(--border)] pl-4"
            >
              <SkillBadge
                category="Frontend"
                skills={["React", "Next.js", "TypeScript", "JavaScript"]}
              />
              <SkillBadge
                category="Design"
                skills={["Figma", "UI/UX", "Responsive Design"]}
              />
              <SkillBadge
                category="Styling"
                skills={["Tailwind CSS", "CSS3", "Git"]}
              />
            </motion.div>

            {/* CTA Buttons - IMPROVED CONSISTENCY & RESPONSIVE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 flex-wrap"
            >
              <Button
                variant="primary"
                onClick={() => scrollTo("work")}
                ariaLabel="View my work and projects"
              >
                Explore My Work
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollTo("contact")}
                ariaLabel="Send me a message"
              >
                Let&apos;s Connect
              </Button>
              <Button
                variant="ghost"
                onClick={handleResumeDownload}
                ariaLabel="Download my resume as PDF"
              >
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 text-[12px] font-mono text-[var(--text-tertiary)] tracking-[0.1em]"
          aria-hidden="true"
        >
          <span className="block w-px h-8 bg-[var(--border)]" />
          SCROLL TO EXPLORE
        </motion.div>
      </div>
    </section>
  );
}
