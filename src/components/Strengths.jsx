import Section from "./Section.jsx";
import { strengths } from "../data.js";

export default function Strengths() {
  return (
    <Section
      id="strengths"
      title="Where I add the most value"
      sub="The skills clients and teams come back for."
    >
      <div className="strengths-grid">
        {strengths.map((s) => (
          <div key={s.title} className="strength-card">
            <div className="strength-title">{s.title}</div>
            <div className="strength-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
