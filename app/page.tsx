import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";

import Contact from "@/components/Contact";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen noise-overlay">
      <CursorSpotlight />
      <Navbar />
      <Hero />

      {/* Tech stack marquee between hero and about */}
      <TechMarquee />

      <div className="section-divider max-w-6xl mx-auto" />
      <About />

      <div className="section-divider max-w-6xl mx-auto" />
      <Experience />

      <div className="section-divider max-w-6xl mx-auto" />
      <Projects />

      <div className="section-divider max-w-6xl mx-auto" />
      <Skills />

      <div className="section-divider max-w-6xl mx-auto" />
      <Certifications />

      <div className="section-divider max-w-6xl mx-auto" />
      <Contact />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-zinc-600">
            &copy; 2026 Dhanesh Rao. All rights reserved.
          </span>
          <span className="text-sm text-zinc-700">
            Built with Next.js &middot; Tailwind CSS &middot; Framer Motion
          </span>
        </div>
      </footer>
    </main>
  );
}
