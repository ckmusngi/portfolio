import Section from "./Section.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="project-list">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-title"><a href="https:track-flow.cyrillkm.online" target="_blank">{p.title}</a></div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-stack">{p.stack}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
