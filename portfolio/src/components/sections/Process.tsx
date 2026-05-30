import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  research: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--accent)]" aria-hidden="true">
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2" />
    </svg>
  ),
  wireframe: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--accent)]" aria-hidden="true">
      <rect x="2" y="2" width="5" height="5" rx="1" />
      <rect x="9" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="9" width="5" height="5" rx="1" />
      <rect x="9" y="9" width="5" height="5" rx="1" />
    </svg>
  ),
  ui: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--accent)]" aria-hidden="true">
      <circle cx="8" cy="6" r="3" />
      <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" />
    </svg>
  ),
  prototype: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--accent)]" aria-hidden="true">
      <path d="M3 8h10M8 3l5 5-5 5" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--accent)]" aria-hidden="true">
      <polyline points="4 6 2 8 4 10" />
      <polyline points="12 6 14 8 12 10" />
      <line x1="9" y1="3" x2="7" y2="13" />
    </svg>
  ),
};

export default function Process() {
  return (
    <section id="process" className="py-[120px] bg-[var(--bg-2)]" aria-label="Design process">
      <div className="max-w-[1100px] mx-auto px-12">
        <Reveal>
          <SectionHeader
            label="How I work"
            title={<>Design <em style={{ fontStyle: "italic" }}>process</em></>}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-16 bg-[var(--border)]"
            style={{ gap: "1px", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}
            role="list"
            aria-label="Five-step design process"
          >
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-[var(--bg-2)] p-8 transition-colors duration-300 hover:bg-[var(--surface)]"
                role="listitem"
              >
                <p className="font-mono text-[10px] text-[var(--text-tertiary)] tracking-[0.1em] mb-5">
                  {step.number}
                </p>
                <div className="w-9 h-9 rounded-[8px] bg-[var(--accent-dim)] border border-[rgba(79,142,247,0.2)] flex items-center justify-center mb-4">
                  {icons[step.icon]}
                </div>
                <h3 className="text-[14px] font-medium text-[var(--text-primary)] mb-2 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] leading-[1.6] font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
