import { Plug, Layers, Workflow, CreditCard, Bug, Cloud } from "lucide-react";
import Section from "./Section.jsx";
import { strengths } from "../data.js";

const icons = {
  "System integrations": Plug,
  "End-to-end full-stack delivery": Layers,
  "Workflow automation": Workflow,
  "Payments & fintech": CreditCard,
  "Production troubleshooting": Bug,
  "Cloud deployment": Cloud,
};

export default function Strengths() {
  return (
    <Section
      id="strengths"
      title="Where I add the most value"
      sub="The skills clients and teams come back for."
    >
      <div className="strengths-grid">
        {strengths.map((s) => {
          const Icon = icons[s.title];
          return (
            <div key={s.title} className="card strength-card">
              {Icon && (
                <div className="icon-tile">
                  <Icon size={20} />
                </div>
              )}
              <div className="strength-title">{s.title}</div>
              <div className="strength-desc">{s.desc}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
