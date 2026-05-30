"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagneticButton } from "@/hooks/useMagneticButton";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className,
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagneticButton(0.25);

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-[14px] font-medium tracking-[0.01em]",
        "px-8 py-3.5 transition-colors duration-200 disabled:opacity-50",
        variant === "primary"
          ? "bg-[var(--accent)] text-white hover:bg-[#6aa0f9] shadow-[0_0_0_0_var(--accent-glow)] hover:shadow-[0_8px_24px_var(--accent-glow)]"
          : "bg-transparent text-[var(--text-secondary)] border border-[var(--border-2)] hover:text-[var(--text-primary)] hover:border-[rgba(255,255,255,0.22)]",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
