import { GraduationCap } from "lucide-react";
import Section from "./Section.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="card edu-card">
        <div className="icon-tile">
          <GraduationCap size={20} />
        </div>
        <div className="edu-body">
          <div className="edu-degree">{education.degree}</div>
          <div className="edu-school">{education.school}</div>
        </div>
        <div className="job-date">{education.date}</div>
      </div>
    </Section>
  );
}
