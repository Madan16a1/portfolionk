import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("", className)}>
      <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-[var(--accent)] uppercase mb-4">
        <span className="block w-5 h-px bg-[var(--accent)]" aria-hidden="true" />
        {label}
      </div>
      <h2 className="font-serif text-[clamp(34px,5vw,58px)] leading-[1.06] tracking-[-0.025em] text-[var(--text-primary)]">
        {title}
      </h2>
    </div>
  );
}
