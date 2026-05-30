interface ThumbnailProps {
  variant: "dashboard" | "design-system" | "mobile-app";
}

export function DashboardThumbnail() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0f1117]">
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,142,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Card */}
      <div
        className="absolute w-[60%] h-[65%] bg-[#1a1f2e] border border-[rgba(79,142,247,0.2)] rounded-[10px] overflow-hidden"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-46%, -48%)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
        }}
      >
        <div className="h-[3px] bg-[var(--accent)] w-full" />
        <div className="p-3.5">
          <div className="h-[6px] rounded-[3px] bg-white/10 mb-1.5" />
          <div className="h-[6px] rounded-[3px] bg-white/10 w-[55%] mb-4" />
          <div className="flex gap-2">
            <div className="flex-1 h-12 rounded-[6px] bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)]" />
            <div className="flex-1 h-12 rounded-[6px] bg-white/[0.03] border border-white/[0.06]" />
            <div className="flex-1 h-12 rounded-[6px] bg-white/[0.03] border border-white/[0.06]" />
          </div>
          <div className="h-[6px] rounded-[3px] bg-[rgba(79,142,247,0.4)] w-[35%] mt-3" />
        </div>
      </div>
    </div>
  );
}

export function DesignSystemThumbnail() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0d0f0e] flex items-center justify-center">
      {[180, 120, 60].map((size) => (
        <div
          key={size}
          className="absolute rounded-full border border-white/[0.06]"
          style={{ width: size, height: size }}
        />
      ))}
      <div
        className="absolute w-2 h-2 rounded-full bg-[var(--accent)]"
        style={{ top: "calc(50% - 80px)", left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
        style={{ bottom: "calc(50% - 80px)", left: "50%", transform: "translateX(-50%)" }}
      />
      <div className="relative flex flex-col items-center gap-1">
        <span className="font-sans text-[11px] text-white/25 tracking-[0.08em] uppercase">
          Design System
        </span>
        <span className="font-serif text-[22px] text-white/70 tracking-[-0.02em]">
          Bloom
        </span>
      </div>
    </div>
  );
}

export function MobileAppThumbnail() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0f0d12] flex items-center justify-center">
      {/* Phone frame */}
      <div
        className="absolute w-[45%] h-[80%] bg-[#1a1720] border border-white/10 rounded-[20px] overflow-hidden"
        style={{ left: "50%", top: "50%", transform: "translate(-46%, -50%)" }}
      >
        <div className="w-[30%] h-1 bg-white/[0.08] rounded-sm mx-auto mt-2.5" />
        <div className="p-3">
          {[
            { dotColor: "var(--accent)", lineOpacity: "0.1" },
            { dotColor: "rgba(255,255,255,0.15)", lineOpacity: "0.06" },
            { dotColor: "rgba(255,255,255,0.15)", lineOpacity: "0.06" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 h-7 rounded-[6px] bg-white/[0.05] px-2 mb-1.5"
            >
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: item.dotColor }}
              />
              <div
                className="h-1.5 rounded-sm flex-1"
                style={{ background: `rgba(255,255,255,${item.lineOpacity})` }}
              />
            </div>
          ))}
          <div className="mt-3 h-[50px] rounded-[8px] bg-[rgba(79,142,247,0.15)] border border-[rgba(79,142,247,0.25)]" />
        </div>
      </div>
      {/* Rating badge */}
      <div className="absolute right-[15%] top-[20%] bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] rounded-[8px] px-2.5 py-2 font-sans text-[10px] text-[rgba(79,142,247,0.8)]">
        4.8 ★
      </div>
    </div>
  );
}

export function ProjectThumbnail({ variant }: ThumbnailProps) {
  if (variant === "dashboard") return <DashboardThumbnail />;
  if (variant === "design-system") return <DesignSystemThumbnail />;
  return <MobileAppThumbnail />;
}
