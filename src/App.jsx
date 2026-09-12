import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Journey from "./sections/Journey";
import Exploring from "./sections/Exploring";
import Statement from "./sections/Statement";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative bg-base text-ink min-h-screen">
      <div className="grain-overlay bg-grain" />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-base-100 focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Journey />
        <Exploring />
        <Statement />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
