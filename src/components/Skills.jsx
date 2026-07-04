import Section from "./Section.jsx";
import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-layout">
        <div className="skills-categories">
          {skillGroups.map((g) => (
            <div key={g.cat}>
              <div className="skill-cat-label">{g.cat}</div>
              <div className="chip-row">
                {g.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
