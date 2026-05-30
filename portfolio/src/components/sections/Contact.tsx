"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { contactLinks } from "@/lib/data";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 opacity-40" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
      <path d="M2 8h12M8 2l6 6-6 6" />
    </svg>
  );
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // In production: wire to API route or service (Resend, Formspree, etc.)
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[var(--surface)] border border-[var(--border)] rounded-[8px] px-4 py-3.5 text-[var(--text-primary)] font-light text-[14px] outline-none transition-[border-color,background] duration-200 focus:border-[var(--accent)] focus:bg-[var(--bg-3)] placeholder:text-[var(--text-tertiary)] font-sans";

  return (
    <section id="contact" className="py-[120px] bg-[var(--bg-2)]" aria-label="Contact">
      <div className="max-w-[1100px] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <Reveal>
            <SectionHeader
              label="Contact"
              title={<>Let&apos;s build<br />something <em style={{ fontStyle: "italic" }}>great</em></>}
            />
            <p className="mt-6 text-[17px] font-light text-[var(--text-secondary)] leading-[1.7] max-w-[380px]">
              As a passionate IT student and aspiring developer, I&apos;m always eager to learn, collaborate,
              and contribute to meaningful projects. Let&apos;s connect and build something great together.
            </p>

            <nav aria-label="Contact links">
              <ul className="mt-12">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between py-4 border-b border-[var(--border)] first:border-t first:border-[var(--border)] text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.2}>
            {submitted ? (
              <div className="flex flex-col gap-4 py-16 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-dim)] border border-[rgba(79,142,247,0.3)] flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
                    <path d="M2 8l4 4 8-8" />
                  </svg>
                </div>
                <h3 className="font-serif text-[26px] tracking-[-0.02em] text-[var(--text-primary)]">
                  Message sent.
                </h3>
                <p className="text-[15px] font-light text-[var(--text-secondary)] leading-[1.7]">
                  Thanks for reaching out — I&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4" role="form" aria-label="Contact form">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-tertiary)] uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={inputClass}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-tertiary)] uppercase">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={inputClass}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-tertiary)] uppercase">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={inputClass}
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-tertiary)] uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${inputClass} min-h-[120px] resize-none`}
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  className="mt-2 self-start"
                  ariaLabel="Send message"
                >
                  Send message
                  <SendIcon />
                </Button>
              </div>
            )}
          </Reveal>

        </div>
      </div>
    </section>
  );
}
