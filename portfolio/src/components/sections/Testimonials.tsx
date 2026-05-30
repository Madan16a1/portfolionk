import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

const avatarStyles = {
  accent: "bg-[rgba(79,142,247,0.12)] text-[var(--accent)]",
  neutral: "bg-[rgba(255,255,255,0.06)] text-[var(--text-secondary)]",
  dim: "bg-[rgba(79,142,247,0.08)] text-[rgba(79,142,247,0.7)]",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[120px] bg-[var(--bg)]" aria-label="Testimonials">
      <div className="max-w-[1100px] mx-auto px-12">
        <Reveal>
          <SectionHeader
            label="Social proof"
            title={<>What people <em style={{ fontStyle: "italic" }}>say</em></>}
          />
        </Reveal>

        <div
          className="grid grid-cols-1 md:grid-cols-3 mt-16 bg-[var(--border)]"
          style={{ gap: "1px", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className="bg-[var(--bg)] p-9 h-full transition-colors duration-300 hover:bg-[var(--surface)]"
                role="listitem"
              >
                <div
                  className="font-serif text-[48px] leading-none text-[var(--accent)] opacity-60 mb-4"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <blockquote>
                  <p className="text-[14px] font-light leading-[1.75] text-[var(--text-secondary)] mb-6">
                    {t.quote}
                  </p>
                  <footer className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-medium tracking-[0.02em] flex-shrink-0",
                        avatarStyles[t.avatarStyle]
                      )}
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div>
                      <cite className="text-[13px] font-medium text-[var(--text-primary)] not-italic block">
                        {t.name}
                      </cite>
                      <span className="text-[12px] text-[var(--text-tertiary)] mt-0.5 block">
                        {t.role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
