import {
  SiLaravel, SiNodedotjs, SiDjango, SiReact, SiJavascript, SiJquery, SiTailwindcss,
  SiMysql, SiPostgresql, SiXero, SiHubspot, SiMyob, SiGooglemaps, SiStripe,
  SiGooglecloud, SiDocker, SiNginx, SiGit, SiSocketdotio,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  Server, Monitor, Database, Plug, CreditCard, Cloud,
  Network, Webhook, RefreshCw, LayoutGrid, Landmark, Wallet, Banknote,
} from "lucide-react";
import Section from "./Section.jsx";
import { skillGroups } from "../data.js";

const categoryIcons = {
  Backend: Server,
  Frontend: Monitor,
  Databases: Database,
  Integrations: Plug,
  Payments: CreditCard,
  "Cloud & DevOps": Cloud,
};

// [icon, brand color] per skill; no color = follows the theme (generic icons, near-black logos)
const skillIcons = {
  "PHP (Laravel)": [SiLaravel, "#FF2D20"],
  "Node.js (Express)": [SiNodedotjs, "#5FA04E"],
  "Python (Django)": [SiDjango],
  "REST APIs": [Network],
  Webhooks: [Webhook],
  WebSockets: [SiSocketdotio],
  "React.js": [SiReact, "#61DAFB"],
  "JavaScript (ES6+)": [SiJavascript, "#D4B000"],
  jQuery: [SiJquery, "#0769AD"],
  AJAX: [RefreshCw],
  "Tailwind CSS": [SiTailwindcss, "#06B6D4"],
  MySQL: [SiMysql, "#4479A1"],
  PostgreSQL: [SiPostgresql, "#4169E1"],
  Xero: [SiXero, "#13B5EA"],
  HubSpot: [SiHubspot, "#FF7A59"],
  "Monday.com": [LayoutGrid, "#FF3D57"],
  MYOB: [SiMyob, "#6100A5"],
  "Google Maps API": [SiGooglemaps, "#4285F4"],
  Stripe: [SiStripe, "#635BFF"],
  D24: [Landmark],
  Prontopaga: [Wallet],
  Dragontech88: [Banknote],
  AWS: [FaAws, "#FF9900"],
  "Google Cloud Platform": [SiGooglecloud, "#4285F4"],
  Docker: [SiDocker, "#2496ED"],
  Nginx: [SiNginx, "#009639"],
  Git: [SiGit, "#F05032"],
};

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Tools I work with"
      sub="The stack behind the apps, integrations, and payment flows I ship."
    >
      <div className="skills-grid">
        {skillGroups.map((g, i) => {
          const CatIcon = categoryIcons[g.cat];
          return (
            <div key={g.cat} className="card skill-card" style={{ "--i": i }}>
              <div className="skill-cat-label">
                {CatIcon && (
                  <span className="icon-tile icon-tile-sm">
                    <CatIcon size={16} />
                  </span>
                )}
                {g.cat}
              </div>
              <div className="chip-row">
                {g.items.map((item, j) => {
                  const [Icon, color] = skillIcons[item] ?? [];
                  return (
                    <span key={item} className="chip" style={{ "--j": j }}>
                      {Icon && <Icon size={14} color={color} aria-hidden="true" />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
