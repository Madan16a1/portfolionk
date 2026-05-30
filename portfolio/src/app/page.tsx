import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-[var(--border)]" />
        <Work />
        <div className="h-px bg-[var(--border)]" />
        <Process />
        <div className="h-px bg-[var(--border)]" />
        <Skills />
        <div className="h-px bg-[var(--border)]" />
        <About />
        <div className="h-px bg-[var(--border)]" />
        <Testimonials />
        <div className="h-px bg-[var(--border)]" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
