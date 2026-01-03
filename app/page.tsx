import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

