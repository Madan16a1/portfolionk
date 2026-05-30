"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-16",
          "border-b border-[var(--border)]",
          "backdrop-blur-[20px] saturate-[1.4]",
          "transition-[background] duration-300",
          scrolled ? "bg-[rgba(10,10,11,0.88)]" : "bg-[rgba(10,10,11,0.6)]"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-lg tracking-[-0.02em] text-[var(--text-primary)]"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          aria-label="Nawaraj Kafle — Home"
        >
          Nawaraj <span className="text-[var(--accent)]">.</span> K
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[13px] font-normal tracking-[0.04em] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          className={cn(
            "hidden md:block text-[13px] px-5 py-2.5 rounded-full",
            "border border-[var(--border-2)] text-[var(--text-primary)]",
            "hover:bg-[var(--surface)] hover:border-[rgba(255,255,255,0.22)]",
            "transition-all duration-200 tracking-[0.03em]"
          )}
        >
          Hire me
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={cn("w-5 h-px bg-[var(--text-primary)] transition-all duration-200", menuOpen && "rotate-45 translate-y-[7px]")} />
          <span className={cn("w-5 h-px bg-[var(--text-primary)] transition-all duration-200", menuOpen && "opacity-0")} />
          <span className={cn("w-5 h-px bg-[var(--text-primary)] transition-all duration-200", menuOpen && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-serif text-4xl tracking-[-0.02em] text-[var(--text-primary)]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-4 text-sm px-8 py-3.5 rounded-full bg-[var(--accent)] text-white font-medium"
          >
            Let&apos;s talk
          </button>
        </div>
      )}
    </>
  );
}
