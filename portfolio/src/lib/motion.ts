import type { Variants } from "framer-motion";

/* ── EASE CURVES ── */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

/* ── FADE UP ── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

/* ── STAGGER CONTAINER ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/* ── STAGGER ITEM ── */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/* ── HERO SEQUENCE ── */
export const heroLabel: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delay: 0.2 },
  },
};

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT, delay: 0.35 },
  },
};

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT, delay: 0.5 },
  },
};

export const heroActions: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT, delay: 0.65 },
  },
};

export const heroScroll: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT, delay: 1.0 },
  },
};

/* ── SLIDE UP (panel / drawer) ── */
export const slideUp: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
  exit: {
    y: "100%",
    transition: { duration: 0.35, ease: EASE_IN_OUT },
  },
};

/* ── OVERLAY BACKDROP ── */
export const backdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

/* ── CARD HOVER ── */
export const cardHover = {
  rest: { y: 0, boxShadow: "0 0px 0px rgba(0,0,0,0)" },
  hover: {
    y: -4,
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/* ── SCALE IN ── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};
