import Background from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Tools from "@/components/Tools";
import BottomNav from "@/components/BottomNav";
import { LocaleProvider } from "@/app/i18n";

export default function Home() {
  return (
    <LocaleProvider>
      <div className="relative min-h-screen overflow-x-clip">
      <Background />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Tools />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
      <BottomNav />
      </div>
    </LocaleProvider>
  );
}