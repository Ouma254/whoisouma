import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

/**
 * App.jsx
 * ---------------------------------------------------------------
 * Single-page portfolio — each section is an anchor target
 * (#home, #about, etc.) that Navbar links scroll to directly,
 * rather than using separate routes.
 * ---------------------------------------------------------------
 */
export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}