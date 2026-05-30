import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nawaraj Kafle — React UI/UX Designer & Developer",
  description:
    "React developer and UI/UX designer building responsive, user-friendly web applications with modern technologies. Portfolio of projects and case studies.",
  keywords: [
    "React Developer",
    "UI/UX Designer",
    "Next.js",
    "Frontend Developer",
    "Web Designer",
    "Tailwind CSS",
    "Responsive Design",
  ],
  authors: [{ name: "Nawaraj Kafle" }],
  openGraph: {
    title: "Nawaraj Kafle — React UI/UX Designer & Developer",
    description:
      "Building interactive digital experiences. Portfolio of React projects, UI/UX designs, and case studies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawaraj Kafle — React UI/UX Designer & Developer",
    description: "Building interactive digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
