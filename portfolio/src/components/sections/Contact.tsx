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

function ErrorIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
      <circle cx="8" cy="8" r="6" />
      <path d="M8 4v4M8 12h.01" />
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "140eb7d9-d2b9-444b-9ea2-860dd4ce1ff6",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

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
                {error && (
                  <div className="flex flex-col gap-3 p-4 rounded-[8px] bg-[rgba(255,59,48,0.1)] border border-[rgba(255,59,48,0.2)]" role="alert">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 rounded-full bg-[rgba(255,59,48,0.15)] border border-[rgba(255,59,48,0.3)] flex items-center justify-center mt-0.5">
                        <ErrorIcon />
                      </div>
                      <p className="text-[13px] font-light text-[rgba(255,255,255,0.8)] leading-[1.6]">
                        {error}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-tertiary)] uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[8px] px-4 py-3.5 text-[var(--text-primary)] font-light text-[14px] outline-none transition-[border-color,background] duration-200 focus:border-[var(--accent)] focus:bg-[var(--bg-3)] placeholder:text-[var(--text-tertiary)] font-sans disabled:opacity-50"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      disabled={loading}
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
                      className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[8px] px-4 py-3.5 text-[var(--text-primary)] font-light text-[14px] outline-none transition-[border-color,background] duration-200 focus:border-[var(--accent)] focus:bg-[var(--bg-3)] placeholder:text-[var(--text-tertiary)] font-sans disabled:opacity-50"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      disabled={loading}
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
                    className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[8px] px-4 py-3.5 text-[var(--text-primary)] font-light text-[14px] outline-none transition-[border-color,background] duration-200 focus:border-[var(--accent)] focus:bg-[var(--bg-3)] placeholder:text-[var(--text-tertiary)] font-sans disabled:opacity-50"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-tertiary)] uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[8px] px-4 py-3.5 text-[var(--text-primary)] font-light text-[14px] outline-none transition-[border-color,background] duration-200 focus:border-[var(--accent)] focus:bg-[var(--bg-3)] placeholder:text-[var(--text-tertiary)] font-sans min-h-[120px] resize-none disabled:opacity-50"
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={form.message}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>

                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  className="mt-2 self-start"
                  ariaLabel="Send message"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="inline-block animate-spin">◆</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <SendIcon />
                    </>
                  )}
                </Button>
              </div>
            )}
          </Reveal>

        </div>
      </div>
    </section>
  );
}
