/* ── PROJECT ── */
export interface ProjectTag {
  label: string;
  variant: "accent" | "default";
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  label: string;
  title: string;
  tags: string[];
  challenge: string;
  research: string;
  solution: string;
  metrics: ProjectMetric[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: ProjectTag[];
  caseStudy: CaseStudy;
  thumbnailVariant: "dashboard" | "design-system" | "mobile-app";
}

/* ── PROCESS ── */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: "research" | "wireframe" | "ui" | "prototype" | "code";
}

/* ── SKILL ── */
export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

/* ── TIMELINE ── */
export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  isActive?: boolean;
}

/* ── TESTIMONIAL ── */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarStyle: "accent" | "neutral" | "dim";
}

/* ── STAT ── */
export interface Stat {
  value: string;
  label: string;
}

/* ── CONTACT LINK ── */
export interface ContactLink {
  label: string;
  href: string;
}
