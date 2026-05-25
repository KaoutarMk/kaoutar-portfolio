import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Skills from "./components/Skills.jsx";
import EditorialBreak from "./components/EditorialBreak.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Reveal from "./components/Reveal.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden text-ink">
      <div className="animated-blush-wrapper">
        <div className="animated-blush blush-1" />
        <div className="animated-blush blush-2" />
        <div className="animated-blush blush-3" />
        <div className="animated-blush blush-4" />
        <div className="animated-blush blush-5" />
        <div className="animated-blush blush-6" />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 decorative-grid opacity-30" />
      <Navbar />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={0.1}>
          <About />
        </Reveal>
        <Reveal delay={0.2}>
          <Experience />
        </Reveal>
        <Reveal delay={0.3}>
          <Projects />
        </Reveal>
        <Reveal delay={0.4}>
          <Certifications />
        </Reveal>
        <Reveal delay={0.5}>
          <Skills />
        </Reveal>
        <EditorialBreak />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
