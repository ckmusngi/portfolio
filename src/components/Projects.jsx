import { ArrowUpRight } from "lucide-react";
import Section from "./Section.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      sub="Things I've designed, built, and shipped."
    >
      <div className="project-grid">
        {projects.map((p) => {
          const Wrapper = p.link ? "a" : "div";
          const linkProps = p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {};
          return (
            <Wrapper key={p.title} className={`card project-card${p.link ? " is-link" : ""}`} {...linkProps}>
              <div className="project-top">
                {p.status && <span className="badge">{p.status}</span>}
                {p.link && <ArrowUpRight className="project-arrow" size={18} />}
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="tag-row">
                {p.stack.split(/\s+[·.]\s+/).map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </Section>
  );
}
