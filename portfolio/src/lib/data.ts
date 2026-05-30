import type {
  Project,
  ProcessStep,
  SkillGroup,
  TimelineItem,
  Testimonial,
  Stat,
  ContactLink,
} from "@/types";

/* ── PROJECTS ── */
export const projects: Project[] = [
  {
    id: "e-dera",
    name: "E-Dera — Room & Flat Finder",
    description:
      "A modern room and flat finder platform designed to connect users with rental properties efficiently. Features responsive UI/UX design, property listings, detailed accommodation information, and seamless user experience across all devices.",
    tags: [
      { label: "React", variant: "accent" },
      { label: "UI / UX", variant: "default" },
      { label: "Responsive Design", variant: "default" },
    ],
    thumbnailVariant: "dashboard",
    caseStudy: {
      label: "Case Study · 01",
      title: "E-Dera — Room & Flat Finder Platform",
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      challenge:
        "The rental property search experience was fragmented and complex, making it difficult for users to find suitable rooms and flats. Creating a fully responsive interface that works seamlessly across desktop, tablet, and mobile devices was critical. The platform needed to organize and present large amounts of property information in a clear, user-friendly manner while improving navigation and user flow to reduce search time.",
      research:
        "Analyzed user behavior in property search, identified pain points in navigation, and studied how users compare rental listings. Focused on understanding user needs for property seekers and landlords to balance visual appeal with usability.",
      solution:
        "Designed an intuitive property browsing interface with modern UI/UX principles. Built a fully responsive application using React, Next.js, and Tailwind CSS. Implemented smooth animations with Framer Motion to enhance user interactions. Optimized frontend performance to ensure fast page loading and smooth interactions across all devices.",
      metrics: [
        { value: "100%", label: "Responsive across devices" },
        { value: "4+", label: "Key sections designed" },
        { value: "Modern", label: "Tech stack" },
      ],
    },
  },
];

/* ── PROCESS STEPS ── */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Research",
    description:
      "User interviews, competitive analysis, heuristic evaluation, and synthesis into clear problem statements.",
    icon: "research",
  },
  {
    number: "02",
    title: "Wireframing",
    description:
      "Low-fidelity flows in Figma to validate architecture and navigation before committing to visual decisions.",
    icon: "wireframe",
  },
  {
    number: "03",
    title: "UI Design",
    description:
      "High-fidelity Figma components with a consistent design system, tokens, and documented specifications.",
    icon: "ui",
  },
  {
    number: "04",
    title: "Prototyping",
    description:
      "Interactive prototypes for usability testing, stakeholder alignment, and developer handoff.",
    icon: "prototype",
  },
  {
    number: "05",
    title: "Development",
    description:
      "TypeScript, Next.js, and Tailwind — shipping pixel-perfect, accessible, performant interfaces.",
    icon: "code",
  },
];

/* ── SKILLS ── */
export const skillGroups: SkillGroup[] = [
  {
    title: "Design & UI/UX",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Adobe XD", level: 85 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 88 },
      { name: "Responsive Design", level: 93 },
      { name: "User Research", level: 82 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 94 },
      { name: "Next.js", level: 91 },
      { name: "TypeScript", level: 89 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 87 },
      { name: "JavaScript / HTML / CSS", level: 94 },
    ],
  },
  {
    title: "Tools & Languages",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "MySQL / MongoDB", level: 80 },
      { name: "Python", level: 78 },
      { name: "Java", level: 76 },
      { name: "VS Code", level: 93 },
      { name: "Postman API", level: 85 },
    ],
  },
];

/* ── TIMELINE ── */
export const timeline: TimelineItem[] = [
  {
    period: "2024 — Present",
    role: "React Developer & UI/UX Designer",
    company: "Freelance — Web Development & Design",
    isActive: true,
  },
  {
    period: "2023 — Present",
    role: "Student",
    company: "Itahari International College — Itahari, Nepal",
  },
  {
    period: "2024",
    role: "Hackathon Participant",
    company: "Itahari International College Hackathon",
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "E-Dera Project — Room & Flat Finder Platform",
  },
];

/* ── STATS ── */
export const stats: Stat[] = [
  { value: "1+", label: "Years experience" },
  { value: "5+", label: "Projects built" },
  { value: "Modern", label: "Tech stack" },
  { value: "100%", label: "Responsive" },
];

/* ── TESTIMONIALS ── */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Nawaraj consistently demonstrates strong frontend development skills and a deep understanding of user experience design. His ability to transform ideas into modern, responsive, and intuitive web applications makes him a valuable developer and creative problem solver.",
    name: "Project Mentor",
    role: "Mentor & Advisor",
    initials: "PM",
    avatarStyle: "accent",
  },
  {
    quote:
      "As a student, Nawaraj shows exceptional dedication to learning modern technologies and applying them to real-world problems. His passion for frontend development and UI/UX design is evident in the quality of his work.",
    name: "Design Community",
    role: "Fellow Developers & Designers",
    initials: "DC",
    avatarStyle: "neutral",
  },
  {
    quote:
      "What sets Nawaraj apart is his genuine passion for creating user-friendly digital experiences. He combines technical expertise with creative thinking to build solutions that people actually love using.",
    name: "Collaboration Partner",
    role: "Project Collaborator",
    initials: "CP",
    avatarStyle: "dim",
  },
];

/* ── CONTACT LINKS ── */
export const contactLinks: ContactLink[] = [
  { label: "kaflenawaraj52@gmail.com", href: "mailto:kaflenawaraj52@gmail.com" },
  { label: "LinkedIn — /in/nawaraj-kafle", href: "https://www.linkedin.com/in/nawaraj-kafle" },
  { label: "GitHub — /Nawarajofficial", href: "https://github.com/Nawarajofficial" },
  { label: "Twitter — @nawaraj_tweets", href: "https://twitter.com/nawaraj_tweets" },
];
