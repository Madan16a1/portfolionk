export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-10">
      <div className="max-w-[1100px] mx-auto px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.06em] text-[var(--text-tertiary)]">
          © {year} Nawaraj Kafle · Designed &amp; built with precision
        </p>
        <p className="text-xs text-[var(--text-tertiary)]">
          Itahari, Nepal · Open to opportunities
        </p>
      </div>
    </footer>
  );
}
