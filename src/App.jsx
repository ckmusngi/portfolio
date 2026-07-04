import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Strengths from "./components/Strengths.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
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
