import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import DynamicBackground from "@/components/3d/DynamicBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <DynamicBackground />
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
