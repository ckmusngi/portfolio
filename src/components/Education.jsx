import Section from "./Section.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="edu-row">
        <div>
          <div className="edu-school">{education.school}</div>
          <div className="edu-degree">{education.degree}</div>
        </div>
        <div className="edu-date">{education.date}</div>
      </div>
    </Section>
  );
}
