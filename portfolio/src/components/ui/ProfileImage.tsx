"use client";

import Image from "next/image";

interface ProfileImageProps {
  className?: string;
}

export function ProfileImage({ className = "" }: ProfileImageProps) {
  return (
    <div className={`relative w-full h-full rounded-full overflow-hidden border-2 border-[var(--border)] shadow-xl ${className}`}>
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full blur-2xl -z-10"
        style={{
          background: "radial-gradient(circle, rgba(79,142,247,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Image Container */}
      <div className="relative w-full h-full">
        <Image
          src="/images/profile.png"
          alt="Nawaraj Kafle — React Developer & Designer"
          fill
          className="object-cover"
          priority={true}
          quality={90}
          sizes="(max-width: 768px) 160px, (max-width: 1024px) 240px, (max-width: 1280px) 300px, 360px"
        />
      </div>
    </div>
  );
}
