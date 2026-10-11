import Section from "./Section.jsx";
import { jobs } from "../data.js";

export default function Experience() {
  return (
    <Section
      id="work"
      title="Where I've put these skills to work"
      sub="Remote roles with teams in the Philippines, Australia, and the UK."
    >
      <div className="timeline">
        {jobs.map((j) => {
          const [company, location] = j.org.split(" — ");
          return (
            <div key={j.role + j.org} className="job">
              <div className="job-dot" />
              <div className="card job-card">
                <div className="job-head">
                  <div>
                    <div className="job-role">{j.role}</div>
                    <div className="job-org">
                      {company}
                      {location && <span className="job-location"> · {location}</span>}
                    </div>
                  </div>
                  <div className="job-date">{j.date}</div>
                </div>
                <ul className="job-points">
                  {j.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
