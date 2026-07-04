import Section from "./Section.jsx";
import { jobs } from "../data.js";

export default function Experience() {
  return (
    <Section id="work" title="Experience" sub="Where these skills were put to work.">
      <div className="timeline">
        <div className="timeline-line" />
        <div className="timeline-items">
          {jobs.map((j) => (
            <div key={j.role + j.org} className="job">
              <div className="job-dot" />
              <div className="job-head">
                <div>
                  <div className="job-role">{j.role}</div>
                  <div className="job-org">{j.org}</div>
                </div>
                <div className="job-date">{j.date}</div>
              </div>
              <ul className="job-points">
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
