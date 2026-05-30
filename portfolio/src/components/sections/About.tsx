import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { timeline, stats } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="py-[120px] bg-[var(--bg-2)]" aria-label="About Nawaraj Kafle">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — bio */}
          <Reveal>
            <SectionHeader
              label="About"
              title={<>The person<br />behind the <em style={{ fontStyle: "italic" }}>work</em></>}
            />
            <p className="mt-8 text-[17px] font-light leading-[1.8] text-[var(--text-secondary)]">
              I&apos;m Nawaraj Kafle, a React developer and UI/UX designer based in Nepal. Currently a student at 
              <strong className="text-[var(--text-primary)] font-normal">
                {" "}Itahari International College with 1 year of hands-on experience
              </strong>
              , I&apos;ve been building responsive, user-friendly web applications using modern technologies. I specialize in
              <strong className="text-[var(--text-primary)] font-normal">
                {" "}frontend development and UI/UX design
              </strong>
              , and I&apos;m passionate about turning ideas into beautifully crafted digital experiences.
              <br />
              <br />
              My approach combines technical expertise with creative thinking. I believe in building products
              that are not just visually appealing, but also highly functional and user-centered. Each project is an opportunity to learn, innovate, and create solutions that genuinely impact users.
            </p>

            {/* Stats */}
            <div
              className="grid grid-cols-2 mt-12 bg-[var(--border)]"
              style={{ gap: "1px", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}
              aria-label="Career statistics"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--bg-2)] p-7 transition-colors duration-300 hover:bg-[var(--surface)]"
                >
                  <div className="font-serif text-[40px] tracking-[-0.03em] text-[var(--text-primary)] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[12px] text-[var(--text-tertiary)] mt-1.5 font-light tracking-[0.04em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — timeline */}
          <Reveal delay={0.2} className="pt-4">
            <h3 className="font-mono text-[11px] tracking-[0.12em] text-[var(--text-tertiary)] uppercase mb-7 pb-3 border-b border-[var(--border)]">
              Career timeline
            </h3>
            <ol
              className="relative pl-0"
              aria-label="Career history"
              style={{ "--timeline-line": "1px" } as React.CSSProperties}
            >
              {/* Vertical line */}
              <div
                className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)]"
                aria-hidden="true"
              />

              {timeline.map((item) => (
                <li key={item.period} className="relative pl-6 pb-8 last:pb-0">
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute left-[-4px] top-[6px] w-[9px] h-[9px] rounded-full border",
                      item.isActive
                        ? "bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_0_3px_var(--accent-dim)]"
                        : "bg-[var(--bg-2)] border-[var(--border-2)]"
                    )}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-[10px] text-[var(--accent)] tracking-[0.1em] mb-1">
                    {item.period}
                  </p>
                  <p className="text-[14px] font-medium text-[var(--text-primary)] mb-0.5">
                    {item.role}
                  </p>
                  <p className="text-[13px] text-[var(--text-secondary)] font-light">
                    {item.company}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
