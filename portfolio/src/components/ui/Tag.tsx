import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  variant?: "default" | "accent";
  className?: string;
}

export default function Tag({ label, variant = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[10px] tracking-[0.1em] uppercase px-2.5 py-1.5",
        "border rounded-full",
        variant === "accent"
          ? "text-[var(--accent)] border-[rgba(79,142,247,0.3)] bg-[var(--accent-dim)]"
          : "text-[var(--text-tertiary)] border-[var(--border)]",
        className
      )}
    >
      {label}
    </span>
  );
}
