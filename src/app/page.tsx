import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import CinematicVideo from "@/components/CinematicVideo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <LenisProvider>
      <main className="relative bg-cyber-bg text-cyber-text min-h-screen selection:bg-cyber-red selection:text-white">
        {/* Custom Cyber Cursor Spotlight & Ring */}
        <CustomCursor />

        {/* Interactive Cinematic Background Video Engine */}
        <CinematicVideo />

        {/* Floating Futuristic Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </div>
      </main>
    </LenisProvider>
  );
}
