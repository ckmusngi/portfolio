import { Mail, MapPin, ArrowRight } from "lucide-react";
import { contact } from "../data.js";

const stats = [
  { value: "6+", label: "Years shipping production apps" },
  { value: "6", label: "LatAm markets on my payment integrations" },
];

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Monogram avatar for the hero image slot.
 * To use a real photo, put profile.jpg in public/ and replace the
 * <span className="avatar-initials"> below with:
 * <img src="/profile.jpg" alt="Cyrill Kiel Musngi" />
 */
function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar-inner">
        <span className="avatar-initials">CK</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>
            I build web apps and make the{" "}
            <span className="gradient-text">systems behind them</span> work together.
          </h1>
          <p className="hero-lede">
            Software Engineer with 6+ years building web applications, backend services,
            and integrations with Laravel, Node.js, React, AWS, and GCP — connecting SaaS platforms
            and payment gateways through REST APIs and webhooks.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo("#projects")}>
              View my work <ArrowRight size={16} />
            </button>
            <a className="btn btn-ghost" href={`mailto:${contact.email}`}>
              <Mail size={16} /> Get in touch
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={14} /> {contact.location}
          </div>
        </div>
        <Avatar />
      </div>

      <div className="stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
