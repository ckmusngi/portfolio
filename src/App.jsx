import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Strengths from "./components/Strengths.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

// Fade sections in as they scroll into view
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <div>
      <Header />
      <div className="container">
        <Hero />
        <Strengths />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
